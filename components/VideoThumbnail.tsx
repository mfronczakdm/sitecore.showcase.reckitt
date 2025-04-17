"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface VideoThumbnailProps {
  videoUrl: string
  alt: string
}

export default function VideoThumbnail({ videoUrl, alt }: VideoThumbnailProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const generateThumbnail = () => {
      try {
        const canvas = document.createElement("canvas")
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
          const dataUrl = canvas.toDataURL("image/jpeg")
          setThumbnailUrl(dataUrl)
        }
      } catch (error) {
        console.error("Error generating thumbnail:", error)
      }
    }

    const handleLoadedData = () => {
      video.currentTime = 1 // Seek to 1 second to get a good thumbnail frame
    }

    const handleSeeked = () => {
      generateThumbnail()
      video.removeEventListener("seeked", handleSeeked)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("seeked", handleSeeked)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("seeked", handleSeeked)
    }
  }, [videoUrl])

  return (
    <>
      <video ref={videoRef} src={videoUrl} className="hidden" crossOrigin="anonymous" preload="metadata" />
      {thumbnailUrl ? (
        <div className="relative w-full h-full">
          <Image src={thumbnailUrl || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        </div>
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <div className="animate-pulse w-full h-full bg-gray-300" />
        </div>
      )}
    </>
  )
}

