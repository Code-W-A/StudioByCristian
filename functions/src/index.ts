import { getAuth } from "firebase-admin/auth"
import { FieldValue, Timestamp } from "firebase-admin/firestore"
import { onCall, HttpsError } from "firebase-functions/v2/https"
import { onDocumentCreated } from "firebase-functions/v2/firestore"
import { onSchedule } from "firebase-functions/v2/scheduler"
import { defineSecret } from "firebase-functions/params"
import * as logger from "firebase-functions/logger"
import nodemailer from "nodemailer"
import { DateTime } from "luxon"
import { createHash } from "node:crypto"
import { z } from "zod"
import { callableOptions, db, defaultSettings, ORG_ID, org, REGION, bucket } from "./lib/config.js"
import { requireRole, requireUser, createActionToken, verifyActionToken } from "./lib/auth.js"
import { bookingSchema, settingsSchema, statuses, transitionSchema, type BookingStatus } from "./lib/schemas.js"
import { generateSlots, getBookingWindow, isSlotWithinSchedule, slotKey, type AvailabilitySettings } from "./lib/availability.js"
import { queueEmail } from "./lib/email-queue.js"
import { renderEmail, type EmailTemplate } from "./lib/email.js"

const SMTP_HOST = defineSecret("SMTP_HOST")
const SMTP_PORT = defineSecret("SMTP_PORT")
const SMTP_USER = defineSecret("SMTP_USER")
const SMTP_PASSWORD = defineSecret("SMTP_PASSWORD")
const SMTP_FROM = defineSecret("SMTP_FROM")
const BOOKING_LINK_SECRET = defineSecret("BOOKING_LINK_SECRET")
const PUBLIC_SITE_URL = defineSecret("PUBLIC_SITE_URL")
const emailSecrets = [SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM] as const

const transitions: Record<BookingStatus, BookingStatus[]> = {
  pending: ["proposed", "confirmed", "cancelled", "expired"], proposed: ["pending", "confirmed", "cancelled", "expired"],
  confirmed: ["proposed", "cancelled", "completed", "no_show"], cancelled: [], expired: [], completed: [], no_show: [],
}

function clean(value: string) { return value.trim().replace(/[<>]/g, "") }
function emailHash(email: string) { return createHash("sha256").update(email.trim().toLowerCase()).digest("hex") }
function nowTimestamp() { return Timestamp.now() }

async function loadSettings() {
  const snapshot = await org.collection("settings").doc("booking").get()
  const parsed = settingsSchema.safeParse(snapshot.exists ? snapshot.data() : defaultSettings)
  return parsed.success ? parsed.data : settingsSchema.parse(defaultSettings)
}

async function addActivity(type: string, actorId: string, entityId: string, details: Record<string, unknown> = {}) {
  await org.collection("activities").add({ type, actorId, entityId, details, createdAt: FieldValue.serverTimestamp() })
}

