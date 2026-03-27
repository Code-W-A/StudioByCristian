"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"

const projectDetails = {
  title: "Dutch Village Concept",
  category: "Design Projects",
  heroImage: "/dutch-village-concept/Dutch-Village-Concept-Banner-scaled.jpg.jpeg",
  description: [
    // Main description text
    "With dedication to the Scandinavian design lovers, who thrive inside a light filled, open space, minimalist house. The client wished to envision the clean volumes and sharp lines of Scandinavian Design embedded in this region. The merging of strong shapes, natural materials and greenery promote a sense of peace and well-being, contributing to a healthy lifestyle. This is what the Dutch Village stands out with: a modern and minimalistic approach in design, meeting every need, using quality materials and encouraging outdoor-time by means of its landscaping.",
    
    // Second paragraph
    "The neighbourhood consists of a number of 37 homes and a common playground specially designed to nurture children's interest in the outdoors."
  ],
  // First 6 images for dynamic layout
  gallery: [
    { src: "/dutch-village-concept/Dutch-Village-Concept-01-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 1" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-02-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 2" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-03-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 3" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-04-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 4" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-05-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 5" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-06-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 6" },
  ],
  // Remaining images for masonry and slider
  sliderImages: [
    { src: "/dutch-village-concept/Dutch-Village-Concept-07-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 7" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-08-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 8" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-09-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 9" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-10-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 10" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-11.jpg.jpeg", alt: "Dutch Village Concept - View 11" },
    // { src: "/dutch-village-concept/Dutch-Village-Concept-11-1.jpg.jpeg", alt: "Dutch Village Concept - View 11-1" },
    // { src: "/dutch-village-concept/Dutch-Village-Concept-11-2.jpg.jpeg", alt: "Dutch Village Concept - View 11-2" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-12-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 12" },
    // { src: "/dutch-village-concept/By-Cristian-Dutch.Village_Ansamble_Top-1.jpg.jpeg", alt: "Dutch Village Concept - Ensemble Top View" },
  ]
}

export default function DutchVillageConceptPage() {
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

      {/* Dynamic Content Layout */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* 1. Image Left, Text Right */}
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[0].src}
                  alt={projectDetails.gallery[0].alt}
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.description[0]}
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* 2. Row with 2 images */}
          <AnimatedElement animationType="fadeInUp" delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[1].src}
                  alt={projectDetails.gallery[1].alt}
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[2].src}
                  alt={projectDetails.gallery[2].alt}
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
          </AnimatedElement>

          {/* 3. Text Left, Image Right */}
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.description[1]}
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100 lg:order-2">
                <Image
                  src={projectDetails.gallery[3].src}
                  alt={projectDetails.gallery[3].alt}
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
          </AnimatedElement>

          {/* 4. Row with 2 images */}
          <AnimatedElement animationType="fadeInUp" delay={0.3}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[4].src}
                  alt={projectDetails.gallery[4].alt}
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[5].src}
                  alt={projectDetails.gallery[5].alt}
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
          </AnimatedElement>

        </div>
      </section>

      {/* Large Dynamic Images Grid - Fewer per row, larger size */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 lg:columns-2 gap-8 space-y-8">
            {projectDetails.sliderImages.map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="scaleIn"
                delay={index * 0.1}
                className="break-inside-avoid"
              >
                <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100 mb-8">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                    style={{ display: 'block' }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

       {/* Back Button */}
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

    </div>
  )
}
