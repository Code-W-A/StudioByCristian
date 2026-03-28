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
  '/STUDIO BY CRISTIAN/wasenaar-house-concept/Wassenaar-House-Concept-1.jpg.jpeg',
  '/STUDIO BY CRISTIAN/wasenaar-house-concept/Wassenaar-House-Concept-2.jpg.jpeg',
  '/STUDIO BY CRISTIAN/wasenaar-house-concept/Wassenaar-House-Concept-07-1024x1024.jpg.jpeg',
];

export default function WasenaarHouseConceptPage() {
  return (
    <div className="bg-white text-black">
      
      <ParallaxSection
        imageUrl={images[0]}
        imageAlt="Wasenaar House Concept Hero Image"
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">DESIGN PROJECTS</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">WASENAAR HOUSE CONCEPT</h1>
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

      {/* Section 1 */}
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
                The flipping of this lovely property was a challenge we loved to undertake. Trimming down the old and bringing in the new Scandinavian high-quality finishes and fixtures gave this private residence a revitalising new life. We found the house picturing the melancholic nuances of her younger times. The patina of the classical approach was not fit anymore for a residence in the flourishing Hague. Envisioning the highest potential for this home, we studied every aspect, every functional and aesthetic detail. We've put up a mood board to inspire the future residents to see the potential their home can reach.
              </p>
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
                alt="Wasenaar House Concept Interior"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Gallery for Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={images[2]}
                alt="Wasenaar House Concept Detail"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative aspect-[4/3]"
            >
              <Image
                src={images[0]}
                alt="Wasenaar House Living Room"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <p className="text-lg leading-relaxed text-gray-700">
                Designing the interior had a focus on elegance and the visual symphony of neutral tones, black accents and the warmth of natural wood, all resting on the background of the invigorating outdoor greenery. The main intervention at the ground floor was opening up the passage from the living room to the dining area and kitchen by mounting a large glass door, which created a light filled open space surrounded by nature and benefiting from the warm sunlight at all times. The living room was fitted with warm lights, minimal built-in furniture and a cozy, elegant feel through the suggested finishes. The first floor contains 1 spacious master bedroom and 1 guest bedroom, both equipped with en-suite bathrooms. The bathrooms' design maintains the elegant key, playing with large marble slabs alongside dark accents of mosaics, minimal furniture volumes and accessories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <p className="text-lg leading-relaxed text-gray-700">
              The second floor, which initially only hosted 2 rooms, now provides 2 bedrooms, 1 shared bathroom and 1 toilet. The attic can turn into a playroom, hobby room or an extra bedroom depending on the family needs and there is also a laundry room set up.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Intervention on the outdoors aimed at inviting the owner to make use of the available space, hence we created different setups so spending as much time outside can be at hand. Dining in the garden, reading, relaxing on the bench or lounging with friends around a pit fire is all accessible. The canvas of the home still held sufficient space for the new owners to place their unique signature. All the actions were set in motion to create the perfect scenery for the future owners. The interventions were restorations, repairs and optimisations of the unseen aspects of the home, all which were covered by the modern light grey paint and warm natural wood floor. Outdoor landscaping, the kitchen, the bathrooms and built-in wardrobes were all provided for the comfort of the new owners, but the canvas of the home had enough space for them to also place their own unique signature.
            </p>
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
              <Link href="/design">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
} 