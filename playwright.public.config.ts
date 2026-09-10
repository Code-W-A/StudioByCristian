import { defineConfig, devices } from "@playwright/test"

/** Read-only public-page checks, without the Firebase emulator/CRUD harness. */
export default defineConfig({
  testDir: "./tests/e2e",
  testMatch: "site-audit.spec.ts",
  workers: 3,
  timeout: 120_000,
  expect: { timeout: 10_000 },
  reporter: "list",
  outputDir: "test-results/public",
  use: { baseURL: "http://localhost:3101", trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run build && npm run start -- --hostname 127.0.0.1 --port 3101",
    url: "http://127.0.0.1:3101",
    timeout: 300_000,
    reuseExistingServer: false,
    gracefulShutdown: { signal: "SIGTERM", timeout: 10_000 },
  },
})
