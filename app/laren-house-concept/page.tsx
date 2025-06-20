"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectDetails = {
  title: "Laren House Concept",
  category: "Design Projects",
  heroImageQuery: "Laren House Concept modern kitchen with large island",
  description: [
    "The Laren House Concept owes its character to the elaborate and highly-detailed design, which gives the space a luxurious and a bit of a luscious look, and it's naturally, increasing the interior design value. The use of high-quality materials, such as marble, brass, and velvet, creates a sophisticated and elegant atmosphere, that is both functional and aesthetically pleasing.",
    "The large living and kitchen area is separated by a monumental aquarium, which is the main focus of the space. The aquarium is a unique and eye-catching feature, that adds a touch of nature and tranquility to the space. The use of natural materials, such as wood and stone, creates a warm and inviting atmosphere, that is both functional and aesthetically pleasing. The carefully and recurring strokes of the signature color of the living space.",
    "A true inspiration to its owners, an eye-catching design for all its visitors.",
  ],
  gallery: [
    { srcQuery: "Laren House Concept living room with aquarium", alt: "Living room with large aquarium" },
    { srcQuery: "Laren House Concept bedroom with blue accents", alt: "Bedroom with blue wall and accents" },
    { srcQuery: "Laren House Concept modern bathroom", alt: "Modern bathroom design" },
    { srcQuery: "Laren House Concept living room sofa detail", alt: "Detail of living room sofa and decor" },
    { srcQuery: "Laren House Concept kitchen storage detail", alt: "Detail of kitchen storage solutions" },
    { srcQuery: "Laren House Concept bedroom wardrobe", alt: "Bedroom wardrobe and shelving" },
    { srcQuery: "Laren House Concept dark themed kitchen", alt: "Dark themed kitchen design" },
    { srcQuery: "Laren House Concept living room with purple chairs", alt: "Living room with purple accent chairs" },
  ],
}

export default function LarenHouseConceptPage() {
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
                    src={`/placeholder.svg?width=800&height=600&query=Laren+House+Concept+living+room+with+divider`}
                    alt="Laren House living room"
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
                    src={`/placeholder.svg?width=800&height=600&query=Laren+House+Concept+living+area+with+blue+accents`}
                    alt="Laren House living area"
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
                    src={`/placeholder.svg?width=800&height=600&query=Laren+House+Concept+kitchen+detail`}
                    alt="Laren House kitchen detail"
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projectDetails.gallery.map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="scaleIn"
                delay={index * 0.05}
                className={index === 0 || index === 4 ? "md:col-span-2" : ""}
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
