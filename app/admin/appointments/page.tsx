"use client"

import { useMemo, useState } from "react"
import { callFirebase } from "@/lib/firebase/callables"
import { AdminHeading, adminCard } from "@/components/admin/admin-shell"
import { dateValue, formatAppointment, useAdminCollection } from "@/components/admin/use-admin-collection"
import { amsterdamInputToIso, appointmentActions } from "@/lib/one-stop-shop/admin-booking"
import type { BookingStatus } from "@/lib/one-stop-shop/constants"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const statuses = ["all", "pending", "proposed", "confirmed", "cancelled", "expired", "completed", "no_show"]
const labels = { confirmed: "Confirm", proposed: "Propose", cancelled: "Cancel", completed: "Complete", no_show: "No-show" }

export default function AppointmentsPage() {
  const { data: appointments, loading, error } = useAdminCollection("appointments", "createdAt")
  const { data: clients } = useAdminCollection("clients", "createdAt")
  const [filter, setFilter] = useState("all"); const [query, setQuery] = useState(""); const [busy, setBusy] = useState(""); const [message, setMessage] = useState("")
  const [proposalId, setProposalId] = useState(""); const [proposalTime, setProposalTime] = useState(""); const [proposalError, setProposalError] = useState("")
  const clientMap = useMemo(() => new Map(clients.map(client => [client.id, client])), [clients])
  const filtered = appointments.filter(item => (filter === "all" || item.status === filter) && `${item.service} ${clientMap.get(item.clientId)?.name ?? ""} ${clientMap.get(item.clientId)?.email ?? ""}`.toLowerCase().includes(query.toLowerCase()))

  async function transition(id: string, status: BookingStatus, proposedStartsAt?: string) {
    if (status === "proposed" && !proposedStartsAt) { setProposalId(id); setProposalTime(""); setProposalError(""); return }
    setBusy(id); setMessage("")
    try { await callFirebase("updateBookingStatus", { appointmentId: id, status, ...(proposedStartsAt ? { proposedStartsAt } : {}) }); setMessage("Appointment updated."); setProposalId("") } catch (reason) { const text = reason instanceof Error ? reason.message : "Update failed."; setMessage(text); setProposalError(text) } finally { setBusy("") }
  }

  return <><AdminHeading eyebrow="Booking" title="Appointments" description="Review consultation requests and manage appointments. All times are Europe/Amsterdam." />
    <div className={`${adminCard} mb-6 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]`}><input aria-label="Search client or service" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search client or service" className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm" /><select aria-label="Appointment status" value={filter} onChange={e => setFilter(e.target.value)} className="rounded-xl border border-black/15 px-4 py-3 text-sm">{statuses.map(status => <option key={status} value={status}>{status === "all" ? "All statuses" : status.replaceAll("_", " ")}</option>)}</select></div>
    {message && <p role="status" className="mb-5 rounded-xl bg-white p-4 text-sm">{message}</p>}{error && <p role="alert" className="mb-5 text-sm text-red-700">{error}</p>}
    <section className={adminCard} aria-label="Appointment list">
      <div className="hidden grid-cols-[1.1fr_1.2fr_1fr_.7fr] gap-4 border-b pb-4 text-xs font-semibold uppercase tracking-wider text-black/50 xl:grid"><span>Date & format</span><span>Client</span><span>Service</span><span>Status</span></div>
      <div className="divide-y divide-black/10">{filtered.map(item => { const client = clientMap.get(item.clientId); return <article key={item.id} className="py-5 first:pt-2 xl:first:pt-5" aria-label={`Appointment for ${client?.name ?? "client"}`}>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1.1fr_1.2fr_1fr_.7fr]">
          <div><p className="text-sm font-semibold">{formatAppointment(item.startsAt)}</p><p className="mt-1 text-xs capitalize text-black/60">{item.mode}</p></div>
          <div className="min-w-0"><p className="text-sm font-semibold">{client?.name ?? "—"}</p><p className="mt-1 break-all text-xs text-black/60">{client?.email}</p></div>
          <p className="text-sm">{item.service}</p><div><span className={`inline-flex rounded-full px-3 py-1 text-xs capitalize ${item.status === "confirmed" ? "bg-green-50 text-green-800" : ["pending", "proposed"].includes(item.status) ? "bg-amber-50 text-amber-900" : "bg-black/5 text-black/65"}`}>{item.status.replaceAll("_", " ")}</span></div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 xl:justify-end">{appointmentActions(item.status, dateValue(item.startsAt)).map(status => <button key={status} disabled={busy === item.id} onClick={() => void transition(item.id, status)} className={`rounded-lg border px-4 py-2 text-xs ${status === "confirmed" ? "border-black bg-black text-white" : "hover:bg-black/5"}`}>{labels[status]}</button>)}</div>
      </article> })}</div>
      {loading && <p role="status" className="py-12 text-center text-sm text-black/60">Loading appointments…</p>}
      {!loading && !filtered.length && <p className="py-12 text-center text-sm text-black/60">No appointments match these filters.</p>}
    </section>
    <Dialog open={Boolean(proposalId)} onOpenChange={open => { if (!open && !busy) setProposalId("") }}><DialogContent className="admin-ui"><DialogHeader><DialogTitle>Propose a new time</DialogTitle><DialogDescription>Enter the date and time in Europe/Amsterdam. The client can accept or decline the proposal.</DialogDescription></DialogHeader><form onSubmit={event => { event.preventDefault(); try { const iso = amsterdamInputToIso(proposalTime); void transition(proposalId, "proposed", iso) } catch (reason) { setProposalError(reason instanceof Error ? reason.message : "Invalid date.") } }}><label className="block text-sm">Amsterdam date and time<input required type="datetime-local" value={proposalTime} onChange={e => setProposalTime(e.target.value)} className="mt-2 w-full rounded-xl border p-3" /></label>{proposalError && <p role="alert" className="mt-3 text-sm text-red-700">{proposalError}</p>}<button disabled={Boolean(busy)} className="mt-5 w-full rounded-xl bg-black p-3 text-sm text-white">{busy ? "Saving…" : "Send proposal"}</button></form></DialogContent></Dialog>
  </>
}
