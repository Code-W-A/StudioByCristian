"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import ConsentGate from "@/components/consent-gate"

// Generic transparent pixel used for blur placeholder
const genericBlurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";
// Quality for optimized images (1-100) - Reduced for better performance
const imageQuality = 85;

// Hook to detect mobile device
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Mobile-optimized image gallery component  
const MobileOptimizedGallery = ({ images, aspectRatio = '4/3' }: { images: Array<{ src: string; alt: string }>, aspectRatio?: string }) => {
  return (
    <AnimatedElement animationType="fadeInUp" rootMargin="200px">
      <div className="space-y-6">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={800} 
              height={600}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              style={{ aspectRatio }} 
              loading="lazy"
              quality={75} // Optimized for mobile
              placeholder="blur"
              blurDataURL={genericBlurDataURL}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </AnimatedElement>
  )
}

const projectDetails = {
  title: "Wassenaar Plan 2000",
  category: "Custom Furniture",
  heroImage: "/WassenaarPlan2000/Round 2/_EWP5710.jpg",
  location: "Wassenaar, The Netherlands",
  client: "Private",
  architect: "Plan2000",
  
  sections: [
    {
      title: "Project Details",
      text: "Location: Wassenaar, The Netherlands\n\nThis exclusive residential project in Wassenaar showcases a refined interior built with premium materials and meticulous attention to detail. A rich, dark-toned architectural finish was chosen throughout the interior, bringing a sophisticated calmness to the space.",
      image: "/WassenaarPlan2000/Round 2/_EWP5691.jpg",
      imageAlt: "Wassenaar Plan 2000 - Project overview"
    },
    {
      title: "Central Living Room Design",
      text: "The central living room features a bespoke wall unit that integrates shelving, storage, and a sleek built-in fireplace. The composition is finished in a tactile, concrete-textured material, with internal lighting highlighting art objects and niches. All vertical and horizontal lines align with precision, and cabinetry flows seamlessly around structural elements.",
      image: "/WassenaarPlan2000/Round 2/_EWP5700.jpg",
      imageAlt: "Wassenaar Plan 2000 - Central living room with bespoke wall unit"
    },
    {
      title: "Walk-in Wardrobe Excellence",
      text: "The walk-in wardrobe is another highlight, featuring full-height doors with minimalist vertical handles, custom open shelving, integrated LED lighting, and concealed functional compartments. The design prioritizes both visual continuity and practical storage. Matte finishes and mirror panels were incorporated to expand the spatial perception and enhance light play within the room.",
      image: "/WassenaarPlan2000/Round 2/_EWP5720.jpg",
      imageAlt: "Wassenaar Plan 2000 - Walk-in wardrobe with custom shelving"
    },
    {
      title: "Precision & Timeless Design",
      text: "From hidden mechanisms to seamless transitions and bespoke finishes, every element in this home was executed with precision and care — a true reflection of timeless design. The sophisticated approach creates an environment where function and aesthetics exist in perfect harmony.",
      image: "/WassenaarPlan2000/Round 2/_EWP5725.jpg",
      imageAlt: "Wassenaar Plan 2000 - Precision details and bespoke finishes"
    }
  ],
  
  additionalImages: [
    // { src: "/WassenaarPlan2000/Round 2/_EWP5727.jpg", alt: "Wassenaar Plan 2000 - Additional view 1" },
    { src: "/WassenaarPlan2000/Round 2/_EWP5736.jpg", alt: "Wassenaar Plan 2000 - Additional view 3" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5739.jpg", alt: "Wassenaar Plan 2000 - Additional view 4" },
    { src: "/WassenaarPlan2000/Round 2/_EWP5744.jpg", alt: "Wassenaar Plan 2000 - Additional view 5" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5751.jpg", alt: "Wassenaar Plan 2000 - Additional view 6" },
    { src: "/WassenaarPlan2000/Round 2/_EWP5732.jpg", alt: "Wassenaar Plan 2000 - Additional view 2" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5752.jpg", alt: "Wassenaar Plan 2000 - Additional view 7" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5754.jpg", alt: "Wassenaar Plan 2000 - Additional view 8" },
    { src: "/WassenaarPlan2000/Round 2/_EWP5757.jpg", alt: "Wassenaar Plan 2000 - Additional view 9" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5760.jpg", alt: "Wassenaar Plan 2000 - Additional view 10" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5763.jpg", alt: "Wassenaar Plan 2000 - Additional view 11" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5767.jpg", alt: "Wassenaar Plan 2000 - Additional view 12" },
    { src: "/WassenaarPlan2000/Round 2/_EWP5773.jpg", alt: "Wassenaar Plan 2000 - Additional view 13" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5780.jpg", alt: "Wassenaar Plan 2000 - Additional view 14" },
    { src: "/WassenaarPlan2000/Round 2/_EWP5781.jpg", alt: "Wassenaar Plan 2000 - Additional view 15" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5786.jpg", alt: "Wassenaar Plan 2000 - Additional view 16" },
    { src: "/WassenaarPlan2000/Round 2/_EWP5794.jpg", alt: "Wassenaar Plan 2000 - Additional view 17" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5798.jpg", alt: "Wassenaar Plan 2000 - Additional view 18" },
    // { src: "/WassenaarPlan2000/Round 2/_EWP5806.jpg", alt: "Wassenaar Plan 2000 - Additional view 19" },
    { src: "/WassenaarPlan2000/Round 2/_EWP5807.jpg", alt: "Wassenaar Plan 2000 - Additional view 20" },
    { src: "/WassenaarPlan2000/Round 2/_EWP5810.jpg", alt: "Wassenaar Plan 2000 - Additional view 21" }
  ]
}


// http://localhost:3000/_next/image?url=%2FWassenaarPlan2000%2FRound%202%2F_EWP5798.jpg&w=1080&q=85

export default function WassenaarPlan2000Page() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const isMobile = useIsMobile()

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false)
      }
    }

    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isVideoModalOpen])

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl={projectDetails.heroImage}
        imageAlt={projectDetails.title + " Hero Image"}
        minHeight="70vh"
        strength={isMobile ? 0 : 0.3} // Disable parallax on mobile for better performance
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{projectDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
          
          {/* Project badges in hero */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Client: Private
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Architect: Plan2000
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Location: Wassenaar, The Netherlands
            </div>
          </div>
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

      {/* Project Description Section */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Project Details */}
          <AnimatedElement animationType="fadeInUp" className="mb-16">
            <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-black mb-8">Project Details</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-black">Client:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.client}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Architect:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.architect}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-black">Location:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.location}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Category:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Premium Video Section */}
      <section className="py-16 lg:py-24 bg-gray-50 text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Project Walkthrough
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Take a virtual tour through the Wassenaar Plan 2000 project and see the complete custom furniture production process.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <div className="group relative max-w-4xl mx-auto">
              {/* Video Container with Premium Effects */}
              <div 
                className="relative bg-black rounded-3xl overflow-hidden transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-translate-y-2 cursor-pointer"
                onClick={openVideoModal}
              >
                {/* Click to Expand Indicator */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Video Embed */}
                <div className="relative aspect-video">
                  <ConsentGate compact><iframe
                    src="https://player.vimeo.com/video/1097920320?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&background=1&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    title="Wassenaar Plan 2000"
                    suppressHydrationWarning
                  /></ConsentGate>
                </div>
                
                {/* Premium Border Effect - Hidden on mobile */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-black/20 via-transparent to-black/20 md:group-hover:border-black/10 transition-all duration-500" />
                
                {/* Corner Accents - Hidden on mobile */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-r-2 border-b-2 border-white/30 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Info Card - Hidden animation on mobile */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 transform translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-black">
                          Wassenaar Plan 2000
                        </h3>
                        <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                          Custom Furniture
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Complete custom furniture production for this exclusive Wassenaar residence
                      </p>
                      <p className="text-xs text-gray-400">Click to view fullscreen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Alternating Text-Image Sections */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Alternating Text-Image Sections */}
          <div className="space-y-24">
            {projectDetails.sections.map((section, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <AnimatedElement 
                  animationType="fadeInLeft"
                  delay={0.1}
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                    {section.title}
                  </h2>
                  <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.text}
                  </div>
                </AnimatedElement>

                {/* Image */}
                <AnimatedElement 
                  animationType="fadeInRight"
                  delay={0.2}
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                                    <Image
                  src={section.image}
                  alt={section.imageAlt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  quality={isMobile ? 75 : imageQuality} // Optimized quality for mobile
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={genericBlurDataURL}
                />
                  </div>
                </AnimatedElement>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Additional Images Gallery */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {isMobile ? (
            // Mobile-optimized version with fewer intersection observers
            <MobileOptimizedGallery 
              images={projectDetails.additionalImages} 
              aspectRatio="4/3" 
            />
          ) : (
            // Desktop version with individual animations
            <div className="space-y-12">
              {/* Grid of images - improved quality */}
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.additionalImages.slice(0, 4).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={isMobile ? 75 : imageQuality} // Optimized quality for mobile
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '1/1' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={genericBlurDataURL}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Single wide image - centered and smaller */}
              <div className="flex justify-center">
                <AnimatedElement animationType="fadeInUp" delay={0.3}>
                  <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100 max-w-4xl w-full">
                    <Image
                      src={projectDetails.additionalImages[4].src}
                      alt={projectDetails.additionalImages[4].alt}
                      width={1200}
                      height={675}
                      loading="lazy"
                      quality={isMobile ? 75 : imageQuality} // Optimized quality for mobile
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '16/9' }}
                      placeholder="blur"
                      blurDataURL={genericBlurDataURL}
                    />
                  </div>
                </AnimatedElement>
              </div>

              {/* Final images - improved quality */}
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.additionalImages.slice(5).map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={900}
                        loading="lazy"
                        quality={isMobile ? 75 : imageQuality} // Optimized quality for mobile
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '4/3' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={genericBlurDataURL}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          )}
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
                Back to Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
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
                    <strong>Headquarters:</strong> The Netherlands<br />
                    
                  </p>
                  <div className="flex space-x-4">
                    <Link href="https://ro.linkedin.com/company/studiobycristian" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="https://www.instagram.com/studiobycristian/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
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
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  Would you like to discuss a project?
                </h2>
                
                {/* Decorative line */}
                <div className="w-24 h-0.5 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-8" />
                
                <ContactForm />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      
      {/* Premium Video Modal/Lightbox */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeVideoModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Info Header */}
            <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Wassenaar Plan 2000</h3>
              <p className="text-sm opacity-80">Custom Furniture</p>
            </div>

            {/* Full-size Video */}
            <ConsentGate compact><iframe
              src="https://player.vimeo.com/video/1097920320?autoplay=1&loop=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              className="w-full h-full"
              title="Wassenaar Plan 2000 - Full Video"
              suppressHydrationWarning
            /></ConsentGate>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
            <p>Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd> or click outside to close</p>
          </div>
        </div>
      )}

    </div>
  )
} 
