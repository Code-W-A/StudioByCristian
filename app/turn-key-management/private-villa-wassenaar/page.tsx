"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

const projectDetails = {
  title: "Private Villa Wassenaar",
  category: "Turn Key Management",
  heroImageQuery: "Private Villa Wassenaar before renovation interior",
  beforeText:
    "This private, old-fashioned Dutch house planning the metaholistic nuances of the space, was completely renovated and turned into a modern and functional home. The custom-made furniture pieces are designed to be both functional and aesthetically pleasing, with a focus on clean lines and simple forms.",
  beforeImages: [
    {
      srcQuery: "Private Villa Wassenaar kitchen before renovation",
      alt: "Kitchen before renovation",
    },
  ],
  designText:
    "Envisioning the highest potential for this space, we have created a design that is both functional and aesthetically pleasing. The custom-made furniture pieces are designed to be both functional and aesthetically pleasing, with a focus on clean lines and simple forms. The built-in furnishings are designed and carefully manufactured by our team of designers and carpenters. The main accent of the interior design was added by the unique custom-made sliding oak wood separation doors from floor to ceiling. The first floor contains 1 spacious master bedroom and 1 bathroom, and the ground floor contains a living room with kitchen, toilet, study, master bedroom, kids bedroom, all of modern design with high quality materials and unique details. The attic also has been transformed into a guest bedroom. The cellar can turn into a pleasant hobby room or an extra storage space. The garden has been designed to be a natural extension of the house. The custom-made furniture pieces complete the lines, rhythms and contrasts of the space, contouring the TV area, extending itself visually from the dining space all the way to the bedroom.",
  designImages: [
    {
      srcQuery: "Private Villa Wassenaar modern hallway with wooden stairs",
      alt: "Modern hallway with wooden stairs",
    },
    {
      srcQuery: "Private Villa Wassenaar staircase detail",
      alt: "Staircase detail",
    },
    {
      srcQuery: "Private Villa Wassenaar kitchen detail with wine fridge",
      alt: "Kitchen detail with wine fridge",
    },
    {
      srcQuery: "Private Villa Wassenaar modern kitchen island",
      alt: "Modern kitchen island",
    },
  ],
  afterText:
    "All the details were set in place to create the perfect atmosphere for a family with kids. The ripping of this lovely property was a challenge, but together with the client, landscape architect and constructor we have made a perfect team. Smart timeless and futures gave this private residence a special new identity. The custom-made furniture pieces complete the lines, rhythms and contrasts of the space.",
  afterImages: [
    {
      srcQuery: "Private Villa Wassenaar renovated exterior with garden",
      alt: "Renovated exterior with garden",
    },
    {
      srcQuery: "Private Villa Wassenaar renovated living room",
      alt: "Renovated living room",
    },
  ],
  heroAfterImageQuery: "Private Villa Wassenaar renovated kitchen and living area",
}

export default function PrivateVillaWassenaarPage() {
  const [currentHeroImage, setCurrentHeroImage] = useState(projectDetails.heroImageQuery)
  const [heroLabel, setHeroLabel] = useState("Before")

  const toggleHeroImage = () => {
    if (currentHeroImage === projectDetails.heroImageQuery) {
      setCurrentHeroImage(projectDetails.heroAfterImageQuery)
      setHeroLabel("Real Picture After")
    } else {
      setCurrentHeroImage(projectDetails.heroImageQuery)
      setHeroLabel("Before")
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
            <div className="grid grid-cols-1 gap-4">
              {projectDetails.beforeImages.map((image, index) => (
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

          {/* Design Section */}
          <AnimatedElement animationType="fadeInUp" className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">Design</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line lg:col-span-1">
                {projectDetails.designText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-1">
                {projectDetails.designImages.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square w-full overflow-hidden rounded-lg shadow-lg ${index === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <Image
                      src={`/placeholder.svg?width=600&height=600&query=${encodeURIComponent(image.srcQuery)}`}
                      alt={image.alt}
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* After Section */}
          <AnimatedElement animationType="fadeInUp">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">After</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{projectDetails.afterText}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectDetails.afterImages.map((image, index) => (
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
        </div>
      </section>

      {/* Recent Work & Contact Teaser - Copied from other project pages, adjust if needed */}
      <section className="py-12 lg:py-16 bg-gray-100 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedElement animationType="fadeInLeft">
              <h3 className="text-2xl font-semibold mb-4">Recent Work</h3>
              <p className="text-gray-700 mb-4">Some of our most recent work.</p>
              {/* Placeholder for recent work links/images */}
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
