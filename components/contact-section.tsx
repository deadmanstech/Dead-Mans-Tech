"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MessageCircle, Twitter, Linkedin, Github, Clock, Zap, Heart, Facebook, Instagram } from "lucide-react"
import { contactInfo, socialLinks } from "@/lib/data"

const supportChannels = [
  {
    title: "Lightning Fast Support",
    description: "Average response time under 2 hours",
    detail: "Our support team is available 7 days a week",
    icon: "zap",
  },
  {
    title: "Community Discord",
    description: "Join thousands of users",
    detail: "Get help, share tips, and connect with others",
    icon: "message",
  },
  {
    title: "We Actually Care",
    description: "Real humans, real help",
    detail: "No bots, no runaround—just helpful answers",
    icon: "heart",
  },
]

function ChannelIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "zap":
      return <Zap className="w-6 h-6" />
    case "message":
      return <MessageCircle className="w-6 h-6" />
    case "heart":
      return <Heart className="w-6 h-6" />
    default:
      return <Clock className="w-6 h-6" />
  }
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance max-w-3xl mx-auto">
            Let&apos;s start a conversation
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need help? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-accent transition-colors">Email Us</p>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-accent transition-colors">Call Us</p>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={socialLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-xl shrink-0">
                    <DiscordIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-accent transition-colors">Join Our Discord</p>
                    <p className="text-muted-foreground">Chat with our community and team</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4">Other Inquiries</h3>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Support: </span>
                  {contactInfo.supportEmail}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Press: </span>
                  {contactInfo.pressEmail}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <motion.a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <DiscordIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6">How We Help</h2>
            <div className="space-y-4">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-xl shrink-0">
                      <ChannelIcon icon={channel.icon} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{channel.title}</h3>
                      <p className="text-muted-foreground mt-1">{channel.description}</p>
                      <p className="text-sm text-muted-foreground mt-2">{channel.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="mt-6 flex items-center justify-center gap-3 p-6 bg-accent text-accent-foreground rounded-2xl hover:bg-accent/90 transition-colors"
            >
              <DiscordIcon className="w-6 h-6" />
              <span className="font-semibold">Join Our Discord Community</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
