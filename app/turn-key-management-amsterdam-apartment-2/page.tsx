"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"
import { useState, useRef } from "react"

const projectDetails = {
  title: "Amsterdam Apartment 2",
  category: "Turn Key Management",
  heroImage: "/turn-key-management-amsterdam-apartment-2/Amsterdam-2-After-Banner-scaled.jpg.jpeg",
  beforeAfterComparisons: [
    {
      before: "/turn-key-management-amsterdam-apartment-2/Amsterdam-2-Before-Banner-scaled.jpg.jpeg",
      after: "/turn-key-management-amsterdam-apartment-2/Amsterdam-2-After-Banner-scaled.jpg.jpeg",
      alt: "Amsterdam apartment transformation"
    }
  ],
  beforeSection: {
    title: "Before",
    description: "This Home was ready for a new life. The renovation focused on rethinking & optimizing the existing elements of the home. All the previous finishing had to go, making way for wall repairs, plumbing interventions and electrical updates. Here is a look of the interior before the remodel.",
    images: [
      { src: "/turn-key-management-amsterdam-apartment-2/Amsterdam-2-1-1.jpg.jpeg", alt: "Before renovation - Main area" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsterdam-2-2.jpg.jpeg", alt: "Before renovation - Kitchen area" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsterdam-2-3.jpg.jpeg", alt: "Before renovation - Living space" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsterdam-2-4-1.jpg.jpeg", alt: "Before renovation - Interior view" },
    ]
  },
  inProgressSection: {
    title: "In Progress",
    description: "This Home was ready for a new life. Extending the roof for making a brand new kitchen space. We had to demolish parts of the existing roof in order to build a brand new kitchen and give more space to the house.",
    images: [
      { src: "/turn-key-management-amsterdam-apartment-2/IMG_7358-1.jpeg", alt: "Construction in progress - Roof extension" },
      { src: "/turn-key-management-amsterdam-apartment-2/IMG_7361.jpeg", alt: "Construction in progress - Kitchen area" },
      { src: "/turn-key-management-amsterdam-apartment-2/IMG_7362.jpeg", alt: "Construction in progress - Interior work" },
      { src: "/turn-key-management-amsterdam-apartment-2/IMG_7363.jpeg", alt: "Construction in progress - Renovation" },
    ]
  },
  afterSection: {
    title: "After",
    description: "We managed to create more space in this lovely apartment by extending two main walls from the roof. The dinning floor was made higher, to give a nice view over the Amstel Canal. Neutral colors and a complete successful renovation.",
    subtitle: "More space in a small space",
    images: [
      { src: "/turn-key-management-amsterdam-apartment-2/Amsteldijk-Duplex-Appartments-1-1-scaled.jpg.jpeg", alt: "After renovation - Main living area" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsteldijk-Duplex-Appartments-2-1-scaled.jpg.jpeg", alt: "After renovation - Kitchen" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsteldijk-Duplex-Appartments-3-scaled.jpg.jpeg", alt: "After renovation - Dining area" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsteldijk-Duplex-Appartments-05-1-scaled.jpg.jpeg", alt: "After renovation - Interior detail" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsteldijk-Duplex-Appartments-06-scaled.jpg.jpeg", alt: "After renovation - Living space" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsteldijk-Duplex-Appartments-07-scaled.jpg.jpeg", alt: "After renovation - Kitchen detail" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsteldijk-Duplex-Appartments-08-1-scaled.jpg.jpeg", alt: "After renovation - Bedroom" },
      { src: "/turn-key-management-amsterdam-apartment-2/Amsteldijk-Duplex-Appartments-09-scaled.jpg.jpeg", alt: "After renovation - Final result" },
    ]
  }
}

// Before/After Comparison Component
function BeforeAfterComparison({ beforeSrc, afterSrc, alt }: { beforeSrc: string; afterSrc: string; alt: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setSliderPosition(50)
  }

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden rounded-xl shadow-2xl cursor-crosshair group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={afterSrc}
          alt={`After - ${alt}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
        />
      </div>

      <div 
        className="absolute inset-0 overflow-hidden transition-all duration-300 ease-out"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={`Before - ${alt}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
        />
      </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-300 ease-out"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">
        After
      </div>

      {!isHovering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg text-black font-medium">
            Hover to compare
          </div>
        </div>
      )}
    </div>
  )
}

