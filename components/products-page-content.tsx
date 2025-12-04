"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Brain, ExternalLink, PackageOpen } from "lucide-react"
import { products } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
}

const colorMap: Record<string, { gradient: string; accent: string; iconBg: string; border: string }> = {
  pippaquiz: {
    gradient: "from-sky-50 to-transparent",
    accent: "text-sky-600",
    iconBg: "bg-sky-100 text-sky-600",
    border: "border-sky-200 hover:border-sky-300",
  },
}

const productDetails: Record<string, { features: string[]; tagline: string }> = {
  pippaquiz: {
    tagline: "Tell us your syllabus, and we prepare exam questions",
    features: ["AI-powered", "Customizable", "Easy to use"],
  },
}

export function ProductsPageContent() {
  const activeProducts = products.filter((p) => p.status === "active")
  const upcomingProducts = products.filter((p) => p.status === "upcoming")

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Our Products</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
              Apps that simplify your life
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Each of our apps is designed with one goal: to help you accomplish more with less effort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Active Products */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-foreground mb-8"
          >
            Available Now
          </motion.h2>

          <div className="grid gap-6">
            {activeProducts.length > 0 ? (
              activeProducts.map((product, index) => {
                const colors = colorMap[product.id]
                const details = productDetails[product.id]
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={product.url}
                      target="_blank"
                      className={`group relative flex flex-col lg:flex-row gap-6 p-8 bg-card border ${colors.border} rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-lg`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="relative flex flex-col lg:flex-row gap-6 flex-1">
                        <div
                          className={`w-16 h-16 flex items-center justify-center rounded-2xl ${colors.iconBg} shrink-0`}
                        >
                          {iconMap[product.icon]}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                            <span className="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                              Available
                            </span>
                          </div>
                          <p className={`text-lg ${colors.accent} mb-2`}>{details.tagline}</p>
                          <p className="text-muted-foreground mb-4">{product.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {details.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center lg:self-center">
                          <span
                            className={`flex items-center gap-2 ${colors.accent} font-medium group-hover:underline`}
                          >
                            Try it free
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center py-16 px-4 text-center border border-dashed rounded-2xl bg-card/50"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-muted mb-4">
                  <PackageOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No active products yet</h3>
                <p className="text-muted-foreground max-w-sm">
                  We're working hard on our first release. Check back soon for updates!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Upcoming Products */}
      <section className="py-12 sm:py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-foreground mb-8"
          >
            Coming Soon
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {upcomingProducts.length > 0 ? (
              upcomingProducts.map((product, index) => {
                const colors = colorMap[product.id]
                const details = productDetails[product.id]
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative p-8 bg-card border ${colors.border} rounded-2xl overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-50`} />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${colors.iconBg}`}>
                          {iconMap[product.icon]}
                        </div>
                        <motion.span
                          animate={{ scale: [0.95, 1, 0.95] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                        >
                          Upcoming
                        </motion.span>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-1">{product.name}</h3>
                      <p className={`text-sm ${colors.accent} mb-3`}>{details.tagline}</p>
                      <p className="text-muted-foreground mb-4">{product.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {details.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center border border-dashed rounded-2xl bg-card/50"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-muted mb-4">
                  <PackageOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No upcoming products</h3>
                <p className="text-muted-foreground max-w-sm">
                  We're focused on our current lineup. Stay tuned for future announcements!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
