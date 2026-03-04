"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      setMousePos({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-[#0a0a0f]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Hero Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-mic.jpg')"
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Animated Color Glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out"
          }}
        />

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/80 to-[#0a0a0f]" />
      </div>

      {/* Subtle Film Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Invaluable Sounds
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          Professional audio production. Cinematic sound. Industry-level polish.
        </p>

        <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
          Book a Session
        </button>

      </div>

    </main>
  )
}