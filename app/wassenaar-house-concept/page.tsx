"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectDetails = {
  title: "Wassenaar House Concept",
  category: "Design Projects",
  heroImage: "/wasenaar-house-concept-page/Wassenaar-House-Category.jpg.jpeg",
  description: [
    "The flipping of this lovely property was a challenge we loved to undertake. Trimming down the old and bringing in the new Scandinavian high-quality finishes and fixtures gave this private residence a revitalising new life.\n\nWe found the house picturing the melancholic nuances of her younger times. The patina of the classical approach was not fit anymore for a residence in the flourishing Hague.\n\nEnvisioning the highest potential for this home, we studied every aspect, every functional and aesthetic detail. We've put up a mood board to inspire the future residents to see the potential their home can reach.",
    
    "Designing the interior had a focus on elegance and the visual symphony of neutral tones, black accents and the warmth of natural wood, all resting on the background of the invigorating outdoor greenery.\n\nThe main intervention at the ground floor was opening up the passage from the living room to the dining area and kitchen by mounting a large glass door, which created a light filled open space surrounded by nature and benefiting from the warm sunlight at all times. The living room was fitted with warm lights, minimal built-in furniture and a cozy, elegant feel through the suggested finishes.\n\nThe first floor contains 1 spacious master bedroom and 1 guest bedroom, both equipped with en-suite bathrooms. The bathrooms' design maintains the elegant key, playing with large marble slabs alongside dark accents of mosaics, minimal furniture volumes and accessories.",
    
    "The second floor, which initially only hosted 2 rooms, now provides 2 bedrooms, 1 shared bathroom and 1 toilet.\n\nThe attic can turn into a playroom, hobby room or an extra bedroom depending on the family needs and there is also a laundry room set up.",
    
    "Intervention on the outdoors aimed at inviting the owner to make use of the available space, hence we created different setups so spending as much time outside can be at hand. Dining in the garden, reading, relaxing on the bench or lounging with friends around a pit fire is all accessible.\n\nThe canvas of the home still held sufficient space for the new owners to place their unique signature.\n\nAll the actions were set in motion to create the perfect scenery for the future owners. The interventions were restorations, repairs and optimisations of the unseen aspects of the home, all which were covered by the modern light grey paint and warm natural wood floor. Outdoor landscaping, the kitchen, the bathrooms and built-in wardrobes were all provided for the comfort of the new owners, but the canvas of the home had enough space for them to also place their own unique signature."
  ],
  // First 8 images for dynamic gallery
  gallery: [
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-1.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 1" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-2.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 2" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-3-1.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 3" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-4-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 4" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-5-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 5" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-6-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 6" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-07.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 7" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-08.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 8" },
  ],
  // Remaining images for slider
  sliderImages: [
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-09.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 9" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-10.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 10" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-11-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 11" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-12.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 12" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-13.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 13" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-14-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 14" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-15-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 15" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-16-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 16" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-17.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 17" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-18.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 18" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-19-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 19" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-20.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 20" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-21.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 21" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-22-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 22" },
    { src: "/wasenaar-house-concept-page/Wassenaar-House-Concept-23-scaled.jpg.jpeg", alt: "Wassenaar House Concept - Interior view 23" },
  ]
}

export default function WassenaarHouseConceptPage() {
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
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[1].src}
                  alt={projectDetails.gallery[1].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100 lg:order-2">
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
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                <Image
                  src={projectDetails.gallery[5].src}
                  alt={projectDetails.gallery[5].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {projectDetails.description[3]}
                </p>
              </div>
            </div>
          </AnimatedElement>

        </div>
      </section>

      {/* Large Dynamic Images Grid - Fewer per row, larger size */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 lg:columns-2 gap-8 space-y-8">
            {projectDetails.gallery.slice(6).concat(projectDetails.sliderImages).map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="scaleIn"
                delay={index * 0.1}
                className="break-inside-avoid"
              >
                <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100 mb-8">
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


    </div>
  )
}
