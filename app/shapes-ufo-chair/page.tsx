"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ParallaxSection from '@/components/parallax-section'
import AnimatedElement from '@/components/animated-element'

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

      {/* Gallery Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Featured Large Image */}
          <AnimatedElement animationType="fadeInUp">
            <div className="mb-16">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={images[1]}
                    alt="UFO Chair featured image"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '3/2' }}
                  />
                </motion.div>
              </div>
            </div>
          </AnimatedElement>

          {/* Gallery Grid */}
          <div className="space-y-12">
            
            {/* First Row - Two Images */}
            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="grid md:grid-cols-2 gap-8">
                {[images[0], images[2]].map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100"
                  >
                    <Image
                      src={image}
                      alt={`UFO Chair ${index === 0 ? 'front view' : 'angle view'}`}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatedElement>

            {/* Second Row - Wide Image */}
            <AnimatedElement animationType="fadeInUp" delay={0.4}>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={images[3]}
                    alt="UFO Chair wide view"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '2/1' }}
                  />
                </motion.div>
              </div>
            </AnimatedElement>

          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black">
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
    </div>
  );
}
