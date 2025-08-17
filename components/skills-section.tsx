const skills = [
  { name: "MongoDB", icon: "🍃" },
  { name: "Express", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "Tailwind", icon: "💨" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Next.js", icon: "▲" },
  { name: "API", icon: "🔌" },
  { name: "Git", icon: "📚" },
  { name: "Firebase", icon: "🔥" },
  { name: "SQL", icon: "🗄️" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Skills 💻</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-20 h-20 rounded-full border-2 border-purple-200 flex items-center justify-center mb-3 group-hover:border-purple-400 transition-colors">
              <span className="text-2xl">{skill.icon}</span>
            </div>
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
