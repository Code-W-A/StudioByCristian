"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section" // Assuming ParallaxSection is suitable

const designProjects = [
  {
    name: "Laren House Concept",
    imageQuery: "luxurious interior of Laren House Concept living room",
    link: "/laren-house-concept",
  },
  {
    name: "Mauritskade",
    imageQuery: "elegant Mauritskade apartment interior",
    link: "/mauritskade",
  },
  {
    name: "Day Care Concept",
    imageQuery: "bright and playful Day Care Concept interior",
    link: "/day-care-concept",
  },
  {
    name: "NORITECH Working House",
    imageQuery: "modern exterior of NORITECH Working House",
    link: "/noritech-working-house",
  },
  {
    name: "Chic Parisien Apartment",
    imageQuery: "stylish Chic Parisien Apartment living area",
    link: "/chic-parisien-apartment",
  },
  {
    name: "Dutch Village Concept",
    imageQuery: "charming Dutch Village Concept homes exterior",
    link: "/dutch-village-concept",
  },
  {
    name: "Walden Apartments Concept",
    imageQuery: "contemporary Walden Apartments Concept interior",
    link: "/walden-appartments-concept", // Note: existing link is /walden-appartments-concept
  },
  {
    name: "Harmonie in Holz Showroom Concept",
    imageQuery: "Harmonie in Holz Showroom with wood elements",
    link: "/harmonie-in-holz-house", // Note: existing link is /harmonie-in-holz-house
  },
  {
    name: "Wassenaar House Concept",
    imageQuery: "modern Wassenaar House Concept exterior with garden",
    link: "/wassenaar-house-concept",
  },
  {
    name: "Private Penthouse",
    imageQuery: "luxurious Private Penthouse interior design",
    link: "/private-penthouse",
  },
  {
    name: "Gradinaru Family Private Duplex House",
    imageQuery: "elegant interior of Gradinaru Family Private Duplex House",
    link: "/design/grodnoaru-family-private-duplex-house", // Placeholder link, adjust if page exists
  },
  // Add other projects if they exist and are intended for this page
  // Example: Carnegie House Concept if it should be here
  {
    name: "Carnegie House Concept",
    imageQuery: "modern interior of Carnegie House Concept",
    link: "/carnegie-house-concept",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
}

export default function DesignPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1920&height=1080"
        imageAlt="Modern Interior Design"
        strength={0.3}
        minHeight="70vh"
        overlayClassName="bg-black/40"
      >
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedElement animationType="fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Design</h1>
          </AnimatedElement>
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We design out of love. We are living optimization enthusiasts and our team&apos;s mission is bringing our
              client&apos;s desires out to light in literally the best shapes possible.
            </p>
          </AnimatedElement>
        </div>
      </ParallaxSection>

      {/* Introductory Text Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-2">
              <AnimatedElement animationType="fadeInLeft">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">DESIGN</p>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                  We have this magical opportunity to mold our surroundings into spaces and objects that enrich human
                  experience, contributing to our thriving and wellness.
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Together, let&apos;s tap into the possibilities provided by how our environment is continually
                  interacting with our bodies and perception. When the Design tool is put to good use, the surroundings
                  are sending signals in the form of visually satisfying compositions and functional spaces that invite
                  us to relax, be productive or simply explore.
                </p>
              </AnimatedElement>
            </div>
            <div className="hidden lg:block">
              <AnimatedElement animationType="fadeInRight" delay={0.2}>
                <div className="aspect-square w-full max-w-xs mx-auto lg:mx-0 overflow-hidden rounded-md shadow-lg">
                  <Image
                    src="/placeholder.svg?width=300&height=300"
                    alt="Studio by Cristian Brand Detail"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {designProjects.map((project, index) => (
              <AnimatedElement key={project.name} animationType="scaleIn" delay={index * 0.05}>
                <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
                  <Link
                    href={project.link}
                    className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?width=600&height=400&query=${encodeURIComponent(project.imageQuery)}`}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-black">{project.name}</h3>
                      {/* Optional: Add category or short description if needed later */}
                    </div>
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
