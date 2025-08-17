import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Let's connect and discuss opportunities to work together
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:aniketmhatre769@gmail.com"
                className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
              >
                aniketmhatre769@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+919594744670"
                className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
              >
                +91 9594744670
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/aniket-mhatre4242/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
              >
                aniket-mhatre4242
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Github className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/aniketmhatre42"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-gray-600 transition-colors"
              >
                aniketmhatre42
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Mail className="w-4 h-4 mr-2" />
            <a href="mailto:aniketmhatre769@gmail.com">Send me an email</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
