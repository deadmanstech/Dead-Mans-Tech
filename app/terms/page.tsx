import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, Shield, Scale, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Dead Mans Tech",
  description: "Terms of Service for Dead Mans Tech products and services.",
}

const sections = [
  {
    icon: FileText,
    title: "1. Services",
    content: (
      <>
        <p>Dead Mans Tech provides enterprise software solutions including but not limited to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>PippaQuiz (AI Powered Exam Question Generator)</li>
        </ul>
      </>
    ),
  },
  {
    icon: Shield,
    title: "2. Use License",
    content: (
      <p>
        Permission is granted to temporarily download one copy of the materials (information or software) on Dead Mans
        Tech's website for personal, non-commercial transitory viewing only.
      </p>
    ),
  },
  {
    icon: AlertCircle,
    title: "3. Disclaimer",
    content: (
      <p>
        The materials on Dead Mans Tech's website are provided on an 'as is' basis. Dead Mans Tech makes no warranties,
        expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
        implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
        intellectual property or other violation of rights.
      </p>
    ),
  },
  {
    icon: AlertCircle,
    title: "4. Limitations",
    content: (
      <p>
        In no event shall Dead Mans Tech or its suppliers be liable for any damages (including, without limitation,
        damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
        the materials on Dead Mans Tech's website.
      </p>
    ),
  },
  {
    icon: Shield,
    title: "5. Intellectual Property",
    content: (
      <p>
        All content, features, and functionality are owned by Dead Mans Tech and protected by international copyright,
        trademark, and other intellectual property laws.
      </p>
    ),
  },
  {
    icon: AlertCircle,
    title: "6. Limitation of Liability",
    content: (
      <p>
        Dead Mans Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages
        resulting from your use of our services.
      </p>
    ),
  },
  {
    icon: Scale,
    title: "7. Governing Law",
    content: (
      <p>
        These terms and conditions are governed by and construed in accordance with applicable international laws. Any
        disputes arising from these terms will be resolved through good faith negotiation or, if necessary, through
        appropriate legal channels in the jurisdiction where the dispute arises.
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 bg-card border border-border rounded-2xl">
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Dead Mans Tech products and services, you agree to be bound by these Terms of
              Service and all applicable laws and regulations. Please read these terms carefully before using our
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                      <div className="text-muted-foreground leading-relaxed">{section.content}</div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Contact Section */}
            <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms, contact us at{" "}
                    <a href="mailto:deadmanstech@gmail.com" className="text-primary hover:underline font-medium">
                      officialdeadmanstech@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
