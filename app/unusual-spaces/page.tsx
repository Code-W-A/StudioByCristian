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
  heroImage: "/unusual-spaces/Utrecht - Pictures/_EWP0966.jpg",
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
      src: "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0839.webp",
      alt: "Unusual Spaces finished collaborative lounge with graphic flooring, integrated seating, and meeting pod in Utrecht",
    },
    {
      src: "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0906.webp",
      alt: "Unusual Spaces finished office zone with bespoke shelving, planting wall, and integrated coffee point in Utrecht",
    },
  ],
  comparison: {
    beforeSrc: "/unusual-spaces/Under construction/IMG_0423.jpg",
    afterSrc: "/unusual-spaces/Utrecht - Pictures/_EWP0966.jpg",
    alt: "Unusual Spaces main Utrecht zone transformed from shell-stage fit-out into a finished collaborative interior",
  },
  galleryImages: [
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0836.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0845.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0846.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0851.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0854.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0860.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0862.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0875.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0878.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0882.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0887.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0891.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0893.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0898.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0903.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0909.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0918.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0923.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0930.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0933.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0935.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0945.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0949.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0957.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0966.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0973.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0974.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0975.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0977.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0978.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0980.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0981.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0982.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0985.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0986.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0989.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP0993.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP1013.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP1014.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP1034.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP1045.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP1052.webp",
    "/unusual-spaces/Utrecht - Pictures/optimized/_EWP1057.webp",
  ],
}

export default function UnusualSpacesPage() {
  const galleryRows: string[][] = []
  const galleryPattern = [2, 1]
  let galleryIndex = 0
  let patternIndex = 0

  while (galleryIndex < projectDetails.galleryImages.length) {
    const groupSize = galleryPattern[patternIndex % galleryPattern.length]
    galleryRows.push(projectDetails.galleryImages.slice(galleryIndex, galleryIndex + groupSize))
    galleryIndex += groupSize
    patternIndex += 1
  }

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
              A direct comparison between the early shell-stage workspace and the completed Unusual Spaces interior, showing how the concept was translated into built form.
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
              Project Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most of the final photography from the Utrecht project, arranged in a repeating 2 plus 1 rhythm to show the full range of custom joinery, meeting zones, work areas, and social spaces.
            </p>
          </AnimatedElement>

          <div className="space-y-8">
            <div className="space-y-8">
              {galleryRows.map((row, rowIndex) => (
                <div
                  key={`execution-row-${rowIndex}`}
                  className={
                    row.length === 1
                      ? "grid w-full gap-8 mx-auto max-w-4xl"
                      : "grid gap-8 md:grid-cols-2"
                  }
                >
                  {row.map((imageSrc, imageIndex) => (
                    <AnimatedElement
                      key={imageSrc}
                      animationType="fadeInUp"
                      delay={0.08 * (rowIndex + imageIndex)}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                        <Image
                          src={imageSrc}
                          alt={`Unusual Spaces completed Utrecht workplace interior view ${rowIndex * 2 + imageIndex + 1}`}
                          width={row.length === 1 ? 1200 : 900}
                          height={row.length === 1 ? 900 : 700}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                          style={{ aspectRatio: "4/3" }}
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
