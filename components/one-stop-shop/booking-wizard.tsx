"use client"

import Link from "next/link"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { signInAnonymously } from "firebase/auth"
import { ref, uploadBytesResumable } from "firebase/storage"
import { ArrowLeft, ArrowRight, Check, FileUp, Loader2 } from "lucide-react"
import { callFirebase } from "@/lib/firebase/callables"
import { firebaseAuth, firebaseStorage, isFirebaseConfigured } from "@/lib/firebase/client"
import { BookingCalendar } from "@/components/one-stop-shop/booking-calendar"
import {
  calendarDateFromIsoDate,
  dateKeyInTimeZone,
  fallbackBookingWindow,
  formatSlotTime,
  groupSlotsByDate,
  monthKeyFromIsoDate,
  monthRange,
  startOfCalendarMonth,
  type AvailabilityResponse,
  type AvailabilitySlot,
} from "@/lib/one-stop-shop/availability-calendar"
import { ALLOWED_UPLOAD_EXTENSIONS, BOOKING_TIME_ZONE, DEFAULT_BOOKING_SETTINGS, LEGAL_VERSIONS, MAX_UPLOAD_FILES, MAX_UPLOAD_FILE_BYTES, MAX_UPLOAD_TOTAL_BYTES, ORGANIZATION_ID, PROJECT_SERVICES } from "@/lib/one-stop-shop/constants"

type UploadedFile = { name: string; path: string; size: number; contentType: string }
type AvailabilityStatus = "idle" | "loading" | "ready" | "empty" | "error"
type FormState = {
  service: string; mode: "showroom" | "online"; date: string; startsAt: string;
  name: string; email: string; phone: string; location: string; description: string;
  budget: string; timeline: string; acknowledged: boolean;
}

const initialState: FormState = {
  service: "", mode: "showroom", date: "", startsAt: "", name: "", email: "", phone: "", location: "",
  description: "", budget: "", timeline: "", acknowledged: false,
}

const fieldClass = "w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
const stepLabels = ["Project", "Details", "Consultation", "Materials"] as const
const initialDate = dateKeyInTimeZone(new Date().toISOString(), BOOKING_TIME_ZONE)
const initialMonth = startOfCalendarMonth(calendarDateFromIsoDate(initialDate))

