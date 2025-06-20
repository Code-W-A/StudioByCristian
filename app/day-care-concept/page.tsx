"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectDetails = {
  title: "Day Care Concept",
  category: "Design Projects",
  heroImageQuery: "modern and playful day care center interior with colorful furniture",
  description: [
    "The purpose was creating a visually stimulating environment in which children can feel safe and comfortable, while also being able to learn and play. The design concept is based on an interior crafted with natural oak and soft pastel colors.",
    "This is a concept created for potential clients in The Netherlands, who were looking to start a visually stimulating, modern, yet very functional day care center.",
    "The oak wood furniture and accessories can be found as miniature items in various shapes and sizes. The furniture pieces are not only accessories, as well as crafted on the walls and continuing up to the ceiling, but also as a functional part of the space. The design is enhanced by a natural and warm lighting system that emerges from the furniture and the ceiling, creating a cozy and inviting atmosphere.",
  ],
  gallery: [
    { srcQuery: "day care concept play area with slide", alt: "Play area with slide and climbing structures" },
    { srcQuery: "day care concept reading nook", alt: "Cozy reading nook with soft seating" },
    { srcQuery: "day care concept custom shelving units", alt: "Custom shelving units for toys and books" },
    { srcQuery: "day care concept wide view of play area", alt: "Wide view of the main play area" },
    { srcQuery: "day care concept tables and chairs for children", alt: "Small tables and chairs for children" },
  ],
}

export default function DayCareConceptPage() {
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
                    src={`/placeholder.svg?width=800&height=600&query=day+care+play+area+with+natural+light`}
                    alt="Day care play area"
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
                    src={`/placeholder.svg?width=800&height=600&query=day+care+concept+with+yellow+and+purple+accents`}
                    alt="Day care concept with colorful accents"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description[1]}</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInUp">
              <div className="aspect-[16/7] w-full overflow-hidden rounded-lg shadow-lg mb-6">
                <Image
                  src={`/placeholder.svg?width=1200&height=525&query=day+care+long+wall+with+storage+cubbies`}
                  alt="Wall with storage cubbies"
                  width={1200}
                  height={525}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
                {projectDetails.description[2]}
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4">
            {projectDetails.gallery.map((image, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.05}>
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?width=1200&height=675&query=${encodeURIComponent(image.srcQuery)}`}
                    alt={image.alt}
                    width={1200}
                    height={675}
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
