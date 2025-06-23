"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const projectDetails = {
  title: "Dutch Village Concept",
  category: "Design Projects",
  heroImage: "/dutch-village-concept/Dutch-Village-Concept-Banner-scaled.jpg.jpeg",
  description: [
    // Main description text
    "With dedication to the Scandinavian design lovers, who thrive inside a light filled, open space, minimalist house. The client wished to envision the clean volumes and sharp lines of Scandinavian Design embedded in this region. The merging of strong shapes, natural materials and greenery promote a sense of peace and well-being, contributing to a healthy lifestyle. This is what the Dutch Village stands out with: a modern and minimalistic approach in design, meeting every need, using quality materials and encouraging outdoor-time by means of its landscaping.",
    
    // Second paragraph
    "The neighbourhood consists of a number of 37 homes and a common playground specially designed to nurture children's interest in the outdoors."
  ],
  // First 6 images for dynamic layout
  gallery: [
    { src: "/dutch-village-concept/Dutch-Village-Concept-01-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 1" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-02-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 2" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-03-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 3" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-04-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 4" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-05-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 5" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-06-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 6" },
  ],
  // Remaining images for masonry and slider
  sliderImages: [
    { src: "/dutch-village-concept/Dutch-Village-Concept-07-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 7" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-08-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 8" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-09-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 9" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-10-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 10" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-11.jpg.jpeg", alt: "Dutch Village Concept - View 11" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-11-1.jpg.jpeg", alt: "Dutch Village Concept - View 11-1" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-11-2.jpg.jpeg", alt: "Dutch Village Concept - View 11-2" },
    { src: "/dutch-village-concept/Dutch-Village-Concept-12-scaled.jpg.jpeg", alt: "Dutch Village Concept - View 12" },
    { src: "/dutch-village-concept/By-Cristian-Dutch.Village_Ansamble_Top-1.jpg.jpeg", alt: "Dutch Village Concept - Ensemble Top View" },
  ]
}

function ImageSlider({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main slider */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-2xl">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-all duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide counter */}
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex 
                ? 'ring-2 ring-black scale-105' 
                : 'opacity-70 hover:opacity-100 hover:scale-105'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function DutchVillageConceptPage() {
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
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/design">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Dynamic Content Layout */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* 1. Image Left, Text Right */}
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.gallery[0].src}
                  alt={projectDetails.gallery[0].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.description[0]}
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* 2. Row with 2 images */}
          <AnimatedElement animationType="fadeInUp" delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.gallery[1].src}
                  alt={projectDetails.gallery[1].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.gallery[2].src}
                  alt={projectDetails.gallery[2].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </AnimatedElement>

          {/* 3. Text Left, Image Right */}
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.description[1]}
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 lg:order-2">
                <Image
                  src={projectDetails.gallery[3].src}
                  alt={projectDetails.gallery[3].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </AnimatedElement>

          {/* 4. Row with 2 images */}
          <AnimatedElement animationType="fadeInUp" delay={0.3}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.gallery[4].src}
                  alt={projectDetails.gallery[4].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image
                  src={projectDetails.gallery[5].src}
                  alt={projectDetails.gallery[5].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </AnimatedElement>

        </div>
      </section>

      {/* Large Dynamic Images Grid - Fewer per row, larger size */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 lg:columns-2 gap-8 space-y-8">
            {projectDetails.sliderImages.slice(0, 6).map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="scaleIn"
                delay={index * 0.1}
                className="break-inside-avoid"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 mb-8">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                    style={{ display: 'block' }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider Section for remaining images */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              More Project Details
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore additional views and details of the Dutch Village Concept
            </p>
          </AnimatedElement>
          
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <ImageSlider images={projectDetails.sliderImages.slice(6)} />
          </AnimatedElement>
        </div>
      </section>

      {/* Back Button Bottom */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/design">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
