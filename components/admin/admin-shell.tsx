"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { onAuthStateChanged, signOut, type User } from "firebase/auth"
import { useEffect, useState } from "react"
import { CalendarDays, Contact, LayoutDashboard, LogOut, Settings, Users } from "lucide-react"
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

  if (pathname === "/admin/login") return <>{children}</>
  if (loading) return <div className="flex min-h-screen items-center justify-center bg-[#f3f2ee] text-sm">Checking secure access…</div>
  if (!isFirebaseConfigured) return <div className="mx-auto max-w-xl p-12"><h1 className="text-3xl">Firebase configuration required</h1><p className="mt-4 leading-7 text-black/60">Add the public Firebase web configuration to the Vercel environment before using the dashboard.</p></div>
  if (!session) return null
  if (session.role === "staff" && ["/admin/settings", "/admin/team"].includes(pathname)) return <div className="flex min-h-screen items-center justify-center bg-[#f3f2ee] p-5"><div className="max-w-lg rounded-2xl bg-white p-8"><h1 className="text-2xl">Admin access required</h1><p className="mt-3 text-sm leading-6 text-black/55">Staff accounts cannot view team management or sensitive booking settings.</p><Link href="/admin" className="mt-6 inline-flex rounded-full bg-black px-5 py-2.5 text-sm text-white">Return to overview</Link></div></div>

  return <div className="min-h-screen bg-[#f3f2ee] text-[#171717] lg:grid lg:grid-cols-[250px_1fr]">
    <aside className="border-b border-black/10 bg-black p-5 text-white lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:p-6">
      <div className="flex items-center justify-between"><Image src="/sigla/StudiobyCristian-sigla-nou.png" width={170} height={45} alt="Studio ByCristian" className="h-10 w-auto" /><span className="rounded-full border border-white/15 px-2 py-1 text-[10px] uppercase tracking-wider text-white/60">{session.role}</span></div>
      <p className="mt-5 text-xs uppercase tracking-[0.25em] text-white/40">One Stop Shop</p>
      <nav className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-1">{links.filter(link => !link.adminOnly || session.role === "admin").map(link => { const Icon = link.icon; const active = pathname === link.href; return <Link key={link.href} href={link.href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm ${active ? "bg-white text-black" : "text-white/65 hover:bg-white/10 hover:text-white"}`}><Icon size={17} />{link.label}</Link> })}</nav>
      <button type="button" onClick={() => firebaseAuth && void signOut(firebaseAuth)} className="mt-7 flex items-center gap-3 px-3 py-3 text-sm text-white/55 hover:text-white"><LogOut size={17} />Sign out</button>
    </aside>
    <main className="min-w-0 p-5 sm:p-8 lg:p-10">{children}</main>
  </div>
}

export function AdminHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: React.ReactNode }) {
  return <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[0.24em] text-black/45">{eyebrow}</p><h1 className="mt-2 text-3xl sm:text-4xl">{title}</h1>{description && <p className="mt-3 text-sm text-black/55">{description}</p>}</div>{action}</div>
}

export const adminCard = "rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
