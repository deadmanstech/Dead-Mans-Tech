import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | Dead Mans Tech",
  description:
    "Get in touch with Dead Mans Tech. Find our contact information, office locations, and social media links.",
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <ContactSection />
      <Footer />
    </main>
  )
}
