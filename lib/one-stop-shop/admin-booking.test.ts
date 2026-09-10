import { describe, expect, it } from "vitest"
import { amsterdamInputToIso, appointmentActions } from "./admin-booking"

describe("Amsterdam proposal input", () => {
  it("converts summer and winter times independently of the browser timezone", () => {
    expect(amsterdamInputToIso("2026-09-15T09:00")).toBe("2026-09-15T07:00:00.000Z")
    expect(amsterdamInputToIso("2026-12-15T09:00")).toBe("2026-12-15T08:00:00.000Z")
  })
  it("rejects malformed and missing spring DST times", () => {
    for (const value of ["", "garbage", "2026-03-29T02:30", "2026-02-30T09:00"]) expect(() => amsterdamInputToIso(value)).toThrow()
  })
})
it("does not offer invalid terminal transitions", () => {
  for (const status of ["completed", "no_show", "expired", "cancelled"] as const) expect(appointmentActions(status, new Date("2030-01-01"))).toEqual([])
  expect(appointmentActions("confirmed", new Date("2020-01-01"))).toEqual(["completed", "no_show", "cancelled"])
  expect(appointmentActions("pending", null)).toEqual(["confirmed", "proposed", "cancelled"])
})
