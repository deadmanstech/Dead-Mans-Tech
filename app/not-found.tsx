"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Search, Ghost } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />

            <main className="flex-1 flex items-center justify-center px-6 py-24 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="max-w-2xl w-full text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-muted mb-8 relative group">
                            <Ghost className="w-10 h-10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                                404
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                            Lost in the <span className="text-primary">Void</span>
                        </h1>

                        <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
                            The page you're looking for has vanished into the digital afterlife.
                            Don't worry, even the best systems have glitches.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="rounded-full px-8 group">
                                <Link href="/">
                                    <Home className="mr-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                                    Back to Home
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="rounded-full px-8 group bg-transparent">
                                <Link href="/products">
                                    <Search className="mr-2 w-4 h-4 transition-transform group-hover:scale-110" />
                                    Explore Products
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-16 pt-8 border-t border-border/50">
                            <p className="text-sm text-muted-foreground mb-4">Or try one of these instead:</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
                                <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Get in Touch</Link>
                                <Link href="https://deadmanstech.substack.com/" target="_blank" className="text-sm font-medium hover:text-primary transition-colors">Our Blog</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
