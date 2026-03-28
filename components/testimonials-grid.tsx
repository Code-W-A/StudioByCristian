"use client"

import Link from "next/link"
import AnimatedElement from "@/components/animated-element"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Testimonial } from "@/lib/testimonials-data"

interface TestimonialsGridProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
  description?: string
  className?: string
  backgroundColor?: "white" | "gray"
  columns?: 1 | 2 | 3
}

export default function TestimonialsGrid({
  testimonials,
  title = "Client Testimonials",
  subtitle = "What our clients say about working with Studio by Cristian",
  description,
  className = "",
  backgroundColor = "white",
  columns = 2
}: TestimonialsGridProps) {
  const gridCols = columns === 1 ? "grid-cols-1" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
  const bgColor = backgroundColor === "white" ? "bg-white" : "bg-gray-50"
  const cardBg = backgroundColor === "white" ? "bg-gray-50" : "bg-white"

  return (
    <section className={`py-16 lg:py-24 ${bgColor} text-black ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {subtitle}
          </p>
          {description && (
            <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </AnimatedElement>

        <div className={`grid ${gridCols} gap-8`}>
          {testimonials.map((testimonial, index) => (
            <AnimatedElement
              key={index}
              animationType="fadeInUp"
              delay={index * 0.1}
            >
              <motion.div
                className={`${cardBg} p-8 rounded-xl shadow-lg relative`}
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
  )
} 