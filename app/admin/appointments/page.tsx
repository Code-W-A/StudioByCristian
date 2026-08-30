"use client"

import { useMemo, useState } from "react"
import { callFirebase } from "@/lib/firebase/callables"
import { AdminHeading, adminCard } from "@/components/admin/admin-shell"
import { dateValue, formatAppointment, useAdminCollection } from "@/components/admin/use-admin-collection"
import type { BookingStatus } from "@/lib/one-stop-shop/constants"

const statuses = ["all", "pending", "proposed", "confirmed", "cancelled", "expired", "completed", "no_show"]

export default function AppointmentsPage() {
  const { data: appointments, loading, error } = useAdminCollection("appointments", "createdAt")
  const { data: clients } = useAdminCollection("clients", "createdAt")
  const [filter, setFilter] = useState("all"); const [query, setQuery] = useState(""); const [busy, setBusy] = useState(""); const [message, setMessage] = useState("")
  const clientMap = useMemo(() => new Map(clients.map(client => [client.id, client])), [clients])
  const filtered = appointments.filter(item => (filter === "all" || item.status === filter) && `${item.service} ${clientMap.get(item.clientId)?.name ?? ""} ${clientMap.get(item.clientId)?.email ?? ""}`.toLowerCase().includes(query.toLowerCase()))

  async function transition(id: string, status: BookingStatus) {
    let proposedStartsAt: string | undefined
    if (status === "proposed") { const local = window.prompt("Proposed Amsterdam date/time (YYYY-MM-DDTHH:mm)"); if (!local) return; proposedStartsAt = new Date(local).toISOString() }
    setBusy(id); setMessage("")
    try { await callFirebase("updateBookingStatus", { appointmentId: id, status, proposedStartsAt }); setMessage("Appointment updated. The appropriate email was queued.") } catch (reason) { setMessage(reason instanceof Error ? reason.message : "Update failed.") } finally { setBusy("") }
  }

  return <><AdminHeading eyebrow="Booking" title="Appointments" description="Calendar and filterable request list. Times are Europe/Amsterdam." />
    <div className={`${adminCard} mb-6 grid gap-3 md:grid-cols-[1fr_auto]`}><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search client or service" className="rounded-xl border border-black/15 px-4 py-3 text-sm" /><select value={filter} onChange={e => setFilter(e.target.value)} className="rounded-xl border border-black/15 px-4 py-3 text-sm">{statuses.map(status => <option key={status}>{status}</option>)}</select></div>
    {message && <p className="mb-5 rounded-xl bg-white p-4 text-sm">{message}</p>}{error && <p className="mb-5 text-sm text-red-700">{error}</p>}
    <section className={adminCard}><div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm"><thead><tr className="border-b border-black/10 text-xs uppercase tracking-wider text-black/40"><th className="pb-4">Date</th><th className="pb-4">Client</th><th className="pb-4">Service</th><th className="pb-4">Format</th><th className="pb-4">Status</th><th className="pb-4 text-right">Actions</th></tr></thead><tbody className="divide-y divide-black/10">{filtered.map(item => { const client = clientMap.get(item.clientId); const future = (dateValue(item.startsAt)?.getTime() ?? 0) > Date.now(); return <tr key={item.id}><td className="py-4 pr-4">{formatAppointment(item.startsAt)}</td><td className="py-4 pr-4"><p>{client?.name ?? "—"}</p><p className="text-xs text-black/45">{client?.email}</p></td><td className="py-4 pr-4">{item.service}</td><td className="py-4 capitalize">{item.mode}</td><td className="py-4"><span className="rounded-full bg-black/5 px-2 py-1 text-xs capitalize">{item.status}</span></td><td className="py-4 text-right"><div className="flex justify-end gap-2">{item.status === "pending" && <><button disabled={busy === item.id} onClick={() => void transition(item.id, "confirmed")} className="rounded-lg bg-black px-3 py-2 text-xs text-white">Confirm</button><button disabled={busy === item.id} onClick={() => void transition(item.id, "proposed")} className="rounded-lg border px-3 py-2 text-xs">Propose</button></>}{future && !["cancelled", "expired"].includes(item.status) && <button disabled={busy === item.id} onClick={() => void transition(item.id, "cancelled")} className="rounded-lg border px-3 py-2 text-xs">Cancel</button>}{item.status === "confirmed" && !future && <><button onClick={() => void transition(item.id, "completed")} className="rounded-lg border px-3 py-2 text-xs">Complete</button><button onClick={() => void transition(item.id, "no_show")} className="rounded-lg border px-3 py-2 text-xs">No-show</button></>}</div></td></tr>})}</tbody></table>{!loading && !filtered.length && <p className="py-12 text-center text-sm text-black/45">No appointments match these filters.</p>}</div></section>
  </>
}
