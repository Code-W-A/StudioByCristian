"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectDetails = {
  title: "Walden Apartments Concept",
  category: "Design Projects",
  heroImageQuery: "modern kitchen in Walden Apartments Concept with wood cabinets",
  description: [
    "A relaxing and grounding atmosphere with cool simple materials. The Walden Apartments are designed to provide a comfortable and relaxing stay for the guests. The use of natural materials, such as wood and stone, creates a warm and inviting atmosphere, that is both functional and aesthetically pleasing. The apartments are designed to provide a comfortable and relaxing stay for the guests, throughout the duration of their either brief or extended visit. Each apartment is designed to be a home away from home.",
    "Each high-end apartment from the Walden building includes an open-space kitchen and living room, a bedroom, and a bathroom. The custom-made furniture is designed to be both functional and aesthetically pleasing. The furniture is designed and carefully manufactured by our architect and carpenters, featuring plenty sleek wooden accents, and a few black metal details.",
  ],
  gallery: [
    { srcQuery: "Walden Apartments living room and dining area", alt: "Living room and dining area" },
    { srcQuery: "Walden Apartments bedroom with desk", alt: "Bedroom with integrated desk" },
    { srcQuery: "Walden Apartments kitchen detail view", alt: "Detailed view of kitchen" },
    { srcQuery: "Walden Apartments bedroom close-up", alt: "Close-up of bedroom decor" },
    { srcQuery: "Walden Apartments living room from another angle", alt: "Living room from another angle" },
  ],
}

export default function WaldenApartmentsConceptPage() {
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
                    src={`/placeholder.svg?width=800&height=600&query=Walden+Apartments+living+room+with+natural+light`}
                    alt="Walden Apartments living room"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInUp">
              <div className="aspect-[16/7] w-full overflow-hidden rounded-lg shadow-lg mb-6">
                <Image
                  src={`/placeholder.svg?width=1200&height=525&query=Walden+Apartments+kitchen+and+wardrobe+combination`}
                  alt="Walden Apartments kitchen and wardrobe"
                  width={1200}
                  height={525}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
                {projectDetails.description[1]}
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projectDetails.gallery.map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="scaleIn"
                delay={index * 0.05}
                className={index === 0 ? "sm:col-span-2" : ""}
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
