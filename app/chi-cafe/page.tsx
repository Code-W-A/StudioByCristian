"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const projectDetails = {
  title: "Chi Cafe",
  category: "Furniture Production",
  heroImageQuery: "interior of Chi Cafe with orange chairs and industrial lighting",
  description:
    "Chi Cafe was a very fun project for us to undertake due to the custom made furniture pieces that were designed to be both functional and aesthetically pleasing, with painted MDF and modern colors, combined with steel and wood ceilings that create a warm and inviting atmosphere. The lighting is a mix of old and new, with a few pieces that are more than a century old. The result is a stunning display of modern touch that can be observed in the interior design as well. Our team of designers and carpenters are always challenged by the complexity of our projects and designs.",
  galleryImages: [
    { srcQuery: "Chi Cafe seating area with large windows", alt: "Cafe seating area with large windows" },
    { srcQuery: "Chi Cafe counter area with menu board", alt: "Cafe counter area" },
    { srcQuery: "Chi Cafe coffee machine and pastry display", alt: "Coffee machine and pastry display" },
    { srcQuery: "Chi Cafe interior detail with wooden slats", alt: "Interior detail with wooden slats" },
    { srcQuery: "Chi Cafe overview from different angle", alt: "Cafe overview from different angle" },
  ],
  carouselImageQuery: "Chi Cafe interior wide shot with bar stools",
}

export default function ChiCafePage() {
  const [currentImage, setCurrentImage] = useState(0)
  const carouselImages = [projectDetails.carouselImageQuery] // Simplified

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % carouselImages.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)

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
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src={`/placeholder.svg?width=1200&height=675&query=${encodeURIComponent(carouselImages[currentImage])}`}
                alt="Cafe interior carousel image"
                fill
                className="object-cover"
              />
              {carouselImages.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black border-none"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black border-none"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </div>
          </AnimatedElement>
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
