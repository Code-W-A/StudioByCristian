"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const projectDetails = {
  title: "Private Penthouse",
  category: "Design Projects",
  heroImageQuery: "modern penthouse kitchen with black cabinets and marble island",
  description: [
    "A trimmer, elegant and modern residential space realised in neutral and warm wood tones mixed together with strong, dark accents and diverse textures. The oak wood flooring is used as the main design element to give the space a warm and cozy feeling. The design is balanced and harmonised with the use of proportional accents and volumes. The custom-made furniture pieces complete the lines, rhythms and contrasts of the space, contouring the TV area, extending itself visually from the dining space all the way to the bedroom.",
    "The kitchen is visual gravity centre of the penthouse-made in black matt decor mixed together with light oak wood and a spectacular white marble countertop resting on the kitchen island. Due to its position, the kitchen island also serves as a dining table. The custom-made furniture pieces complete the lines, rhythms and contrasts of the space.",
  ],
  galleryImages: [
    { srcQuery: "private penthouse kitchen overview with dining area", alt: "Penthouse kitchen and dining area" },
    { srcQuery: "private penthouse living area with tv unit", alt: "Penthouse living area TV unit" },
    { srcQuery: "private penthouse bedroom with wood accents", alt: "Penthouse bedroom with wood paneling" },
    { srcQuery: "private penthouse kitchen island detail", alt: "Detail of kitchen island and seating" },
    { srcQuery: "private penthouse tv unit close up", alt: "Close up of TV unit and shelving" },
    { srcQuery: "private penthouse bedroom ceiling detail", alt: "Bedroom ceiling and lighting detail" },
  ],
  carouselImages: [
    { srcQuery: "private penthouse kitchen full view from angle", alt: "Full view of penthouse kitchen" },
    { srcQuery: "private penthouse living space with natural light", alt: "Penthouse living space" },
    { srcQuery: "private penthouse bedroom overview", alt: "Overview of penthouse bedroom" },
  ],
}

export default function PrivatePenthousePage() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === projectDetails.carouselImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? projectDetails.carouselImages.length - 1 : prev - 1))
  }

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
                <div className="grid grid-cols-1 gap-4">
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.galleryImages[0].srcQuery)}`}
                      alt={projectDetails.galleryImages[0].alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.galleryImages[1].srcQuery)}`}
                      alt={projectDetails.galleryImages[1].alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInUp">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-1 gap-4 lg:order-first">
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.galleryImages[2].srcQuery)}`}
                      alt={projectDetails.galleryImages[2].alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.galleryImages[3].srcQuery)}`}
                      alt={projectDetails.galleryImages[3].alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description[1]}</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
              {projectDetails.carouselImages.map((image, index) => (
                <Image
                  key={index}
                  src={`/placeholder.svg?width=1200&height=675&query=${encodeURIComponent(image.srcQuery)}`}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-opacity duration-500 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                />
              ))}
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
            </div>
          </AnimatedElement>
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
