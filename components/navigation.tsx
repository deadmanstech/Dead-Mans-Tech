"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react"
import { products } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} className="relative h-10 w-auto">
            <Image
              src="/logo.png"
              alt="Dead Mans Tech Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Products
              <ChevronDown
                className={cn("w-4 h-4 transition-transform duration-200", isProductsOpen && "rotate-180")}
              />
            </button>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl p-4"
                >
                  <div className="grid gap-2">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={product.status === "active" ? product.url : "/products"}
                        target={product.status === "active" ? "_blank" : undefined}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm text-foreground">{product.name}</span>
                            {/* @ts-ignore */}
                            {product.status === "upcoming" && (
                              <span className="px-2 py-0.5 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">
                                Soon
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{product.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-border">
                    <Link
                      href="/products"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <span className="text-sm font-medium text-accent">View all products</span>
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="https://deadmanstech.substack.com/"
            target="_blank"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Products</p>
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={product.status === "active" ? product.url : "/products"}
                    className="flex items-center justify-between py-2 text-sm text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {product.name}
                    {/* @ts-ignore */}
                    {product.status === "upcoming" && (
                      <span className="px-2 py-0.5 text-xs bg-accent/10 text-accent rounded-full">Soon</span>
                    )}
                  </Link>
                ))}
                <Link
                  href="/products"
                  className="flex items-center gap-2 py-2 text-sm text-accent font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View all products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <Link
                  href="/about"
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="https://deadmanstech.substack.com/"
                  target="_blank"
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
