"use client"

import { getApp, getApps, initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
import { connectFunctionsEmulator, getFunctions } from "firebase/functions"
import { connectStorageEmulator, getStorage } from "firebase/storage"
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId)

const app = isFirebaseConfigured ? (getApps().length ? getApp() : initializeApp(firebaseConfig)) : null
export const firebaseAuth = app ? getAuth(app) : null
export const firestore = app ? getFirestore(app) : null
export const firebaseFunctions = app ? getFunctions(app, "europe-west1") : null
export const firebaseStorage = app ? getStorage(app) : null

declare global { interface Window { FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string } }

if (app && typeof window !== "undefined") {
  const state = window as typeof window & { __firebaseOssInitialized?: boolean }
  if (!state.__firebaseOssInitialized) {
    state.__firebaseOssInitialized = true
    if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true") {
      connectAuthEmulator(firebaseAuth!, "http://127.0.0.1:9099", { disableWarnings: true })
      connectFirestoreEmulator(firestore!, "127.0.0.1", 8080)
      connectFunctionsEmulator(firebaseFunctions!, "127.0.0.1", 5001)
      connectStorageEmulator(firebaseStorage!, "127.0.0.1", 9199)
    } else if (process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY) {
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY),
        isTokenAutoRefreshEnabled: true,
      })
    }
  }
}
