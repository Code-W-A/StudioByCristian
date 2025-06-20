"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projectDetails = {
  title: "Amsterdam Amsteldijk Double Apartments",
  category: "Furniture Production",
  heroImageQuery: "bright living room in Amsterdam Amsteldijk apartment with grey sofa",
  description: [
    "Brightness, peace of mind and comfort envelop our experience when stepping into this space. This Amsterdam Apartment greets us with contemporary lines and unique details. The built-in furnishings are designed and carefully manufactured by our team of designers and carpenters.",
    "The custom-made furniture pieces are designed to be both functional and aesthetically pleasing, with a focus on clean lines and simple forms. The use of natural materials, such as wood veneer, FENIX, DEKTON countertops, water-resistant MDF, creates a warm and inviting atmosphere, that is both functional and aesthetically pleasing. For accessories we went for BLUM and HAFELE.",
  ],
  location: "Amsterdam",
  status: "Finished",
  service: "Furniture Production",
  client: "Erica Visser",
  galleryImages: [
    { srcQuery: "Amsterdam Amsteldijk dining area with wooden chairs", alt: "Dining area with wooden chairs" },
    { srcQuery: "Amsterdam Amsteldijk living room TV unit", alt: "Living room TV unit" },
    { srcQuery: "Amsterdam Amsteldijk hallway with mirror", alt: "Hallway with large mirror" },
    { srcQuery: "Amsterdam Amsteldijk kitchen cabinets", alt: "Kitchen cabinets detail" },
    { srcQuery: "Amsterdam Amsteldijk attic living space", alt: "Attic living space with sloped ceiling" },
    { srcQuery: "Amsterdam Amsteldijk kitchen sink area", alt: "Kitchen sink area" },
    { srcQuery: "Amsterdam Amsteldijk living room armchair detail", alt: "Living room armchair detail" },
  ],
}

export default function AmsterdamAmsteldijkPage() {
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
