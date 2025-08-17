"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  const handleResumeDownload = () => {
    const resumeUrl = "/resume-aniket-mhatre.pdf" // You can upload your resume PDF to the public folder
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Aniket_Mhatre_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div></div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#home" className="transition-colors hover:text-foreground/80">
            Home
          </a>
          <a href="#about" className="transition-colors hover:text-foreground/80">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-foreground/80">
            Skills
          </a>
          <a href="#experience" className="transition-colors hover:text-foreground/80">
            Experience
          </a>
          <a href="#projects" className="transition-colors hover:text-foreground/80">
            Projects
          </a>
          <a href="#achievements" className="transition-colors hover:text-foreground/80">
            Achievements
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </a>
        </nav>
        <Button variant="secondary" size="sm" onClick={handleResumeDownload}>
          Resume
        </Button>
      </div>
    </header>
  )
}
