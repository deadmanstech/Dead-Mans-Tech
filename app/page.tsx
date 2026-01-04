import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PartnersSection } from "@/components/partners-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MissionSection } from "@/components/mission-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default async function HomePage() {

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dead Mans Tech",
            url: "https://deadmanstech.com", // Assuming this is the URL, can be updated
            logo: "https://deadmanstech.com/logo.png",
            sameAs: [
              "https://x.com/deadmanstech",
              "https://github.com/deadmanstech",
            ],
            description: "Dead Mans Tech is a premier Software Company specializing in innovative SaaS solutions.",
          }),
        }}
      />
      <Navigation />
      <Hero />
      {/* <PartnersSection /> */}
      <ProductsSection />
      <FeaturesSection />
      {/* <StatsSection /> */}
      {/* <TestimonialsSection /> */}
      <MissionSection />
      <CTASection />
      <Footer />
    </main>
  )
}
