"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

const projectDetails = {
  title: "Private Home for Kristian & Claudia",
  category: "Furniture Production",
  heroImage: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-Banner-scaled.jpg.jpeg",
  description: "Our customers of this project wished for a cozy home filled with a lot of natural light and a little splash of color here and there, while still keeping the design as clean and minimal as possible. Hence, they were very pleased with the uplifting pastel tones which settled in each room alongside playful furniture pieces that were designed for maximum usage of storage space and display but also as room dividers.",
  additionalText: "Each room was put to best use according to the owners' wishes, passions and needs- from two office rooms that act as working, reading, relaxing, hobby, sleep and storage rooms, to the living area that opens up into the dining space separated through a TV – scene, to the two bedrooms with private bathrooms. Every detail of furniture was custom – made to perfectly fit each big, small or hidden space, and to act as a beautiful piece of interior design that matches the overall Scandinavian aesthetic and vibe of the apartment.",
  location: "Bucharest",
  status: "Finished",
  service: "Interior Architecture, Furniture Production, Turn Key Management",
  sectors: "Residential",
  area: "185 m²",
  client: "Kristian & Claudia Pedersen",
  images: [
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-1-1-scaled.jpg.jpeg", alt: "Private Home - Living area overview" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-2-1-scaled.jpg.jpeg", alt: "Private Home - Dining area" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-3-1-scaled.jpg.jpeg", alt: "Private Home - Custom furniture" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-4-1-scaled.jpg.jpeg", alt: "Private Home - Kitchen design" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-5-1.jpg.jpeg", alt: "Private Home - Bedroom design" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-6-1.jpg.jpeg", alt: "Private Home - Storage solutions" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-7.jpg.jpeg", alt: "Private Home - Office space" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-8-1.jpg.jpeg", alt: "Private Home - TV area" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-9-1.jpg.jpeg", alt: "Private Home - Room dividers" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-10-scaled.jpg.jpeg", alt: "Private Home - Natural light" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-11.jpg.jpeg", alt: "Private Home - Scandinavian style" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-13-scaled.jpg.jpeg", alt: "Private Home - Pastel tones" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-14-scaled.jpg.jpeg", alt: "Private Home - Bathroom design" },
    { src: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-15.jpg.jpeg", alt: "Private Home - Complete design" },
  ]
}

export default function PrivateHomeKristianClaudiaPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl={projectDetails.heroImage}
        imageAlt={projectDetails.title + " Hero Image"}
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{projectDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
        </AnimatedElement>
      </ParallaxSection>

      {/* Back Button */}
      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Section 1: Text Left, Image Right */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Private Home for Kristian & Claudia
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.description}
                </p>
                
                {/* Decorative Element */}
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 aspect-[4/3]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={projectDetails.images[0].src}
                    alt={projectDetails.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </div>

            </div>

            {/* Gallery Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectDetails.images.slice(1, 3).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Section 2: Text Right, Image Left */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:grid-flow-col-dense">
              
              {/* Text Content */}
              <div className="space-y-6 lg:col-start-2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.additionalText}
                </p>
                
                {/* Decorative Element */}
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 aspect-[4/3] lg:col-start-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={projectDetails.images[3].src}
                    alt={projectDetails.images[3].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

            </div>

            {/* Gallery Images - Featured + Grid */}
            <div className="space-y-8">
              {/* Single large featured image */}
              <AnimatedElement animationType="fadeInUp" delay={0.2}>
                <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100 aspect-video">
                  <Image
                    src={projectDetails.images[4].src}
                    alt={projectDetails.images[4].alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="100vw"
                  />
                </div>
              </AnimatedElement>

              {/* Three images in a row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectDetails.images.slice(5, 8).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-square">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Two large images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectDetails.images.slice(8, 10).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Four images in a grid - 2 per row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projectDetails.images.slice(10, 14).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-square">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-black mb-1">Location:</h4>
                <p className="text-sm text-gray-600">{projectDetails.location}</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Status:</h4>
                <p className="text-sm text-gray-600">{projectDetails.status}</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Service:</h4>
                <p className="text-sm text-gray-600">{projectDetails.service}</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Sectors:</h4>
                <p className="text-sm text-gray-600">{projectDetails.sectors}</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Area:</h4>
                <p className="text-sm text-gray-600">{projectDetails.area}</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Client:</h4>
                <p className="text-sm text-gray-600">{projectDetails.client}</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
                starting to dream, we'd love to hear from you. Reach out to discuss your project, and let's explore the
                possibilities together.
              </p>
              <div className="space-y-4 text-gray-700">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Headquarters:</strong> The Netherlands<br />
                    
                  </p>
                  <div className="flex space-x-4">
                    <Link href="https://ro.linkedin.com/company/studiobycristian" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="https://www.instagram.com/studiobycristian/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
                  </div>
                  <Link 
                    href="mailto:office@studiobycristian.com" 
                    className="block text-gray-700 hover:text-black transition-colors"
                  >
                    office@studiobycristian.com
                  </Link>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight">
              <motion.div
                className="bg-black text-white p-8 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Corner accents */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  Would you like to discuss a project?
                </h2>
                
                {/* Decorative line */}
                <div className="w-24 h-0.5 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-8" />
                
                <ContactForm />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Back Button Bottom */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
