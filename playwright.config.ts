import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  timeout: 120_000,
  expect: { timeout: 10_000 },
  reporter: "list",
  use: { baseURL: "http://127.0.0.1:3100", trace: "retain-on-failure" },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-chromium", use: { ...devices["Pixel 7"] }, testMatch: /responsive\.spec\.ts/ },
  ],
  webServer: [
    {
      command: "npm --prefix functions run build && FIREBASE_EMULATORS_PATH=.firebase/emulators firebase emulators:start --only auth,firestore,storage,functions --project studio-bycristian-oss",
      url: "http://127.0.0.1:4000",
      timeout: 120_000,
      reuseExistingServer: false,
    },
    {
      command: "NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true npm run build && NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true npm run start -- --hostname 127.0.0.1 --port 3100",
      url: "http://127.0.0.1:3100",
      timeout: 120_000,
      reuseExistingServer: false,
    },
  ],
})
