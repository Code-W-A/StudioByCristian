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
  title: "Sudip Den Haag",
  category: "Custom Furniture",
  heroImage: "/extra Custom Furniture/Sudip_Den Haag/_EWP2334.jpg",
  description: "Custom furniture project in Den Haag featuring bespoke design and craftsmanship.",
  additionalText: "Our team specializes in creating unique furniture pieces that perfectly complement the architectural style and personal preferences of each client.",
  images: [
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2236.jpg", alt: "Sudip Den Haag - Interior view 1" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2239.jpg", alt: "Sudip Den Haag - Interior view 2" },
    
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2255.jpg", alt: "Sudip Den Haag - Interior view 4" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2242.jpg", alt: "Sudip Den Haag - Interior view 3" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2266.jpg", alt: "Sudip Den Haag - Interior view 5" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2274.jpg", alt: "Sudip Den Haag - Interior view 6" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2279.jpg", alt: "Sudip Den Haag - Interior view 7" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2287.jpg", alt: "Sudip Den Haag - Interior view 8" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2289.jpg", alt: "Sudip Den Haag - Interior view 9" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2319.jpg", alt: "Sudip Den Haag - Interior view 10" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2324.jpg", alt: "Sudip Den Haag - Interior view 11" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2330.jpg", alt: "Sudip Den Haag - Interior view 12" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2334.jpg", alt: "Sudip Den Haag - Interior view 13" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2338.jpg", alt: "Sudip Den Haag - Interior view 14" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2341.jpg", alt: "Sudip Den Haag - Interior view 15" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2353.jpg", alt: "Sudip Den Haag - Interior view 16" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2357.jpg", alt: "Sudip Den Haag - Interior view 17" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2359.jpg", alt: "Sudip Den Haag - Interior view 18" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2371.jpg", alt: "Sudip Den Haag - Interior view 19" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2381.jpg", alt: "Sudip Den Haag - Interior view 20" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2385.jpg", alt: "Sudip Den Haag - Interior view 21" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2395.jpg", alt: "Sudip Den Haag - Interior view 22" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2399.jpg", alt: "Sudip Den Haag - Interior view 23" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2402.jpg", alt: "Sudip Den Haag - Interior view 24" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2414.jpg", alt: "Sudip Den Haag - Interior view 25" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2423.jpg", alt: "Sudip Den Haag - Interior view 26" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2424.jpg", alt: "Sudip Den Haag - Interior view 27" },
    { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2433.jpg", alt: "Sudip Den Haag - Interior view 28" },
    // { src: "/extra Custom Furniture/Sudip_Den Haag/_EWP2440.jpg", alt: "Sudip Den Haag - Interior view 29" }
  ]
}


// http://localhost:3000/_next/image?url=%2Fextra%20Custom%20Furniture%2FSudip_Den%20Haag%2F_EWP2236.jpg&w=1920&q=75
// http://localhost:3000/_next/image?url=%2Fextra%20Custom%20Furniture%2FSudip_Den%20Haag%2F_EWP2239.jpg&w=1920&q=75
// http://localhost:3000/_next/image?url=%2Fextra%20Custom%20Furniture%2FSudip_Den%20Haag%2F_EWP2274.jpg&w=1920&q=75

export default function SudipDenHaagPage() {
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
          
          {/* Project badges in hero */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Client: Sudip Lahiri
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Scope: Complete Custom Cabinetry
            </div>
          </div>
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
                Back to Custom Furniture
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      

      {/* Featured Image */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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

          {/* Project Description Section */}
          <section className="py-16 lg:py-24 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content - Left */}
            <AnimatedElement animationType="fadeInLeft" className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Complete Custom Cabinetry
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  This residential project in Den Haag was a full-scope interior cabinetry assignment that showcases a modern and refined aesthetic. Every element of the furniture was tailor-made to integrate harmoniously within the space, offering both visual appeal and highly functional solutions.
                </p>
                <p>
                  The design embraces a neutral palette, with matte finishes and warm undertones. We used fingerprint-resistant HPL and premium MDF to ensure durability and a clean, timeless look.
                </p>
              </div>
            </AnimatedElement>

            {/* Image - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src="/extra Custom Furniture/Sudip_Den Haag/_EWP2334.jpg"
                  alt="Sudip Den Haag - Custom wardrobes and TV cabinetry"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </AnimatedElement>
          </div>

          {/* Second Row - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-24">
            {/* Image - Left */}
            <AnimatedElement animationType="fadeInLeft" className="lg:order-1">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src="/extra Custom Furniture/Sudip_Den Haag/_EWP2319.jpg"
                  alt="Sudip Den Haag - Home office and custom shelving"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </AnimatedElement>

            {/* Text Content - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2} className="space-y-6 lg:order-2">
              <h3 className="text-2xl font-bold tracking-tight text-black">
                Expressive Custom Craftsmanship
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Key elements include custom wardrobes and TV cabinetry with seamless fronts and recessed handles, an elegant home office corner with backlit open shelves and a concealed kitchenette with gold-toned fixtures, and creative wall detailing with vertical slatted panels.
                </p>
                <p>
                  Multi-purpose furniture, such as a mobile storage unit and display walls that subtly reflect the client's cultural and artistic identity. This project is a strong example of how bespoke craftsmanship can elevate everyday living — making each corner not just efficient, but expressive.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
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
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100 max-w-4xl w-full">
                  <Image
                    src={projectDetails.images[3].src}
                    alt={projectDetails.images[3].alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </div>
            </AnimatedElement>

            {/* Two images in a row */}
            <div className="grid md:grid-cols-2 gap-6">
              {projectDetails.images.slice(4, 6).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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

            {/* Additional single image */}
            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100 max-w-4xl w-full">
                  <Image
                    src={projectDetails.images[6].src}
                    alt={projectDetails.images[6].alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </div>
            </AnimatedElement>

            {/* Two large images side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.images.slice(7, 9).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100 max-w-4xl w-full">
                  <Image
                    src={projectDetails.images[9].src}
                    alt={projectDetails.images[9].alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </div>
            </AnimatedElement>

            {/* Two more square images */}
            <div className="grid md:grid-cols-2 gap-6">
              {projectDetails.images.slice(10, 12).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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

            {/* Additional single image */}
            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100 max-w-4xl w-full">
                  <Image
                    src={projectDetails.images[12].src}
                    alt={projectDetails.images[12].alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </div>
            </AnimatedElement>

            {/* Continue with remaining images */}
            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.images.slice(13, 15).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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

            {/* Remaining images */}
            {projectDetails.images.slice(15).map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="fadeInUp"
                delay={index * 0.1}
              >
                <div className="flex justify-center">
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100 max-w-4xl w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '16/9' }}
                    />
                  </div>
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
                Back to Custom Furniture
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