export const getPublicAvailability = onCall(callableOptions, async (request) => {
  const startedAt = Date.now()
  const traceId = request.rawRequest.get("x-cloud-trace-context")?.split("/")[0] ?? "unavailable"
  const requestedFrom = typeof request.data?.from === "string" ? request.data.from : "invalid"
  const requestedTo = typeof request.data?.to === "string" ? request.data.to : "invalid"

  logger.info("availability.request.received", {
    traceId,
    from: requestedFrom,
    to: requestedTo,
    hasAuth: Boolean(request.auth),
  })

  try {
    const input = z.object({ from: z.string().date(), to: z.string().date(), appointmentTypeId: z.string().default("project-consultation") }).parse(request.data)
    const settings = await loadSettings()
    const availabilityNow = DateTime.utc()
    const from = DateTime.fromISO(input.from, { zone: settings.timeZone }).startOf("day").toUTC().toJSDate()
    const to = DateTime.fromISO(input.to, { zone: settings.timeZone }).endOf("day").toUTC().toJSDate()
    const appointments = await org.collection("appointments").where("startsAt", ">=", Timestamp.fromDate(from)).where("startsAt", "<=", Timestamp.fromDate(to)).get()
    const occupied = new Set<string>()
    const now = new Date()
    for (const appointment of appointments.docs) {
      const data = appointment.data()
      const holding = data.status === "confirmed" || data.status === "proposed" || (data.status === "pending" && data.holdExpiresAt?.toDate() > now)
      if (holding) occupied.add(data.startsAt.toDate().toISOString())
    }
    const slots = generateSlots(settings as AvailabilitySettings, input.from, input.to, occupied, availabilityNow)
    logger.info("availability.request.completed", {
      traceId,
      from: input.from,
      to: input.to,
      appointmentCount: appointments.size,
      occupiedCount: occupied.size,
      slotCount: slots.length,
      durationMs: Date.now() - startedAt,
    })
    return {
      timeZone: settings.timeZone,
      durationMinutes: settings.durationMinutes,
      bookingWindow: getBookingWindow(settings as AvailabilitySettings, availabilityNow),
      slots,
    }
  } catch (error) {
    const loggedError = error as { name?: unknown; message?: unknown; code?: unknown }
    logger.error("availability.request.failed", {
      traceId,
      from: requestedFrom,
      to: requestedTo,
      durationMs: Date.now() - startedAt,
      name: typeof loggedError?.name === "string" ? loggedError.name : "unknown",
      code: typeof loggedError?.code === "string" ? loggedError.code : "unknown",
      message: typeof loggedError?.message === "string" ? loggedError.message : "Unknown availability error",
    })
    throw error
  }
})

export const createBookingDraft = onCall(callableOptions, async (request) => {
  const auth = requireUser(request)
  const { draftId } = z.object({ draftId: z.string().uuid() }).parse(request.data)
  await org.collection("bookingDrafts").doc(draftId).set({
    ownerUid: auth.uid,
    status: "draft",
    expiresAt: Timestamp.fromMillis(Date.now() + 24 * 3_600_000),
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true })
  return { draftId }
})

