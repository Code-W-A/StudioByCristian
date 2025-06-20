"use client"
// Note: URL is /harmonie-in-holz-house/, title from image is "Harmonie in Holz Showroom Concept"
// I'll use the showroom concept title for the page content.

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projectDetails = {
  title: "Harmonie in Holz Showroom Concept",
  category: "Design Projects", // Inferred from "Back to Design Projects" link
  heroImageQuery: "Harmonie in Holz showroom interior reception",
  description: [
    "An old barn from Kufstein took on a new exciting mission. It now hosts beautiful furniture pieces and unique interior concepts in a carefully designed and constructed space. Our mission for this project was to turn an old barn from Kufstein into a modern showroom for furniture and interior concepts. The challenge was to preserve the barn's original character while creating a contemporary and functional space. The design process involved extensive research and planning, including 3D renderings. After the design phase, the entire space has been remodeled to its new function, creating a unique and inviting atmosphere.",
    "The exterior of the barn is now a combination between a typical Bavarian building featuring balconies and wooden touches, and a modern one. The interior of the barn is now a combination between a typical Bavarian building featuring balconies and wooden touches, and a modern one, creating a unique and inviting atmosphere. The result is a stunning display of modern touch that can be observed in the interior design as well.",
    "The space now acts as a furniture showroom, and includes a living space, kitchen area, office area, storage and dining area, as well as meeting room and parking space.",
  ],
  location: "Munich, Germany",
  status: "Concept",
  sectors: "Concept, Interior Design, Furniture design & production",
  client: "Confidential",
  gallery: [
    { srcQuery: "Harmonie in Holz kitchen concept in showroom", alt: "Kitchen concept display in showroom" },
    { srcQuery: "Harmonie in Holz wood samples display", alt: "Display of various wood samples" },
    { srcQuery: "Harmonie in Holz showroom seating area", alt: "Seating area within the showroom" },
    {
      srcQuery: "Harmonie in Holz exterior rendering modern barn",
      alt: "Exterior rendering of the modern barn showroom",
    },
    { srcQuery: "Harmonie in Holz showroom kitchen detail", alt: "Detailed view of kitchen display" },
  ],
}

export default function HarmonieInHolzPage() {
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
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <AnimatedElement animationType="fadeInUp">
                <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl mb-6">
                  Project Description
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  {projectDetails.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </AnimatedElement>
            </div>
            <div className="lg:col-span-1">
              <AnimatedElement animationType="fadeInUp" delay={0.1}>
                <Card className="bg-gray-50 border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-black">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-700">
                    <p>
                      <strong>Location:</strong> {projectDetails.location}
                    </p>
                    <p>
                      <strong>Status:</strong> {projectDetails.status}
                    </p>
                    <p>
                      <strong>Sectors:</strong> {projectDetails.sectors}
                    </p>
                    <p>
                      <strong>Client:</strong> {projectDetails.client}
                    </p>
                    <div className="mt-4 flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white text-black border-gray-300 hover:bg-gray-100"
                      >
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                      <Button variant="outline" className="bg-white text-black border-gray-300 hover:bg-gray-100">
                        <Download className="mr-2 h-4 w-4" />
                        Concept
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Gallery</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectDetails.gallery.map((image, index) => (
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
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
