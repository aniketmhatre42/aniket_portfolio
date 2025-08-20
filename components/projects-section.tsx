import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "MEDICONNECT",
    subtitle: "AI-Assisted Telemedicine Kiosk for Rural India",
    description:
      "Developed MediConnect – an AI-assisted telemedicine kiosk to improve rural healthcare accessibility. Integrated facial recognition, NLP chatbot, YouTube API for health videos, and doctor video consultations. Implemented offline support and real-time prescription alerts for ASHA workers.",
    technologies: ["React.js", "Firebase", "YouTube API", "AI/ML", "NLP"],
    icon: "🏥",
  },
  {
    title: "GestureFlow",
    subtitle: "Computer Vision & Machine Learning",
    description:
      "Detects and interprets hand gestures using computer vision. Utilizes machine learning algorithms for gesture classification. Enhances user interaction through real-time gesture recognition.",
    technologies: ["Python", "Computer Vision", "Machine Learning", "OpenCV"],
    icon: "👋",
  },
  {
    title: "Teleconnect",
    subtitle: "Video Communication Platform",
    description:
      "A comprehensive video communication platform built with modern web technologies. Features real-time video calling, chat functionality, and seamless user experience for remote collaboration.",
    technologies: ["JavaScript", "WebRTC", "Node.js", "Socket.io"],
    icon: "📹",
  },
  {
    title: "Attendease",
    subtitle: "Smart Attendance Management System",
    description:
      "An intelligent attendance tracking system that streamlines the process of marking and managing attendance. Features automated tracking, reporting, and analytics for educational institutions.",
    technologies: ["JavaScript", "React.js", "Database", "Analytics"],
    icon: "📊",
  },
  {
    title: "NoteCraft",
    subtitle: "Digital Note Management Platform",
    description:
      "A feature-rich note-taking application with real-time synchronization, rich text editing, and organizational tools. Designed for productivity and seamless note management across devices.",
    technologies: ["JavaScript", "React.js", "Local Storage", "Rich Text Editor"],
    icon: "📝",
  },
  {
    title: "HealthHub",
    subtitle: "Healthcare Administration Platform",
    description:
      "A comprehensive hospital management system built in Java. Features patient management, appointment scheduling, staff coordination, and medical records management.",
    technologies: ["Java", "Database", "GUI", "Healthcare"],
    icon: "🏥",
  },
  {
    title: "MoodScope",
    subtitle: "AI-Powered Text Analysis Tool",
    description:
      "An intelligent sentiment analysis application that processes text data to determine emotional tone and sentiment. Uses natural language processing for accurate sentiment classification.",
    technologies: ["JavaScript", "NLP", "Machine Learning", "Text Processing"],
    icon: "🧠",
  },
  {
    title: "TaskMaster",
    subtitle: "Task Management Application",
    description:
      "A clean and intuitive task management application with features for adding, editing, and organizing daily tasks. Includes priority settings and completion tracking.",
    technologies: ["CSS", "JavaScript", "Local Storage", "DOM Manipulation"],
    icon: "✅",
  },
  {
    title: "QuizCraft",
    subtitle: "Interactive Learning Platform",
    description:
      "An engaging quiz application with multiple question types, scoring system, and progress tracking. Designed for educational purposes and skill assessment.",
    technologies: ["HTML", "CSS", "JavaScript", "Interactive UI"],
    icon: "🧩",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="container px-6 lg:px-8 py-24">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Innovative solutions I've built using modern technologies
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`border-none shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-slide-up cursor-pointer`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl group-hover:animate-bounce">{project.icon}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-purple-600 font-medium text-sm group-hover:text-blue-600 transition-colors duration-300">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 hover:scale-105 transition-all duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
