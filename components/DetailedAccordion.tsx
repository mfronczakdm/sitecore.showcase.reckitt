"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import type { CategoryItem } from "@/types"
import ImageModal from "./ImageModal"

interface DetailedAccordionProps {
  data: CategoryItem[]
}

export default function DetailedAccordion({ data }: DetailedAccordionProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const [activeSubItemIndex, setActiveSubItemIndex] = useState(0)
  const [modalImage, setModalImage] = useState<{ url: string; title: string } | null>(null)
  const categoryNavRef = useRef<HTMLDivElement>(null)

  const activeCategory = data[activeCategoryIndex]
  const activeSubItem = activeCategory.items[activeSubItemIndex]

  useEffect(() => {
    // Reset subitem index when category changes
    setActiveSubItemIndex(0)
  }, [activeCategoryIndex])

  useEffect(() => {
    // Scroll active category into view
    if (categoryNavRef.current) {
      const activeButton = categoryNavRef.current.querySelector('[aria-selected="true"]')
      if (activeButton) {
        const container = categoryNavRef.current
        const scrollLeft =
          activeButton.getBoundingClientRect().left +
          container.scrollLeft -
          container.getBoundingClientRect().left -
          container.offsetWidth / 2 +
          activeButton.getBoundingClientRect().width / 2

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        })
      }
    }
  }, [activeCategoryIndex])

  const handleCategoryClick = (index: number) => {
    setActiveCategoryIndex(index)
  }

  const handleSubItemClick = (index: number) => {
    setActiveSubItemIndex(index)
  }

  const openModal = (url: string, title: string) => {
    setModalImage({ url, title })
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <div className="flex flex-col">
      {/* Horizontal category navigation */}
      <div
        className="flex overflow-x-auto hide-scrollbar mb-8 pb-2 justify-start md:justify-center"
        ref={categoryNavRef}
      >
        <div className="flex space-x-2">
          {data.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(index)}
              className={`px-4 py-2 whitespace-nowrap rounded-full transition-colors ${
                activeCategoryIndex === index ? "bg-sitecore-red text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              aria-selected={activeCategoryIndex === index}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Two-column content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column - Subcategories */}
        <div className="md:w-1/3">
          <div className="space-y-2">
            {activeCategory.items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleSubItemClick(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  activeSubItemIndex === index ? "bg-sitecore-red text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
                aria-selected={activeSubItemIndex === index}
              >
                <h3 className="font-medium">{item.title}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Right column - Content */}
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{activeSubItem.title}</h3>
              <p className="text-gray-700 mb-6">{activeSubItem.description}</p>

              <button
                className="relative aspect-video w-full bg-gray-50 rounded-lg overflow-hidden"
                onClick={() => openModal(activeSubItem.imageUrl, activeSubItem.title)}
                aria-label={`View larger image of ${activeSubItem.title}`}
              >
                <Image
                  src={activeSubItem.imageUrl || "/placeholder.svg"}
                  alt={activeSubItem.title}
                  fill
                  className="object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && <ImageModal imageUrl={modalImage.url} title={modalImage.title} onClose={closeModal} />}
    </div>
  )
}

