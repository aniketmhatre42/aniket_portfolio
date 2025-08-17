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
    title: "Virtual Hand Gesture Recognition",
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
    title: "Note Taking App",
    subtitle: "Digital Note Management Platform",
    description:
      "A feature-rich note-taking application with real-time synchronization, rich text editing, and organizational tools. Designed for productivity and seamless note management across devices.",
    technologies: ["JavaScript", "React.js", "Local Storage", "Rich Text Editor"],
    icon: "📝",
  },
  {
    title: "Phone Authentication",
    subtitle: "Secure Phone Verification System",
    description:
      "A robust phone number authentication system with OTP verification. Implements secure user verification processes with SMS integration and user-friendly interface.",
    technologies: ["JavaScript", "Firebase Auth", "SMS API", "React.js"],
    icon: "📱",
  },
  {
    title: "Hospital Management System",
    subtitle: "Healthcare Administration Platform",
    description:
      "A comprehensive hospital management system built in Java. Features patient management, appointment scheduling, staff coordination, and medical records management.",
    technologies: ["Java", "Database", "GUI", "Healthcare"],
    icon: "🏥",
  },
  {
    title: "Sentiment Analysis",
    subtitle: "AI-Powered Text Analysis Tool",
    description:
      "An intelligent sentiment analysis application that processes text data to determine emotional tone and sentiment. Uses natural language processing for accurate sentiment classification.",
    technologies: ["JavaScript", "NLP", "Machine Learning", "Text Processing"],
    icon: "🧠",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio & Showcase",
    description:
      "A responsive personal portfolio website showcasing projects, skills, and professional experience. Built with modern CSS and clean design principles.",
    technologies: ["CSS", "HTML", "JavaScript", "Responsive Design"],
    icon: "💼",
  },
  {
    title: "To-Do List App",
    subtitle: "Task Management Application",
    description:
      "A clean and intuitive task management application with features for adding, editing, and organizing daily tasks. Includes priority settings and completion tracking.",
    technologies: ["CSS", "JavaScript", "Local Storage", "DOM Manipulation"],
    icon: "✅",
  },
  {
    title: "Quiz Application",
    subtitle: "Interactive Learning Platform",
    description:
      "An engaging quiz application with multiple question types, scoring system, and progress tracking. Designed for educational purposes and skill assessment.",
    technologies: ["HTML", "CSS", "JavaScript", "Interactive UI"],
    icon: "🧩",
  },
  {
    title: "Customer Segmentation",
    subtitle: "K-Means Clustering Analysis",
    description:
      "A data science project implementing K-Means clustering algorithm for customer segmentation. Analyzes customer behavior patterns and provides business insights through data visualization.",
    technologies: ["Python", "Jupyter Notebook", "K-Means", "Data Science", "Pandas"],
    icon: "📈",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Innovative solutions I've built using modern technologies
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{project.icon}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                  <p className="text-purple-600 font-medium text-sm">{project.subtitle}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
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
