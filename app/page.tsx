// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showHero, setShowHero] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Global Effects */}
      <div className="grain" />
      <div className="scanlines" />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out"
          }}
        />
        <div className="absolute inset-0 bg-[url('/images/hero-mic.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/80 to-[#0a0a0f]" />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      {/* ================= HERO ================= */}
      <section className="h-screen flex items-center relative">
        {/* Side accent lines */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-[2px] h-32 bg-gradient-to-b from-transparent via-[#ff0040] to-transparent" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-[2px] h-32 bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
          <div
            className={`transition-all duration-1000 ease-out ${
              showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#ff0040]" />
              <p className="text-xs tracking-[0.4em] uppercase text-[#00f0ff] font-semibold">
                San Antonio, TX
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-urban text-6xl md:text-8xl lg:text-9xl leading-[0.85] uppercase">
              <span className="block text-white">Make</span>
              <span className="block text-[#ff0040] text-glow-red">Noise</span>
              <span className="block text-white/90">That Hits</span>
            </h1>

            <p className="mt-8 text-gray-400 max-w-xl text-lg leading-relaxed border-l-2 border-[#ff0040] pl-6">
              Studio-level recording for reggaeton, trap, and Latin artists. 
              Heavy 808s. Clean vocals. Industry-ready mixes that slap.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="group relative px-8 py-4 bg-[#ff0040] text-black font-bold uppercase tracking-wider text-sm overflow-hidden transition-all hover:glow-red"
              >
                <span className="relative z-10">Book Session</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/work"
                className="px-8 py-4 border border-[#00f0ff] text-[#00f0ff] font-bold uppercase tracking-wider text-sm hover:bg-[#00f0ff]/10 transition-all hover:glow-cyan"
              >
                Hear the Work
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-12 text-sm">
              <div>
                <div className="font-urban text-3xl text-[#ff0040]">500+</div>
                <div className="text-gray-500 uppercase tracking-wider text-xs mt-1">Tracks Mixed</div>
              </div>
              <div>
                <div className="font-urban text-3xl text-[#00f0ff]">50+</div>
                <div className="text-gray-500 uppercase tracking-wider text-xs mt-1">Artists</div>
              </div>
              <div>
                <div className="font-urban text-3xl text-white">5</div>
                <div className="text-gray-500 uppercase tracking-wider text-xs mt-1">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#ff0040] to-transparent" />
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-2">What We Do</p>
              <h2 className="font-urban text-5xl md:text-6xl uppercase">
                Services <span className="text-[#ff0040]">.</span>
              </h2>
            </div>
            <Link href="/services" className="hidden md:block text-sm uppercase tracking-wider text-gray-400 hover:text-[#ff0040] transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard 
              title="Recording"
              desc="Vocal booths optimized for Latin vocals. Clean takes, tight comping."
              price="$50/hr"
              icon="🎤"
            />
            <ServiceCard 
              title="Mixing"
              desc="808s that hit. Vocals that cut. Radio-ready balance."
              price="$100"
              icon="🎚️"
            />
            <ServiceCard 
              title="Mastering"
              desc="Loudness optimized for streaming. Clean dynamics."
              price="$50"
              icon="📀"
            />
          </div>
        </div>
      </section>

      {/* ================= WORK PREVIEW ================= */}
      <section className="py-24 bg-[#0f0f14] relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff0040]/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-2">Recent Drops</p>
              <h2 className="font-urban text-5xl md:text-6xl uppercase">
                Work <span className="text-[#ff0040]">.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "BumBum ChaCha", artist: "Solo Deyvi", color: "#ff0040" },
              { title: "Pal Deporte", artist: "JJJavi", color: "#00f0ff" },
              { title: "Sugar Water", artist: "Sammy D", color: "#ff0040" },
              { title: "2 Pastillas", artist: "Melchory Gang", color: "#00f0ff" },
            ].map((track, i) => (
              <div 
                key={i}
                className="group street-card p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">{track.color === "#ff0040" ? "▶" : "♪"}</span>
                  <span className="text-xs text-gray-500 font-mono">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-lg group-hover:text-[#ff0040] transition-colors">{track.title}</h3>
                <p className="text-sm text-gray-400">{track.artist}</p>
                <div className="mt-4 h-[2px] w-12 bg-gray-700 group-hover:w-full group-hover:bg-[#ff0040] transition-all duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/work" className="inline-flex items-center gap-2 text-[#ff0040] uppercase tracking-wider text-sm font-semibold hover:glow-red px-6 py-3 border border-[#ff0040]/30 rounded-none transition-all hover:bg-[#ff0040]/10">
              View All Tracks <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff0040]/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center relative">
          <h2 className="font-urban text-6xl md:text-8xl uppercase leading-[0.9]">
            Ready to <span className="text-[#ff0040] text-glow-red">Create</span>?
          </h2>
          
          <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto">
            Stop waiting. Start recording. Your sound is waiting.
          </p>

          <div className="mt-12">
            <Link
              href="/book"
              className="inline-block px-12 py-5 bg-[#ff0040] text-black font-bold uppercase tracking-[0.2em] text-sm glow-red hover:bg-[#ff3366] transition-colors"
            >
              Lock In Your Session
            </Link>
          </div>

          <p className="mt-6 text-xs text-gray-600 uppercase tracking-widest">
            Deposit required • Same-week availability
          </p>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ title, desc, price, icon }: { title: string; desc: string; price: string; icon: string }) {
  return (
    <div className="street-card p-8 group cursor-pointer">
      <div className="text-3xl mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">{icon}</div>
      <h3 className="font-urban text-2xl uppercase mb-2 group-hover:text-[#ff0040] transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-[#00f0ff] font-bold font-mono">{price}</span>
        <span className="text-xs uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors">Book →</span>
      </div>
    </div>
  );
}