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
            className="relative flex justify-center"
          >
            <motion.div
              className="w-[500px] h-[500px] rounded-xl overflow-hidden shadow-xl border border-primary/30 bg-background/70 backdrop-blur-md"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/images/kaushal-image.png"
                alt="Kaushal Parmar"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Backend Developer & DevOps Engineer</h3>
            <p className="text-foreground/80 mb-6">
              I'm currently learning backend development and cloud/DevOps. I enjoy building scalable systems and have a growing interest in cybersecurity. I'm focused on creating reliable and secure infrastructure while exploring modern tools and best practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Education",
                  desc: "B.E. (IT) at LDRP-ITR, Gandhinagar",
                  sub: "CPI: 8.21 (2022-Present)"
                },
                {
                  title: "Location",
                  desc: "Gandhinagar, Gujarat, India",
                  // sub: "Working globally"
                },
                {
                  title: "Languages",
                  desc: "Gujarati, Hindi, English"
                },
                {
                  title: "Interests",
                  desc: "DevOps, Cloud , Cybersecurity"
                }
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                    {item.sub && <p className="text-xs text-foreground/60 mt-1">{item.sub}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-foreground/80 mb-6">
              My journey in technology started with an interest in cybersecurity during my first semester, where I explored networking, learned Linux, and participated in CTFs. In my second year, I began learning Python and backend frameworks like Flask, Django, and FastAPI, building several projects along the way. Now, I'm passionate about growing my skills in cloud and DevOps, and I'm continuously learning to build a strong career in this field.
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
