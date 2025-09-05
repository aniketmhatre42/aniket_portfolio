"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ModernWorks() {
  const projects = [
    {
      title: "MEDICONNECT",
      description:
        "AI-assisted telemedicine kiosk to improve rural healthcare accessibility with facial recognition, NLP chatbot, and doctor consultations.",
      tech: ["React", "Firebase", "YouTube API", "AI"],
      github: "https://github.com/aniketmhatre42",
      live: "#",
    },
    {
      title: "TGMS System",
      description:
        "Web app for streamlined student data management with document uploads and OCR for certificate processing.",
      tech: ["React", "OCR", "Document Processing"],
      github: "https://github.com/aniketmhatre42",
      live: "#",
    },
    {
      title: "GestureFlow",
      description:
        "Virtual hand gesture recognition system using computer vision and machine learning for real-time interaction.",
      tech: ["Python", "OpenCV", "Machine Learning"],
      github: "https://github.com/aniketmhatre42",
      live: "#",
    },
    {
      title: "NoteCraft",
      description: "Advanced note-taking application with rich text editing and organization features.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/aniketmhatre42",
      live: "#",
    },
    {
      title: "HealthHub",
      description: "Comprehensive hospital management system for efficient healthcare operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/aniketmhatre42",
      live: "#",
    },
    {
      title: "MoodScope",
      description: "Sentiment analysis tool for understanding emotional context in text data.",
      tech: ["Python", "NLP", "Machine Learning"],
      github: "https://github.com/aniketmhatre42",
      live: "#",
    },
  ]

  return (
    <section id="works" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Featured Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-300 border-blue-600/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
