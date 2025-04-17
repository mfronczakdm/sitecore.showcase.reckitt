"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import type { FeatureItem } from "@/types"

interface FeatureAccordionProps {
  data: FeatureItem[]
}

export default function FeatureAccordion({ data }: FeatureAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const resetAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length)
            return 0
          }
          return prev + 2 // Increment by 2% every 100ms to complete in 5 seconds
        })
      }
    }, 100)
  }

  useEffect(() => {
    resetAutoRotation()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [isPaused, data.length])

  const handleItemClick = (index: number) => {
    setActiveIndex(index)
    setProgress(0)
    setIsPaused(true)

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 10000) // Resume after 10 seconds of inactivity
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 2000) // Resume after 2 seconds
  }

  return (
    <div className="flex flex-col md:flex-row gap-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Left panel - Category selection */}
      <div className="md:w-1/3">
        <div className="space-y-2">
          {data.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(index)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                activeIndex === index ? "bg-sitecore-red text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              aria-selected={activeIndex === index}
            >
              <h3 className="font-medium">{item.title}</h3>
            </button>
          ))}
        </div>
      </div>

      {/* Right panel - Content display */}
      <div className="md:w-2/3">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="progress-bar">
            <div className="progress-bar-inner" style={{ width: `${progress}%` }} />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">{data[activeIndex].title}</h3>
            <p className="text-gray-700 mb-6">{data[activeIndex].description}</p>

            <div className="relative aspect-video bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={data[activeIndex].imageUrl || "/placeholder.svg"}
                alt={data[activeIndex].title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

