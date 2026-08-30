import { FieldValue, Timestamp } from "firebase-admin/firestore"
import { org } from "./config.js"
import type { EmailTemplate } from "./email.js"

export function queueEmail(id: string, to: string, template: EmailTemplate, data: Record<string, string>) {
  return org.collection("emailJobs").doc(id).set({
    to, template, data, status: "queued", attempts: 0, nextAttemptAt: Timestamp.now(),
    createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true })
}
