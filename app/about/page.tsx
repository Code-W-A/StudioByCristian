"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/components/icons/arrow-right"
import AnimatedElement from "@/components/animated-element"
import HeroSection from "@/components/hero-section"


const sections = [
  {
    title: "Good design is obvious. Great design is transparent.",
    content:
      "First, we establish the optimal functions for the space and decide upon the desired look and feel alongside our clients. We provide computer generated visualizations to support us in reaching the best outcome for every project.",
    imageSrc: "/about-us/good-design-is-obvious.jpg",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Design is where science and art break even.",
    content: [
      "We carefully analyze particular aspects of the available solutions and propose suitable custom furniture, represented through technical drawings.",
      "At the end of the design phase our clients possess all the information required to implement the project independently If they choose so, or they can continue our collaboration throughout the next stages, up to the project completion."
    ],
    imageSrc: "/about-us/Design-where-science-art-break.jpg",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Furniture Production",
    content:
      "Upon choosing to collaborate with our Furniture Production department, our master carpenters take on the final and most rewarding stage of our mission, shaping ideas into reality. We work with any type of materials, our machineries are ready to take on any challenge and any type of work such as wood, veneer, HPL, MDF, professional paint, steel, glass, marble, quartz and the sky is the limit. Moreover, we also produce any type of materials as well, including diverse fabrics. All of this is only possible through the team work of our engineers, project managers and partners. Anything you can imagine is real!",
    imageSrc: "/about-us/furniture-production-section.jpg",
    linkText: "Learn More",
    linkHref: "#",
  },
]

// Dynamic words for typing animation
const dynamicWords = ["relaxing", "living", "working", "creating"]

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

      {/* Architecture Epoch Section - White Theme */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <AnimatedElement
          animationType="fadeInUp"
          className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
          delay={0.1}
          duration={0.7}
          amount={0.3}
        >
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Architecture is the will of an epoch translated into space.
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
            We offer services ranging from Interior Architecture & Design, innovative Custom Furniture Design & Production to Turn Key Management. Whether it be a residential project or a public space you need to work on, we come up with the right solution for you.
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
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:grid-flow-row-dense" : ""}`}
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
                    style={{ height: 'auto', maxWidth: '400px', width: '100%' }}
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
