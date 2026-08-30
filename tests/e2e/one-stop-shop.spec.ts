import { test, expect, type Page } from "@playwright/test"
import { initializeApp, deleteApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { fromZonedTime } from "date-fns-tz"

test.describe.configure({ mode: "serial" })

test.beforeAll(async () => {
  process.env.FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9099"
  const app = initializeApp({ projectId: "studio-bycristian-oss" }, "e2e-admin")
  const auth = getAuth(app)
  for (const account of [
    { email: "adrian@webdynamicx.ro", password: "Admin-test-2026!", role: "admin" },
    { email: "staff-test@studiobycristian.com", password: "Staff-test-2026!", role: "staff" },
  ] as const) {
    let user
    try { user = await auth.getUserByEmail(account.email) } catch { user = await auth.createUser({ email: account.email, password: account.password, emailVerified: true }) }
    await auth.setCustomUserClaims(user.uid, { orgId: "studio-bycristian", role: account.role })
  }
  await deleteApp(app)
})

async function rejectCookies(page: Page) {
  const reject = page.getByRole("button", { name: "Reject optional" })
  if (await reject.waitFor({ state: "visible", timeout: 3_000 }).then(() => true).catch(() => false)) await reject.click()
}

function availableWeekday(offsetDays = 3) {
  const date = new Date(); date.setUTCDate(date.getUTCDate() + offsetDays)
  while ([0, 6].includes(date.getUTCDay())) date.setUTCDate(date.getUTCDate() + 1)
  return date.toISOString().slice(0, 10)
}

async function prepareBooking(page: Page, email: string) {
  await page.goto("/one-stop-shop#book"); await rejectCookies(page)
  const service = page.getByRole("button", { name: "Interior Design", exact: true })
  const mode = page.getByRole("button", { name: "Online consultation" })
  await service.click(); await expect(service).toHaveAttribute("aria-pressed", "true")
  await mode.click(); await expect(mode).toHaveAttribute("aria-pressed", "true")
  await page.getByRole("button", { name: "Continue", exact: true }).click()
  await expect(page.getByRole("heading", { name: "Choose a preferred time" })).toBeVisible()
  await page.locator('input[type="date"]').fill(availableWeekday())
  await page.getByRole("button", { name: "Show times" }).click()
  const slot = page.locator("button").filter({ hasText: /\w{3} \d{1,2} \w{3}, \d{2}:\d{2}/ }).first()
  await expect(slot).toBeVisible(); await slot.click()
  await page.getByRole("button", { name: "Continue", exact: true }).click()
  await page.getByLabel("Name *").fill("Concurrency Client")
  await page.getByLabel("Email *").fill(email)
  await page.getByLabel("Phone *").fill("+31612345678")
  await page.getByLabel("Project location *").fill("Amsterdam")
  await page.getByLabel("Indicative budget *").selectOption({ label: "€50,000–€150,000" })
  await page.getByLabel("Indicative timeline *").selectOption({ label: "Within 6 months" })
  await page.getByLabel("Project description *").fill("Complete apartment interior design and renovation project in Amsterdam.")
  await page.getByRole("button", { name: "Continue", exact: true }).click()
  await page.getByRole("checkbox").check()
}

test("public wizard records legal acknowledgement and a 24-hour hold", async ({ page }) => {
  await prepareBooking(page, "client-one@example.com")
  await page.getByRole("button", { name: "Submit request" }).click()
  await expect(page.getByText("Request received")).toBeVisible()
  await expect(page.getByText("Your time is held for 24 hours.")).toBeVisible()
})

test("two simultaneous callable requests cannot reserve the same slot", async ({ request }) => {
  const date = availableWeekday(7)
  const startsAt = fromZonedTime(`${date}T09:00:00`, "Europe/Amsterdam").toISOString()
  async function anonymousToken() {
    const response = await request.post("http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/accounts:signUp?key=fake", { data: { returnSecureToken: true } })
    expect(response.ok()).toBe(true)
    return (await response.json()).idToken as string
  }
  const [firstToken, secondToken] = await Promise.all([anonymousToken(), anonymousToken()])
  const payload = (email: string, draftId: string) => ({ data: {
    draftId, service: "Interior Design", mode: "online", appointmentTypeId: "project-consultation", startsAt,
    name: "Concurrent Client", email, phone: "+31612345678", location: "Amsterdam",
    description: "A complete apartment design and renovation with sufficient project detail.", budget: "€50,000–€150,000", timeline: "Within 6 months", files: [],
    legal: { privacyVersion: "2026-08-27", bookingTermsVersion: "2026-08-27", acknowledgedAt: new Date().toISOString() },
  } })
  const endpoint = "http://127.0.0.1:5001/studio-bycristian-oss/europe-west1/submitBooking"
  const responses = await Promise.all([
    request.post(endpoint, { headers: { Authorization: `Bearer ${firstToken}` }, data: payload("concurrent-one@example.com", crypto.randomUUID()) }),
    request.post(endpoint, { headers: { Authorization: `Bearer ${secondToken}` }, data: payload("concurrent-two@example.com", crypto.randomUUID()) }),
  ])
  const bodies = await Promise.all(responses.map(response => response.json()))
  expect(bodies.filter(body => body.result || body.data)).toHaveLength(1)
  expect(bodies.filter(body => body.error)).toHaveLength(1)
  expect(JSON.stringify(bodies.find(body => body.error))).toMatch(/ALREADY_EXISTS|already|requested/i)
})

test("admin can review and confirm the pending request", async ({ page }) => {
  await page.goto("/admin/login")
  await page.getByLabel("Email").fill("adrian@webdynamicx.ro")
  await page.getByLabel("Password").fill("Admin-test-2026!")
  await page.getByRole("button", { name: "Sign in" }).click()
  await expect(page).toHaveURL(/\/admin$/)
  await page.goto("/admin/appointments")
  await expect(page.getByText("Concurrency Client").first()).toBeVisible()
  await page.getByRole("button", { name: "Confirm" }).first().click()
  await expect(page.getByText(/Appointment updated/)).toBeVisible()
  await page.goto("/admin/clients")
  await expect(page.getByText("Concurrency Client").first()).toBeVisible()
})

test("staff cannot access team or sensitive settings", async ({ page }) => {
  await page.goto("/admin/login")
  await page.getByLabel("Email").fill("staff-test@studiobycristian.com")
  await page.getByLabel("Password").fill("Staff-test-2026!")
  await page.getByRole("button", { name: "Sign in" }).click()
  await expect(page).toHaveURL(/\/admin$/)
  await page.goto("/admin/settings")
  await expect(page.getByText("Admin access required")).toBeVisible()
})

test("optional external media remains blocked after rejection", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator("iframe")).toHaveCount(0)
  await rejectCookies(page)
  await expect(page.locator("iframe")).toHaveCount(0)
  await page.getByRole("button", { name: "Manage cookie preferences" }).click()
  await page.getByRole("button", { name: "Accept all" }).click()
  await expect.poll(async () => page.locator("iframe").count()).toBeGreaterThan(0)
})
