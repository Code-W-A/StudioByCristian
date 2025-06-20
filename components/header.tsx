"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation" // Import usePathname
import { motion } from "framer-motion"

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
  const pathname = usePathname() // Get current path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700/50 bg-black text-white shadow-lg">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-white group">
          Studio <span className="font-light text-gray-300 group-hover:text-white transition-colors">by Cristian</span>
        </Link>
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white rounded-md group"
            >
              {link.label}
              {/* Subtle underline hover effect */}
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-center"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: pathname === link.href ? 1 : 0 }} // Active state underline
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-white/70 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden border-t border-gray-700/50 bg-black/95 backdrop-blur-md"
        >
          <nav className="container mx-auto flex flex-col space-y-1 px-4 py-4 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-3 text-base font-medium transition-colors
                            ${pathname === link.href ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800/50 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}
