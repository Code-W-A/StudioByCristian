"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projectDetails = {
  title: "Walden BizStay Kitchens",
  category: "Furniture Production",
  heroImageQuery: "modern kitchen in Walden BizStay with grey cabinets and wood dining table",
  description:
    "For this space, we had the challenge to produce 30 brand new custom made kitchens for the Walden BizStay Hotel in The Hague. Each compact kitchen is made of high quality materials, such as FENIX countertops, that are fully functional, connected and equipped and with LED lights for a better visibility and design effect. The custom-made furniture pieces and the carefully chosen details give the space a very modern and chic touch. Another happy customer.",
  location: "The Hague",
  status: "Finished",
  service: "Furniture Production",
  area: "30 Kitchens",
  client: "Walden BizStay BV",
  galleryImages: [
    { srcQuery: "Walden BizStay kitchen dining area", alt: "Kitchen and dining area" },
    { srcQuery: "Walden BizStay kitchen close up with appliances", alt: "Kitchen close up with appliances" },
    { srcQuery: "Walden BizStay kitchen from another angle", alt: "Kitchen from another angle" },
  ],
  carouselImageQuery: "Walden BizStay kitchen with oven and hob detail",
}

export default function WaldenBizstayKitchensPage() {
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
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{projectDetails.description}</p>
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg mb-8">
                <Image
                  src={`/placeholder.svg?width=1000&height=750&query=${encodeURIComponent(projectDetails.galleryImages[0].srcQuery)}`}
                  alt={projectDetails.galleryImages[0].alt}
                  width={1000}
                  height={750}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/placeholder.svg?width=1000&height=750&query=${encodeURIComponent(projectDetails.galleryImages[1].srcQuery)}`}
                  alt={projectDetails.galleryImages[1].alt}
                  width={1000}
                  height={750}
                  className="object-cover w-full h-full"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInUp">
              <Card className="bg-gray-50 border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-black">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Location:</strong> {projectDetails.location}
                  </p>
                  <p>
                    <strong>Status:</strong> {projectDetails.status}
                  </p>
                  <p>
                    <strong>Service:</strong> {projectDetails.service}
                  </p>
                  <p>
                    <strong>Area:</strong> {projectDetails.area}
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
          <AnimatedElement animationType="fadeInUp">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src={`/placeholder.svg?width=1200&height=675&query=${encodeURIComponent(projectDetails.carouselImageQuery)}`}
                alt="Kitchen detail view"
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
