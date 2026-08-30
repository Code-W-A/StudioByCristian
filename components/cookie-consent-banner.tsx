"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { LEGAL_VERSIONS } from "@/lib/one-stop-shop/constants"

const KEY = "studio-bycristian-cookie-consent-v2"
const COOKIE = "studio_bycristian_cookie_consent"
const MAX_AGE = 60 * 60 * 24 * 180
export const COOKIE_SETTINGS_EVENT = "studio:cookie-settings"
type Consent = { necessary: true; analytics: boolean; marketing: boolean; version: string; updatedAt: string }

function persist(value: Consent) {
  const serialized = JSON.stringify(value)
  window.localStorage.setItem(KEY, serialized)
  document.cookie = `${COOKIE}=${encodeURIComponent(serialized)}; path=/; max-age=${MAX_AGE}; samesite=lax; secure`
  window.dispatchEvent(new CustomEvent("studio:consent-changed", { detail: value }))
}

export function CookieSettingsButton({ className = "underline" }: { className?: string }) {
  return <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}>Manage cookie preferences</button>
}

export default function CookieConsentBanner() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [details, setDetails] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY)
      if (!saved) setVisible(true)
      else { const value = JSON.parse(saved) as Consent; setAnalytics(Boolean(value.analytics)); setMarketing(Boolean(value.marketing)) }
    } catch { setVisible(true) }
    const open = () => { setVisible(true); setDetails(true) }
    window.addEventListener(COOKIE_SETTINGS_EVENT, open)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, open)
  }, [])

  function save(nextAnalytics: boolean, nextMarketing: boolean) {
    persist({ necessary: true, analytics: nextAnalytics, marketing: nextMarketing, version: LEGAL_VERSIONS.cookies, updatedAt: new Date().toISOString() })
    setAnalytics(nextAnalytics); setMarketing(nextMarketing); setVisible(false)
  }

  if (!visible || pathname.startsWith("/admin")) return null
  return <div className="fixed inset-0 z-[100] flex items-end bg-black/30 p-4 sm:items-center sm:justify-center" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
    <section className="w-full max-w-2xl rounded-2xl border border-white/10 bg-black p-5 text-white shadow-2xl sm:p-7">
      <p className="text-xs uppercase tracking-[0.25em] text-white/50">Privacy choices</p><h2 id="cookie-title" className="mt-3 text-2xl">Your cookie preferences</h2>
      <p className="mt-3 text-sm leading-6 text-white/70">Necessary technologies keep the site secure and functional. Analytics and marketing remain off unless you choose them. Read our <Link href="/cookie-policy" className="underline">Cookie Policy</Link>.</p>
      {details && <div className="mt-5 divide-y divide-white/10 rounded-xl border border-white/10 px-4">
        <div className="flex items-center justify-between py-4"><div><p className="text-sm">Necessary</p><p className="text-xs text-white/45">Security, consent choice and requested features</p></div><span className="text-xs text-white/50">Always active</span></div>
        <label className="flex items-center justify-between py-4"><div><p className="text-sm">Analytics</p><p className="text-xs text-white/45">Aggregate usage measurement</p></div><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="h-5 w-5" /></label>
        <label className="flex items-center justify-between py-4"><div><p className="text-sm">Marketing</p><p className="text-xs text-white/45">Advertising measurement or personalisation</p></div><input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} className="h-5 w-5" /></label>
      </div>}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <button type="button" onClick={() => save(false, false)} className="rounded-full border border-white/35 px-4 py-3 text-sm">Reject optional</button>
        {details ? <button type="button" onClick={() => save(analytics, marketing)} className="rounded-full border border-white/35 px-4 py-3 text-sm">Save choices</button> : <button type="button" onClick={() => setDetails(true)} className="rounded-full border border-white/35 px-4 py-3 text-sm">Customise</button>}
        <button type="button" onClick={() => save(true, true)} className="rounded-full bg-white px-4 py-3 text-sm text-black">Accept all</button>
      </div>
    </section>
  </div>
}
