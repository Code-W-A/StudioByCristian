"use client"
import ContactForm from "@/components/contact-form"
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-black/20 rotate-45" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-black/20 rotate-12" />
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-black/20 rotate-45" />
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-black/20 rotate-30" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Geometric accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent" />
        
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedElement animationType="fadeInUp">
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-black">Contact</h1>
            </div>
          </AnimatedElement>
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              Let's shape your ideas into reality
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
            
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <AnimatedElement animationType="fadeInLeft" className="space-y-8">
                {/* Headquarters */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-black/60 to-transparent" />
                  <div className="pl-8">
                    <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                      <MapPin className="h-6 w-6 mr-3 text-black" />
                      Headquarters
                    </h3>
                    <p className="text-lg text-gray-700">The Netherlands & Romania</p>
                  </div>
                </div>

                {/* Working Point */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-black/60 to-transparent" />
                  <div className="pl-8">
                    <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                      <MapPin className="h-6 w-6 mr-3 text-black" />
                      Working point:
                    </h3>
                    <p className="text-lg text-gray-700">Austria</p>
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-black/60 to-transparent" />
                  <div className="pl-8">
                    <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                      <Mail className="h-6 w-6 mr-3 text-black" />
                      Email
                    </h3>
                    <a 
                      href="mailto:office@studiobycristian.com" 
                      className="text-lg text-gray-700 hover:text-black transition-colors duration-300 border-b border-transparent hover:border-black/30"
                    >
                      office@studiobycristian.com
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-black/60 to-transparent" />
                  <div className="pl-8">
                    <h3 className="text-2xl font-bold text-black mb-6">Socials</h3>
                    <div className="flex space-x-6">
                      <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 text-gray-700 hover:text-black transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <div className="relative">
                          <Linkedin className="h-7 w-7" />
                          <div className="absolute inset-0 border border-black/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <span className="text-lg">LinkedIn</span>
                      </motion.a>
                      <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 text-gray-700 hover:text-black transition-colors duration-300"
                        whileHover={{ x:5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <div className="relative">
                          <Instagram className="h-7 w-7" />
                          <div className="absolute inset-0 border border-black/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <span className="text-lg">Instagram</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedElement animationType="fadeInRight">
                <div className="relative">
                  {/* Geometric frame */}
                  <div className="absolute -inset-4 border border-black/20 rounded-2xl" />
                  <div className="absolute -inset-2 border border-black/10 rounded-xl" />
                  
                  {/* Form container with black background */}
                  <div className="relative bg-black rounded-xl p-8 lg:p-12 border border-black/20 shadow-2xl">
                    {/* Corner accents */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                      Would you like to discuss a project?
                    </h2>
                    
                    {/* Decorative line */}
                    <div className="w-24 h-0.5 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-8" />
                    
                    <ContactForm />
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
    </div>
  )
}
