import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
    organization: "Pillai HOC College",
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
  },
  {
    title: "AWS Cloud Practitioner and Essentials",
    provider: "AWS",
    icon: "🌐",
  },
  {
    title: "Programme Internship Certified",
    provider: "Dezignolics",
    icon: "💼",
  },
  {
    title: "Python Developer Certification",
    provider: "SOLOLEARN",
    icon: "🐍",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="container py-24 bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Achievements & Certifications</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Recognition and certifications that showcase my dedication to learning and excellence
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">🏆 Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{achievement.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base leading-tight">{achievement.title}</h4>
                      <p className="text-yellow-600 font-medium text-sm">{achievement.organization}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
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
          <h3 className="text-2xl font-semibold mb-8 text-center">📜 Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{cert.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base leading-tight">{cert.title}</h4>
                      <p className="text-green-600 font-medium text-sm">{cert.provider}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
