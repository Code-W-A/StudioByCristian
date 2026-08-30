import { describe, expect, it } from "vitest"
import { renderEmail } from "../lib/email.js"

describe("email templates", () => {
  it("renders every client and team email without placeholders", () => {
    const templates = ["request_received", "admin_notification", "confirmed", "alternative_proposed", "alternative_accepted", "alternative_declined", "cancelled", "reminder", "expired", "team_invite"] as const
    for (const template of templates) {
      const result = renderEmail(template, { name: "Alex", startsAt: "2026-10-20T09:00:00.000Z", service: "Interior Design", role: "staff", actionUrl: "https://example.com" })
      expect(result.subject.length).toBeGreaterThan(5)
      expect(result.html).toContain("Studio ByCristian")
      expect(result.html).not.toContain("undefined")
    }
  })
})
