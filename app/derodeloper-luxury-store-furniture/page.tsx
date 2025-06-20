"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projectDetails = {
  title: "DERODELOPER Luxury Store",
  category: "Furniture Production",
  heroImageQuery: "interior of DERODELOPER luxury store with bright lighting",
  description: [
    "Derodeloper is a luxury multi-brand store located in the heart of The Hague, Netherlands. The store is spread over two floors and offers a wide range of high-end fashion items, from shoes and bags to accessories.",
    "The custom-made furniture pieces are designed to reflect the products from various angles, and wall - high display cases are used to maximize the space. The accessories are hidden behind glass shelvery, to offer a sense of exclusivity and privacy. The marble details that the reception desk is highlighted with, are also to be found on the stairs. The lighting is a mix of natural and artificial light, with a few spotlights to highlight the products. The result is a stunning display of modern touch that can be observed in the interior design as well.",
  ],
  location: "The Hague",
  service: "Furniture Production",
  client: "Miranda Primorac Holding BV",
  gallery: [
    { srcQuery: "DERODELOPER store shoe display shelves", alt: "Shoe display shelves" },
    { srcQuery: "DERODELOPER store accessory display cases", alt: "Accessory display cases" },
    { srcQuery: "DERODELOPER store reception desk marble detail", alt: "Reception desk with marble detail" },
    { srcQuery: "DERODELOPER store staircase with marble", alt: "Staircase with marble details" },
    { srcQuery: "DERODELOPER store neon sign detail", alt: "Neon sign detail" },
    { srcQuery: "DERODELOPER store overall interior view", alt: "Overall interior view of the store" },
    { srcQuery: "DERODELOPER store seating area", alt: "Seating area for customers" },
    { srcQuery: "DERODELOPER store window display", alt: "Storefront window display" },
    { srcQuery: "DERODELOPER store exterior facade", alt: "Exterior facade of the store" },
  ],
}

export default function DerodeloperLuxuryStorePage() {
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
                <div className="grid grid-cols-1 gap-4">
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.gallery[0].srcQuery)}`}
                      alt={projectDetails.gallery[0].alt}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-first">
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/placeholder.svg?width=600&height=450&query=${encodeURIComponent(projectDetails.gallery[1].srcQuery)}`}
                      alt={projectDetails.gallery[1].alt}
                      width={600}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/placeholder.svg?width=600&height=450&query=${encodeURIComponent(projectDetails.gallery[2].srcQuery)}`}
                      alt={projectDetails.gallery[2].alt}
                      width={600}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description[1]}</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInUp">
              <Card className="bg-gray-50 border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-black">Project Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Location:</strong> {projectDetails.location}
                  </p>
                  <p>
                    <strong>Service:</strong> {projectDetails.service}
                  </p>
                  <p>
                    <strong>Client:</strong> {projectDetails.client}
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectDetails.gallery.slice(3).map((image, index) => (
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
