"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/design", label: "Design" },
  { href: "/furniture-production", label: "Furniture Production" },
  { href: "/turn-key-management", label: "Turn Key Management" },
  { href: "/work-archive", label: "Work Archive" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700/30 bg-black/95 backdrop-blur-md text-white shadow-2xl">
      {/* Subtle geometric accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Enhanced Logo */}
        <Link href="/" className="text-2xl font-bold text-white group flex items-center space-x-3">
          {/* Geometric Logo Element */}
          <div className="relative">
            <div className="w-8 h-8 border-2 border-white/60 rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-out" />
            <div className="absolute inset-0 w-8 h-8 border border-white/30 rotate-45 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div>
            Studio <span className="font-light text-gray-300 group-hover:text-white transition-colors duration-300">by Cristian</span>
          </div>
        </Link>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={link.href}
                className="relative px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white rounded-lg group overflow-hidden"
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg" />
                
                {/* Active state indicator */}
                {pathname === link.href && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg border border-white/20"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* Text */}
                <span className="relative z-10">{link.label}</span>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-1 left-4 right-4 h-px bg-white/70"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: pathname === link.href ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                

              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="relative text-gray-300 hover:text-white hover:bg-white/10 rounded-lg border border-transparent hover:border-white/20 transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t border-gray-700/30 bg-black/98 backdrop-blur-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <nav className="container mx-auto flex flex-col px-4 py-6 sm:px-6 lg:px-8 relative">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`relative block rounded-lg px-4 py-4 text-base font-medium transition-all duration-300 group overflow-hidden
                                ${pathname === link.href 
                                  ? "bg-white/10 text-white border border-white/20" 
                                  : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10"}`}
                  >
                    {/* Geometric accent */}
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 border border-white/40 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="ml-6">{link.label}</span>
                    
                    {/* Right arrow */}
                    <motion.div
                      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
