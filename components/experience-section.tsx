import { Card, CardContent, CardHeader } from "@/components/ui/card"

const experiences = [
  {
    title: "Android Development Intern",
    company: "PRODIGY Infotech",
    period: "June 2024 - July 2024",
    logo: "📱",
    description:
      "Gained hands-on experience with mobile application design and development. Focused on creating user-friendly interfaces and ensuring seamless functionality across projects. Worked with Android development tools and frameworks.",
  },
  {
    title: "Web Development Intern",
    company: "YHILLS Edutech",
    period: "June 2023 - July 2023",
    logo: "💻",
    description:
      "Developed an e-commerce hospital management system using HTML, CSS, JavaScript, and modern frameworks. Gained practical exposure to the development lifecycle, teamwork, and effective communication in a professional environment.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="container py-24 bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey through internships</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{exp.logo}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg leading-tight">{exp.title}</h3>
                  <p className="text-blue-600 font-medium text-sm">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
