// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Facebook, Music2, MapPin, Mail } from "lucide-react";
import { useRef } from "react"

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1800 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  )
}
export default function Home() {
  const [showHero, setShowHero] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-[#0a0a0f]">
      {/* Global Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg '%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-20">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out"
          }}
        />
        {/* FIXED: Changed .jpg to .jpeg */}
        <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/hero-mic.jpg')"
  }}
/>

<div className="absolute inset-0 bg-black/30" />
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
      <section className="h-screen flex items-center relative pt-20">
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
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#ff0040]" />
              <p className="text-xs tracking-[0.4em] uppercase text-[#00f0ff] font-semibold">
                San Antonio, TX • Since 2021
              </p>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] uppercase tracking-tighter">
              <span className="block text-white">Make</span>
              <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.5)]">Noise</span>
              <span className="block text-white/90">That Hits</span>
            </h1>

            <p className="mt-8 text-gray-400 max-w-xl text-lg leading-relaxed border-l-2 border-[#ff0040] pl-6">
              Studio-level recording for reggaeton, trap, and Latin artists. 
              Heavy 808s. Clean vocals. Industry-ready mixes that slap.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="group relative px-8 py-4 bg-[#ff0040] text-black font-bold uppercase tracking-wider text-sm overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,0,64,0.5)]"
              >
                <span className="relative z-10">Book Session</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/work"
                className="px-8 py-4 border border-[#00f0ff] text-[#00f0ff] font-bold uppercase tracking-wider text-sm hover:bg-[#00f0ff]/10 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                Hear the Work
              </Link>
            </div>

            <div className="mt-16 flex gap-12 text-sm">
              <div>
                <div className="text-3xl font-bold text-[#ff0040]">300+</div>
                <div className="text-gray-500 uppercase tracking-wider text-xs mt-1">Tracks Mixed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00f0ff]">20+</div>
                <div className="text-gray-500 uppercase tracking-wider text-xs mt-1">Artists</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">13+</div>
                <div className="text-gray-500 uppercase tracking-wider text-xs mt-1">Years</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest"></span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#ff0040] to-transparent" />
        </div>
      </section>

      {/* ================= THE PRODUCER ================= */}
      <section id="producer" className="py-20">
        <FadeInSection>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#ff0040]/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0f0f14]">
                {/* FIXED: Changed .jpg to .jpeg */}
                <Image 
                  src="/images/producer-portrait.jpeg" 
                  alt="Jeovanne Diaz - Invaluabless Productions Music Producer"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#ff0040]/20 to-[#00f0ff]/20">
                  <span className="text-6xl font-black text-white/20">INV</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#ff0040] text-black p-6 font-mono">
                <p className="font-bold text-3xl">13+</p>
                <p className="uppercase tracking-wider text-sm">Years</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-[#ff0040] text-xs uppercase tracking-[0.3em] mb-4">The Producer</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase">
  Jeovanne Diaz
</h2>

<p className="text-white/60 uppercase tracking-[0.3em] text-xs mt-4">
  Founder • Recording Engineer • Producer
</p>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
  Started in Puerto Rico in '09. Just speakers, hunger, and an ear for low-end that had to translate everywhere — cars, clubs, phone speakers. 
  A few months later, what began as a home setup turned into real sessions, real artists, and real pressure.
</p>

<p>
  2010: <strong className="text-white">La Caldera Records</strong>.  
  Built inside a barber shop in Quebradillas with my friend Josue Tosado (MR KUSH).  
  It wasn’t glamorous — but it worked. Artists came in, records got made, and the sound kept improving.  
  Reggaeton, trap, rap, R&B, Latin — whatever walked in, left different.
</p>

<p>
  2013: <strong className="text-white">Propiedad Urbana & Unstopable Studios</strong>. 
  San Juan was the next level. Real professional studios. Real pressure.  
  Sessions with <strong className="text-[#ff0040]">YOMO</strong>, <strong className="text-[#ff0040]">El Larax</strong>, <strong className="text-[#ff0040]">Nencho el León Salvaje</strong>, <strong className="text-[#ff0040]">Bimbo El Oso Mañoso</strong>, and many others.  
  I earned my certification as a Recording Engineer — but more importantly, I earned trust in the room.
</p>

<p>
  <strong className="text-white">NOW</strong>: 
  Now based in San Antonio, I focus on one thing:
  making records that sound clean, heavy, and ready for release.
</p>
              </div>

              <div className="border-l-4 border-[#ff0040] pl-6 py-2">
                <p className="text-lg font-bold italic text-white">
                  "Clean vocals. Heavy low end - If it don’t hit in the car at night, it’s not done."
                </p>
              </div>

              <p className="font-mono text-[#ff0040] uppercase tracking-widest text-sm">
                Play it loud. That's the test.
              </p>
            </div>
          </div>
       </div>
  </FadeInSection>
</section>

      {/* ================= SELECTED CREDITS ================= */}
      <section id="credits" className="py-20 border-y border-white/5">
       <FadeInSection>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-4 text-center">Selected Credits</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-center mb-16">
            Heavy Hitters <span className="text-[#ff0040]">.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3 uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#ff0040] rounded-full" />
                Puerto Rico
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'YOMO', 'El Larax', 'Nencho el León Salvaje', 'Bimbo el Oso Mañoso', 
                  'Xander el Imaginario', 'Xziel The One and Only', 'Baby Killa La Amenaza', 
                  'Lil Tree', 'Young Tyago', 'Young Abel', 'Bruze Wave', 'JLyan', 
                  'Kimo 7PDC', 'Krys El Lapiz Pesao', 'Luigi La Mente Celeste', 
                  'Sionel El de la Melodia', 'Tety La Destreza'
                ].map((artist) => (
                  <span key={artist} className="bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium hover:bg-[#ff0040]/20 hover:border-[#ff0040]/50 transition-all cursor-default">
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3 uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#00f0ff] rounded-full" />
                USA / Texas
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Sammy D', 'Jay Lex', 'NinoPR', 'Johnny West', 'Xuniel & El JJJavi', 
                  'J Kings', 'Marco Antonio Lopez', 'Carli', 'Ryan Rivera', 'Solo Deyvi',
                  'Melchory Gang', 'Jancy La Potencia', 'Haitian Crook', 'Leonelson'
                ].map((artist) => (
                  <span key={artist} className="bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all cursor-default">
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400 border-t border-white/10 pt-12">
            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Studios</h4>
              <p className="leading-relaxed">La Caldera Records (Quebradillas, PR) • Propiedad Urbana (San Juan, PR) • Unstopable Studio (San Juan, PR) • Invaluabless Productions (San Antonio, TX)</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Certification</h4>
              <p>Recording Engineer — CCAT, Bayamón, Puerto Rico</p>
            </div>
          </div>
       </div>
  </FadeInSection>
</section>

      {/* ================= THE STUDIO ================= */}
      <section id="studio" className="py-20">
          <FadeInSection>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-4">The Studio</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
              Built for Sound.<br />
              <span className="text-[#ff0040]">Designed for Sessions.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FIXED: Changed .jpg to .jpeg */}
            <div className="relative group overflow-hidden border border-white/10 aspect-video bg-[#0f0f14]">
              <Image 
                src="/images/studio-wide-led.jpeg" 
                alt="Invaluabless Productions Studio - San Antonio"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#ff0040]/10 to-[#00f0ff]/10 pointer-events-none">
                <span className="text-gray-600 font-mono text-sm uppercase tracking-widest">Studio Control Room</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#00f0ff]">Control Room • San Antonio, TX</p>
              </div>
            </div>

            {/* FIXED: Changed .jpg to .jpeg */}
            <div className="relative group overflow-hidden border border-white/10 aspect-video bg-[#0f0f14]">
              <Image 
                src="/images/artist-in-booth.jpeg" 
                alt="Artist recording session"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#00f0ff]/10 to-[#ff0040]/10 pointer-events-none">
                <span className="text-gray-600 font-mono text-sm uppercase tracking-widest">Vocal Booth Sessions</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#ff0040]">Vocal Booth • Session Life</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-[#ff0040]/50 transition-all group">
              <h4 className="text-2xl font-bold mb-3 uppercase group-hover:text-[#ff0040] transition-colors">Recording</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Vocals, instruments, full bands. Clean signal chain, pro environment.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-[#00f0ff]/50 transition-all group">
              <h4 className="text-2xl font-bold mb-3 uppercase group-hover:text-[#00f0ff] transition-colors">Mix & Master</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Radio-ready, club-tested, headphone-approved. Your sound, elevated.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-[#ff0040]/50 transition-all group">
              <h4 className="text-2xl font-bold mb-3 uppercase group-hover:text-[#ff0040] transition-colors">Beats</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Original production. Reggaeton, trap, rap, Latin. Custom or licensed.</p>
            </div>
          </div>
    </div>
  </FadeInSection>
</section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20">
        <FadeInSection>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff0040]/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center relative">
          <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6">
            Let's Work<span className="text-[#ff0040]">.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16">Ready to make records that last? Let's build your sound.</p>

          <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#ff0040] mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">Studio</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">3200 Wright Carpenter Rd<br />San Antonio, Texas 78221</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#00f0ff] mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">Email</h4>
                  <div className="space-y-1 text-gray-400 text-sm">
                    <p><span className="text-white">Bookings:</span> bookings@invaluablessproduction.com</p>
                    <p><span className="text-white">Beats:</span> beats@invaluablessproduction.com</p>
                    <p><span className="text-white">General:</span> support@invaluablessproduction.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg uppercase tracking-wider">Follow the Work</h4>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://instagram.com/invaluablessproduction " target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#ff0040]/20 hover:border-[#ff0040]/50 transition-all group">
                  <Instagram className="w-5 h-5 text-[#ff0040] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a href="https://youtube.com/@InvaluaBlessProductions " target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#ff0040]/20 hover:border-[#ff0040]/50 transition-all group">
                  <Youtube className="w-5 h-5 text-[#ff0040] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>
                <a href="https://facebook.com/invaluablessproduction " target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all group">
                  <Facebook className="w-5 h-5 text-[#00f0ff] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a href="https://tiktok.com/@invaluablessproductions " target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all group">
                  <Music2 className="w-5 h-5 text-[#00f0ff] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          <Link
            href="/book"
            className="inline-block px-12 py-5 bg-[#ff0040] text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#ff3366] transition-all hover:shadow-[0_0_40px_rgba(255,0,64,0.5)]"
          >
            Book Your Session
          </Link>
      </div>
  </FadeInSection>
</section>

      {/* FOOTER REMOVED - Now handled by footer.tsx component */}
    </main>
  );
}