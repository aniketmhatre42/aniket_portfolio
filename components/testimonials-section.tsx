"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Swastik Patil",
      role: "Full Stack Developer",
    
      content:
        "Aniket's problem-solving approach and coding skills are exceptional. His projects always showcase innovation and technical excellence.",
      rating: 5,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lie7YSpeVhF4gjIG18eg2WvBazB1oR.png",
    },
    {
      name: "Yatish Chaubal",
      role: "Software Engineer",
      content:
        "Working with Aniket has been amazing. His dedication to clean code and user experience is truly impressive.",
      rating: 5,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UPOhTC2OXb3YHe1wTgGEurI0UCjEjp.png",
    },
    {
      name: "Shubham Karande",
      role: "Frontend Developer",
      content:
        "Aniket's React skills and attention to detail are outstanding. He consistently delivers high-quality solutions.",
      rating: 5,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-syXsWiu9CIslPfFIz6V3PWSeGldygu.png",
    },
    {
      name: "Swapnil Chavan",
      role: "Backend Developer",
      
      content:
        "Aniket's understanding of full-stack development and his collaborative approach make him a valuable team member.",
      rating: 5,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4raPcryqOpYaG9jcsDcZeTx8eSjoef.png",
    },
    {
      name: "Sujal Gawand",
      role: "Mobile Developer",
      
      content:
        "Aniket's mobile development skills and innovative thinking have impressed everyone. Great potential in tech.",
      rating: 5,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lie7YSpeVhF4gjIG18eg2WvBazB1oR.png",
    },
    {
      name: "Bhakti Mhatre",
      role: "Project Manager",
      ,
      content: "Aniket's project management skills and technical expertise make him an asset to any development team.",
      rating: 5,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UPOhTC2OXb3YHe1wTgGEurI0UCjEjp.png",
    },
    {
      name: "Divya Gawand",
      role: "Data Scientist",
      
      content:
        "Aniket's work on AI projects and machine learning implementations shows his versatility and deep understanding.",
      rating: 5,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-syXsWiu9CIslPfFIz6V3PWSeGldygu.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What People{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Feedback from colleagues, mentors, and collaborators
          </p>
        </div>

        <div className="relative">
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <Quote className="text-blue-400 w-12 h-12 mb-6 mx-auto" />

            <div className="text-center">
              <p className="text-white text-lg leading-relaxed mb-8">"{testimonials[currentTestimonial].content}"</p>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <h4 className="text-white font-semibold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-blue-400 text-sm">{testimonials[currentTestimonial].role}</p>
                  <p className="text-gray-300 text-sm">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300 border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300 border border-white/20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentTestimonial ? "bg-blue-400" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
