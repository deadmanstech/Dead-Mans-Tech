import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { getPostBySlug, getPublishedPosts, getPostsByCategory } from "@/lib/blog-db"

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} | Dead Mans Tech Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const categoryPosts = await getPostsByCategory(post.category)
  const relatedPosts = categoryPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main>
      <Navigation />

      <article className="pt-32 pb-16 sm:pt-40">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="text-sm font-medium text-accent">{post.category}</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <span>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{post.read_time}</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority unoptimized={true} />
          </div>

          <MarkdownRenderer content={post.content || ""} />
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
