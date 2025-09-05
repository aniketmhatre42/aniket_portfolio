import { Badge } from "@/components/ui/badge"

export function ModernSkills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "Firebase",
    "MongoDB",
    "Machine Learning",
    "Computer Vision",
    "AI",
    "OCR",
    "NLP",
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Skills & Technologies</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm hover:bg-white/20 transition-all duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
