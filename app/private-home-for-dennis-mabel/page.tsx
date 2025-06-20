"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectDetails = {
  title: "Private Home for Dennis & Mabel",
  category: "Furniture Production",
  heroImageQuery: "modern living room in Private Home for Dennis & Mabel with dark accents",
  description: [
    "This private home features custom-built design pieces, strong lines and moving rhythms - these are some of the main characteristics of the Dutch design. The challenge was to combine the modern Dutch design with the owners' wishes and needs. The result is a stunning display of modern touch that can be observed in the interior design as well. The custom-made furniture pieces, so as to obtain a great combination between texture and work.",
    "The modern and elegant approach to this space is enriched by the custom-made furniture pieces, that are designed to be both functional and aesthetically pleasing. The use of natural materials, such as wood and stone, creates a warm and inviting atmosphere, that is both functional and aesthetically pleasing. The lighting is a mix of old and new, with a few pieces that are more than a century old. The living room storage wall contraption, TV furniture, kitchen, bedroom furniture and bathroom furniture are all custom-made and simply designed to render the apartment a complete look.",
  ],
  galleryImages: [
    { srcQuery: "Private Home for Dennis & Mabel living room tv unit", alt: "Living room TV unit" },
    { srcQuery: "Private Home for Dennis & Mabel dark wood furniture detail", alt: "Dark wood furniture detail" },
    { srcQuery: "Private Home for Dennis & Mabel living area overview", alt: "Living area overview" },
    { srcQuery: "Private Home for Dennis & Mabel dining area", alt: "Dining area" },
  ],
  carouselImageQuery: "Private Home for Dennis & Mabel living room full view",
}

export default function PrivateHomeDennisMabelPage() {
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

          <div className="space-y-12">
            <AnimatedElement animationType="fadeInUp">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description[0]}</p>
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
            <AnimatedElement animationType="fadeInUp">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg lg:order-first">
                  <Image
                    src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.galleryImages[1].srcQuery)}`}
                    alt={projectDetails.galleryImages[1].alt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description[1]}</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projectDetails.galleryImages.slice(2).map((image, index) => (
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
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src={`/placeholder.svg?width=1200&height=675&query=${encodeURIComponent(projectDetails.carouselImageQuery)}`}
                alt="Living room full view"
                width={1200}
                height={675}
                className="object-cover w-full h-full"
              />
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
