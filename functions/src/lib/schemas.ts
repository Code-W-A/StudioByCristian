import { z } from "zod"

export const statuses = ["pending", "proposed", "confirmed", "cancelled", "expired", "completed", "no_show"] as const
export type BookingStatus = typeof statuses[number]

const fileSchema = z.object({
  name: z.string().min(1).max(180), path: z.string().min(1).max(800),
  size: z.number().int().positive().max(20 * 1024 * 1024), contentType: z.string().min(1).max(180),
})

export const bookingSchema = z.object({
  draftId: z.string().min(10).max(128), service: z.string().min(2).max(120),
  mode: z.enum(["showroom", "online"]), appointmentTypeId: z.string().min(1).max(100),
  startsAt: z.string().datetime(), name: z.string().min(2).max(120), email: z.string().email().max(254),
  phone: z.string().min(6).max(40), location: z.string().min(2).max(240),
  description: z.string().min(20).max(5000), budget: z.string().min(1).max(120), timeline: z.string().min(1).max(120),
  files: z.array(fileSchema).max(10).default([]),
  legal: z.object({ privacyVersion: z.string().min(1), bookingTermsVersion: z.string().min(1), acknowledgedAt: z.string().datetime() }),
}).superRefine((value, ctx) => {
  if (value.files.reduce((sum, file) => sum + file.size, 0) > 100 * 1024 * 1024) {
    ctx.addIssue({ code: "custom", path: ["files"], message: "Files exceed 100 MB." })
  }
})

export const settingsSchema = z.object({
  timeZone: z.literal("Europe/Amsterdam"), durationMinutes: z.number().int().min(15).max(240),
  bufferMinutes: z.number().int().min(0).max(120), minimumNoticeHours: z.number().int().min(0).max(720),
  bookingWindowDays: z.number().int().min(1).max(365), pendingHoldHours: z.number().int().min(1).max(72),
  reminderHours: z.number().int().min(1).max(168),
  weeklySchedule: z.record(z.string(), z.array(z.object({ start: z.string().regex(/^\d{2}:\d{2}$/), end: z.string().regex(/^\d{2}:\d{2}$/) }))),
  blockedDates: z.array(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)).max(366),
})

export const transitionSchema = z.object({
  appointmentId: z.string().min(1), status: z.enum(statuses),
  proposedStartsAt: z.string().datetime().nullish(), note: z.string().max(2000).nullish(),
})
