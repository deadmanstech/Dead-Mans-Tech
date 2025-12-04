import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | Dead Mans Tech",
  description: "Privacy Policy for Dead Mans Tech and its products.",
}

const privacyContent = `
# Privacy Policy

Last updated: December 4, 2025

## Introduction

Dead Mans Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our products and services.

## Information We Collect

### Information You Provide
- Account information (name, email, company)
- Payment information
- Communications with us
- Survey responses and feedback

### Information Collected Automatically
- Device information
- Usage data and analytics
- Log files
- Cookies and similar technologies

## How We Use Your Information

We use the information we collect to:
- Provide and maintain our services
- Process transactions
- Send administrative information
- Respond to inquiries and support requests
- Improve our products and services
- Protect against fraudulent activity

## Information Sharing

We may share your information with:
- Service providers who assist in our operations
- Business partners with your consent
- Legal authorities when required by law
- Affiliated companies within our corporate group

## Data Security

We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## Your Rights

Depending on your location, you may have rights to:
- Access your personal data
- Correct inaccurate data
- Delete your data
- Object to processing
- Data portability

## Contact Us

For privacy-related inquiries, contact us at officialdeadmanstech@gmail.com.
`

export default function PrivacyPage() {
  return (
    <main>
      <Navigation />
      <LegalPage content={privacyContent} />
      <Footer />
    </main>
  )
}
