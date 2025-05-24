"use client"

import { useRef, useState, useLayoutEffect, useEffect } from "react"
import gsap from "gsap"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import "@fontsource/jetbrains-mono" // ✅ JetBrains Mono font

export function HeroSection() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
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

  useLayoutEffect(() => {
    if (!textRef.current) return
    gsap.fromTo(
      textRef.current,
      { x: "100vw" },
      {
        x: "-150%",
        duration: 40,
        ease: "linear",
        repeat: -1,
      }
    )
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95"
    >
      <div className="container mx-auto px-4 z-20 flex flex-col items-center justify-center text-center">
        <motion.div style={{ opacity, scale, y }} className="mb-16 w-full flex flex-col items-center">
          {/* Intro Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl md:text-6xl font-extrabold tracking-widest uppercase"
          >
            <span className="inline-block mr-4">Hi,</span>
            <span className="inline-block mr-4">I'm</span>
            <span className="inline-block text-primary relative">
              Kaushal
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 rounded-full"></span>
            </span>
            <span className="inline-block ml-4 relative">Parmar</span>
          </motion.h1>

          {/* Animated Moving Sentence */}
          <div className="overflow-hidden mt-10 h-[12vh] w-full relative flex justify-start items-center">
  <h2
    ref={textRef}
    className="whitespace-nowrap text-[8vw] md:text-[6vw] font-bold tracking-tight text-white font-['JetBrains_Mono']"
  >
    Currently Improving In Field Of Backend Development & DevOps
  </h2>
</div>

        </motion.div>

        {/* Buttons */}
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
          <Button
            asChild
            size="lg"
            className="text-lg btn-glow btn-shimmer bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl"
          >
            <a href="/resume/Kaushal_Parmar_Resume.pdf" download>
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
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
            <Link
              href="https://github.com/kaushal892004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
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
              href="https://linkedin.com/in/kaushal-parmar-48b1782a7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full btn-magnetic hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Link
              href="mailto:parmarkaushal8924@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
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
            <span className="text-sm mb-2 group-hover:text-primary transition-colors">
              Scroll Down
            </span>
            <ArrowDown className="animate-bounce group-hover:text-primary transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
