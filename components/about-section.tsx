"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background/95 relative">
      <div className="animated-bg"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="blob-shape relative w-full h-[400px] overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Kaushal Parmar"
                fill
                className="object-cover mix-blend-overlay"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Backend Developer & DevOps Engineer</h3>
            <p className="text-foreground/80 mb-6">
              I am a passionate Backend Developer with expertise in DevOps practices and a strong interest in
              cybersecurity. With skills in building secure and scalable infrastructure, I strive to create solutions
              that not only meet functional requirements but also adhere to the highest security and performance
              standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover-lift">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-foreground/70">B.E. (IT) at LDRP-ITR, Gandhinagar</p>
                  <p className="text-xs text-foreground/60 mt-1">CPI: 8.12 (2022-Present)</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover-lift">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-sm text-foreground/70">Gandhinagar, Gujarat, India</p>
                  <p className="text-xs text-foreground/60 mt-1">Working globally</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover-lift">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <p className="text-sm text-foreground/70">Gujarati, Hindi, English</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover-lift">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Interests</h4>
                  <p className="text-sm text-foreground/70">DevOps, Cloud Infrastructure, Cybersecurity</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-foreground/80 mb-6">
              My journey in technology has been driven by curiosity and a desire to solve complex infrastructure and
              deployment challenges. I believe in continuous learning and staying updated with the latest technologies,
              cloud services, and security practices.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="btn-glow btn-shimmer">
                <Link href="#skills">
                  Explore My Skills <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
