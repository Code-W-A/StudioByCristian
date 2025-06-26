"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Star, Quote } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

const credentialsData = {
  title: "Credentials",
  category: "Professional & Talent",
  heroImage: "/STUDIO BY CRISTIAN/credentials/Credentials-Header-2.jpg.jpeg",
  tagline: "Good design is a universal language.",
  testimonials: [
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
  ],
  profileImage: "/STUDIO BY CRISTIAN/credentials/jane-005.jpg.jpeg"
}

export default function CredentialsPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl={credentialsData.heroImage}
        imageAlt={credentialsData.title + " Hero Image"}
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{credentialsData.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{credentialsData.title}</h1>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl">{credentialsData.tagline}</p>
        </AnimatedElement>
      </ParallaxSection>

      {/* Back Button */}
      <section className="pt-12 pb-6 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
              Professional Excellence & Client Trust
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our work speaks through the voices of satisfied clients and industry professionals who have experienced 
                the Studio by Cristian difference. From concept to completion, we deliver exceptional design solutions 
                that exceed expectations and create lasting value.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Profile Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100">
                <Image
                  src={credentialsData.profileImage}
                  alt="Studio by Cristian Professional Profile"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/5' }}
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-4">
                    Professional Design Excellence
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    With years of experience in creating exceptional spaces, our team brings together 
                    innovative design thinking and masterful execution. Every project is an opportunity 
                    to push boundaries and create something truly remarkable.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-black mb-2">50+</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-black mb-2">100%</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white text-black">
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
            {credentialsData.testimonials.map((testimonial, index) => (
              <AnimatedElement
                key={index}
                animationType="fadeInUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-gray-50 p-8 rounded-xl shadow-lg relative"
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

      {/* Professional Services Section */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive design solutions tailored to your needs
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement animationType="fadeInUp" delay={0.1}>
              <Link href="/concept-design" className="group block">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Design Projects</h3>
                  <p className="text-gray-600 mb-4">
                    Innovative concepts that push the boundaries of design and create inspiring spaces.
                  </p>
                  <div className="text-black font-medium group-hover:text-gray-700 transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <Link href="/furniture-production" className="group block">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Furniture Production</h3>
                  <p className="text-gray-600 mb-4">
                    Custom-made furniture that defines your space with precision and artistry.
                  </p>
                  <div className="text-black font-medium group-hover:text-gray-700 transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInUp" delay={0.3}>
              <Link href="/turn-key-management" className="group block">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Turn Key Management</h3>
                  <p className="text-gray-600 mb-4">
                    Complete project management from concept to completion with exceptional results.
                  </p>
                  <div className="text-black font-medium group-hover:text-gray-700 transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Would you like to discuss a project?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
                starting to dream, we'd love to hear from you. Reach out to discuss your project, and let's explore the
                possibilities together.
              </p>
              <div className="space-y-4 text-gray-700">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Headquarters:</strong> The Netherlands & Romania<br />
                    <strong>Working Point:</strong> Austria
                  </p>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
                  </div>
                  <Link 
                    href="mailto:office@studiobycristian.com" 
                    className="block text-gray-700 hover:text-black transition-colors"
                  >
                    office@studiobycristian.com
                  </Link>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight">
              <motion.div
                className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                <ContactForm />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Back Button Bottom */}
      <section className="pt-6 pb-12 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
