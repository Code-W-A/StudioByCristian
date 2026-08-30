"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { signInAnonymously } from "firebase/auth"
import { firebaseAuth } from "@/lib/firebase/client"
import { callFirebase } from "@/lib/firebase/callables"

function BookingResponseContent() {
  const token = useSearchParams().get("token"); const [state, setState] = useState("Processing your secure response…")
  useEffect(() => { async function respond() { if (!token) return setState("This response link is incomplete."); try { if (firebaseAuth && !firebaseAuth.currentUser) await signInAnonymously(firebaseAuth); const result = await callFirebase<{ token: string }, { status: string }>("respondToBooking", { token }); setState(result.status === "confirmed" ? "Thank you. Your proposed consultation time is confirmed." : "The proposed time was declined. Our team has been notified.") } catch (reason) { setState(reason instanceof Error ? reason.message : "The response could not be processed.") } } void respond() }, [token])
  return <div className="flex min-h-[70vh] items-center justify-center bg-[#f3f2ee] p-5"><div className="max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12"><p className="text-xs uppercase tracking-[0.25em] text-black/40">One Stop Shop</p><h1 className="mt-4 text-3xl">Booking response</h1><p className="mt-6 leading-7 text-black/60">{state}</p><Link href="/one-stop-shop" className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm text-white">Return to One Stop Shop</Link></div></div>
}

export default function BookingResponsePage() {
  return <Suspense fallback={<div className="flex min-h-[70vh] items-center justify-center">Loading secure response…</div>}><BookingResponseContent /></Suspense>
}
