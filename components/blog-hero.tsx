"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted to-background" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium text-accent uppercase tracking-wider mb-4"
        >
          Our Blog
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance"
        >
          Insights & Ideas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Thoughts on technology, product development, and building successful SaaS companies from our team.
        </motion.p>
      </div>
    </section>
  )
}
