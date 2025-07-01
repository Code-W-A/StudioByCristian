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
    image: "/work-archive-page/Luxury-Stores-01-768x576.jpg.jpeg",
    link: "/work-archive/luxury-stores",
  },
  {
    title: "Private Homes",
    image: "/work-archive-page/Private-Homes-18-768x576.jpg.jpeg",
    link: "/work-archive/private-homes",
  },
  {
    title: "Restaurants & Hotels",
    image: "/work-archive-page/Restaurants-Hotels-01-768x576.jpg.jpeg",
    link: "/work-archive/restaurants-hotels",
  },
]

// Text on image overlay will be white
const overlayItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}
// Text in card content (white card) will be black
const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function WorkArchivePage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/home-page/Credentials-scaled.jpg.jpeg"
        imageAlt="Work Archive Hero"
        minHeight="50vh"
        strength={0.2}
        overlayClassName="bg-black/50"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Work Archive</h1>
        </AnimatedElement>
      </ParallaxSection>

      {/* Intro Section - Text under hero */}
      <section className="py-10 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <p className="text-lg md:text-xl text-gray-700 text-left">
              These are some of our past projects, built over more than 17 years of experience, collaboration, and dedication. This archive showcases work developed together with our trusted partners, particularly Vinzenz Patschg in Austria. Over the years, we've contributed to a wide range of projects in the hospitality, retail, and residential sectors, working with both private and corporate clients. Whether through design, custom furniture production, or full project management, we've always focused on delivering thoughtful, high-quality solutions tailored to each space. Thank you to everyone who has been part of this journey — for the trust, the challenges, and the shared accomplishments. We look forward to continuing this work and shaping the spaces of tomorrow.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Categories Section - White Theme for section, White Cards */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {archiveCategories.map((category, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.05}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hover: {
                      scale: 1.03,
                      boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <Link
                    href={category.link}
                    className="group block relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-500"
                  >
                    {/* Background Image */}
                    <div className="w-full overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={600}
                        height={400}
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    {/* Text Container with Animated Border */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="relative">
                        {/* Animated Border */}
                        <div className="absolute inset-0 border-2 border-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-white/60" />
                        {/* Backdrop Blur Container */}
                        <div className="relative backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                            {category.title}
                          </h3>
                          {/* Animated Line */}
                          <div className="h-0.5 w-0 bg-white/60 group-hover:w-full transition-all duration-700 ease-out" />
                          {/* Explore Text */}
                          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            <span className="text-white/80 text-sm font-medium flex items-center">
                              Explore Collection
                              <motion.span
                                className="ml-2 inline-block"
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              >
                                →
                              </motion.span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                  </Link>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
