import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import AnimatedElement from "@/components/animated-element"
import BeforeAfterComparison from "@/components/before-after-comparison"
import ContactForm from "@/components/contact-form"
import ParallaxSection from "@/components/parallax-section"
import ProjectVideoShowcase from "@/components/project-video-showcase"

const assetRoot = "/satkara-restaurant-turn-key-renovation"

const projectDetails = [
  { label: "Project", value: "Satkara Restaurant" },
  { label: "Location", value: "Amsterdam, The Netherlands" },
  { label: "Project Type", value: "Indian-Nepalese Fine Dining Restaurant" },
  { label: "Role", value: "General Contractor / Turn-Key Renovation" },
  { label: "Interior Design", value: "Casper Reinders" },
] as const

const scopeItems = [
  "Complete renovation",
  "Construction coordination",
  "Technical works",
  "Bespoke elements",
  "Custom furniture",
  "Finishes and installation",
] as const

const portraitFinalImages = new Set([14, 15, 22, 24, 27, 28, 31, 32, 33, 34, 35, 36])
const finalImages = Array.from({ length: 36 }, (_, index) => {
  const number = index + 1
  return {
    src: `${assetRoot}/final/final-${String(number).padStart(2, "0")}.webp`,
    alt: `Satkara Restaurant completed interior ${number}`,
    portrait: portraitFinalImages.has(number),
  }
})

