"use client"

import { useRef, useState } from "react"

export function UniqueSkills() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-400" },
    { name: "React", level: 85, color: "from-blue-400 to-cyan-400" },
    { name: "Node.js", level: 80, color: "from-green-400 to-emerald-400" },
    { name: "Python", level: 85, color: "from-blue-500 to-indigo-500" },
    { name: "HTML5", level: 95, color: "from-orange-400 to-red-400" },
    { name: "CSS3", level: 90, color: "from-blue-400 to-purple-400" },
    { name: "TypeScript", level: 75, color: "from-blue-600 to-blue-400" },
    { name: "Next.js", level: 80, color: "from-gray-400 to-gray-600" },
    { name: "MongoDB", level: 70, color: "from-green-500 to-green-400" },
    { name: "Firebase", level: 75, color: "from-yellow-500 to-orange-500" },
    { name: "Git", level: 85, color: "from-red-500 to-pink-500" },
    { name: "Machine Learning", level: 70, color: "from-purple-500 to-pink-500" },
    { name: "AI", level: 65, color: "from-indigo-500 to-purple-500" },
    { name: "Docker", level: 60, color: "from-blue-500 to-cyan-500" },
    { name: "AWS", level: 55, color: "from-orange-500 to-yellow-500" },
    { name: "React Native", level: 70, color: "from-cyan-400 to-blue-400" },
    { name: "Express.js", level: 75, color: "from-gray-500 to-gray-400" },
    { name: "PostgreSQL", level: 65, color: "from-blue-600 to-indigo-600" },
  ]

  const marqueeSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "HTML5",
    "CSS3",
    "TypeScript",
    "Next.js",
    "MongoDB",
    "Firebase",
    "Git",
    "Machine Learning",
    "AI",
    "Docker",
    "AWS",
    "React Native",
    "Express.js",
    "PostgreSQL",
  ]

  const handleMarqueeHover = () => {
    setIsPaused(true)
  }

  const handleMarqueeLeave = () => {
    setIsPaused(false)
  }

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies I work with to create amazing digital experiences
          </p>
        </div>

        <div className="mb-16 overflow-hidden">
          <div
            className={`flex whitespace-nowrap ${isPaused ? "animate-none" : "animate-marquee"}`}
            onMouseEnter={handleMarqueeHover}
            onMouseLeave={handleMarqueeLeave}
          >
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span
                key={index}
                className="mx-8 text-2xl font-semibold text-white/60 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  const skillElement = document.querySelector(`[data-skill="${skill}"]`)
                  skillElement?.scrollIntoView({ behavior: "smooth", block: "center" })
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-skill={skill.name}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:animate-pulse`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
