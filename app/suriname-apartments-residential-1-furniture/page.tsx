"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const projectDetails = {
  title: "Suriname Apartments Residential 1",
  category: "Furniture Production",
  heroImage: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-1.jpg.jpeg",
  description: [
    "The two apartments are the definition of luxurious Scandinavian design and character due to their simplicity combined with a refined, high end quality. Though similar in appearance, they differ through colour accents and details.\n\nThe apartments' highlights are the ample kitchen areas that feature large kitchen islands realised by a delicate and elegant combination of marble and wood – accents that are to be found throughout the entire kitchen space.",
    
    "The same simplicity characterises the dressing rooms, working spaces, storage racks and TV furniture. The Scandinavian design is also visible in all the other quality details distinguishing the apartments: the unique wooden doors with black doorknobs are custom made by our carpenters to match the floor – to – ceiling glass doors and very high ceilings, while the wooden walls are designed to act as both doors to secret rooms and true pieces of artistry.\n\nTogether, the clean, minimal spaces are a luxurious, yet comfortable oasis that you can call home.",
    
    "The challenge in this production process was to choose and deliver OAK Wood quality class AA and keep the wood fiber continuously on the doors. The Carrara Marble was carefully chosen, hence the sink is made out of Marble as well.\n\nWe chose a light black vanish that was hand painted, therefore we have a discontinuous accent on some of the cupboards. Accessories are from BLUM Motion, fully electric.",
    
    "Location: The Hague | The Netherlands\nStatus: Finished\nService: Interior Architectura & Furniture Production\nSectors: Residential\nArea: 680m²\nClient: Philippe Citroen | Lemons BV\n\nMain used materials:\nOAK Veneer MDF with OAK Vanish\nOAK Professional MDF with RAL paint code\nMasive OAK Wood\nCarrara Marble\nBLUM accessories\nHAFELE accessories\nNEF Appliances\nQuooker"
  ],
  // First 8 images for dynamic gallery
  gallery: [
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-2-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Kitchen Detail" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-3-scaled.jpg.jpeg", alt: "Suriname Apartments - Living Area" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-4-scaled.jpg.jpeg", alt: "Suriname Apartments - Bathroom Detail" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-5-scaled.jpg.jpeg", alt: "Suriname Apartments - Bedroom" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-7-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Kitchen Island" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-8-scaled.jpg.jpeg", alt: "Suriname Apartments - Storage Solutions" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-9-1.jpg.jpeg", alt: "Suriname Apartments - Dining Area" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-10-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Wardrobe Detail" },
  ],
  // Remaining images for slider
  sliderImages: [
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-11-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 1" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-12-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 2" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-13-1.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 3" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-14-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 4" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-15-1.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 5" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-16-1.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 6" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-17-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 7" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-18-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 8" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-19-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 9" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-20-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 10" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-21-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 11" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-22-1.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 12" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-23-1.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 13" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-24-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 14" },
    { src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-25-1-scaled.jpg.jpeg", alt: "Suriname Apartments - Interior Overview 15" },
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

export default function SurinameApartmentsPage() {
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
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Furniture Production
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
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
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
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
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

          {/* 4. First row: Image Left, Text Right */}
          <AnimatedElement animationType="fadeInUp" delay={0.3}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {projectDetails.description[2]}
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* 5. Second row: Image Left, Text Right */}
          <AnimatedElement animationType="fadeInUp" delay={0.4}>
            <div className="w-full">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 w-full">
                <Image
                  src={projectDetails.gallery[5].src}
                  alt={projectDetails.gallery[5].alt}
                  width={1200}
                  height={700}
                  className="w-full h-auto object-contain md:object-cover transition-transform duration-500 hover:scale-105"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </AnimatedElement>

        </div>
      </section>

      {/* Project Information & Materials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Project Details */}
            <div className="space-y-8">
              <AnimatedElement animationType="fadeInUp">
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="w-16 h-px bg-black mb-4"></div>
                    <p className="text-sm font-light uppercase tracking-[0.2em] text-gray-600">
                      Project Information
                    </p>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-extralight text-black leading-tight">
                    Project Details
                  </h2>
                  
                  <div className="space-y-4">
                    <AnimatedElement animationType="fadeInUp" delay={0.1}>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3">
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                          Location
                        </span>
                        <span className="text-gray-900 font-light">
                          The Hague | The Netherlands
                        </span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.2}>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3">
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                          Status
                        </span>
                        <span className="text-gray-900 font-light">
                          Finished
                        </span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.3}>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3">
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                          Service
                        </span>
                        <span className="text-gray-900 font-light">
                          Interior Architectura & Furniture Production
                        </span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.4}>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3">
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                          Sectors
                        </span>
                        <span className="text-gray-900 font-light">
                          Residential
                        </span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.5}>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3">
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                          Area
                        </span>
                        <span className="text-gray-900 font-light">
                          680m²
                        </span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.6}>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3">
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                          Client
                        </span>
                        <span className="text-gray-900 font-light">
                          Philippe Citroen | Lemons BV
                        </span>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* Materials */}
            <div className="space-y-8">
              <AnimatedElement animationType="fadeInUp" delay={0.2}>
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="w-16 h-px bg-black mb-4"></div>
                    <p className="text-sm font-light uppercase tracking-[0.2em] text-gray-600">
                      Main Used Materials
                    </p>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-extralight text-black leading-tight">
                    Materials & Finishes
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <AnimatedElement animationType="fadeInUp" delay={0.3}>
                      <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-light">OAK Veneer MDF with OAK Vanish</span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.4}>
                      <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-light">OAK Professional MDF with RAL paint code</span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.5}>
                      <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-light">Masive OAK Wood</span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.6}>
                      <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-light">Carrara Marble</span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.7}>
                      <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-light">BLUM accessories</span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.8}>
                      <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-light">HAFELE accessories</span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={0.9}>
                      <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-light">NEF Appliances</span>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animationType="fadeInUp" delay={1.0}>
                      <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-light">Quooker</span>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Large Dynamic Images Grid - Fewer per row, larger size */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 lg:columns-2 gap-8 space-y-8">
            {projectDetails.gallery.slice(6).concat(projectDetails.sliderImages.slice(0, 8)).map((image, index) => (
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
              Explore additional views and details of the Suriname Apartments Residential 1 furniture production
            </p>
          </AnimatedElement>
          
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <ImageSlider images={projectDetails.sliderImages.slice(8)} />
          </AnimatedElement>
        </div>
      </section>

      {/* Back Button Bottom */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 