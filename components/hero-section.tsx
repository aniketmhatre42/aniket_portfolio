import { Button } from "@/components/ui/button"
import { Linkedin, Github } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="container py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 px-6 lg:px-8 lg:pr-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hi, I'm Aniket Mhatre</h1>
            <p className="text-lg text-muted-foreground">
              and I am <span className="text-blue-600 font-semibold">Full-Stack Web Developer</span>
            </p>
          </div>
          <p className="text-base leading-relaxed max-w-lg">
            Recently graduated in Computer Engineering from Pillai HOC College of Engineering and Technology 🎓.
            Passionate about Full-Stack Development 💻, AI 🤖, and creating impactful real-world projects. I love
            solving complex problems and building innovative solutions with modern web technologies.
          </p>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="https://linkedin.com/in/aniket-mhatre" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                View on LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/aniketmhatre42" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end lg:pl-8">
          <div className="relative">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anikett.jpg-nNShXkWyMNKC8iGGWAGr2Sh2Z6oJRm.jpeg"
                alt="Aniket Mhatre - Software Developer"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
