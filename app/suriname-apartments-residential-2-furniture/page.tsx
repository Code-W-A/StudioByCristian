"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

const projectDetails = {
  title: "Suriname Apartments Residential 2",
  category: "Furniture Production",
  heroImage: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-1-1-scaled.jpg.jpeg",
  description: "The Suriname Apartments Project has a modern, elegant vibe and aesthetic that is combined with a slight touch of glamour & a splash of industrial fusion. On top of the natural wood floors and light grey walls which set the mood of the apartments, intriguing furniture pieces bring more detail and depth to the scene. Alongside the clean – cut shapes of the MDF furnishings painted in white and grey, you can find the wood veneer decor, playing with its natural fibre and adding definition and warmth to the composition. Natural marble worktops display their splendour and rest aside natural wood surfaces for a visually satisfying contrast and a charming ambiance.",
  additionalText: "The modern and minimal style of the furniture pieces is backed up by details such as the furniture's tip – on opening systems, the passage from one space to the other marked by sliding wooden pocket doors and doors with hidden hinges. Many pieces possess integrated lights. Milled in LED light strips are always ready to surprise you with their contribution to the overall aesthetics, whether they are positioned inside de furniture to enhance visibility upon accessing, or on the outside contributing to the ambient lighting.",
  location: "The Hague | The Netherlands",
  status: "Finished",
  service: "Interior Architectura & Furniture Production",
  sectors: "Residential",
  area: "450m²",
  client: "Philippe Citroen | Lemons BV",
  materials: "OAK Veneer MDF with OAK Vanish OAK Professional MDF with RAL paint code Masive OAK Wood Carrara Marble BLUM accessories HAFELE accessories NEF Appliances Quooker",
  images: [
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-1-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Modern interior overview" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-2-scaled.jpg.jpeg", alt: "Suriname Apartments - Kitchen design" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-10-scaled.jpg.jpeg", alt: "Suriname Apartments - Living area" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-11-scaled.jpg.jpeg", alt: "Suriname Apartments - Dining area" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-13.jpg.jpeg", alt: "Suriname Apartments - Bedroom design" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-14.jpg.jpeg", alt: "Suriname Apartments - Custom wardrobe" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-15-2-scaled.jpg.jpeg", alt: "Suriname Apartments - Wood details" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-16.jpg.jpeg", alt: "Suriname Apartments - Bathroom vanity" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-17-2-2048x800.jpg.jpeg", alt: "Suriname Apartments - Kitchen island" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-18.jpg.jpeg", alt: "Suriname Apartments - Storage solutions" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-19.jpg.jpeg", alt: "Suriname Apartments - LED lighting" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-20-scaled.jpg.jpeg", alt: "Suriname Apartments - Modern finishes" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-21.jpg.jpeg", alt: "Suriname Apartments - Marble details" },
    { src: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-22-200x300.jpg.jpeg", alt: "Suriname Apartments - Complete view" },
  ]
}

export default function SurinameApartmentsRes2Page() {
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
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Furniture Production
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
                  Furniture Production
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

            {/* Gallery Images */}
            <div className="grid md:grid-cols-2 gap-8">
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

            {/* Gallery Images - Featured + Grid */}
            <div className="space-y-8">
              {/* Single large featured image */}
              <AnimatedElement animationType="fadeInUp" delay={0.2}>
                <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                  <Image
                    src={projectDetails.images[4].src}
                    alt={projectDetails.images[4].alt}
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </AnimatedElement>

              {/* Three images in a row */}
              <div className="grid md:grid-cols-3 gap-6">
                {projectDetails.images.slice(5, 8).map((image, index) => (
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
                {projectDetails.images.slice(8, 10).map((image, index) => (
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

              {/* Four images in a grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectDetails.images.slice(10, 14).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
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
            <div className="mt-8">
              <h4 className="font-semibold text-black mb-3">Main used materials:</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{projectDetails.materials}</p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Contact</h2>
          </AnimatedElement>
          <ContactForm />
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
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
