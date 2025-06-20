"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"

const luxuryStoreImages = [
  { srcQuery: "high-end fashion boutique interior with mannequins", alt: "Luxury Fashion Store 1" },
  { srcQuery: "elegant watch and jewelry store display cases", alt: "Luxury Jewelry Store 1" },
  { srcQuery: "modern luxury retail store with minimalist design", alt: "Luxury Retail Store 1" },
  { srcQuery: "spacious luxury department store interior", alt: "Luxury Department Store 1" },
  { srcQuery: "luxury shoe store with artistic display", alt: "Luxury Shoe Store 1" },
  { srcQuery: "designer handbag store with bright lighting", alt: "Luxury Handbag Store 1" },
  { srcQuery: "men's luxury suiting store interior", alt: "Luxury Men's Store 1" },
  { srcQuery: "luxury store entrance with grand design", alt: "Luxury Store Entrance 1" },
  { srcQuery: "cosmetics section in a luxury department store", alt: "Luxury Cosmetics Section 1" },
  { srcQuery: "luxury accessories display in a boutique", alt: "Luxury Accessories Display 1" },
  { srcQuery: "brightly lit luxury store with clothing racks", alt: "Luxury Clothing Store 1" },
  { srcQuery: "VIP section in a luxury retail store", alt: "Luxury VIP Section 1" },
]

export default function LuxuryStoresPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=600"
        imageAlt="Luxury Stores Hero"
        minHeight="40vh"
        strength={0.2}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Luxury Stores</h1>
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
            {luxuryStoreImages.map((image, index) => (
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