export const submitBooking = onCall({ ...callableOptions, timeoutSeconds: 60 }, async (request) => {
  const auth = requireUser(request)
  const parsed = bookingSchema.safeParse(request.data)
  if (!parsed.success) throw new HttpsError("invalid-argument", parsed.error.issues[0]?.message ?? "Invalid booking request.")
  const input = parsed.data
  const expectedPrefix = `organizations/${ORG_ID}/booking-drafts/${auth.uid}/${input.draftId}/`
  if (input.files.some((file) => !file.path.startsWith(expectedPrefix))) throw new HttpsError("permission-denied", "An upload does not belong to this draft.")

  for (const upload of input.files) {
    const [metadata] = await bucket.file(upload.path).getMetadata().catch(() => { throw new HttpsError("failed-precondition", `Upload ${upload.name} was not found.`) })
    if (Number(metadata.size) !== upload.size || Number(metadata.size) > 20 * 1024 * 1024) throw new HttpsError("invalid-argument", `Upload ${upload.name} is invalid.`)
  }

  const settings = await loadSettings()
  if (!isSlotWithinSchedule(input.startsAt, settings as AvailabilitySettings)) throw new HttpsError("failed-precondition", "This time is no longer available.")
  const startsAt = Timestamp.fromDate(new Date(input.startsAt))
  const endsAt = Timestamp.fromMillis(startsAt.toMillis() + settings.durationMinutes * 60_000)
  const holdExpiresAt = Timestamp.fromMillis(Date.now() + settings.pendingHoldHours * 3_600_000)
  const retentionExpiresAt = Timestamp.fromDate(DateTime.utc().plus({ months: 24 }).toJSDate())
  const lockRef = org.collection("slotLocks").doc(slotKey(input.appointmentTypeId, new Date(input.startsAt).toISOString()))
  const appointmentRef = org.collection("appointments").doc()
  const clientRef = org.collection("clients").doc(emailHash(input.email))
  const draftRef = org.collection("bookingDrafts").doc(input.draftId)

  await db.runTransaction(async (transaction) => {
    const lock = await transaction.get(lockRef)
    if (lock.exists) {
      const lockData = lock.data()!
      const stillActive = lockData.status === "confirmed" || lockData.status === "proposed" || lockData.expiresAt?.toMillis() > Date.now()
      if (stillActive) throw new HttpsError("already-exists", "This time was just requested by someone else.")
    }
    transaction.set(clientRef, {
      name: clean(input.name), email: input.email.trim().toLowerCase(), phone: clean(input.phone),
      location: clean(input.location), updatedAt: FieldValue.serverTimestamp(), createdAt: FieldValue.serverTimestamp(),
      retentionExpiresAt,
    }, { merge: true })
    transaction.create(appointmentRef, {
      clientId: clientRef.id, service: clean(input.service), mode: input.mode, appointmentTypeId: input.appointmentTypeId,
      startsAt, endsAt, timeZone: settings.timeZone, status: "pending", holdExpiresAt, retentionExpiresAt,
      project: { location: clean(input.location), description: clean(input.description), budget: clean(input.budget), timeline: clean(input.timeline) },
      files: input.files, legal: input.legal, publicOwnerUid: auth.uid, reminderSentAt: null,
      createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp(),
    })
    transaction.set(lockRef, { appointmentId: appointmentRef.id, status: "pending", expiresAt: holdExpiresAt, startsAt, updatedAt: FieldValue.serverTimestamp() })
    transaction.set(draftRef, { ownerUid: auth.uid, status: "submitted", appointmentId: appointmentRef.id, files: input.files, expiresAt: retentionExpiresAt, updatedAt: FieldValue.serverTimestamp(), createdAt: FieldValue.serverTimestamp() }, { merge: true })
  })

  await Promise.all([
    queueEmail(`${appointmentRef.id}-request-client`, input.email, "request_received", { name: input.name, startsAt: input.startsAt }),
    queueEmail(`${appointmentRef.id}-request-admin`, "office@studiobycristian.com", "admin_notification", { name: input.name, startsAt: input.startsAt, service: input.service }),
    addActivity("booking.created", auth.uid, appointmentRef.id, { status: "pending" }),
  ])
  return { appointmentId: appointmentRef.id, status: "pending", holdExpiresAt: holdExpiresAt.toDate().toISOString() }
})

