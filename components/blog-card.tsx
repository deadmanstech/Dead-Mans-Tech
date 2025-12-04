"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-db"

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group"
      >
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="flex flex-col p-4 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-xs font-medium text-accent uppercase tracking-wide">{post.category}</span>
              <h2 className="mt-2 text-xl font-semibold group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.author}</span>
                <span>{post.read_time}</span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col flex-1 p-4">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">{post.category}</span>
            <h3 className="mt-2 text-base font-semibold group-hover:text-accent transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">{post.excerpt}</p>
            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>{post.author}</span>
              <span>{post.read_time}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
