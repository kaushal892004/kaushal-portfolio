"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: false, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form and show success message
    setFormState({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Hide success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "parmarkaushal8924@gmail.com",
      link: "mailto:parmarkaushal8924@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 8200233074",
      link: "tel:+918200233074",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Gandhinagar, Gujarat, India",
      link: "https://maps.google.com/?q=Gandhinagar,Gujarat,India",
    },
  ]

  const inputVariants = {
    focus: {
      boxShadow:
        "0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary) / 0.3), 0 0 15px hsl(var(--primary) / 0.2)",
      y: -5,
      transition: { duration: 0.3 },
    },
    initial: {
      boxShadow: "none",
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="circuit-pattern absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" ref={formRef}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-6 neon-text">Let&apos;s Talk</h3>
            <p className="text-foreground/80 mb-8">
              Feel free to reach out if you have any questions, project inquiries, or just want to connect. I&apos;m
              always open to discussing new projects and opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 neon-glow">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <p className="text-foreground/70">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="border-none shadow-lg glass">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-foreground/70 text-center">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <motion.div initial="initial" whileHover="focus" whileFocus="focus" variants={inputVariants}>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="border-primary/20 focus:border-primary focus:ring-primary input-glow"
                          />
                        </motion.div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <motion.div initial="initial" whileHover="focus" whileFocus="focus" variants={inputVariants}>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="border-primary/20 focus:border-primary focus:ring-primary input-glow"
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <motion.div initial="initial" whileHover="focus" whileFocus="focus" variants={inputVariants}>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          required
                          className="border-primary/20 focus:border-primary focus:ring-primary input-glow"
                        />
                      </motion.div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <motion.div initial="initial" whileHover="focus" whileFocus="focus" variants={inputVariants}>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Your message here..."
                          rows={5}
                          required
                          className="border-primary/20 focus:border-primary focus:ring-primary input-glow"
                        />
                      </motion.div>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full btn-glow btn-ripple btn-shimmer bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
