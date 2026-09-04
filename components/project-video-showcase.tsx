"use client"

import { useState, useEffect } from "react"
import type { KeyboardEvent as ReactKeyboardEvent } from "react"
import { X, Play } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import ConsentGate from "@/components/consent-gate"

interface ProjectVideoShowcaseBaseProps {
  title: string
  description: string
  aspectRatio?: "16:9" | "4:3"
  variant?: "showcase" | "walkthrough"
  category?: string
  cardDescription?: string
}

type ProjectVideoShowcaseProps = ProjectVideoShowcaseBaseProps & (
  | {
      videoId: string
      videoSrc?: never
      posterSrc?: never
    }
  | {
      videoId?: never
      videoSrc: string
      posterSrc: string
    }
)

export default function ProjectVideoShowcase(props: ProjectVideoShowcaseProps) {
  const {
    title,
    description,
    aspectRatio = "16:9",
    variant = "showcase",
    category = "Interior Renovation",
    cardDescription,
  } = props
  const [showModal, setShowModal] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const localVideoSrc = props.videoSrc
  const posterSrc = props.posterSrc
  const vimeoVideoId = props.videoId
  const isLocalVideo = typeof localVideoSrc === "string"
  const aspectRatioClassName = aspectRatio === "4:3" ? "aspect-[4/3]" : "aspect-video"
  const modalStyle = aspectRatio === "4:3"
    ? { width: "min(100%, 80rem, calc(133.333vh - 2.667rem))" }
    : undefined
  const isWalkthrough = variant === "walkthrough"

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false)
      }
    }

    if (showModal) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handlePreviewKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    openModal()
  }

  return (
    <>
      {/* Video Showcase Section */}
      <section className={isWalkthrough ? "bg-gray-50 py-16 text-black lg:py-24" : "bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20"}>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className={isWalkthrough ? "mb-16 text-center" : "mb-12 text-center"}>
            {!isWalkthrough && (
              <div className="mb-4 inline-flex h-12 w-12 rotate-45 transform items-center justify-center rounded-xl bg-black">
                <div className="h-6 w-6 -rotate-45 transform rounded bg-white" />
              </div>
            )}
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {isWalkthrough ? "Project Walkthrough" : "Project Showcase"}
            </h2>
            <p className={`${isWalkthrough ? "max-w-3xl text-gray-700" : "max-w-2xl text-gray-600"} mx-auto text-lg`}>
              {description}
            </p>
          </AnimatedElement>

          {/* Large Video Container */}
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <div
              className={isWalkthrough ? "group relative mx-auto max-w-4xl cursor-pointer" : "group relative cursor-pointer"}
              onClick={openModal}
              onKeyDown={handlePreviewKeyDown}
              role="button"
              tabIndex={0}
              aria-label={`Play ${title} video`}
            >
              {/* Video Container */}
              <div className={isWalkthrough
                ? "relative transform overflow-hidden rounded-3xl bg-black shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-2xl"
                : "relative transform overflow-hidden rounded-2xl bg-black shadow-xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl"
              }>
                {/* Play Button Overlay */}
                {!isWalkthrough && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="scale-75 transform rounded-full bg-white/90 p-6 backdrop-blur-sm transition-transform duration-300 group-hover:scale-100">
                      <Play className="ml-1 h-8 w-8 text-black" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Expand Icon */}
                <div className={`absolute z-30 rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 ${isWalkthrough ? "right-4 top-4 p-2" : "right-6 top-6 p-3"}`}>
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>

                {isWalkthrough && (
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                )}

                {/* Video Embed */}
                <div className={`relative ${aspectRatioClassName}`}>
                  {isLocalVideo ? (
                    <video
                      src={localVideoSrc}
                      poster={posterSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={`${title} video preview`}
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                    />
                  ) : isMounted ? (
                    <ConsentGate compact><iframe
                      src={`https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&background=1&player_id=0&app_id=58479`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      title={title}
                    /></ConsentGate>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                  )}
                </div>

                {isWalkthrough && (
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-black/20 via-transparent to-black/20 transition-all duration-500 md:group-hover:border-black/10" />
                )}

                {/* Info Card - Hidden animation on mobile */}
                {isWalkthrough ? (
                  <div className="absolute bottom-6 left-6 right-6 z-20 hidden translate-y-full transform rounded-2xl bg-white/95 p-6 backdrop-blur-md transition-transform duration-500 md:block md:group-hover:translate-y-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-black">{title}</h3>
                          <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">{category}</span>
                        </div>
                        <p className="mb-3 text-sm leading-relaxed text-gray-600">{cardDescription}</p>
                        <p className="text-xs text-gray-400">Click to view fullscreen</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-full transform rounded-xl bg-white/95 p-6 backdrop-blur-md transition-transform duration-500 md:group-hover:translate-y-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
                        <p className="text-sm text-gray-600">Click to view fullscreen with controls</p>
                      </div>
                      <div className="ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black">
                        <Play className="ml-0.5 h-4 w-4 text-white" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Decorative Corners - Hidden on mobile */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute bottom-4 h-8 w-8 border-b-2 border-r-2 border-white/30 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 ${isWalkthrough ? "left-4" : "right-4"}`} />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Premium Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div
            className={`relative w-full ${isWalkthrough ? "max-w-6xl" : "max-w-7xl"} ${aspectRatioClassName} bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300`}
            style={modalStyle}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close video"
              className="absolute top-4 right-4 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Info Header */}
            <div
              className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white"
              style={{ maxWidth: "calc(100% - 6rem)" }}
            >
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-sm opacity-80">{isWalkthrough ? category : "Project Showcase Video"}</p>
            </div>

            {/* Full-size Video with Controls */}
            {isLocalVideo ? (
              <video
                src={localVideoSrc}
                poster={posterSrc}
                autoPlay
                controls
                playsInline
                preload="metadata"
                aria-label={`${title} video player`}
                className="h-full w-full object-contain"
              />
            ) : (
              <ConsentGate compact><iframe
                src={`https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&loop=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Video Player"
              /></ConsentGate>
            )}
          </div>

          {/* Instructions */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
            <p>Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd> or click outside to close</p>
          </div>
        </div>
      )}
    </>
  )
} 
