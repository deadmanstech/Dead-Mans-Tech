import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Dead Mans Tech - Leading Software Company & SaaS Solutions",
  description: "Dead Mans Tech is a premier Software Company specializing in innovative SaaS solutions. We build technology that empowers businesses and individuals.",
  keywords: ["Dead Mans Tech", "Software Company", "SaaS", "Technology", "Enterprise Software", "Cloud Solutions", "Innovation"],
  openGraph: {
    title: "Dead Mans Tech - Leading Software Company & SaaS Solutions",
    description: "Dead Mans Tech is a premier Software Company specializing in innovative SaaS solutions. We build technology that empowers businesses and individuals.",
    type: "website",
    locale: "en_US",
    siteName: "Dead Mans Tech",
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
