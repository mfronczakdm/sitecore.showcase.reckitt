import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Reckkit - Sitecore Showcase",
  description: "We Go Further to Help You Go Farther",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${dmSans.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'