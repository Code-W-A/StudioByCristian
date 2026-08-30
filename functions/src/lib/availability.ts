import { DateTime } from "luxon"

export type AvailabilitySettings = {
  timeZone: string; durationMinutes: number; bufferMinutes: number; minimumNoticeHours: number;
  bookingWindowDays: number; weeklySchedule: Record<string, Array<{ start: string; end: string }>>; blockedDates: string[];
}

export function slotKey(typeId: string, startsAtIso: string) {
  return Buffer.from(`${typeId}|${startsAtIso}`).toString("base64url")
}

export function generateSlots(settings: AvailabilitySettings, fromIso: string, toIso: string, occupied: Set<string>, now: DateTime = DateTime.utc()) {
  const zone = settings.timeZone
  const earliest = now.plus({ hours: settings.minimumNoticeHours })
  const latest = now.plus({ days: settings.bookingWindowDays })
  let day = DateTime.fromISO(fromIso, { zone }).startOf("day")
  const requestedEnd = DateTime.fromISO(toIso, { zone }).endOf("day")
  const end = requestedEnd < latest ? requestedEnd : latest
  const slots: Array<{ startsAt: string; endsAt: string; localLabel: string }> = []
  while (day <= end) {
    const dateKey = day.toISODate()!
    const windows = settings.weeklySchedule[String(day.weekday)] ?? []
    if (!settings.blockedDates.includes(dateKey)) {
      for (const window of windows) {
        let cursor = DateTime.fromISO(`${dateKey}T${window.start}`, { zone })
        const windowEnd = DateTime.fromISO(`${dateKey}T${window.end}`, { zone })
        while (cursor.plus({ minutes: settings.durationMinutes }) <= windowEnd) {
          const startsAt = cursor.toUTC().toISO()!
          const endsAt = cursor.plus({ minutes: settings.durationMinutes }).toUTC().toISO()!
          if (cursor.toUTC() >= earliest && !occupied.has(startsAt)) {
            slots.push({ startsAt, endsAt, localLabel: cursor.toFormat("ccc d LLL, HH:mm") })
          }
          cursor = cursor.plus({ minutes: settings.durationMinutes + settings.bufferMinutes })
        }
      }
    }
    day = day.plus({ days: 1 })
  }
  return slots
}

export function isSlotWithinSchedule(startsAtIso: string, settings: AvailabilitySettings, now: DateTime = DateTime.utc()) {
  const start = DateTime.fromISO(startsAtIso, { zone: "utc" })
  if (!start.isValid || start < now.plus({ hours: settings.minimumNoticeHours }) || start > now.plus({ days: settings.bookingWindowDays })) return false
  const local = start.setZone(settings.timeZone)
  if (settings.blockedDates.includes(local.toISODate()!)) return false
  const windows = settings.weeklySchedule[String(local.weekday)] ?? []
  return windows.some((window) => {
    const windowStart = DateTime.fromISO(`${local.toISODate()}T${window.start}`, { zone: settings.timeZone })
    const windowEnd = DateTime.fromISO(`${local.toISODate()}T${window.end}`, { zone: settings.timeZone })
    return local >= windowStart && local.plus({ minutes: settings.durationMinutes }) <= windowEnd
  })
}
