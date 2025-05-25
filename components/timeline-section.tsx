"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react"

const timelineItems = [
  {
    year: "Jan 2025 - Present",
    title: "Software Developer Intern",
    organization: "Wolke K8 Solutions",
    description:
      "Working on building developer portals using the Backstage framework, including service catalogs, authentication, database integration, and custom plugins.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    year: "2022 - Present",
    title: "B.E. in Information Technology",
    organization: "LDRP-ITR, Gandhinagar",
    description: "CPI: 8.21",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    year: "2022",
    title: "12th Standard",
    organization: "GSEB",
    description: "Percentage: 60.66%",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    year: "2020",
    title: "10th Standard",
    organization: "GSEB",
    description: "Percentage: 68.83%",
    icon: <GraduationCap className="h-5 w-5" />,
  },
]

export function TimelineSection() {
  const containerRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <section id="timeline" className="py-20 relative">
      <div className="animated-bg"></div>
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary">
            My Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>

          {isMounted && (
            <motion.div
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-primary origin-top"
              style={{
                height,
                opacity,
              }}
            ></motion.div>
          )}

          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              scrollYProgress={scrollYProgress}
              isMounted={isMounted}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
  index,
  scrollYProgress,
  isMounted,
}: {
  item: any
  index: number
  scrollYProgress: any
  isMounted: boolean
}) {
  const itemProgress = (index + 0.5) / timelineItems.length

  const scale = useTransform(scrollYProgress, [itemProgress - 0.2, itemProgress, itemProgress + 0.2], [0.95, 1, 0.95])
  const itemOpacity = useTransform(scrollYProgress, [itemProgress - 0.2, itemProgress, itemProgress + 0.2], [0.7, 1, 0.7])
  const boxShadow = useTransform(
    scrollYProgress,
    [itemProgress - 0.2, itemProgress, itemProgress + 0.2],
    ["0 0 0 rgba(0, 119, 181, 0)", "0 0 15px rgba(0, 119, 181, 0.5)", "0 0 0 rgba(0, 119, 181, 0)"],
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
        <motion.div
          style={isMounted ? { scale, opacity: itemOpacity } : {}}
          className={`w-full max-w-md glass p-4 rounded-lg text-left md:text-${index % 2 === 0 ? "left" : "right"} ${
            index % 2 === 0 ? "md:ml-6" : "md:mr-6"
          }`}
        >
          <div className="flex items-center mb-2">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm text-foreground/70">{item.year}</span>
          </div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-primary font-medium">{item.organization}</p>
          <p className="text-foreground/70 mt-2">{item.description}</p>
        </motion.div>
      </div>

      <motion.div
        style={isMounted ? { scale, boxShadow } : {}}
        className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 min-w-[2.5rem] rounded-full bg-background border-4 border-primary flex items-center justify-center z-10"
      >
        <span className="text-primary">{item.icon}</span>
      </motion.div>

      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  )
}
