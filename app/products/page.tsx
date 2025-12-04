import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductsPageContent } from "@/components/products-page-content"

export const metadata = {
  title: "Products | Dead Mans Tech",
  description: "Explore our collection of simple, powerful apps designed to help you get more done.",
}

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <ProductsPageContent />
      <Footer />
    </main>
  )
}
