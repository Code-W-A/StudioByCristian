"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, MapPin, Instagram, Mail } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import { motion, type Variants } from "framer-motion"
import ParallaxSection from "@/components/parallax-section"

const projects = [
  {
    title: "Private Villa Wassenaar",
    description:
      "The Ripping of this lovely property was a challenge, but together with the client, landscape architect and constructor we have made a perfect team. Smart timeless and futures gave this private residence a special new identity.",
    imageQuery: "exterior of Private Villa Wassenaar modern architecture",
    link: "/turn-key-management/private-villa-wassenaar", // Updated link
  },
  {
    title: "Amsterdam Apartment 1",
    description: "Brightness, peace of mind and comfort envelop our customers when stepping into this space.",
    imageQuery: "bright interior of Amsterdam Apartment 1",
    link: "/turn-key-management/amsterdam-apartment-1", // Updated link
  },
  {
    title: "Amsterdam Apartment 2",
    description:
      "This Amsterdam Apartment greets us with contemporary lines and unique details. The built-in furnishings are designed and carefully manufactured by our own Furniture Production department.",
    imageQuery: "modern kitchen in Amsterdam Apartment 2",
    link: "/turn-key-management/amsterdam-apartment-2", // Updated link
  },
  {
    title: "Voorburg Apartment",
    description:
      "This project involved peeling off all the preexisting layers and redesigning the space with new lights making a full renovation and optimizing the space.",
    imageQuery: "renovated living space in Voorburg Apartment",
    link: "/turn-key-management/voorburg-apartment", // Updated link
  },
]

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, color: "#000000" } },
}

export default function TurnKeyManagementPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=800"
        imageAlt="Turn Key Management Hero"
        minHeight="60vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Turn Key Management</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl">
            From concept to completion, we manage every detail to bring your vision to life.
          </p>
        </AnimatedElement>
      </ParallaxSection>

      {/* Intro Section - White Theme */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Shaping Visions into Reality</h2>
              <p className="mt-6 text-lg text-gray-700">
                Shaping the client images and ambitions of our clients into the core of reality is the final, most
                challenging and also best rewarding stage of design.
              </p>
            </AnimatedElement>
            <AnimatedElement
              animationType="fadeInRight"
              className="aspect-video w-full overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                src="/placeholder.svg?width=600&height=400"
                alt="Design process"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Projects Section - White Theme for section, White Cards */}
      <section className="py-16 lg:py-24 bg-gray-100 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Turn Key Projects</h2>
            <p className="mt-4 text-lg text-gray-700">
              Explore some of our successfully managed and delivered projects.
            </p>
          </AnimatedElement>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <AnimatedElement key={index} animationType="fadeInUp" staggerChildren={0.2}>
                <Card className="overflow-hidden shadow-lg lg:grid lg:grid-cols-2 lg:items-center bg-white text-black border-gray-300">
                  <motion.div
                    variants={itemVariants}
                    className={`aspect-video w-full overflow-hidden ${index % 2 === 1 ? "lg:order-last" : ""}`}
                  >
                    <Image
                      src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(project.imageQuery)}`}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                  <div className={`p-6 lg:p-10 ${index % 2 === 1 ? "lg:order-first" : ""}`}>
                    <motion.div variants={itemVariants}>
                      <CardTitle className="text-2xl font-semibold lg:text-3xl text-black">{project.title}</CardTitle>
                    </motion.div>
                    <CardContent className="p-0 mt-4 text-gray-700">
                      <motion.p variants={itemVariants} className="mb-6">
                        {project.description}
                      </motion.p>
                      <motion.div variants={itemVariants}>
                        <Link
                          href={project.link}
                          className="inline-flex items-center text-black hover:text-gray-700 font-medium"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser Section - White Theme */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Feel free to contact us</h2>
            <p className="mt-4 text-lg text-gray-700">
              Ready to start your project or have questions? We're here to help.
            </p>
          </AnimatedElement>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <AnimatedElement animationType="fadeInUp" delay={0.1} className="flex flex-col items-center">
              <MapPin className="h-10 w-10 text-black" />
              <p className="mt-2 text-sm font-medium text-black">The Netherlands & Romania</p>
              <p className="text-xs text-gray-600">Austria</p>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInUp" delay={0.2} className="flex flex-col items-center">
              <Instagram className="h-10 w-10 text-black" />
              <a href="#" className="mt-2 text-sm font-medium text-black hover:text-gray-700">
                @studiobycristian
              </a>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInUp" delay={0.3} className="flex flex-col items-center">
              <Mail className="h-10 w-10 text-black" />
              <a
                href="mailto:office@studiobycristian.com"
                className="mt-2 text-sm font-medium text-black hover:text-gray-700"
              >
                office@studiobycristian.com
              </a>
            </AnimatedElement>
          </div>
          <AnimatedElement animationType="fadeInUp" delay={0.4}>
            <Button asChild size="lg" className="mt-10 bg-black text-white hover:bg-gray-800">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
