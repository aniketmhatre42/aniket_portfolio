"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ModernHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anikett.jpg-nNShXkWyMNKC8iGGWAGr2Sh2Z6oJRm.jpeg"
                alt="Aniket Mhatre"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Creating web products,
          <br />
          <span className="text-white">brands, and experiences.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Hi I'm Aniket - A Passionate Frontend Developer
        </p>

        {/* CTA Button */}
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={() => {
            const element = document.getElementById("works")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          See my work →
        </Button>
      </div>
    </section>
  )
}
