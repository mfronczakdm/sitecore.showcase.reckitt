import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeatureAccordion from "@/components/FeatureAccordion"
import VideoCarousel from "@/components/VideoCarousel"
import DetailedAccordion from "@/components/DetailedAccordion"
import DAMAccordion from "@/components/DAMAccordion"
import LinksAccordion from "@/components/LinksAccordion"
import { xmCloudData, contentManagementData, damData, importantLinksData } from "@/data/content-data"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />

      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What if we told you</h2>
        <FeatureAccordion data={xmCloudData} />
      </section>

      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Matters Most</h2>
          <VideoCarousel
            videos={[
              {
                id: "stream",
                title: "AI-powered marketing - the future of faster, smarter, and more impactful marketing.",
                videoUrl:
                  "https://res.cloudinary.com/ddaiqvtfq/video/upload/v1744895938/Stream_Introduction_w946vo.mp4",
                thumbnailUrl:
                  "https://res.cloudinary.com/ddaiqvtfq/image/upload/v1744896387/Stream_Introduction_Time_0_00_14_25_-_Copy_q36rpj.png", // Stream assistant thumbnail
              },
              {
                id: "drag-and-drop",
                title: "Page Building as Simple as Click, Click, Done",
                videoUrl:
                  "https://summit-automotive.sitecoresandbox.cloud/api/public/content/c5d0dd496c064f21babb984269162665?v=b20e55da",
                thumbnailUrl:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sitecore-pages-QljuBrFY8JkMuQSDyF82ab8kmsSRw8.png", // Sitecore pages thumbnail
              },
            ]}
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Content Management System Key Capabilities</h2>
        <DetailedAccordion data={contentManagementData} />
      </section>

      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Digital Asset Management Key Capabilities</h2>
          <DAMAccordion data={damData} />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Important Links</h2>
          <LinksAccordion data={importantLinksData} />
        </div>
      </section>
    </main>
  )
}

