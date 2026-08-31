import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import BookingWizard from "@/components/one-stop-shop/booking-wizard"
import ServiceNavigator, { type OneStopShopService } from "@/components/one-stop-shop/service-navigator"

const services: OneStopShopService[] = [
  { title: "Small Renovation", description: "Refresh or repair a specific part of your home or commercial space.", image: "/STUDIO BY CRISTIAN/private-house-wassenaar/Private-House-Wassenaar-Cover-2048x800.jpg.jpeg", imageAlt: "Renovated interior opening onto a garden" },
  { title: "Bathroom Renovation", description: "From demolition and plumbing to tiling, sanitary installation and finishing.", image: "/Susan Pyke/Master Bathroom 01.jpg", imageAlt: "Studio ByCristian bathroom interior" },
  { title: "Painting & Finishing", description: "Walls, ceilings, woodwork, repair work and complete decorative finishing.", image: "/Susan Pyke/Living 02.jpg", imageAlt: "Finished living room interior" },
  { title: "Custom Furniture", description: "Wardrobes, kitchens, vanities, shelving, wall units and bespoke furniture pieces.", image: "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-4-1536x1536.jpg.jpeg", imageAlt: "Bespoke joinery and furniture in a private interior" },
  { title: "Interior Design", description: "Concept, layouts, materials, colours, technical coordination and design guidance.", image: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-10-1026x1536.jpg.jpeg", imageAlt: "Studio ByCristian interior design project" },
  { title: "Turn-Key Renovation", description: "One managed solution from concept and construction to furnishing and final handover.", image: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-Banner-scaled.jpg.jpeg", imageAlt: "Completed turn-key kitchen interior" },
]

const scopeGroups = [
  { title: "Renovation & Construction", items: ["Demolition and strip-out", "Walls and ceilings", "Floor construction and finishes", "Electrical and lighting works", "Plumbing and sanitary works", "Painting and decorative finishing", "Bathroom renovations", "General contracting and site coordination"] },
  { title: "Custom Furniture & Joinery", items: ["Kitchens", "Wardrobes and dressing rooms", "Bathroom furniture", "TV and wall units", "Shelving and storage", "Home office furniture", "Reception and retail furniture", "Special bespoke pieces"] },
  { title: "Design & Project Guidance", items: ["Interior concept", "Space planning", "Materials and colours", "Technical detailing", "Furniture selection", "Supplier coordination", "Budget guidance", "Project and installation management"] },
  { title: "Sourcing & Installation", items: ["Furniture sourcing", "Lighting and accessories", "Sanitary equipment", "Appliances", "Curtains and rails", "Loose furniture", "Delivery coordination", "Final installation and styling"] },
]

const benefits = [
  ["One point of contact", "No need to manage separate designers, contractors, furniture makers and installers."],
  ["One coordinated budget", "Better visibility over the total investment and easier optimisation between design, construction and furniture."],
  ["One planning process", "Renovation, furniture production and installation can be aligned from the beginning."],
  ["One design direction", "Materials, colours, furniture and technical solutions are coordinated as one interior."],
  ["One quality standard", "We supervise the complete chain - from specification and production to installation and handover."],
  ["Flexible scope", "Use us for one room, one furniture package or the entire project. The service scales with your needs."],
]

const process = [
  ["Tell us what you need", "A bathroom, painting work, custom furniture, a full renovation - or simply help deciding where to start."],
  ["We analyse the project", "We review the space, scope, priorities, timing and budget. When needed, we arrange a site visit."],
  ["Choose your level of service", "Select one package, combine several services, or let us manage the complete project."],
  ["Design, price & planning", "We define the solution, prepare the scope and price offer, and coordinate the project timeline."],
  ["Build, produce & install", "Our teams and production partners execute the agreed work under Studio byCristian coordination."],
  ["Final handover", "We complete quality control, installation and project handover so you receive a finished space."],
]

const levels = [
  ["Essential", "One focused service", "Ideal for painting, repair work, one bathroom, one furniture item or a small renovation."],
  ["Combined", "Several coordinated services", "For example: bathroom + painting + custom vanity, or renovation + wardrobes + lighting."],
  ["Turn-Key", "Complete project delivery", "Interior design, technical planning, renovation, furniture, sourcing, installation and handover."],
]

const eyebrow = "text-[10px] uppercase tracking-[0.32em]"
const container = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"
const sectionHeading = "text-[clamp(2.6rem,10vw,3rem)] uppercase leading-[0.92] tracking-[-0.045em] md:text-[clamp(3rem,5.1vw,4.5rem)] lg:text-[clamp(3.25rem,4.6vw,4.5rem)]"
const bodyCopy = "text-[clamp(1.0625rem,1.15vw,1.1875rem)] leading-[1.75]"
const sectionSpacing = "py-[clamp(5.5rem,8vw,8rem)]"
const generousSpacing = "py-[clamp(6.5rem,10vw,10rem)]"

export default function OneStopShopPage() {
  return (
    <div className="overflow-hidden bg-[#f4f1eb] text-[#151515]">
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-black text-white lg:min-h-[86svh]">
        <Image src="/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-Banner-scaled.jpg.jpeg" alt="Complete Studio ByCristian interior project" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.76)_0%,rgba(0,0,0,.43)_48%,rgba(0,0,0,.1)_82%,rgba(0,0,0,.04)_100%)]" />
        <div className={`${container} relative grid min-h-[calc(100svh-5rem)] grid-rows-[minmax(0,1fr)_auto] pb-[clamp(2rem,4vh,3rem)] pt-[clamp(2.5rem,6vh,5rem)] lg:min-h-[86svh]`}>
          <div className="flex items-center pt-[clamp(1.5rem,4vh,3.5rem)]">
            <div className="max-w-[64rem]">
              <p className={`${eyebrow} text-white/58`}>The One-Stop Shop</p>
              <h1 className="mt-7 text-[clamp(2.9rem,6.2vw,6.75rem)] font-normal leading-[0.92] tracking-[-0.045em]">One partner.<br />Your entire space.</h1>
              <p className="mt-[clamp(1.75rem,3.2vh,2.25rem)] text-[clamp(1.15rem,1.45vw,1.5rem)] leading-tight text-white/90">A One-Stop Shop for Interior Projects</p>
              <p className="mt-5 max-w-[42rem] text-[1.0625rem] leading-[1.7] text-white/74">From a single room upgrade to a complete turn-key interior, Studio byCristian brings design, renovation, custom furniture, production, sourcing and installation together in one coordinated service.</p>
              <div className="mt-[clamp(2rem,4vh,2.75rem)] flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
                <Link href="#book" className="group inline-flex items-center gap-4 bg-white px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-black outline-none transition-colors hover:bg-[#d8d3c9] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">Start a project consultation <ArrowRight size={15} className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" /></Link>
                <Link href="#concept" className="inline-flex items-center gap-3 border-b border-white/45 py-2 text-[10px] uppercase tracking-[0.22em] text-white/78 outline-none transition-colors hover:border-white hover:text-white focus-visible:ring-2 focus-visible:ring-white">Explore the concept <ArrowDown size={14} /></Link>
              </div>
            </div>
          </div>
          <p className="mt-[clamp(2rem,4vh,3.5rem)] whitespace-nowrap pl-12 text-[8px] uppercase tracking-[0.16em] text-white/48 sm:pl-0 sm:text-[10px] sm:tracking-[0.3em]">Design — Renovate — Furnish — Deliver</p>
        </div>
      </section>

      <section id="concept" className={`mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 ${sectionSpacing}`}>
        <div className="grid gap-9 lg:grid-cols-[minmax(220px,0.52fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
          <p className={`${eyebrow} self-start pt-1 text-[#827d74]`}>01 / The Concept</p>
          <div className="min-w-0">
            <h2 className={`max-w-[58rem] ${sectionHeading}`}>
              <span className="lg:block">Your project</span>{" "}
              <span className="lg:block">should feel connected,</span>{" "}
              <span className="lg:block">not fragmented.</span>
            </h2>
            <div className={`mt-[clamp(3rem,4vw,3.75rem)] max-w-[38rem] space-y-6 text-black/70 ${bodyCopy}`}>
              <p>Interior projects are usually fragmented. One company designs, another renovates, a different supplier builds the furniture, and the client is left to coordinate everyone.</p>
              <p>Our One-Stop Shop model removes that complexity. You can buy one service, several services, or the complete project from Studio byCristian - all under one point of contact and one coordinated process.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto aspect-[16/8.5] min-h-[360px] max-w-[1800px] overflow-hidden sm:aspect-[16/7]">
        <Image src="/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-20-scaled.jpg.jpeg" alt="Studio ByCristian completed interior" fill sizes="100vw" className="object-cover" />
      </div>

      <section className={`${container} ${generousSpacing}`}>
        <p className={`${eyebrow} text-black/45`}>Start Small. Go Complete.</p>
        <h2 className={`mt-6 max-w-4xl ${sectionHeading}`}>Choose only what your project needs.</h2>
        <ServiceNavigator services={services} />
      </section>

      <section className="bg-[#0b0b0b] text-white">
        <div className={`${container} py-[clamp(7rem,14vw,14rem)]`}>
          <div className="h-px w-full bg-white/20" />
          <p className="mt-10 text-[clamp(3.4rem,8vw,9rem)] uppercase leading-[0.84] tracking-[-0.055em]"><span className="block">One project.</span><span className="block text-white/45">One direction.</span><span className="block">One partner.</span></p>
        </div>
      </section>

      <section className={`${container} ${generousSpacing}`}>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div><h2 className={`max-w-xl ${sectionHeading}`}>Everything Your Project Needs</h2></div>
          <p className={`max-w-2xl self-end text-black/65 ${bodyCopy}`}>Choose only what you need. We can act as a specialist contractor for one package or take responsibility for the full interior project.</p>
        </div>
        <div className="mt-[clamp(4rem,6vw,6rem)] grid gap-x-16 gap-y-16 md:grid-cols-2">{scopeGroups.slice(0, 2).map((group, index) => <ScopeGroup key={group.title} group={group} index={index} />)}</div>
        <div className="relative my-[clamp(4.5rem,7vw,7rem)] aspect-[16/8] min-h-[340px] overflow-hidden sm:aspect-[16/6.5]"><Image src="/STUDIO BY CRISTIAN/private-house-wassenaar/Private-House-Wassenaar-Cover-2048x800.jpg.jpeg" alt="Studio ByCristian renovation and interior project" fill sizes="(min-width: 1440px) 1344px, 100vw" className="object-cover" /></div>
        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">{scopeGroups.slice(2).map((group, index) => <ScopeGroup key={group.title} group={group} index={index + 2} />)}</div>
      </section>

      <section className="bg-[#090909] text-white">
        <div className={`${container} grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 ${generousSpacing}`}>
          <div><div className="top-28 lg:sticky"><p className={`${eyebrow} text-white/46`}>Why One Partner</p><h2 className="mt-7 text-[clamp(3.25rem,4.2vw,4rem)] uppercase leading-[0.92] tracking-[-0.045em]">Works better.</h2></div></div>
          <ol className="border-t border-white/20">
            {benefits.map(([title, description], index) => <li key={title} className="group grid gap-5 border-b border-white/20 py-10 sm:grid-cols-[70px_1fr] lg:py-12"><span className="text-xs tracking-[0.2em] text-white/35 transition-colors group-hover:text-white/75">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-[clamp(1.8rem,2.8vw,3.25rem)] uppercase leading-[0.98] tracking-[-0.03em] text-white/72 transition-colors group-hover:text-white">{title}</h3><p className={`mt-6 max-w-xl text-white/58 ${bodyCopy}`}>{description}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className={`${container} ${generousSpacing}`}>
        <p className={`${eyebrow} text-black/45`}>How It Works</p>
        <h2 className={`mt-6 max-w-4xl ${sectionHeading}`}>A clear route from idea to handover.</h2>
        <ol className="relative ml-[15px] mt-[clamp(4rem,6vw,6rem)] max-w-4xl border-l border-black/20 lg:ml-[34%]">
          {process.map(([title, description], index) => <li key={title} className="relative border-b border-black/15 py-10 pl-12 first:pt-0 last:border-b-0 last:pb-0 sm:pl-16 lg:py-12"><span className={`absolute -left-4 flex h-[31px] w-[31px] items-center justify-center border border-black/35 bg-[#f4f1eb] text-[9px] tracking-[0.12em] ${index === 0 ? "top-0" : "top-10 lg:top-12"}`}>{String(index + 1).padStart(2, "0")}</span><h3 className="text-[clamp(1.8rem,2.8vw,3.15rem)] uppercase leading-[0.98] tracking-[-0.025em]">{title}</h3><p className={`mt-5 max-w-2xl text-black/62 ${bodyCopy}`}>{description}</p></li>)}
        </ol>
      </section>

      <section className="bg-[#ded9cf]">
        <div className={`${container} ${generousSpacing}`}>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20"><div><p className={`${eyebrow} text-black/45`}>Built Around Your Project</p><h2 className={`mt-6 ${sectionHeading}`}>Built around your project.</h2></div><p className={`max-w-2xl self-end text-black/65 ${bodyCopy}`}>The One-Stop Shop is not a fixed renovation package. It is a flexible service model designed around the scale and complexity of your project.</p></div>
          <div className="mt-[clamp(4rem,6vw,6rem)] grid items-stretch lg:grid-cols-[0.8fr_1fr_1.25fr]">
            {levels.map(([title, subtitle, description], index) => <article key={title} className={`border-t border-black/30 px-0 py-8 lg:px-8 lg:py-12 ${index === 0 ? "lg:pl-0" : ""} ${index === 2 ? "bg-black px-7 text-white lg:px-12 lg:py-16" : ""}`}><p className={`text-[10px] tracking-[0.25em] ${index === 2 ? "text-white/40" : "text-black/40"}`}>{String(index + 1).padStart(2, "0")}</p><h3 className="mt-8 text-[clamp(2.1rem,3.5vw,4rem)] uppercase leading-none tracking-[-0.035em]">{title}</h3><p className={`mt-5 text-sm uppercase tracking-[0.12em] ${index === 2 ? "text-white/70" : "text-black/65"}`}>{subtitle}</p><p className={`mt-7 text-[1.0625rem] leading-[1.7] ${index === 2 ? "text-white/60" : "text-black/60"}`}>{description}</p></article>)}
          </div>
          <div className="mt-12 border-t border-black/25 pt-8"><p className={`${eyebrow} text-black/45`}>Suitable for</p><p className="mt-4 max-w-5xl text-[1.0625rem] leading-7 text-black/62">Private homes&nbsp; • &nbsp;Apartments&nbsp; • &nbsp;Investment properties&nbsp; • &nbsp;Offices&nbsp; • &nbsp;Retail&nbsp; • &nbsp;Hospitality&nbsp; • &nbsp;Boutique commercial spaces</p></div>
        </div>
      </section>

      <section id="book" className="bg-[#f4f1eb]">
        <div className={`${container} grid gap-14 py-[clamp(6rem,11vw,11rem)] lg:grid-cols-[0.72fr_1.28fr] lg:gap-20`}>
          <div><p className={`${eyebrow} text-black/45`}>Project Consultation</p><h2 className="mt-7 text-[clamp(3.5rem,6.5vw,7rem)] uppercase leading-[0.86] tracking-[-0.05em]">Your project.<br />One partner.</h2><p className={`mt-9 max-w-xl text-black/65 ${bodyCopy}`}>Whether you need one custom cabinet or a complete renovation, start with a conversation. Tell us what your space needs and we will build the right scope around it.</p><p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-black/45">Design&nbsp; • &nbsp;Renovation&nbsp; • &nbsp;Custom Furniture&nbsp; • &nbsp;Turn-Key Interiors</p></div>
          <BookingWizard />
        </div>
      </section>
    </div>
  )
}

function ScopeGroup({ group, index }: { group: (typeof scopeGroups)[number]; index: number }) {
  return <article><span className="block text-[clamp(4rem,7vw,7rem)] leading-none tracking-[-0.06em] text-black/[0.08]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 text-[1.0625rem] uppercase tracking-[0.16em]">{group.title}</h3><div className="mt-6 h-px bg-black/25" /><ul className="mt-7 space-y-3 text-[clamp(1.0625rem,1.1vw,1.1875rem)] leading-[1.65] text-black/64">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>
}
