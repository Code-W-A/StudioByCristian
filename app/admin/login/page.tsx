"use client"

import { Suspense, useState } from "react"
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { Eye, EyeOff } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { firebaseAuth, isFirebaseConfigured } from "@/lib/firebase/client"

function AdminLoginContent() {
  const router = useRouter(); const search = useSearchParams(); const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [showPassword, setShowPassword] = useState(false); const [error, setError] = useState(search.get("error") === "access" ? "This account does not have dashboard access." : ""); const [busy, setBusy] = useState(false)
  async function login(event: React.FormEvent) { event.preventDefault(); if (!firebaseAuth) return setError("Firebase has not been configured."); setBusy(true); setError(""); try { await signInWithEmailAndPassword(firebaseAuth, email, password); router.replace("/admin") } catch { setError("The email or password is incorrect.") } finally { setBusy(false) } }
  async function reset() { if (!firebaseAuth || !email) return setError("Enter your email first."); await sendPasswordResetEmail(firebaseAuth, email); setError("Password reset email sent.") }
  return <div className="flex min-h-screen items-center justify-center bg-[#111] p-5 text-white"><form onSubmit={login} className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10"><p className="text-xs uppercase tracking-[0.25em] text-white/45">Studio ByCristian</p><h1 className="mt-3 text-3xl">One Stop Shop</h1><p className="mt-2 text-sm text-white/55">Secure team dashboard</p>{!isFirebaseConfigured && <p className="mt-5 rounded-xl bg-amber-300/10 p-4 text-sm text-amber-100">The Firebase web configuration is not present.</p>}<label className="mt-8 block text-sm">Email<input className="mt-2 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none focus:border-white/60" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required /></label><label className="mt-4 block text-sm">Password<div className="relative mt-2"><input className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 pr-12 outline-none focus:border-white/60" type={showPassword ? "text" : "password"} autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required /><button type="button" onClick={() => setShowPassword(value => !value)} className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-white/55 transition-colors hover:text-white" aria-label={showPassword ? "Hide password" : "Show password"} title={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}</button></div></label>{error && <p className="mt-4 text-sm text-amber-200">{error}</p>}<button disabled={busy} className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm text-black disabled:opacity-50">{busy ? "Signing in…" : "Sign in"}</button><button type="button" onClick={() => void reset()} className="mt-4 w-full text-xs text-white/55 underline">Forgot password?</button></form></div>
}

export default function AdminLoginPage() {
  return <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-[#111] text-white">Loading secure login…</div>}><AdminLoginContent /></Suspense>
}
