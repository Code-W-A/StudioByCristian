"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  imageUrl?: string
  imageAlt?: string
  title: string
  subtitle: string
  dynamicWords?: string[]
  className?: string
  slideshow?: boolean
  slideshowImages?: string[]
}

// Technical images from extra-from-wapp folders combined with about hero image
const technicalImages = [
  "/extra-from-wapp/Lage&Roy Institute_Phase2_Technical Detailing/Lage&Roy Institute_Phase2_Technical Detailing_page-0049.jpg",
  "/extra-from-wapp/Lage&Roy Institute_Phase2_Technical Detailing/Lage&Roy Institute_Phase2_Technical Detailing_page-0001.jpg",
  "/extra-from-wapp/A1. 02  Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 2/A1. 02  Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 2_page-0001.jpg",
  "/extra-from-wapp/A1. 01 Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 1/A1. 01 Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 1_page-0001.jpg",
  "/extra-from-wapp/A1. 00 Lage&Roy Institute_Plan Mobilare cu cote_ Parter/A1. 00 Lage&Roy Institute_Plan Mobilare cu cote_ Parter_page-0001.jpg"
]

export default function HeroSection({
  imageUrl = "",
  imageAlt = "",
  title,
  subtitle,
  dynamicWords = [],
  className = "",
  slideshow = false,
  slideshowImages = technicalImages
}: HeroSectionProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  
  // Slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Typing animation logic
  useEffect(() => {
    if (dynamicWords.length === 0) return

    const currentWord = dynamicWords[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false)
        setIsDeleting(true)
        return
      }

      if (isDeleting) {
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
        } else {
          setCurrentText(currentText.slice(0, -1))
        }
      } else {
        if (currentText === currentWord) {
          setIsWaiting(true)
        } else {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }
      }
    }, isWaiting ? 2500 : isDeleting ? 80 : 120)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, isWaiting, dynamicWords])

  // Slideshow logic - simple approach
  useEffect(() => {
    if (!slideshow || slideshowImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slideshow, slideshowImages.length])

  // Simple Mobile slideshow component
  const MobileSlideshow = () => {
    const [imageLoaded, setImageLoaded] = useState<boolean[]>(new Array(slideshowImages.length).fill(false))

    const handleImageLoad = (index: number, event: any) => {
      const newLoaded = [...imageLoaded]
      newLoaded[index] = true
      setImageLoaded(newLoaded)
    }

    return (
      <div 
        className="lg:hidden relative w-full rounded-xl overflow-hidden shadow-2xl mb-8 bg-gray-900"
        style={{ 
          height: '320px', // Increased from 256px
          minHeight: '320px'
        }}
      >
        {/* All images preloaded with smooth transitions and zoom effects */}
        {slideshowImages.map((imageSrc, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-1500 ease-in-out"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transform: index === currentImageIndex ? 'scale(1)' : 'scale(1.1)',
              zIndex: index === currentImageIndex ? 2 : 1
            }}
          >
            <Image
              src={imageSrc}
              alt={`Technical drawing ${index + 1}`}
              fill
              className="object-cover transition-transform duration-[6000ms] ease-out hover:scale-105"
              priority={index <= 1}
              onLoad={(e) => handleImageLoad(index, e)}
              style={{
                filter: index === currentImageIndex ? 'brightness(1.05) contrast(1.1)' : 'brightness(0.9)',
                transform: index === currentImageIndex ? 'scale(1.02)' : 'scale(1)'
              }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ))}
        
        {/* Enhanced indicators with animation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
          {slideshowImages.map((_, index) => (
            <div key={index} className="relative">
              <div
                className="h-1.5 rounded-full bg-white/20 transition-all duration-500"
                style={{ width: '32px' }}
              />
              <div
                className="absolute top-0 left-0 h-1.5 rounded-full bg-white shadow-lg transition-all duration-500 ease-out"
                style={{
                  width: index === currentImageIndex ? '32px' : '0px',
                  opacity: index === currentImageIndex ? 1 : 0
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Enhanced overlay for depth and style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />
        
        {/* Loading indicator for first load */}
        {!imageLoaded[currentImageIndex] && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    )
  }

  return (
    <section 
      className={`relative bg-black overflow-hidden ${className}`}
      style={{ 
        marginTop: 0, 
        paddingTop: 0,
        height: slideshow ? '100vh' : '92vh', // Slightly taller for mobile slideshow layout
        maxHeight: slideshow ? '100vh' : '92vh',
        minHeight: slideshow ? '100vh' : '92vh'
      }}
    >
      {/* Grid Pattern Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid-split" width="50" height="50" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-split)" />
        
        {/* Animated accent lines */}
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, delay: 1, ease: "easeOut" }}
        />
        <motion.line
          x1="25%"
          y1="0%"
          x2="25%"
          y2="100%"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
        />
      </svg>

      {/* Main Content Container */}
      <div className="relative z-20 flex lg:flex-row flex-col ml-4 lg:ml-8" style={{ height: slideshow ? '100vh' : '92vh' }}>
        {/* Mobile Layout: Slideshow first, then text */}
        {slideshow && (
          <div className="lg:hidden w-full px-6 pt-8 flex flex-col">
            <MobileSlideshow />
            
            {/* Mobile Text Content */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.p 
                className="text-xs font-light uppercase tracking-[0.3em] text-gray-400 mb-4"
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                {subtitle}
              </motion.p>
              
              <div className="relative">
                {/* Mobile title with dynamic typing */}
                <motion.h1 
                  className="text-2xl md:text-3xl font-extralight text-white leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{ minHeight: '80px' }}
                >
                  {/* SEO-friendly hidden text */}
                  <span className="sr-only">We design your space for living, working, relaxing, and creating</span>
                  
                  {/* Visible animated title */}
                  <span aria-hidden="true">
                    {(dynamicWords.length > 0 ? title.split(" ") : title.split(" ").slice(0, -1)).map((word, index) => (
                      <motion.span
                        key={index}
                        className="inline-block mr-3"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 1.2 + index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                    
                    {/* Dynamic word with typing effect */}
                    {dynamicWords.length > 0 && (
                      <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 1.6,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <span className="text-gray-300">
                          {currentText}
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }}
                            className="ml-1 inline-block h-[1em] w-[2px] bg-gray-300"
                          />
                        </span>
                      </motion.span>
                    )}
                  </span>
                </motion.h1>
                
                {/* Mobile accent line */}
                <motion.div
                  className="h-px bg-white mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Desktop Layout (or mobile for non-slideshow) */}
        <div className={`${slideshow ? 'hidden lg:flex' : 'flex'} w-full lg:w-1/3 items-center justify-center px-8 lg:px-16 lg:pl-8`}>
          <div className="max-w-2xl text-left">
            <motion.p 
              className="text-sm font-light uppercase tracking-[0.3em] text-gray-400 mb-8"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              {subtitle}
            </motion.p>
            
            <div className="relative">
              {/* Main title with dynamic typing */}
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                style={{ minHeight: '150px' }}
              >
                {/* SEO-friendly hidden text */}
                <span className="sr-only">We design your space for living, working, relaxing, and creating</span>
                
                {/* Visible animated title */}
                <span aria-hidden="true">
                  {(dynamicWords.length > 0 ? title.split(" ") : title.split(" ").slice(0, -1)).map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-4"
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.2 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                  
                  {/* Dynamic word with typing effect */}
                  {dynamicWords.length > 0 && (
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <span className="text-gray-300">
                        {currentText}
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                          className="ml-1 inline-block h-[1em] w-[2px] bg-gray-300"
                        />
                      </span>
                    </motion.span>
                  )}
                </span>
              </motion.h1>
              
              {/* Accent line */}
              <motion.div
                className="h-px bg-white mt-8"
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Right Side - Image or Slideshow */}
        <div className="hidden lg:block lg:w-2/3 relative">
          <motion.div
            className="absolute inset-0 m-16" // Reduced margins from m-20 to m-16 for larger size
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
              {slideshow ? (
                // Enhanced slideshow for technical images
                <div className="relative w-full h-full group">
                  {slideshowImages.map((imageSrc, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index === currentImageIndex ? 1 : 0,
                        scale: index === currentImageIndex ? 1 : 1.08
                      }}
                      transition={{ 
                        duration: 1.2,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src={imageSrc}
                        alt={`Technical drawing ${index + 1}`}
                        fill
                        className="object-contain transition-transform duration-[8000ms] ease-out"
                        priority={index === 0}
                        style={{
                          filter: index === currentImageIndex ? 'brightness(1.05) contrast(1.1) saturate(1.1)' : 'brightness(0.9)',
                          transform: index === currentImageIndex ? 'scale(1.03)' : 'scale(1)'
                        }}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Modern slideshow indicators with enhanced styling */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
                    {slideshowImages.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-700 cursor-pointer ${
                          index === currentImageIndex 
                            ? 'bg-white shadow-lg' 
                            : 'bg-white/30 hover:bg-white/60'
                        }`}
                        initial={{ width: 32, opacity: 0.3 }}
                        animate={{ 
                          width: index === currentImageIndex ? 64 : 32,
                          opacity: index === currentImageIndex ? 1 : 0.3,
                          backgroundColor: index === currentImageIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.3)'
                        }}
                        transition={{ 
                          duration: 0.7,
                          ease: "easeInOut"
                        }}
                        whileHover={{
                          opacity: 0.8,
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                  
                  {/* Enhanced overlays for better styling and depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
                  
                  {/* Subtle animated border effect */}
                  <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
                </div>
              ) : (
                // Enhanced single image (original behavior)
                <div className="relative w-full h-full group">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-105"
                    priority
                    style={{
                      filter: 'brightness(1.05) contrast(1.1)'
                    }}
                  />
                  {/* Enhanced overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
                  <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 