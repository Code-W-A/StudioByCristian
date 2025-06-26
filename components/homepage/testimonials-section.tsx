"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
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

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 text-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-black rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-black rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-black rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border border-black rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
            Client Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Good design is a universal language. Here's what industry professionals and satisfied clients 
            say about working with Studio by Cristian.
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement
              key={index}
              animationType="fadeInUp"
              delay={index * 0.1}
            >
              <motion.div
                className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg relative group"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gray-200 group-hover:text-gray-300 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>
                
                {/* Stars and Type */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {testimonial.type}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-black text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-sm font-medium">{testimonial.company}</div>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>

        {/* CTA */}
        <AnimatedElement animationType="fadeInUp" delay={0.5} className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/credentials" 
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              View All Credentials
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </AnimatedElement>
      </div>
    </section>
  )
} 