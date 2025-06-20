"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projectDetails = {
  title: "Susan and Cyril Apartment",
  category: "Furniture Production",
  heroImageQuery: "modern kitchen Susan and Cyril Apartment with marble backsplash",
  description:
    "Stylish and classy Amsterdam apartment, made with care and high quality details. The kitchen is the main focus of the apartment, featuring a large island with a marble countertop and a custom-made dining table. The contrast between classic and modern is used here as a statement, creating a unique and sophisticated atmosphere. The custom-made furniture, lighting, and accessories all contribute to the overall design and interest.",
  status: "Finished",
  sectors: "Interior Architecture & Furniture Production",
  location: "Amsterdam, The Netherlands",
  client: "Susan and Cyril",
  gallery: [
    { srcQuery: "Susan and Cyril Apartment kitchen detail", alt: "Kitchen detail with sink and faucet" },
    { srcQuery: "Susan and Cyril Apartment dining area", alt: "Dining area adjacent to kitchen" },
    { srcQuery: "Susan and Cyril Apartment living room seating", alt: "Living room seating area" },
    { srcQuery: "Susan and Cyril Apartment kitchen island front", alt: "Front view of kitchen island" },
    { srcQuery: "Susan and Cyril Apartment kitchen overview", alt: "Overview of kitchen space" },
    { srcQuery: "Susan and Cyril Apartment bathroom detail marble", alt: "Bathroom detail with marble and fixtures" },
    { srcQuery: "Susan and Cyril Apartment hallway perspective", alt: "Hallway perspective with wooden floor" },
    { srcQuery: "Susan and Cyril Apartment living area bright", alt: "Bright living area with large windows" },
    { srcQuery: "Susan and Cyril Apartment door handle detail", alt: "Close-up of a door handle" },
    { srcQuery: "Susan and Cyril Apartment exterior entrance", alt: "Exterior view of apartment entrance" },
  ],
}

export default function SusanAndCyrilApartmentPage() {
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
                <Card className="bg-gray-50 border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-black">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-700">
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
