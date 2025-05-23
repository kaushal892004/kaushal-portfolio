"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypewriterEffect } from "./ui/typewriter-effect"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const words = [
    {
      text: "Backend",
    },
    {
      text: "Developer",
    },
    {
      text: "&",
    },
    {
      text: "DevOps",
    },
    {
      text: "Engineer",
    },
  ]

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95"
    >
      {/* Content */}
      <div className="container mx-auto px-4 z-20 flex flex-col items-center justify-center text-center">
        <motion.div style={{ opacity, scale, y }} className="mb-6 w-full flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-2 text-center"
          >
            Hi, I&apos;m{" "}
            <span className="text-primary relative neon-text">
              Kaushal Parmar
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 rounded-full"></span>
            </span>
          </motion.h1>
          <div className="h-20 flex justify-center items-center">
            <TypewriterEffect words={words} className="text-2xl md:text-4xl" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 text-center"
        >
          Building secure and scalable infrastructure with modern technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="text-lg btn-glow btn-shimmer bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl"
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg btn-3d border-primary text-primary hover:bg-primary/10 hover:text-primary"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-12 gap-4"
        >
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full btn-magnetic hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Link href="https://github.com/kaushal892004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full btn-magnetic hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Link
              href="https://linkedin.com/in/kaushalparmar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <Link href="#about" className="flex flex-col items-center group">
            <span className="text-sm mb-2 group-hover:text-primary transition-colors">Scroll Down</span>
            <ArrowDown className="animate-bounce group-hover:text-primary transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
