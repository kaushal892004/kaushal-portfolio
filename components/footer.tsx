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
      href: "https://linkedin.com/in/kaushal-parmar-48b1782a7",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/KaushalPar4926",
      label: "Twitter",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:parmarkaushal8924@gmail.com",
      label: "Email",
    },
  ]

  return (
<footer className="bg-background text-white py-16 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Terminal-style Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 font-mono text-sm sm:text-base"
          >
            <Link href="#home" className="flex items-center gap-1 sm:gap-2">
              <span className="text-green-400">kaushal@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$</span>
              <span className="ml-1 text-white">Contact</span>
              <span className="text-white animate-pulse">▌</span>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-6"
          >
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              </Button>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-zinc-500 text-sm mb-6"
          >
            <p>&copy; {new Date().getFullYear()} Kaushal Parmar. All rights reserved.</p>
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-zinc-700 hover:border-primary hover:text-primary transition-all"
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
