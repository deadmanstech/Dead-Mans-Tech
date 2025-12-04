import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Cookie Policy | Dead Mans Tech",
  description: "Cookie Policy for Dead Mans Tech websites and products.",
}

const cookiesContent = `
# Cookie Policy

Last updated: December 4, 2025

## What Are Cookies

Cookies are small text files stored on your device when you visit our websites. They help us provide you with a better experience and understand how you use our services.

## Types of Cookies We Use

### Essential Cookies
Required for the operation of our websites. They enable basic functions like page navigation and access to secure areas.

### Performance Cookies
Help us understand how visitors interact with our websites by collecting and reporting information anonymously.

### Functionality Cookies
Allow our websites to remember choices you make and provide enhanced, personalized features.

### Analytics Cookies
Help us measure and improve the performance of our websites by providing insights into user behavior.

## Third-Party Cookies

We use services from third parties that may also set cookies on your device:
- Google Analytics for website analytics
- Gumroad for payment processing
- Intercom for customer support

## Managing Cookies

Most web browsers allow you to control cookies through their settings. You can:
- Block all cookies
- Delete existing cookies
- Allow cookies from specific websites
- Set preferences for different types of cookies

Please note that blocking some cookies may impact your experience on our websites.

## Updates to This Policy

We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.

## Contact Us

For questions about our use of cookies, contact us at officialdeadmanstech@gmail.com.
`

export default function CookiesPage() {
  return (
    <main>
      <Navigation />
      <LegalPage content={cookiesContent} />
      <Footer />
    </main>
  )
}
