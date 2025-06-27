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
  title: "Walden Apartments Concept",
  category: "Design Projects",
  heroImage: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-Banner-scaled.jpg.jpeg",
  description: "A relaxing and grounding atmosphere with cool simple materials. The Walden Apartments Concept is a project for a rental apartment building located in the heart of The Hague. The building aims to create a welcoming space for its guests to feel comfortable and inspired throughout the duration of their either brief or extended visit. Each individual apartment is designed in an elegant and minimalist design, that aims to maximise the space and offer the comfort of a welcoming home.",
  additionalText: "Each high-end apartment from the Walden building includes an open space living area with kitchen and dining, a bedroom and an office/ working area located either in the living room or bedroom. The custom-made furniture for the project is designed and realised at our studio by our architect and carpenters, featuring plenty dark wooden accents, warm tones and pleasant contrasts.",
  images: [
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-1-1-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Interior living space" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-2-1-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Kitchen and dining area" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-3-1-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Minimalist bedroom" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-4-1-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Office working area" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-5-1-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Custom furniture details" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-6-1-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Dark wooden accents" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-7-1-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Warm tones design" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-8-1-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Pleasant contrasts" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-1-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Additional view 1" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-2-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Additional view 2" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-3-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Additional view 3" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-4-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Additional view 4" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-5-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Additional view 5" },
    { src: "/STUDIO BY CRISTIAN/walden-appartments-concept/Walden-Apartments-Concept-6-scaled.jpg.jpeg", alt: "Walden Apartments Concept - Final view" },
  ]
}

export default function WaldenApartmentsConceptPage() {
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
              <Link href="/design">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
              <Image
                src={projectDetails.images[0].src}
                alt={projectDetails.images[0].alt}
                width={1400}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* 1. Image Left, Text Right */}
            <AnimatedElement animationType="fadeInUp">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  <Image
                    src={projectDetails.images[1].src}
                    alt={projectDetails.images[1].alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                    Minimalist Design in The Hague
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {projectDetails.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>

            {/* 2. Text Left, Image Right */}
            <AnimatedElement animationType="fadeInUp" delay={0.1}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 lg:order-1">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {projectDetails.additionalText}
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 lg:order-2">
                  <Image
                    src={projectDetails.images[2].src}
                    alt={projectDetails.images[2].alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </div>
            </AnimatedElement>

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

            {/* Four square images in grid */}
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
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </div>
                </AnimatedElement>
              ))}
            </div>
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
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/design">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
