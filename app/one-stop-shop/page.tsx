import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import BookingWizard from "@/components/one-stop-shop/booking-wizard"
import HeroCopy from "@/components/one-stop-shop/hero-copy"
import HeroParallax from "@/components/one-stop-shop/hero-parallax"
import ImageReveal from "@/components/one-stop-shop/image-reveal"
import JourneyProgress from "@/components/one-stop-shop/journey-progress"
import ProcessTimeline from "@/components/one-stop-shop/process-timeline"
import ProjectLevels from "@/components/one-stop-shop/project-levels"
import ScrollReveal, { ScrollRevealGroup, ScrollRevealItem } from "@/components/one-stop-shop/scroll-reveal"
import ServiceNavigator, { type OneStopShopService } from "@/components/one-stop-shop/service-navigator"
import SplitHeadline from "@/components/one-stop-shop/split-headline"
import StickyBenefits from "@/components/one-stop-shop/sticky-benefits"

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

const benefits: [string, string][] = [
  ["One point of contact", "No need to manage separate designers, contractors, furniture makers and installers."],
  ["One coordinated budget", "Better visibility over the total investment and easier optimisation between design, construction and furniture."],
  ["One planning process", "Renovation, furniture production and installation can be aligned from the beginning."],
  ["One design direction", "Materials, colours, furniture and technical solutions are coordinated as one interior."],
  ["One quality standard", "We supervise the complete chain - from specification and production to installation and handover."],
  ["Flexible scope", "Use us for one room, one furniture package or the entire project. The service scales with your needs."],
]

const process: [string, string][] = [
  ["Tell us what you need", "A bathroom, painting work, custom furniture, a full renovation - or simply help deciding where to start."],
  ["We analyse the project", "We review the space, scope, priorities, timing and budget. When needed, we arrange a site visit."],
  ["Choose your level of service", "Select one package, combine several services, or let us manage the complete project."],
  ["Design, price & planning", "We define the solution, prepare the scope and price offer, and coordinate the project timeline."],
  ["Build, produce & install", "Our teams and production partners execute the agreed work under Studio byCristian coordination."],
  ["Final handover", "We complete quality control, installation and project handover so you receive a finished space."],
]

const levels: [string, string, string][] = [
  ["Essential", "One focused service", "Ideal for painting, repair work, one bathroom, one furniture item or a small renovation."],
  ["Combined", "Several coordinated services", "For example: bathroom + painting + custom vanity, or renovation + wardrobes + lighting."],
  ["Turn-Key", "Complete project delivery", "Interior design, technical planning, renovation, furniture, sourcing, installation and handover."],
]

const suitableFor = ["Private homes", "Apartments", "Investment properties", "Offices", "Retail", "Hospitality", "Boutique commercial spaces"]

const eyebrow = "text-[10px] uppercase tracking-[0.32em]"
const container = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"
const sectionHeading = "text-[clamp(2.6rem,10vw,3rem)] uppercase leading-[0.92] tracking-[-0.045em] md:text-[clamp(3rem,5.1vw,4.5rem)] lg:text-[clamp(3.25rem,4.6vw,4.5rem)]"
const bodyCopy = "text-[clamp(1.0625rem,1.15vw,1.1875rem)] leading-[1.75]"
const sectionSpacing = "py-[clamp(5.5rem,8vw,8rem)]"
const generousSpacing = "py-[clamp(6.5rem,10vw,10rem)]"

