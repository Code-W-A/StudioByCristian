"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ParallaxSection from '@/components/parallax-section'
import AnimatedElement from '@/components/animated-element'
import ContactForm from '@/components/contact-form'

const projectDetails = {
  title: "Private Home for Dennis & Mabel",
  category: "Furniture Production", 
  heroImage: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-Banner-scaled.jpg.jpeg",
  description: "Thick furniture frames and shelves, bold and massive design pieces, strong lines and moving rhythms – these are some of the characteristics that describe this private residence project for our Dutch clients. The goal was to valorise each corner of the living, dining and working area through beautiful, yet functional furniture pieces, so as to obtain a smooth combination between leisure and work.",
  additionalText: "The modern and elegant approach to this space is enriched by the natural wood furniture decor combined with the owners' delicate and elegant elements of decor, such as glass vases, paintings, decorative flowers or fine lighting. Overall, from the living room storage wall centrepiece, TV furniture, working desk, couch separating high table, and beautiful wardrobes, each component of furniture was carefully crafted and simply designed to render the apartment a complete look.",
  location: "Netherlands",
  status: "Finished",
  service: "Furniture Production",
  sectors: "Residential",
  area: "120m²",
  client: "Dennis & Mabel",
  images: [
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-01-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Living area overview" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-02-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Dining area" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-03-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Custom furniture" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-04-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Kitchen design" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-05-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Storage solutions" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-06-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Wood details" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-07-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Interior design" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-08-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Modern furniture" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-09-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Room layout" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-10-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Design details" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-11-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Lighting design" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-12-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Wardrobe design" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-13-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Work area" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-14-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Shelving system" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-15-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Complete view" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-16-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Modern elements" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-17-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Elegant details" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-18-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Final design" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-19-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Overall aesthetic" },
    { src: "/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-20-scaled.jpg.jpeg", alt: "Private Home for Dennis & Mabel - Completed project" },
  ]
}
// http://localhost:3000/_next/image?url=%2FSTUDIO%20BY%20CRISTIAN%2Fprivate-home-for-dennis-mabel%2FPrivate-Home-for-Dennis-Mabel-02-scaled.jpg.jpeg&w=1920&q=75

// http://localhost:3000/_next/image?url=%2FSTUDIO%20BY%20CRISTIAN%2Fprivate-home-for-dennis-mabel%2FPrivate-Home-for-Dennis-Mabel-Banner-scaled.jpg.jpeg&w=1920&q=75

// Hook to detect mobile device
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Mobile-optimized image gallery component
const MobileOptimizedGallery = ({ images, aspectRatio = '4/3' }: { images: any[], aspectRatio?: string }) => {
  return (
    <AnimatedElement animationType="fadeInUp" rootMargin="200px">
      <div className="space-y-6">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={800} 
              height={600}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              style={{ aspectRatio }} 
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </AnimatedElement>
  )
}

export default function PrivateHomeForDennisMabelPage() {
  const isMobile = useIsMobile()
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/STUDIO BY CRISTIAN/private-home-for-dennis-mabel/Private-Home-for-Dennis-Mabel-Banner-scaled.jpg.jpeg"
        imageAlt="Private Home for Dennis Mabel Hero Image"
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">Furniture Production</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">Private Home for Dennis & Mabel</h1>
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

      {/* Section 1: Text Left, Image Right */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Private Home for Dennis & Mabel
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

            {/* Gallery Images - Two by Two layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
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

            {/* Gallery Images - All 2 per row */}
            {isMobile ? (
              // Mobile-optimized version with fewer intersection observers
              <MobileOptimizedGallery 
                images={projectDetails.images.slice(4)} 
                aspectRatio="4/3" 
              />
            ) : (
              // Desktop version with for loop and individual animations
              <div className="space-y-8">
                {/* All remaining images in consistent 2-column layout */}
                {(() => {
                  const remainingImages = projectDetails.images.slice(4);
                  const imageRows = [];
                  
                  for (let i = 0; i < remainingImages.length; i += 2) {
                    const rowImages = remainingImages.slice(i, i + 2);
                    imageRows.push(
                      <div key={i} className="grid md:grid-cols-2 gap-8">
                        {rowImages.map((image, index) => (
                          <AnimatedElement
                            key={i + index}
                            animationType="fadeInUp"
                            delay={(i + index) * 0.1}
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
                    );
                  }
                  
                  return imageRows;
                })()}
              </div>
            )}
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

       {/* Final Back Button */}
       <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-gray-50 text-black">
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

      {/* Contact Us Section */}
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
                <Link href="mailto:office@studiobycristian.com" className="block text-gray-700 hover:text-black transition-colors">office@studiobycristian.com</Link>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInRight">
              <motion.div className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }} viewport={{ once: true, amount: 0.3 }}>
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
