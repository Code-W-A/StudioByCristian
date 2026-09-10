"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { onAuthStateChanged, signOut, type User } from "firebase/auth"
import { useEffect, useState } from "react"
import { CalendarDays, Contact, LayoutDashboard, LogOut, Settings, Users, Menu, X } from "lucide-react"
import { firebaseAuth, isFirebaseConfigured } from "@/lib/firebase/client"

export type AdminSession = { user: User; role: "admin" | "staff" }
const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/admin/clients", label: "Clients", icon: Contact },
  { href: "/admin/settings", label: "Settings", icon: Settings, adminOnly: true },
  { href: "/admin/team", label: "Team", icon: Users, adminOnly: true },
]

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); const router = useRouter()
  const [session, setSession] = useState<AdminSession | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = firebaseAuth
    if (!auth) { setLoading(false); return }
    return onAuthStateChanged(auth, async (user) => {
      if (!user) { setSession(null); setLoading(false); if (pathname !== "/admin/login") router.replace("/admin/login"); return }
      const token = await user.getIdTokenResult(true)
      const role = token.claims.role
      if (token.claims.orgId !== "studio-bycristian" || (role !== "admin" && role !== "staff")) {
        await signOut(auth); setSession(null); router.replace("/admin/login?error=access")
      } else setSession({ user, role })
      setLoading(false)
    })
  }, [pathname, router])

  if (pathname === "/admin/login") return <div className="admin-ui">{children}</div>
  if (loading) return <div className="flex min-h-screen items-center justify-center bg-[#f3f2ee] text-sm">Checking secure access…</div>
  if (!isFirebaseConfigured) return <div className="mx-auto max-w-xl p-12"><h1 className="text-3xl">Firebase configuration required</h1><p className="mt-4 leading-7 text-black/60">Add the public Firebase web configuration to the Vercel environment before using the dashboard.</p></div>
  if (!session) return null
  if (session.role === "staff" && ["/admin/settings", "/admin/team"].includes(pathname)) return <div className="flex min-h-screen items-center justify-center bg-[#f3f2ee] p-5"><div className="max-w-lg rounded-2xl bg-white p-8"><h1 className="text-2xl">Admin access required</h1><p className="mt-3 text-sm leading-6 text-black/55">Staff accounts cannot view team management or sensitive booking settings.</p><Link href="/admin" className="mt-6 inline-flex rounded-full bg-black px-5 py-2.5 text-sm text-white">Return to overview</Link></div></div>

  return <div className="admin-ui min-h-screen bg-[#f3f2ee] text-[#171717] lg:grid lg:grid-cols-[256px_minmax(0,1fr)]">
    <aside className="border-b border-black/10 bg-[#171918] p-5 text-white lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto lg:border-b-0 lg:p-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/admin" aria-label="Studio ByCristian overview" className="min-w-0"><Image src="/sigla/StudiobyCristian-sigla-nou.png" width={170} height={45} alt="Studio ByCristian" className="h-auto w-[170px] max-w-full" /></Link>
        <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="admin-navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-white/20 p-2 lg:hidden">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <div className="mt-5 hidden items-center justify-between gap-2 lg:flex"><p className="text-[10px] uppercase tracking-[0.2em] text-white/55">One Stop Shop</p><span className="rounded-full border border-white/20 px-2 py-1 text-[10px] uppercase text-white/70">{session.role}</span></div>
      <div id="admin-navigation" className={`${menuOpen ? "block" : "hidden"} lg:flex lg:flex-1 lg:flex-col`}>
        <nav aria-label="Administration" className="mt-7 grid gap-2">{links.filter(link => !link.adminOnly || session.role === "admin").map(link => { const Icon = link.icon; const active = pathname === link.href; return <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} aria-current={active ? "page" : undefined} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors ${active ? "bg-[#e6eadf] font-semibold text-[#243126]" : "text-white/70 hover:bg-white/10 hover:text-white"}`}><Icon size={18} className="shrink-0" />{link.label}</Link> })}</nav>
        <div className="mt-7 border-t border-white/15 pt-4 lg:mt-auto"><p className="break-all px-3 text-xs text-white/55">{session.user.email}</p><button type="button" onClick={() => firebaseAuth && void signOut(firebaseAuth)} className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"><LogOut size={17} />Sign out</button></div>
      </div>
    </aside>
    <div className="min-w-0 p-4 sm:p-8 lg:p-10"><div className="mx-auto max-w-[1440px]">{children}</div></div>
  </div>
}

export function AdminHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: React.ReactNode }) {
  return <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div className="min-w-0"><p className="text-xs uppercase tracking-[0.24em] text-black/45">{eyebrow}</p><h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>{description && <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60">{description}</p>}</div>{action}</div>
}

export const adminCard = "min-w-0 rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-6"
