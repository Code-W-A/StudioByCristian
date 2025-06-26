"use client"
// Note: URL is /harmonie-in-holz-house/, title from image is "Harmonie in Holz Showroom Concept"
// I'll use the showroom concept title for the page content.

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

const projectDetails = {
  title: "Harmonie in Holz Showroom Concept",
  category: "Design Projects",
  heroImage: "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-Banner-scaled.jpg.jpeg",
  description: "An old barn from Austria took on a new exciting mission. It now hosts beautiful furniture pieces and offers furniture design & production services inside a newly constructed space.",
  sections: [
    {
      content: "Our mission for this project was to turn an old barn from nearby Munich into a new, modern, welcoming and fresh space that acts as a showroom and living spot for our clients. Starting from an old wooden barn, we have first created the design project backed-up by indoor and outdoor 3D renderings.",
      mainImage: "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-1-1-scaled.jpg.jpeg",
      galleryImages: [
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-2-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-2-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-3-1-scaled.jpg.jpeg"
      ]
    },
    {
      content: "After the design phase, the entire space has been remodelled to its core, so as to host furniture designed and produced at our studio. The exterior of the barn is now a combination between a typical Bavarian building featuring balconies and wooden touches, and a modern one with a minimalist facade contouring the main entrance.",
      mainImage: "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-3-scaled.jpg.jpeg",
      galleryImages: [
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-4-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-4-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-5-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-6-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-6-scaled.jpg.jpeg"
      ]
    },
    {
      content: "A floor-to-ceiling glass window that ends in big double entrance doors gives the space a modern touch that can be observed in the interior design as well. The space now acts as a furniture showroom, and includes a living space, meeting room, reception, kitchen and dining area, private meeting room and parking space.",
      mainImage: "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-7-1-scaled.jpg.jpeg",
      galleryImages: [
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-7-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-8-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-10-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-11-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-12-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-13-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-14-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-15-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/harmonie-in-holz-house/Harmonie-in-Holz-Showroom-Concept-15-scaled.jpg.jpeg"
      ]
    }
  ]
}

export default function HarmonieInHolzPage() {
  return (
    <div className="bg-white text-black">
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



      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  An old barn from Austria took on a new exciting mission. It now hosts beautiful furniture pieces and offers furniture design & production services inside a newly constructed space. {projectDetails.sections[0].content}
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
                    alt="Harmonie in Holz main image"
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
                        alt={`Harmonie in Holz gallery image ${index + 1}`}
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
                        alt={`Harmonie in Holz gallery image ${index + 3}`}
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
                    alt="Harmonie in Holz main image"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </div>

            </div>

            {/* Gallery Images - Featured + Grid */}
            <div className="space-y-8">
              {/* Single large featured image */}
              <AnimatedElement animationType="fadeInUp" delay={0.2}>
                <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100">
                  <Image
                    src={projectDetails.sections[1].galleryImages[0]}
                    alt="Harmonie in Holz featured gallery image"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </AnimatedElement>

              {/* Four images in a 2x2 grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.sections[1].galleryImages.slice(1, 5).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Harmonie in Holz gallery image ${index + 2}`}
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
          </AnimatedElement>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.sections[2].content}
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
                    src={projectDetails.sections[2].mainImage}
                    alt="Harmonie in Holz main image"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </div>

            </div>

            {/* Gallery Images - Complex dynamic layout */}
            <div className="space-y-8">
              {/* Three images in a row */}
              <div className="grid md:grid-cols-3 gap-6">
                {projectDetails.sections[2].galleryImages.slice(0, 3).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Harmonie in Holz gallery image ${index + 1}`}
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '1/1' }}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Single wide image */}
              <AnimatedElement animationType="fadeInUp" delay={0.3}>
                <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100">
                  <Image
                    src={projectDetails.sections[2].galleryImages[3]}
                    alt="Harmonie in Holz wide gallery image"
                    width={1400}
                    height={700}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </AnimatedElement>

              {/* Two large images side by side */}
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.sections[2].galleryImages.slice(4, 6).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Harmonie in Holz gallery image ${index + 5}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Final three images in a row */}
              <div className="grid md:grid-cols-3 gap-6">
                {projectDetails.sections[2].galleryImages.slice(6, 9).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Harmonie in Holz gallery image ${index + 7}`}
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

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Contact
              </h2>
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
  )
}
