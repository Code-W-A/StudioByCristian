import { z } from "zod"
import { BOOKING_STATUSES, type BookingStatus, MAX_UPLOAD_FILES, MAX_UPLOAD_FILE_BYTES, MAX_UPLOAD_TOTAL_BYTES } from "./constants"

export const uploadSchema = z.object({
  name: z.string().min(1).max(180),
  path: z.string().min(1).max(800),
  size: z.number().int().positive().max(MAX_UPLOAD_FILE_BYTES),
  contentType: z.string().min(1).max(180),
})

export const bookingRequestSchema = z.object({
  draftId: z.string().min(10).max(128),
  service: z.string().min(2).max(120),
  mode: z.enum(["showroom", "online"]),
  appointmentTypeId: z.string().min(1).max(100).default("project-consultation"),
  startsAt: z.string().datetime(),
  name: z.string().min(2).max(120),
  email: z.string().email().max(254),
  phone: z.string().min(6).max(40),
  location: z.string().min(2).max(240),
  description: z.string().min(20).max(5000),
  budget: z.string().min(1).max(120),
  timeline: z.string().min(1).max(120),
  files: z.array(uploadSchema).max(MAX_UPLOAD_FILES).default([]),
  legal: z.object({
    privacyVersion: z.string().min(1),
    bookingTermsVersion: z.string().min(1),
    acknowledgedAt: z.string().datetime(),
  }),
}).superRefine((value, context) => {
  const total = value.files.reduce((sum, file) => sum + file.size, 0)
  if (total > MAX_UPLOAD_TOTAL_BYTES) {
    context.addIssue({ code: "custom", path: ["files"], message: "Files exceed the 100 MB total limit." })
  }
})

const transitions: Record<BookingStatus, readonly BookingStatus[]> = {
  pending: ["proposed", "confirmed", "cancelled", "expired"],
  proposed: ["pending", "confirmed", "cancelled", "expired"],
  confirmed: ["proposed", "cancelled", "completed", "no_show"],
  cancelled: [],
  expired: [],
  completed: [],
  no_show: [],
}

export function canTransition(from: BookingStatus, to: BookingStatus) {
  return BOOKING_STATUSES.includes(from) && transitions[from].includes(to)
}

export function isSlotHolding(status: BookingStatus, holdExpiresAt?: Date, now = new Date()) {
  if (status === "confirmed" || status === "proposed") return true
  return status === "pending" && Boolean(holdExpiresAt && holdExpiresAt.getTime() > now.getTime())
}

export function retentionDeadline(createdAt: Date, months = 24) {
  const result = new Date(createdAt)
  result.setUTCMonth(result.getUTCMonth() + months)
  return result
}
