import { describe, expect, it } from "vitest"
import {
  dateKeyInTimeZone,
  groupSlotsByDate,
  monthRange,
  type AvailabilitySlot,
} from "./availability-calendar"

describe("booking calendar availability", () => {
  it("builds a complete monthly request range", () => {
    expect(monthRange(new Date(2026, 1, 14, 12))).toEqual({
      key: "2026-02",
      from: "2026-02-01",
      to: "2026-02-28",
    })
  })

  it("groups slots by their Amsterdam date instead of their UTC date", () => {
    const slots: AvailabilitySlot[] = [
      { startsAt: "2026-03-28T23:30:00.000Z", endsAt: "2026-03-29T00:30:00.000Z", localLabel: "Sun 29 Mar, 00:30" },
      { startsAt: "2026-03-29T07:00:00.000Z", endsAt: "2026-03-29T08:00:00.000Z", localLabel: "Sun 29 Mar, 09:00" },
    ]

    expect(dateKeyInTimeZone(slots[0].startsAt, "Europe/Amsterdam")).toBe("2026-03-29")
    expect(groupSlotsByDate(slots, "Europe/Amsterdam")["2026-03-29"]).toHaveLength(2)
  })

  it("keeps the correct local day after the autumn DST transition", () => {
    expect(dateKeyInTimeZone("2026-10-25T23:30:00.000Z", "Europe/Amsterdam")).toBe("2026-10-26")
  })
})
