"use client"

import { motion } from "framer-motion"
import { Zap, Smartphone, Lock, Sparkles, Cloud, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our apps are snappy and responsive. No waiting, no frustration.",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Use on your phone, tablet, or computer. Your stuff syncs automatically.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "Your data belongs to you. We use bank-level encryption to keep it safe.",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    icon: Sparkles,
    title: "Smart Features",
    description: "AI-powered solutions that actually help, without being creepy.",
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    icon: Cloud,
    title: "Always Backed Up",
    description: "Never lose your work. Everything is automatically saved to the cloud.",
    color: "text-sky-600",
    bg: "bg-sky-100",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Support",
    description: "Real humans ready to help whenever you need it. No bots, no runaround.",
    color: "text-rose-600",
    bg: "bg-rose-100",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Why Dead Mans Tech</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Designed with you in mind
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Join people who use Dead Mans Tech apps every day. Start free, upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${feature.bg} ${feature.color} mb-4`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
