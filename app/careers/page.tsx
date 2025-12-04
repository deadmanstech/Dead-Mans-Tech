import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CareersSection } from "@/components/careers-section"

export const metadata: Metadata = {
  title: "Careers | Dead Mans Tech",
  description: "Join Dead Mans Tech and help build the future of enterprise software.",
}

export default function CareersPage() {
  return (
    <main>
      <Navigation />
      <CareersSection />
      <Footer />
    </main>
  )
}
