"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function UniqueHero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Web Developer"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Aniket_Mhatre_Resume.pdf"
    link.download = "Aniket_Mhatre_Resume.pdf"
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Aniket
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl text-blue-300 h-12">
                {text}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Recently graduated in Computer Engineering from Pillai HOC College of Engineering and Technology 🎓.
              Passionate about Full-Stack Development 💻, AI 🤖, and creating impactful real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </button>
              <button
                onClick={handleDownloadResume}
                className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/aniketmhatre42"
                className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aniket-mhatre4242"
                className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:aniketmhatre769@gmail.com"
                className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1 bg-gradient-to-r from-blue-400 to-purple-400 shadow-2xl shadow-blue-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aniket.jpg-DXoPaZowhu8shW9qHpzvrDywJuuB5g.jpeg"
                    alt="Aniket Mhatre"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
