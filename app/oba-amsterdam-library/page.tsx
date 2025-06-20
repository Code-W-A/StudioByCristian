"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectDetails = {
  title: "OBA Amsterdam Library",
  category: "Furniture Production",
  heroImageQuery: "wide interior of OBA Amsterdam Library with wooden shelves",
  description:
    "The custom-made furniture pieces are designed to be both functional and aesthetically pleasing, with a focus on clean lines and simple forms. The use of natural materials, such as wood, creates a warm and inviting atmosphere, that is both functional and aesthetically pleasing. The lighting is a mix of natural and artificial light, with a few spotlights to highlight the products. The result is a stunning display of modern touch that can be observed in the interior design as well. We are very proud to be a part of this nice project.",
  galleryImages: [
    { srcQuery: "OBA Library wooden shelving units", alt: "Wooden shelving units" },
    { srcQuery: "OBA Library close up of cabinet detail", alt: "Cabinet detail" },
    { srcQuery: "OBA Library AED and fire extinguisher cabinet", alt: "AED and fire extinguisher cabinet" },
    { srcQuery: "OBA Library magazine display rack", alt: "Magazine display rack" },
    { srcQuery: "OBA Library children's book display boat shape", alt: "Children's book display boat shape" },
    { srcQuery: "OBA Library long wooden counter", alt: "Long wooden counter" },
    { srcQuery: "OBA Library custom wooden cabinet", alt: "Custom wooden cabinet" },
    { srcQuery: "OBA Library children's area with colorful seating", alt: "Children's area with colorful seating" },
  ],
}

export default function ObaAmsterdamLibraryPage() {
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
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description}</p>
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.galleryImages[0].srcQuery)}`}
                  alt={projectDetails.galleryImages[0].alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projectDetails.galleryImages.slice(1).map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="scaleIn"
                delay={index * 0.05}
                className={index === projectDetails.galleryImages.length - 2 ? "sm:col-span-2" : ""} // Make last image full width if odd number
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
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
