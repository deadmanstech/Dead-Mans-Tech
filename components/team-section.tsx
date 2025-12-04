"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Globe, Linkedin, Twitter } from "lucide-react"
import { team } from "@/lib/data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const teamImages: Record<string, string> = {
  "Sarah Chen": "/professional-ceo-portrait.png",
  "Marcus Johnson": "/professional-cto-portrait.png",
  "Elena Rodriguez": "/professional-cfo.png",
  "David Park": "/professional-engineer.png",
  "Aisha Patel": "/professional-woman-product-manager.png",
  "James Wilson": "/professional-man-sales-executive-portrait.jpg",
}

export function TeamSection() {
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
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Our Team</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Meet the leadership</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Meet the team behind Dead Mans Tech, whose primary aim in life is to make peoples' lives easier.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants} className="group w-full max-w-sm">
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={teamImages[member.name] || member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social links on hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <motion.a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Globe className="w-4 h-4 text-foreground" />
                    </motion.a>
                    <motion.a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-foreground" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {member.roles.map((role) => (
                      <span key={role} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full">
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
