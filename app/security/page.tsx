import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Lock, Key, Search, FileCheck, AlertTriangle, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Security | Dead Mans Tech",
  description: "Learn about security practices at Dead Mans Tech and how we protect your data.",
}

const securitySections = [
  {
    icon: Shield,
    title: "1. Infrastructure Security",
    content:
      "Our services run on world-class cloud infrastructure with robust physical and network security. We use multiple availability zones to ensure high availability and disaster recovery.",
  },
  {
    icon: Lock,
    title: "2. Data Encryption",
    content:
      "All data is encrypted in transit using TLS 1.2+ and at rest using industry-standard AES-256 encryption. We manage encryption keys using strict access controls and regular rotation policies.",
  },
  {
    icon: Key,
    title: "3. Access Controls",
    content:
      "We follow the principle of least privilege. Access to production systems is restricted to authorized personnel and requires multi-factor authentication (MFA). All access is logged and audited.",
  },
  {
    icon: Search,
    title: "4. Vulnerability Management",
    content:
      "We regularly scan our systems for vulnerabilities and perform penetration testing. We also have a bug bounty program to encourage responsible disclosure of security issues.",
  },
  {
    icon: FileCheck,
    title: "5. Compliance",
    content:
      "We are committed to meeting major security standards and regulations, including GDPR and CCPA. We continuously work to improve our security practices and compliance posture.",
  },
  {
    icon: AlertTriangle,
    title: "6. Reporting Issues",
    content:
      "If you discover a security vulnerability, please report it to officialdeadmanstech@gmail.com. We appreciate responsible disclosure and may offer recognition for valid reports.",
  },
]

export default function SecurityPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Security at Dead Mans Tech</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 4, 2025</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 bg-card border border-border rounded-2xl">
            <p className="text-muted-foreground leading-relaxed">
              At Dead Mans Tech, security is foundational to everything we build. We are committed to protecting your
              data and maintaining the trust you place in us. Below are the key security measures we implement to keep
              your information safe.
            </p>
          </div>
        </div>
      </section>

      {/* Security Sections */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {securitySections.map((section, index) => {
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
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Contact Section */}
            <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For security-related inquiries, contact our security team at{" "}
                    <a
                      href="mailto:officialdeadmanstech@gmail.com"
                      className="text-primary hover:underline font-medium"
                    >
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
