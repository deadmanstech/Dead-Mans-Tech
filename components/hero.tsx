"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

function AnimatedGridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-200/60 to-violet-200/60 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-fuchsia-200/50 to-indigo-200/50 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-cyan-200/40 to-indigo-200/40 blur-3xl"
      />

      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-900" />
          </pattern>
          <linearGradient id="grid-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#grid-mask)" />
      </svg>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-20 right-[20%] w-16 h-16 border-2 border-indigo-200/50 rounded-lg"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-32 left-[15%] w-12 h-12 border-2 border-violet-200/50 rounded-full"
      />
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/3 left-[10%] w-8 h-8 bg-gradient-to-br from-indigo-200/40 to-transparent rounded"
      />
      <motion.div
        animate={{
          y: [10, -10, 10],
          x: [-5, 5, -5],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[12%] w-6 h-6 bg-gradient-to-tl from-fuchsia-200/40 to-transparent rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/2 right-[25%] w-4 h-4 bg-indigo-300/50 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-[40%] left-[25%] w-3 h-3 bg-violet-300/50 rounded-full"
      />

      {/* Animated lines/rays */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-indigo-300/50 to-transparent"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-1/3 w-px h-32 bg-gradient-to-t from-violet-300/50 to-transparent"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <AnimatedGridPattern />

      <div className="max-w-7xl mx-auto px-6 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-accent/20 rounded-full text-sm text-accent mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Now launching PippaQuiz
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance max-w-4xl mx-auto text-foreground"
        >
          Tools that make <span className="text-accent">your life easier</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
        >
          Dead Mans Tech builds simple, powerful apps that help everyday people work smarter, stay organized, and accomplish more
          with less effort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors shadow-lg shadow-foreground/20"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-foreground font-medium rounded-full hover:bg-white transition-colors border border-border shadow-sm"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2 bg-white/50 backdrop-blur-sm"
          >
            <motion.div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
