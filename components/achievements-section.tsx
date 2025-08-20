"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CertificationModal } from "./certification-modal"

const achievements = [
  {
    title: "Rank 1 in Coding Competition",
    organization: "Coding Club [PHCET]",
    type: "Competition",
    icon: "🏆",
    description: "Secured first place in coding competition organized by the college coding club.",
  },
  {
    title: "Rank 1 in HSC Computer Science",
    organization: "RMV Aware",
    type: "Academic",
    icon: "🎯",
    description: "Achieved top rank in HSC Computer Science at college level.",
  },
  {
    title: "Rank 2 in Paper Presentation",
    organization: "TechExpo",
    type: "Competition",
    icon: "📄",
    description: "Secured second place in paper presentation competition at TechExpo.",
  },
]

const certifications = [
  {
    title: "Microsoft Azure Applications",
    provider: "Great Learning",
    icon: "☁️",
    image: "/azure-applications-certificate.png",
  },
  {
    title: "AWS Cloud Practitioner and Essentials",
    provider: "AWS",
    icon: "🌐",
    image: "/placeholder-014de.png",
  },
  {
    title: "Programme Internship Certified",
    provider: "Dezignolics",
    icon: "💼",
    image: "/dezignolics-internship-certificate.png",
  },
  {
    title: "Python Developer Certification",
    provider: "SOLOLEARN",
    icon: "🐍",
    image: "/placeholder-4pm1s.png",
  },
]

export function AchievementsSection() {
  const [selectedCertification, setSelectedCertification] = useState<(typeof certifications)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCertificationClick = (cert: (typeof certifications)[0]) => {
    setSelectedCertification(cert)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertification(null)
  }

  return (
    <section id="achievements" className="container px-6 lg:px-8 py-24 bg-muted/30">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Recognition and certifications that showcase my dedication to learning and excellence
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent animate-slide-up">
            🏆 Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl group-hover:animate-bounce">{achievement.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-yellow-600 font-medium text-sm group-hover:text-orange-600 transition-colors duration-300">
                        {achievement.organization}
                      </p>
                      <Badge
                        variant="outline"
                        className="mt-2 text-xs hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-100 hover:scale-105 transition-all duration-200"
                      >
                        {achievement.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent animate-slide-up">
            📜 Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCertificationClick(cert)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl group-hover:animate-bounce">{cert.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base leading-tight group-hover:text-green-600 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-green-600 font-medium text-sm group-hover:text-teal-600 transition-colors duration-300">
                        {cert.provider}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view certificate
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      {selectedCertification && (
        <CertificationModal isOpen={isModalOpen} onClose={closeModal} certification={selectedCertification} />
      )}
    </section>
  )
}
