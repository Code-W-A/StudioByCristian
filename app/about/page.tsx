"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/components/icons/arrow-right"
import AnimatedElement from "@/components/animated-element"
import HeroSection from "@/components/hero-section"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const sections = [
  {
    title: "Good design is obvious — great design feels effortless.",
    content:
      "We begin by understanding the function and purpose of each space, aligning it with the desired mood, lifestyle, or brand identity. Together with our clients, we define the look and feel, ensuring every element supports the experience they envision. To bring ideas to life clearly and collaboratively, we provide detailed visualizations and 3D renderings, helping us explore possibilities and ensure the final result is as intentional as it is beautiful.",
    imageSrc: "/about-us/good-design-is-obvious.jpg",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Design is where science meets art — and both serve function.",
    content: [
      "We approach each renovation with careful analysis and technical precision. After evaluating the space and its possibilities, we propose tailored solutions, including custom furniture, all represented through clear technical drawings and documentation.",
      "By the end of the design phase, our clients have everything they need to execute the project independently — or, if they prefer, we can continue supporting the project through full coordination, implementation, and turn-key delivery."
    ],
    imageSrc: "/about-us/Design-where-science-art-break.jpg",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Where ideas take shape — with precision, creativity, and craftsmanship.",
    content:
      "When you choose to work with us on custom furniture, you're entering the final and most tangible stage of the design process: transforming vision into reality. We collaborate with skilled makers and advanced production facilities capable of working with an extensive range of materials — including solid wood, veneer, HPL, MDF, professional lacquers, steel, glass, marble, quartz, and more. We also handle upholstery and fabric production, allowing for full flexibility in both function and style. Every piece is the result of close collaboration between our engineers, project managers, and production partners — all working together to deliver tailored solutions, no matter how ambitious the idea. If you can imagine it, we can make it real.",
    imageSrc: "/about-us/furniture-production-section.jpg",
    linkText: "Learn More",
    linkHref: "#",
  },
]

// Dynamic words for typing animation
const dynamicWords = ["relaxing", "living", "working", "creating"]

// Testimonials data
const testimonialsData = [
  {
    name: "John Doe",
    company: "Apple Inc.",
    role: "Professional & Talent",
    quote: "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity and making it work.",
    type: "Stunning Design"
  },
  {
    name: "Jessica Smith", 
    company: "Amazon co.",
    role: "Design Director",
    quote: "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity and making it work.",
    type: "Timeless Design"
  },
  {
    name: "Nathan Gordon",
    company: "Microsoft corp.",
    role: "Senior Architect",
    quote: "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity and making it work.",
    type: "Best Customer Experience"
  },
  {
    name: "Rebecca Smith",
    company: "Salesforce Inc.",
    role: "VP of Design",
    quote: "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity and making it work.",
    type: "Innovation Excellence"
  }
]

export default function AboutUsPage() {
  return (
    <div className="bg-white text-black" style={{ margin: 0, padding: 0 }}>
      {/* Modern Hero Section */}
      <HeroSection
        imageUrl="/about-us/about-us-hero-section-image.jpg"
        imageAlt="Studio by Cristian - Modern Architecture"
        title="We Design Your Space for"
        subtitle="About Us"
        dynamicWords={dynamicWords}
      />

      {/* What We Do Section - White Theme */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <AnimatedElement
          animationType="fadeInUp"
          className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
          delay={0.1}
          duration={0.7}
          amount={0.3}
        >
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Furnish. Design. Renovate. Anywhere.
          </h2>
        </AnimatedElement>
        <AnimatedElement
          animationType="fadeInUp"
          className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
          delay={0.3}
          duration={0.6}
          amount={0.3}
        >
          <p className="mt-6 text-lg text-gray-700">
            At Studio byCristian, we offer complete, high-quality interior solutions for residential, hospitality, and commercial spaces — locally and internationally. Whether you need a custom piece, an entire home furnished, or a business space redesigned, we manage every detail with care and precision.
          </p>
        </AnimatedElement>
      </section>

      {/* Content Sections - Enhanced Animations */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`py-12 lg:py-20 ${index % 2 === 0 ? "bg-white text-black" : "bg-gray-50 text-black"}`}
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:grid-flow-row-dense" : ""}`}
            >
              <AnimatedElement
                animationType={index % 2 === 1 ? "fadeInLeft" : "fadeInRight"}
                className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                delay={0.2}
                duration={0.8}
                amount={0.2}
              >
                <div className="inline-block">
                  <Image
                    src={section.imageSrc}
                    alt={section.title}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
                    style={{ height: 'auto', maxWidth: index === 0 || index === 2 ? '550px' : '500px', width: '100%' }}
                  />
                </div>
              </AnimatedElement>
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
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
            <p className="text-lg text-gray-600 mb-8">
              What our clients say about working with Studio by Cristian
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <AnimatedElement
                key={index}
                animationType="fadeInUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg relative"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="absolute top-4 right-4 text-gray-300">
                    <Quote className="w-8 h-8" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-black mb-1">{testimonial.type}</div>
                  </div>

                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-black text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500 font-medium">{testimonial.company}</div>
                  </div>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Picasso Quote Section - Enhanced with staggered animations */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <AnimatedElement 
                animationType="fadeInLeft" 
                delay={0.1}
                duration={0.8}
                amount={0.2}
              >
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Everything you can imagine is real
                </h2>
              </AnimatedElement>
              <AnimatedElement 
                animationType="fadeInLeft" 
                delay={0.3}
                duration={0.6}
                amount={0.2}
              >
                <p className="mt-2 text-xl text-gray-700">Pablo Picasso</p>
              </AnimatedElement>
            </div>
            <AnimatedElement
              animationType="fadeInRight"
              className="w-full rounded-lg shadow-xl overflow-hidden"
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
    </div>
  )
}
