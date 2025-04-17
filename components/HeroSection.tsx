import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="gradient-bg pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Composable by Design. Trusted by Visionaries. Powered by Sitecore.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-2 max-w-3xl">
            Empowering Reckitt's mission to protect, heal, and nurture in the relentless pursuit of a cleaner, healthier world..
          </p>
          <p className="text-lg md:text-xl italic text-gray-700 mb-8 max-w-3xl">
            "We Go Further to Help You Go Farther."
          </p>
          <div className="relative w-full max-w-2xl h-48 md:h-64 lg:h-80">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ContentAndExperience-BWtmQjBHt1H1ErbSCBQak3NplcnTfn.png"
              alt="Content & Experience Infinity Loop"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

