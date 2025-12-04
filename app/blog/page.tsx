import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { getPublishedPosts, getFeaturedPost } from "@/lib/blog-db"
import { BlogHero } from "@/components/blog-hero"

export const metadata: Metadata = {
  title: "Blog | Dead Mans Tech",
  description: "Insights on cloud infrastructure, AI, security, and building successful SaaS companies.",
}

export default async function BlogPage() {
  const featuredPost = await getFeaturedPost()
  const allPosts = await getPublishedPosts()
  // Filter out the featured post from the grid
  const regularPosts = allPosts.filter((p) => !p.featured)

  return (
    <main>
      <Navigation />
      <BlogHero />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {featuredPost && (
            <div className="mb-16">
              <BlogCard post={featuredPost} featured />
            </div>
          )}

          {regularPosts.length === 0 && !featuredPost ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-muted-foreground">No blog posts yet</h2>
              <p className="mt-2 text-muted-foreground">Check back soon for new content!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
