export type AvailabilitySlot = { startsAt: string; endsAt: string; localLabel: string }
export type BookingWindow = { earliestDate: string; latestDate: string }
export type AvailabilityResponse = {
  timeZone: string
  durationMinutes: number
  bookingWindow?: BookingWindow
  slots: AvailabilitySlot[]
}

export function isoDateFromCalendarDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function calendarDateFromIsoDate(value: string) {
  const [year, month, day] = value.split("-").map(Number)
  return new Date(year, month - 1, day, 12)
}

export function startOfCalendarMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1, 12)
}

export function fallbackBookingWindow(timeZone: string, bookingWindowDays: number, now = new Date()) {
  const earliestDate = dateKeyInTimeZone(now.toISOString(), timeZone)
  const latest = calendarDateFromIsoDate(earliestDate)
  latest.setDate(latest.getDate() + bookingWindowDays)
  return { earliestDate, latestDate: isoDateFromCalendarDate(latest) }
}

export function monthRange(date: Date) {
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const from = isoDateFromCalendarDate(new Date(year, monthIndex, 1, 12))
  const to = isoDateFromCalendarDate(new Date(year, monthIndex + 1, 0, 12))
  return { key: from.slice(0, 7), from, to }
}

export function monthKeyFromIsoDate(value: string) {
  return value.slice(0, 7)
}

export function dateKeyInTimeZone(isoTimestamp: string, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(isoTimestamp))
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  return `${values.year}-${values.month}-${values.day}`
}

export function groupSlotsByDate(slots: AvailabilitySlot[], timeZone: string) {
  return slots.reduce<Record<string, AvailabilitySlot[]>>((grouped, slot) => {
    const dateKey = dateKeyInTimeZone(slot.startsAt, timeZone)
    grouped[dateKey] = [...(grouped[dateKey] ?? []), slot]
    return grouped
  }, {})
}

export function formatSlotTime(isoTimestamp: string, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(isoTimestamp))
}
