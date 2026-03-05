// app/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Facebook, Music2, MapPin, Mail } from "lucide-react";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.15 });

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1800ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
}

/** Interactive wrapper: neon corner brackets + mouse-follow glow */
function InteractiveCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`street-card interactive-card neon-corners ${className}`}
    >
      {/* corner brackets */}
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />
      {children}
    </div>
  );
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
    <main className="relative min-h-screen text-white bg-transparent overflow-hidden">
      {/* ===== BACKGROUND STACK (fixed, behind everything) ===== */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[#0a0a0f]" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero-mic.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/70 to-[#0a0a0f]" />
      </div>

      {/* Global Effects */}
      <div className="grain" />
      <div className="scanlines" />

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 opacity-[0.03] -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-20">
        {/* ================= HERO ================= */}
        <section className="h-screen flex items-center relative pt-20">
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
                <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.5)]">
                  Noise
                </span>
                <span className="block text-white/90">That Hits</span>
              </h1>

              {/* ✅ Intro paragraph in interactive container */}
              <div className="mt-8 max-w-2xl">
                <InteractiveCard className="p-6 md:p-7">
                  <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#ff0040] pl-6">
                    Studio-level recording for reggaeton, trap, and Latin artists. Heavy 808s. Clean
                    vocals. Industry-ready mixes that slap.
                  </p>
                </InteractiveCard>
              </div>

              {/* ✅ CTA buttons (Book button wrapped in a card container) */}
              <div className="mt-10 flex flex-wrap gap-4 items-stretch">
                <InteractiveCard className="p-2">
                  <Link
                    href="/book"
                    className="group relative block px-8 py-4 bg-[#ff0040] text-black font-bold uppercase tracking-wider text-sm overflow-hidden transition-all hover:glow-red"
                  >
                    <span className="relative z-10">Book Session</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>
                </InteractiveCard>

                <Link
                  href="/work"
                  className="group relative px-8 py-4 border border-[#00f0ff] text-[#00f0ff] font-bold uppercase tracking-wider text-sm overflow-hidden transition-all hover:glow-cyan"
                >
                  <span className="relative z-10">Hear the Work</span>
                  <div className="absolute inset-0 bg-[#00f0ff]/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </div>

              <div className="mt-16 flex gap-12 text-sm">
                <div>
                  <div className="text-3xl font-bold text-[#ff0040]">300+</div>
                  <div className="text-gray-500 uppercase tracking-wider text-xs mt-1">
                    Tracks Mixed
                  </div>
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
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#ff0040] to-transparent" />
          </div>
        </section>

        {/* ✅ Wave divider */}
    

        {/* ================= THE PRODUCER ================= */}
        <section id="producer" className="py-20">
          <FadeInSection>
            <div className="max-w-7xl mx-auto px-6 md:px-16">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left visual card becomes interactive */}
                <InteractiveCard className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0f0f14]">
                    <Image
                      src="/images/producer-portrait.jpeg"
                      alt="Jeovanne Diaz - Invaluabless Productions Music Producer"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff0040]/10 to-[#00f0ff]/10 pointer-events-none" />
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-[#ff0040] text-black p-6 font-mono shadow-[0_30px_120px_rgba(0,0,0,0.8)]">
                    <p className="font-bold text-3xl">13+</p>
                    <p className="uppercase tracking-wider text-sm">Years</p>
                  </div>
                </InteractiveCard>

                <div className="space-y-8">
                  <div>
                    <p className="text-[#ff0040] text-xs uppercase tracking-[0.3em] mb-4">
                      The Producer
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase">
                      Jeovanne Diaz
                    </h2>

                    <p className="text-white/60 uppercase tracking-[0.3em] text-xs mt-4">
                      Founder • Recording Engineer • Producer
                    </p>
                  </div>

                  {/* ✅ Bio in interactive container */}
                  <InteractiveCard className="p-6 md:p-7">
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                      <p>
                        Started in Puerto Rico in '09. Just speakers, hunger, and an ear for low-end
                        that had to translate everywhere — cars, clubs, phone speakers. A few months
                        later, what began as a home setup turned into real sessions, real artists,
                        and real pressure.
                      </p>

                      <p>
                        2010: <strong className="text-white">La Caldera Records</strong>. Built inside
                        a barber shop in Quebradillas with my friend Josue Tosado (MR KUSH). It wasn’t
                        glamorous — but it worked. Artists came in, records got made, and the sound
                        kept improving.
                      </p>

                      <p>
                        2013:{" "}
                        <strong className="text-white">Propiedad Urbana & Unstopable Studios</strong>.
                        San Juan was the next level. Real professional studios. Real pressure. Sessions
                        with <strong className="text-[#ff0040]">YOMO</strong>,{" "}
                        <strong className="text-[#ff0040]">El Larax</strong>,{" "}
                        <strong className="text-[#ff0040]">Nencho el León Salvaje</strong>,{" "}
                        <strong className="text-[#ff0040]">Bimbo El Oso Mañoso</strong>, and many others.
                      </p>

                      <p>
                        <strong className="text-white">NOW</strong>: Now based in San Antonio, I focus
                        on one thing: making records that sound clean, heavy, and ready for release.
                      </p>
                    </div>
                  </InteractiveCard>

                  <div className="border-l-4 border-[#ff0040] pl-6 py-2">
                    <p className="text-lg font-bold italic text-white">
                      "Clean vocals. Heavy low end - If it don’t hit in the car at night, it’s not done."
                    </p>
                  </div>

                  <p className="font-mono text-[#ff0040] uppercase tracking-widest text-sm">
                    Play it loud. That&apos;s the test.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ✅ Wave divider */}


        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-20 relative">
          <FadeInSection>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff0040]/5 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-16 text-center relative">
              <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-4">
                Get In Touch
              </p>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6">
                Let&apos;s Work<span className="text-[#ff0040]">.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-16">
                Ready to make records that last? Let&apos;s build your sound.
              </p>

              <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
                <InteractiveCard className="p-6 md:p-7">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-[#ff0040] mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">
                          Studio
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          3200 Wright Carpenter Rd
                          <br />
                          San Antonio, Texas 78221
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#00f0ff] mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">
                          Email
                        </h4>
                        <div className="space-y-1 text-gray-400 text-sm">
                          <p>
                            <span className="text-white">Bookings:</span>{" "}
                            bookings@invaluablessproduction.com
                          </p>
                          <p>
                            <span className="text-white">Beats:</span>{" "}
                            beats@invaluablessproduction.com
                          </p>
                          <p>
                            <span className="text-white">General:</span>{" "}
                            support@invaluablessproduction.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>

                <InteractiveCard className="p-6 md:p-7">
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg uppercase tracking-wider">
                      Follow the Work
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="https://instagram.com/invaluablessproduction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#ff0040]/20 hover:border-[#ff0040]/50 transition-all group"
                      >
                        <Instagram className="w-5 h-5 text-[#ff0040] group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Instagram</span>
                      </a>
                      <a
                        href="https://youtube.com/@InvaluaBlessProductions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#ff0040]/20 hover:border-[#ff0040]/50 transition-all group"
                      >
                        <Youtube className="w-5 h-5 text-[#ff0040] group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">YouTube</span>
                      </a>
                      <a
                        href="https://facebook.com/invaluablessproduction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all group"
                      >
                        <Facebook className="w-5 h-5 text-[#00f0ff] group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Facebook</span>
                      </a>
                      <a
                        href="https://tiktok.com/@invaluablessproductions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all group"
                      >
                        <Music2 className="w-5 h-5 text-[#00f0ff] group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">TikTok</span>
                      </a>
                    </div>
                  </div>
                </InteractiveCard>
              </div>

              <Link
                href="/book"
                className="group relative inline-block px-12 py-5 bg-[#ff0040] text-black font-bold uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:glow-red"
              >
                <span className="relative z-10">Book Your Session</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </FadeInSection>
        </section>
      </div>
    </main>
  );
}