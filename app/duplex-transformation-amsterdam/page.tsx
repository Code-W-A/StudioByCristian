import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Droplets, Thermometer, Zap } from "lucide-react"

import AnimatedElement from "@/components/animated-element"
import BeforeAfterComparison from "@/components/before-after-comparison"
import ContactForm from "@/components/contact-form"
import ParallaxSection from "@/components/parallax-section"
import ProjectVideoShowcase from "@/components/project-video-showcase"

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

const scopeGroups = [
  {
    number: "01",
    title: "Structure & Space",
    items: [
      "Complete demolition and interior reconstruction",
      "Transformation of one duplex into two independent apartments",
      "New rooftop extension and integration with the existing structure",
      "New walls, ceilings and floor constructions",
    ],
  },
  {
    number: "02",
    title: "Technical Systems",
    items: [
      "Complete new plumbing and sanitary installations",
      "Complete new electrical installation",
      "Electric underfloor heating",
      "Electric hot-water boilers",
    ],
  },
  {
    number: "03",
    title: "Interiors",
    items: [
      "Two fully tiled new bathrooms",
      "Two custom-made kitchens",
      "New interior doors and architectural finishing",
      "Plastering and painting",
    ],
  },
  {
    number: "04",
    title: "Comfort & Performance",
    items: [
      "All-electric heating concept",
      "Insulation and acoustic improvements",
      "Electric convector heating",
      "Complete final finishing and installation",
    ],
  },
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

const editorialGalleryPattern = [
  "lg:col-span-8 lg:row-span-2",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-8 lg:row-span-1",
  "lg:col-span-8 lg:row-span-1",
] as const

function WorkInProgressGallery() {
  return (
    <section className="bg-[#f4f1eb] pb-[clamp(4.5rem,6vw,6rem)] pt-[clamp(4.5rem,7vw,7rem)]">
      <div className="container mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          animationType="fadeInUp"
          className="mb-[clamp(3rem,5vw,4.5rem)] border-t border-black/20 pt-6"
        >
          <div className="grid gap-6 lg:grid-cols-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50 lg:col-span-3">
              Project Gallery
            </p>
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                Work in Progress
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
                Construction, technical installation and finishing stages documented throughout the transformation.
              </p>
            </div>
          </div>
        </AnimatedElement>

        <div className="columns-1 gap-3 sm:columns-2 lg:grid lg:auto-rows-[clamp(15rem,21vw,20rem)] lg:grid-flow-dense lg:grid-cols-12 lg:gap-4 lg:columns-auto">
          {workInProgressImages.map((image, index) => (
            <AnimatedElement
              key={image.src}
              animationType="fadeInUp"
              delay={Math.min(index, 6) * 0.035}
              className={`mb-3 break-inside-avoid lg:mb-0 ${
                index === workInProgressImages.length - 1
                  ? "lg:col-span-4 lg:row-span-2"
                  : editorialGalleryPattern[index % editorialGalleryPattern.length]
              }`}
            >
              <figure
                className={`relative overflow-hidden bg-black/5 lg:h-full ${
                  image.portrait ? "aspect-[3/4]" : "aspect-[4/3]"
                } lg:aspect-auto`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02] motion-reduce:transition-none"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 66vw"
                />
              </figure>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    <section className={`py-[clamp(4rem,6vw,6rem)] ${background}`}>
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
          <Link
            href="/interior-renovation"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Interior Renovation
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-200">JAVASTRAAT 69</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Duplex Transformation into Two Apartments + Rooftop Extension
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Amsterdam, The Netherlands
          </p>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-[clamp(4rem,6vw,6rem)]">
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

      <section className="bg-gray-50 pb-[clamp(3rem,4.5vw,4.5rem)] pt-[clamp(4rem,6vw,6rem)]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mx-auto max-w-4xl text-center">
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

          <AnimatedElement animationType="fadeInUp" delay={0.15} className="mx-auto mt-12 max-w-5xl">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Real Picture Before &amp; After</h3>
            </div>
            <BeforeAfterComparison
              beforeSrc={`${assetRoot}/work-in-progress/ongoing-16.webp`}
              afterSrc={`${assetRoot}/design-vision/render-04.webp`}
              alt="living–dining area transformation in Amsterdam"
              beforeLabel="Before"
              afterLabel="After"
              instruction="Drag or hover to compare"
              aspectRatioClassName="aspect-[4/3]"
              imageQuality={95}
            />
          </AnimatedElement>
        </div>
      </section>

      <ProjectVideoShowcase
        videoId="1222457694"
        title="Duplex Transformation Amsterdam"
        description="A complete residential transformation delivered from zero: new layouts, new technical systems, new bathrooms, custom kitchens and an additional rooftop extension."
        variant="walkthrough"
        category="Interior Renovation"
        cardDescription="Two brand-new, all-electric apartments created within the shell of an existing Amsterdam property — combining modern technical systems, custom interiors and additional living space through the rooftop extension."
      />

      <section className="bg-black py-[clamp(4rem,6vw,6rem)] text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mx-auto max-w-4xl text-center">
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

      <section className="py-[clamp(4rem,6vw,6rem)]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mx-auto max-w-4xl text-center">
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <AnimatedElement animationType="fadeInLeft">
              <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src={`${assetRoot}/work-in-progress/ongoing-19.webp`}
                  alt="New bathroom in the Amsterdam duplex transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <figcaption className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">Bathroom</figcaption>
              </figure>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.15}>
              <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src={`${assetRoot}/design-vision/render-07.webp`}
                  alt="Custom kitchen design vision in the Amsterdam duplex transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <figcaption className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">Kitchen</figcaption>
              </figure>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-[clamp(4rem,6vw,6rem)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft">
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

      <section className="relative overflow-hidden bg-black py-[clamp(4.5rem,6vw,6.5rem)] text-white">
        <Image
          src={`${assetRoot}/design-vision/render-02.webp`}
          alt=""
          fill
          aria-hidden="true"
          className="object-cover object-center opacity-[0.3]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/50" />

        <div className="container relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="border-t border-white/15 pt-[clamp(1.5rem,2vw,1.875rem)] lg:pl-[clamp(2rem,4vw,5rem)]">
            <p className="text-[clamp(0.75rem,0.85vw,0.875rem)] font-semibold uppercase tracking-[0.26em] text-[#a8a39b]">The transformation</p>
            <p className="mt-[clamp(1.75rem,2.5vw,2.25rem)] max-w-[72rem] text-[clamp(2rem,6.2vw,6.2rem)] font-bold uppercase leading-[0.88] tracking-[-0.045em]">
              <span className="block lg:whitespace-nowrap">From one duplex</span>
              <span className="mt-1 block text-[#8e8e8e] lg:mt-2">
                <span className="lg:block lg:whitespace-nowrap">to two</span>{" "}
                <span className="lg:block lg:whitespace-nowrap">independent homes.</span>
              </span>
            </p>
          </AnimatedElement>
        </div>
      </section>

      <section className="bg-[#f4f1eb] py-[clamp(4.5rem,7vw,7rem)]">
        <div className="container mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
            <AnimatedElement animationType="fadeInLeft" className="lg:col-span-5 lg:pt-4">
              <article className="border-t border-black/25 pt-6">
                <p className="text-[clamp(4.5rem,9vw,8.5rem)] font-bold leading-none tracking-[-0.06em] text-black/10">
                  01
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-black/50">Project chapter</p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">The Challenge</h2>
                <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-black/70 sm:text-lg">
                  <p>
                    The central challenge was to transform a very old property in one of Amsterdam&apos;s busy urban areas
                    into two contemporary residential units while working within the limitations of the existing
                    building.
                  </p>
                  <p>
                    Structural conditions, restricted site access, logistics, existing services and the technical
                    requirements of creating two fully independent homes all had to be coordinated within one
                    construction process. The rooftop extension added another layer of structural and logistical
                    complexity.
                  </p>
                </div>
              </article>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.12} className="lg:col-span-7">
              <figure className="relative aspect-[3/4] overflow-hidden bg-black/5 sm:aspect-[4/3] sm:min-h-[28rem] lg:min-h-[clamp(36rem,44vw,40rem)]">
                <Image
                  src={`${assetRoot}/work-in-progress/ongoing-01.webp`}
                  alt="Exposed structure and construction team during the Amsterdam duplex transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 60vw"
                />
                <figcaption className="absolute bottom-0 left-0 bg-black px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white sm:px-5">
                  Existing structure — work in progress
                </figcaption>
              </figure>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="bg-white py-[clamp(4.5rem,7vw,7rem)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="grid gap-6 border-t border-black/20 pt-6 lg:grid-cols-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50 lg:col-span-3">Interventions</p>
            <div className="lg:col-span-8">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Scope of Works</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/60 sm:text-lg">
                A complete transformation, from structure to final finish.
              </p>
            </div>
          </AnimatedElement>

          <div className="mt-[clamp(4rem,6vw,6rem)] grid gap-x-12 gap-y-[clamp(5rem,7vw,7rem)] md:grid-cols-2 lg:gap-x-20">
            {scopeGroups.map((group, index) => (
              <AnimatedElement key={group.number} animationType="fadeInUp" delay={index * 0.08}>
                <article className="grid grid-cols-[auto_1fr] gap-5 border-t border-black/25 pt-6 sm:gap-8">
                  <p className="text-5xl font-bold leading-none tracking-[-0.05em] text-black/15 sm:text-6xl">
                    {group.number}
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">{group.title}</h3>
                    <ul className="mt-7 space-y-0">
                      {group.items.map((item) => (
                        <li key={item} className="border-t border-black/10 py-4 text-base leading-relaxed text-black/65 first:border-t-0 first:pt-0 sm:text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WorkInProgressGallery />

      <section className="relative flex min-h-[72svh] items-center overflow-hidden bg-black text-white lg:min-h-[88vh]">
        <Image
          src={`${assetRoot}/design-vision/render-04.webp`}
          alt="Living and dining design vision for the transformed Amsterdam duplex"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />

        <div className="container relative z-10 mx-auto max-w-[90rem] px-4 py-[clamp(4rem,6vw,6rem)] sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="border-t border-white/35 pt-6">
            <p className="text-[clamp(0.8rem,1vw,1rem)] font-semibold uppercase tracking-[0.26em] text-white/75">02 — The Result</p>
            <h2 className="mt-7 max-w-6xl text-[clamp(1.8rem,6vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.045em]">
              <span className="block whitespace-nowrap">Two brand-new,</span>
              <span className="block sm:whitespace-nowrap">all-electric</span>
              <span className="block">apartments.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
              Two brand-new, all-electric apartments created within the shell of an existing Amsterdam property —
              combining modern technical systems, custom interiors and additional living space through the rooftop
              extension.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <ProjectGallery
        images={designVisionImages}
        title="Design Vision"
        description="The intended atmosphere and final spatial direction for the renewed apartments and rooftop extension."
        background="bg-gray-50"
      />

      <section className="relative overflow-hidden bg-white py-[clamp(4rem,6vw,6rem)]">
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
