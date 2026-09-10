import { test, expect } from "@playwright/test"

test("One Stop Shop remains usable on mobile", async ({ page }) => {
  await page.goto("/one-stop-shop")
  const reject = page.getByRole("button", { name: "Reject optional" })
  if (await reject.waitFor({ state: "visible", timeout: 3_000 }).then(() => true).catch(() => false)) await reject.click()
  await expect(page.getByRole("heading", { name: /One partner/, level: 1 })).toBeVisible()
  await page.locator("#book").scrollIntoViewIfNeeded()
  await expect(page.getByRole("button", { name: "Interior Design", exact: true })).toBeVisible()
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1)
})
