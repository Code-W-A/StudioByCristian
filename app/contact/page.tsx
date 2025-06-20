"use client"
import ContactForm from "@/components/contact-form" // Assumes contact-form.tsx is styled for white bg
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"

// ... (keep existing imports and constants)

export default function ContactPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=600"
        imageAlt="Contact Us Hero"
        minHeight="50vh"
        strength={0.2}
        overlayClassName="bg-black/30"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Contact Us</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl">
            Let's discuss your next project. We're excited to hear from you.
          </p>
        </AnimatedElement>
      </ParallaxSection>

      {/* Contact Info & Form Section - White Theme */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-black">Get in Touch</h2>
                <p className="mt-2 text-gray-700">
                  Reach out to us through any of the channels below, or use the contact form.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-black" /> Headquarters
                  </h3>
                  <p className="mt-1 ml-8 text-gray-700">The Netherlands & Romania</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-black" /> Working Point
                  </h3>
                  <p className="mt-1 ml-8 text-gray-700">Austria</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-black" /> Email
                  </h3>
                  <a href="mailto:office@studiobycristian.com" className="mt-1 ml-8 text-gray-700 hover:text-black">
                    office@studiobycristian.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">Socials</h3>
                <div className="mt-3 flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                    <Linkedin className="h-7 w-7" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                    <Instagram className="h-7 w-7" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </AnimatedElement>

            {/* Contact Form - White Card on White Background */}
            <AnimatedElement
              animationType="fadeInRight"
              className="rounded-lg border border-gray-300 bg-white p-6 shadow-lg sm:p-8 lg:p-10"
            >
              <h2 className="text-2xl font-semibold text-black">Would you like to discuss a project?</h2>
              <div className="mt-6">
                <ContactForm /> {/* Form is styled for white background */}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  )
}
