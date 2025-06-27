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
  title: "Private House Wassenaar",
  category: "Furniture Production",
  heroImage: "/wasenaar-house-concept-page/Wassenaar-House-Category.jpg.jpeg",
  description: "This private, old fashioned Dutch house was completely renovated and refurnished by our team at Studio by Cristian. Our main goal was to create custom made furniture for the entire home, which included wooden doors and the wooden terrace, all made in-house with our carpenters. The main accent of the interior design was added by the unique Carrara Marble that was delivered straight from Italy.",
  location: "Wassenaar",
  status: "Finished",
  service: "Interior Architecture, Furniture Production and Turn Key Management",
  sectors: "Private Residential",
  area: "180 m²",
  client: "Private",
  
  images: [
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-1.jpg.jpeg", alt: "Private House Wassenaar - Exterior view" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-2.jpg.jpeg", alt: "Private House Wassenaar - Living area design" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-3.jpg.jpeg", alt: "Private House Wassenaar - Interior concept" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-4-scaled.jpg.jpeg", alt: "Private House Wassenaar - Kitchen design" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-5-scaled.jpg.jpeg", alt: "Private House Wassenaar - Dining area" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-6-scaled.jpg.jpeg", alt: "Private House Wassenaar - Master bedroom" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-07.jpg.jpeg", alt: "Private House Wassenaar - Bathroom design" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-08.jpg.jpeg", alt: "Private House Wassenaar - Detail view" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-09.jpg.jpeg", alt: "Private House Wassenaar - Study room" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-10.jpg.jpeg", alt: "Private House Wassenaar - Garden view" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-11-scaled.jpg.jpeg", alt: "Private House Wassenaar - Floor plan" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-12.jpg.jpeg", alt: "Private House Wassenaar - Elevation" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-13.jpg.jpeg", alt: "Private House Wassenaar - Material details" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-14-scaled.jpg.jpeg", alt: "Private House Wassenaar - Lighting concept" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-15-scaled.jpg.jpeg", alt: "Private House Wassenaar - Furniture layout" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-16-scaled.jpg.jpeg", alt: "Private House Wassenaar - Complete design" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-17.jpg.jpeg", alt: "Private House Wassenaar - Final concept" },
  ]
}

export default function PrivateHouseWassenaarPage() {
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
      <section className="pt-12 pb-6 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Project Details */}
          <AnimatedElement animationType="fadeInUp" className="mt-12">
            <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-black mb-8">Project Details</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-black">Location:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.location}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Status:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.status}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Service:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.service}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-black">Sectors:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.sectors}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Area:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.area}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Client:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.client}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Text and Featured Image Section */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            {/* Text Content */}
            <AnimatedElement 
              animationType="fadeInLeft"
              delay={0.1}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Custom Furniture Production
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {projectDetails.description}
              </p>
            </AnimatedElement>

            {/* Featured Image */}
            <AnimatedElement 
              animationType="fadeInRight"
              delay={0.2}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src={projectDetails.images[0].src}
                  alt={projectDetails.images[0].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Image Gallery Section - Following Chi Cafe Layout */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Two large images side by side */}
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

            {/* Single large featured image */}
            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src={projectDetails.images[3].src}
                  alt={projectDetails.images[3].alt}
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </AnimatedElement>

            {/* Three images in a row */}
            <div className="grid md:grid-cols-3 gap-6">
              {projectDetails.images.slice(4, 7).map((image, index) => (
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
              {projectDetails.images.slice(7, 9).map((image, index) => (
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

            {/* Single wide image */}
            <AnimatedElement animationType="fadeInUp" delay={0.3}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src={projectDetails.images[9].src}
                  alt={projectDetails.images[9].alt}
                  width={1400}
                  height={700}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </AnimatedElement>

            {/* Three more square images */}
            <div className="grid md:grid-cols-3 gap-6">
              {projectDetails.images.slice(10, 13).map((image, index) => (
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

            {/* Final images */}
            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.images.slice(13, 15).map((image, index) => (
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

            {/* Last two images */}
            {projectDetails.images.slice(15).map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="fadeInUp"
                delay={index * 0.1}
              >
                <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </AnimatedElement>
            ))}
          </div>
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
                    <strong>Headquarters:</strong> The Netherlands & Romania<br />
                    <strong>Working Point:</strong> Austria
                  </p>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
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
                className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                <ContactForm />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Back Button Bottom */}
      <section className="pt-6 pb-12 bg-white text-black">
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
