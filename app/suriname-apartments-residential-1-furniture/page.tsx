"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projectDetails = {
  title: "Suriname Apartments Residential 1",
  category: "Furniture Production",
  heroImageQuery: "Suriname Apartments modern kitchen living area",
  description:
    "The two apartments are the definition of luxurious Scandinavian design and character due to their simplicity and quality. The main focus of the design is on the use of natural materials, combined with high-quality accents and details. The apartments’ highlights are the ample kitchen areas that feature large kitchen islands equipped with modern appliances. The Scandinavian design is also visible in all the other Quality details distinguishing the apartments: the custom-made furniture, the lighting, and the accessories. The result is a warm and inviting atmosphere that is both functional and aesthetically pleasing. The design philosophy behind these apartments was to create spaces that are luxurious, yet understated and timeless. The challenge in this production process was to choose and deliver OAK wood quality class AA and keep the same texture and appearance on all items. The kitchen doors are from SHINNOKI OAK, the worktops are from DEKTON, and the appliances are from MIELE. The lighting is from Phillips HUE, creating a subtle, discontinuous accent on some of the cupboards. Accessories are from BLUM Motion, fully electric.",
  projectName: "Suriname Apt. Res 1 Furniture BV",
  status: "Finished",
  sectors: "Interior Architecture & Furniture Production",
  location: "Suriname",
  client: "Philippe Citroen | Lemons BV",
  materials: [
    "Oak Veneer",
    "SHINNOKI OAK",
    "DEKTON",
    "Lacquered MDF with RAL paint code",
    "Marine OAK Wood",
    "BLUM",
    "Phillips HUE",
    "MIELE Appliances",
    "INOX Accessories",
    "LED light",
  ],
  gallery: [
    { srcQuery: "Suriname Apartments kitchen island detail", alt: "Detail of kitchen island and stools" },
    { srcQuery: "Suriname Apartments hallway lighting", alt: "Hallway with accent lighting" },
    { srcQuery: "Suriname Apartments kitchen sink area", alt: "Kitchen sink and countertop detail" },
    { srcQuery: "Suriname Apartments wooden cabinetry", alt: "Close-up of wooden cabinetry" },
    { srcQuery: "Suriname Apartments kitchen appliances built-in", alt: "Built-in kitchen appliances" },
    { srcQuery: "Suriname Apartments living area shelving", alt: "Living area with custom shelving" },
    { srcQuery: "Suriname Apartments bedroom wardrobe", alt: "Bedroom wardrobe detail" },
    { srcQuery: "Suriname Apartments light switch detail", alt: "Light switch and wall texture" },
  ],
}

export default function SurinameApartmentsPage() {
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
                <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description}</p>
              </AnimatedElement>
            </div>
            <div className="lg:col-span-1">
              <AnimatedElement animationType="fadeInUp" delay={0.1}>
                <Card className="bg-gray-50 border-gray-200 shadow-sm mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-black">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-700">
                    <p>
                      <strong>Project Name:</strong> {projectDetails.projectName}
                    </p>
                    <p>
                      <strong>Status:</strong> {projectDetails.status}
                    </p>
                    <p>
                      <strong>Sectors:</strong> {projectDetails.sectors}
                    </p>
                    <p>
                      <strong>Location:</strong> {projectDetails.location}
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
                        Info
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-black">Materials & Brands</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-gray-700">
                    <ul className="list-disc list-inside">
                      {projectDetails.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
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
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
