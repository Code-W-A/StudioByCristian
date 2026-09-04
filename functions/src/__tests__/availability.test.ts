import { describe, expect, it } from "vitest"
import { DateTime } from "luxon"
import { generateSlots, getBookingWindow, isSlotWithinSchedule } from "../lib/availability.js"

const settings = { timeZone: "Europe/Amsterdam", durationMinutes: 60, bufferMinutes: 15, minimumNoticeHours: 0, bookingWindowDays: 90, weeklySchedule: { "7": [{ start: "09:00", end: "12:00" }] }, blockedDates: [] }

describe("Amsterdam availability and DST", () => {
  it("generates local slots with correct UTC offset after spring DST", () => {
    const slots = generateSlots(settings, "2026-03-29", "2026-03-29", new Set(), DateTime.fromISO("2026-03-20T00:00:00Z"))
    expect(slots[0].startsAt).toBe("2026-03-29T07:00:00.000Z")
    expect(slots).toHaveLength(2)
    expect(slots[1].localLabel).toContain("10:15")
  })
  it("blocks dates and accepts valid local schedule", () => {
    expect(isSlotWithinSchedule("2026-03-29T07:00:00.000Z", settings, DateTime.fromISO("2026-03-20T00:00:00Z"))).toBe(true)
    expect(isSlotWithinSchedule("2026-03-29T05:00:00.000Z", settings, DateTime.fromISO("2026-03-20T00:00:00Z"))).toBe(false)
  })

  it("returns booking-window dates in the configured time zone", () => {
    const window = getBookingWindow(
      { ...settings, minimumNoticeHours: 2, bookingWindowDays: 60 },
      DateTime.fromISO("2026-03-28T22:30:00Z"),
    )

    expect(window).toEqual({ earliestDate: "2026-03-29", latestDate: "2026-05-27" })
  })
})
