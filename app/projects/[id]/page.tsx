"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, Calendar, ArrowRight } from "lucide-react"
import {
  SiAmazonwebservices,
  SiPython,
  SiReact,
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiDocker,
  SiTerraform,
  SiJira,
  SiGithub,
  SiSnowflake,
  SiRazorpay,
  SiMongodb,
  SiRedux,
  SiAxios,
  SiPostgresql,
  SiNginx,
  SiWikipedia,
  SiChartdotjs,
  SiLinkedin,
  SiIndeed,
  SiCoursera,
  SiUdemy,
} from "react-icons/si"
import { FaPython, FaAws, FaMicrosoft, FaCode, FaServer, FaFileAlt, FaFileCode, FaReact } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// This would typically come from an API or database
const projects = [
  {
    id: "plagiatex",
    title: "PlagiateX",
    description:
      "A full-stack plagiarism detection platform built using ReactJS, Tailwind CSS, and Django with Razorpay payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["ReactJS", "Tailwind CSS", "Django", "Razorpay"],
    icons: [
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiRazorpay />, name: "Razorpay" },
    ],
    github: "https://github.com/kaushal892004/plagiatex",
    demo: "https://plagiatex-demo.vercel.app",
    period: "Feb 2025 - March 2025",
    fullDescription:
      "PlagiateX is a full-stack plagiarism detection platform built using ReactJS, Tailwind CSS, and Django. It features clear user authentication, integrated Razorpay payment gateway for premium services, and provides advanced services such as plagiarism detection, grammar correction, AI-generated content identification, paraphrasing, and humanizing text.",
    features: [
      "User authentication and account management",
      "Razorpay payment gateway integration for premium services",
      "Advanced plagiarism detection algorithm",
      "Grammar correction and improvement suggestions",
      "AI-generated content identification",
      "Text paraphrasing and humanizing capabilities",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing a reliable plagiarism detection algorithm",
      "Integrating and securing the payment gateway",
      "Optimizing performance for large text processing",
      "Creating an intuitive user interface for complex features",
    ],
    technologies: {
      frontend: [
        { icon: <SiReact />, name: "React.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <SiAxios />, name: "Axios" },
      ],
      backend: [
        { icon: <SiDjango />, name: "Django" },
        { icon: <FaPython />, name: "Django REST Framework" },
        { icon: <FaPython />, name: "Celery" },
      ],
      database: [{ icon: <SiPostgresql />, name: "PostgreSQL" }],
      deployment: [
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiNginx />, name: "Nginx" },
        { icon: <SiAmazonwebservices />, name: "AWS" },
      ],
    },
  },
  {
    id: "jarvis",
    title: "Jarvis",
    description: "A smart, voice-activated personal assistant designed to perform a variety of tasks using Python.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Python", "pyttsx3", "speech_recognition", "PyAudio"],
    icons: [
      { icon: <SiPython />, name: "Python" },
      { icon: <FaPython />, name: "pyttsx3" },
      { icon: <FaPython />, name: "SpeechRecognition" },
      { icon: <FaPython />, name: "PyAudio" },
    ],
    github: "https://github.com/kaushal892004/jarvis",
    demo: "",
    period: "Sep 2024 - Oct 2024",
    fullDescription:
      "Jarvis is a smart, voice-activated personal assistant designed to perform a variety of tasks, including speech recognition, text-to-speech synthesis, and executing commands like opening applications, providing information, and more. Built with Python, it leverages libraries like pyttsx3, speech_recognition, and PyAudio to deliver an interactive user experience.",
    features: [
      "Voice recognition and natural language processing",
      "Text-to-speech synthesis for responses",
      "Application launching via voice commands",
      "Web searches and information retrieval",
      "Basic conversation capabilities",
      "System control (shutdown, restart, etc.)",
      "Customizable commands and responses",
    ],
    challenges: [
      "Improving speech recognition accuracy in noisy environments",
      "Optimizing response time for better user experience",
      "Implementing natural language understanding",
      "Managing system resources efficiently",
    ],
    technologies: {
      core: [{ icon: <SiPython />, name: "Python 3.8+" }],
      libraries: [
        { icon: <FaPython />, name: "pyttsx3" },
        { icon: <FaPython />, name: "SpeechRecognition" },
        { icon: <FaPython />, name: "PyAudio" },
        { icon: <FaPython />, name: "NLTK" },
        { icon: <FaPython />, name: "Requests" },
        { icon: <FaPython />, name: "BeautifulSoup4" },
      ],
      apis: [
        { icon: <SiWikipedia />, name: "Wikipedia API" },
        { icon: <FaPython />, name: "OpenWeather API" },
        { icon: <FaPython />, name: "News API" },
      ],
    },
  },
  {
    id: "catalyst",
    title: "Catalyst",
    description:
      "AI-powered platform that identifies skill gaps and provides personalized job and training recommendations.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Python", "AI", "Machine Learning", "Flask", "React"],
    icons: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
    github: "https://github.com/kaushal892004/catalyst",
    demo: "https://catalyst-demo.vercel.app",
    period: "July 2024 - Sep 2024",
    fullDescription:
      "Catalyst is an AI-powered platform that identifies skill gaps by analyzing user profiles and provides personalized job and training recommendations. It offers real-time job market insights, adaptive learning pathways, and skills verification to enhance career development.",
    features: [
      "AI-powered skill gap analysis",
      "Personalized job recommendations",
      "Custom training pathways",
      "Real-time job market insights",
      "Skills verification and certification",
      "Progress tracking and analytics",
      "Integration with learning platforms",
    ],
    challenges: [
      "Developing accurate skill matching algorithms",
      "Gathering and processing real-time job market data",
      "Creating personalized learning pathways",
      "Ensuring data privacy and security",
    ],
    technologies: {
      frontend: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <FaReact />, name: "Material UI" },
        { icon: <SiChartdotjs />, name: "Chart.js" },
      ],
      backend: [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <FaPython />, name: "TensorFlow" },
        { icon: <FaPython />, name: "scikit-learn" },
      ],
      database: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaPython />, name: "Redis" },
      ],
      apis: [
        { icon: <SiLinkedin />, name: "LinkedIn API" },
        { icon: <SiIndeed />, name: "Indeed API" },
        { icon: <SiCoursera />, name: "Coursera API" },
        { icon: <SiUdemy />, name: "Udemy API" },
      ],
    },
  },
  {
    id: "github-jira-integration",
    title: "GitHub-Jira Integration",
    description: "AWS Lambda automation for GitHub and Jira integration with scheduled updates and S3 storage.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["AWS Lambda", "GitHub API", "Jira API", "S3", "Python"],
    icons: [
      { icon: <SiAmazonwebservices />, name: "AWS Lambda" },
      { icon: <SiGithub />, name: "GitHub API" },
      { icon: <SiJira />, name: "Jira API" },
      { icon: <SiPython />, name: "Python" },
    ],
    github: "https://github.com/kaushal892004/github-jira-integration",
    demo: "",
    period: "Feb 2025 - March 2025",
    fullDescription:
      "This project uses AWS Lambda to automate GitHub and Jira integration. One Lambda function fetches a user's GitHub repositories and creates Jira tickets labeled 'Created by AWS'. Another scheduled Lambda runs every 4 hours, checks for updates on these tickets across all Jira projects, logs the changes in a .txt file, and uploads it to an S3 bucket for tracking.",
    features: [
      "Automated GitHub repository scanning",
      "Automatic Jira ticket creation",
      "Scheduled ticket update monitoring",
      "Change logging to S3 storage",
      "Configurable scanning parameters",
      "Error handling and notification",
    ],
    challenges: [
      "Managing API rate limits",
      "Ensuring secure credential storage",
      "Optimizing Lambda execution time",
      "Handling large repositories efficiently",
    ],
    technologies: {
      core: [
        { icon: <SiPython />, name: "Python 3.9" },
        { icon: <FaAws />, name: "AWS Lambda" },
      ],
      aws: [
        { icon: <SiAmazonwebservices />, name: "S3" },
        { icon: <SiAmazonwebservices />, name: "CloudWatch Events" },
        { icon: <SiAmazonwebservices />, name: "IAM" },
        { icon: <SiAmazonwebservices />, name: "Systems Manager Parameter Store" },
      ],
      apis: [
        { icon: <SiGithub />, name: "GitHub API v3" },
        { icon: <SiJira />, name: "Jira REST API" },
      ],
      libraries: [
        { icon: <FaAws />, name: "Boto3" },
        { icon: <FaPython />, name: "Requests" },
        { icon: <FaPython />, name: "PyGithub" },
        { icon: <FaPython />, name: "Jira Python" },
      ],
    },
  },
  {
    id: "secure-key-management",
    title: "Secure Key Management",
    description: "AWS SSM & CloudFormation solution for securely managing API keys without hardcoding.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["AWS SSM", "CloudFormation", "Lambda", "Security", "IaC"],
    icons: [
      { icon: <SiAmazonwebservices />, name: "AWS SSM" },
      { icon: <SiAmazonwebservices />, name: "CloudFormation" },
      { icon: <FaAws />, name: "Lambda" },
      { icon: <SiTerraform />, name: "IaC" },
    ],
    github: "https://github.com/kaushal892004/secure-key-management",
    demo: "",
    period: "Feb 2025 - March 2025",
    fullDescription:
      "This project focuses on securely managing API keys using AWS SSM (Systems Manager) Parameters instead of hardcoding them or using environment variables. The Lambda code was updated to fetch keys directly from SSM, with global variables pointing to these parameters for easier access. Additionally, a CloudFormation template was created to automate the deployment of the Lambda function along with the creation of required SSM parameters, enabling consistent and secure infrastructure setup.",
    features: [
      "Secure API key storage in AWS SSM",
      "Automated infrastructure deployment with CloudFormation",
      "Lambda function integration with SSM parameters",
      "Encryption of sensitive parameters",
      "Least privilege IAM permissions",
      "Versioned parameter management",
    ],
    challenges: [
      "Designing a secure parameter naming convention",
      "Balancing security with ease of access",
      "Managing parameter versions across environments",
      "Optimizing Lambda cold start times with SSM",
    ],
    technologies: {
      aws: [
        { icon: <SiAmazonwebservices />, name: "Systems Manager Parameter Store" },
        { icon: <SiAmazonwebservices />, name: "CloudFormation" },
        { icon: <FaServer />, name: "Lambda" },
        { icon: <SiAmazonwebservices />, name: "IAM" },
        { icon: <SiAmazonwebservices />, name: "KMS" },
      ],
      languages: [
        { icon: <SiPython />, name: "Python" },
        { icon: <FaCode />, name: "YAML" },
      ],
      tools: [
        { icon: <FaAws />, name: "AWS CLI" },
        { icon: <FaAws />, name: "AWS SAM" },
      ],
    },
  },
  {
    id: "snowflake-azure-integration",
    title: "Snowflake to Azure Integration",
    description: "Data transfer automation from Snowflake to Azure Blob with validation using Azure Data Factory.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Azure Data Factory", "Snowflake", "Azure Blob", "Data Validation"],
    icons: [
      { icon: <FaMicrosoft />, name: "Azure Data Factory" },
      { icon: <SiSnowflake />, name: "Snowflake" },
      { icon: <FaMicrosoft />, name: "Azure Blob" },
      { icon: <FaMicrosoft />, name: "Data Validation" },
    ],
    github: "https://github.com/kaushal892004/snowflake-azure-integration",
    demo: "",
    period: "Feb 2025 - March 2025",
    fullDescription:
      "This project automates data transfer from Snowflake to an Azure Blob container using Azure Data Factory. A CSV file was manually uploaded to Snowflake, and Data Factory was set up to fetch the data every 6 hours and store it as a CSV in Blob storage. A data validation mechanism was implemented to verify data integrity at both the source and destination. The complete workflow, including data validation, was successfully implemented and tested.",
    features: [
      "Automated data transfer from Snowflake to Azure Blob",
      "Scheduled execution every 6 hours",
      "Data validation at source and destination",
      "Error handling and notification",
      "Logging and monitoring",
      "Configurable transfer parameters",
    ],
    challenges: [
      "Ensuring data integrity during transfer",
      "Optimizing transfer performance for large datasets",
      "Implementing robust error handling",
      "Managing credentials securely across platforms",
    ],
    technologies: {
      azure: [
        { icon: <FaMicrosoft />, name: "Data Factory" },
        { icon: <FaMicrosoft />, name: "Blob Storage" },
        { icon: <FaMicrosoft />, name: "Key Vault" },
        { icon: <FaMicrosoft />, name: "Logic Apps" },
      ],
      snowflake: [
        { icon: <SiSnowflake />, name: "Snowflake SQL" },
        { icon: <SiSnowflake />, name: "Snowflake Connectors" },
      ],
      dataFormats: [
        { icon: <FaFileAlt />, name: "CSV" },
        { icon: <FaFileCode />, name: "JSON" },
      ],
      validation: [
        { icon: <FaPython />, name: "MD5 checksums" },
        { icon: <FaPython />, name: "Record count validation" },
        { icon: <FaPython />, name: "Schema validation" },
      ],
    },
  },
]

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const projectId = params.id as string
      const foundProject = projects.find((p) => p.id === projectId)

      if (foundProject) {
        setProject(foundProject)
      } else {
        router.push("/")
      }

      setLoading(false)
    }
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/95">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/95">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Button asChild className="btn-enhanced">
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4 py-12">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="mb-8 btn-enhanced hover:bg-primary/10 hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="flex items-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
              </div>

              <div className="flex items-center mb-6 text-foreground/70">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{project.period}</span>
              </div>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-4 mb-6 text-2xl">
                {project.icons.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center text-primary">
                    <div>{tech.icon}</div>
                    <span className="text-xs mt-1">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string, index: number) => (
                  <Badge
                    key={index}
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-foreground/80">{project.fullDescription}</p>
              </div>

              {project.features && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="text-foreground/80">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="text-foreground/80">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(project.technologies).map(([category, techs]: [string, any], index: number) => (
                      <Card key={index} className="border-l-4 border-l-primary">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2 capitalize">{category}</h3>
                          <div className="space-y-2">
                            {techs.map((tech: any, techIndex: number) => (
                              <div key={techIndex} className="flex items-center gap-2 text-foreground/80 text-sm">
                                <span className="text-primary">{tech.icon}</span>
                                <span>{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="sticky top-24 border-none shadow-lg bg-gradient-to-br from-background to-muted glass">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Project Links</h2>

                  <div className="space-y-4">
                    <Button asChild className="w-full btn-enhanced bg-primary hover:bg-primary/90">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        View Source Code
                      </Link>
                    </Button>

                    {project.demo && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full btn-enhanced border-primary text-primary hover:bg-primary/10"
                      >
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Other Projects</h3>
                    <div className="space-y-3">
                      {projects
                        .filter((p) => p.id !== project.id)
                        .slice(0, 3)
                        .map((p, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            className="w-full justify-start hover:bg-primary/10 hover:text-primary text-left"
                            onClick={() => router.push(`/projects/${p.id}`)}
                          >
                            <ArrowRight className="mr-2 h-4 w-4" />
                            <span className="truncate">{p.title}</span>
                          </Button>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