export default function BookingWizard() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialState)
  const [displayedMonth, setDisplayedMonth] = useState(initialMonth)
  const [calendarSlots, setCalendarSlots] = useState<AvailabilitySlot[]>([])
  const [loadedMonthKey, setLoadedMonthKey] = useState("")
  const [bookingWindow, setBookingWindow] = useState(() => fallbackBookingWindow(BOOKING_TIME_ZONE, DEFAULT_BOOKING_SETTINGS.bookingWindowDays))
  const [availabilityStatus, setAvailabilityStatus] = useState<AvailabilityStatus>("idle")
  const [uploads, setUploads] = useState<UploadedFile[]>([])
  const [draftId] = useState(() => crypto.randomUUID())
  const [busy, setBusy] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState<{ appointmentId: string; holdExpiresAt: string } | null>(null)
  const [draftRegistered, setDraftRegistered] = useState(false)
  const availabilityRequest = useRef(0)
  const availabilityCache = useRef(new Map<string, AvailabilityResponse>())

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((current) => ({ ...current, [key]: value }))
  const totalUploadSize = useMemo(() => uploads.reduce((sum, file) => sum + file.size, 0), [uploads])

  const loadAvailabilityMonth = useCallback(async (month: Date, force = false) => {
    const range = monthRange(month)
    const cached = availabilityCache.current.get(range.key)
    if (cached && !force) {
      setCalendarSlots(cached.slots)
      setLoadedMonthKey(range.key)
      if (cached.bookingWindow) setBookingWindow(cached.bookingWindow)
      setAvailabilityStatus(cached.slots.length ? "ready" : "empty")
      return
    }

    const requestId = availabilityRequest.current + 1
    const startedAt = performance.now()
    availabilityRequest.current = requestId
    setError("")
    setCalendarSlots([])
    setLoadedMonthKey("")
    setAvailabilityStatus("loading")
    console.info("[booking.availability] request", {
      requestId,
      from: range.from,
      to: range.to,
      region: "europe-west1",
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "missing",
    })
    try {
      const result = await callFirebase<{ from: string; to: string; appointmentTypeId: string }, AvailabilityResponse>("getPublicAvailability", { from: range.from, to: range.to, appointmentTypeId: "project-consultation" })
      availabilityCache.current.set(range.key, result)
      if (requestId !== availabilityRequest.current) return
      setCalendarSlots(result.slots)
      setLoadedMonthKey(range.key)
      if (result.bookingWindow) setBookingWindow(result.bookingWindow)
      setAvailabilityStatus(result.slots.length ? "ready" : "empty")
      console.info("[booking.availability] success", {
        requestId,
        month: range.key,
        slotCount: result.slots.length,
        durationMs: Math.round(performance.now() - startedAt),
      })
    } catch (reason) {
      if (requestId !== availabilityRequest.current) return
      const firebaseError = reason as { name?: unknown; message?: unknown; code?: unknown; details?: unknown }
      console.error("[booking.availability] failed", {
        requestId,
        month: range.key,
        durationMs: Math.round(performance.now() - startedAt),
        name: typeof firebaseError?.name === "string" ? firebaseError.name : "unknown",
        code: typeof firebaseError?.code === "string" ? firebaseError.code : "unknown",
        message: typeof firebaseError?.message === "string" ? firebaseError.message : "Unknown availability error",
        details: typeof firebaseError?.details === "string" ? firebaseError.details : undefined,
      })
      setAvailabilityStatus("error")
    }
  }, [])

  useEffect(() => {
    if (step === 3) void loadAvailabilityMonth(displayedMonth)
  }, [displayedMonth, loadAvailabilityMonth, step])

  const displayedRange = monthRange(displayedMonth)
  const isDisplayedMonthLoaded = loadedMonthKey === displayedRange.key
  const displayedSlotsByDate = useMemo(
    () => groupSlotsByDate(calendarSlots, BOOKING_TIME_ZONE),
    [calendarSlots],
  )
  const availableDates = useMemo(() => new Set(Object.keys(displayedSlotsByDate)), [displayedSlotsByDate])
  const selectedMonth = form.date ? availabilityCache.current.get(monthKeyFromIsoDate(form.date)) : undefined
  const selectedSlots = form.date && selectedMonth
    ? groupSlotsByDate(selectedMonth.slots, selectedMonth.timeZone ?? BOOKING_TIME_ZONE)[form.date] ?? []
    : []

  function selectConsultationDate(date: string) {
    update("date", date)
    update("startsAt", "")
    setError("")
  }

  async function uploadFiles(files: FileList | null) {
    if (!files?.length) return
    const incoming = Array.from(files)
    setError("")
    if (uploads.length + incoming.length > MAX_UPLOAD_FILES) return setError(`You can upload up to ${MAX_UPLOAD_FILES} files.`)
    if (incoming.some((file) => file.size > MAX_UPLOAD_FILE_BYTES)) return setError("Each file must be 20 MB or smaller.")
    if (totalUploadSize + incoming.reduce((sum, file) => sum + file.size, 0) > MAX_UPLOAD_TOTAL_BYTES) return setError("The total upload size cannot exceed 100 MB.")
    if (incoming.some((file) => !ALLOWED_UPLOAD_EXTENSIONS.includes(file.name.split(".").pop()?.toLowerCase() as typeof ALLOWED_UPLOAD_EXTENSIONS[number]))) return setError("Accepted formats: images, HEIC, PDF, DOCX, DWG and DXF.")
    if (!firebaseAuth || !firebaseStorage) return setError("Secure uploads are not configured yet. Please contact the studio.")
    setBusy(true)
    try {
      const credential = firebaseAuth.currentUser ? { user: firebaseAuth.currentUser } : await signInAnonymously(firebaseAuth)
      if (!draftRegistered) {
        await callFirebase("createBookingDraft", { draftId })
        setDraftRegistered(true)
      }
      const completed: UploadedFile[] = []
      for (let index = 0; index < incoming.length; index += 1) {
        const file = incoming[index]
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-")
        const path = `organizations/${ORGANIZATION_ID}/booking-drafts/${credential.user.uid}/${draftId}/${crypto.randomUUID()}-${safeName}`
        const task = uploadBytesResumable(ref(firebaseStorage, path), file, { contentType: file.type || "application/octet-stream", customMetadata: { originalName: file.name, draftId } })
        await new Promise<void>((resolve, reject) => task.on("state_changed", (snapshot) => setProgress(Math.round(((index + snapshot.bytesTransferred / snapshot.totalBytes) / incoming.length) * 100)), reject, resolve))
        completed.push({ name: file.name, path, size: file.size, contentType: file.type || "application/octet-stream" })
      }
      setUploads((current) => [...current, ...completed]); setProgress(0)
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Upload failed.") }
    finally { setBusy(false) }
  }

  function validateStep() {
    if (step === 1 && !form.service) return "Choose the service you are interested in."
    if (step === 2 && (!form.name || !form.email || !form.phone || !form.location || form.description.length < 20 || !form.budget || !form.timeline)) return "Complete all project and contact fields. The description should contain at least 20 characters."
    if (step === 3 && !form.startsAt) return "Choose an available date and time."
    return ""
  }

  function next() { const message = validateStep(); if (message) return setError(message); setError(""); setStep((current) => Math.min(4, current + 1)) }

  async function submit() {
    if (!form.acknowledged) return setError("Please confirm that you have read the Privacy Policy and accept the Booking Terms.")
    if (!firebaseAuth || !isFirebaseConfigured) return setError("Online booking is being configured. Please email office@studiobycristian.com in the meantime.")
    setBusy(true); setError("")
    try {
      if (!firebaseAuth.currentUser) await signInAnonymously(firebaseAuth)
      const result = await callFirebase<Record<string, unknown>, { appointmentId: string; holdExpiresAt: string }>("submitBooking", {
        draftId, service: form.service, mode: form.mode, appointmentTypeId: "project-consultation", startsAt: form.startsAt,
        name: form.name, email: form.email, phone: form.phone, location: form.location, description: form.description,
        budget: form.budget, timeline: form.timeline, files: uploads,
        legal: { privacyVersion: LEGAL_VERSIONS.privacy, bookingTermsVersion: LEGAL_VERSIONS.bookingTerms, acknowledgedAt: new Date().toISOString() },
      })
      setSuccess(result)
    } catch (reason) { setError(reason instanceof Error ? reason.message : "The request could not be submitted.") }
    finally { setBusy(false) }
  }

  if (success) return (
    <div className="bg-[#111] p-8 text-white md:p-12" role="status">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"><Check /></div>
      <p className="text-xs uppercase tracking-[0.25em] text-white/60">Request received</p>
      <h3 className="mt-3 text-3xl font-normal">Your time is held for 24 hours.</h3>
      <p className="mt-4 max-w-xl leading-7 text-white/70">We sent a confirmation to {form.email}. The request is pending until our team confirms it or proposes another time.</p>
      <p className="mt-5 text-xs text-white/45">Reference: {success.appointmentId}</p>
    </div>
  )

  return (
    <div className="border border-black/20 bg-[#f4f1eb] text-[#151515] shadow-[0_24px_70px_rgba(50,43,34,.12)]">
      <div className="grid lg:min-h-[42rem] lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="flex flex-col bg-[#151515] p-5 text-white sm:p-7 lg:p-9" aria-label={`Step ${step} of 4`}>
          <p className="text-[9px] uppercase tracking-[0.28em] text-white/48">Consultation route</p>
          <ol className="mt-5 grid grid-cols-4 gap-2 lg:mt-10 lg:flex lg:flex-col lg:gap-0">
            {[1, 2, 3, 4].map((item) => {
              const active = item === step
              const complete = item < step
              return (
                <li key={item} className="relative lg:border-t lg:border-white/16 lg:py-6">
                  <div className="flex items-center gap-4">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[9px] tracking-[0.12em] transition-colors duration-500 ${active ? "border-white bg-white text-black" : complete ? "border-white/60 bg-white/12 text-white" : "border-white/22 text-white/38"}`}>
                      0{item}
                    </span>
                    <div className="hidden lg:block">
                      <p className={`text-[9px] uppercase tracking-[0.2em] ${active ? "text-white" : complete ? "text-white/65" : "text-white/32"}`}>{stepLabels[item - 1]}</p>
                      {active && <p className="mt-1 text-xs text-white/45">Current step</p>}
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
          <p className="mt-auto hidden border-t border-white/16 pt-6 text-[9px] uppercase leading-[1.7] tracking-[0.2em] text-white/34 lg:block">One request<br />Four clear steps</p>
        </aside>

        <div className="p-5 sm:p-8 lg:p-12 xl:p-14">
          <div className="mx-auto max-w-[58rem]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/50">0{step} / {stepLabels[step - 1]}</p>

      {step === 1 && <div className="mt-4">
        <h3 className="text-2xl">What can we help you with?</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">{PROJECT_SERVICES.map((service) => <button type="button" key={service} aria-pressed={form.service === service} onClick={() => update("service", service)} className={`border p-4 text-left text-sm transition ${form.service === service ? "border-black bg-black text-white" : "border-black/15 bg-white hover:border-black/50"}`}>{service}</button>)}</div>
        <h4 className="mt-8 text-sm font-semibold">Consultation format</h4>
        <div className="mt-3 grid grid-cols-2 gap-3">{(["showroom", "online"] as const).map((mode) => <button type="button" key={mode} aria-pressed={form.mode === mode} onClick={() => update("mode", mode)} className={`border p-4 text-sm capitalize ${form.mode === mode ? "border-black bg-black text-white" : "border-black/15 bg-white"}`}>{mode === "showroom" ? "Studio showroom" : "Online consultation"}</button>)}</div>
      </div>}

      {step === 2 && <div className="mt-4">
        <h3 className="text-2xl">Tell us about your project</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="text-sm">Name *<input className={`${fieldClass} mt-2`} value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
          <label className="text-sm">Email *<input className={`${fieldClass} mt-2`} type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
          <label className="text-sm">Phone *<input className={`${fieldClass} mt-2`} type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
          <label className="text-sm">Project location *<input className={`${fieldClass} mt-2`} value={form.location} onChange={(e) => update("location", e.target.value)} /></label>
          <label className="text-sm">Indicative budget *<select className={`${fieldClass} mt-2`} value={form.budget} onChange={(e) => update("budget", e.target.value)}><option value="">Select</option><option>Under €15,000</option><option>€15,000–€50,000</option><option>€50,000–€150,000</option><option>€150,000+</option><option>To be discussed</option></select></label>
          <label className="text-sm">Indicative timeline *<select className={`${fieldClass} mt-2`} value={form.timeline} onChange={(e) => update("timeline", e.target.value)}><option value="">Select</option><option>As soon as possible</option><option>Within 3 months</option><option>Within 6 months</option><option>6–12 months</option><option>Exploring options</option></select></label>
          <label className="text-sm sm:col-span-2">Project description *<textarea className={`${fieldClass} mt-2 min-h-32`} value={form.description} onChange={(e) => update("description", e.target.value)} placeholder="Scope, property type, priorities and anything we should know…" /></label>
        </div>
      </div>}

      {step === 3 && <div className="mt-4">
        <h3 className="text-2xl">Choose a preferred time</h3>
        <p className="mt-2 text-sm text-black/60">Times are shown in Europe/Amsterdam. A request holds the slot for 24 hours.</p>
        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(22rem,1.08fr)_minmax(17rem,.92fr)] lg:items-start">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-black/50">Preferred date</p>
            <BookingCalendar
              month={displayedMonth}
              selectedDate={form.date}
              availableDates={availableDates}
              bookingWindow={bookingWindow}
              isLoaded={isDisplayedMonthLoaded}
              isLoading={availabilityStatus === "loading"}
              onMonthChange={(month) => setDisplayedMonth(startOfCalendarMonth(month))}
              onSelectDate={selectConsultationDate}
            />
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.14em] text-black/50" aria-label="Calendar legend">
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#DDE5D8] ring-1 ring-[#56624F]/30" />Available</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#E6E2DA]" />Unavailable</span>
            </div>
          </div>

          <div className="min-h-56 border border-black/12 bg-white/45 p-5 sm:p-6" aria-live="polite">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">Consultation times</p>
            {(availabilityStatus === "idle" || availabilityStatus === "loading") && <div className="mt-5 space-y-3" role="status"><p className="flex items-center gap-3 text-sm text-black/60"><Loader2 size={15} className="animate-spin" />Checking this month…</p>{Array.from({ length: 3 }, (_, index) => <div key={index} className="h-11 animate-pulse rounded-full bg-[#E6E2DA]" />)}</div>}
            {availabilityStatus === "error" && <div className="mt-5"><p className="text-sm leading-6 text-black/60">Availability could not be checked right now. No dates have been marked unavailable.</p><button type="button" onClick={() => void loadAvailabilityMonth(displayedMonth, true)} className="mt-5 rounded-full border border-[#56624F] px-5 py-2.5 text-xs text-[#34402F] transition hover:bg-[#DDE5D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56624F] focus-visible:ring-offset-2">Try again</button></div>}
            {availabilityStatus === "empty" && <p className="mt-5 bg-[#E6E2DA] p-4 text-sm leading-6 text-black/60">There are no consultation times available in this month. Please choose another month.</p>}
            {availabilityStatus === "ready" && !form.date && <p className="mt-5 text-sm leading-6 text-black/60">Choose one of the sage dates to see its available consultation times.</p>}
            {availabilityStatus === "ready" && form.date && <div className="mt-4">
              <p className="text-sm text-[#34402F]">{new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(calendarDateFromIsoDate(form.date))}</p>
              {selectedSlots.length ? <div className="mt-4 flex flex-wrap gap-2">{selectedSlots.map((slot) => <button type="button" key={slot.startsAt} aria-pressed={form.startsAt === slot.startsAt} onClick={() => update("startsAt", slot.startsAt)} className={`min-w-24 rounded-full border px-4 py-2.5 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56624F] focus-visible:ring-offset-2 ${form.startsAt === slot.startsAt ? "border-[#56624F] bg-[#56624F] text-white" : "border-[#B9C5B3] bg-[#DDE5D8] text-[#34402F] hover:border-[#56624F]"}`}>{formatSlotTime(slot.startsAt, BOOKING_TIME_ZONE)}</button>)}</div> : <p className="mt-4 bg-[#E6E2DA] p-4 text-sm leading-6 text-black/60">This date no longer has an available time. Please select another day.</p>}
            </div>}
          </div>
        </div>
      </div>}

      {step === 4 && <div className="mt-4">
        <h3 className="text-2xl">Documents and confirmation</h3>
        <p className="mt-2 text-sm leading-6 text-black/60">Optional: upload up to 10 images, HEIC, PDF, DOCX, DWG or DXF files. Maximum 20 MB each and 100 MB total. Files are private.</p>
        <label className="mt-6 flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-black/30 bg-white p-6 text-sm hover:border-black"><FileUp size={20} /> Add project files<input type="file" multiple className="sr-only" accept="image/*,.heic,.heif,.pdf,.docx,.dwg,.dxf" onChange={(event) => void uploadFiles(event.target.files)} disabled={busy} /></label>
        {busy && progress > 0 && <p className="mt-3 text-sm">Uploading securely… {progress}%</p>}
        {!!uploads.length && <ul className="mt-4 space-y-2 text-sm">{uploads.map((file) => <li key={file.path} className="flex justify-between rounded-lg bg-white px-4 py-3"><span className="truncate">{file.name}</span><span className="ml-3 text-black/45">{(file.size / 1024 / 1024).toFixed(1)} MB</span></li>)}</ul>}
        <div className="mt-6 rounded-xl border border-black/10 bg-white p-5 text-sm leading-6"><p><strong>{form.service}</strong> · {form.mode === "showroom" ? "Studio showroom" : "Online"}</p><p className="text-black/60">{form.startsAt ? new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeStyle: "short", timeZone: "Europe/Amsterdam" }).format(new Date(form.startsAt)) : ""}</p></div>
        <label className="mt-6 flex items-start gap-3 text-sm leading-6"><input type="checkbox" className="mt-1 h-4 w-4" checked={form.acknowledged} onChange={(event) => update("acknowledged", event.target.checked)} /><span>I confirm that I have read the <Link className="underline" href="/privacy-policy" target="_blank">Privacy Policy</Link> and accept the <Link className="underline" href="/booking-terms" target="_blank">Booking Terms</Link>. *</span></label>
      </div>}

      {error && <p className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-800" role="alert">{error}</p>}
      <div className="mt-8 flex items-center justify-between gap-4">
        <button type="button" onClick={() => { setError(""); setStep((current) => Math.max(1, current - 1)) }} disabled={step === 1 || busy} className="inline-flex items-center gap-2 border-b border-black/30 px-1 py-3 text-sm disabled:opacity-30"><ArrowLeft size={16} /> Back</button>
        {step < 4 ? <button type="button" onClick={next} disabled={step === 3 && !form.startsAt} className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm text-white disabled:cursor-not-allowed disabled:opacity-30">Continue <ArrowRight size={16} /></button> : <button type="button" onClick={() => void submit()} disabled={busy} className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm text-white disabled:opacity-50">{busy && <Loader2 size={16} className="animate-spin" />} Submit request</button>}
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}
