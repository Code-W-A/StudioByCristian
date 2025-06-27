"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// --- Enhanced Hero Section Data ---
const heroNavItems = [
  {
    id: "design",
    title: "Interior Design",
    subtitle: "Creative direction that elevates your space — and how you experience it.",
    imageUrl: "/home-page/Design.jpg.jpeg",
    link: "/design",
    cta: "Explore Design",
  },
  {
    id: "furniture",
    title: "Custom Furniture",
    subtitle: "Tailored pieces, built for your life and your space.",
    imageUrl: "/home-page/Furniture-Production-1-scaled.jpg.jpeg",
    link: "/furniture-production",
    cta: "Discover Craftsmanship",
  },
  {
    id: "turnkey",
    title: "Interior Renovation",
    subtitle: "Turn-key transformations, managed with precision.",
    imageUrl: "/home-page/Turn-Key-Management-2-scaled.jpg.jpeg",
    link: "/turn-key-management",
    cta: "Learn About Turn Key",
  },
  {
    id: "archive",
    title: "Work Archive",
    subtitle: "A legacy of transformative projects and inspired spaces.",
    imageUrl: "/home-page/Credentials-scaled.jpg.jpeg",
    link: "/work-archive",
    cta: "View Our Portfolio",
  },
]

export default function HeroSectionHomepage() {
  const [activeHero, setActiveHero] = useState(heroNavItems[0])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [autoTransition, setAutoTransition] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Smooth parallax scroll
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  // Auto transition logic
  useEffect(() => {
    if (!autoTransition) return

    const startAutoTransition = () => {
      intervalRef.current = setInterval(() => {
        setActiveHero(current => {
          const currentIndex = heroNavItems.findIndex(item => item.id === current.id)
          const nextIndex = (currentIndex + 1) % heroNavItems.length
          return heroNavItems[nextIndex]
        })
      }, 5000) // Change every 5 seconds
    }

    startAutoTransition()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoTransition])

  // Enhanced transition handler
  const handleHeroChange = (newHero: typeof heroNavItems[0]) => {
    if (newHero.id === activeHero.id || isTransitioning) return
    
    // Pause auto transition when user interacts
    setAutoTransition(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    setIsTransitioning(true)
    setActiveHero(newHero)
    
    // Reset transition state and resume auto transition after delay
    setTimeout(() => {
      setIsTransitioning(false)
      // Resume auto transition after 10 seconds of inactivity
      setTimeout(() => setAutoTransition(true), 10000)
    }, 1000)
  }

  return (
    <section ref={heroRef} className="relative h-[calc(100vh-5rem)] min-h-[500px] flex flex-col overflow-hidden">
      {/* Background Images with Enhanced Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHero.id}
            className="absolute inset-0"
            initial={{ 
              opacity: 0,
              scale: 1.05,
              filter: "blur(8px) brightness(0.8)"
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              filter: "blur(0px) brightness(1)"
            }}
            exit={{ 
              opacity: 0,
              scale: 1.02,
              filter: "blur(4px) brightness(0.7)"
            }}
            transition={{ 
              duration: 1.0,
              ease: [0.4, 0.0, 0.2, 1.0], // Smoother easing
              opacity: { duration: 0.7, ease: "easeInOut" },
              scale: { duration: 1.0, ease: "easeOut" },
              filter: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            {/* Image Container with Parallax */}
            <motion.div
              style={{ 
                y: imageY
              }}
              className="w-full h-full relative"
            >
              <Image
                src={activeHero.imageUrl}
                alt={activeHero.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              
              {/* Gradient Overlay with Smooth Transition */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/25"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              />
              
              {/* Subtle Animated Geometric Elements */}
              <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rotate-45" />
                <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-white/15 rotate-12" />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-20 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start h-full pt-16 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHero.id + "-content"}
            initial={{ 
              opacity: 0, 
              y: 40,
              filter: "blur(8px)"
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: "blur(0px)"
            }}
            exit={{ 
              opacity: 0, 
              y: -20,
              filter: "blur(4px)"
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
            className="max-w-3xl text-white"
          >
            {/* Title with Staggered Animation */}
            <motion.h1 
              className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {activeHero.title}
            </motion.h1>
            
            {/* Subtitle with Delayed Animation */}
            <motion.p 
              className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {activeHero.subtitle}
            </motion.p>
            
            {/* CTA Button with Sophisticated Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="mt-10 bg-white text-black hover:bg-gray-100 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              >
                <Link href={activeHero.link} className="flex items-center">
                  {activeHero.cta}
                  <motion.span
                    className="ml-2 inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Navigation with Modern Design */}
      <div className="relative z-20 mt-auto w-full pb-8 sm:pb-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {heroNavItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleHeroChange(item)}
                onMouseEnter={() => !isTransitioning && handleHeroChange(item)}
                disabled={isTransitioning}
                className={`relative p-4 sm:p-5 text-left rounded-xl transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 backdrop-blur-md border overflow-hidden group
                  ${activeHero.id === item.id 
                    ? "bg-white/20 border-white/30 shadow-xl" 
                    : "bg-white/5 border-white/10 hover:bg-white/15 hover:border-white/20 shadow-lg"
                  }`}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + index * 0.1
                }}
              >
                {/* Active Indicator */}
                {activeHero.id === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-semibold text-sm sm:text-base text-white mb-1 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className={`h-0.5 w-0 bg-white/60 transition-all duration-500 group-hover:w-full ${activeHero.id === item.id ? 'w-full' : ''}`} />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

  

      {/* Loading Indicator */}
      {isTransitioning && (
        <motion.div
          className="absolute top-4 right-4 z-30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </motion.div>
      )}
    </section>
  )
} 