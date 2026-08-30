import { describe, expect, it } from "vitest"
import { bookingRequestSchema, canTransition, isSlotHolding, retentionDeadline } from "./booking"

describe("booking lifecycle", () => {
  it("permits only supported status transitions", () => {
    expect(canTransition("pending", "confirmed")).toBe(true)
    expect(canTransition("completed", "pending")).toBe(false)
    expect(canTransition("cancelled", "confirmed")).toBe(false)
  })

  it("releases expired pending slots", () => {
    const now = new Date("2026-01-01T12:00:00Z")
    expect(isSlotHolding("pending", new Date("2026-01-01T13:00:00Z"), now)).toBe(true)
    expect(isSlotHolding("pending", new Date("2026-01-01T11:00:00Z"), now)).toBe(false)
    expect(isSlotHolding("confirmed", undefined, now)).toBe(true)
  })

  it("calculates the 24 month retention date", () => {
    expect(retentionDeadline(new Date("2024-02-29T10:00:00Z")).toISOString()).toBe("2026-03-01T10:00:00.000Z")
  })

  it("rejects more than 100 MB of uploads", () => {
    const result = bookingRequestSchema.safeParse({
      draftId: "draft-1234567890", service: "Interior Design", mode: "online",
      appointmentTypeId: "project-consultation", startsAt: "2026-10-10T10:00:00.000Z",
      name: "Test Client", email: "test@example.com", phone: "+31612345678",
      location: "Amsterdam", description: "A sufficiently detailed project description.",
      budget: "€25,000–€50,000", timeline: "Within 6 months",
      files: Array.from({ length: 6 }, (_, i) => ({ name: `${i}.pdf`, path: `x/${i}`, size: 19 * 1024 * 1024, contentType: "application/pdf" })),
      legal: { privacyVersion: "v1", bookingTermsVersion: "v1", acknowledgedAt: "2026-01-01T10:00:00.000Z" },
    })
    expect(result.success).toBe(false)
  })
})
