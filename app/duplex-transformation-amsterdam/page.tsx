import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Droplets, Thermometer, Zap } from "lucide-react"

import AnimatedElement from "@/components/animated-element"
import BeforeAfterComparison from "@/components/before-after-comparison"
import ContactForm from "@/components/contact-form"
import ParallaxSection from "@/components/parallax-section"
import ProjectVideoShowcase from "@/components/project-video-showcase"
import { Button } from "@/components/ui/button"

const assetRoot = "/duplex-transformation-amsterdam"

const projectDetails = [
  { label: "Role", value: "Design & General Contracting" },
  { label: "Project", value: "Complete Residential Transformation" },
  { label: "Type", value: "Duplex Conversion + Rooftop Extension" },
  { label: "Delivery", value: "Turn-Key" },
  { label: "Location", value: "Amsterdam, The Netherlands" },
] as const

const electricFeatures = [
  {
    title: "Electric Floor Heating",
    description: "Comfort heating integrated into the new floor build-up.",
    icon: Thermometer,
  },
  {
    title: "Electric Convectors",
    description: "Additional room-by-room heating for flexibility and control.",
    icon: Zap,
  },
  {
    title: "Electric Boilers",
    description: "Dedicated electric hot-water production for both apartments.",
    icon: Droplets,
  },
] as const

const scopeOfWorks = [
  "Complete demolition and interior reconstruction",
  "Complete new plumbing and sanitary installations",
  "Transformation of one duplex into two independent apartments",
  "Two fully tiled new bathrooms",
  "New rooftop extension and integration with the existing structure",
  "Two custom-made kitchens",
  "Complete new electrical installation",
  "New walls, ceilings and floor constructions",
  "All-electric heating concept",
  "Insulation and acoustic improvements",
  "Electric underfloor heating",
  "New interior doors and architectural finishing",
  "Electric convector heating",
  "Plastering and painting",
  "Electric hot-water boilers",
  "Complete final finishing and installation",
] as const

const workInProgressImages = Array.from({ length: 26 }, (_, index) => {
  const number = index + 1
  const portrait = [4, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26].includes(number)

  return {
    src: `${assetRoot}/work-in-progress/ongoing-${String(number).padStart(2, "0")}.webp`,
    alt: `Duplex Transformation Amsterdam — work in progress ${number}`,
    portrait,
  }
})

const designVisionImages = Array.from({ length: 8 }, (_, index) => {
  const number = index + 1
  const landscape = [4, 6].includes(number)

  return {
    src: `${assetRoot}/design-vision/render-${String(number).padStart(2, "0")}.webp`,
    alt: `Duplex Transformation Amsterdam — design vision ${number}`,
    portrait: !landscape,
  }
})

