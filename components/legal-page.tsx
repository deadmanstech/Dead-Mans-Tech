"use client"

import { motion } from "framer-motion"
import { MarkdownRenderer } from "./markdown-renderer"

interface LegalPageProps {
  content: string
}

export function LegalPage({ content }: LegalPageProps) {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        <MarkdownRenderer content={content} />
      </motion.div>
    </section>
  )
}
