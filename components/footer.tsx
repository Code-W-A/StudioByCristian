"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const menuLinks = [
  { href: "/design", label: "Design" },
  { href: "/furniture-production", label: "Furniture Production" },
  { href: "/turn-key-management", label: "Turn Key" },
  { href: "/work-archive", label: "Work Archive" },
  { href: "/about", label: "Credentials" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Instagram, label: "Instagram" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-700/30 bg-black text-gray-300 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-1/4 w-32 h-32 border border-white/10 rotate-45" />
        <div className="absolute bottom-16 right-1/3 w-24 h-24 border border-white/10 rotate-12" />
        <div className="absolute top-1/2 right-8 w-16 h-16 border border-white/10 rotate-45" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Studio Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/sigla/StudiobyCristian-sigla.png"
                alt="Studio byCristian"
                width={400}
                height={100}
                className="h-16 w-auto"
              />
            </div>

            {/* Philosophy */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Philosophy</h4>
              <p className="text-3xl font-light italic text-gray-400 leading-tight">
                &ldquo;Shaping <span className="font-semibold text-white">ideas</span> into 
                <br />
                <span className="font-semibold text-white">timeless spaces</span>&rdquo;
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-white flex-shrink-0 group-hover:text-gray-300 transition-colors" />
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="font-medium">Headquarters: The Netherlands & Romania</div>
                    <div>Working Point: Austria</div>
                  </div>
                </div>
                <div className="flex items-center group">
                  <Mail className="h-5 w-5 mr-3 text-white flex-shrink-0 group-hover:text-gray-300 transition-colors" />
                  <a 
                    href="mailto:office@studiobycristian.com" 
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white/30"
                  >
                    office@studiobycristian.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Menu Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-white/60 rotate-45 mr-3" />
              Menu
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <div className="w-1 h-1 bg-gray-600 mr-3 group-hover:bg-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-white/30 transition-all duration-300">
                      {link.label}
                    </span>
                    <motion.span
                      className="ml-2 opacity-0 group-hover:opacity-100"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-white/60 rotate-45 mr-3" />
              Social
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.li
                    key={social.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <div className="relative mr-3">
                        <Icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 border border-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span className="border-b border-transparent group-hover:border-white/30 transition-all duration-300">
                        {social.label}
                      </span>
                    </a>
                  </motion.li>
                )
              })}
            </ul>

            {/* Additional Contact CTA */}
            <div className="mt-8 p-4 border border-gray-700/50 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                Ready to start your project?
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center mt-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Get in touch
                <motion.span
                  className="ml-2"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              Copyright {currentYear} © Studio byCristian. All rights reserved.
            </p>
            
            {/* Geometric accent */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-600 rotate-45" />
              <div className="w-1 h-1 bg-gray-600 rotate-45" />
              <div className="w-2 h-2 bg-gray-600 rotate-45" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  )
}
