import { test, expect, type Page } from "@playwright/test"
import { initializeApp, deleteApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { getAuth } from "firebase-admin/auth"
import { fromZonedTime } from "date-fns-tz"

test.describe.configure({ mode: "serial" })

test.beforeAll(async () => {
  process.env.FIRESTORE_EMULATOR_HOST = "127.0.0.1:8080"
  process.env.FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9099"
  const app = initializeApp({ projectId: "studio-bycristian-oss" }, "e2e-admin")
  const auth = getAuth(app)
  for (const account of [
    { email: "admin-e2e@example.com", password: "Admin-test-2026!", role: "admin" },
    { email: "staff-e2e@example.com", password: "Staff-test-2026!", role: "staff" },
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
  await expect(page.getByRole("heading", { name: "Tell us about your project" })).toBeVisible()
  await page.getByLabel("Name *").fill("Concurrency Client")
  await page.getByLabel("Email *").fill(email)
  await page.getByLabel("Phone *").fill("+31612345678")
  await page.getByLabel("Project location *").fill("Amsterdam")
  await page.getByLabel("Indicative budget *").selectOption({ label: "€50,000–€150,000" })
  await page.getByLabel("Indicative timeline *").selectOption({ label: "Within 6 months" })
  await page.getByLabel("Project description *").fill("Complete apartment interior design and renovation project in Amsterdam.")
  await page.getByRole("button", { name: "Continue", exact: true }).click()
  await expect(page.getByRole("heading", { name: "Choose a preferred time" })).toBeVisible()
  await expect(page.getByRole("button", { name: /, available$/ }).first()).toBeVisible({ timeout: 30_000 })
  await page.getByRole("button", { name: /, available$/ }).first().click()
  await page.getByRole("button", { name: /^\d{2}:\d{2}$/ }).first().click()
  await page.getByRole("button", { name: "Continue", exact: true }).click()
  await page.getByRole("checkbox").check()
}

test("public wizard records legal acknowledgement and a 24-hour hold", async ({ page }) => {
  await prepareBooking(page, "client-one@example.com")
  await page.locator('input[type="file"]').setInputFiles({ name: "e2e-project.pdf", mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4\n% E2E project fixture\n%%EOF") })
  await expect(page.getByText("e2e-project.pdf", { exact: true })).toBeVisible()
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
  await page.getByLabel("Email").fill("admin-e2e@example.com")
  await page.locator('input[type="password"]').fill("Admin-test-2026!")
  await page.getByRole("button", { name: "Sign in" }).click()
  await expect(page).toHaveURL(/\/admin$/)
  await page.goto("/admin/appointments")
  await expect(page.getByText("Concurrency Client").first()).toBeVisible()
  await page.getByLabel("Search client or service").fill("client-one@example.com")
  await page.getByRole("button", { name: "Confirm" }).click()
  await expect(page.getByText(/Appointment updated/)).toBeVisible()
  await page.goto("/admin/clients")
  await expect(page.getByText("Concurrency Client").first()).toBeVisible()
})

test("staff cannot access team or sensitive settings", async ({ page }) => {
  await page.goto("/admin/login")
  await page.getByLabel("Email").fill("staff-e2e@example.com")
  await page.locator('input[type="password"]').fill("Staff-test-2026!")
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

test("an Amsterdam proposal is saved correctly and its secure acceptance link works", async ({ page }) => {
  await page.goto("/admin/login")
  await page.getByLabel("Email").fill("admin-e2e@example.com")
  await page.locator('input[type="password"]').fill("Admin-test-2026!")
  await page.getByRole("button", { name: "Sign in" }).click()
  await expect(page).toHaveURL(/\/admin$/)
  await page.goto("/admin/appointments")
  await page.getByLabel("Search client or service").fill("client-one@example.com")
  await page.getByRole("button", { name: "Propose", exact: true }).click()
  const localTime = `${availableWeekday(10)}T11:30`
  await page.getByLabel("Amsterdam date and time").fill(localTime)
  await page.getByRole("button", { name: "Send proposal", exact: true }).click()
  await expect(page.getByRole("status")).toHaveText("Appointment updated.")
  await expect(page.getByRole("article")).toContainText("proposed")
  const app = initializeApp({ projectId: "studio-bycristian-oss" }, "verify-proposal")
  try {
    const org = getFirestore(app).collection("organizations").doc("studio-bycristian")
    const jobs = await org.collection("emailJobs").where("template", "==", "alternative_proposed").get()
    const job = jobs.docs.find(doc => doc.data().to === "client-one@example.com")!.data()
    expect(job.data.startsAt).toBe(fromZonedTime(localTime, "Europe/Amsterdam").toISOString())
    await page.goto(`/booking/respond${new URL(job.data.actionUrl).search}`)
    await expect(page.getByText("Thank you. Your proposed consultation time is confirmed.")).toBeVisible()
    await page.goto("/admin/appointments")
    await expect(page.getByRole("heading", { name: "Appointments", exact: true })).toBeVisible()
    await page.getByLabel("Search client or service").fill("client-one@example.com")
    await expect(page.getByRole("article")).toContainText("confirmed")
  } finally { await deleteApp(app) }
})

test("complete client CRUD: read booking, add note, export, cancel, delete and verify removal", async ({ page }) => {
  await page.goto("/admin/login")
  await page.getByLabel("Email").fill("admin-e2e@example.com")
  await page.locator('input[type="password"]').fill("Admin-test-2026!")
  await page.getByRole("button", { name: "Sign in" }).click()
  await expect(page).toHaveURL(/\/admin$/)
  await page.goto("/admin/clients")
  await page.getByRole("button").filter({ hasText: "client-one@example.com" }).click()
  await page.getByLabel("Internal note").fill("E2E note: client requested oak joinery and a revised schedule.")
  await page.getByRole("button", { name: "Save note" }).click()
  await expect(page.getByRole("status")).toHaveText("Note saved.")
  await expect(page.locator("p").filter({ hasText: "E2E note: client requested oak joinery and a revised schedule." })).toBeVisible()
  await page.reload()
  await page.getByRole("button").filter({ hasText: "client-one@example.com" }).click()
  await expect(page.locator("p").filter({ hasText: "E2E note: client requested oak joinery and a revised schedule." })).toBeVisible()
  const downloadEvent = page.waitForEvent("download")
  await page.getByRole("button", { name: "Export", exact: true }).click()
  const download = await downloadEvent
  const stream = await download.createReadStream()
  const chunks: Buffer[] = []; for await (const chunk of stream!) chunks.push(Buffer.from(chunk))
  const exported = JSON.parse(Buffer.concat(chunks).toString())
  expect(exported.client.email).toBe("client-one@example.com")
  expect(exported.notes[0].text).toContain("oak joinery")
  expect(exported.appointments).toHaveLength(1)
  await page.goto("/admin/appointments")
  await page.getByLabel("Search client or service").fill("client-one@example.com")
  await page.getByRole("button", { name: "Cancel", exact: true }).click()
  await expect(page.getByRole("status")).toContainText("Appointment updated")
  await expect(page.getByRole("article")).toContainText("cancelled")
  await expect(page.getByRole("button", { name: "Cancel", exact: true })).toHaveCount(0)
  await page.goto("/admin/clients")
  await page.getByRole("button").filter({ hasText: "client-one@example.com" }).click()
  page.once("dialog", dialog => dialog.accept())
  await page.getByRole("button", { name: "Delete", exact: true }).click()
  await expect(page.getByRole("status")).toContainText("Client data deleted")
  await page.getByLabel("Search clients").fill("client-one@example.com")
  await expect(page.getByText("No clients match your search.")).toBeVisible()
  await page.reload()
  await expect(page.getByRole("button").filter({ hasText: "client-one@example.com" })).toHaveCount(0)
  await page.goto("/admin/appointments")
  await page.getByLabel("Search client or service").fill("client-one@example.com")
  await expect(page.getByText("No appointments match these filters.")).toBeVisible()
  const verifyApp = initializeApp({ projectId: "studio-bycristian-oss" }, "verify-crud")
  try {
    const org = getFirestore(verifyApp).collection("organizations").doc("studio-bycristian")
    expect((await org.collection("clients").doc(exported.client.id).get()).exists).toBe(false)
    expect((await org.collection("clients").doc(exported.client.id).collection("notes").get()).empty).toBe(true)
    expect((await org.collection("appointments").where("clientId", "==", exported.client.id).get()).empty).toBe(true)
  } finally { await deleteApp(verifyApp) }
})

test("settings persist and team access can be created, updated, disabled and restored", async ({ page }) => {
  await page.goto("/admin/login")
  await page.getByLabel("Email").fill("admin-e2e@example.com")
  await page.locator('input[type="password"]').fill("Admin-test-2026!")
  await page.getByRole("button", { name: "Sign in" }).click()
  await expect(page).toHaveURL(/\/admin$/)
  await page.goto("/admin/settings")
  await page.getByLabel("Buffer (minutes)").fill("20")
  await page.getByRole("button", { name: "Save settings" }).click()
  await expect(page.getByRole("status")).toContainText("Booking settings saved")
  await page.reload(); await expect(page.getByLabel("Buffer (minutes)")).toHaveValue("20")
  await page.getByLabel("Buffer (minutes)").fill("15")
  await page.getByRole("button", { name: "Save settings" }).click()
  await expect(page.getByRole("status")).toContainText("Booking settings saved")
  await page.goto("/admin/team")
  await page.getByLabel("Name", { exact: true }).fill("E2E Test Member")
  await page.getByLabel("Email", { exact: true }).fill("invited-e2e@example.com")
  await page.getByRole("button", { name: "Send invitation" }).click()
  await expect(page.getByRole("status")).toContainText("Invitation queued")
  await page.getByLabel("Role for E2E Test Member").selectOption("admin")
  await expect(page.getByRole("status")).toContainText("Team member updated")
  await page.getByRole("button", { name: "Disable", exact: true }).click()
  await expect(page.getByRole("button", { name: "Enable", exact: true })).toBeVisible()
  await page.reload(); await expect(page.getByLabel("Role for E2E Test Member")).toHaveValue("admin")
  await page.getByRole("button", { name: "Enable", exact: true }).click()
  await expect(page.getByRole("button", { name: "Disable", exact: true })).toBeVisible()
})

test("every admin page fits mobile, tablet and desktop with usable navigation", async ({ page }, testInfo) => {
  await page.goto("/admin/login")
  await page.getByLabel("Email").fill("admin-e2e@example.com")
  await page.locator('input[type="password"]').fill("Admin-test-2026!")
  await page.getByRole("button", { name: "Sign in" }).click()
  await expect(page).toHaveURL(/\/admin$/)
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const route of ["/admin", "/admin/appointments", "/admin/clients", "/admin/settings", "/admin/team"]) {
      await page.goto(route)
      await expect(page.locator("h1")).toBeVisible()
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1)
      const logo = page.getByRole("img", { name: "Studio ByCristian", exact: true }); const box = await logo.boundingBox(); const aside = await page.locator("aside").boundingBox()
      expect(box!.x + box!.width).toBeLessThanOrEqual(aside!.x + aside!.width)
      if (width < 1024) {
        await page.getByRole("button", { name: "Open navigation" }).click()
        await expect(page.getByRole("navigation", { name: "Administration" })).toBeVisible()
        await page.getByRole("button", { name: "Close navigation" }).click()
      }
      await page.screenshot({ path: testInfo.outputPath(`${route.replaceAll("/", "-")}-${width}.png`), fullPage: true })
    }
  }
})