export default function OneStopShopPage() {
  return (
    <div className="bg-[#f4f1eb] text-[#151515]">
      <JourneyProgress />

      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-black text-white lg:min-h-[86svh]">
        <HeroParallax
          src="/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-Banner-scaled.jpg.jpeg"
          alt="Complete Studio ByCristian interior project"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.76)_0%,rgba(0,0,0,.43)_48%,rgba(0,0,0,.1)_82%,rgba(0,0,0,.04)_100%)]" />
        <div className={`${container} relative grid min-h-[calc(100svh-5rem)] grid-rows-[minmax(0,1fr)_auto] pb-[clamp(2rem,4vh,3rem)] pt-[clamp(4.5rem,8vh,6.5rem)] lg:min-h-[86svh]`}>
          <div className="flex items-center pt-[clamp(1.5rem,4vh,3.5rem)]">
            <div className="max-w-[64rem]">
              <HeroCopy delay={0.05}>
                <p className={`${eyebrow} text-white/58`}>The One-Stop Shop</p>
              </HeroCopy>
              <SplitHeadline className="mt-7 text-[clamp(2.9rem,6.2vw,6.75rem)] font-normal leading-[0.92] tracking-[-0.045em]" />
              <HeroCopy delay={0.72}>
                <p className="mt-[clamp(1.75rem,3.2vh,2.25rem)] text-[clamp(1.15rem,1.45vw,1.5rem)] leading-tight text-white/90">A One-Stop Shop for Interior Projects</p>
              </HeroCopy>
              <HeroCopy delay={0.86}>
                <p className="mt-5 max-w-[42rem] text-[1.0625rem] leading-[1.7] text-white/74">From a single room upgrade to a complete turn-key interior, Studio byCristian brings design, renovation, custom furniture, production, sourcing and installation together in one coordinated service.</p>
              </HeroCopy>
              <HeroCopy delay={1} className="mt-[clamp(2rem,4vh,2.75rem)] flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
                <Link href="#book" className="group inline-flex items-center gap-4 bg-white px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-black outline-none transition-colors duration-500 hover:bg-[#d8d3c9] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                  Start a project consultation
                  <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none" />
                </Link>
                <Link href="#concept" className="group relative inline-flex items-center gap-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/78 outline-none transition-colors duration-500 hover:text-white focus-visible:ring-2 focus-visible:ring-white">
                  Explore the concept
                  <ArrowDown size={14} className="transition-transform duration-500 group-hover:translate-y-1 motion-reduce:transition-none" />
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white/45 transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
                </Link>
              </HeroCopy>
            </div>
          </div>
        </div>
      </section>

      <div id="oss-design">
        <section id="concept" className={`mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 ${sectionSpacing}`}>
          <div className="grid gap-x-16 gap-y-9 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-x-24">
            <ScrollReveal>
              <p className={`${eyebrow} self-start pt-1 text-[#827d74]`}>01 / The Concept</p>
            </ScrollReveal>
            <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <ScrollReveal>
                <h2 className={`max-w-[58rem] !leading-[1.04] !tracking-[-0.035em] ${sectionHeading}`}>
                  <span className="lg:block">Your project</span>{" "}
                  <span className="lg:block">should feel connected,</span>{" "}
                  <span className="lg:block">not fragmented.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <div className={`mt-[clamp(3rem,4vw,3.75rem)] max-w-[38rem] space-y-6 text-black/70 ${bodyCopy}`}>
                  <p>Interior projects are usually fragmented. One company designs, another renovates, a different supplier builds the furniture, and the client is left to coordinate everyone.</p>
                  <p>Our One-Stop Shop model removes that complexity. You can buy one service, several services, or the complete project from Studio byCristian - all under one point of contact and one coordinated process.</p>
                </div>
              </ScrollReveal>
            </div>
            <ImageReveal
              src="/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-10-1026x1536.jpg.jpeg"
              alt="View through the completed apartment towards the kitchen"
              sizes="(min-width: 1024px) 32vw, 100vw"
              parallax
              className="mt-2 aspect-[4/5] w-full max-w-[30rem] sm:aspect-[3/4] lg:col-start-1 lg:row-start-2 lg:mt-4 lg:aspect-[2/3]"
            />
          </div>
        </section>

        <section className={`${container} ${generousSpacing}`}>
          <ScrollReveal>
            <p className={`${eyebrow} text-black/45`}>Start Small. Go Complete.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className={`mt-6 max-w-4xl ${sectionHeading}`}>Choose only what your project needs.</h2>
          </ScrollReveal>
          <ServiceNavigator services={services} />
        </section>
      </div>

      <section className="relative overflow-hidden bg-black text-white">
        <HeroParallax
          src="/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-4-1536x1536.jpg.jpeg"
          alt="Bespoke Studio ByCristian interior"
        />
        <div className="absolute inset-0 bg-black/58" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.45)_0%,rgba(0,0,0,.28)_40%,rgba(0,0,0,.62)_100%)]" />
        <div className={`${container} relative py-[clamp(7rem,14vw,14rem)]`}>
          <div className="h-px w-full bg-white/25" />
          <ScrollRevealGroup as="p" stagger={0.12} className="mt-10 text-[clamp(3.4rem,8vw,9rem)] uppercase leading-[1.08] tracking-[-0.045em]">
            <ScrollRevealItem as="span" className="block">
              One project.
            </ScrollRevealItem>
            <ScrollRevealItem as="span" className="block text-white/55">
              One direction.
            </ScrollRevealItem>
            <ScrollRevealItem as="span" className="block">
              One partner.
            </ScrollRevealItem>
          </ScrollRevealGroup>
        </div>
      </section>

      <section id="oss-renovate" className={`${container} ${generousSpacing}`}>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal>
            <h2 className={`max-w-xl !leading-[1.04] ${sectionHeading}`}>Everything Your Project Needs</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className={`max-w-2xl self-end text-black/65 ${bodyCopy}`}>Choose only what you need. We can act as a specialist contractor for one package or take responsibility for the full interior project.</p>
          </ScrollReveal>
        </div>
        <div className="mt-[clamp(4rem,6vw,6rem)] grid gap-x-16 gap-y-16 md:grid-cols-2">
          {scopeGroups.slice(0, 2).map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 0.08}>
              <ScopeGroup group={group} index={index} />
            </ScrollReveal>
          ))}
        </div>
        <ImageReveal
          src="/STUDIO BY CRISTIAN/private-house-wassenaar/Private-House-Wassenaar-Cover-2048x800.jpg.jpeg"
          alt="Studio ByCristian renovation and interior project"
          sizes="(min-width: 1440px) 1344px, 100vw"
          parallax
              className="my-[clamp(4.5rem,7vw,7rem)] aspect-[16/8] w-full sm:aspect-[16/6.5]"
        />
        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {scopeGroups.slice(2).map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 0.08}>
              <ScopeGroup group={group} index={index + 2} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div id="oss-furnish">
        <section className="relative bg-black text-white">
          <StickyBenefits benefits={benefits} />
        </section>

        <ProcessTimeline steps={process} />
      </div>

      <div id="oss-deliver">
        <ProjectLevels levels={levels} suitableFor={suitableFor} />

        <section id="book" className="scroll-mt-32 bg-[#ded9cf]">
          <div className={`${container} py-[clamp(6rem,8vw,8rem)]`}>
            <div className="grid gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-20">
              <ScrollReveal>
                <p className={`${eyebrow} text-black/45`}>Project Consultation</p>
                <h2 className="mt-6 text-[clamp(3.5rem,5vw,5.75rem)] leading-[0.92] tracking-[-0.045em]">
                  <span className="block">Your project.</span>
                  <span className="block">One partner.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className={`max-w-[42rem] text-black/64 ${bodyCopy}`}>Whether you need one custom cabinet or a complete renovation, start with a conversation. Tell us what your space needs and we will build the right scope around it.</p>
                <p className="mt-7 text-[9px] uppercase leading-[1.8] tracking-[0.22em] text-black/42">Design&nbsp; • &nbsp;Renovation&nbsp; • &nbsp;Custom Furniture&nbsp; • &nbsp;Turn-Key Interiors</p>
              </ScrollReveal>
            </div>

            <div className="mt-[clamp(3.5rem,6vw,6rem)]">
              <BookingWizard />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ScopeGroup({ group, index }: { group: (typeof scopeGroups)[number]; index: number }) {
  return (
    <article>
      <span className="block text-[clamp(4rem,7vw,7rem)] leading-none tracking-[-0.06em] text-black/[0.08]">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-5 text-[1.0625rem] uppercase tracking-[0.16em]">{group.title}</h3>
      <div className="mt-6 h-px origin-left bg-black/25" />
      <ul className="mt-7 space-y-3 text-[clamp(1.0625rem,1.1vw,1.1875rem)] leading-[1.65] text-black/64">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
