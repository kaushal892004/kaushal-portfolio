"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  SiPython,
  SiFlask,
  SiDjango,
  SiMongodb,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiLinux,
  SiGithub,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiFastapi,
} from "react-icons/si"
import { FaMicrosoft } from "react-icons/fa"

// Define tech icons with their colors
const techIcons = [
  { Icon: SiPython, color: "#3776AB", size: 40 },
  { Icon: SiFlask, color: "#000000", size: 40 },
  { Icon: SiDjango, color: "#092E20", size: 40 },
  { Icon: SiFastapi, color: "#009688", size: 40 },
  { Icon: SiMongodb, color: "#47A248", size: 40 },
  { Icon: SiAmazonwebservices, color: "#FF9900", size: 40 },
  { Icon: FaMicrosoft, color: "#0078D4", size: 40 },
  { Icon: SiDocker, color: "#2496ED", size: 40 },
  { Icon: SiKubernetes, color: "#326CE5", size: 40 },
  { Icon: SiTerraform, color: "#7B42BC", size: 40 },
  { Icon: SiAnsible, color: "#EE0000", size: 40 },
  { Icon: SiJenkins, color: "#D24939", size: 40 },
  { Icon: SiLinux, color: "#FCC624", size: 40 },
  { Icon: SiGithub, color: "#181717", size: 40 },
  { Icon: SiPostman, color: "#FF6C37", size: 40 },
  { Icon: SiHtml5, color: "#E34F26", size: 40 },
  { Icon: SiCss3, color: "#1572B6", size: 40 },
  { Icon: SiCplusplus, color: "#00599C", size: 40 },
]

export default function TechIcons() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Only run this code on the client side
    if (typeof window !== "undefined") {
      const container = containerRef.current
      if (!container) return

      // Position icons randomly within the container
      const icons = container.querySelectorAll(".tech-icon")
      icons.forEach((icon) => {
        // Use a deterministic position based on index to avoid hydration mismatch
        const iconIndex = Array.from(icons).indexOf(icon)
        const x = (iconIndex * 17) % 100
        const y = (iconIndex * 23) % 100
        ;(icon as HTMLElement).style.left = `${x}%`
        ;(icon as HTMLElement).style.top = `${y}%`
      })
    }
  }, [])

  // Return a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return <div className="w-full h-full relative" />
  }

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="tech-icon absolute"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 5 + (index % 5),
            repeat: Number.POSITIVE_INFINITY,
            delay: index % 5,
          }}
          style={{ color: tech.color }}
        >
          <tech.Icon size={tech.size} />
        </motion.div>
      ))}
    </div>
  )
}
