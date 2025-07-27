"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ParallaxSection from '@/components/parallax-section'
import AnimatedElement from '@/components/animated-element'
import ContactForm from '@/components/contact-form'

const images = [
  '/STUDIO BY CRISTIAN/shapes-ufo-chair/UFOchair-1.jpg.jpeg',
  '/STUDIO BY CRISTIAN/shapes-ufo-chair/UFOchair-2.jpg.jpeg',
  '/STUDIO BY CRISTIAN/shapes-ufo-chair/UFOchair-3.jpg.jpeg',
  '/STUDIO BY CRISTIAN/shapes-ufo-chair/UFOchair-4.jpg.jpeg',
]

export default function ShapesUfoChairPage() {
  return (
    <div className="bg-white text-black">
      
      <ParallaxSection
        imageUrl={images[0]}
        imageAlt="UFO Chair Hero Image"
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">SHAPES</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">UFO CHAIR</h1>
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
              <Link href="/shapes">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Shapes
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Gallery Section - 2+1 pattern */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            
            {/* First two images in a grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {images.slice(0, 2).map((image, index) => (
                <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100"
                  >
                    <Image
                      src={image}
                      alt={`UFO Chair ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '4/3' }}
                    />
                  </motion.div>
                </AnimatedElement>
              ))}
            </div>

            {/* Single centered image */}
            {images.slice(2, 3).length > 0 && (
              <div className="flex justify-center">
                <AnimatedElement animationType="fadeInUp" delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 max-w-4xl w-full"
                  >
                    <Image
                      src={images[2]}
                      alt="UFO Chair featured view"
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '16/9' }}
                    />
                  </motion.div>
                </AnimatedElement>
              </div>
            )}

            {/* Final image if available */}
            {images.slice(3, 4).length > 0 && (
              <div className="flex justify-center">
                <AnimatedElement animationType="fadeInUp" delay={0.3}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 max-w-4xl w-full"
                  >
                    <Image
                      src={images[3]}
                      alt="UFO Chair detail view"
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '16/9' }}
                    />
                  </motion.div>
                </AnimatedElement>
              </div>
            )}

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
              <Link href="/shapes">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Shapes
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
  );
}
