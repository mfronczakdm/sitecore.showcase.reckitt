"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VideoShowcaseProps {
  videoUrl: string
  title: string
}

export default function VideoShowcase({ videoUrl, title }: VideoShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !isPlaying && videoRef.current) {
          videoRef.current.play()
          setIsPlaying(true)
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [isPlaying])

  return (
    <div className="max-w-4xl mx-auto" ref={containerRef}>
      <div className="video-container rounded-lg overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          src={videoUrl}
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-label={title}
        />
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-sitecore-red text-white hover:bg-opacity-90 transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <button
          onClick={toggleMute}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  )
}

