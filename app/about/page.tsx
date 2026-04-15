"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/components/icons/arrow-right"
import AnimatedElement from "@/components/animated-element"
import HeroSection from "@/components/hero-section"
import { Quote, Mail, Globe, MapPin, Send, Settings, Users, Sparkles, Wifi, TrendingUp, Home, Wrench, Palette, Package, Plane, Armchair, Hammer, Check } from "lucide-react"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"
import AboutIntroText from "@/components/about-intro-text"
import { WASSENAAR_HERO_IMAGE } from "@/lib/wassenaar-public-assets"

const sections = [
  {
    title: "Good design is obvious — great design feels effortless.",
    content:
      "We begin by understanding the function and purpose of each space, aligning it with the desired mood, lifestyle, or brand identity. Together with our clients, we define the look and feel, ensuring every element supports the experience they envision. To bring ideas to life clearly and collaboratively, we provide detailed visualizations and 3D renderings, helping us explore possibilities and ensure the final result is as intentional as it is beautiful.",
    imageSrc: "/about-us/good-design-is-obvious.jpg",
    linkText: "Learn More",
    linkHref: "/design",
  },
  {
    title: "Design is where science meets art — and both serve function.",
    content: [
      "We approach each renovation with careful analysis and technical precision. After evaluating the space and its possibilities, we propose tailored solutions, including custom furniture, all represented through clear technical drawings and documentation.",
      "By the end of the design phase, our clients have everything they need to execute the project independently — or, if they prefer, we can continue supporting the project through full coordination, implementation, and turn-key delivery."
    ],
    imageSrc: "/about-us/Design-where-science-art-break.jpg",
    linkText: "Learn More",
    linkHref: "/design",
  },
  {
    title: "Where ideas take shape — with precision, creativity, and craftsmanship.",
    content:
      "When you choose to work with us on custom furniture, you're entering the final and most tangible stage of the design process: transforming vision into reality. We collaborate with skilled makers and advanced production facilities capable of working with an extensive range of materials — including solid wood, veneer, HPL, MDF, professional lacquers, steel, glass, marble, quartz, and more. We also handle upholstery and fabric production, allowing for full flexibility in both function and style. Every piece is the result of close collaboration between our engineers, project managers, and production partners — all working together to deliver tailored solutions, no matter how ambitious the idea. If you can imagine it, we can make it real.",
    imageSrc: "/unusual-spaces/Utrecht - Pictures/_EWP0966.jpg",
    linkText: "Learn More",
    linkHref: "/furniture-production",
  },
]

// Dynamic words for typing animation
const dynamicWords = ["relaxing", "living", "working", "creating"]

import { allTestimonials } from "@/lib/testimonials-data"

// About page specific image configurations - Using cropped and slider images
const aboutImageConfigs = [
  { 
    src: "/extra-from-wapp/Lage&Roy Institute Presentation 2022 Nov/lage-roy-cropped.jpg", 
    zoom: 1,       // No zoom - natural size
    offsetX: 0,    // No offset for equal containers
    offsetY: 0     // No offset for equal containers
  },
  { 
    src: "/extra-from-wapp/Lage&Roy Institute_Phase2_Technical Detailing/institute-phase-slider-cropp.jpg", 
    zoom: 1,       // No zoom - natural size
    offsetX: 0,    // No offset for equal containers
    offsetY: 0     // No offset for equal containers
  },
  { 
    src: "/extra-from-wapp/A1. 01 Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 1/A1. 01 Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 1_page-0001-cropp-slide.jpg", 
    zoom: 1,       // No zoom - natural size
    offsetX: 0,    // No offset for equal containers
    offsetY: 0     // No offset for equal containers
  },
  { 
    src: "/extra-from-wapp/A1. 00 Lage&Roy Institute_Plan Mobilare cu cote_ Parter/A1. 00 Lage&Roy Institute_Plan Mobilare cu cote_ Parter_page-0001-cropp-slider.jpg", 
    zoom: 1,       // No zoom - natural size
    offsetX: 0,    // No offset for equal containers
    offsetY: 0     // No offset for equal containers
  },
  { 
    src: "/extra-from-wapp/A1. 02  Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 2/A1. 02  Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 2_page-0001-cropp-slider.jpg", 
    zoom: 1,       // No zoom - natural size
    offsetX: 0,    // No offset for equal containers
    offsetY: 0     // No offset for equal containers
  }
]

