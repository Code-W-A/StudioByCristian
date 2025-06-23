"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  imageUrl: string
  imageAlt: string
  title: string
  subtitle: string
  dynamicWords?: string[]
  className?: string
}

export default function HeroSection({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  dynamicWords = [],
  className = "",
}: HeroSectionProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

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

  return (
    <section 
      className={`relative bg-black overflow-hidden ${className}`}
      style={{ 
        marginTop: 0, 
        paddingTop: 0,
        height: '92vh',
        maxHeight: '92vh',
        minHeight: '92vh'
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
       <div className="relative z-20 flex" style={{ height: '92vh' }}>
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-16">
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
                  {title.split(" ").slice(0, -1).map((word, index) => (
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

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
                     <motion.div
             className="absolute inset-0 m-20"
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
           >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay for better integration */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div
          className="w-px h-16 bg-white/50"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <p className="text-xs text-white/70 mt-2 tracking-widest">SCROLL</p>
      </motion.div>
    </section>
  )
} 