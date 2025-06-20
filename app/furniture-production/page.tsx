"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import { motion, type Variants } from "framer-motion"
import ParallaxSection from "@/components/parallax-section"

const projects = [
  {
    name: "Suriname Apartments Residential 2",
    imageQuery: "Suriname Apartments Residential 2 interior",
    link: "/suriname-apartments-residential-2-furniture",
  },
  {
    name: "Susan and Cyril Apartment",
    imageQuery: "Susan and Cyril Apartment living room",
    link: "/susan-and-cyril-apartment",
  },
  {
    name: "DERODELOPER Luxury Store",
    imageQuery: "DEBOEDELOPER Luxury Store retail space",
    link: "/derodeloper-luxury-store-furniture",
  },
  {
    name: "Private Home for Kristian & Claudia",
    imageQuery: "Private Home for Kristian & Claudia modern interior",
    link: "/private-home-for-kristian-and-claudia",
  },
  {
    name: "Walden BizStay Kitchens",
    imageQuery: "Walden BizStay Kitchens design",
    link: "/walden-bizstay-kitchens",
  },
  {
    name: "Private Home for Dennis & Mabel",
    imageQuery: "Private Home for Dennis & Mabel interior design",
    link: "/private-home-for-dennis-mabel",
  },
  {
    name: "Private House Wassenaar",
    imageQuery: "Private House Wassenaar exterior or interior",
    link: "/private-house-wassenaar", // Updated link
  },
  {
    name: "Amsterdam Amsteldijk Double Apartments",
    imageQuery: "Amsterdam Amsteldijk Double Apartments living space",
    link: "/amsterdam-amsteldijk-double-apartments",
  },
  {
    name: "OBA Amsterdam Library", // Updated name
    imageQuery: "OBA Amsterdam Library interior",
    link: "/oba-amsterdam-library", // Updated link
  },
  {
    name: "Chi Cafe",
    imageQuery: "Chi Cafe interior design",
    link: "/chi-cafe", // Updated link
  },
  {
    name: "Shapes",
    imageQuery: "Designer wooden stool product named Shapes",
    link: "/shapes", // Updated link to the new overview page
  },
  {
    name: "Suriname Apartments Residential 1",
    imageQuery: "Suriname Apartments modern kitchen living area",
    link: "/suriname-apartments-residential-1-furniture",
  },
  {
    name: "Mauritskade Apartments",
    imageQuery: "Mauritskade Apartments kitchen furniture",
    link: "/mauritskade-apartments",
  },
]

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, color: "#000000" } },
}

export default function FurnitureProductionPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=700"
        imageAlt="Furniture Production Hero"
        minHeight="50vh"
        strength={0.25}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-lg font-medium tracking-wider uppercase text-gray-200">Our Portfolio</p>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">Furniture Production</h1>
        </AnimatedElement>
      </ParallaxSection>

      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white text-black">
        <div className="mb-12 flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
          <AnimatedElement animationType="fadeInLeft" className="md:w-2/3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Furniture Production</h2>
          </AnimatedElement>
          <AnimatedElement animationType="fadeInRight" className="mt-6 md:mt-0 md:w-1/3 md:pl-8">
            <Image
              src="/placeholder.svg?width=400&height=300"
              alt="Furniture detail"
              width={400}
              height={300}
              className="rounded-lg object-cover shadow-lg"
            />
          </AnimatedElement>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-100 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Projects</h2>
            <p className="mt-4 text-lg text-gray-700">Discover our crafted furniture pieces and interior solutions.</p>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((project, index) => (
                <AnimatedElement key={project.name} animationType="scaleIn" delay={index * 0.05} staggerChildren={0.15}>
                  <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white text-black border-gray-300">
                    <CardHeader className="p-0 flex-shrink-0">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?width=600&height=400&query=${encodeURIComponent(project.imageQuery)}`}
                          alt={project.name}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <motion.div variants={itemVariants}>
                        <CardTitle className="text-xl font-semibold text-black">{project.name}</CardTitle>
                      </motion.div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <motion.div variants={itemVariants}>
                        <Link
                          href={project.link}
                          className="text-sm font-medium text-black hover:text-gray-700 flex items-center"
                        >
                          View Project <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </AnimatedElement>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