export const updateBookingStatus = onCall({ ...callableOptions, secrets: [BOOKING_LINK_SECRET, PUBLIC_SITE_URL] }, async (request) => {
  const auth = requireRole(request, ["admin", "staff"])
  const input = transitionSchema.parse(request.data)
  const appointmentRef = org.collection("appointments").doc(input.appointmentId)
  const proposalSettings = input.status === "proposed" ? await loadSettings() : null
  let clientEmail = ""; let clientName = ""; let effectiveStart = ""; let emailTemplate: EmailTemplate | null = null

  await db.runTransaction(async (transaction) => {
    const appointmentSnapshot = await transaction.get(appointmentRef)
    if (!appointmentSnapshot.exists) throw new HttpsError("not-found", "Appointment not found.")
    const appointment = appointmentSnapshot.data()!
    const from = appointment.status as BookingStatus
    if (!statuses.includes(input.status) || !transitions[from].includes(input.status)) throw new HttpsError("failed-precondition", `Cannot change ${from} to ${input.status}.`)
    const clientSnapshot = await transaction.get(org.collection("clients").doc(appointment.clientId))
    clientEmail = clientSnapshot.data()?.email ?? ""; clientName = clientSnapshot.data()?.name ?? "Client"
    const currentIso = appointment.startsAt.toDate().toISOString()
    const currentLock = org.collection("slotLocks").doc(slotKey(appointment.appointmentTypeId, currentIso))
    const update: Record<string, unknown> = { status: input.status, statusNote: input.note ?? null, updatedAt: FieldValue.serverTimestamp(), updatedBy: auth.uid }

    if (input.status === "proposed") {
      if (!input.proposedStartsAt) throw new HttpsError("invalid-argument", "A proposed time is required.")
      const settings = proposalSettings!
      if (!isSlotWithinSchedule(input.proposedStartsAt, settings as AvailabilitySettings)) throw new HttpsError("failed-precondition", "The proposed time is outside availability.")
      const nextIso = new Date(input.proposedStartsAt).toISOString()
      const nextLock = org.collection("slotLocks").doc(slotKey(appointment.appointmentTypeId, nextIso))
      const nextLockSnapshot = await transaction.get(nextLock)
      if (nextLockSnapshot.exists && nextLockSnapshot.data()?.appointmentId !== input.appointmentId) throw new HttpsError("already-exists", "The proposed time is occupied.")
      const startsAt = Timestamp.fromDate(new Date(nextIso))
      update.previousStartsAt = appointment.startsAt; update.startsAt = startsAt
      update.endsAt = Timestamp.fromMillis(startsAt.toMillis() + settings.durationMinutes * 60_000)
      update.proposalExpiresAt = Timestamp.fromMillis(Date.now() + settings.pendingHoldHours * 3_600_000)
      update.holdExpiresAt = update.proposalExpiresAt
      update.proposalNonce = createHash("sha256").update(`${Date.now()}-${input.appointmentId}`).digest("hex").slice(0, 24)
      transaction.delete(currentLock)
      transaction.set(nextLock, { appointmentId: input.appointmentId, status: "proposed", expiresAt: update.proposalExpiresAt, startsAt, updatedAt: FieldValue.serverTimestamp() })
      effectiveStart = nextIso; emailTemplate = "alternative_proposed"
    } else {
      effectiveStart = currentIso
      if (input.status === "confirmed") {
        transaction.set(currentLock, { appointmentId: input.appointmentId, status: "confirmed", expiresAt: null, startsAt: appointment.startsAt, updatedAt: FieldValue.serverTimestamp() })
        emailTemplate = "confirmed"
      } else if (["cancelled", "expired"].includes(input.status)) {
        transaction.delete(currentLock); emailTemplate = input.status as "cancelled" | "expired"
      }
    }
    transaction.update(appointmentRef, update)
  })

  const snapshot = await appointmentRef.get()
  const appointment = snapshot.data()!
  if (emailTemplate && clientEmail) {
    const siteUrl = PUBLIC_SITE_URL.value().replace(/\/$/, "")
    const data: Record<string, string> = { name: clientName, startsAt: effectiveStart }
    if (emailTemplate === "alternative_proposed") {
      const expiry = appointment.proposalExpiresAt.toMillis()
      const basePayload = `${input.appointmentId}|${appointment.proposalNonce}|${expiry}`
      data.actionUrl = `${siteUrl}/booking/respond?token=${encodeURIComponent(createActionToken(`${basePayload}|accept`, BOOKING_LINK_SECRET.value()))}`
      data.actionLabel = "Accept proposed time"
      data.secondaryUrl = `${siteUrl}/booking/respond?token=${encodeURIComponent(createActionToken(`${basePayload}|decline`, BOOKING_LINK_SECRET.value()))}`
      data.secondaryLabel = "Decline proposed time"
    }
    await queueEmail(`${input.appointmentId}-${input.status}-${Date.now()}`, clientEmail, emailTemplate, data)
  }
  await addActivity(`booking.${input.status}`, auth.uid, input.appointmentId, { note: input.note ?? null })
  return { ok: true }
})

