"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog-db"

function BlogCardCompact({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group w-full">
      <div className="relative flex flex-col h-full bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
        {/* Image with overlay gradient */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg?height=200&width=380&query=blog post"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 text-xs font-semibold bg-primary/90 backdrop-blur-md text-primary-foreground rounded-full shadow-lg">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">
                  {post.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground">{post.author}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {new Date(post.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </Link>
  )
}

export function BlogSection({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 text-primary mb-3">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide uppercase">From Our Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Posts</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Tips, stories, and updates from our team to help you get the most out of our products.
            </p>
          </div>
          <Button asChild variant="outline" className="group self-start sm:self-auto bg-transparent">
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Vertical grid container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCardCompact post={post} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
