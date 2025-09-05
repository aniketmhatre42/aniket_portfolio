import { AnimatedBackground } from "@/components/animated-background"
import { UniqueHeader } from "@/components/unique-header"
import { UniqueHero } from "@/components/unique-hero"
import { ServicesSection } from "@/components/services-section"
import { UniqueProjects } from "@/components/unique-projects"
import { UniqueSkills } from "@/components/unique-skills"
import { TestimonialsSection } from "@/components/testimonials-section"
import { UniqueContact } from "@/components/unique-contact"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <UniqueHeader />
        <main>
          <UniqueHero />
          <ServicesSection />
          <UniqueProjects />
          <UniqueSkills />
          <TestimonialsSection />
          <UniqueContact />
        </main>
      </div>
    </div>
  )
}
