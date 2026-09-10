import { test, expect } from "@playwright/test"
import { readdirSync } from "node:fs"

const routes = readdirSync("app", { recursive: true }).map(String).filter(file => file.endsWith("page.tsx") && !file.startsWith("admin/")).map(file => "/" + file.replace(/(^|\/)page\.tsx$/, ""))

for (const width of [360, 768, 1440]) {
  test.describe(`all public pages at ${width}px`, () => {
    test.describe.configure({ mode: "parallel" })
    test.use({ viewport: { width, height: 900 }, contextOptions: { reducedMotion: "reduce" } })
    for (const route of routes) test(`${route} loads without horizontal overflow`, async ({ page }, testInfo) => {
      const errors: string[] = []
      page.on("pageerror", error => errors.push(error.message))
      const response = await page.goto(route)
      expect(response?.status()).toBeLessThan(400)
      await expect(page.locator("h1:visible").first()).toBeVisible()
      const reject = page.getByRole("button", { name: "Reject optional" })
      if (await reject.isVisible()) await reject.click()
      // Visit the entire page so lazy sections participate in layout measurements.
      await page.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += 800) { window.scrollTo(0, y); await new Promise(resolve => setTimeout(resolve, 30)) }
        window.scrollTo(0, 0)
      })
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1)
      expect(errors).toEqual([])
      await page.screenshot({ path: testInfo.outputPath("responsive.png") })
    })
  })
}

test("all six service photos load at high quality and keyboard/mobile controls work", async ({ page }) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto("/one-stop-shop")
    const reject = page.getByRole("button", { name: "Reject optional" }); if (await reject.isVisible()) await reject.click()
    const names = ["Small Renovation", "Bathroom Renovation", "Painting & Finishing", "Custom Furniture", "Interior Design", "Turn-Key Renovation"]
    for (let i = 0; i < names.length; i++) {
      const control = page.locator(width < 1024 ? `[aria-controls="mobile-service-${i}"]` : '[aria-controls="service-visual"]').filter({ hasText: names[i] })
      await control.focus(); await control.press("Enter")
      await expect(control).toHaveAttribute(width < 1024 ? "aria-expanded" : "aria-pressed", "true")
      const photo = width < 1024 ? page.locator(`#mobile-service-${i} img`) : page.locator('#service-visual img[aria-hidden="false"]')
      await expect.poll(() => photo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true)
      expect(await photo.getAttribute("src")).toContain("q=95")
      expect(await photo.getAttribute("src")).toContain("optimized")
    }
  }
})

for (const route of ["/about", "/private-residential-holiday-house", "/ravi-roy-spa-retreat-hotel", "/turn-key-management-private-villa-wassenaar", "/work-archive/luxury-stores"]) {
  test(`portfolio images decode successfully on ${route}`, async ({ page }) => {
    await page.goto(route)
    const reject = page.getByRole("button", { name: "Reject optional" }); if (await reject.isVisible()) await reject.click()
    const failures: string[] = []
    page.on("response", response => { if (response.request().resourceType() === "image" && response.status() >= 400) failures.push(response.url()) })
    const broken = await page.evaluate(async () => {
      const imgs = Array.from(document.images)
      imgs.forEach(img => { img.loading = "eager" })
      const results = await Promise.all(imgs.map(async img => {
        try { await img.decode(); return null } catch { return img.currentSrc || img.src }
      }))
      return results.filter(Boolean)
    })
    expect(broken).toEqual([])
    expect(failures).toEqual([])
  })
}

test("admin login fits mobile, tablet and desktop and supports password visibility", async ({ page }, testInfo) => {
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/admin/login")
    await expect(page.getByRole("button", { name: "Sign in", exact: true })).toBeVisible()
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1)
    await page.getByRole("button", { name: "Show password" }).click()
    await expect(page.locator('input[autocomplete="current-password"]')).toHaveAttribute("type", "text")
    await page.getByRole("button", { name: "Hide password" }).click()
    await expect(page.locator('input[autocomplete="current-password"]')).toHaveAttribute("type", "password")
    await page.screenshot({ path: testInfo.outputPath(`login-${width}.png`) })
  }
})
