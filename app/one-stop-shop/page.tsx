import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, Check } from "lucide-react"
import BookingWizard from "@/components/one-stop-shop/booking-wizard"

const services = [
  ["Small Renovation", "Focused upgrades, repairs and spatial improvements without a full rebuild."],
  ["Bathroom Renovation", "Complete bathroom planning, materials, technical coordination and installation."],
  ["Painting & Finishing", "Careful preparation and refined finishes that complete the space."],
  ["Custom Furniture", "Made-to-measure kitchens, wardrobes, joinery and statement pieces."],
  ["Interior Design", "Concept, layouts, materials, lighting and technical drawings."],
  ["Turn-Key Renovation", "One accountable team from first idea to final handover."],
]
const benefits = ["One point of contact", "One coordinated planning", "Clear responsibility", "Consistent quality", "Fewer delays and handovers", "A space designed as one complete whole"]
const process = ["Listen & understand", "Define scope", "Design & specify", "Plan & coordinate", "Build & furnish", "Deliver the finished space"]
const scopeGroups = [
  ["Renovation & Construction", ["Demolition and structural coordination", "Electrical, plumbing and climate systems", "Bathrooms, flooring, painting and finishing"]],
  ["Custom Furniture & Joinery", ["Kitchens and wardrobes", "Built-in storage and wall systems", "Bespoke residential and commercial furniture"]],
  ["Design & Project Guidance", ["Interior concepts and layouts", "Materials, colours and lighting", "Technical drawings and project management"]],
  ["Sourcing & Installation", ["Furniture, lighting and accessories", "Supplier coordination and logistics", "Installation, styling and handover"]],
]

export default function OneStopShopPage() {
  return <div className="bg-white text-[#171717]">
    <section className="relative min-h-[82vh] overflow-hidden bg-black text-white">
      <Image src="/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-Banner-2048x800.jpg.jpeg" alt="Complete Studio ByCristian interior project" fill priority sizes="100vw" className="object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />
      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-white/65">Design · Renovate · Furnish · Deliver</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-normal leading-[1.06] sm:text-6xl lg:text-8xl">One partner.<br />Your entire space.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">A One-Stop Shop for interior projects — from the first idea to the final detail, coordinated by one experienced team.</p>
        <div className="mt-10 flex flex-wrap gap-4"><Link href="#book" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm text-black">Book a Project Consultation <ArrowRight size={16} /></Link><Link href="#concept" className="inline-flex items-center gap-3 rounded-full border border-white/35 px-6 py-3 text-sm">Explore the concept <ArrowDown size={16} /></Link></div>
      </div>
    </section>

    <section id="concept" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-32">
      <p className="text-xs uppercase tracking-[0.3em] text-black/45">The concept</p>
      <div><h2 className="text-4xl leading-tight sm:text-5xl">Your project should feel connected, not fragmented.</h2><p className="mt-7 text-lg leading-8 text-black/65">Instead of coordinating separate designers, builders, suppliers and installers, you work with one partner who sees the complete picture. Start with one focused service or combine everything into a fully managed interior project.</p></div>
    </section>

    <section className="bg-[#f2f0eb] py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><p className="text-xs uppercase tracking-[0.3em] text-black/45">Start small. Go complete.</p><h2 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Choose only what your project needs.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-black/10 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, text], index) => <article key={title} className="bg-[#f8f7f3] p-7"><span className="text-xs text-black/35">0{index + 1}</span><h3 className="mt-8 text-2xl">{title}</h3><p className="mt-4 text-sm leading-6 text-black/60">{text}</p></article>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs uppercase tracking-[0.3em] text-black/45">Everything your project needs</p><h2 className="mt-4 text-4xl leading-tight">Expertise under one roof.</h2></div><div className="grid gap-8 sm:grid-cols-2">{scopeGroups.map(([title, items]) => <div key={title as string} className="border-t border-black/20 pt-5"><h3 className="text-xl">{title as string}</h3><ul className="mt-5 space-y-3">{(items as string[]).map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-black/60"><Check size={15} className="mt-1 shrink-0" />{item}</li>)}</ul></div>)}</div></div></section>

    <section className="bg-black py-24 text-white lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><p className="text-xs uppercase tracking-[0.3em] text-white/45">Why one partner works better</p><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{benefits.map((benefit, index) => <div key={benefit} className="border-t border-white/20 pt-6"><span className="text-xs text-white/35">0{index + 1}</span><h3 className="mt-5 text-2xl">{benefit}</h3></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><p className="text-xs uppercase tracking-[0.3em] text-black/45">How it works</p><h2 className="mt-4 text-4xl sm:text-5xl">A clear route from idea to handover.</h2><ol className="mt-14 grid gap-5 md:grid-cols-3">{process.map((item, index) => <li key={item} className="rounded-2xl border border-black/10 p-7"><span className="text-xs text-black/35">Step {index + 1}</span><h3 className="mt-12 text-xl">{item}</h3></li>)}</ol></section>

    <section className="bg-[#f2f0eb] py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><p className="text-xs uppercase tracking-[0.3em] text-black/45">Built around your project</p><div className="mt-10 grid gap-5 lg:grid-cols-3">{[["Essential", "One focused service delivered with the same care and quality."], ["Combined", "A coordinated selection of design, renovation and furniture services."], ["Turn-Key", "A complete, fully managed project from concept through installation."]].map(([title, text], index) => <article key={title} className={`rounded-2xl p-8 ${index === 2 ? "bg-black text-white" : "bg-white"}`}><h3 className="text-3xl">{title}</h3><p className={`mt-5 leading-7 ${index === 2 ? "text-white/65" : "text-black/60"}`}>{text}</p></article>)}</div><p className="mt-10 max-w-4xl text-sm leading-7 text-black/55">Suitable for homes, apartments, investment properties, offices, retail spaces, hospitality environments and boutique commercial projects.</p></div></section>

    <section id="book" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:px-12 lg:py-32"><div><p className="text-xs uppercase tracking-[0.3em] text-black/45">Your project. One partner.</p><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Book a free project consultation.</h2><p className="mt-6 leading-7 text-black/60">Meet us in the showroom or online. Tell us what you want to achieve and we will help define the right next step.</p><p className="mt-8 text-sm leading-6 text-black/50">Requests are reviewed before confirmation. No payment is required.</p></div><BookingWizard /></section>
  </div>
}
