"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"

const productImages = [
  { srcQuery: "SPIDERkit wooden chair front view light wood", alt: "SPIDERkit Chair Front View" },
  { srcQuery: "SPIDERkit wooden chair side view light wood", alt: "SPIDERkit Chair Side View" },
  { srcQuery: "SPIDERkit wooden table top view light wood", alt: "SPIDERkit Table Top View" },
  { srcQuery: "SPIDERkit wooden table leg detail light wood", alt: "SPIDERkit Table Leg Detail" },
  { srcQuery: "SPIDERkit wooden chair back detail light wood", alt: "SPIDERkit Chair Back Detail" },
  { srcQuery: "SPIDERkit wooden table edge detail light wood", alt: "SPIDERkit Table Edge Detail" },
  { srcQuery: "SPIDERkit wooden chair seat detail light wood", alt: "SPIDERkit Chair Seat Detail" },
  { srcQuery: "SPIDERkit wooden chair and table set light wood", alt: "SPIDERkit Chair and Table Set" },
  { srcQuery: "SPIDERkit wooden chair under seat detail light wood", alt: "SPIDERkit Chair Under Seat Detail" },
  { srcQuery: "SPIDERkit wooden table and multiple chairs set light wood", alt: "SPIDERkit Table and Chairs Full Set" },
  {
    srcQuery: "SPIDERkit wooden table full top view with chairs light wood",
    alt: "SPIDERkit Table Full Top View with Chairs",
  },
]

export default function ShapesSpiderKitPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=700"
        imageAlt="SPIDER kit Hero"
        minHeight="50vh"
        strength={0.2}
        overlayClassName="bg-black/30"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">SPIDER kit</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl">
            The 'uber cool and in the same time stylish and incredibly comfortable' table and chairs.
          </p>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-8">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/shapes">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Shapes Collection
              </Link>
            </Button>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp" className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl mb-3">SPIDER kit</h2>
            <p className="text-gray-700 leading-relaxed">
              This furniture set combines unique design with exceptional comfort. The SPIDER kit features a distinctive
              table and chair ensemble, crafted from light wood, showcasing both style and robust construction. Perfect
              for contemporary dining spaces or as a statement piece.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {productImages.map((image, index) => (
              <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.05}>
                <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src={`/placeholder.svg?width=400&height=400&query=${encodeURIComponent(image.srcQuery)}`}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement animationType="fadeInUp" className="mt-12">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/shapes">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Shapes Collection
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
