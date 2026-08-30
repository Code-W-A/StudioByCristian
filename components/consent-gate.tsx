"use client"

import { useEffect, useState } from "react"
import { COOKIE_SETTINGS_EVENT } from "@/components/cookie-consent-banner"

const KEY = "studio-bycristian-cookie-consent-v2"

export default function ConsentGate({ children, category = "marketing", compact = false }: { children: React.ReactNode; category?: "analytics" | "marketing"; compact?: boolean }) {
  const [allowed, setAllowed] = useState(false)
  useEffect(() => {
    const read = () => {
      try { const consent = JSON.parse(window.localStorage.getItem(KEY) ?? "null"); setAllowed(Boolean(consent?.[category])) }
      catch { setAllowed(false) }
    }
    read(); window.addEventListener("studio:consent-changed", read)
    return () => window.removeEventListener("studio:consent-changed", read)
  }, [category])
  if (allowed) return <>{children}</>
  return <div className={`flex h-full w-full items-center justify-center bg-neutral-900 text-center text-white ${compact ? "p-3" : "min-h-48 p-6"}`}><div><p className="text-xs leading-5 text-white/60">External media is blocked until you allow optional cookies.</p><button type="button" onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))} className="mt-3 rounded-full border border-white/30 px-4 py-2 text-xs">Cookie settings</button></div></div>
}
