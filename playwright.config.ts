import { existsSync } from "node:fs"
import { defineConfig, devices } from "@playwright/test"

const java21 = "/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home"
const emulatorEnv: Record<string, string> = existsSync(java21) ? { JAVA_HOME: java21, PATH: `${java21}/bin:${process.env.PATH}` } : {}

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  timeout: 120_000,
  expect: { timeout: 10_000 },
  reporter: "list",
  use: { baseURL: "http://localhost:3100", trace: "retain-on-failure" },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-chromium", use: { ...devices["Pixel 7"] }, testMatch: /responsive\.spec\.ts/ },
  ],
  webServer: [
    {
      command: "npm --prefix functions run build && FIREBASE_EMULATORS_PATH=.firebase/emulators firebase emulators:start --only auth,firestore,storage,functions --project studio-bycristian-oss",
      url: "http://127.0.0.1:4000",
      env: emulatorEnv,
      timeout: 300_000,
      reuseExistingServer: false,
      gracefulShutdown: { signal: "SIGTERM", timeout: 10_000 },
    },
    {
      command: "NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true npm run build && NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true npm run start -- --hostname 127.0.0.1 --port 3100",
      url: "http://127.0.0.1:3100",
      timeout: 300_000,
      reuseExistingServer: false,
      gracefulShutdown: { signal: "SIGTERM", timeout: 10_000 },
    },
  ],
})
