"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

const projectDetails = {
  title: "Voorburg Apartment",
  category: "Turn Key Management",
  heroImageQuery: "Voorburg Apartment renovated kitchen and living area", // After state
  beforeText:
    "This Home was ready for a new life. Old charmant updates. Here is a look of the interior before renovation.",
  beforeImages: [
    {
      srcQuery: "Voorburg Apartment interior before renovation wide",
      alt: "Interior before renovation wide shot",
    },
    {
      srcQuery: "Voorburg Apartment interior during demolition",
      alt: "Interior during demolition",
    },
    {
      srcQuery: "Voorburg Apartment empty room before renovation",
      alt: "Empty room before renovation",
    },
  ],
  afterText:
    "The house's footprint has remained faithful to the original. This project involved peeling off all the preexisting layers and redesigning the space with new lights making a full renovation and optimizing the space. The custom-made furniture pieces complete the lines, rhythms and contrasts of the space, contouring the TV area, extending itself visually from the dining space all the way to the bedroom. The result is a functionally optimal layout, with modern, clean shapes and materials, that are both functional and aesthetically pleasing. The lighting is a mix of old and new, with a few pieces that are more than a century old. The custom-made furniture pieces complete the lines, rhythms and contrasts of the space.",
  afterImages: [
    {
      srcQuery: "Voorburg Apartment renovated living room with black frame door",
      alt: "Renovated living room with black frame door",
    },
    {
      srcQuery: "Voorburg Apartment renovated kitchen detail",
      alt: "Renovated kitchen detail",
    },
    {
      srcQuery: "Voorburg Apartment renovated kitchen full view",
      alt: "Renovated kitchen full view",
    },
  ],
  heroBeforeImageQuery: "Voorburg Apartment interior before renovation",
}

export default function VoorburgApartmentPage() {
  const [currentHeroImage, setCurrentHeroImage] = useState(projectDetails.heroImageQuery)
  const [heroLabel, setHeroLabel] = useState("Real Picture After") // Initial state from image

  const toggleHeroImage = () => {
    if (currentHeroImage === projectDetails.heroImageQuery) {
      setCurrentHeroImage(projectDetails.heroBeforeImageQuery)
      setHeroLabel("Before")
    } else {
      setCurrentHeroImage(projectDetails.heroImageQuery)
      setHeroLabel("Real Picture After")
    }
  }

  return (
    <div className="bg-white text-black">
      <div className="relative">
        <ParallaxSection
          imageUrl={`/placeholder.svg?width=1600&height=900&query=${encodeURIComponent(currentHeroImage)}`}
          imageAlt={projectDetails.title + " " + heroLabel}
          minHeight="70vh"
          strength={0.3}
          overlayClassName="bg-black/20"
        >
          <AnimatedElement animationType="fadeInUp" className="absolute top-8 left-8">
            <Button
              onClick={toggleHeroImage}
              variant="outline"
              className="bg-white/80 text-black hover:bg-white text-xs px-3 py-1 h-auto"
            >
              {heroLabel === "Before" ? "Show After" : "Show Before"}
            </Button>
          </AnimatedElement>
          <AnimatedElement animationType="fadeInUp">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-200">{projectDetails.category}</p>
            <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
          </AnimatedElement>
        </ParallaxSection>
      </div>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/turn-key-management">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Turn Key Management
              </Link>
            </Button>
          </AnimatedElement>

          {/* Before Section */}
          <AnimatedElement animationType="fadeInUp" className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">Before</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{projectDetails.beforeText}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectDetails.beforeImages.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-video w-full overflow-hidden rounded-lg shadow-lg ${index === 0 ? "sm:col-span-2" : ""}`}
                >
                  <Image
                    src={`/placeholder.svg?width=${index === 0 ? 1000 : 800}&height=600&query=${encodeURIComponent(image.srcQuery)}`}
                    alt={image.alt}
                    width={index === 0 ? 1000 : 800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* After Section */}
          <AnimatedElement animationType="fadeInUp">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">After</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{projectDetails.afterText}</p>
            <div className="grid grid-cols-1 gap-4">
              {projectDetails.afterImages.map((image, index) => (
                <div key={index} className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?width=1000&height=600&query=${encodeURIComponent(image.srcQuery)}`}
                    alt={image.alt}
                    width={1000}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Recent Work & Contact Teaser */}
      <section className="py-12 lg:py-16 bg-gray-100 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedElement animationType="fadeInLeft">
              <h3 className="text-2xl font-semibold mb-4">Recent Work</h3>
              <p className="text-gray-700 mb-4">Some of our most recent work.</p>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/design" className="block group">
                  <div className="aspect-video overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?width=400&height=300"
                      alt="Design Projects"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="mt-2 font-medium text-black group-hover:text-gray-700">Design Projects</p>
                </Link>
                <Link href="/furniture-production" className="block group">
                  <div className="aspect-video overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?width=400&height=300"
                      alt="Furniture Production"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="mt-2 font-medium text-black group-hover:text-gray-700">Furniture Production</p>
                </Link>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInRight" className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-700 mb-1">The Netherlands & Romania</p>
              <p className="text-gray-700 mb-1">Working Point: Austria</p>
              <p className="text-gray-700">office@studiobycristian.com</p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/turn-key-management">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Turn Key Management
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
