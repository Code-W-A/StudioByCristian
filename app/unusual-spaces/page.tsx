import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import ProjectVideoShowcase from "@/components/project-video-showcase"
import BeforeAfterComparison from "@/components/before-after-comparison"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getPageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = getPageMetadata("/unusual-spaces")

const projectDetails = {
  title: "Unusual Spaces",
  category: "Furniture Production",
  heroImage: "/unusual-spaces/Under construction/IMG_4251.jpg",
  location: "Utrecht, The Netherlands",
  client: "Unusual Spaces",
  designer: "Bengi Amaç",
  role: "Turn-Key Furniture General Contractor",
  intro: [
    "Unusual Spaces is a project that redefines the workplace through bold spatial identity, vibrant color compositions, and unconventional architectural interventions. Rather than following traditional layouts, the design introduces a dynamic environment where each zone is defined through strong geometries, material contrasts, and carefully curated color palettes.",
    "At Studio byCristian, we acted as the Turn-Key Furniture General Contractor, managing the full scope from technical development to final execution. Our role was to translate a highly graphic and concept-driven design into a fully functional and precisely built environment.",
  ],
  buildStory: [
    "Given the complexity and uniqueness of the concept, all materials and furniture pieces were custom-made and specially selected. Each element was developed to integrate seamlessly within the architectural language, whether through grid-based shelving systems, integrated seating niches, or bespoke workstations, ensuring consistency between design intent and execution.",
    "Color plays a central role in the project, acting as both a visual identity and a spatial tool. Bold tones such as orange, blue, green, and yellow are used to define functions, create atmosphere, and enhance user experience, while maintaining a cohesive and balanced composition throughout the space.",
    "The result is an engaging and highly recognizable interior where design, branding, and functionality converge. This project highlights our ability to deliver complex, design-led environments through precise coordination, custom fabrication, and full turn-key execution.",
  ],
  storyImages: [
    {
      src: "/unusual-spaces/Under construction/IMG_0417.jpg",
      alt: "Unusual Spaces open-plan workspace during the fit-out phase in Utrecht",
    },
    {
      src: "/unusual-spaces/Under construction/IMG_0399.jpg",
      alt: "Unusual Spaces stripped-back open-plan area during site preparation in Utrecht",
    },
  ],
  comparison: {
    beforeSrc: "/unusual-spaces/Under construction/IMG_0423.jpg",
    afterSrc: "/unusual-spaces/Under construction/IMG_4251.jpg",
    alt: "Unusual Spaces main Utrecht workspace transformed from active fit-out to finished concept-driven interior",
  },
  executionLead: {
    src: "/unusual-spaces/Under construction/IMG_0432.jpg",
    alt: "Unusual Spaces wide execution-progress view showing ceiling infrastructure and framing in Utrecht",
  },
  executionRows: [
    [
      {
        src: "/unusual-spaces/Under construction/IMG_0642.jpg",
        alt: "Unusual Spaces execution detail showing curved joinery and exposed service runs in progress",
        aspectRatio: "4/3",
      },
      {
        src: "/unusual-spaces/Under construction/IMG_0644.jpg",
        alt: "Unusual Spaces custom-built niche with a taped technical drawing during fabrication and fit-out",
        aspectRatio: "4/3",
      },
    ],
    [
      {
        src: "/unusual-spaces/Under construction/IMG_0433.jpg",
        alt: "Unusual Spaces bay-window room during early fit-out and finishing works",
        aspectRatio: "16/10",
      },
    ],
    [
      {
        src: "/unusual-spaces/Under construction/IMG_0409.jpg",
        alt: "Unusual Spaces stripped-back interior showing exposed structure before completion",
        aspectRatio: "4/3",
      },
      {
        src: "/unusual-spaces/Under construction/IMG_2898.jpg",
        alt: "Unusual Spaces custom partition doors and glazing during installation in Utrecht",
        aspectRatio: "4/3",
      },
    ],
  ],
}

