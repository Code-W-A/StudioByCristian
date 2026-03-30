import type { Metadata } from "next"
import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import Link from "next/link"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import BeforeAfterComparison from "@/components/before-after-comparison"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getPageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = getPageMetadata("/purelei-store")

const PURELEI_PROJECT_PUBLIC = "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI"

function listGalleryImagesFromSubfolder(subfolder: string): { src: string; alt: string }[] {
  const dir = path.join(process.cwd(), "public", "purelei-store", "P1034_S1033_DE_BB_RPC_PURELEI", subfolder)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((name) => /\.(jpe?g|png|webp)$/i.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }))
    .map((name) => ({
      src: `${PURELEI_PROJECT_PUBLIC}/${subfolder}/${name}`,
      alt: `PURELEI store — ${path.parse(name).name}`,
    }))
}

/** All final photography from Picturest (project shoot). Under construction stays in Execution Process only. */
const pureleiProjectGallery = listGalleryImagesFromSubfolder("Picturest")

/** Desktop: rows of 2, then 1, then 2… (mobile: one column). */
function groupPureleiGalleryRows(images: { src: string; alt: string }[]) {
  const groups: { src: string; alt: string }[][] = []
  let i = 0
  let pairNext = true
  while (i < images.length) {
    if (pairNext) {
      groups.push(images.slice(i, i + 2))
      i += Math.min(2, images.length - i)
    } else {
      groups.push(images.slice(i, i + 1))
      i += 1
    }
    pairNext = !pairNext
  }
  return groups
}

const pureleiGalleryRowGroups = groupPureleiGalleryRows(pureleiProjectGallery)

const projectDetails = {
  title: "PURELEI Store",
  category: "Interior Renovation",
  heroImage: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Picturest/_EWP7369.jpg",
  location: "Cologne, Germany",
  client: "PURELEI",
  designer: "The Retail Performance Company",
  role: "General Contractor",
  intro: [
    "The PURELEI store in Cologne is conceived as a refined and minimal retail environment where architecture and furniture are intentionally reduced to their essence, allowing the jewelry to take center stage.",
    "Defined by a warm monochromatic palette and clean architectural lines, the space creates a calm and immersive atmosphere. Soft yellow tones, natural wood flooring, and subtle lighting work together to enhance the presentation of the products, while maintaining a cohesive and elegant spatial identity.",
  ],
  buildStory: [
    "Acting as General Contractor, Studio byCristian was responsible for the full execution of the project, ensuring precision, consistency, and high-quality delivery across all elements. The design required a meticulous approach to detailing, where simplicity demanded exactness in proportions, finishes, and alignments.",
    "All furniture and display systems were custom-made and carefully integrated into the architecture. Floating shelves, minimal display units, and continuous mirrored surfaces were developed to create visual depth and rhythm, while maintaining a clean and unobtrusive presence.",
    "The result is a sophisticated retail space where materiality, light, and proportion are carefully balanced, allowing the products to remain the focal point. This project reflects our ability to execute high-end retail environments where precision and restraint define the overall experience.",
  ],
  featureImages: [
    {
      src: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Picturest/_EWP7415.jpg",
      alt: "PURELEI refined retail interior with mirrored surfaces and integrated display systems",
    },
    {
      src: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Picturest/_EWP7430.jpg",
      alt: "PURELEI custom furniture and product presentation integrated into the final store architecture",
    },
  ],
  comparison: {
    beforeSrc: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Under construction/IMG_5218.jpg",
    afterSrc: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Picturest/_EWP7377.jpg",
    alt: "PURELEI main retail axis transformed from fit-out shell to finished store interior",
  },
  executionProcess: [
    {
      src: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Under construction/IMG_6007.jpg",
      alt: "PURELEI storefront during fit-out in Cologne",
    },
    {
      src: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Under construction/IMG_5992.jpg",
      alt: "PURELEI interior fit-out showing fixtures and shelves being installed",
    },
    {
      src: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Under construction/IMG_5238.jpg",
      alt: "PURELEI corridor area during execution with scaffold and unfinished flooring",
    },
    {
      src: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Under construction/IMG_5239.jpg",
      alt: "PURELEI retail interior under construction with finishing works in progress",
    },
    {
      src: "/purelei-store/P1034_S1033_DE_BB_RPC_PURELEI/Under construction/IMG_5235.jpg",
      alt: "PURELEI execution-phase interior showing site coordination and final adjustments",
    },
  ],
}

export default function PureleiStorePage() {
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
              <Link href="/interior-renovation">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Interior Renovation
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Before &amp; After
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A direct comparison of the same interior axis, showing how the stripped-back Cologne shell was transformed into the finished PURELEI retail environment.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp" delay={0.1}>
            <div className="max-w-6xl mx-auto">
              <BeforeAfterComparison
                beforeSrc={projectDetails.comparison.beforeSrc}
                afterSrc={projectDetails.comparison.afterSrc}
                alt={projectDetails.comparison.alt}
                beforeLabel="Under Construction"
                afterLabel="Finished Store"
                instruction="Drag or hover to compare"
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
                A refined retail environment with restrained precision
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
                  src={projectDetails.featureImages[0].src}
                  alt={projectDetails.featureImages[0].alt}
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
                  src={projectDetails.featureImages[1].src}
                  alt={projectDetails.featureImages[1].alt}
                  width={1100}
                  height={850}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.2} className="space-y-6">
              <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                General contracting for a high-end brand environment
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

      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Execution Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond the direct comparison above, these site images document the wider build phase behind the finished store, from storefront preparation to interior fit-out and final installation works.
            </p>
          </AnimatedElement>

          <div className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <AnimatedElement animationType="fadeInLeft" delay={0.1}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                  <Image
                    src={projectDetails.executionProcess[0].src}
                    alt={projectDetails.executionProcess[0].alt}
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
                    Cologne Fit-Out
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-black sm:text-3xl">
                    A broader view of the coordination behind the finished store
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    This section captures the site setup, finishing stages, and coordinated installation work that supported the final minimal retail atmosphere. Together with the comparison above, it shows both the spatial transformation and the execution discipline behind the project.
                  </p>
                </div>
              </AnimatedElement>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projectDetails.executionProcess.slice(1).map((image, index) => (
                <AnimatedElement key={image.src} animationType="fadeInUp" delay={0.1 * index}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={900}
                      height={700}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: "4/3" }}
                    />
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Final project photography highlighting the restrained palette, custom-made display systems, and carefully integrated retail details.
            </p>
          </AnimatedElement>

          <div className="flex flex-col gap-6">
            {pureleiGalleryRowGroups.map((group, groupIndex) => {
              const startIndex = pureleiGalleryRowGroups
                .slice(0, groupIndex)
                .reduce((sum, g) => sum + g.length, 0)
              const rowKey = group.map((g) => g.src).join("|")

              if (group.length === 2) {
                return (
                  <div key={rowKey} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {group.map((image, j) => (
                      <AnimatedElement
                        key={image.src}
                        animationType="fadeInUp"
                        delay={Math.min(startIndex + j, 12) * 0.03}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="(max-width: 767px) 100vw, 50vw"
                          />
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>
                )
              }

              const image = group[0]
              return (
                <div key={rowKey} className="flex justify-center">
                  <AnimatedElement
                    animationType="fadeInUp"
                    delay={Math.min(startIndex, 12) * 0.03}
                    className="w-full md:w-[calc(50%-0.75rem)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 767px) 100vw, 50vw"
                      />
                    </div>
                  </AnimatedElement>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Deliver Retail With Precision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We can support retail concepts that need a tight link between design discipline, custom fabrication, and execution on site.
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
