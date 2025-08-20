"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-400 rounded-full animate-spin mx-auto mt-2 ml-2"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white animate-pulse">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Aniket Mhatre
            </span>
          </h1>
          <p className="text-white/80 text-lg animate-bounce">Loading Portfolio...</p>
        </div>

        <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-400 to-teal-400 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  )
}
