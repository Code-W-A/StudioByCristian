"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { wassenaarAsset, WASSENAAR_HERO_IMAGE } from "@/lib/wassenaar-public-assets"

/** WebP outputs from `New House/optimized` (run `node optimize-images.js` in New House). Sorted for gallery. */
const NEW_HOUSE_OPTIMIZED_WEBP = [
  "QY0A9346.webp",
  "QY0A9368.webp",
  "QY0A9373.webp",
  "QY0A9389.webp",
  "QY0A9396.webp",
  "QY0A9402.webp",
  "QY0A9408.webp",
  "QY0A9433.webp",
  "QY0A9452.webp",
  "QY0A9459.webp",
  "QY0A9495.webp",
  "QY0A9570.webp",
  "QY0A9620.webp",
  "QY0A9712.webp",
  "QY0A9717.webp",
  "QY0A9873.webp",
  "QY0A9875.webp",
  "QY0A9881.webp",
  "QY0A9891.webp",
  "QY0A9897.webp",
] as const

/** WebP outputs in `turn key wassennarr old/optimized` (sorted). */
const TURN_KEY_WASSENNARR_OLD_OPTIMIZED_WEBP = [
  "BEFORE-IMAGE.webp",
  "ByCristian-700x466.jpg.webp",
  "Private-Villa-Wassenaar-After-1-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-10-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-11-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-12-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-13-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-14-1.jpg.webp",
  "Private-Villa-Wassenaar-After-15-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-16-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-17-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-18-2-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-19-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-2-2-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-22-1.jpg.webp",
  "Private-Villa-Wassenaar-After-25-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-26-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-27-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-28-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-3-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-31-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-33-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-34-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-35-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-36-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-37-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-38-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-39-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-4-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-40-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-41-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-42-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-43-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-44-1.jpg.webp",
  "Private-Villa-Wassenaar-After-45-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-46-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-5-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-6-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-7-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-8-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-After-9-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Banner-After-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Banner-Design-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-1-1-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-10.jpg.webp",
  "Private-Villa-Wassenaar-Before-11-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-12-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-13-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-2-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-3-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-4-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-5-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-6-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-7-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-8-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Before-9-scaled.jpg.webp",
  "Private-Villa-Wassenaar-Design-01.jpg.webp",
  "Private-Villa-Wassenaar-Design-02.jpg.webp",
  "Private-Villa-Wassenaar-Design-03.jpg.webp",
  "Private-Villa-Wassenaar-Design-04.jpg.webp",
  "Private-Villa-Wassenaar-Design-05.jpg.webp",
  "Private-Villa-Wassenaar-Design-06.jpg.webp",
  "Private-Villa-Wassenaar-Design-07.jpg.webp",
  "Private-Villa-Wassenaar-Design-08.jpg.webp",
  "Private-Villa-Wassenaar-Design-09.jpg.webp",
  "Private-Villa-Wassenaar-Design-10.jpg.webp",
  "Private-Villa-Wassenaar-Design-11.jpg.webp",
  "Private-Villa-Wassenaar-Design-12.jpg.webp",
  "Private-Villa-Wassenaar-Design-13.jpg.webp",
  "Private-Villa-Wassenaar-Design-14.jpg.webp",
  "Private-Villa-Wassenaar-Design-15.jpg.webp",
  "Private-Villa-Wassenaar-Design-16.jpg.webp",
  "Private-Villa-Wassenaar-Design-17.jpg.webp",
  "Private-Villa-Wassenaar-Design-18.jpg.webp",
  "Private-Villa-Wassenaar-Design-19.jpg.webp",
  "Private-Villa-Wassenaar-Design-20.jpg.webp",
  "Second Floor & Attic.webp",
] as const

