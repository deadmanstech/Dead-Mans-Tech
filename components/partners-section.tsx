"use client"

import { motion } from "framer-motion"

const pressLogos = [
  { name: "Product Hunt", logo: "PH" },
]

export function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-10"
        >
          Featured in
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {pressLogos.map((press, index) => (
            <motion.div
              key={press.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-bold text-sm">
                {press.logo}
              </div>
              <span className="text-lg font-medium text-muted-foreground">{press.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
