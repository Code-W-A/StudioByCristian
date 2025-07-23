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
  title: "Mauritskade Apartments",
  category: "Furniture Production",
  heroImage: "/mauritskade-apartments/Mauritskade-Appartments-4-2-scaled.jpg.jpeg",
  description: "The custom-made pieces our team designed for this project consist of modern, top-quality materials. We tended to the fully optimized kitchens and coffee corners with matte finishes in a neutral tone, 10 mm thick compact HPL countertop and backsplash with Calacatta marble decor, accessorized with Gola handles. Our carpenters also fully manufactured the dark and elegant bed headboards, the built-in wardrobes in the dressing rooms and the modern wall-mounted desks that act as working spaces.",
  projectInfo: {
    location: "The Hague",
    status: "Finished",
    service: "Furniture Production",
    sectors: "Residential",
    area: "15 Apartments",
    client: "BizStay BV"
  },
  images: [
    { src: "/mauritskade-apartments/Mauritskade-Appartments-2-2-scaled.jpg.jpeg", alt: "Mauritskade Apartments - Modern kitchen design" },
    { src: "/mauritskade-apartments/Mauritskade-Appartments-4-2-scaled.jpg.jpeg", alt: "Mauritskade Apartments - Living space detail" },
    { src: "/mauritskade-apartments/Mauritskade-Appartments-5-scaled.jpg.jpeg", alt: "Mauritskade Apartments - Bedroom with headboard" },
    { src: "/mauritskade-apartments/Mauritskade-Appartments-7-scaled.jpg.jpeg", alt: "Mauritskade Apartments - Bathroom design" },
    { src: "/mauritskade-apartments/Mauritskade-Appartments-10-scaled.jpg.jpeg", alt: "Mauritskade Apartments - Kitchen and dining area" },
    { src: "/mauritskade-apartments/Mauritskade-Appartments-25-1-scaled.jpg.jpeg", alt: "Mauritskade Apartments - Built-in wardrobe" },
    { src: "/mauritskade-apartments/Mauritskade-Appartments-29-1-scaled.jpg.jpeg", alt: "Mauritskade Apartments - Wall-mounted desk" },
    // { src: "/mauritskade-apartments/Mauritskade-Appartments-33-1-scaled.jpg.jpeg", alt: "Mauritskade Apartments - Coffee corner" },
    { src: "/mauritskade-apartments/Mauritskade-Appartments-41-1-scaled.jpg.jpeg", alt: "Mauritskade Apartments - Dressing room detail" },
    { src: "/mauritskade-apartments/Mauritskade-Appartments-52-1.jpg.jpeg", alt: "Mauritskade Apartments - Complete living space" },
    { src: "/mauritskade-apartments/Mauritskade-Appartments-7-2.jpg.jpeg", alt: "Mauritskade Apartments - Interior overview" }
  ]
}


// http://localhost:3000/_next/image?url=%2Fmauritskade-apartments%2FMauritskade-Appartments-33-1-scaled.jpg.jpeg&w=1200&q=75

export default function MauritskadeApartmentsPage() {
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
            <Button asChild variant="outline" size="lg" className="bg-white text-black border-gray-300 hover:bg-gray-100">
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />Back to Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Project Information Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Project Info - Left */}
            <AnimatedElement animationType="fadeInLeft" className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Project Details
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-black">Location:</p>
                    <p>{projectDetails.projectInfo.location}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Status:</p>
                    <p>{projectDetails.projectInfo.status}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Service:</p>
                    <p>{projectDetails.projectInfo.service}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Sectors:</p>
                    <p>{projectDetails.projectInfo.sectors}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Area:</p>
                    <p>{projectDetails.projectInfo.area}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Client:</p>
                    <p>{projectDetails.projectInfo.client}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Image - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
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

      {/* Description Section - Image Left, Text Right */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - Left */}
            <AnimatedElement animationType="fadeInLeft">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src={projectDetails.images[1].src}
                  alt={projectDetails.images[1].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </AnimatedElement>

            {/* Text Content - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2} className="space-y-6">
              <h3 className="text-3xl font-bold tracking-tight text-black">
                Modern Custom Furniture
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {projectDetails.description}
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
            <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Project Gallery
            </h3>
          </AnimatedElement>

          {/* Featured large image */}
          <div className="mb-12">
            <AnimatedElement animationType="fadeInUp">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.images[2].src}
                  alt={projectDetails.images[2].alt}
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </AnimatedElement>
          </div>

          {/* Grid of images */}
          <div className="space-y-8">
            {/* Two columns */}
            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.images.slice(3, 5).map((image, index) => (
                <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                  <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
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

            {/* Three columns */}
            <div className="grid md:grid-cols-3 gap-6">
              {projectDetails.images.slice(5, 8).map((image, index) => (
                <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                  <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
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
            {projectDetails.images.slice(8).map((image, index) => (
              <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
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
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Interested in custom furniture solutions for your residential or commercial project? 
                Let's discuss how we can bring your vision to life.
              </p>
              <div className="space-y-4 text-gray-700">
                <p><strong>Headquarters:</strong> The Netherlands</p>
                <div className="flex space-x-4">
                  <Link href="https://ro.linkedin.com/company/studiobycristian" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                  <Link href="https://www.instagram.com/studiobycristian/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
                </div>
                <Link href="mailto:office@studiobycristian.com" className="block text-gray-700 hover:text-black transition-colors">
                  office@studiobycristian.com
                </Link>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInRight">
              <motion.div className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                viewport={{ once: true, amount: 0.3 }}>
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
    </div>
  )
}