const projectDetails = {
  title: "Private Villa Wassenaar",
  category: "Interior Renovation",
  heroImage: WASSENAAR_HERO_IMAGE,
  beforeAfterComparisons: [
    {
      before: wassenaarAsset("turn key wassennarr old/optimized/BEFORE-IMAGE.webp"),
      after: wassenaarAsset("Render/optimized/AFTER-IMAGE.webp"),
      alt: "Private Villa Wassenaar transformation",
    },
  ],
  location: "Wassenaar, The Netherlands",
  status: "Finished",
  service: "Interior Renovation, Design, Before & After",
  sectors: "Private Residential",
  area: "Villa - Multiple Levels",
  client: "Private",
  
  sections: [
    {
      title: "Before",
      text: "We found the house picturing the melancholic nuances of her younger times. The patina of the classical approach was not fit anymore for a residence in the flourishing Wassenaar | The Netherlands.",
      image: wassenaarAsset("Old/optimized/IMG_1470.webp"),
      imageAlt: "Private Villa Wassenaar - Before renovation",
    },
    {
      title: "Design",
      text: "Envisioning the highest potential for this home, we studied every aspect, every functional and aesthetical detail. We've put up a mood to inspire the future residents to see the potential their home can reach. Designing the interior had a focus on elegance and the visual symphony of neutral tones, black accents and the warmth of natural wood, all resting on the background of the invigorating outdoor greenery.",
      image: wassenaarAsset("New House/optimized/QY0A9620.webp"),
      imageAlt: "Private Villa Wassenaar - Design concept",
    },
    {
      title: "Ground Floor Transformation",
      text: "The main intervention at the ground floor was opening up the passage from the living room to the dining area and kitchen by mounting a large glass door, which created a light filled open space surrounded by nature and benefiting from the warm sunlight at all times. The living room was fitted with warm lights, minimal built-in furniture and a cozy, elegant feel through the suggested finishes.",
      image: wassenaarAsset("Render/optimized/02_Deijlerweg_House_living_1.webp"),
      imageAlt: "Private Villa Wassenaar - Ground floor after renovation",
    },
    {
      title: "First Floor Bedrooms",
      text: "The first floor contains 1 spacious master bedroom and 1 guest bedroom, both equipped with en suite bathrooms. The bathrooms' design maintains the elegant key, playing with large marble slabs alongside dark accents of mosaics, minimal furniture volumes and accessories.",
      image: wassenaarAsset("Render/optimized/14_Deijlerweg_House_kids.bedroom.1.webp"),
      imageAlt: "Private Villa Wassenaar - First floor bedrooms",
    },
    {
      title: "Second Floor & Attic",
      text: "The second floor, which initially only hosted 2 rooms, now provides 2 bedrooms, 1 shared bathroom and 1 toilet. The attic can turn into a playroom, hobby room or an extra bedroom depending on the family needs and there is also a laundry room set up.",
      image: wassenaarAsset("turn key wassennarr old/optimized/Second Floor & Attic.webp"),
      imageAlt: "Private Villa Wassenaar - Second floor renovation",
    },
    {
      title: "Outdoor Intervention",
      text: "Intervention on the outdoors aimed at inviting the owner to make use of the available space and so we created different setups so spending as much time outside can be at hand. Dining in the garden, reading, relaxing on the bench or lounging with friends around a pit fire is all accessible.",
      image: wassenaarAsset("Old/optimized/IMG_1475.webp"),
      imageAlt: "Private Villa Wassenaar - Outdoor spaces",
    },
    {
      title: "After",
      text: "All the actions were set in motion to create the perfect scenery for the future owners. The interventions were restorations, repairments and optimizations of the unseen aspects of the home, all which were covered by the modern light grey paint and warm natural wood floor. Outdoor landscaping, the kitchen, the bathrooms and built-in wardrobes were all provided for the comfort of the new owners, but the canvas of the home had enough space for them to also place their own unique signature.",
      image: wassenaarAsset("New House/optimized/QY0A9897.webp"),
      imageAlt: "Private Villa Wassenaar - Final result",
    },
  ],

  additionalImages: [
    ...NEW_HOUSE_OPTIMIZED_WEBP.map((file) => ({
      src: wassenaarAsset(`New House/optimized/${file}`),
      alt: `Private Villa Wassenaar — ${file.replace(/\.webp$/i, "")}`,
    })),
    ...TURN_KEY_WASSENNARR_OLD_OPTIMIZED_WEBP.map((file) => ({
      src: wassenaarAsset(`turn key wassennarr old/optimized/${file}`),
      alt: `Private Villa Wassenaar — ${file.replace(/\.webp$/i, "")}`,
    })),
  ],
}

function WassenaarGalleryTile({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <AnimatedElement animationType="fadeInUp" delay={Math.min(index, 12) * 0.04}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setFailed(true)}
        />
      </div>
    </AnimatedElement>
  )
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

export default function PrivateVillaWassenaarPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

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
              <Link href="/interior-renovation">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Interior Renovation
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

      {/* Project Description Section */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Project Details */}
          <AnimatedElement animationType="fadeInUp" className="mt-12">
            <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-black mb-8">Project Details</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-black">Location:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.location}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Status:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.status}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Service:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.service}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-black">Sectors:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.sectors}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Area:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.area}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Client:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.client}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Alternating Text-Image Sections */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
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
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '4/3' }}
                    />
                  </div>
                </AnimatedElement>
              </div>
            ))}
          </div>
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
              Take a virtual tour through the transformed Private Villa Wassenaar and see the complete renovation process.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <div className="group relative max-w-4xl mx-auto">
              {/* Video Container with Premium Effects */}
              <div 
                className="relative bg-black rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-4xl transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-translate-y-2 cursor-pointer"
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
                  <iframe
                    src="https://player.vimeo.com/video/1100652693?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&background=1&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    title="Private Villa Wassenaar"
                  />
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
                          Private Villa Wassenaar
                        </h3>
                        <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                          Interior Renovation
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Complete transformation of a classical villa into a modern, elegant home
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

      {/* Additional Images Gallery */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Project Gallery
            </h2>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projectDetails.additionalImages.map((image, index) => (
              <WassenaarGalleryTile key={image.src} src={image.src} alt={image.alt} index={index} />
            ))}
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
              <Link href="/interior-renovation">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Interior Renovation
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
              <h3 className="text-xl font-bold mb-1">Private Villa Wassenaar</h3>
              <p className="text-sm opacity-80">Interior Renovation</p>
            </div>

            {/* Full-size Video */}
            <iframe
              src="https://player.vimeo.com/video/1100652693?autoplay=1&loop=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              className="w-full h-full"
              title="Private Villa Wassenaar - Full Video"
            />
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