export default function AmsterdamApartment2Page() {
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
      <section className="pt-12 pb-6 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/turn-key-management">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Turn Key Management
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Interactive Before/After Comparison Section */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Real Picture Before & After
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hover over the image below to see the dramatic transformation
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <div className="max-w-5xl mx-auto">
              <BeforeAfterComparison
                beforeSrc={projectDetails.beforeAfterComparisons[0].before}
                afterSrc={projectDetails.beforeAfterComparisons[0].after}
                alt={projectDetails.beforeAfterComparisons[0].alt}
              />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Before Section */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black" id="before-section">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.beforeSection.images[0].src}
                  alt={projectDetails.beforeSection.images[0].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Before
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.beforeSection.description}
                </p>
                <Button asChild className="bg-black text-white hover:bg-gray-800">
                  <Link href="#before-gallery">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedElement>

          <div className="mt-16" id="before-gallery">
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.beforeSection.images.slice(1, 3).map((image, index) => (
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

              <AnimatedElement animationType="fadeInUp" delay={0.3}>
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  <Image
                    src={projectDetails.beforeSection.images[3].src}
                    alt={projectDetails.beforeSection.images[3].alt}
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* In Progress Section */}
      <section className="py-12 lg:py-16 bg-white text-black" id="in-progress-section">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  In Progress
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.inProgressSection.description}
                </p>
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 lg:order-2">
                <Image
                  src={projectDetails.inProgressSection.images[0].src}
                  alt={projectDetails.inProgressSection.images[0].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
          </AnimatedElement>

          <div className="mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              {projectDetails.inProgressSection.images.slice(1).map((image, index) => (
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
          </div>
        </div>
      </section>

      {/* After Section */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black" id="after-section">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.afterSection.images[0].src}
                  alt={projectDetails.afterSection.images[0].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  After
                </h2>
                <h3 className="text-xl font-semibold text-gray-800">
                  The house's footprint has remained faithful to the original
                </h3>
                <h4 className="text-lg font-medium text-gray-700">
                  {projectDetails.afterSection.subtitle}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.afterSection.description}
                </p>
              </div>
            </div>
          </AnimatedElement>

          <div className="mt-16">
            <div className="space-y-12">
              <AnimatedElement animationType="fadeInUp" delay={0.1}>
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  <Image
                    src={projectDetails.afterSection.images[1].src}
                    alt={projectDetails.afterSection.images[1].alt}
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </AnimatedElement>

              <div className="grid md:grid-cols-3 gap-6">
                {projectDetails.afterSection.images.slice(2, 5).map((image, index) => (
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

              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.afterSection.images.slice(5, 7).map((image, index) => (
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

              {projectDetails.afterSection.images[7] && (
                <AnimatedElement animationType="fadeInUp" delay={0.4}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src={projectDetails.afterSection.images[7].src}
                      alt={projectDetails.afterSection.images[7].alt}
                      width={1200}
                      height={700}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '16/9' }}
                    />
                  </div>
                </AnimatedElement>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Recent Work
            </h2>
            <p className="text-gray-600 mb-8">Some of our most recent work</p>
          </AnimatedElement>

          <div className="space-y-16">
            <AnimatedElement animationType="fadeInUp">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Link href="/concept-design" className="group block">
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src="/design-page/By-Cristian-2.jpg.jpeg"
                      alt="Design Projects"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-black">Design Projects</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Innovative concepts that push the boundaries of design. We create spaces that inspire and transform the way you live and work.
                  </p>
                  <Link 
                    href="/concept-design" 
                    className="inline-flex items-center text-black hover:text-gray-700 font-medium transition-colors duration-300"
                  >
                    Explore Design Projects →
                  </Link>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 lg:order-1">
                  <h3 className="text-2xl font-bold text-black">Furniture Production</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Exquisite, custom-made furniture that defines your space. Our master craftsmen bring your vision to life with precision and artistry.
                  </p>
                  <Link 
                    href="/furniture-production" 
                    className="inline-flex items-center text-black hover:text-gray-700 font-medium transition-colors duration-300"
                  >
                    Explore Furniture Production →
                  </Link>
                </div>
                <Link href="/furniture-production" className="group block lg:order-2">
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src="/furniture-production-page/www.studiobycristian.com-1750525148492/Furniture-Production-Category-Image-scaled.jpg.jpeg"
                      alt="Furniture Production"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </div>
            </AnimatedElement>
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
              <Link href="/turn-key-management">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Turn Key Management
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 