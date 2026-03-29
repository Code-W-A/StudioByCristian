"use client"

import AnimatedElement from "@/components/animated-element"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  const featuredStory = {
    id: "1177752529",
    title: "Unusual Spaces",
    subtitle: "Utrecht Workplace",
    description:
      "A project story that follows the Utrecht interior from bold concept language to on-site execution and final spatial identity.",
    imageUrl: "/unusual-spaces/Utrecht - Pictures/_EWP0966.jpg",
    projectLink: "/unusual-spaces",
  }

  const videos = [
    {
      id: "1097920033",
      title: "Overveen",
      subtitle: "Private Residence",
      description: "Contemporary interior design with timeless elegance",
      projectLink: "/thijs-overveen"
    },
    {
      id: "1097919705", 
      title: "Hotel Delft",
      subtitle: "Hospitality Design",
      description: "Luxury hotel interiors crafted for memorable experiences",
      projectLink: "/bizzstay-delft"
    }
  ]
  const allStories = [featuredStory, ...videos]
  const selectedStory = allStories.find((story) => story.id === selectedVideo) ?? null

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null)
      }
    }

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedVideo])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const openModal = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <>
      <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Section Header */}
          <AnimatedElement animationType="fadeInUp" className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-32 h-32 mb-6 overflow-hidden rounded-2xl">
              <Image
                src="/by-cristian.png"
                alt="By Cristian"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Visual Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience our design philosophy through immersive project showcases
            </p>
            <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent mx-auto" />
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp" delay={0.15} className="mb-12">
            <div
              className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-black shadow-2xl transition-all duration-700 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]"
              onClick={() => openModal(featuredStory.id)}
            >
              <Image
                src={featuredStory.imageUrl}
                alt={featuredStory.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              {isMounted && (
                <iframe
                  src={`https://player.vimeo.com/video/${featuredStory.id}?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&background=1&player_id=0&app_id=58479`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                  title={featuredStory.title}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent transition-opacity duration-500 group-hover:from-black/72 group-hover:via-black/20 group-hover:to-transparent" />

              <div className="relative z-20 min-h-[360px] lg:min-h-[420px]">
                <div className="absolute bottom-6 right-6 md:hidden">
                  <Link
                    href={featuredStory.projectLink}
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    View Project
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <div className="absolute bottom-6 left-6 right-6 hidden translate-y-full rounded-2xl bg-white/95 p-6 backdrop-blur-md transition-transform duration-500 md:block md:group-hover:translate-y-0">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-black">{featuredStory.title}</h3>
                        <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                          {featuredStory.subtitle}
                        </span>
                      </div>
                      <p className="mb-3 text-sm leading-relaxed text-gray-600">
                        {featuredStory.description}
                      </p>
                      <p className="text-xs text-gray-400">Click to view fullscreen</p>
                    </div>

                    <Link
                      href={featuredStory.projectLink}
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 self-end rounded-full border-2 border-black px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      View Project
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Premium Videos Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {videos.map((video, index) => (
              <AnimatedElement
                key={video.id}
                animationType="fadeInUp"
                delay={index * 0.3}
                className="group"
              >
                <div className="relative">
                  {/* Video Container with Advanced Styling */}
                  <div 
                    className="relative bg-black rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-4xl transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-translate-y-2 cursor-pointer"
                    onClick={() => openModal(video.id)}
                  >
                    {/* Click to Expand Indicator */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Video Embed - Autoplay & No Controls */}
                    <div className="relative aspect-video">
                      {isMounted ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${video.id}?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&background=1&player_id=0&app_id=58479`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                          title={video.title}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                      )}
                    </div>
                    
                    {/* Premium Border Effect - Hidden on mobile */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-black/20 via-transparent to-black/20 md:group-hover:border-black/10 transition-all duration-500" />
                    
                    {/* Corner Accents - Hidden on mobile */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-r-2 border-b-2 border-white/30 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Info Card - Hidden animation on mobile */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 transform translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 z-20">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-black">
                              {video.title}
                            </h3>
                            <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                              {video.subtitle}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {video.description}
                          </p>
                          <p className="text-xs text-gray-400">Click to view fullscreen</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Title Section with View Project Button */}
                  <div className="mt-8 text-center">
                    <h4 className="text-lg font-semibold text-black mb-1 group-hover:text-gray-700 transition-colors duration-300">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                      {video.subtitle}
                    </p>
                    
                    {/* View Project Button */}
                    <Link 
                      href={video.projectLink}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full text-sm font-medium group/btn"
                    >
                      <span>View Project</span>
                      <svg 
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Premium Bottom Section */}
          <AnimatedElement animationType="fadeInUp" delay={0.8} className="mt-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-black/30" />
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-black/30" />
            </div>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Each project tells a unique story of transformation, creativity, and attention to detail
            </p>
          </AnimatedElement>
        </div>

      </section>

      {/* Premium Modal/Lightbox */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Info Header */}
            <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
              {selectedStory ? (
                <>
                  <h3 className="text-xl font-bold mb-1">{selectedStory.title}</h3>
                  <p className="text-sm opacity-80">{selectedStory.subtitle}</p>
                </>
              ) : null}
            </div>

            {/* Full-size Video */}
            <iframe
              src={`https://player.vimeo.com/video/${selectedVideo}?autoplay=1&loop=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              className="w-full h-full"
              title="Video Player"
            />
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
