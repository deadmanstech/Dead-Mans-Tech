"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, MapPin, Users, Heart, Zap, Coffee } from "lucide-react"
import { contactInfo } from "@/lib/data"

const benefits = [
  { icon: "heart", label: "Health & wellness benefits" },
  { icon: "users", label: "Remote-first culture" },
  { icon: "zap", label: "Learning & growth budget" },
  { icon: "coffee", label: "Flexible work hours" },
]

function BenefitIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "heart":
      return <Heart className="w-5 h-5" />
    case "users":
      return <Users className="w-5 h-5" />
    case "zap":
      return <Zap className="w-5 h-5" />
    case "coffee":
      return <Coffee className="w-5 h-5" />
    default:
      return null
  }
}

export function CareersSection() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Careers</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance max-w-3xl mx-auto">
            Join our team
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {"We're a small but passionate team building tools that help millions of people every day."}
          </p>
        </motion.div>

        {/* No Open Positions Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-muted/50 border border-border rounded-3xl p-8 sm:p-12 text-center mb-12"
        >
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-accent" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">No open positions right now</h2>

          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            {
              "We don't have any open roles at the moment, but we're always interested in connecting with talented people who share our passion for building great products."
            }
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`mailto:${contactInfo.email}?subject=Career Inquiry at Dead Mans Tech`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors border border-border"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Work With Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">Why people love working here</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                  <BenefitIcon icon={benefit.icon} />
                </div>
                <span className="text-foreground font-medium">{benefit.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Based in Earth, working remotely worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
