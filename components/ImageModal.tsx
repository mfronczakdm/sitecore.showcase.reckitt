"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
  imageUrl: string
  title: string
  onClose: () => void
}

export default function ImageModal({ imageUrl, title, onClose }: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Close modal on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="font-medium truncate">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="relative h-[70vh] bg-gray-50">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-sitecore-red rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain"
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  )
}

