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
  title: "DERODELOPER Luxury Store",
  category: "Furniture Production",
  heroImage: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-Banner-scaled.jpg.jpeg",
  description: "Derodeloper is a multi-brand luxury store situated on the main shopping street in the centre of The Hague; hence the aim of this project was to master a beautifully designed shop that will highlight its high – end merchandise. We chose to showcase a mixture of glass displays, display boxes compositions in various colors – like white, lacquered black and bright yellow, tapestry boxes inside the composition, large mirrors to reflect the products from various angles, and wall – high shelves with integrated led lights.",
  additionalText: "The accessories are hidden behind glass shelves, to offer a sense of privacy and preciousness while still allowing for a 360 – view, all meanwhile the sneakers are placed on single shelf racks to highlight their designs. The marble details that the reception desk is composed of and that acts as the entire floor of the store are also a large part of the shop's elegant and refined look. As main element we have the Marble look and feed from Italgraniti Group.",
  location: "The Hague",
  status: "Finished",
  service: "Furniture Production",
  sectors: "Luxury Retail",
  area: "320m²",
  client: "Primavera Holding BV",
  images: [
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-1-scaled.jpg.jpeg", alt: "DERODELOPER - Store interior overview" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-2-scaled.jpg.jpeg", alt: "DERODELOPER - Display cases" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-3-scaled.jpg.jpeg", alt: "DERODELOPER - Glass shelving" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-4-scaled.jpg.jpeg", alt: "DERODELOPER - Reception area" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-5-scaled.jpg.jpeg", alt: "DERODELOPER - Shoe displays" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-6-scaled.jpg.jpeg", alt: "DERODELOPER - Lighting design" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-7-scaled.jpg.jpeg", alt: "DERODELOPER - Marble details" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-8.jpg.jpeg", alt: "DERODELOPER - Store layout" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-9-scaled.jpg.jpeg", alt: "DERODELOPER - Product presentation" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-10.jpg.jpeg", alt: "DERODELOPER - Interior design" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-11-scaled.jpg.jpeg", alt: "DERODELOPER - Custom displays" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-12-scaled.jpg.jpeg", alt: "DERODELOPER - Staircase design" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-13.jpg.jpeg", alt: "DERODELOPER - Wall shelving" },
    { src: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-14.jpg.jpeg", alt: "DERODELOPER - Final design" },
  ]
}

export default function DerodeloperLuxuryStorePage() {
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
                  DERODELOPER Luxury Store
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
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={projectDetails.images[0].src}
                    alt={projectDetails.images[0].alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </div>

            </div>

            {/* Gallery Images */}
            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.images.slice(1, 3).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '4/3' }}
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
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 lg:col-start-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={projectDetails.images[3].src}
                    alt={projectDetails.images[3].alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </div>

            </div>

            {/* Gallery Images - Featured + Grid */}
            <div className="space-y-8">
              {/* Single large featured image */}
              <AnimatedElement animationType="fadeInUp" delay={0.2}>
                <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                  <Image
                    src={projectDetails.images[4].src}
                    alt={projectDetails.images[4].alt}
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </AnimatedElement>

              {/* Three images in a row */}
              <div className="grid md:grid-cols-3 gap-6">
                {projectDetails.images.slice(5, 8).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '1/1' }}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Two large images side by side */}
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.images.slice(8, 10).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Four images in a grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectDetails.images.slice(10, 14).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '1/1' }}
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
                <h4 className="font-semibold text-black mb-1">​​Status:</h4>
                <p className="text-sm text-gray-600">{projectDetails.status}</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">​​Service:</h4>
                <p className="text-sm text-gray-600">{projectDetails.service}</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">​​Sectors:</h4>
                <p className="text-sm text-gray-600">{projectDetails.sectors}</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">​​Area:</h4>
                <p className="text-sm text-gray-600">{projectDetails.area}</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">​​Client:</h4>
                <p className="text-sm text-gray-600">{projectDetails.client}</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Contact</h2>
          </AnimatedElement>
          <ContactForm />
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
