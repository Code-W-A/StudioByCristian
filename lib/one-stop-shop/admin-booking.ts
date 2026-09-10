import { formatInTimeZone, fromZonedTime } from "date-fns-tz"
import type { BookingStatus } from "./constants"

export function amsterdamInputToIso(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) throw new Error("Enter a valid Amsterdam date and time.")
  const date = fromZonedTime(value, "Europe/Amsterdam")
  if (!Number.isFinite(date.getTime()) || formatInTimeZone(date, "Europe/Amsterdam", "yyyy-MM-dd'T'HH:mm") !== value) throw new Error("This Amsterdam time does not exist. Choose another time.")
  return date.toISOString()
}

export function appointmentActions(status: BookingStatus, startsAt: Date | null, now = Date.now()): Array<"confirmed" | "proposed" | "cancelled" | "completed" | "no_show"> {
  if (status === "pending") return ["confirmed", "proposed", "cancelled"]
  if (status === "proposed") return ["cancelled"]
  if (status === "confirmed") return startsAt && startsAt.getTime() <= now ? ["completed", "no_show", "cancelled"] : ["proposed", "cancelled"]
  return []
}
