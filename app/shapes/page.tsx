"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const shapesProducts = [
  {
    name: "Lady Chair",
    description:
      "The Lady Chair found its way thanks to its inventive body-inspired shape, smooth finishings and unique details. Made out of solid walnut wood with dark rims, this piece is more than just a seating object - it is a statement. Suitable any place around any home, regardless of the interior design or the space. 'This chair is so good looking that I can hang it up a wall' - chair.",
    images: [
      { srcQuery: "Lady Chair elegant wooden chair front view", alt: "Lady Chair front view" },
      { srcQuery: "Lady Chair wooden chair dark rim detail", alt: "Lady Chair dark rim detail" },
    ],
    link: "/shapes-lady-chair",
  },
  {
    name: "Out Table",
    description:
      "The Out Table is our most famous and requested table design to date. Its oval-rounded shape is supported by a three-legged structure with a slight twist, giving it an organic, yet modern look. Solid wood with a beautiful matte finish, and it stands for quality and durability. Available in many different wood nuances and shades. 'This table is so beautiful I don't want to put anything on it' dinner table.",
    images: [
      { srcQuery: "Out Table oval wooden dining table", alt: "Out Table oval wooden dining table" },
      { srcQuery: "Out Table wooden dining table top view", alt: "Out Table top view" },
    ],
    link: "/shapes-out-table",
  },
  {
    name: "UFO Chair",
    description:
      "The UFO Chair is part of the same collection of unique and custom-made furniture pieces designed in our atelier. It features a thick, solid round shape, and it is made out of solid oak wood. The UFO Chair is a statement piece, that gives this chair a marvelous aesthetic and elegance. The 'Where did you get this' -chair.",
    images: [
      { srcQuery: "UFO Chair round wooden stool", alt: "UFO Chair round wooden stool" },
      { srcQuery: "UFO Chair wooden stool side view", alt: "UFO Chair side view" },
    ],
    link: "/shapes-ufo-chair",
  },
  {
    name: "SPIDERkit",
    description: "The 'uber cool and in the same time stylish and incredibly comfortable' table and chairs.",
    images: [
      { srcQuery: "SPIDERkit wooden table and chairs set", alt: "SPIDERkit table and chairs set" },
      { srcQuery: "SPIDERkit wooden chair detail", alt: "SPIDERkit chair detail" },
    ],
    link: "/shapes-spider-kit",
  },
  {
    name: "THINKtable",
    description: "The 'It made me fall in love with my work again' table.",
    images: [
      { srcQuery: "THINKable wooden desk with yellow accent", alt: "THINKable desk front view" },
      { srcQuery: "THINKable wooden desk yellow drawer detail", alt: "THINKable desk drawer detail" },
    ],
    link: "/shapes-think-table",
  },
  {
    name: "FISHchair",
    description: "The 'Way to classy to hang your clothes on it' chair.",
    images: [
      { srcQuery: "FISHchair unique wooden chair design side", alt: "FISHchair side view" },
      { srcQuery: "FISHchair wooden chair wood grain detail", alt: "FISHchair wood grain detail" },
    ],
    link: "/shapes-fish-chair",
  },
]

export default function ShapesPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=700"
        imageAlt="Shapes Collection Hero"
        minHeight="50vh"
        strength={0.2}
        overlayClassName="bg-black/30"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Shapes</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl">
            Our signature furniture pieces, custom-made and designed exclusively for our selective clients and later
            added to our portfolio.
          </p>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>

          <div className="space-y-16">
            {shapesProducts.map((product, index) => (
              <AnimatedElement key={product.name} animationType="fadeInUp" delay={index * 0.1}>
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl mb-3">
                      {product.name}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                    {product.link !== "#" && (
                      <Button
                        asChild
                        variant="outline"
                        className="bg-white text-black border-gray-300 hover:bg-gray-100"
                      >
                        <Link href={product.link}>View Product</Link>
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {product.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`aspect-square w-full overflow-hidden rounded-lg shadow-lg ${product.images.length === 1 && imgIndex === 0 ? "col-span-2" : ""}`}
                      >
                        <Image
                          src={`/placeholder.svg?width=400&height=400&query=${encodeURIComponent(image.srcQuery)}`}
                          alt={image.alt}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
