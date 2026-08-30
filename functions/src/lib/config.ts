import { getApps, initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { getStorage } from "firebase-admin/storage"

if (!getApps().length) initializeApp()

export const db = getFirestore()
export const bucket = getStorage().bucket()
export const REGION = "europe-west1"
export const ORG_ID = "studio-bycristian"
export const org = db.collection("organizations").doc(ORG_ID)
export const callableOptions = {
  region: REGION,
  enforceAppCheck: process.env.FUNCTIONS_EMULATOR !== "true",
  cors: ["https://www.studiobycristian.com", "https://studiobycristian.com", /localhost:\d+$/],
}

export const defaultSettings = {
  timeZone: "Europe/Amsterdam",
  durationMinutes: 60,
  bufferMinutes: 15,
  minimumNoticeHours: 24,
  bookingWindowDays: 60,
  pendingHoldHours: 24,
  reminderHours: 24,
  weeklySchedule: {
    "1": [{ start: "09:00", end: "17:00" }],
    "2": [{ start: "09:00", end: "17:00" }],
    "3": [{ start: "09:00", end: "17:00" }],
    "4": [{ start: "09:00", end: "17:00" }],
    "5": [{ start: "09:00", end: "17:00" }],
  },
  blockedDates: [] as string[],
}
