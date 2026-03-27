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
  title: "Susan and Cyril Apartment",
  category: "Furniture Production",
  heroImage: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-Banner-scaled.jpg.jpeg",
  description: [
    // Main description text
    "Stylish and classy Amsterdam apartment, made with care and high quality furniture materials. We had the challenge to integrate modern materials such as Fenix and HPL with natural marble and painted MDF. The mixture between classic and modern is used here on a professional level. We went for natural marble for the kitchen and bathroom pieces. In terms of accessories, we chose BLUM and HAFELE.",
  ],
  projectInfo: {
    location: "Amsterdam",
    status: "Finished", 
    service: "Furniture Production",
    sectors: "Private",
    area: "180 square meters",
    client: "Susan and Cyril"
  },
  // First 5 images for dynamic layout
  gallery: [
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-1-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 1" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-2-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 2" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-37-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 37" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-5-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 5" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-6-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 6" },
  ],
  // Remaining images for masonry and slider
  sliderImages: [
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-8.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 8" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-9.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 9" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-10.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 10" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-11.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 11" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-15.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 15" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-18-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 18" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-19-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 19" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-20-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 20" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-27.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 27" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-31-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 31" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-33.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 33" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-34.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 34" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-36-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 36" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-38-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 38" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-39-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 39" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-40-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 40" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-43.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 43" },
    { src: "/susan-and-cyril-apartment/Susan-and-Cyril-Apartment-45-scaled.jpg.jpeg", alt: "Susan and Cyril Apartment - Interior view 45" },
  ]
}
// http://localhost:3000/_next/image?url=%2Fsusan-and-cyril-apartment%2FSusan-and-Cyril-Apartment-37-scaled.jpg.jpeg&w=1920&q=75
// http://localhost:3000/_next/image?url=%2Fsusan-and-cyril-apartment%2FSusan-and-Cyril-Apartment-3-scaled.jpg.jpeg&w=1920&q=75

export default function SusanAndCyrilApartmentPage() {
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
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Dynamic Content Layout */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* 1. Image Left, Text and Project Info Right */}
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[0].src}
                  alt={projectDetails.gallery[0].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {projectDetails.description[0]}
                  </p>
                </div>
                
                {/* Project Info */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Project Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <p><strong className="text-black">Location:</strong> <span className="text-gray-700">{projectDetails.projectInfo.location}</span></p>
                    <p><strong className="text-black">Status:</strong> <span className="text-gray-700">{projectDetails.projectInfo.status}</span></p>
                    <p><strong className="text-black">Service:</strong> <span className="text-gray-700">{projectDetails.projectInfo.service}</span></p>
                    <p><strong className="text-black">Sectors:</strong> <span className="text-gray-700">{projectDetails.projectInfo.sectors}</span></p>
                    <p><strong className="text-black">Area:</strong> <span className="text-gray-700">{projectDetails.projectInfo.area}</span></p>
                    <p><strong className="text-black">Client:</strong> <span className="text-gray-700">{projectDetails.projectInfo.client}</span></p>
                  </div>
                </div>
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
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[2].src}
                  alt={projectDetails.gallery[2].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </AnimatedElement>

          {/* 3. Row with 2 images */}
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[3].src}
                  alt={projectDetails.gallery[3].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[4].src}
                  alt={projectDetails.gallery[4].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
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