function ProjectGallery({
  images,
  title,
  description,
  background = "bg-white",
}: {
  images: ReadonlyArray<{ src: string; alt: string; portrait: boolean }>
  title: string
  description: string
  background?: string
}) {
  return (
    <section className={`py-16 lg:py-24 ${background}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp" className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Project Gallery</p>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{description}</p>
        </AnimatedElement>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <AnimatedElement
              key={image.src}
              animationType="fadeInUp"
              delay={Math.min(index, 8) * 0.04}
              className="mb-6 break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden rounded-xl bg-gray-100 shadow-md ${
                  image.portrait ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function DuplexTransformationAmsterdamPage() {
  return (
    <div className="overflow-x-hidden bg-white text-black">
      <ParallaxSection
        imageUrl={`${assetRoot}/design-vision/render-04.webp`}
        imageAlt="Duplex Transformation Amsterdam living and dining design vision"
        minHeight="76vh"
        strength={0.25}
        overlayClassName="bg-black/45"
        objectPosition="center"
      >
        <AnimatedElement animationType="fadeInUp" className="mx-auto max-w-5xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-200">Interior Renovation</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Duplex Transformation Amsterdam
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Duplex Transformation into Two Apartments + Rooftop Extension
          </p>
        </AnimatedElement>
      </ParallaxSection>

      <section className="border-b border-gray-100 bg-white py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline" className="border-gray-300 bg-white text-black hover:bg-gray-100">
            <Link href="/interior-renovation">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Interior Renovation
            </Link>
          </Button>
        </div>
      </section>

      <ProjectVideoShowcase
        videoId="1222436845"
        title="Duplex Transformation Amsterdam"
        description="Take a virtual tour through the Duplex Transformation Amsterdam project and see the complete renovation process."
        variant="walkthrough"
        category="Interior Renovation"
        cardDescription="Complete transformation of an Amsterdam duplex into two all-electric apartments with a rooftop extension"
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mx-auto max-w-4xl text-center">
            <p className="text-xl leading-relaxed text-gray-700 sm:text-2xl">
              From an ageing Amsterdam property to two fully renewed, all-electric apartments.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              A complete residential transformation delivered from zero: new layouts, new technical systems, new
              bathrooms, custom kitchens and an additional rooftop extension.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp" delay={0.15} className="mt-14">
            <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 sm:grid-cols-2 lg:grid-cols-5">
              {projectDetails.map((detail) => (
                <div key={detail.label} className="border-b border-gray-200 p-6 last:border-b-0 sm:border-r lg:border-b-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{detail.label}</p>
                  <p className="mt-3 text-base font-semibold leading-snug text-black">{detail.value}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Interactive Comparison</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ongoing / Render</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              Drag across the image to compare the construction stage with the design vision for the living–dining area.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp" delay={0.15} className="mx-auto max-w-5xl">
            <BeforeAfterComparison
              beforeSrc={`${assetRoot}/work-in-progress/ongoing-16.webp`}
              afterSrc={`${assetRoot}/design-vision/render-04.webp`}
              alt="living–dining area transformation in Amsterdam"
              beforeLabel="Ongoing"
              afterLabel="Render"
              instruction="Drag or hover to compare"
              aspectRatioClassName="aspect-[4/3]"
              imageQuality={95}
            />
          </AnimatedElement>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Complete Rebuild</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Transformation</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-700">
                <p>
                  This project involved the complete transformation of an existing duplex property in Amsterdam into
                  two independent, modern apartments, together with the creation of an additional rooftop extension.
                </p>
                <p>
                  The original property was technically outdated and required a full rebuild of the interior. The new
                  apartments were developed almost entirely from zero, with new layouts, renewed construction layers,
                  new technical installations and completely new interior finishes.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src={`${assetRoot}/work-in-progress/ongoing-01.webp`}
                  alt="Duplex Transformation Amsterdam interior during construction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Technical Concept</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">An All-Electric Residential Concept</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              A defining aspect of the project is that both apartments operate as fully electric homes. The electrical
              installation was completely renewed and redesigned to support heating, domestic hot water, lighting,
              kitchens and all other residential functions without relying on a traditional gas-based system.
            </p>
          </AnimatedElement>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {electricFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <AnimatedElement key={feature.title} animationType="fadeInUp" delay={index * 0.1}>
                  <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
                    <Icon className="h-10 w-10 text-white" aria-hidden="true" />
                    <h3 className="mt-8 text-xl font-bold">{feature.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/70">{feature.description}</p>
                  </div>
                </AnimatedElement>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="lg:order-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Tailored Interiors</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bathrooms & Kitchens</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-700">
                <p>
                  All plumbing and sanitary systems were newly constructed to serve the new apartment layouts. Two
                  completely new bathrooms were created, including waterproofing, full tiling, sanitary fittings,
                  showers and detailed finishing.
                </p>
                <p>
                  Each apartment also received a custom-made kitchen, designed specifically around the available space
                  and integrated into the overall architectural concept.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.15} className="lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src={`${assetRoot}/work-in-progress/ongoing-19.webp`}
                  alt="New bathroom in the Amsterdam duplex transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Additional Living Space</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Rooftop Extension</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                The new rooftop extension added valuable living space while requiring careful integration with the
                existing structure, the original building envelope and the constraints of construction in a dense
                Amsterdam neighbourhood.
              </p>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.15}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src={`${assetRoot}/design-vision/render-01.webp`}
                  alt="Design vision for the rooftop extension living space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Turn-Key Delivery</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Scope of Works</h2>
          </AnimatedElement>

          <div className="mt-12 grid gap-x-12 gap-y-4 md:grid-cols-2">
            {scopeOfWorks.map((item, index) => (
              <AnimatedElement key={item} animationType="fadeInUp" delay={Math.min(index, 6) * 0.04}>
                <div className="flex items-start gap-4 border-b border-gray-200 py-4">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-black" aria-hidden="true" />
                  <p className="text-lg leading-relaxed text-gray-700">{item}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedElement animationType="fadeInLeft">
              <article className="h-full rounded-2xl bg-white p-8 shadow-sm sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Complex Coordination</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">The Challenge</h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-700">
                  The central challenge was to transform a very old property in one of Amsterdam&apos;s busy urban areas
                  into two contemporary residential units while working within the limitations of the existing
                  building. Structural conditions, restricted site access, logistics, existing services and the
                  technical requirements of creating two fully independent homes all had to be coordinated within one
                  construction process. The rooftop extension added another layer of structural and logistical
                  complexity.
                </p>
              </article>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.1}>
              <article className="h-full rounded-2xl bg-black p-8 text-white shadow-sm sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Transformation Outcome</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">The Result</h2>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Two brand-new, all-electric apartments created within the shell of an existing Amsterdam property —
                  combining modern technical systems, custom interiors and additional living space through the rooftop
                  extension.
                </p>
              </article>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <ProjectGallery
        images={workInProgressImages}
        title="Work in Progress"
        description="Construction, technical installation and finishing stages documented throughout the transformation."
      />

      <ProjectGallery
        images={designVisionImages}
        title="Design Vision"
        description="The intended atmosphere and final spatial direction for the renewed apartments and rooftop extension."
        background="bg-gray-50"
      />

      <section className="bg-white py-12">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Button asChild variant="outline" size="lg" className="border-gray-300 bg-white text-black hover:bg-gray-100">
            <Link href="/interior-renovation">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Interior Renovation
            </Link>
          </Button>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Start a Conversation</p>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Would you like to discuss a project?</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Tell us about your space, priorities and timeline. We would be glad to explore how design, contracting
                and custom furniture can come together in one coordinated transformation.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Headquarters:</strong> The Netherlands</p>
                <Link href="mailto:office@studiobycristian.com" className="block hover:text-black">
                  office@studiobycristian.com
                </Link>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight">
              <div className="relative rounded-xl border border-black/20 bg-black p-8 text-white shadow-2xl sm:p-10">
                <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-white/40" />
                <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-white/40" />
                <ContactForm />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  )
}
