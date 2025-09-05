import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function ModernContact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-12">Let's work together to create something amazing</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:aniketmhatre769@gmail.com"
            className="flex flex-col items-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <Mail className="text-blue-400 mb-3" size={24} />
            <span className="text-white text-sm">Email</span>
          </a>

          <a
            href="tel:+919594744670"
            className="flex flex-col items-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <Phone className="text-blue-400 mb-3" size={24} />
            <span className="text-white text-sm">Phone</span>
          </a>

          <a
            href="https://linkedin.com/in/aniket-mhatre4242/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <Linkedin className="text-blue-400 mb-3" size={24} />
            <span className="text-white text-sm">LinkedIn</span>
          </a>

          <a
            href="https://github.com/aniketmhatre42"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <Github className="text-blue-400 mb-3" size={24} />
            <span className="text-white text-sm">GitHub</span>
          </a>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium">
          Let's Talk
        </Button>
      </div>
    </section>
  )
}
