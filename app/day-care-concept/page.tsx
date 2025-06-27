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
  title: "Day Care Concept",
  category: "Design Projects",
  heroImage: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-Banner-scaled.jpg.jpeg",
  description: "This is a concept created for potential clients in The Netherlands, who were looking to start a visually stimulating, modern, yet very functional and safe space for children aged 0-4 that acts as a daycare service.",
  images: [
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-07-1-scaled.jpg.jpeg",
      alt: "Day Care Concept - Play area with natural oak furniture"
    },
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-07-scaled.jpg.jpeg",
      alt: "Day Care Concept - Play space design"
    },
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-08-1-scaled.jpg.jpeg",
      alt: "Day Care Concept - Oak furniture with animal-shaped chairs"
    },
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-08-scaled.jpg.jpeg",
      alt: "Day Care Concept - Furniture arrangement"
    },
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-09-1-scaled.jpg.jpeg",
      alt: "Day Care Concept - Lighting system with cloud shapes"
    },
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-10-1-scaled.jpg.jpeg",
      alt: "Day Care Concept - Play zones and activity areas"
    },
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-10-scaled.jpg.jpeg",
      alt: "Day Care Concept - Activity zone design"
    },
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-11-1-scaled.jpg.jpeg",
      alt: "Day Care Concept - Interior design overview"
    },
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-11-scaled.jpg.jpeg",
      alt: "Day Care Concept - Interior design view"
    },
    {
      src: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-12-scaled.jpg.jpeg",
      alt: "Day Care Concept - Design showcase"
    }
  ],
  sections: [
    {
      content: "The purpose was creating a visually stimulating environment in which children can joyously go through the daily activities offered by a day care service. Playing and learning go better in an interior crafted with natural oak and soft pastel colors.",
      mainImage: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-07-1-scaled.jpg.jpeg",
      galleryImages: [
        "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-07-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-08-1-scaled.jpg.jpeg"
      ]
    },
    {
      content: "The oak wood furniture and accessories can be found as miniature tables, animal shaped chairs, dressing cupboards, slides, and gym accessories, as well as crafted on the walls and continuing up to the ceiling, offering the space a very in-sync geometry and a pleasant aesthetic, with the occasional uplifting colour accent.",
      mainImage: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-08-scaled.jpg.jpeg",
      galleryImages: [
        "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-09-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-10-1-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-10-scaled.jpg.jpeg"
      ]
    },
    {
      content: "These features are enhanced by a natural and warm lighting system that emerges from cloud shapes, ceiling parts or hanging light bulbs.",
      mainImage: "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-11-1-scaled.jpg.jpeg",
      galleryImages: [
        "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-11-scaled.jpg.jpeg",
        "/STUDIO BY CRISTIAN/day-care-concept/Day-Care-Concept-12-scaled.jpg.jpeg"
      ]
    }
  ]
}

export default function DayCarePage() {
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
              <Link href="/concept-design">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {projectDetails.description}
              </p>
            </div>
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
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.sections[0].content}
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
                    src={projectDetails.sections[0].mainImage}
                    alt="Day Care Concept main image"
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
              {projectDetails.sections[0].galleryImages.map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src={image}
                      alt={`Day Care Concept gallery image ${index + 1}`}
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
                  {projectDetails.sections[1].content}
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
                    src={projectDetails.sections[1].mainImage}
                    alt="Day Care Concept main image"
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
                    src={projectDetails.sections[1].galleryImages[0]}
                    alt="Day Care Concept featured gallery image"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </AnimatedElement>

              {/* Two images in a row */}
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.sections[1].galleryImages.slice(1).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Day Care Concept gallery image ${index + 2}`}
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

      {/* Section 3: Text Left, Image Right */}
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
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={projectDetails.sections[2].mainImage}
                    alt="Day Care Concept main image"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </div>

            </div>

            {/* Gallery Images - Two images side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.sections[2].galleryImages.map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src={image}
                      alt={`Day Care Concept gallery image ${index + 1}`}
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

      {/* Contact Section */}
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
              <Link href="/concept-design">
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
