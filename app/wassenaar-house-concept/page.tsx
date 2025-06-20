"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, Share2 } from "lucide-react"

const projectDetails = {
  title: "Wassenaar House Concept",
  category: "Concept Design",
  year: "2023", // Placeholder
  location: "Wassenaar, The Netherlands", // Placeholder
  description:
    "The Wassenaar House Concept is a visionary project that redefines modern living in a classic Dutch setting. This design emphasizes open spaces, natural light, and a seamless integration with the surrounding landscape. Key features include sustainable materials, smart home technology, and bespoke interior elements that reflect a sophisticated yet comfortable lifestyle. The concept aims to create a sanctuary that is both aesthetically stunning and highly functional for its inhabitants.",
  longDescription:
    "Our approach to the Wassenaar House Concept began with a deep analysis of the site's unique characteristics and the client's aspirations for a contemporary family home. We envisioned a structure that respects traditional Dutch architectural forms while embracing modern design principles. The expansive use of glass blurs the lines between indoor and outdoor spaces, inviting nature in. \n\nInterior layouts are designed for flexibility and flow, accommodating both intimate family moments and larger social gatherings. Custom-designed furniture and lighting fixtures add unique character to each room. Sustainability was a core consideration, with passive design strategies, energy-efficient systems, and locally sourced materials playing a crucial role in the project's development.",
  images: [
    { srcQuery: "Wassenaar House Concept exterior front view", alt: "Front exterior view of Wassenaar House Concept" },
    {
      srcQuery: "Wassenaar House Concept living room interior",
      alt: "Spacious living room in Wassenaar House Concept",
    },
    { srcQuery: "Wassenaar House Concept kitchen and dining area", alt: "Modern kitchen and dining area" },
    { srcQuery: "Wassenaar House Concept master bedroom", alt: "Elegant master bedroom with large windows" },
    { srcQuery: "Wassenaar House Concept garden and patio", alt: "View of the garden and patio area" },
    { srcQuery: "Wassenaar House Concept architectural detail", alt: "Close-up of an architectural detail" },
  ],
}

export default function WassenaarHouseConceptPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl={`/placeholder.svg?width=1600&height=900&query=${encodeURIComponent(projectDetails.images[0].srcQuery)}`}
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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">Project Overview</h2>
                <p className="mt-2 text-gray-600">
                  {projectDetails.location} &bull; {projectDetails.year}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-2">
                <Button variant="outline" size="icon" className="bg-white text-black border-gray-300 hover:bg-gray-100">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="outline" className="bg-white text-black border-gray-300 hover:bg-gray-100">
                  <Download className="mr-2 h-5 w-5" />
                  Brochure
                </Button>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{projectDetails.description}</p>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{projectDetails.longDescription}</p>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Project Gallery</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectDetails.images.map((image, index) => (
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
                Back to Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
