"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/components/icons/arrow-right"
import AnimatedElement from "@/components/animated-element"
// No motion needed here if not animating text within sections specifically
import ParallaxSection from "@/components/parallax-section"

const sections = [
  {
    title: "Good design is obvious. Great design is transparent.",
    content:
      "First, we establish the optimal functions for the space and decide upon the architectural possibilities. Based on this input, we develop computer generated visualizations to support us in reaching the best outcome for your project.",
    imageQuery: "modern living room with minimalist furniture",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Design is where science and art break even.",
    content:
      "We develop concepts, search for sustainable solutions and propose suitable custom furniture, accessories, lighting, and surface finishes. \n\nAt the end of the design phase our clients possess all the information necessary to implement the project independently or choose to continue with our support and collaboration throughout the next stages, up to the project completion.",
    imageQuery: "architectural sketch or technical drawing of furniture",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Furniture Production",
    content:
      "Upon choosing to collaborate with our Furniture Production department, our clients enable our team of skilled artisans to fully contribute to our mission, shaping ideas into reality. We work with any type of material, from wood, laminates, metal, and solid surfaces to fabrics, glass, marble, quartz and the sky is the limit. Moreover, we also produce custom furniture pieces and collaborate with some of the world's top furniture brands. Our team includes designers, project managers and partners. Anything you can imagine is real!",
    imageQuery: "craftsman working on wood furniture in workshop",
    linkText: "Learn More",
    linkHref: "#",
  },
]

export default function AboutUsPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=800"
        imageAlt="About Us Hero Background"
        minHeight="60vh" // Or adjust as needed
        strength={0.25}
        overlayClassName="bg-black/30"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* The original hero had a grid, we'll simplify for a full-width parallax hero */}
          {/* You can add back a grid or more complex layout within the ParallaxSection children if needed */}
          <AnimatedElement animationType="fadeInUp" className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-200">About Us</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              We design your space for living!
            </h1>
          </AnimatedElement>
        </div>
      </ParallaxSection>

      {/* Architecture Epoch Section - White Theme */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <AnimatedElement
          animationType="fadeInUp"
          className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Architecture is the will of an epoch translated into space.
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            We offer services ranging from Interior Architecture & Design Concept Development up to Turn Key
            Management...
          </p>
        </AnimatedElement>
      </section>

      {/* Content Sections - Alternating (now all on white or light gray) */}
      {sections.map((section, index) => (
        <section
          key={index}
          // Alternating white and light gray for subtle distinction
          className={`py-12 lg:py-20 ${index % 2 === 0 ? "bg-white text-black" : "bg-gray-50 text-black"}`}
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:grid-flow-row-dense" : ""}`}
            >
              <AnimatedElement
                animationType={index % 2 === 1 ? "fadeInLeft" : "fadeInRight"}
                className={`aspect-video w-full overflow-hidden rounded-lg shadow-xl ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <Image
                  src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(section.imageQuery)}`}
                  alt={section.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </AnimatedElement>
              <AnimatedElement
                animationType={index % 2 === 1 ? "fadeInRight" : "fadeInLeft"}
                className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <h3 className={`text-2xl font-bold tracking-tight sm:text-3xl text-black`}>{section.title}</h3>
                <p className={`mt-4 whitespace-pre-line text-gray-700`}>{section.content}</p>
                {section.linkText && section.linkHref && (
                  <Button asChild variant="link" className={`mt-6 px-0 text-black hover:text-gray-700`}>
                    <Link href={section.linkHref}>
                      {section.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </AnimatedElement>
            </div>
          </div>
        </section>
      ))}

      {/* Picasso Quote Section - White Theme */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Everything you can imagine is real
              </h2>
              <p className="mt-2 text-xl text-gray-700">- PABLO PICASSO</p>
            </AnimatedElement>
            <AnimatedElement
              animationType="fadeInRight"
              className="aspect-video w-full overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                src="/placeholder.svg?width=800&height=600"
                alt="Inspiring interior design"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  )
}
