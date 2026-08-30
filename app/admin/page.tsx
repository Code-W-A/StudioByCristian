"use client"

import Link from "next/link"
import { ArrowRight, CalendarCheck, Clock3, MailWarning } from "lucide-react"
import { AdminHeading, adminCard } from "@/components/admin/admin-shell"
import { dateValue, formatAppointment, useAdminCollection } from "@/components/admin/use-admin-collection"

export default function AdminOverviewPage() {
  const { data: appointments } = useAdminCollection("appointments", "createdAt")
  const { data: activities } = useAdminCollection("activities", "createdAt")
  const { data: emailJobs } = useAdminCollection("emailJobs", "createdAt")
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam" }).format(new Date())
  const todays = appointments.filter(item => item.startsAt && new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam" }).format(dateValue(item.startsAt)!) === today)
  const pending = appointments.filter(item => ["pending", "proposed"].includes(item.status))
  const emailErrors = emailJobs.filter(item => item.status === "failed")
  return <><AdminHeading eyebrow="Dashboard" title="Overview" description="Today’s consultations, pending decisions and recent CRM activity." />
    <div className="grid gap-4 sm:grid-cols-3">{[["Appointments today", todays.length, CalendarCheck], ["Awaiting action", pending.length, Clock3], ["Email failures", emailErrors.length, MailWarning]].map(([label, value, Icon]) => { const CardIcon = Icon as typeof CalendarCheck; return <div key={label as string} className={adminCard}><CardIcon size={20} className="text-black/40" /><p className="mt-8 text-4xl">{value as number}</p><p className="mt-2 text-sm text-black/50">{label as string}</p></div> })}</div>
    <div className="mt-6 grid gap-6 xl:grid-cols-2"><section className={adminCard}><div className="flex items-center justify-between"><h2 className="text-xl">Awaiting action</h2><Link href="/admin/appointments" className="flex items-center gap-2 text-xs">All <ArrowRight size={14} /></Link></div><div className="mt-5 divide-y divide-black/10">{pending.slice(0, 6).map(item => <div key={item.id} className="py-4"><div className="flex justify-between gap-3"><p className="text-sm font-semibold">{item.service}</p><span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] uppercase">{item.status}</span></div><p className="mt-1 text-xs text-black/50">{formatAppointment(item.startsAt)} · {item.mode}</p></div>)}{!pending.length && <p className="py-8 text-sm text-black/45">No pending requests.</p>}</div></section><section className={adminCard}><h2 className="text-xl">Recent activity</h2><div className="mt-5 divide-y divide-black/10">{activities.slice(0, 8).map(item => <div key={item.id} className="py-3"><p className="text-sm">{String(item.type).replaceAll(".", " · ")}</p><p className="mt-1 text-xs text-black/45">{formatAppointment(item.createdAt)}</p></div>)}{!activities.length && <p className="py-8 text-sm text-black/45">Activity will appear here.</p>}</div></section></div>
  </>
}
