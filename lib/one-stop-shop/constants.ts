export const ORGANIZATION_ID = "studio-bycristian"
export const BOOKING_TIME_ZONE = "Europe/Amsterdam"
export const LEGAL_VERSIONS = {
  privacy: "2026-08-27",
  cookies: "2026-08-27",
  bookingTerms: "2026-08-27",
} as const

export const BOOKING_STATUSES = [
  "pending",
  "proposed",
  "confirmed",
  "cancelled",
  "expired",
  "completed",
  "no_show",
] as const

export type BookingStatus = (typeof BOOKING_STATUSES)[number]
export type MemberRole = "admin" | "staff"
export type ConsultationMode = "showroom" | "online"

export const PROJECT_SERVICES = [
  "Small Renovation",
  "Bathroom Renovation",
  "Painting & Finishing",
  "Custom Furniture",
  "Interior Design",
  "Turn-Key Renovation",
] as const

export const MAX_UPLOAD_FILES = 10
export const MAX_UPLOAD_FILE_BYTES = 20 * 1024 * 1024
export const MAX_UPLOAD_TOTAL_BYTES = 100 * 1024 * 1024

export const ALLOWED_UPLOAD_EXTENSIONS = [
  "jpg", "jpeg", "png", "webp", "gif", "heic", "heif", "pdf", "docx", "dwg", "dxf",
] as const

export const DEFAULT_BOOKING_SETTINGS = {
  timeZone: BOOKING_TIME_ZONE,
  durationMinutes: 60,
  bufferMinutes: 15,
  minimumNoticeHours: 24,
  bookingWindowDays: 60,
  pendingHoldHours: 24,
  reminderHours: 24,
  weeklySchedule: {
    "1": [{ start: "09:00", end: "17:00" }],
    "2": [{ start: "09:00", end: "17:00" }],
    "3": [{ start: "09:00", end: "17:00" }],
    "4": [{ start: "09:00", end: "17:00" }],
    "5": [{ start: "09:00", end: "17:00" }],
  },
  blockedDates: [] as string[],
} as const
