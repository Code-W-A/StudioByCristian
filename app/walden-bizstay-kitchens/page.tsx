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
  '/STUDIO BY CRISTIAN/walden-bizstay-kitchens/Walden-BizStay-Kitchens-Banner-scaled.jpg.jpeg',
  '/STUDIO BY CRISTIAN/walden-bizstay-kitchens/Walden-BizStay-Kitchens-1-scaled.jpg.jpeg',
  '/STUDIO BY CRISTIAN/walden-bizstay-kitchens/Walden-BizStay-Kitchens-2-scaled.jpg.jpeg',
  '/STUDIO BY CRISTIAN/walden-bizstay-kitchens/Walden-BizStay-Kitchens-3-scaled.jpg.jpeg',
  '/STUDIO BY CRISTIAN/walden-bizstay-kitchens/Walden-BizStay-Kitchens-4-scaled.jpg.jpeg',
  '/STUDIO BY CRISTIAN/walden-bizstay-kitchens/Walden-BizStay-Kitchens-5-scaled.jpg.jpeg',
];

export default function WaldenBizStayKitchensPage() {
  return (
    <div className="bg-white text-black">
      
      <ParallaxSection
        imageUrl={images[0]}
        imageAlt="Walden BizStay Kitchens Hero Image"
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">FURNITURE PRODUCTION</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">WALDEN BIZSTAY KITCHENS</h1>
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

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-gray-700">
                For this space, we had the challenge to produce 30 brand new custom furniture pieces with main materials such as MDF with HPL and Compact HPL. We created simple and modern custom kitchens together with our carpenters, that are fully functional, connected and equipped and with LED light. The main focus and differentiating touch were the wall tiles that were delivered from Italy- their look and design give the space a very modern and chic touch. Another happy customer.
              </p>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Location:</span> The Hague
                </div>
                <div>
                  <span className="font-semibold">Status:</span> Finished
                </div>
                <div>
                  <span className="font-semibold">Service:</span> Furniture Production
                </div>
                <div>
                  <span className="font-semibold">Sectors:</span> Private Residential
                </div>
                <div>
                  <span className="font-semibold">Area:</span> 30 Kitchens
                </div>
                <div>
                  <span className="font-semibold">Client:</span> BizStay BV
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3]"
            >
              <Image
                src={images[1]}
                alt="Walden BizStay Kitchen 1"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Kitchen Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={images[2]}
                alt="Walden BizStay Kitchen 2"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={images[3]}
                alt="Walden BizStay Kitchen 3"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] md:col-span-2 lg:col-span-1">
              <Image
                src={images[4]}
                alt="Walden BizStay Kitchen 4"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Additional Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={images[5]}
                alt="Walden BizStay Kitchen 5"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="100vw"
              />
            </div>
          </motion.div>
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
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
