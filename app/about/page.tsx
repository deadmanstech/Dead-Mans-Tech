import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Timeline } from "@/components/timeline"
import { TeamSection } from "@/components/team-section"
import { MissionSection } from "@/components/mission-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"

export const metadata: Metadata = {
  title: "About Us | Dead Mans Tech",
  description: "Learn about Dead Mans Tech, our mission, team, and journey building the future of enterprise software.",
}

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <AboutHero />
      <MissionSection />
      <Timeline />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}
