"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "Kaushal is an exceptional Python developer with a deep understanding of cybersecurity principles. His work on our secure authentication system was outstanding.",
    name: "Alex Johnson",
    position: "CTO, SecureTech",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "Working with Kaushal was a great experience. His attention to detail and focus on security best practices made our project a success. Highly recommended!",
    name: "Sarah Williams",
    position: "Project Manager, DataSafe",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    content:
      "Kaushal's expertise in Python and cloud technologies helped us modernize our infrastructure. His solutions are always secure, scalable, and well-documented.",
    name: "Michael Chen",
    position: "Lead Engineer, CloudNative",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    content:
      "I've had the pleasure of mentoring Kaushal, and his growth as a developer has been impressive. He tackles complex problems with creativity and thoroughness.",
    name: "Dr. Priya Sharma",
    position: "Professor, Technical University",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, nextTestimonial])

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                          <p className="text-lg text-center italic text-foreground/80 relative z-10">
                            "{testimonial.content}"
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-foreground/70">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 p-0 rounded-full ${activeIndex === index ? "bg-primary" : "bg-primary/20"}`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
