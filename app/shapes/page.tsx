"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ParallaxSection from '@/components/parallax-section'
import AnimatedElement from '@/components/animated-element'

const products = [
  {
    id: 'lady-chair',
    name: 'Lady Chair',
    slug: 'shapes-lady-chair',
    description: 'The Lady Chair is entitled this way thanks to its feminine body-inspired shape, smooth finishings and round edges. Crafted in light natural walnut wood with dark rims, this piece is more than just a beautiful chair – it is a piece of art that finds its place around any home, regardless of the interior design of the house. The "so good looking that I can hang it up a wall" chair.',
    images: [
      '/STUDIO BY CRISTIAN/shapes/LadyChair-3.jpg.jpeg',
      '/STUDIO BY CRISTIAN/shapes/LadyChair-4.jpg.jpeg'
    ]
  },
  {
    id: 'out-table',
    name: 'Out Table',
    slug: 'shapes-out-table',
    description: 'The Out Table is our most famous and requested table design to date. Its oval-rounded shape is supported by long, sleek legs and features a slight dent in the middle on top. It is made of walnut wood with a beautiful matte finish, and it stands out by its elegant and unique mixture of polished wood nuances and shades. The "I love it so much that I don\'t want to put anything on it" dinner table.',
    images: [
      '/STUDIO BY CRISTIAN/shapes/OutTable-1.jpg.jpeg',
      '/STUDIO BY CRISTIAN/shapes/OutTable-4.jpg.jpeg'
    ]
  },
  {
    id: 'ufo-chair',
    name: 'UFO Chair',
    slug: 'shapes-ufo-chair',
    description: 'The UFO Chair is part of the same collection of walnut wood designs that are uniquely crafted in our atelier. It features a thick, solid round shape held up by three rounded legs that support it. The playful shades of walnut render this chair a marvellous aesthetic and elegance. The "where did you get this" chair.',
    images: [
      '/STUDIO BY CRISTIAN/shapes/UFOchair-1.jpg.jpeg',
      '/STUDIO BY CRISTIAN/shapes/UFOchair-2.jpg.jpeg'
    ]
  },
  {
    id: 'spiderkit',
    name: 'SPIDERkit',
    slug: '#',
    description: 'The "uber cool and in the same time stylish and incredibly comfortable" table and chairs.',
    images: [
      '/STUDIO BY CRISTIAN/shapes/Spiderkit-08.jpg.jpeg',
      '/STUDIO BY CRISTIAN/shapes/Spiderkit-10.jpg.jpeg'
    ]
  },
  {
    id: 'thinktable',
    name: 'THINKtable',
    slug: '#',
    description: 'The "It made me fall in love with my work again" table.',
    images: [
      '/STUDIO BY CRISTIAN/shapes/Thinktable-3.jpg.jpeg',
      '/STUDIO BY CRISTIAN/shapes/Thinktable-4.jpg.jpeg'
    ]
  },
  {
    id: 'fishchair',
    name: 'FISHchair',
    slug: '#',
    description: 'The "Way to classy to hang your clothes on it" chair.',
    images: [
      '/STUDIO BY CRISTIAN/shapes/Fishchair-3.jpg.jpeg',
      '/STUDIO BY CRISTIAN/shapes/Fishchair-4.jpg.jpeg'
    ]
  }
]

export default function ShapesPage() {
  return (
    <div className="bg-white text-black">
      
      <ParallaxSection
        imageUrl="/STUDIO BY CRISTIAN/shapes/LadyChair-3.jpg.jpeg"
        imageAlt="Shapes Collection Hero Image"
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">FURNITURE PRODUCTION</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">SHAPES</h1>
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

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our three signature pieces were custom-made and designed exclusively for our selective clients and later added to our portfolio.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Products Sections - Alternating Layout */}
      {products.map((product, index) => {
        const isEven = index % 2 === 0
        const bgColor = isEven ? "bg-white" : "bg-gray-50"
        
        return (
          <section key={product.id} className={`py-16 lg:py-20 ${bgColor} text-black`}>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AnimatedElement animationType="fadeInUp">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Text Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                      {product.slug !== '#' ? (
                        <Link 
                          href={`/${product.slug}`}
                          className="hover:text-gray-600 transition-colors duration-300"
                        >
                          {product.name}
                        </Link>
                      ) : (
                        product.name
                      )}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* View More Button for linked products */}
                    {product.slug !== '#' && (
                      <div className="pt-4">
                        <Button
                          asChild
                          variant="outline"
                          className="bg-transparent text-black border-black hover:bg-black hover:text-white"
                        >
                          <Link href={`/${product.slug}`}>
                            View Gallery
                          </Link>
                        </Button>
                      </div>
                    )}
                    
                    {/* Decorative Element */}
                    <div className="pt-6">
                      <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Images */}
                  <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {product.images.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100"
                        >
                          <Image
                            src={image}
                            alt={`${product.name} ${imgIndex + 1}`}
                            width={400}
                            height={400}
                            className="w-full h-auto object-cover"
                            style={{ aspectRatio: '1/1' }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </AnimatedElement>
            </div>
          </section>
        )
      })}

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
