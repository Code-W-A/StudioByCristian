"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"

const privateHomesImages = [
  { srcQuery: "modern kitchen interior with dark cabinets and island", alt: "Modern Kitchen Dark Cabinets" },
  { srcQuery: "luxury bathroom with textured wall and unique lighting", alt: "Luxury Bathroom Textured Wall" },
  { srcQuery: "contemporary living room with geometric wall pattern", alt: "Contemporary Living Room Geometric Wall" },
  { srcQuery: "stylish bedroom with gold accent lighting", alt: "Stylish Bedroom Gold Accents" },
  { srcQuery: "spacious living area with fireplace and TV", alt: "Spacious Living Area Fireplace" },
  { srcQuery: "elegant bathroom with black marble and large mirror", alt: "Elegant Bathroom Black Marble" },
  { srcQuery: "modern bathroom with blue mosaic tiles and walk-in shower", alt: "Modern Bathroom Blue Mosaic" },
  { srcQuery: "bright shower room with teal tiles", alt: "Bright Shower Room Teal Tiles" },
  { srcQuery: "minimalist bathroom with green tiled shower", alt: "Minimalist Bathroom Green Shower" },
  { srcQuery: "white minimalist closet or storage area", alt: "White Minimalist Closet" },
  { srcQuery: "children's room with circular TV unit and playful decor", alt: "Children's Room Circular TV Unit" },
  { srcQuery: "bedroom with purple patterned curtains and modern furniture", alt: "Bedroom Purple Curtains" },
  { srcQuery: "sleek modern kitchen with integrated appliances", alt: "Sleek Modern Kitchen" },
  { srcQuery: "kitchen island with black countertop and wooden floor", alt: "Kitchen Island Black Countertop" },
  { srcQuery: "cozy living room with large sofa and view", alt: "Cozy Living Room Sofa" },
]

export default function PrivateHomesPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=600"
        imageAlt="Private Homes Hero"
        minHeight="40vh"
        strength={0.2}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Private Homes</h1>
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
            {privateHomesImages.map((image, index) => (
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