export default function UnusualSpacesPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl={projectDetails.heroImage}
        imageAlt={`${projectDetails.title} Hero Image`}
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/45"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{projectDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Client: {projectDetails.client}
            </div>
            <div className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Architect/Designer: {projectDetails.designer}
            </div>
            <div className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Location: {projectDetails.location}
            </div>
            <div className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Role: {projectDetails.role}
            </div>
          </div>
        </AnimatedElement>
      </ParallaxSection>

      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      <ProjectVideoShowcase
        videoId="1177752529"
        title="Unusual Spaces Project Video"
        description="A walk-through of the Utrecht project, capturing how the concept-driven workplace was translated into a built environment."
      />

      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Before &amp; After
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A direct comparison of the same Utrecht workspace zone, showing how the raw fit-out stage evolved into the finished Unusual Spaces interior.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp" delay={0.1}>
            <div className="max-w-6xl mx-auto">
              <BeforeAfterComparison
                beforeSrc={projectDetails.comparison.beforeSrc}
                afterSrc={projectDetails.comparison.afterSrc}
                alt={projectDetails.comparison.alt}
                beforeLabel="Under Construction"
                afterLabel="Finished Space"
              />
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedElement animationType="fadeInLeft" className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Bold identity translated into built form
              </h2>
              {projectDetails.intro.map((paragraph) => (
                <p key={paragraph} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.storyImages[0].src}
                  alt={projectDetails.storyImages[0].alt}
                  width={1100}
                  height={850}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </AnimatedElement>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-20">
            <AnimatedElement animationType="fadeInLeft" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.storyImages[1].src}
                  alt={projectDetails.storyImages[1].alt}
                  width={1100}
                  height={850}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.2} className="space-y-6">
              <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Custom fabrication with strong graphic intent
              </h3>
              {projectDetails.buildStory.map((paragraph) => (
                <p key={paragraph} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Execution Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond the direct comparison above, these Utrecht site images document the wider build phase, from technical preparation and bespoke fabrication to the coordinated installation of the final interior.
            </p>
          </AnimatedElement>

          <div className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <AnimatedElement animationType="fadeInLeft" delay={0.1}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                  <Image
                    src={projectDetails.executionLead.src}
                    alt={projectDetails.executionLead.alt}
                    width={1400}
                    height={1000}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
              </AnimatedElement>

              <AnimatedElement animationType="fadeInRight" delay={0.15} className="flex items-center">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                    Utrecht Build Phase
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-black sm:text-3xl">
                    Site coordination, detailing, and custom fit-out in progress
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    These images expand on the before-and-after view above, highlighting the structural preparation, technical coordination, and installation stages required to deliver a highly graphic interior with custom-built elements.
                  </p>
                </div>
              </AnimatedElement>
            </div>

            <div className="space-y-8">
              {projectDetails.executionRows.map((row, rowIndex) => (
                <div
                  key={`execution-row-${rowIndex}`}
                  className={
                    row.length === 1
                      ? "grid w-full gap-8 mx-auto max-w-5xl"
                      : "grid gap-8 md:grid-cols-2"
                  }
                >
                  {row.map((image, imageIndex) => (
                    <AnimatedElement
                      key={image.src}
                      animationType="fadeInUp"
                      delay={0.08 * (rowIndex + imageIndex)}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={row.length === 1 ? 1400 : 900}
                          height={row.length === 1 ? 900 : 700}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                          style={{ aspectRatio: image.aspectRatio }}
                        />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Build Something Distinct
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                If your project needs a strong design language translated into custom-built reality, we can help connect concept, detailing, production, and installation into one coherent process.
              </p>
              <div className="space-y-3 text-gray-700">
                <p>Client: {projectDetails.client}</p>
                <p>Location: {projectDetails.location}</p>
                <p>Service: {projectDetails.role}</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight">
              <div className="rounded-xl bg-black p-8 text-white shadow-2xl sm:p-10 lg:p-12">
                <ContactForm />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  )
}
