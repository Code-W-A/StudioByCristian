"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Quote } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"
import { allTestimonials } from "@/lib/testimonials-data"
import AboutIntroText from "@/components/about-intro-text"

const credentialsData = {
  title: "Credentials",
  category: "Professional & Talent",
  heroImage: "/unusual-spaces/Utrecht - Pictures/_EWP0966.jpg",
  tagline: "Good design is obvious — great design feels effortless.",
  profileImage: "/unusual-spaces/Utrecht - Pictures/_EWP0966.jpg"
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
      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
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
                <AboutIntroText />
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
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
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
                    Professional Design and Build Excellence
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    From design-led interiors to complex execution on site, we combine architectural clarity, custom fabrication, and disciplined project management in one studio. Projects like Unusual Spaces reflect how we translate bold concepts into coherent built environments through technical development, bespoke production, and precise coordination from start to finish.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-black mb-2">64+</div>
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
                  className="bg-gray-50 p-8 rounded-xl shadow-lg relative"
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
                  <h3 className="text-xl font-bold text-black mb-4">Interior Design and Planning</h3>
                  <p className="text-gray-600 mb-4">
                    Spatial concepts, planning logic, and material direction developed to support both the experience and the buildability of a project.
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
                  <h3 className="text-xl font-bold text-black mb-4">Custom Furniture</h3>
                  <p className="text-gray-600 mb-4">
                    Tailored pieces, built for your life and your space — every piece made to order.
                  </p>
                  <div className="text-black font-medium group-hover:text-gray-700 transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInUp" delay={0.3}>
              <Link href="/interior-renovation" className="group block">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Interior Renovation & General Contracting</h3>
                  <p className="text-gray-600 mb-4">
                    Turn-key transformations coordinated with precision, from technical detailing and contractor management to the final installed result.
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
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
                starting to dream, we'd love to hear from you. Reach out to discuss your project, and let's explore the
                possibilities together.
              </p>
              <div className="space-y-4 text-gray-700">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Headquarters:</strong> The Netherlands<br />
                    
                  </p>
                  <div className="flex space-x-4">
                    <Link href="https://ro.linkedin.com/company/studiobycristian" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="https://www.instagram.com/studiobycristian/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
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

      {/* Back Button Bottom */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
