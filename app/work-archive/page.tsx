"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import { motion, type Variants } from "framer-motion"
// Add ParallaxSection to imports
import ParallaxSection from "@/components/parallax-section"

// ... (keep existing imports and constants)

const archiveCategories = [
  {
    title: "Luxury Stores",
    imageQuery: "interior of a high-end luxury retail store",
    link: "/work-archive/luxury-stores", // Updated link
  },
  {
    title: "Private Homes",
    imageQuery: "elegant and modern private home interior",
    link: "/work-archive/private-homes", // Updated link
  },
  {
    title: "Restaurants & Hotels",
    imageQuery: "stylish restaurant or hotel lobby interior",
    link: "/work-archive/restaurants-hotels", // Updated link
  },
]

// Text on image overlay will be white
const overlayItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, color: "#FFFFFF" } },
}
// Text in card content (white card) will be black
const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, color: "#000000" } },
}

export default function WorkArchivePage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=600"
        imageAlt="Work Archive Hero"
        minHeight="50vh" // Adjusted from previous py-16 lg:py-24
        strength={0.2}
        overlayClassName="bg-black/50"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Work Archive</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            These are some of our best projects from our work archive...
          </p>
        </AnimatedElement>
      </ParallaxSection>

      {/* Categories Section - White Theme for section, White Cards */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Categories</h2>
            <p className="mt-4 text-lg text-gray-700">Explore our diverse portfolio across various sectors.</p>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {archiveCategories.map((category, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.1} staggerChildren={0.15}>
                <Card className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl h-full flex flex-col bg-white text-black border-gray-300">
                  <CardHeader className="p-0 relative h-96 flex-shrink-0">
                    <Image
                      src={`/placeholder.svg?width=600&height=800&query=${encodeURIComponent(category.imageQuery)}`}
                      alt={category.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <motion.div variants={overlayItemVariants} className="absolute bottom-0 left-0 p-6">
                      <CardTitle className="text-3xl font-semibold text-white">{category.title}</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-6 bg-white flex-grow flex items-end">
                    <motion.div variants={contentItemVariants}>
                      <Link
                        href={category.link}
                        className="inline-flex items-center font-medium text-black hover:text-gray-700"
                      >
                        Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
