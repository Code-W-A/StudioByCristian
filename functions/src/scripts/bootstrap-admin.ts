import { getAuth } from "firebase-admin/auth"
import { FieldValue } from "firebase-admin/firestore"
import { org, ORG_ID, defaultSettings } from "../lib/config.js"

async function main() {
  const email = process.argv[2] ?? "adrian@webdynamicx.ro"
  let user
  try { user = await getAuth().getUserByEmail(email) } catch { user = await getAuth().createUser({ email, displayName: "Adrian", emailVerified: true }) }
  await getAuth().setCustomUserClaims(user.uid, { orgId: ORG_ID, role: "admin" })
  await Promise.all([
    org.collection("members").doc(user.uid).set({ email, displayName: user.displayName ?? "Adrian", role: "admin", status: "active", createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true }),
    org.collection("settings").doc("booking").set({ ...defaultSettings, updatedAt: FieldValue.serverTimestamp() }, { merge: true }),
    org.collection("appointmentTypes").doc("project-consultation").set({ name: "Project Consultation", durationMinutes: 60, modes: ["showroom", "online"], active: true, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true }),
  ])
  const link = await getAuth().generatePasswordResetLink(email)
  console.log(`Admin ${email} configured. Set the password using this one-time link:\n${link}`)
}

main().catch((error) => { console.error(error); process.exitCode = 1 })
