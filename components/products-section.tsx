"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Brain, ArrowUpRight, ArrowRight } from "lucide-react"
import { products } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
}

const colorMap: Record<string, { gradient: string; accent: string; iconBg: string }> = {
  pippaquiz: {
    gradient: "from-sky-50 to-transparent",
    accent: "text-sky-600",
    iconBg: "bg-sky-100 text-sky-600",
  },
}

export function ProductsSection() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Our Apps</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Simple tools for everyday life
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From staying organized to working smarter, our apps are designed to help you get more done with less hassle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const colors = colorMap[product.id] || colorMap.cloudflow
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={product.status === "active" ? product.url : "/products"}
                  target={product.status === "active" ? "_blank" : undefined}
                  className="group relative flex flex-col p-6 bg-card border border-border rounded-2xl hover:border-muted-foreground/30 hover:shadow-lg transition-all duration-500 h-full overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    {product.status === "upcoming" && (
                      <div className="absolute top-0 right-0">
                        <motion.span
                          initial={{ scale: 0.9 }}
                          animate={{ scale: [0.9, 1, 0.9] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                        >
                          Upcoming
                        </motion.span>
                      </div>
                    )}

                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${colors.iconBg} mb-4`}>
                      {iconMap[product.icon]}
                    </div>

                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-foreground flex items-center gap-2">
                      {product.name}
                      {product.status === "active" && (
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      )}
                    </h3>

                    <p className="mt-2 text-muted-foreground flex-1">{product.description}</p>

                    <div className="mt-4 pt-4 border-t border-border">
                      <span className={`text-sm font-medium ${colors.accent} group-hover:underline`}>
                        {product.status === "active" ? "Try it free" : "Learn more"}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group"
          >
            View all products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
