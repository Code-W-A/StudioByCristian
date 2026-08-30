import Link from "next/link"

export function LegalPage({ label, title, version, children }: { label: string; title: string; version: string; children: React.ReactNode }) {
  return <article className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
    <p className="text-xs uppercase tracking-[0.28em] text-black/45">{label}</p>
    <h1 className="mt-5 text-4xl sm:text-6xl">{title}</h1>
    <p className="mt-5 text-sm text-black/50">Version {version} · Last updated 27 August 2026</p>
    <div className="mt-14 max-w-none space-y-10 leading-7 text-black/70">{children}</div>
    <div className="mt-16 border-t border-black/10 pt-8 text-sm"><Link href="/one-stop-shop" className="underline">Return to One Stop Shop</Link></div>
  </article>
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="mb-4 text-2xl text-black">{title}</h2><div className="space-y-4">{children}</div></section>
}
