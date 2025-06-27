"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

const galleryDetails = {
  title: "Restaurants & Hotels",
  category: "Work Archive",
  heroImage: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-01.jpg.jpeg",
  images: [
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-02.jpg.jpeg", alt: "Restaurant & Hotel Design 1" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-03.jpg.jpeg", alt: "Restaurant & Hotel Design 2" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-04.jpg.jpeg", alt: "Restaurant & Hotel Design 3" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-05.jpg.jpeg", alt: "Restaurant & Hotel Design 4" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-06.jpg.jpeg", alt: "Restaurant & Hotel Design 5" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-07.jpg.jpeg", alt: "Restaurant & Hotel Design 6" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-08.jpg.jpeg", alt: "Restaurant & Hotel Design 7" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-10.jpg.jpeg", alt: "Restaurant & Hotel Design 8" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-11.jpg.jpeg", alt: "Restaurant & Hotel Design 9" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-12.jpg.jpeg", alt: "Restaurant & Hotel Design 10" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-13.jpg.jpeg", alt: "Restaurant & Hotel Design 11" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-14.jpg.jpeg", alt: "Restaurant & Hotel Design 12" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-15.jpg.jpeg", alt: "Restaurant & Hotel Design 13" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-16.jpg.jpeg", alt: "Restaurant & Hotel Design 14" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-17.jpg.jpeg", alt: "Restaurant & Hotel Design 15" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-18.jpg.jpeg", alt: "Restaurant & Hotel Design 16" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-19.jpg.jpeg", alt: "Restaurant & Hotel Design 17" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-20.jpg.jpeg", alt: "Restaurant & Hotel Design 18" },
    { src: "/STUDIO BY CRISTIAN PAGINI RAMASE/work-archive-restaurants-hotels/Restaurants-Hotels-21.jpg.jpeg", alt: "Restaurant & Hotel Design 19" },
  ]
}

export default function RestaurantsHotelsPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl={galleryDetails.heroImage}
        imageAlt={galleryDetails.title + " Hero Image"}
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{galleryDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{galleryDetails.title}</h1>
        </AnimatedElement>
      </ParallaxSection>

      {/* Back Button */}
      <section className="pt-12 pb-6 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/work-archive">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Work Archive
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Featured Large Image */}
            <AnimatedElement animationType="fadeInUp">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src={galleryDetails.images[0].src}
                  alt={galleryDetails.images[0].alt}
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </AnimatedElement>

            {/* Three images in a row */}
            <div className="grid md:grid-cols-3 gap-6">
              {galleryDetails.images.slice(1, 4).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
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

            {/* Two large images side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {galleryDetails.images.slice(4, 6).map((image, index) => (
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

            {/* Single wide image */}
            <AnimatedElement animationType="fadeInUp" delay={0.3}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src={galleryDetails.images[6].src}
                  alt={galleryDetails.images[6].alt}
                  width={1400}
                  height={700}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </AnimatedElement>

            {/* Four square images in grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryDetails.images.slice(7, 11).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
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

            {/* Three images in a row */}
            <div className="grid md:grid-cols-3 gap-6">
              {galleryDetails.images.slice(11, 14).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
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

            {/* Two images side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {galleryDetails.images.slice(14, 16).map((image, index) => (
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

            {/* Single wide image */}  
            <AnimatedElement animationType="fadeInUp" delay={0.3}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src={galleryDetails.images[16].src}
                  alt={galleryDetails.images[16].alt}
                  width={1400}
                  height={700}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </AnimatedElement>

            {/* Final two images side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {galleryDetails.images.slice(17, 19).map((image, index) => (
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

          </div>
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
                    <strong>Headquarters:</strong> The Netherlands & Romania<br />
                    <strong>Working Point:</strong> Austria
                  </p>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
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

      {/* Back Button Bottom */}
      <section className="pt-6 pb-12 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/work-archive">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Work Archive
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
