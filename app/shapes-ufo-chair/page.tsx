"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const productDetails = {
  name: "UFO chair",
  category: "Shapes",
  gallery: [
    { srcQuery: "UFO chair wooden stool front view", alt: "UFO chair front view" },
    { srcQuery: "UFO chair wooden stool top angle view", alt: "UFO chair top angle view" },
    { srcQuery: "UFO chair wooden stool side profile", alt: "UFO chair side profile" },
    { srcQuery: "UFO chair wooden stool wood grain detail", alt: "UFO chair wood grain detail" },
  ],
}

export default function UfoChairPage() {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <AnimatedElement animationType="fadeInUp" className="mb-8">
          <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
            <Link href="/#shapes-collection">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back To Shapes
            </Link>
          </Button>
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-black sm:text-5xl">{productDetails.name}</h1>
            <p className="text-lg text-gray-600">{productDetails.category}</p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {productDetails.gallery.map((image, index) => (
            <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.05}>
              <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg bg-gray-100">
                <Image
                  src={`/placeholder.svg?width=800&height=800&query=${encodeURIComponent(image.srcQuery)}`}
                  alt={image.alt}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animationType="fadeInUp" className="mt-12">
          <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
            <Link href="/#shapes-collection">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back To Shapes
            </Link>
          </Button>
        </AnimatedElement>
      </div>
    </div>
  )
}
