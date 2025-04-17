"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from "lucide-react"

export interface VideoItem {
  id: string
  title: string
  videoUrl: string
  thumbnailUrl?: string
}

interface VideoCarouselProps {
  videos: VideoItem[]
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const activeVideo = videos[activeVideoIndex]

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

  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      if (!document.fullscreenElement) {
        videoContainerRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`)
        })
      } else {
        document.exitFullscreen()
      }
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const changeVideo = (index: number) => {
    setActiveVideoIndex(index)
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const nextVideo = () => {
    const newIndex = (activeVideoIndex + 1) % videos.length
    changeVideo(newIndex)
  }

  const prevVideo = () => {
    const newIndex = (activeVideoIndex - 1 + videos.length) % videos.length
    changeVideo(newIndex)
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

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto" ref={containerRef}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Video thumbnails slider (left side on desktop) */}
        <div className="md:w-1/4 order-2 md:order-1">
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[400px] hide-scrollbar">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => changeVideo(index)}
                className={`relative min-w-[160px] md:min-w-0 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  activeVideoIndex === index
                    ? "border-sitecore-red scale-[1.02]"
                    : "border-transparent hover:border-gray-300"
                }`}
                aria-label={`Play video: ${video.title}`}
              >
                {video.thumbnailUrl ? (
                  <Image
                    src={video.thumbnailUrl || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <Play className="text-gray-500" size={24} />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  {activeVideoIndex === index && isPlaying ? (
                    <Pause className="text-white" size={24} />
                  ) : (
                    <Play className="text-white" size={24} />
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                  <p className="text-white text-xs truncate">{video.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile navigation arrows */}
          <div className="flex justify-center mt-4 space-x-4 md:hidden">
            <button
              onClick={prevVideo}
              className="p-2 rounded-full bg-gray-200 text-gray-800"
              aria-label="Previous video"
            >
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextVideo} className="p-2 rounded-full bg-gray-200 text-gray-800" aria-label="Next video">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Main video player (right side on desktop) */}
        <div className="md:w-3/4 order-1 md:order-2" ref={videoContainerRef}>
          <div className="video-container rounded-lg overflow-hidden shadow-lg">
            <video
              ref={videoRef}
              src={activeVideo.videoUrl}
              muted={isMuted}
              loop
              playsInline
              className="w-full h-full object-cover"
              aria-label={activeVideo.title}
              onEnded={handleVideoEnd}
            />
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">{activeVideo.title}</h3>

            <div className="flex flex-wrap gap-2">
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

              <button
                onClick={toggleFullscreen}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
                aria-label="Toggle fullscreen"
              >
                <Maximize size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

