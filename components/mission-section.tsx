"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create simple, intuitive tools that help regular people organize their lives, work smarter, and achieve their goals without complexity.",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "A world where powerful technology is accessible to everyone—not just experts. Apps that anyone can pick up and use from day one.",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Simplicity over complexity. People over features. We believe great software should feel effortless and bring joy to everyday tasks.",
    color: "text-rose-600",
    bg: "bg-rose-100",
  },
]

export function MissionSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Why We Exist</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Built for people, not corporations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 flex items-center justify-center ${value.bg} rounded-xl ${value.color} mb-6`}>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
