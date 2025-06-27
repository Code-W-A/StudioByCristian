"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"

export default function GallerySectionSuriname() {
  const galleryImages = [
    {
      src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-4-scaled.jpg.jpeg",
      alt: "Suriname Apartments - Kitchen Detail"
    },
    {
      src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-5-scaled.jpg.jpeg",
      alt: "Suriname Apartments - Living Area"
    },
    {
      src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-7-1-scaled.jpg.jpeg",
      alt: "Suriname Apartments - Bathroom Detail"
    },
    {
      src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-8-scaled.jpg.jpeg",
      alt: "Suriname Apartments - Bedroom"
    },
    {
      src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-9-1.jpg.jpeg",
      alt: "Suriname Apartments - Kitchen Island"
    },
    {
      src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-10-1-scaled.jpg.jpeg",
      alt: "Suriname Apartments - Storage Solutions"
    },
    {
      src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-11-1-scaled.jpg.jpeg",
      alt: "Suriname Apartments - Dining Area"
    },
    {
      src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-12-1-scaled.jpg.jpeg",
      alt: "Suriname Apartments - Wardrobe Detail"
    },
    {
      src: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-13-1.jpg.jpeg",
      alt: "Suriname Apartments - Interior Overview"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="w-16 h-px bg-black mb-4 mx-auto"></div>
              <p className="text-sm font-light uppercase tracking-[0.2em] text-gray-600 mb-4">
                Project Gallery
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-black leading-tight">
              Furniture Production
              <span className="block text-2xl md:text-3xl mt-2 text-gray-600">
                Detailed Craftsmanship
              </span>
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 hover:shadow-lg transition-all duration-500">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Geometric Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-white/40 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border border-white/30 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-light">{image.alt}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
} 