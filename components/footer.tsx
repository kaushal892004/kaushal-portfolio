"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/kaushal892004",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/kaushalparmar",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/kaushalparmar",
      label: "Twitter",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:parmarkaushal8924@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-muted py-12 relative">
      <div className="animated-bg"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Link href="#home" className="text-3xl font-bold">
              <span className="text-primary">K</span>aushal
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </Link>
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-foreground/70 mb-8"
          >
            <p>&copy; {new Date().getFullYear()} Kaushal Parmar. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full btn-enhanced border-primary text-primary hover:bg-primary/10"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
