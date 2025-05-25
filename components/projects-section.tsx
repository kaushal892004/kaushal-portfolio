"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import {
  SiAmazonwebservices,
  SiPython,
  SiReact,
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiTerraform,
  SiJira,
  SiGithub,
  SiSnowflake,
} from "react-icons/si"
import { FaMicrosoft } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const projects = [
  {
    id: "plagiatex",
    title: "PlagiateX",
    description:
      "A full-stack plagiarism detection platform built using ReactJS, Tailwind CSS, and Django with Razorpay payment integration.",
    image: "/images/plagiatex.png",
    tags: ["ReactJS", "Tailwind CSS", "Django", "Razorpay"],
    icons: [<SiReact key="react" />, <SiTailwindcss key="tailwind" />, <SiDjango key="django" />],
    github: "https://github.com/kaushal892004/plagiatex",
    demo: "https://plagiatex-demo.vercel.app",
    period: "Feb 2025 - March 2025",
    fullDescription:
      "PlagiateX is a full-stack plagiarism detection platform built using ReactJS, Tailwind CSS, and Django. It features clear user authentication, integrated Razorpay payment gateway for premium services, and provides advanced services such as plagiarism detection, grammar correction, AI-generated content identification, paraphrasing, and humanizing text.",
  },
  {
    id: "jarvis",
    title: "Jarvis",
    description: "A smart, voice-activated personal assistant designed to perform a variety of tasks using Python.",
    image: "/images/Jarvis.png",
    tags: ["Python", "pyttsx3", "speech_recognition", "PyAudio"],
    icons: [<SiPython key="python" />],
    github: "https://github.com/kaushal892004/jarvis",
    demo: "",
    period: "Sep 2024 - Oct 2024",
    fullDescription:
      "Jarvis is a smart, voice-activated personal assistant designed to perform a variety of tasks, including speech recognition, text-to-speech synthesis, and executing commands like opening applications, providing information, and more. Built with Python, it leverages libraries like pyttsx3, speech_recognition, and PyAudio to deliver an interactive user experience.",
  },
  {
    id: "catalyst",
    title: "Catalyst",
    description:
      "AI-powered platform that identifies skill gaps and provides personalized job and training recommendations.",
    image: "/images/catalyst.png",
    tags: ["Python", "AI", "Machine Learning", "Flask", "React"],
    icons: [<SiPython key="python" />, <SiFlask key="flask" />, <SiReact key="react" />],
    github: "https://github.com/kaushal892004/catalyst",
    demo: "https://catalyst-demo.vercel.app",
    period: "July 2024 - Sep 2024",
    fullDescription:
      "Catalyst is an AI-powered platform that identifies skill gaps by analyzing user profiles and provides personalized job and training recommendations. It offers real-time job market insights, adaptive learning pathways, and skills verification to enhance career development.",
  },
  {
    id: "github-jira-integration",
    title: "GitHub-Jira Integration",
    description: "AWS Lambda automation for GitHub and Jira integration with scheduled updates and S3 storage.",
    image: "/images/Github-Jira.png",
    tags: ["AWS Lambda", "GitHub API", "Jira API", "S3", "Python"],
    icons: [
      <SiAmazonwebservices key="aws" />,
      <SiGithub key="github" />,
      <SiJira key="jira" />,
      <SiPython key="python" />,
    ],
    github: "https://github.com/kaushal892004/github-jira-integration",
    demo: "",
    period: "Feb 2025 - March 2025",
    fullDescription:
      "This project uses AWS Lambda to automate GitHub and Jira integration. One Lambda function fetches a user's GitHub repositories and creates Jira tickets labeled 'Created by AWS'. Another scheduled Lambda runs every 4 hours, checks for updates on these tickets across all Jira projects, logs the changes in a .txt file, and uploads it to an S3 bucket for tracking.",
  },
  {
    id: "secure-key-management",
    title: "Secure Key Management",
    description: "AWS SSM & CloudFormation solution for securely managing API keys without hardcoding.",
    image: "/images/SSM-CloudFormation.png",
    tags: ["AWS SSM", "CloudFormation", "Lambda", "Security", "IaC"],
    icons: [<SiAmazonwebservices key="aws" />, <SiTerraform key="terraform" />],
    github: "https://github.com/kaushal892004/secure-key-management",
    demo: "",
    period: "Feb 2025 - March 2025",
    fullDescription:
      "This project focuses on securely managing API keys using AWS SSM (Systems Manager) Parameters instead of hardcoding them or using environment variables. The Lambda code was updated to fetch keys directly from SSM, with global variables pointing to these parameters for easier access. Additionally, a CloudFormation template was created to automate the deployment of the Lambda function along with the creation of required SSM parameters, enabling consistent and secure infrastructure setup.",
  },
  {
    id: "snowflake-azure-integration",
    title: "Snowflake to Azure Integration",
    description: "Data transfer automation from Snowflake to Azure Blob with validation using Azure Data Factory.",
    image: "/images/Snowflake-ADF.png",
    tags: ["Azure Data Factory", "Snowflake", "Azure Blob", "Data Validation"],
    icons: [<FaMicrosoft key="azure" />, <SiSnowflake key="snowflake" />],
    github: "https://github.com/kaushal892004/snowflake-azure-integration",
    demo: "",
    period: "Feb 2025 - March 2025",
    fullDescription:
      "This project automates data transfer from Snowflake to an Azure Blob container using Azure Data Factory. A CSV file was manually uploaded to Snowflake, and Data Factory was set up to fetch the data every 6 hours and store it as a CSV in Blob storage. A data validation mechanism was implemented to verify data integrity at both the source and destination. The complete workflow, including data validation, was successfully implemented and tested.",
  },
]

export function ProjectsSection() {
  const router = useRouter()
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { once: false, amount: 0.2 })
  const [hoveredCard, setHoveredCard] = useState(null)

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`)
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background/95 relative">
      <div className="grid-bg absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer perspective hover-lift"
              onClick={() => handleProjectClick(project.id)}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Card
                className="h-full flex flex-col overflow-hidden border-none bg-gradient-to-br from-background to-muted glass"
                style={{
                  transform: hoveredCard === index ? "rotateY(5deg) rotateX(5deg)" : "rotateY(0) rotateX(0)",
                  transition: "transform 0.5s ease",
                  boxShadow:
                    hoveredCard === index
                      ? "0 10px 30px -10px rgba(0, 119, 181, 0.3), 0 0 5px rgba(0, 119, 181, 0.2), 0 0 15px rgba(0, 119, 181, 0.1)"
                      : "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                }}
              >
              <div className="relative h-48 overflow-hidden group bg-white">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-contain bg-white p-4 transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
    <Link href={`/projects/${project.id}`} passHref>
      <Button
        variant="secondary"
        className="btn-glow"
        onClick={(e) => e.stopPropagation()}
      >
        View Details <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </div>
</div>

                <CardContent className="flex-grow p-6">
                  <div className="text-xs text-primary/80 mb-2">{project.period}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>

                  {/* Tech Icons */}
                  <div className="flex gap-3 mb-4 text-primary/70">
                    {project.icons.map((icon, i) => (
                      <div key={i} className="text-xl">
                        {icon}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="btn-3d border-primary text-primary hover:bg-primary/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" className="btn-glow" onClick={(e) => e.stopPropagation()}>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="btn-glow btn-shimmer bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl"
          >
            <Link href="https://github.com/kaushal892004" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
