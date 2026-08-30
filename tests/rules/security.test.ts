import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from "vitest"
import { initializeTestEnvironment, assertFails, assertSucceeds, type RulesTestEnvironment } from "@firebase/rules-unit-testing"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getBytes } from "firebase/storage"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"

let environment: RulesTestEnvironment
const projectId = "studio-bycristian-oss"
const appointmentPath = "organizations/studio-bycristian/appointments/test-appointment"

beforeAll(async () => {
  environment = await initializeTestEnvironment({
    projectId,
    firestore: { host: "127.0.0.1", port: 8080, rules: readFileSync(resolve("firestore.rules"), "utf8") },
    storage: { host: "127.0.0.1", port: 9199, rules: readFileSync(resolve("storage.rules"), "utf8") },
  })
})
beforeEach(async () => environment.withSecurityRulesDisabled(async context => setDoc(doc(context.firestore(), appointmentPath), { status: "pending" })))
afterEach(async () => environment.clearFirestore())
afterAll(async () => environment.cleanup())

describe("CRM rules", () => {
  it("prevents public users from reading appointments", async () => {
    await assertFails(getDoc(doc(environment.unauthenticatedContext().firestore(), appointmentPath)))
  })
  it("allows an organisation staff member to read CRM data", async () => {
    const staff = environment.authenticatedContext("staff-1", { orgId: "studio-bycristian", role: "staff" })
    await assertSucceeds(getDoc(doc(staff.firestore(), appointmentPath)))
  })
  it("prevents staff and admins from bypassing Functions for writes", async () => {
    const staff = environment.authenticatedContext("staff-1", { orgId: "studio-bycristian", role: "staff" })
    const admin = environment.authenticatedContext("admin-1", { orgId: "studio-bycristian", role: "admin" })
    await assertFails(setDoc(doc(staff.firestore(), appointmentPath), { status: "confirmed" }))
    await assertFails(setDoc(doc(admin.firestore(), "organizations/studio-bycristian/settings/booking"), { durationMinutes: 1 }))
  })
  it("prevents staff from reading sensitive settings", async () => {
    const staff = environment.authenticatedContext("staff-1", { orgId: "studio-bycristian", role: "staff" })
    await assertFails(getDoc(doc(staff.firestore(), "organizations/studio-bycristian/settings/booking")))
  })
})

describe("private file rules", () => {
  const uploadPath = "organizations/studio-bycristian/booking-drafts/anonymous-1/draft-123/file.pdf"
  it("lets a draft owner upload an allowed small file but not read it publicly", async () => {
    const owner = environment.authenticatedContext("anonymous-1")
    await assertSucceeds(uploadBytes(ref(owner.storage(), uploadPath), new Uint8Array([1, 2, 3]), { contentType: "application/pdf" }))
    await assertFails(getBytes(ref(environment.unauthenticatedContext().storage(), uploadPath)))
  })
  it("blocks another authenticated user from overwriting the draft", async () => {
    const attacker = environment.authenticatedContext("anonymous-2")
    await assertFails(uploadBytes(ref(attacker.storage(), uploadPath), new Uint8Array([1]), { contentType: "application/pdf" }))
  })
})
