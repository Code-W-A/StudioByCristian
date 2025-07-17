"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"
import ProjectVideoShowcase from "@/components/project-video-showcase"

const projectDetails = {
  title: "Thijs Overveen",
  category: "Custom Furniture",
  heroImage: "/extra Custom Furniture/Thijs_Overveen/_EWP6066.jpg",
  images: [
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6066.jpg", alt: "Thijs Overveen - Interior view 1" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6070.jpg", alt: "Thijs Overveen - Interior view 2" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6076.jpg", alt: "Thijs Overveen - Interior view 3" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6081.jpg", alt: "Thijs Overveen - Interior view 4" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6085.jpg", alt: "Thijs Overveen - Interior view 5" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6104.jpg", alt: "Thijs Overveen - Interior view 6" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6123.jpg", alt: "Thijs Overveen - Interior view 7" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6130.jpg", alt: "Thijs Overveen - Interior view 8" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6139.jpg", alt: "Thijs Overveen - Interior view 9" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6150.jpg", alt: "Thijs Overveen - Interior view 10" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6161.jpg", alt: "Thijs Overveen - Interior view 11" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6164.jpg", alt: "Thijs Overveen - Interior view 12" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6193.jpg", alt: "Thijs Overveen - Interior view 13" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6198.jpg", alt: "Thijs Overveen - Interior view 14" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6204.jpg", alt: "Thijs Overveen - Interior view 15" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6212.jpg", alt: "Thijs Overveen - Interior view 16" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6217.jpg", alt: "Thijs Overveen - Interior view 17" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6223.jpg", alt: "Thijs Overveen - Interior view 18" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6231.jpg", alt: "Thijs Overveen - Interior view 19" },
    { src: "/extra Custom Furniture/Thijs_Overveen/_EWP6239.jpg", alt: "Thijs Overveen - Interior view 20" }
  ]
}

export default function ThijsOverveenPage() {
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
                <ArrowLeft className="mr-2 h-5 w-5" />Back to Custom Furniture
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Project Video Showcase */}
      <ProjectVideoShowcase 
        videoId="1097920033"
        title="Overveen Private Residence"
        description="Take a visual journey through this contemporary interior design project featuring custom furniture and timeless elegance"
      />

      {/* Featured Image */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
              <Image src={projectDetails.images[0].src} alt={projectDetails.images[0].alt} width={1400} height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '16/9' }} />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.images.slice(1, 3).map((image, index) => (
                <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                    <Image src={image.src} alt={image.alt} width={800} height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                  </div>
                </AnimatedElement>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projectDetails.images.slice(3, 6).map((image, index) => (
                <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                    <Image src={image.src} alt={image.alt} width={600} height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '1/1' }} />
                  </div>
                </AnimatedElement>
              ))}
            </div>
            {projectDetails.images.slice(6).map((image, index) => (
              <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                  <Image src={image.src} alt={image.alt} width={1400} height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '16/9' }} />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="py-16 lg:py-24 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content - Left */}
            <AnimatedElement animationType="fadeInLeft" className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Bespoke Interior with Technical Precision
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  This bespoke interior was created for Thijs in Overveen, The Netherlands, and designed by Martijn Elzinga from DISEL Architect. The project posed a rewarding challenge in both craftsmanship and technical precision.
                </p>
                <p>
                  The entire space was developed using oak veneer, with a strong emphasis on detail and continuity. Panels were carefully laid out with a deliberate grain orientation and an exact 2mm seam spacing, ensuring a refined and rhythmical visual language throughout the interior.
                </p>
              </div>
            </AnimatedElement>

            {/* Image - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src="/extra Custom Furniture/Thijs_Overveen/_EWP6104.jpg"
                  alt="Thijs Overveen - Oak veneer craftsmanship"
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
                  src="/extra Custom Furniture/Thijs_Overveen/_EWP6193.jpg"
                  alt="Thijs Overveen - Custom oak pivot door and integrated lighting"
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
                Timeless Living Spaces
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  The kitchen features an island and fronts clad in anti-fingerprint HPL, paired with high-performance LEGRABOX drawers from Blum. A custom-built solid oak pivot door stands as a centerpiece between zones, constructed entirely in massive oak with integrated glass panels.
                </p>
                <p>
                  Additional custom elements include a window seating area with tailored upholstery, wall-to-wall bookshelves, and integrated lighting. This project is a clear reflection of how thoughtful design and expert execution can come together to create calm, coherent, and timeless living spaces.
                </p>
              </div>
            </AnimatedElement>
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
                We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
                starting to dream, we'd love to hear from you.
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