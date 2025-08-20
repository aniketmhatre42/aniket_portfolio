import { Button } from "@/components/ui/button"
import { Linkedin, Github } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="container py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 px-6 lg:px-8 lg:pr-12 animate-slide-in-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
              Hi, I'm Aniket Mhatre
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
              and I am <span className="text-blue-600 font-semibold">Full-Stack Web Developer</span>
            </p>
          </div>
          <p className="text-base leading-relaxed max-w-lg animate-fade-in animation-delay-300">
            Recently graduated in Computer Engineering from Pillai HOC College of Engineering and Technology 🎓.
            Passionate about Full-Stack Development 💻, AI 🤖, and creating impactful real-world projects. I love
            solving complex problems and building innovative solutions with modern web technologies.
          </p>
          <div className="flex gap-4 animate-fade-in animation-delay-400">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://linkedin.com/in/aniket-mhatre" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                View on LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transform hover:scale-105 transition-all duration-300 border-2 hover:border-purple-300 bg-transparent"
              asChild
            >
              <a href="https://github.com/aniketmhatre42" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end lg:pl-8 animate-slide-in-right">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400 animate-spin-slow p-1">
              <div className="w-full h-full rounded-full bg-background"></div>
            </div>
            <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center hover:scale-105 transition-transform duration-300 z-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anikett.jpg-nNShXkWyMNKC8iGGWAGr2Sh2Z6oJRm.jpeg"
                alt="Aniket Mhatre - Software Developer"
                className="w-64 h-64 rounded-full object-cover hover:scale-110 transition-transform duration-300 animate-pulse-subtle"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce-float animation-delay-300"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce-float animation-delay-500"></div>
            <div className="absolute top-8 -left-8 w-6 h-6 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-bounce-float animation-delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
