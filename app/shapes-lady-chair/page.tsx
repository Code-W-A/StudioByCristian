"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const productDetails = {
  name: "LADYCHAIR",
  tagline: "Elegance and Comfort, Redefined.",
  heroImageQuery: "elegant LADYCHAIR product shot on minimalist background",
  description:
    "The LADYCHAIR is a masterpiece of modern furniture design, blending sculptural elegance with exceptional comfort. Its gracefully curved silhouette and premium materials make it a statement piece for any sophisticated interior. Designed with meticulous attention to detail, the LADYCHAIR offers a unique seating experience.",
  features: [
    "Ergonomically contoured for superior comfort.",
    "Crafted from high-quality sustainable wood.",
    "Available in a range of premium upholstery fabrics.",
    "Timeless design suitable for various decor styles.",
    "Hand-finished by master artisans.",
  ],
  specifications: {
    Dimensions: "80cm H x 65cm W x 70cm D",
    SeatHeight: "45cm",
    Materials: "Solid Oak Frame, Premium Wool Upholstery",
    Weight: "12kg",
    Warranty: "5 Years",
  },
  gallery: [
    { srcQuery: "LADYCHAIR front view detailed", alt: "LADYCHAIR front view" },
    { srcQuery: "LADYCHAIR side profile elegant", alt: "LADYCHAIR side profile" },
    { srcQuery: "LADYCHAIR close up of fabric texture", alt: "LADYCHAIR fabric detail" },
    { srcQuery: "LADYCHAIR in a modern living room setting", alt: "LADYCHAIR in a room setting" },
  ],
}

export default function LadyChairPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl={`/placeholder.svg?width=1600&height=900&query=${encodeURIComponent(productDetails.heroImageQuery)}`}
        imageAlt={productDetails.name + " Hero Image"}
        minHeight="75vh"
        strength={0.2}
        overlayClassName="bg-black/20"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl">{productDetails.name}</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="mt-4 max-w-xl text-lg text-gray-100 sm:text-xl">{productDetails.tagline}</p>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <AnimatedElement animationType="fadeInLeft">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl mb-6 lg:mb-0">
                <Image
                  src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(productDetails.gallery[0].srcQuery)}`}
                  alt={productDetails.gallery[0].alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {productDetails.gallery.slice(1, 4).map((image, index) => (
                  <div key={index} className="aspect-square w-full overflow-hidden rounded-md shadow-md">
                    <Image
                      src={`/placeholder.svg?width=300&height=300&query=${encodeURIComponent(image.srcQuery)}`}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" className="sticky top-24">
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">{productDetails.name}</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">{productDetails.description}</p>

              <Tabs defaultValue="features" className="mt-8 w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                  <TabsTrigger value="features" className="data-[state=active]:bg-black data-[state=active]:text-white">
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="specs" className="data-[state=active]:bg-black data-[state=active]:text-white">
                    Specifications
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-4 border border-gray-200 rounded-md p-6">
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {productDetails.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specs" className="mt-4 border border-gray-200 rounded-md p-6">
                  <ul className="space-y-2 text-gray-700">
                    {Object.entries(productDetails.specifications).map(([key, value]) => (
                      <li key={key}>
                        <span className="font-medium text-black">{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Request Quotation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-black border-gray-300 hover:bg-gray-100 w-full sm:w-auto"
                >
                  <Info className="mr-2 h-5 w-5" />
                  More Information
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/#shapes-collection">
                {" "}
                {/* Assuming homepage has an ID for shapes section */}
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Shapes Collection
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
