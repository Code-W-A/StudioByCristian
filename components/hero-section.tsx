"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface ImageConfig {
  src: string
  alt?: string
  zoom?: number // Scale factor (e.g., 1.2 for 20% zoom)
  offsetX?: number // Horizontal offset in pixels
  offsetY?: number // Vertical offset in pixels
}

interface HeroSectionProps {
  imageUrl?: string
  imageAlt?: string
  title: string
  subtitle: string
  dynamicWords?: string[]
  className?: string
  slideshow?: boolean
  slideshowImageConfigs?: ImageConfig[] // New prop for individual image configs
}

// Cropped and slider images from extra-from-wapp folders
const technicalImages = [
  "/extra-from-wapp/Lage&Roy Institute Presentation 2022 Nov/lage-roy-cropped.jpg",
  "/extra-from-wapp/Lage&Roy Institute_Phase2_Technical Detailing/institute-phase-slider-cropp.jpg",
  "/extra-from-wapp/A1. 01 Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 1/A1. 01 Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 1_page-0001-cropp-slide.jpg",
  "/extra-from-wapp/A1. 00 Lage&Roy Institute_Plan Mobilare cu cote_ Parter/A1. 00 Lage&Roy Institute_Plan Mobilare cu cote_ Parter_page-0001-cropp-slider.jpg",
  "/extra-from-wapp/A1. 02  Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 2/A1. 02  Lage&Roy Institute_Plan Mobilare cu cote_ Etaj 2_page-0001.jpg"
]

// Natural image configurations without zoom or transform effects
const defaultImageConfigs: ImageConfig[] = [
  { src: technicalImages[0], zoom: 1, offsetX: 0, offsetY: 0 },
  { src: technicalImages[1], zoom: 1, offsetX: 0, offsetY: 0 },
  { src: technicalImages[2], zoom: 1, offsetX: 0, offsetY: 0 },
  { src: technicalImages[3], zoom: 1, offsetX: 0, offsetY: 0 },
  { src: technicalImages[4], zoom: 1, offsetX: 0, offsetY: 0 }
]

export default function HeroSection({
  imageUrl = "",
  imageAlt = "",
  title,
  subtitle,
  dynamicWords = [],
  className = "",
  slideshow = false,
  slideshowImageConfigs = defaultImageConfigs
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
    if (!slideshow || slideshowImageConfigs.length === 0) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImageConfigs.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slideshow, slideshowImageConfigs.length])



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
      <div className="relative z-20 flex lg:flex-row flex-col lg:ml-8" style={{ height: slideshow ? '100vh' : '92vh' }}>
        {/* Mobile Layout: Slideshow first, then text */}
        {slideshow && (
          <div className="lg:hidden w-full px-6 pt-8 flex flex-col">
            {/* Direct Mobile Slideshow */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg mb-8">
              <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
                {slideshowImageConfigs.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      index === currentImageIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                    style={{
                      filter: index === currentImageIndex ? 'blur(0px)' : 'blur(2px)',
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || `Slide ${index + 1}`}
                      fill
                      className="object-cover transition-all duration-700 ease-out"
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw"
                    />
                  </div>
                ))}
              </div>

            </div>

            {/* Mobile Text Content */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.p
                className="text-sm font-light uppercase tracking-[0.3em] text-gray-400 mb-6"
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                {subtitle}
              </motion.p>

              <div className="relative">
                {/* Mobile title with dynamic typing */}
                <motion.h1
                  className="text-3xl md:text-4xl font-extralight text-white leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{ minHeight: '120px' }}
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
                  className="h-px bg-white mt-6"
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Desktop Layout (or mobile for non-slideshow) */}
        <div className={`${slideshow ? 'hidden lg:flex' : 'flex'} w-full lg:w-1/2 items-center justify-start px-8 lg:pl-16`}>
          <div className="max-w-4xl text-left w-full">
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
                className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extralight text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                style={{ minHeight: '120px' }}
              >
                {/* SEO-friendly hidden text */}
                <span className="sr-only">We design your space for living, working, relaxing, and creating</span>

                {/* Visible animated title */}
                <span aria-hidden="true">
                  {(dynamicWords.length > 0 ? title.split(" ") : title.split(" ").slice(0, -1)).map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-3"
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
                animate={{ width: "200px" }}
                transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Right Side - Image or Slideshow */}
        <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center">
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              className="relative w-full max-w-4xl" // Dynamic size container
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              style={{
                maxWidth: '90%',     // Responsive max width
                maxHeight: '80vh'    // Increased responsive max height
              }}
            >
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-gray-100">
                {slideshow ? (
                  // Enhanced slideshow for technical images
                  <div className="relative w-full group">
                    {slideshowImageConfigs.map((config, index) => (
                      <motion.div
                        key={index}
                        className={`${index === currentImageIndex ? 'block' : 'hidden'} w-full`}
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
                          src={config.src}
                          alt={config.alt || `Technical drawing ${index + 1}`}
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain transition-transform duration-[8000ms] ease-out"
                          priority={index === 0}
                          style={{
                            filter: index === currentImageIndex ? 'brightness(1.05) contrast(1.1) saturate(1.1)' : 'brightness(0.9)',
                            transform: `scale(${config.zoom || 1})`,
                            transformOrigin: 'center center'
                          }}
                        />
                      </motion.div>
                    ))}

                    {/* Enhanced overlays for better styling and depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />
                  </div>
                ) : (
                  // Enhanced single image (original behavior)
                  <div className="relative w-full group">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain transition-transform duration-[6000ms] ease-out group-hover:scale-105"
                      priority
                      style={{
                        filter: 'brightness(1.05) contrast(1.1)'
                      }}
                    />
                    {/* Enhanced overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 pointer-events-none" />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