const portraitProgressImages = new Set([8, 11])
// The source HEIC files for 01–06 decode as fully black frames in the build.
// Keep only the supplied work-in-progress images that contain visible content.
const progressImages = Array.from({ length: 5 }, (_, index) => {
  const number = index + 7
  return {
    src: `${assetRoot}/work-in-progress/progress-${String(number).padStart(2, "0")}.webp`,
    alt: `Satkara Restaurant renovation in progress ${number}`,
    portrait: portraitProgressImages.has(number),
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

type GalleryImage = (typeof finalImages)[number]

function EditorialGallery({
  images,
  title,
  description,
  background = "bg-white",
}: {
  images: GalleryImage[]
  title: string
  description: string
  background?: string
}) {
  return (
    <section className={`py-[clamp(4.5rem,7vw,7rem)] ${background}`}>
      <div className="container mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp" className="mb-[clamp(3rem,5vw,4.5rem)] border-t border-black/20 pt-6">
          <div className="grid gap-6 lg:grid-cols-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50 lg:col-span-3">Project Gallery</p>
            <div className="lg:col-span-8">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">{title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/65 sm:text-lg">{description}</p>
            </div>
          </div>
        </AnimatedElement>

        <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-[19rem] lg:grid-cols-12">
          {images.map((image, index) => (
            <AnimatedElement
              key={image.src}
              animationType="fadeInUp"
              delay={(index % 6) * 0.04}
              className={editorialGalleryPattern[index % editorialGalleryPattern.length]}
            >
              <figure className={`relative h-full min-h-[20rem] overflow-hidden bg-black/5 ${image.portrait ? "sm:min-h-[34rem]" : "sm:min-h-[24rem]"} lg:min-h-0`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 67vw"
                />
              </figure>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function SatkaraRestaurantTurnKeyRenovationPage() {
  return (
    <div className="overflow-x-hidden bg-white text-black">
      <ParallaxSection
        imageUrl={`${assetRoot}/final/final-05.webp`}
        imageAlt="Satkara Restaurant completed dining interior in Amsterdam"
        minHeight="78vh"
        strength={0.25}
        overlayClassName="bg-black/50"
        objectPosition="center"
      >
        <AnimatedElement animationType="fadeInUp" className="mx-auto max-w-5xl px-4">
          <Link href="/interior-renovation" className="mb-10 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Interior Renovation
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">Satkara Restaurant</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Turn-Key Renovation &amp; General Contracting
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">Amsterdam, The Netherlands</p>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-[clamp(4rem,6vw,6rem)]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mx-auto max-w-4xl text-center">
            <p className="text-xl leading-relaxed text-gray-700 sm:text-2xl">
              A complete transformation shaped by heritage, craftsmanship, natural materials and precise execution.
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

      <section className="bg-[#f4f1eb] py-[clamp(4.5rem,7vw,7rem)]">
        <div className="container mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
            <AnimatedElement animationType="fadeInLeft" className="lg:col-span-5 lg:pt-4">
              <article className="border-t border-black/25 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50">A new fine-dining destination</p>
                <h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                  From an existing restaurant to a completely new hospitality environment
                </h2>
                <p className="mt-10 text-base leading-relaxed text-black/70 sm:text-lg">
                  Studio byCristian had the opportunity to act as General Contractor for the complete turn-key renovation of Satkara, a new Indian-Nepalese fine-dining restaurant in the centre of Amsterdam. The interior concept, carefully designed by Casper Reinders, required far more than a standard renovation. Every element was conceived to carry its own material character, story and level of craftsmanship. Our responsibility was to coordinate and execute the transformation, bringing construction, bespoke elements, finishes and technical requirements together as one complete interior.
                </p>
              </article>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.12} className="lg:col-span-7">
              <figure className="relative aspect-[4/3] overflow-hidden bg-black/5 lg:min-h-[42rem]">
                <Image
                  src={`${assetRoot}/final/final-29.webp`}
                  alt="Satkara Restaurant exterior in Amsterdam"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 60vw"
                />
              </figure>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-[clamp(3rem,4.5vw,4.5rem)] pt-[clamp(4rem,6vw,6rem)]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50">From concept to reality</p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">A project defined by details</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              From the moment guests enter the restaurant, the interior reveals itself layer by layer. One of the first elements is an original hand-carved wooden entrance frame sourced from India. Created decades ago and later curated from an antique dealer, it immediately establishes the cultural and artisanal character of the space. This is complemented by a reclaimed wooden floor produced from timber originating from a dismantled old train, introducing warmth, texture and a strong sense of authenticity throughout the restaurant.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp" delay={0.15} className="mx-auto mt-12 max-w-5xl">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">During &amp; Completed</h3>
            </div>
            <BeforeAfterComparison
              beforeSrc={`${assetRoot}/work-in-progress/progress-10.webp`}
              afterSrc={`${assetRoot}/final/final-05.webp`}
              alt="Satkara Restaurant transformation in Amsterdam"
              beforeLabel="During"
              afterLabel="Completed"
              instruction="Drag or hover to compare"
              aspectRatioClassName="aspect-[4/3]"
              imageQuality={95}
            />
          </AnimatedElement>
        </div>
      </section>

      <ProjectVideoShowcase
        videoSrc={`${assetRoot}/video/satkara-story.mp4`}
        posterSrc={`${assetRoot}/final/final-19.webp`}
        title="Satkara Restaurant"
        description="A complete transformation shaped by heritage, craftsmanship, natural materials and precise execution."
        variant="walkthrough"
        category="Interior Renovation"
        cardDescription="From an existing restaurant to a completely new hospitality environment."
      />

      <section className="bg-black py-[clamp(4.5rem,7vw,7rem)] text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">The bar as a sculptural centrepiece</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Earth, epoxy and walnut</h2>
              <p className="mt-8 text-base leading-relaxed text-white/70 sm:text-lg">
                The entrance bar became one of the most distinctive elements of the project. Its finish was developed to evoke the natural layers and tones of red earth, giving the surface a tactile, almost geological appearance. The bar was individually handcrafted and combined with a bespoke epoxy finish to create depth and texture. Behind it, a custom-made walnut back bar adds warmth and precision while supporting the operational requirements of the restaurant. Together, these elements create a strong visual anchor immediately upon arrival.
              </p>
            </AnimatedElement>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {[19, 21].map((number, index) => (
                <AnimatedElement key={number} animationType="fadeInUp" delay={index * 0.1}>
                  <figure className="relative aspect-[3/4] overflow-hidden bg-white/5">
                    <Image
                      src={`${assetRoot}/final/final-${String(number).padStart(2, "0")}.webp`}
                      alt={number === 19 ? "Handcrafted Satkara entrance bar" : "Walnut back bar at Satkara Restaurant"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 30vw"
                    />
                  </figure>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,7vw,7rem)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedElement animationType="fadeInLeft">
              <div className="grid grid-cols-2 gap-4">
                <figure className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image src={`${assetRoot}/final/final-35.webp`} alt="Custom Italian leather seating at Satkara" fill className="object-cover" sizes="(max-width: 1023px) 50vw, 25vw" />
                </figure>
                <figure className="relative mt-14 aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image src={`${assetRoot}/final/final-32.webp`} alt="Bespoke material detail at Satkara" fill className="object-cover" sizes="(max-width: 1023px) 50vw, 25vw" />
                </figure>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInRight" delay={0.12}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50">Bespoke furniture &amp; natural materials</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Made specifically for Satkara</h2>
              <p className="mt-8 text-base leading-relaxed text-black/70 sm:text-lg">
                The restaurant seating was developed specifically for the project. The sofas were custom manufactured using natural Italian leather, selected to complement the earthy palette and to gain additional character over time. Bespoke furniture, reclaimed timber, walnut, leather, textured finishes and curated objects work together rather than competing with one another. The result is an interior that feels layered, warm and authentic rather than overly manufactured.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f1eb] py-[clamp(4.5rem,7vw,7rem)]">
        <div className="container mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <AnimatedElement animationType="fadeInLeft" className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50">Light, texture &amp; atmosphere</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">An interior built around material character</h2>
              <p className="mt-8 text-base leading-relaxed text-black/70 sm:text-lg">
                Lighting and wall finishes were carefully integrated into the architectural concept. Instead of functioning as separate decorative layers, the lighting, textured walls, furniture and materials blend together to reinforce Satkara&apos;s natural, earthy identity. Light highlights surfaces, textures and handcrafted details while creating the intimate atmosphere expected from a contemporary fine-dining restaurant.
              </p>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInRight" delay={0.12} className="lg:col-span-7">
              <figure className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <Image src={`${assetRoot}/final/final-10.webp`} alt="Satkara lighting and textured dining interior" fill className="object-cover" sizes="(max-width: 1023px) 100vw, 60vw" />
              </figure>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="bg-white py-[clamp(4.5rem,7vw,7rem)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <AnimatedElement animationType="fadeInUp">
              <article className="border-t border-black/25 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50">Complete turn-key renovation</p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Coordinating the full transformation</h2>
                <p className="mt-8 text-base leading-relaxed text-black/70 sm:text-lg">
                  Behind the final atmosphere was a complete transformation of an existing restaurant that required extensive renovation. As General Contractor, Studio byCristian coordinated the different disciplines, suppliers, craftsmen and bespoke elements required to deliver the new Satkara. Our role was to connect construction works, technical execution, custom-made elements, finishes and final installation into one coordinated project. Every component had to connect correctly with the next - from the architectural shell and technical infrastructure to furniture, lighting and final detailing.
                </p>
              </article>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInUp" delay={0.12}>
              <article className="border-t border-black/25 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50">Craftsmanship meets coordination</p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Bringing many individual stories into one interior</h2>
                <p className="mt-8 text-base leading-relaxed text-black/70 sm:text-lg">
                  Projects such as Satkara demonstrate that turn-key contracting is not simply about construction. It requires understanding the designer&apos;s concept, interpreting complex details, coordinating multiple specialists and ensuring that every material and custom element comes together as one complete environment. From antique pieces sourced in India and reclaimed train timber to handmade finishes, Italian leather upholstery and bespoke walnut furniture, each component required its own approach. Our role was to put all of these pieces together and bring the restaurant to life.
                </p>
              </article>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-[clamp(4.5rem,6vw,6.5rem)] text-white">
        <Image src={`${assetRoot}/final/final-18.webp`} alt="" fill aria-hidden="true" className="object-cover object-center opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/65" />
        <div className="container relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="border-t border-white/20 pt-6 lg:pl-[clamp(2rem,4vw,5rem)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">The transformation</p>
            <p className="mt-8 max-w-6xl text-[clamp(2.25rem,6vw,6rem)] font-bold uppercase leading-[0.98] tracking-[-0.045em]">
              Before. During. <span className="text-white/55">After.</span>
            </p>
          </AnimatedElement>
        </div>
      </section>

      <section className="bg-white py-[clamp(4.5rem,7vw,7rem)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="grid gap-6 border-t border-black/20 pt-6 lg:grid-cols-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50 lg:col-span-3">Project scope</p>
            <div className="lg:col-span-8">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Scope of Works</h2>
            </div>
          </AnimatedElement>
          <div className="mt-[clamp(4rem,6vw,6rem)] grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {scopeItems.map((item, index) => (
              <AnimatedElement key={item} animationType="fadeInUp" delay={index * 0.06}>
                <article className="grid h-full grid-cols-[auto_1fr] gap-5 border-t border-black/25 pt-6">
                  <p className="text-4xl font-bold leading-none tracking-[-0.05em] text-black/15">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-black sm:text-2xl">{item}</h3>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <EditorialGallery
        images={progressImages}
        title="Work in Progress"
        description="The transformation can be experienced throughout the project - from demolition and construction to the installation of individual details and the final completed interior."
        background="bg-[#f4f1eb]"
      />

      <section className="relative flex min-h-[72svh] items-center overflow-hidden bg-black text-white lg:min-h-[88vh]">
        <Image src={`${assetRoot}/final/final-03.webp`} alt="Completed Satkara Restaurant dining interior" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5" />
        <div className="container relative z-10 mx-auto max-w-[90rem] px-4 py-[clamp(4rem,6vw,6rem)] sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="border-t border-white/35 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">The finished Satkara</p>
            <h2 className="mt-7 max-w-6xl text-[clamp(2rem,6vw,6.5rem)] font-bold uppercase leading-[0.98] tracking-[-0.045em]">
              Material, heritage, craftsmanship and atmosphere.
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
              What started as an existing restaurant in need of complete renovation became an entirely new hospitality destination. The finished Satkara reflects the original design vision while allowing craftsmanship, materials and cultural references to remain visible throughout the space. A restaurant built not only around food, but around material, heritage, craftsmanship and atmosphere.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <EditorialGallery
        images={finalImages}
        title="Completed Interior"
        description="From antique pieces sourced in India and reclaimed train timber to handmade finishes, Italian leather upholstery and bespoke walnut furniture."
        background="bg-gray-50"
      />

      <section className="relative overflow-hidden bg-white py-[clamp(4rem,6vw,6rem)]">
        <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">From design intent to completed space</p>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Would you like to discuss a project?</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We coordinate craftsmanship, construction and execution to transform complex interior concepts into fully realised environments.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Headquarters:</strong> The Netherlands</p>
                <Link href="mailto:office@studiobycristian.com" className="block hover:text-black">office@studiobycristian.com</Link>
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
