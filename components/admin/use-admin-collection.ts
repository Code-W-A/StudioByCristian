"use client"

import { collection, onSnapshot, orderBy, query, type DocumentData } from "firebase/firestore"
import { useEffect, useState } from "react"
import { firestore } from "@/lib/firebase/client"
import { ORGANIZATION_ID } from "@/lib/one-stop-shop/constants"

export type AdminDocument = DocumentData & { id: string }

export function useAdminCollection(path: string, orderField?: string) {
  const [data, setData] = useState<AdminDocument[]>([]); const [loading, setLoading] = useState(true); const [error, setError] = useState("")
  useEffect(() => {
    if (!firestore) { setLoading(false); return }
    setData([]); setLoading(true); setError("")
    const reference = collection(firestore, `organizations/${ORGANIZATION_ID}/${path}`)
    const target = orderField ? query(reference, orderBy(orderField, "desc")) : query(reference)
    const unsubscribe = onSnapshot(target, snapshot => { setData(snapshot.docs.map(document => ({ id: document.id, ...document.data() }))); setLoading(false) }, reason => { setError(reason.message); setLoading(false) })
    return unsubscribe
  }, [path, orderField])
  return { data, loading, error }
}

export function dateValue(value: unknown) {
  if (value && typeof value === "object" && "toDate" in value && typeof value.toDate === "function") return value.toDate() as Date
  const date = value ? new Date(String(value)) : null
  return date && Number.isFinite(date.getTime()) ? date : null
}

export function formatAppointment(value: unknown) {
  const date = dateValue(value); if (!date) return "—"
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Amsterdam" }).format(date)
}
