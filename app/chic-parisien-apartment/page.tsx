"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectDetails = {
  title: "Chic Parisien Apartment",
  category: "Design Projects",
  heroImageQuery: "chic parisian apartment living room with elegant furniture",
  description: [
    "When we say Paris, we do not simply name a place. Paris is a lifestyle, a state of mind, a story. This is what our project in Paris is all about: a story, told through our design, culture and interior decorations.",
    "The old and new style join forces to create a chic, modern and elegant look with a timeless design. The interior design concept has been born from a continuous high functionality & quality standards. We tried to 'read the Parisian up to date and polished', but fully transformed in our vision.",
    "A classic few pieces of furniture have been restored from the previous home, and pulled together with a few modern pieces, to create a unique and personal space. The use of natural materials, such as wood and stone, creates a warm and inviting atmosphere, that is both functional and aesthetically pleasing. The lighting is a mix of old and new, with a few pieces that are more than a century old.",
  ],
  gallery: [
    { srcQuery: "chic parisian apartment dining area", alt: "Dining area" },
    { srcQuery: "chic parisian apartment living room detail", alt: "Living room detail" },
    { srcQuery: "chic parisian apartment bedroom", alt: "Bedroom" },
    { srcQuery: "chic parisian apartment kitchen", alt: "Kitchen" },
    { srcQuery: "chic parisian apartment bathroom", alt: "Bathroom" },
    { srcQuery: "chic parisian apartment hallway", alt: "Hallway" },
    { srcQuery: "chic parisian apartment second bedroom", alt: "Second bedroom" },
    { srcQuery: "chic parisian apartment bathroom details", alt: "Bathroom details" },
    { srcQuery: "chic parisian apartment third bedroom", alt: "Third bedroom" },
  ],
}

export default function ChicParisienApartmentPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl={`/placeholder.svg?width=1600&height=900&query=${encodeURIComponent(projectDetails.heroImageQuery)}`}
        imageAlt={projectDetails.title + " Hero Image"}
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{projectDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/design">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>

          <div className="space-y-12">
            <AnimatedElement animationType="fadeInUp">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description[0]}</p>
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?width=800&height=600&query=chic+parisian+apartment+bedroom+view`}
                    alt="Chic Parisian Apartment bedroom"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInUp">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg lg:order-first">
                  <Image
                    src={`/placeholder.svg?width=800&height=600&query=chic+parisian+apartment+living+room+sketch`}
                    alt="Chic Parisian Apartment living room sketch"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description[1]}</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInUp">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description[2]}</p>
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?width=800&height=600&query=chic+parisian+apartment+restored+furniture`}
                    alt="Chic Parisian Apartment restored furniture"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectDetails.gallery.map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="scaleIn"
                delay={index * 0.05}
                className={index === 0 || index === 3 || index === 6 ? "lg:col-span-2" : ""}
              >
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(image.srcQuery)}`}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/design">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
