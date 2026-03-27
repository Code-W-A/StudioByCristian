"use client"

import { useEffect, useState } from "react"

const CONSENT_STORAGE_KEY = "studio-bycristian-cookie-consent"
const CONSENT_COOKIE_NAME = "studio_bycristian_cookie_consent"
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180

type ConsentValue = "accepted" | "necessary"

function readCookie(name: string) {
  if (typeof document === "undefined") return null

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`))

  return cookie ? cookie.split("=")[1] : null
}

export default function CookieConsentBanner() {
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const savedChoice =
      (typeof window !== "undefined" ? window.localStorage.getItem(CONSENT_STORAGE_KEY) : null) ||
      readCookie(CONSENT_COOKIE_NAME)

    if (!savedChoice) {
      setIsVisible(true)
    }
  }, [])

  const persistConsent = (value: ConsentValue) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
    }

    document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${CONSENT_MAX_AGE}; samesite=lax`
    setIsVisible(false)
  }

  if (!isMounted || !isVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-2xl">
      <section
        aria-label="Cookie consent"
        className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-white shadow-2xl sm:px-6"
      >
        <p className="text-sm leading-6 text-white/85 sm:text-[15px]">
          We use necessary cookies to keep this site reliable and remember your preferences. You can
          accept all cookies or continue with only essential cookies.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => persistConsent("necessary")}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Only necessary
          </button>
          <button
            type="button"
            onClick={() => persistConsent("accepted")}
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Accept
          </button>
        </div>
      </section>
    </div>
  )
}
