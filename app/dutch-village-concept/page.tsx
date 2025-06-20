"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, Share2 } from "lucide-react"

const projectDetails = {
  title: "Dutch Village Concept",
  category: "Design Projects",
  heroImageQuery: "Dutch Village modern houses exterior rendering",
  description: [
    "With dedication to the Scandinavian design lovers, who thrive inside a light filled, open space, minimalist houses.",
    "The Dutch Village concept is a modern interpretation of traditional Dutch architecture, embedded in this region. The merging of strong shapes, natural materials and greenery creates a unique and inviting atmosphere, that is both functional and aesthetically pleasing.",
    "This is what the Dutch Village stands out with: a modern and minimalistic approach to design, that is both functional and aesthetically pleasing. The use of natural materials, such as wood and stone, creates a warm and inviting atmosphere, while the large windows provide ample natural light.",
    "The neighborhood consists of a number of 37 houses, each with its own garden, and a playground designed to nurture children's interest in the outdoors.",
  ],
  // Details like status, client, location are not explicitly in the screenshot for this one,
  // but we can add placeholders if needed or infer from context if available elsewhere.
  // For now, focusing on description and gallery.
  gallery: [
    { srcQuery: "Dutch Village Concept aerial view of houses", alt: "Aerial view of Dutch Village houses" },
    { srcQuery: "Dutch Village Concept street view with cars", alt: "Street view within Dutch Village" },
    { srcQuery: "Dutch Village Concept close up of house facade", alt: "Close-up of a house facade in Dutch Village" },
    { srcQuery: "Dutch Village Concept playground area", alt: "Playground area in Dutch Village" },
    { srcQuery: "Dutch Village Concept modern house exterior detail", alt: "Exterior detail of a modern house" },
    { srcQuery: "Dutch Village Concept children playing in playground", alt: "Children playing in the playground" },
    { srcQuery: "Dutch Village Concept unique playground structure", alt: "Unique wooden playground structure" },
  ],
}

export default function DutchVillageConceptPage() {
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
          <AnimatedElement animationType="fadeInUp">
            <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl mb-6">Project Description</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              {projectDetails.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex space-x-2">
              <Button variant="outline" size="icon" className="bg-white text-black border-gray-300 hover:bg-gray-100">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="outline" className="bg-white text-black border-gray-300 hover:bg-gray-100">
                <Download className="mr-2 h-4 w-4" />
                Project Brief
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Gallery</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectDetails.gallery.map((image, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.05}>
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
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/design">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
