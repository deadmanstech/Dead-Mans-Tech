"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "CloudFlow made managing my files so much easier. I finally feel organized and can find everything in seconds.",
    author: "Jessica T.",
    role: "Freelance Designer",
    image: "/smiling-woman-portrait.png",
  },
  {
    quote: "DataPulse helped me understand my spending habits. Now I actually stick to my budget every month!",
    author: "Marcus L.",
    role: "Small Business Owner",
    image: "/professional-man-portrait.png",
  },
  {
    quote: "As someone who works from home, TeamHub keeps me connected with my colleagues without the chaos.",
    author: "Priya S.",
    role: "Remote Worker",
    image: "/indian-woman-portrait.png",
  },
  {
    quote: "SecureVault gives me peace of mind knowing all my passwords and important docs are safe in one place.",
    author: "David K.",
    role: "Parent & Teacher",
    image: "/casual-man-portrait.png",
  },
]

export function TestimonialsSection() {
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
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">What People Say</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Loved by everyday users
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            See how our apps are making a difference in people's daily lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              {/* Gradient accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <Quote className="w-10 h-10 text-accent/20 mb-4" />

              <p className="text-lg text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover bg-muted"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
