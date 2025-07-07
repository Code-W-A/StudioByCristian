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
  title: "Ravy Roy Homeopathy Retreat",
  category: "Interior Design",
  heroImage: "/extra design/Ravi Roy Spa Retreat Hotel/restaurant-launge-one.jpg",
  description: "The Ravy Roy Homeopathy Retreat is a living dialogue between cultures, materials, and the human spirit. It is a carefully crafted atmosphere where every corner, texture, and light source contributes to the process of healing, learning, and self-reconnection.",
  spaces: {
    spatialComposition: {
      title: "Spatial Composition",
      description: "",
      images: [
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/reception-one.jpg", alt: "Spatial composition overview" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/reception-two.jpg", alt: "Interior spatial flow" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/1751373250125-0e1c2657-278e-4407-a896-8db0506a2b32_30.jpg", alt: "Architectural detail view" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/1751373250125-0e1c2657-278e-4407-a896-8db0506a2b32_48.jpg", alt: "Interior design element" }
      ]
    },
    reception: {
      title: "Reception & Entry Experience",
      description: "Guests are welcomed into a space that sets the tone with organic lines, suspended greenery, golden lighting fixtures, and calming hues. Custom signage, flowing plant elements, and layered surfaces reflect a balance between elegance and nature.",
      images: [
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/reception-three.jpg", alt: "Reception area with organic design" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/reception-four.jpg", alt: "Entry experience with greenery" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/reception-five.jpg", alt: "Reception entrance details" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/1751373250125-0e1c2657-278e-4407-a896-8db0506a2b32_42.jpg", alt: "Reception design detail" }
      ]
    },
    shop: {
      title: "Shop",
      description: "The boutique offers a minimalist yet tactile retail experience, using open wooden shelving, neutral colors, and carefully placed lighting to highlight the homeopathy product lines.",
      images: [
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/shop-one.jpg", alt: "Boutique shop area" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/shop-two.jpg", alt: "Shop retail display" }
      ]
    },
    restaurant: {
      title: "Restaurant & Lounge",
      description: "This central hub is designed as a social retreat within a retreat, divided into:\nLounge zones with sculptural wooden columns, plush armchairs, and earthy colors\nBar area with curved forms, pastel hues, and a natural flow of movement\nTraditional dining space that celebrates Bavarian design with heart-carved chairs and countryside charm\nBuffet/breakfast area featuring elegant plate displays and green dividers to soften visual boundaries",
      images: [
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/restaurant-launge-one.jpg", alt: "Restaurant lounge area" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/restaurant-launge-two.jpg", alt: "Bar area with curved forms" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/restaurant-launge-three.jpg", alt: "Traditional dining space" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/restaurant-launge-four.jpg", alt: "Buffet breakfast area" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/restaurant-launge-five.jpg", alt: "Restaurant seating area" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/restaurant-launge-six.jpg", alt: "Restaurant lounge additional view" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/restaurant-launge-seven.jpg", alt: "Restaurant dining area" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/restaurant-launge-eight.jpg", alt: "Restaurant seating arrangement" }
      ]
    },
    seminar: {
      title: "Seminar Room",
      description: "A multipurpose space designed for education, wellness lectures, and seminars. The design incorporates warm lighting, arched architectural elements, and ceiling murals reminiscent of open skies and calm mindsets.",
      images: [
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/seminary-one.jpg", alt: "Seminar room with arched elements" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/seminary-two.jpg", alt: "Seminar room ceiling murals" }
      ]
    },
    offices: {
      title: "Consultation & Office Areas",
      description: "Main Office: An elegant sanctuary with arched niches, a statement live-edge desk, natural materials, and calming murals.\nSecondary Office: A more intimate, botanical-inspired setting with hand-painted cabinetry and soft natural lighting—perfect for client consultations and wellness sessions.",
      images: [
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/main-consultation-office.jpg", alt: "Main office with live-edge desk" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/maine-consultation-office-two.jpg", alt: "Main office arched niches" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/secondary-consultation-office.jpg", alt: "Secondary office botanical setting" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/secondary-consultation-office-two.jpg", alt: "Secondary office hand-painted cabinetry" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/maine-consultation-office-three.jpg", alt: "Main consultation office additional view" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/secondary-consultation-office-three.jpg", alt: "Secondary consultation office additional view" }
      ]
    },
    therapy: {
      title: "Therapy Rooms",
      description: "Each treatment room tells a different story:\nOne is blush-toned and feminine, with warm lighting and minimalist elegance.\nAnother is immersed in greenery, with a living wall, botanical wallpaper, and rustic detailing.\nBoth rooms provide sensory grounding and are designed for relaxation, detox, and rejuvenation.",
      images: [
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/therapy-room-one.jpg", alt: "Blush-toned therapy room" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/therapy-room-two.jpg", alt: "Green therapy room with living wall" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/therapy-room-four.jpg", alt: "Therapy room botanical detailing" }
      ]
    },
    bathrooms: {
      title: "Bathrooms",
      description: "A floral concept in pinks and brass, both playful and elegant.\nA forest-themed design with deep greens, organic contours, and earthy materials.",
      images: [
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/bathrooms.jpg", alt: "Floral bathroom in pinks and brass" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/bathrooms-two.jpg", alt: "Forest-themed bathroom" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/bathrooms-three.jpg", alt: "Bathroom organic contours" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/bathrooms-four.jpg", alt: "Bathroom earthy materials" }
      ]
    },
    guestRooms: {
      title: "Guest Room Concepts",
      typeI: {
        title: "Room Type I – Botanical Serenity",
        description: "This room emphasizes freshness and light, with watercolor floral murals, soft textiles, and blue-and-yellow accents. The bathroom features dual vanities, natural wood, and violet detail lines, creating a soothing, refined experience.",
        images: [
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-one.jpg", alt: "Botanical serenity room" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-one-two.jpg", alt: "Botanical room watercolor murals" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-one-three.jpg", alt: "Botanical room bathroom" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-one-four.jpg", alt: "Botanical room violet details" }
        ]
      },
      typeII: {
        title: "Room Type II – Forest Immersion",
        description: "A rich visual immersion into the pinewood forest, with a full-height mural and golden birds in flight. The bathroom surprises with sunshine yellow tiles, painted floral panels, and contrasting natural stone.",
        images: [
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-two-one.jpg", alt: "Forest immersion room" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-two-two.jpg", alt: "Forest room full-height mural" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-two-three.jpg", alt: "Forest room golden birds" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-two-four.jpg", alt: "Forest room bathroom yellow tiles" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-two-five.jpg", alt: "Forest room bathroom details" }
        ]
      },
      typeIII: {
        title: "Room Type III – Cultural Calm",
        description: "A minimalist fusion of Indian and Nordic aesthetics, defined by:\nScalloped mirror frames\nMint green and ivory palette\nCane-inlaid vanity and terrazzo flooring\nThis room is elegant, soft, and spiritually grounded.",
        images: [
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-three-one.jpg", alt: "Cultural calm room" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-three-two.jpg", alt: "Cultural room scalloped mirrors" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-three-three.jpg", alt: "Cultural room mint green palette" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-three-four.jpg", alt: "Cultural room cane-inlaid vanity" },
          { src: "/extra design/Ravi Roy Spa Retreat Hotel/room-type-three-five.jpg", alt: "Cultural room terrazzo flooring" }
        ]
      }
    },
    yoga: {
      title: "Yoga & Meditation Studio",
      description: "The yoga room is the sacred heart of the retreat:\nDraped ceiling fabric creates softness and flow\nNatural light floods through full-height windows\nThe mandala wall, hand-painted in violet hues, becomes a focal point for centering energy\nOrganized yoga props and low seating areas enable a seamless transition from active practice to meditative stillness",
  images: [
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/yoga-room-one.jpg", alt: "Yoga studio with mandala wall" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/yoga-room-two.jpg", alt: "Yoga room draped ceiling" },
        { src: "/extra design/Ravi Roy Spa Retreat Hotel/yoga-room-three.jpg", alt: "Meditation area with natural light" }
      ]
    }
  },
  conclusion: "The Ravy Roy Homeopathy Retreat is a living dialogue between cultures, materials, and the human spirit. It is a carefully crafted atmosphere where every corner, texture, and light source contributes to the process of healing, learning, and self-reconnection.\nThis is not just a project—it is a philosophy in physical form. A place where architecture becomes therapy, and design becomes ritual."
}

export default function RaviRoySpaRetreatHotelPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection imageUrl={projectDetails.heroImage} imageAlt={projectDetails.title + " Hero Image"} minHeight="70vh" strength={0.3} overlayClassName="bg-black/40">
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{projectDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
        </AnimatedElement>
      </ParallaxSection>

      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="outline" size="lg" className="bg-white text-black border-gray-300 hover:bg-gray-100">
              <Link href="/concept-design"><ArrowLeft className="mr-2 h-5 w-5" />Back to Design Projects</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                A Philosophy in Physical Form
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {projectDetails.description}
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Spatial Composition Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                {projectDetails.spaces.spatialComposition.title}
              </h3>
            </div>
            {/* Main image */}
            <div className="mb-12">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 max-w-4xl mx-auto">
                <Image src={projectDetails.spaces.spatialComposition.images[0].src} alt={projectDetails.spaces.spatialComposition.images[0].alt} width={1000} height={750}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
              </div>
            </div>
            {/* Additional images gallery */}
            {projectDetails.spaces.spatialComposition.images.length > 1 && (
              <div className="space-y-8">
                {/* Single large featured image */}
                <AnimatedElement animationType="fadeInUp" delay={0.2}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: '16/9' }}>
                    <Image src={projectDetails.spaces.spatialComposition.images[1].src} alt={projectDetails.spaces.spatialComposition.images[1].alt} fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="100vw" />
                  </div>
                </AnimatedElement>

                {/* Two images side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projectDetails.spaces.spatialComposition.images.slice(2).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: '4/3' }}>
                        <Image src={image.src} alt={image.alt} fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>

      {/* Reception & Entry Experience Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.spaces.reception.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.spaces.reception.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image src={projectDetails.spaces.reception.images[0].src} alt={projectDetails.spaces.reception.images[0].alt} width={600} height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '3/2' }} />
              </div>
            </div>
            {/* Additional images gallery */}
            {projectDetails.spaces.reception.images.length > 1 && (
              <div className="space-y-8">
                {/* Two images side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projectDetails.spaces.reception.images.slice(1, 3).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: '3/2' }}>
                        <Image src={image.src} alt={image.alt} fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>

                {/* Single featured image */}
                {projectDetails.spaces.reception.images.length > 3 && (
                  <AnimatedElement animationType="fadeInUp" delay={0.2}>
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: '16/9' }}>
                      <Image src={projectDetails.spaces.reception.images[3].src} alt={projectDetails.spaces.reception.images[3].alt} fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="100vw" />
                    </div>
                  </AnimatedElement>
                )}
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:grid-flow-col-dense mb-12">
              <div className="space-y-6 lg:col-start-2">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.spaces.shop.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.spaces.shop.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="lg:col-start-1">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  <Image src={projectDetails.spaces.shop.images[0].src} alt={projectDetails.spaces.shop.images[0].alt} width={800} height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                </div>
              </div>
            </div>
            {/* Additional images gallery */}
            {projectDetails.spaces.shop.images.length > 1 && (
            <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.spaces.shop.images.slice(1).map((image, index) => (
                <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image src={image.src} alt={image.alt} width={600} height={450}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>

      {/* Restaurant & Lounge Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.spaces.restaurant.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.spaces.restaurant.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image src={projectDetails.spaces.restaurant.images[0].src} alt={projectDetails.spaces.restaurant.images[0].alt} width={600} height={450}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} 
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      loading="eager" />
              </div>
            </div>
            {/* Additional images gallery */}
            {projectDetails.spaces.restaurant.images.length > 1 && (
              <div className="space-y-8">
                {/* First row - 2 columns */}
                <div className="grid md:grid-cols-2 gap-8">
                  {projectDetails.spaces.restaurant.images.slice(1, 3).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: '4/3' }}>
                        <Image src={image.src} alt={image.alt} fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw" 
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>

                {/* Single large featured image */}
                <AnimatedElement animationType="fadeInUp" delay={0.2}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: '16/9' }}>
                    <Image src={projectDetails.spaces.restaurant.images[3].src} alt={projectDetails.spaces.restaurant.images[3].alt} fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="100vw" 
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                  </div>
                </AnimatedElement>

                {/* Three images in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {projectDetails.spaces.restaurant.images.slice(4, 7).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.2}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-square">
                        <Image src={image.src} alt={image.alt} fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" 
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>

                {/* Final row - remaining images */}
                {projectDetails.spaces.restaurant.images.length > 7 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectDetails.spaces.restaurant.images.slice(7).map((image, index) => (
                      <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.3}>
                        <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: '4/3' }}>
                          <Image src={image.src} alt={image.alt} fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw" 
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                  </div>
                </AnimatedElement>
              ))}
            </div>
                )}
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>

      {/* Seminar Room Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.spaces.seminar.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.spaces.seminar.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image src={projectDetails.spaces.seminar.images[0].src} alt={projectDetails.spaces.seminar.images[0].alt} width={800} height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
              </div>
            </div>
            {/* Additional images gallery */}
            {projectDetails.spaces.seminar.images.length > 1 && (
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.spaces.seminar.images.slice(1).map((image, index) => (
                <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image src={image.src} alt={image.alt} width={600} height={450}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>

      {/* Consultation & Office Areas Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 lg:grid-flow-col-dense">
              <div className="space-y-6 lg:col-start-2">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.spaces.offices.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.spaces.offices.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="lg:col-start-1">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  <Image src={projectDetails.spaces.offices.images[0].src} alt={projectDetails.spaces.offices.images[0].alt} width={800} height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                </div>
              </div>
            </div>
            {/* Additional images gallery */}
            {projectDetails.spaces.offices.images.length > 1 && (
              <div className="space-y-8">
                {/* Single large featured image */}
                <AnimatedElement animationType="fadeInUp" delay={0.2}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: '16/9' }}>
                    <Image src={projectDetails.spaces.offices.images[1].src} alt={projectDetails.spaces.offices.images[1].alt} fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="100vw" />
                  </div>
                </AnimatedElement>

                {/* Two large images side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projectDetails.spaces.offices.images.slice(2, 4).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: '4/3' }}>
                        <Image src={image.src} alt={image.alt} fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>

                {/* Final two images side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projectDetails.spaces.offices.images.slice(4).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-square">
                        <Image src={image.src} alt={image.alt} fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </AnimatedElement>
              ))}
            </div>
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>

      {/* Therapy Rooms Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.spaces.therapy.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.spaces.therapy.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image src={projectDetails.spaces.therapy.images[0].src} alt={projectDetails.spaces.therapy.images[0].alt} width={800} height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
              </div>
            </div>
            {/* Additional images gallery */}
            {projectDetails.spaces.therapy.images.length > 1 && (
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.spaces.therapy.images.slice(1).map((image, index) => (
              <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image src={image.src} alt={image.alt} width={600} height={450}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>

      {/* Bathrooms Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 lg:grid-flow-col-dense">
              <div className="space-y-6 lg:col-start-2">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.spaces.bathrooms.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.spaces.bathrooms.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="lg:col-start-1">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  <Image src={projectDetails.spaces.bathrooms.images[0].src} alt={projectDetails.spaces.bathrooms.images[0].alt} width={800} height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                </div>
              </div>
            </div>
            {/* Additional images gallery */}
            {projectDetails.spaces.bathrooms.images.length > 1 && (
              <div className="space-y-8">
                {/* Three images in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {projectDetails.spaces.bathrooms.images.slice(1).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-square">
                        <Image src={image.src} alt={image.alt} fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
                </div>
              </AnimatedElement>
            ))}
          </div>
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>

      {/* Guest Room Concepts Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                {projectDetails.spaces.guestRooms.title}
              </h3>
            </div>

            {/* Room Type I */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-black">
                    {projectDetails.spaces.guestRooms.typeI.title}
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {projectDetails.spaces.guestRooms.typeI.description}
                  </p>
                  <div className="pt-6">
                    <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  <Image src={projectDetails.spaces.guestRooms.typeI.images[0].src} alt={projectDetails.spaces.guestRooms.typeI.images[0].alt} width={800} height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                </div>
              </div>
              {/* Additional images gallery */}
              {projectDetails.spaces.guestRooms.typeI.images.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectDetails.spaces.guestRooms.typeI.images.slice(1).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                        <Image src={image.src} alt={image.alt} width={600} height={450}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              )}
            </div>

            {/* Room Type II */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 lg:grid-flow-col-dense">
                <div className="space-y-6 lg:col-start-2">
                  <h4 className="text-2xl font-bold text-black">
                    {projectDetails.spaces.guestRooms.typeII.title}
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {projectDetails.spaces.guestRooms.typeII.description}
                  </p>
                  <div className="pt-6">
                    <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="lg:col-start-1">
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image src={projectDetails.spaces.guestRooms.typeII.images[0].src} alt={projectDetails.spaces.guestRooms.typeII.images[0].alt} width={800} height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                  </div>
                </div>
              </div>
              {/* Additional images gallery */}
              {projectDetails.spaces.guestRooms.typeII.images.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectDetails.spaces.guestRooms.typeII.images.slice(1).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                        <Image src={image.src} alt={image.alt} width={600} height={450}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              )}
            </div>

            {/* Room Type III */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-black">
                    {projectDetails.spaces.guestRooms.typeIII.title}
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {projectDetails.spaces.guestRooms.typeIII.description}
                  </p>
                  <div className="pt-6">
                    <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  <Image src={projectDetails.spaces.guestRooms.typeIII.images[0].src} alt={projectDetails.spaces.guestRooms.typeIII.images[0].alt} width={800} height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                </div>
              </div>
              {/* Additional images gallery */}
              {projectDetails.spaces.guestRooms.typeIII.images.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectDetails.spaces.guestRooms.typeIII.images.slice(1).map((image, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                        <Image src={image.src} alt={image.alt} width={600} height={450}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              )}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Yoga & Meditation Studio Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.spaces.yoga.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.spaces.yoga.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <Image src={projectDetails.spaces.yoga.images[0].src} alt={projectDetails.spaces.yoga.images[0].alt} width={800} height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
              </div>
            </div>
            {/* Additional images gallery */}
            {projectDetails.spaces.yoga.images.length > 1 && (
              <div className="grid md:grid-cols-2 gap-8">
                {projectDetails.spaces.yoga.images.slice(1).map((image, index) => (
                  <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image src={image.src} alt={image.alt} width={600} height={450}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="text-center">
              <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                Conclusion
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {projectDetails.conclusion}
              </p>
              <div className="pt-8 mx-auto">
                <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full mx-auto"></div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
                starting to dream, we'd love to hear from you.
              </p>
              <div className="space-y-4 text-gray-700">
                <p><strong>Headquarters:</strong> The Netherlands</p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                  <Link href="#" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
                </div>
                <Link href="mailto:office@studiobycristian.com" className="block text-gray-700 hover:text-black transition-colors">office@studiobycristian.com</Link>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInRight">
              <motion.div className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }} viewport={{ once: true, amount: 0.3 }}>
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
    </div>
  )
} 