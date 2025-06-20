"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"

const restaurantsHotelsImages = [
  { srcQuery: "modern hotel lobby with red sofa and art", alt: "Hotel Lobby Red Sofa" },
  { srcQuery: "spacious restaurant dining area with warm lighting", alt: "Restaurant Dining Area Warm Lighting" },
  { srcQuery: "elegant hotel bar with plush seating", alt: "Hotel Bar Plush Seating" },
  { srcQuery: "restaurant interior with wooden tables and chairs", alt: "Restaurant Wooden Tables" },
  { srcQuery: "luxury hotel restaurant with buffet setup", alt: "Hotel Restaurant Buffet" },
  { srcQuery: "contemporary hotel lounge with unique lighting", alt: "Hotel Lounge Unique Lighting" },
  { srcQuery: "fine dining restaurant with dark ambiance", alt: "Fine Dining Dark Ambiance" },
  { srcQuery: "hotel reception area with modern design", alt: "Hotel Reception Modern Design" },
  { srcQuery: "stylish cafe interior with bar and seating", alt: "Stylish Cafe Interior" },
  { srcQuery: "hotel room with king bed and city view", alt: "Hotel Room City View" },
  { srcQuery: "restaurant bar area with colorful stools", alt: "Restaurant Bar Colorful Stools" },
  { srcQuery: "hotel lobby with high ceiling and grand staircase", alt: "Hotel Lobby Grand Staircase" },
  { srcQuery: "modern restaurant with purple accent lighting", alt: "Restaurant Purple Lighting" },
  { srcQuery: "cozy hotel suite living room", alt: "Hotel Suite Living Room" },
  { srcQuery: "outdoor restaurant seating area", alt: "Outdoor Restaurant Seating" },
]

export default function RestaurantsHotelsPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=600"
        imageAlt="Restaurants & Hotels Hero"
        minHeight="40vh"
        strength={0.2}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Restaurants & Hotels</h1>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-8">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/work-archive">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Work Archive
              </Link>
            </Button>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantsHotelsImages.map((image, index) => (
              <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.05}>
                <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src={`/placeholder.svg?width=600&height=600&query=${encodeURIComponent(image.srcQuery)}`}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </AnimatedElement>
            ))}
          </div>
          <AnimatedElement animationType="fadeInUp" className="mt-12 text-center">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/work-archive">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Work Archive
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