export default function AboutUsPage() {
  return (
    <div className="bg-white text-black" style={{ margin: 0, padding: 0 }}>
      {/* Modern Hero Section */}
      <HeroSection
        title="We Design Your Space for"
        subtitle="About Us"
        dynamicWords={dynamicWords}
        slideshow={true}
        slideshowImageConfigs={aboutImageConfigs}
      />

      {/* About Us Introduction */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement
            animationType="fadeInUp"
            className="text-center mb-12"
            delay={0.1}
            duration={0.7}
            amount={0.3}
          >
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">
              Studio byCristian
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <AboutIntroText />
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement
            animationType="fadeInUp"
            className="text-center mb-16"
            delay={0.1}
            duration={0.7}
            amount={0.3}
          >
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">
              Our Services
            </h2>
          </AnimatedElement>
          
          <div className="space-y-24">
            {/* Custom Furniture - Text Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimatedElement animationType="fadeInLeft" delay={0.2}>
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                      <Armchair className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-black">Custom Furniture</h3>
                      <div className="w-20 h-1 bg-black rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Tailored pieces, built for your life and your space.
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="font-bold text-black text-lg uppercase tracking-wide flex items-center">
                      <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-white" />
                      </span>
                      Includes:
                    </h4>
                    <ul className="space-y-4 ml-12">
                      {[
                        "Built-in units: wardrobes, kitchens, vanities, wall systems",
                        "Loose furniture: sofas, chairs, dining tables, beds, storage", 
                        "Material and finish selection to match your vision",
                        "Fully managed production with trusted makers"
                      ].map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="w-3 h-3 rounded-full bg-black mt-2 mr-4 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-black uppercase tracking-wide mb-2">Highlight:</p>
                    <p className="text-lg text-gray-600">Every piece is made to order — no templates, no shortcuts. We collaborate with skilled makers and advanced production facilities.</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animationType="fadeInRight" delay={0.3}>
                <motion.div
                  className="relative overflow-hidden rounded-2xl group w-full"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/unusual-spaces/Utrecht - Pictures/_EWP0966.jpg"
                    alt="Custom Furniture"
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                    style={{ aspectRatio: '4/5' }}
                  />
                </motion.div>
              </AnimatedElement>
            </div>

            {/* Interior Design - Text Right, Image Left */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimatedElement animationType="fadeInLeft" delay={0.4} className="lg:order-2">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-black">Interior Design and Planning</h3>
                      <div className="w-20 h-1 bg-black rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Strategic planning and creative direction that shape how a space works, feels, and gets built.
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="font-bold text-black text-lg uppercase tracking-wide flex items-center">
                      <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-white" />
                      </span>
                      Includes:
                    </h4>
                    <ul className="space-y-4 ml-12">
                      {[
                        "Layout and space planning",
                        "Concept development and design direction",
                        "Color, material, and finish palettes",
                        "Lighting design and mood concepts",
                        "Furniture, decor, and art direction",
                        "Complete design documentation for implementation"
                      ].map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="w-3 h-3 rounded-full bg-black mt-2 mr-4 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-black uppercase tracking-wide mb-2">Highlight:</p>
                    <p className="text-lg text-gray-600">We connect concept and planning early, so every aesthetic move supports a functional, buildable result.</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animationType="fadeInRight" delay={0.5} className="lg:order-1">
                <motion.div
                  className="relative overflow-hidden rounded-2xl group w-full h-[750px]"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/ravy-roy-new-pics/Lounge/Lounge _ 05.jpg"
                    alt="Interior Design"
                    fill
                    className="object-cover transform transition-transform duration-500 hover:scale-105"
                    style={{ objectPosition: 'center center' }}
                    priority={false}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </motion.div>
              </AnimatedElement>
            </div>

            {/* Interior Renovation - Text Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimatedElement animationType="fadeInLeft" delay={0.6}>
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                      <Hammer className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-black">Interior Renovation and General Contracting</h3>
                      <div className="w-20 h-1 bg-black rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Turn-key transformations led with precision, coordination, and on-site accountability.
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="font-bold text-black text-lg uppercase tracking-wide flex items-center">
                      <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-white" />
                      </span>
                      Includes:
                    </h4>
                    <ul className="space-y-4 ml-12">
                      {[
                        "Project planning and cost estimation",
                        "Demolition, build, and finishing coordination",
                        "General contractor and supplier management", 
                        "Site supervision and quality control",
                        "Final styling and handover"
                      ].map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="w-3 h-3 rounded-full bg-black mt-2 mr-4 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-black uppercase tracking-wide mb-2">Highlight:</p>
                    <p className="text-lg text-gray-600">We bridge design intent and on-site delivery, whether we lead the full process or collaborate with external architects and designers.</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animationType="fadeInRight" delay={0.7}>
                <motion.div
                  className="relative overflow-hidden rounded-2xl group w-full"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={WASSENAAR_HERO_IMAGE}
                    alt="Interior Renovation"
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                    style={{ aspectRatio: '4/5' }}
                  />
                </motion.div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Work With Us - Premium Design */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white text-black relative overflow-hidden">
        {/* Background geometric elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-black/20 rotate-45" />
          <div className="absolute top-60 right-20 w-24 h-24 border border-black/20 rotate-12" />
          <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-black/20 rotate-45" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <AnimatedElement
            animationType="fadeInUp"
            className="text-center mb-20"
            delay={0.1}
            duration={0.8}
            amount={0.3}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 relative">
                Why Clients Work With Us
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full" />
              </h2>
            </motion.div>
          </AnimatedElement>
          
          {/* Premium Grid Layout - 2 columns on desktop */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Turn-key process */}
              <AnimatedElement animationType="fadeInUp" delay={0.2}>
                <motion.div
                  className="bg-white rounded-2xl border border-gray-100 p-8 h-full relative overflow-hidden group"
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.4, ease: "easeOut" } 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Turn-key process — from concept to final installation
                    </h3>
                  </div>
                </motion.div>
              </AnimatedElement>

              {/* Flexible team */}
              <AnimatedElement animationType="fadeInUp" delay={0.3}>
                <motion.div
                  className="bg-white rounded-2xl border border-gray-100 p-8 h-full relative overflow-hidden group"
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3 } 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Flexible team — we adapt quickly to each project's needs and challenges
                    </h3>
                  </div>
                </motion.div>
              </AnimatedElement>

              {/* Tailored solutions */}
              <AnimatedElement animationType="fadeInUp" delay={0.4}>
                <motion.div
                  className="bg-white rounded-2xl border border-gray-100 p-8 h-full relative overflow-hidden group"
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3 } 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Tailored solutions — no standard packages, everything is custom
                    </h3>
                  </div>
                </motion.div>
              </AnimatedElement>

              {/* Remote collaboration */}
              <AnimatedElement animationType="fadeInUp" delay={0.5}>
                <motion.div
                  className="bg-white rounded-2xl border border-gray-100 p-8 h-full relative overflow-hidden group"
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3 } 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Remote collaboration — ideal for international clients or relocations
                    </h3>
                  </div>
                </motion.div>
              </AnimatedElement>

              {/* Expansion-ready */}
              <AnimatedElement animationType="fadeInUp" delay={0.6}>
                <motion.div
                  className="bg-white rounded-2xl border border-gray-100 p-8 h-full relative overflow-hidden group"
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3 } 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Expansion-ready — perfect for brands opening new locations or scaling across markets
                    </h3>
                  </div>
                </motion.div>
              </AnimatedElement>

              {/* Expat-ready */}
              <AnimatedElement animationType="fadeInUp" delay={0.7}>
                <motion.div
                  className="bg-white rounded-2xl border border-gray-100 p-8 h-full relative overflow-hidden group"
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3 } 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-4">
                      Expat-ready — we assist relocating clients with:
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm text-left">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span>Temporary housing search</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span>Home purchase support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span>Full project setup with furniture and renovation packages</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Our Bundles Section - Premium Design with Images */}
      <section className="py-24 lg:py-32 bg-white text-black relative overflow-hidden">
        {/* Background geometric elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 left-20 w-40 h-40 border border-black/20 rotate-12" />
          <div className="absolute bottom-32 right-20 w-32 h-32 border border-black/20 rotate-45" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-black/20 rotate-12" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <AnimatedElement
            animationType="fadeInUp"
            className="text-center mb-20"
            delay={0.1}
            duration={0.8}
            amount={0.3}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 relative">
                Our Bundles
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full" />
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                Flexible packages designed to suit every project scale — from a single room to a full property.
              </p>
            </motion.div>
          </AnimatedElement>
          
          <div className="space-y-24">
            {/* Essentials Bundle - Text Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimatedElement animationType="fadeInLeft" delay={0.2}>
                <div className="space-y-8">
                                     <div className="flex items-center space-x-4 mb-6">
                     <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                       <Package className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="text-3xl lg:text-4xl font-bold text-black">Essentials Bundle</h3>
                       <div className="w-20 h-1 bg-black rounded-full mt-2"></div>
                     </div>
                   </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    For clients who need key furniture and a refined design touch. Ideal for expats, relocations, or quick styling needs.
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="font-bold text-black text-lg uppercase tracking-wide flex items-center">
                      <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-white" />
                      </span>
                      Includes:
                    </h4>
                    <ul className="space-y-4 ml-12">
                      {[
                        "Selection and sourcing of loose furniture (sofas, chairs, beds, tables, etc.)",
                        "Concept design and moodboard",
                        "Light space planning", 
                        "Delivery and installation coordination"
                      ].map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="w-3 h-3 rounded-full bg-black mt-2 mr-4 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-black uppercase tracking-wide mb-2">Perfect for:</p>
                    <p className="text-lg text-gray-600">Apartments, temporary homes, fast turnaround rentals</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animationType="fadeInRight" delay={0.3}>
                <motion.div
                  className="relative overflow-hidden rounded-2xl group w-full"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/bizzstay_sfeer/SFEER-9.jpg"
                    alt="Essentials Bundle - Apartment Design"
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                    style={{ aspectRatio: '4/5' }}
                  />
                </motion.div>
              </AnimatedElement>
            </div>

            {/* Design+Furniture Bundle - Text Right, Image Left */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimatedElement animationType="fadeInLeft" delay={0.4} className="lg:order-2">
                <div className="space-y-8">
                                     <div className="flex items-center space-x-4 mb-6">
                     <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                       <Palette className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="text-3xl lg:text-4xl font-bold text-black">Design+Furniture Bundle</h3>
                       <div className="w-20 h-1 bg-black rounded-full mt-2"></div>
                     </div>
                   </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    For clients who want a more customized, cohesive setup.
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="font-bold text-black text-lg uppercase tracking-wide flex items-center">
                      <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-white" />
                      </span>
                      Includes:
                    </h4>
                    <ul className="space-y-4 ml-12">
                      {[
                        "Full interior design concept",
                        "Space planning and layout",
                        "Custom furniture design (built-in + loose)",
                        "Sourcing and production management",
                        "Delivery and installation"
                      ].map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="w-3 h-3 rounded-full bg-black mt-2 mr-4 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-black uppercase tracking-wide mb-2">Perfect for:</p>
                    <p className="text-lg text-gray-600">New homes, boutique hotels, hospitality launches, office makeovers</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animationType="fadeInRight" delay={0.5} className="lg:order-1">
                <motion.div
                  className="relative overflow-hidden rounded-2xl group w-full"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5900.jpg"
                    alt="Design+Furniture Bundle - Custom Furniture Production"
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                    style={{ aspectRatio: '4/5' }}
                  />
                </motion.div>
              </AnimatedElement>
            </div>

            {/* Turn-key Bundle - Text Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimatedElement animationType="fadeInLeft" delay={0.6}>
                <div className="space-y-8">
                                     <div className="flex items-center space-x-4 mb-6">
                     <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                       <Wrench className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="text-3xl lg:text-4xl font-bold text-black">Turn-key Bundle</h3>
                       <div className="w-20 h-1 bg-black rounded-full mt-2"></div>
                     </div>
                   </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    For clients who want a fully managed transformation. We design, build, furnish, and coordinate everything.
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="font-bold text-black text-lg uppercase tracking-wide flex items-center">
                      <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-white" />
                      </span>
                      Includes:
                    </h4>
                    <ul className="space-y-4 ml-12">
                      {[
                        "Interior design from concept to final detail",
                        "Full renovation coordination (contractors, suppliers)",
                        "Custom and loose furniture",
                        "Project management",
                        "Final styling and handover"
                      ].map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="w-3 h-3 rounded-full bg-black mt-2 mr-4 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-black uppercase tracking-wide mb-2">Perfect for:</p>
                    <p className="text-lg text-gray-600">Home renovations, property investors, commercial build-outs, relocation setups</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animationType="fadeInRight" delay={0.7}>
                <motion.div
                  className="relative overflow-hidden rounded-2xl group w-full"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/extra Custom Furniture/Thijs_Overveen/_EWP6076.jpg"
                    alt="Turn-key Bundle - Complete Renovation"
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                    style={{ aspectRatio: '4/5' }}
                  />
                </motion.div>
              </AnimatedElement>
            </div>

            {/* Relocation Bundle - Text Right, Image Left */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16` items-start">
              <AnimatedElement animationType="fadeInLeft" delay={0.8} className="lg:order-2">
                <div className="space-y-8">
                                     <div className="flex items-center space-x-4 mb-6">
                     <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                       <Plane className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="text-3xl lg:text-4xl font-bold text-black">Relocation Bundle</h3>
                       <div className="w-20 h-1 bg-black rounded-full mt-2"></div>
                     </div>
                   </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Tailored for expats moving to a new country. We guide and support the full transition process.
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="font-bold text-black text-lg uppercase tracking-wide flex items-center">
                      <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-white" />
                      </span>
                      Includes:
                    </h4>
                    <ul className="space-y-4 ml-12">
                      {[
                        "Assistance with temporary housing",
                        "Home scouting support and layout evaluation", 
                        "Design and furnishing planning",
                        "Full furnishing and renovation service",
                        "Handover before or right after arrival"
                      ].map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="w-3 h-3 rounded-full bg-black mt-2 mr-4 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-black uppercase tracking-wide mb-2">Perfect for:</p>
                    <p className="text-lg text-gray-600">Executives, expat families, remote property buyers, digital nomads</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animationType="fadeInRight" delay={0.9} className="lg:order-1">
                <motion.div
                  className="relative overflow-hidden rounded-2xl group w-full"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/laren-house-concept/Laren-House-Concept-9-768x1147.jpg.jpeg"
                    alt="Relocation Bundle - Luxury Home Setup"
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                    style={{ aspectRatio: '4/5' }}
                  />
                </motion.div>
              </AnimatedElement>
            </div>
          </div>
          
          <AnimatedElement animationType="fadeInUp" delay={0.6} className="text-center mt-16">
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-4 rounded-2xl border border-gray-200"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <span className="text-black font-bold text-xl mr-3"><Check className="w-5 h-5 text-black" /></span>
              <span className="text-black font-bold text-lg">All bundles can be tailored.</span>
              <span className="text-gray-700 ml-3 text-lg">We adjust the scope, budget, and timing based on your needs.</span>
            </motion.div>
          </AnimatedElement>
        </div>
      </section>

      {/* Content Sections - Enhanced Animations */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`py-12 lg:py-20 bg-gray-50 text-black"`}
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Add title only for the first section */}
            {index === 0 && (
              <AnimatedElement
                animationType="fadeInUp"
                className="text-center mb-16"
                delay={0.1}
                duration={0.7}
                amount={0.3}
              >
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-12">
                  Our Design Philosophy
                </h2>
              </AnimatedElement>
            )}
            <div
              className={`grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:grid-flow-row-dense" : ""}`}
            >
              <AnimatedElement
                animationType={index % 2 === 1 ? "fadeInLeft" : "fadeInRight"}
                className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                delay={0.2}
                duration={0.8}
                amount={0.2}
              >
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={section.imageSrc}
                    alt={section.title}
                    width={400}
                    height={800}
                    className="rounded-lg object-cover"
                    style={{ 
                      height: '100%', 
                      minHeight: '400px',
                      maxHeight: '600px', 
                      width: 'auto',
                      aspectRatio: '3/4'
                    }}
                  />
                </div>
              </AnimatedElement>
              <div className={`flex flex-col justify-center h-full ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <AnimatedElement
                  animationType={index % 2 === 1 ? "fadeInRight" : "fadeInLeft"}
                  delay={0.1}
                  duration={0.7}
                  amount={0.2}
                >
                  <h3 className={`text-2xl font-bold tracking-tight sm:text-3xl text-black`}>{section.title}</h3>
                </AnimatedElement>
                <AnimatedElement
                  animationType={index % 2 === 1 ? "fadeInRight" : "fadeInLeft"}
                  delay={0.3}
                  duration={0.6}
                  amount={0.2}
                >
                  {Array.isArray(section.content) ? (
                    <div className="mt-4 space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700">{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className={`mt-4 whitespace-pre-line text-gray-700`}>{section.content}</p>
                  )}
                </AnimatedElement>
                {section.linkText && section.linkHref && (
                  <AnimatedElement
                    animationType="fadeInUp"
                    delay={0.5}
                    duration={0.5}
                    amount={0.2}
                  >
                    <Button asChild variant="link" className={`mt-6 px-0 text-black hover:text-gray-700 transform transition-all duration-300 hover:translate-x-1`}>
                      <Link href={section.linkHref}>
                        {section.linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </AnimatedElement>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

 
      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              What our clients say about working with Studio by Cristian
            </p>
            <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
              These testimonials are based on recommendation letters and feedback received from past clients. Shared here with their permission, they reflect the quality of collaboration and the results we've achieved together.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <AnimatedElement
                key={index}
                animationType="fadeInUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-white p-8 rounded-xl relative"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  {/* Quote Icon - Mobile: corner position, Desktop: current position */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-300">
                    <Quote className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-black mb-1">{testimonial.type}</div>
                  </div>

                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-black text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500 font-medium">{testimonial.company}</div>
                    {testimonial.projectLink && (
                      <div className="mt-3">
                        <Link 
                          href={testimonial.projectLink}
                          className="inline-flex items-center text-sm font-medium text-black hover:text-white bg-transparent hover:bg-black px-3 py-2 rounded-md transition-all duration-300 group border border-gray-300 hover:border-black"
                        >
                          View Project
                          <motion.span 
                            className="ml-2 inline-block"
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Project Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement
            animationType="fadeInUp"
            className="text-center mb-12"
            delay={0.1}
            duration={0.7}
            amount={0.3}
          >
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">
              Start Your Project
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Whether you're ready to start or just exploring ideas, we'd love to hear from you. Let's talk about your space.
            </p>
          </AnimatedElement>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedElement animationType="fadeInLeft" delay={0.2}>
              <div>
                <h3 className="text-xl font-bold text-black mb-6">We can help with:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Custom furniture pieces</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Interior design for your home, business, or property</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Full renovation and fit-out projects</span>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-black mb-4">Get in touch directly:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-black" />
                      <span className="text-gray-700">contact@studiobycristian.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-black" />
                      <span className="text-gray-700">studiobycristian.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-black" />
                      <span className="text-gray-700">Netherlands, working internationally</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight" delay={0.3}>
              <motion.div
                className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Corner accents */}
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

      

      {/* Work Archive Section - DISABLED - Can be re-enabled by changing false to true */}
      {false && <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement
            animationType="fadeInUp"
            className="text-center mb-12"
            delay={0.1}
            duration={0.7}
            amount={0.3}
          >
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">
              Work Archive
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These are some of our past projects, built over more than 17 years of experience, collaboration, and dedication.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {/* Luxury Stores */}
            <AnimatedElement animationType="scaleIn" delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  href="/work-archive/luxury-stores"
                  className="group block relative overflow-hidden rounded-xl transition-all duration-500"
                >
                  {/* Background Image */}
                  <div className="w-full overflow-hidden">
                    <Image
                      src="/work-archive-page/Luxury-Stores-01-768x576.jpg.jpeg"
                      alt="Luxury Stores"
                      width={600}
                      height={400}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Text Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="relative">
                      {/* Animated Border */}
                      <div className="absolute inset-0 border-2 border-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-white/60" />
                      <div className="relative backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Luxury Stores
                        </h3>
                        <div className="h-0.5 w-0 bg-white/60 group-hover:w-full transition-all duration-700 ease-out" />
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                          <span className="text-white/80 text-sm font-medium flex items-center">
                            Explore Collection
                            <motion.span
                              className="ml-2 inline-block"
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              →
                            </motion.span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                </Link>
              </motion.div>
            </AnimatedElement>

            {/* Private Homes */}
            <AnimatedElement animationType="scaleIn" delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  href="/work-archive/private-homes"
                  className="group block relative overflow-hidden rounded-xl transition-all duration-500"
                >
                  <div className="w-full overflow-hidden">
                    <Image
                      src="/work-archive-page/Private-Homes-18-768x576.jpg.jpeg"
                      alt="Private Homes"
                      width={600}
                      height={400}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="relative">
                      <div className="absolute inset-0 border-2 border-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-white/60" />
                      <div className="relative backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Private Homes
                        </h3>
                        <div className="h-0.5 w-0 bg-white/60 group-hover:w-full transition-all duration-700 ease-out" />
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                          <span className="text-white/80 text-sm font-medium flex items-center">
                            Explore Collection
                            <motion.span
                              className="ml-2 inline-block"
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              →
                            </motion.span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                </Link>
              </motion.div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animationType="fadeInUp" delay={0.4} className="text-center mt-12">
            <div className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                Thank you to everyone who has been part of this journey — for the trust, the challenges, and the shared accomplishments. We look forward to continuing this work and shaping the spaces of tomorrow.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>}

      {/* Picasso Quote Section - Enhanced with staggered animations */}
      {/* <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <AnimatedElement 
                animationType="fadeInLeft" 
                delay={0.1}
                duration={0.8}
                amount={0.2}
              >
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">
                  Good design is obvious — great design feels effortless
                </h2>
              </AnimatedElement>
              <AnimatedElement 
                animationType="fadeInLeft" 
                delay={0.3}
                duration={0.6}
                amount={0.2}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  We begin by understanding the function and purpose of each space, aligning it with the desired mood, lifestyle, or brand identity. Together with our clients, we define the look and feel, ensuring every element supports the experience they envision. To bring ideas to life clearly and collaboratively, we provide detailed visualizations and 3D renderings, helping us explore possibilities and ensure the final result is as intentional as it is beautiful.
                </p>
              </AnimatedElement>
            </div>
            <AnimatedElement
              animationType="fadeInRight"
              className="w-full rounded-lg overflow-hidden"
              delay={0.2}
              duration={0.8}
              amount={0.2}
            >
              <div className="relative w-full" style={{ minHeight: '300px', maxHeight: '500px' }}>
                <Image
                  src="/about-us/pablo-picaso-section-image.jpg"
                  alt="Inspiring interior design"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full transform transition-transform duration-500 hover:scale-105"
                  style={{ height: 'auto', maxHeight: '500px' }}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
       */}
    </div>
  )
}
