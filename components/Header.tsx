import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="h-10 w-32 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SitecoreLogo-fhyKqcf9o0SPcpLzqiYvzuWsH4Au6H.png"
              alt="Sitecore Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="h-10 w-32 relative">
            <Image
              src="https://www.reckitt.com/assets/wwbhjej5/headerlogo.svg"
              alt="reckitt logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}

