"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const projectDetails = {
  title: "Private House Wassenaar",
  category: "Furniture Production",
  heroImageQuery: "modern kitchen in Private House Wassenaar opening to garden",
  description:
    "This private, old-fashioned Dutch house was completely renovated and turned into a modern and functional home. The custom-made furniture pieces are designed to be both functional and aesthetically pleasing, with a focus on clean lines and simple forms. The built-in furnishings are designed and carefully manufactured by our team of designers and carpenters. The main accent of the interior design was added by the unique custom-made sliding oak wood separation doors from floor to ceiling.",
  location: "Wassenaar",
  status: "Finished",
  service: "Interior Architecture, Furniture Production and Turn Key",
  totalResidentialArea: "180 m²",
  client: "Private",
  mainGalleryImages: [
    {
      srcQuery: "Private House Wassenaar living room with black frame doors",
      alt: "Living room with black frame doors",
    },
    { srcQuery: "Private House Wassenaar kitchen island detail", alt: "Kitchen island detail" },
    { srcQuery: "Private House Wassenaar kitchen overview", alt: "Kitchen overview" },
  ],
  bathroomGalleryImages: [
    {
      srcQuery: "Private House Wassenaar modern bathroom with marble and black fixtures",
      alt: "Modern bathroom overview",
    },
    { srcQuery: "Private House Wassenaar bathroom sink detail", alt: "Bathroom sink detail" },
    { srcQuery: "Private House Wassenaar bathroom shower niche with purple light", alt: "Bathroom shower niche" },
  ],
  carouselImageQuery: "Private House Wassenaar living room with full height shelving and glass doors",
}

export default function PrivateHouseWassenaarPage() {
  // Simple state for a potential carousel if expanded later
  const [currentImage, setCurrentImage] = useState(0)
  const carouselImages = [projectDetails.carouselImageQuery] // Simplified for now

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

          <div className="space-y-12">
            <AnimatedElement animationType="fadeInUp">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description}</p>
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.mainGalleryImages[0].srcQuery)}`}
                    alt={projectDetails.mainGalleryImages[0].alt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInUp">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectDetails.mainGalleryImages.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(image.srcQuery)}`}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
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
                    <strong>Total Residential Area:</strong> {projectDetails.totalResidentialArea}
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
          <AnimatedElement animationType="fadeInUp" className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Bathroom Details</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={`/placeholder.svg?width=1200&height=675&query=${encodeURIComponent(projectDetails.bathroomGalleryImages[0].srcQuery)}`}
                alt={projectDetails.bathroomGalleryImages[0].alt}
                width={1200}
                height={675}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.bathroomGalleryImages[1].srcQuery)}`}
                  alt={projectDetails.bathroomGalleryImages[1].alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.bathroomGalleryImages[2].srcQuery)}`}
                  alt={projectDetails.bathroomGalleryImages[2].alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src={`/placeholder.svg?width=1200&height=675&query=${encodeURIComponent(carouselImages[currentImage])}`}
                alt="Living room carousel image"
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
