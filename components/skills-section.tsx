"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  SiPython,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiLinux,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiC,
  SiCplusplus,
} from "react-icons/si"
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaNetworkWired, FaMicrosoft } from "react-icons/fa"

const skillCategories = [
  {
    title: "Languages",
    icon: <FaCode className="h-6 w-6" />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
    ],
    color: "#0066ff",
  },
  {
    title: "Backend",
    icon: <FaServer className="h-6 w-6" />,
    skills: [
      { name: "Flask", icon: <SiFlask /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
    color: "#01FFC3",
  },
  {
    title: "Databases",
    icon: <FaDatabase className="h-6 w-6" />,
    skills: [
      { name: "SQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    color: "#F9C80E",
  },
  {
    title: "Cloud",
    icon: <FaCloud className="h-6 w-6" />,
    skills: [
      { name: "AWS (IAM, EC2, EBS, S3, Lambda, CloudFormation)", icon: <SiAmazonwebservices /> },
      { name: "Azure (Storage, Functions, Data Factories)", icon: <FaMicrosoft /> },
    ],
    color: "#05D9E8",
  },
  {
    title: "DevOps",
    icon: <FaNetworkWired className="h-6 w-6" />,
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Jenkins", icon: <SiJenkins /> },
    ],
    color: "#FF2A6D",
  },
  {
    title: "Tools",
    icon: <FaTools className="h-6 w-6" />,
    skills: [
      { name: "Git", icon: <SiGithub /> },
      { name: "GitHub/GitLab", icon: <SiGitlab /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
    color: "#9D4EDD",
  },
]

export function SkillsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-background/95 to-background">
      <div className="circuit-pattern absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary">
            My Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted card-3d">
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: category.color }}></div>
                <CardContent className="p-6 card-3d-content">
                  <div className="flex items-center mb-4">
                    <div
                      className="mr-3 p-3 rounded-full text-primary"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="text-xs hover:bg-primary/20 transition-all duration-300 flex items-center gap-1"
                        style={{
                          backgroundColor: `${category.color}20`,
                          color: category.color,
                        }}
                      >
                        <span className="mr-1">{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I continuously expand my skill set to stay current with emerging technologies and best practices in software
            development, DevOps, and cybersecurity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