export const respondToBooking = onCall({ ...callableOptions, secrets: [BOOKING_LINK_SECRET] }, async (request) => {
  const input = z.object({ token: z.string().min(20) }).parse(request.data)
  const payload = verifyActionToken(input.token, BOOKING_LINK_SECRET.value())
  if (!payload) throw new HttpsError("permission-denied", "This link is invalid.")
  const [appointmentId, nonce, expiryText, action] = payload.split("|")
  if (!appointmentId || !nonce || Date.now() > Number(expiryText) || !["accept", "decline", "cancel"].includes(action)) throw new HttpsError("deadline-exceeded", "This link has expired.")
  const appointmentRef = org.collection("appointments").doc(appointmentId)
  let resultStatus = ""
  await db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(appointmentRef)
    if (!snapshot.exists) throw new HttpsError("not-found", "Appointment not found.")
    const appointment = snapshot.data()!
    if (appointment.proposalNonce !== nonce || appointment.status !== "proposed") throw new HttpsError("failed-precondition", "This response was already processed.")
    const lock = org.collection("slotLocks").doc(slotKey(appointment.appointmentTypeId, appointment.startsAt.toDate().toISOString()))
    if (action === "accept") {
      resultStatus = "confirmed"
      transaction.update(appointmentRef, { status: "confirmed", proposalRespondedAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() })
      transaction.set(lock, { appointmentId, status: "confirmed", expiresAt: null, startsAt: appointment.startsAt, updatedAt: FieldValue.serverTimestamp() })
    } else {
      resultStatus = "cancelled"
      transaction.update(appointmentRef, { status: "cancelled", proposalRespondedAt: FieldValue.serverTimestamp(), proposalResponse: "declined", updatedAt: FieldValue.serverTimestamp() })
      transaction.delete(lock)
    }
  })
  const appointment = (await appointmentRef.get()).data()!
  const client = (await org.collection("clients").doc(appointment.clientId).get()).data()!
  const template = action === "accept" ? "alternative_accepted" : "alternative_declined"
  await Promise.all([
    queueEmail(`${appointmentId}-proposal-response-${action}`, "office@studiobycristian.com", template, { name: client.name, startsAt: appointment.startsAt.toDate().toISOString() }),
    addActivity(`booking.proposal_${action}ed`, "client", appointmentId),
  ])
  return { status: resultStatus }
})

export const saveBookingSettings = onCall(callableOptions, async (request) => {
  const auth = requireRole(request, ["admin"])
  const settings = settingsSchema.parse(request.data)
  await org.collection("settings").doc("booking").set({ ...settings, updatedAt: FieldValue.serverTimestamp(), updatedBy: auth.uid })
  await addActivity("settings.booking_updated", auth.uid, "booking")
  return { ok: true }
})

export const addClientNote = onCall(callableOptions, async (request) => {
  const auth = requireRole(request, ["admin", "staff"])
  const input = z.object({ clientId: z.string().min(1), text: z.string().min(1).max(5000) }).parse(request.data)
  const reference = await org.collection("clients").doc(input.clientId).collection("notes").add({ text: clean(input.text), authorId: auth.uid, createdAt: FieldValue.serverTimestamp() })
  await addActivity("client.note_added", auth.uid, input.clientId)
  return { id: reference.id }
})

export const inviteMember = onCall({ ...callableOptions, secrets: [PUBLIC_SITE_URL] }, async (request) => {
  const auth = requireRole(request, ["admin"])
  const input = z.object({ email: z.string().email(), role: z.enum(["admin", "staff"]), displayName: z.string().min(2).max(120) }).parse(request.data)
  let user
  try { user = await getAuth().getUserByEmail(input.email) } catch { user = await getAuth().createUser({ email: input.email, displayName: clean(input.displayName) }) }
  await getAuth().setCustomUserClaims(user.uid, { orgId: ORG_ID, role: input.role })
  await org.collection("members").doc(user.uid).set({ email: input.email.toLowerCase(), displayName: clean(input.displayName), role: input.role, status: "invited", invitedBy: auth.uid, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true })
  const resetLink = await getAuth().generatePasswordResetLink(input.email, { url: `${PUBLIC_SITE_URL.value().replace(/\/$/, "")}/admin/login` })
  await Promise.all([queueEmail(`member-invite-${user.uid}-${Date.now()}`, input.email, "team_invite", { role: input.role, actionUrl: resetLink, actionLabel: "Set password" }), addActivity("team.member_invited", auth.uid, user.uid, { role: input.role })])
  return { uid: user.uid }
})

