"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ParallaxSection from '@/components/parallax-section'
import AnimatedElement from '@/components/animated-element'

const projectDetails = {
  sections: [
    {
      content: "A minimal, elegant and modern residential space realised in neutral and warm wood tones mixed together with strong, dark accents and diverse contrasts. This high-end penthouse features an open space living area that also hosts the dining room and the kitchen, all spaces being synced and harmonised with the use of proportional accents and volumes. The main character of the space is the uniquely designed wooden wall contouring the TV area, extending itself visually from the dining space all the way up to the kitchen.",
      mainImage: "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-Banner-scaled.jpg.jpeg",
      galleryImages: [
        "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-1-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-2-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-3-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-4.jpg.jpeg"
      ]
    },
    {
      content: "The kitchen is visual gravity centre of the penthouse: made in black matt decor mixed together with light oak wood on one side of the storage space and a beautiful marble countertop resting on the kitchen island. Due to its position and height, this penthouse enjoys beautiful natural light that enriches the tones, rhythms and contrasts of the space.",
      mainImage: "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-5.jpg.jpeg",
      galleryImages: [
        "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-1-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-2-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-3-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-4.jpg.jpeg"
      ]
    }
  ]
}

export default function PrivatePenthousePage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-Banner-scaled.jpg.jpeg"
        imageAlt="Private Penthouse Hero Image"
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">Design Projects</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">Private Penthouse</h1>
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

      {/* Section 1 - Text Left, Image Right */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.sections[0].content}
                </p>
                
                {/* Decorative Element */}
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={projectDetails.sections[0].mainImage}
                    alt="Private Penthouse main image"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </div>

            </div>

            {/* Gallery Images - Two large + Two small */}
            <div className="space-y-8">
              {/* Two large images side by side */}
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.sections[0].galleryImages.slice(0, 2).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Private Penthouse gallery image ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Two smaller images side by side */}
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.sections[0].galleryImages.slice(2, 4).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Private Penthouse gallery image ${index + 3}`}
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
          </AnimatedElement>
        </div>
      </section>

      {/* Section 2 - Text Right, Image Left */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:grid-flow-col-dense">
              
              {/* Text Content */}
              <div className="space-y-6 lg:col-start-2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.sections[1].content}
                </p>
                
                {/* Decorative Element */}
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100 lg:col-start-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={projectDetails.sections[1].mainImage}
                    alt="Private Penthouse section 2 main image"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </div>

            </div>

            {/* Gallery Images - Complex layout */}
            <div className="space-y-8">
              {/* One large image */}
              <AnimatedElement animationType="fadeInUp">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 max-w-4xl mx-auto">
                  <Image
                    src={projectDetails.sections[1].galleryImages[0]}
                    alt="Private Penthouse large gallery image"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </AnimatedElement>

              {/* Three images in a row */}
              <div className="grid md:grid-cols-3 gap-6">
                {projectDetails.sections[1].galleryImages.slice(1, 4).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Private Penthouse gallery image ${index + 2}`}
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
