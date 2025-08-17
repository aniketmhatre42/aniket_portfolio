import { Button } from "@/components/ui/button"
import { Linkedin, Github } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="container py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <img src="/developer-desk-coffee.png" alt="Developer illustration" className="w-96 h-96 object-contain" />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I recently graduated in Computer Engineering from Pillai HOC College of Engineering and Technology. I'm
              passionate about Full-Stack Development, Artificial Intelligence, and creating impactful real-world
              projects. With expertise in JavaScript, React, Node.js, Python, and C++, I'm always eager to learn new
              tech stacks and work on innovative ideas that solve complex problems.
            </p>
            <p>
              I have hands-on experience building projects like Teleconnect (a telemedicine web app for rural
              healthcare), Attendease (attendance management system), and various AI/ML projects including sentiment
              analysis and customer segmentation. I've also achieved recognition with a 2nd place at Tech Expo and 1st
              place in Code Hunt competitions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Connect with Me</h3>
            <div className="flex gap-4">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://linkedin.com/in/aniket-mhatre" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href="https://github.com/aniketmhatre42" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