export const updateMember = onCall(callableOptions, async (request) => {
  const auth = requireRole(request, ["admin"])
  const input = z.object({ uid: z.string().min(1), role: z.enum(["admin", "staff"]), disabled: z.boolean() }).parse(request.data)
  if (input.uid === auth.uid && input.disabled) throw new HttpsError("failed-precondition", "You cannot disable your own account.")
  await Promise.all([
    getAuth().setCustomUserClaims(input.uid, { orgId: ORG_ID, role: input.role }),
    getAuth().updateUser(input.uid, { disabled: input.disabled }),
    org.collection("members").doc(input.uid).set({ role: input.role, status: input.disabled ? "disabled" : "active", updatedAt: FieldValue.serverTimestamp(), updatedBy: auth.uid }, { merge: true }),
  ])
  await addActivity("team.member_updated", auth.uid, input.uid, { role: input.role, disabled: input.disabled })
  return { ok: true }
})

export const exportClientData = onCall(callableOptions, async (request) => {
  requireRole(request, ["admin"])
  const { clientId } = z.object({ clientId: z.string().min(1) }).parse(request.data)
  const clientRef = org.collection("clients").doc(clientId)
  const [client, notes, appointments] = await Promise.all([clientRef.get(), clientRef.collection("notes").get(), org.collection("appointments").where("clientId", "==", clientId).get()])
  if (!client.exists) throw new HttpsError("not-found", "Client not found.")
  return { exportedAt: new Date().toISOString(), client: { id: client.id, ...client.data() }, notes: notes.docs.map((doc) => ({ id: doc.id, ...doc.data() })), appointments: appointments.docs.map((doc) => ({ id: doc.id, ...doc.data() })) }
})

export const deleteClientData = onCall(callableOptions, async (request) => {
  const auth = requireRole(request, ["admin"])
  const { clientId } = z.object({ clientId: z.string().min(1) }).parse(request.data)
  const appointments = await org.collection("appointments").where("clientId", "==", clientId).get()
  const batch = db.batch()
  for (const appointment of appointments.docs) {
    const data = appointment.data()
    for (const file of data.files ?? []) await bucket.file(file.path).delete().catch(() => undefined)
    if (data.appointmentTypeId && data.startsAt) batch.delete(org.collection("slotLocks").doc(slotKey(data.appointmentTypeId, data.startsAt.toDate().toISOString())))
    if (data.publicOwnerUid && data.files?.length) batch.delete(org.collection("bookingDrafts").doc(data.files[0].path.split("/")[4] ?? "missing"))
    batch.delete(appointment.ref)
  }
  const notes = await org.collection("clients").doc(clientId).collection("notes").get()
  for (const note of notes.docs) batch.delete(note.ref)
  batch.delete(org.collection("clients").doc(clientId))
  await batch.commit()
  await bucket.deleteFiles({ prefix: `organizations/${ORG_ID}/clients/${clientId}/` }).catch((error) => logger.warn("No client files to delete", error))
  await addActivity("client.deleted", auth.uid, clientId)
  return { ok: true }
})

async function processEmailJob(documentId: string) {
  const reference = org.collection("emailJobs").doc(documentId)
  let job: FirebaseFirestore.DocumentData | undefined
  await db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(reference)
    if (!snapshot.exists || snapshot.data()?.status === "sent" || snapshot.data()?.status === "processing") return
    job = snapshot.data()
    transaction.update(reference, { status: "processing", attempts: FieldValue.increment(1), updatedAt: FieldValue.serverTimestamp() })
  })
  if (!job) return
  try {
    const transport = nodemailer.createTransport({ host: SMTP_HOST.value(), port: Number(SMTP_PORT.value()), secure: Number(SMTP_PORT.value()) === 465, auth: { user: SMTP_USER.value(), pass: SMTP_PASSWORD.value() } })
    const rendered = renderEmail(job.template as EmailTemplate, job.data)
    const info = await transport.sendMail({ from: SMTP_FROM.value(), to: job.to, subject: rendered.subject, text: rendered.text, html: rendered.html, headers: { "X-Entity-Ref-ID": documentId } })
    await reference.update({ status: "sent", sentAt: FieldValue.serverTimestamp(), messageId: info.messageId, updatedAt: FieldValue.serverTimestamp(), lastError: FieldValue.delete() })
  } catch (error) {
    const attempts = Number(job.attempts ?? 0) + 1
    const terminal = attempts >= 5
    await reference.update({ status: terminal ? "failed" : "queued", lastError: error instanceof Error ? error.message.slice(0, 1000) : "Unknown SMTP error", nextAttemptAt: Timestamp.fromMillis(Date.now() + Math.min(360, 2 ** attempts * 5) * 60_000), updatedAt: FieldValue.serverTimestamp() })
    logger.error("Email delivery failed", { documentId, attempts, error })
  }
}

export const sendQueuedEmail = onDocumentCreated({ document: `organizations/${ORG_ID}/emailJobs/{jobId}`, region: REGION, secrets: [...emailSecrets] }, async (event) => processEmailJob(event.params.jobId))

export const bookingMaintenance = onSchedule({ schedule: "every 15 minutes", timeZone: "Europe/Amsterdam", region: REGION, secrets: [...emailSecrets] }, async () => {
  const now = nowTimestamp()
  const [expired, reminders, retryJobs, abandonedDrafts, retainedClients] = await Promise.all([
    org.collection("appointments").where("status", "in", ["pending", "proposed"]).where("holdExpiresAt", "<=", now).limit(100).get(),
    org.collection("appointments").where("status", "==", "confirmed").where("startsAt", ">", now).where("startsAt", "<=", Timestamp.fromMillis(Date.now() + 24 * 3_600_000)).limit(100).get(),
    org.collection("emailJobs").where("status", "==", "queued").where("nextAttemptAt", "<=", now).limit(50).get(),
    org.collection("bookingDrafts").where("status", "==", "draft").where("expiresAt", "<=", now).limit(100).get(),
    org.collection("clients").where("retentionExpiresAt", "<=", now).limit(100).get(),
  ])

  for (const document of expired.docs) {
    const appointment = document.data()
    await document.ref.update({ status: "expired", updatedAt: FieldValue.serverTimestamp() })
    await org.collection("slotLocks").doc(slotKey(appointment.appointmentTypeId, appointment.startsAt.toDate().toISOString())).delete().catch(() => undefined)
    const client = (await org.collection("clients").doc(appointment.clientId).get()).data()
    if (client?.email) await queueEmail(`${document.id}-expired`, client.email, "expired", { name: client.name, startsAt: appointment.startsAt.toDate().toISOString() })
  }
  for (const document of reminders.docs) {
    const appointment = document.data()
    if (appointment.reminderSentAt) continue
    const client = (await org.collection("clients").doc(appointment.clientId).get()).data()
    if (client?.email) await queueEmail(`${document.id}-reminder`, client.email, "reminder", { name: client.name, startsAt: appointment.startsAt.toDate().toISOString() })
    await document.ref.update({ reminderSentAt: FieldValue.serverTimestamp() })
  }
  for (const document of retryJobs.docs) await processEmailJob(document.id)
  for (const document of abandonedDrafts.docs) {
    const draft = document.data()
    await bucket.deleteFiles({ prefix: `organizations/${ORG_ID}/booking-drafts/${draft.ownerUid}/${document.id}/` }).catch(() => undefined)
    await document.ref.delete()
  }
  for (const client of retainedClients.docs) {
    const appointments = await org.collection("appointments").where("clientId", "==", client.id).get()
    const batch = db.batch()
    for (const appointment of appointments.docs) {
      const data = appointment.data()
      for (const file of data.files ?? []) await bucket.file(file.path).delete().catch(() => undefined)
      if (data.appointmentTypeId && data.startsAt) batch.delete(org.collection("slotLocks").doc(slotKey(data.appointmentTypeId, data.startsAt.toDate().toISOString())))
      batch.delete(appointment.ref)
    }
    batch.delete(client.ref); await batch.commit()
    await bucket.deleteFiles({ prefix: `organizations/${ORG_ID}/clients/${client.id}/` }).catch(() => undefined)
  }
})
