"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Facebook, Music2, MapPin, Mail } from "lucide-react";

export default function ProducerSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // shared “street-card” fallback (in case you don’t use the class here)
  const streetCard =
    "border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_10px_60px_rgba(0,0,0,0.45)]";

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* ===== EXACT SAME BACKGROUND STYLE AS BOOK PAGE ===== */}

      {/* Optional global effects if you have these classes in globals.css */}
      <div className="grain" />
      <div className="scanlines" />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-[url('/images/hero-mic.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ===== CONTENT WRAPPER (always above background) ===== */}
      <section className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#ff0040]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[#00f0ff] font-semibold">
              The Producer
            </p>
          </div>

          <h1 className="font-urban text-5xl md:text-7xl uppercase leading-[0.9]">
            Jeovanne Diaz<span className="text-[#ff0040]">.</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed border-l-2 border-[#ff0040] pl-6">
            Started in Puerto Rico in &apos;09. Built through real rooms, real pressure, and real
            records — now based in San Antonio focused on one thing: making records that sound
            clean, heavy, and ready for release.
          </p>
        </div>

        {/* Top grid: Image + Story */}
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {/* Image card */}
          <div className="md:col-span-5">
            <div className={`relative overflow-hidden ${streetCard}`}>
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/producer-portrait.jpeg"
                  alt="Jeovanne Diaz - Invaluabless Productions Music Producer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-urban text-2xl md:text-3xl uppercase text-white">
                    Clean vocals. Heavy low end<span className="text-[#ff0040]">.</span>
                  </p>
                  <p className="text-xs text-[#00f0ff] uppercase tracking-widest mt-2">
                    Play it loud. That&apos;s the test.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story card */}
          <div className="md:col-span-7">
            <div className={`${streetCard} p-6 md:p-8`}>
              <p className="text-[#ff0040] text-xs uppercase tracking-[0.3em] mb-4">
                The Story
              </p>

              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Started in Puerto Rico in &apos;09. Just speakers, hunger, and an ear for low-end
                  that had to translate everywhere — cars, clubs, phone speakers. A few months later,
                  what began as a home setup turned into real sessions, real artists, and real
                  pressure.
                </p>

                <p>
                  2010: <strong className="text-white">La Caldera Records</strong>. Built inside a barber
                  shop in Quebradillas with my friend Josue Tosado (MR KUSH). It wasn&apos;t glamorous —
                  but it worked. Artists came in, records got made, and the sound kept improving.
                </p>

                <p>
                  2013: <strong className="text-white">Propiedad Urbana &amp; Unstopable Studios</strong>.
                  San Juan was the next level. Sessions with{" "}
                  <strong className="text-[#ff0040]">YOMO</strong>,{" "}
                  <strong className="text-[#ff0040]">El Larax</strong>,{" "}
                  <strong className="text-[#ff0040]">Nencho el León Salvaje</strong>,{" "}
                  <strong className="text-[#ff0040]">Bimbo El Oso Mañoso</strong>, and many others.
                  I earned my certification as a Recording Engineer — but more importantly, I earned
                  trust in the room.
                </p>

                <p>
                  <strong className="text-white">NOW</strong>: Now based in San Antonio, I focus on one
                  thing: making records that sound clean, heavy, and ready for release.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Sound (centered, ends like your yellow line request) */}
        <div className="mt-8">
          <div className={`${streetCard} p-6 md:p-8`}>
            <div className="max-w-4xl mx-auto">
              <div className="border-l-4 border-[#ff0040] pl-6 py-1">
                <p className="text-lg md:text-xl font-bold italic text-white">
                  "Clean vocals. Heavy low end - If it don’t hit in the car at night, it’s not done."
                </p>
              </div>
              <p className="mt-4 text-center font-mono text-[#ff0040] uppercase tracking-widest text-sm">
                Play it loud. That&apos;s the test.
              </p>
            </div>
          </div>
        </div>

        {/* Selected Credits (centered like your purple box request) */}
        <div className="mt-8">
          <div className={`${streetCard} p-6 md:p-10`}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="font-urban text-2xl md:text-3xl uppercase tracking-wider">
                Selected Credits<span className="text-[#ff0040]">.</span>
              </h3>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                PR • Texas • Worldwide
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-3">
                  Puerto Rico
                </p>
                <div className="flex flex-wrap gap-2">
                  {["YOMO", "El Larax", "Nencho el León Salvaje", "Bimbo el Oso Mañoso", "Xander el Imaginario"].map(
                    (name) => (
                      <span
                        key={name}
                        className="px-3 py-1.5 text-xs uppercase tracking-wider border border-white/10 bg-white/[0.03] text-gray-300 hover:border-[#ff0040]/50 hover:bg-[#ff0040]/10 transition-all"
                      >
                        {name}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-3">
                  USA / Texas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sammy D",
                    "Jay Lex",
                    "NinoPR",
                    "Johnny West",
                    "Xuniel & El JJJavi",
                    "J Kings",
                    "Marco Antonio Lopez",
                    "Carli",
                    "Ryan Rivera",
                    "Solo Deyvi",
                    "Melchory Gang",
                    "Jancy La Potencia",
                    "Haitian Crook",
                    "Leonelson",
                  ].map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1.5 text-xs uppercase tracking-wider border border-white/10 bg-white/[0.03] text-gray-300 hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 text-sm text-gray-400 border-t border-white/10 pt-6">
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                  Studios
                </p>
                <p className="leading-relaxed">
                  La Caldera Records (Quebradillas, PR) • Propiedad Urbana (San Juan, PR) • Unstopable
                  Studio (San Juan, PR) • Invaluabless Productions (San Antonio, TX)
                </p>
              </div>

              <div>
                <p className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                  Certification
                </p>
                <p>Recording Engineer — CCAT, Bayamón, Puerto Rico</p>
              </div>
            </div>
          </div>
        </div>

        {/* Let’s Work (centered title + centered button) */}
        <div className="mt-8">
          <div className={`${streetCard} p-6 md:p-10`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3">
                <span className="text-[#ff0040]">★</span>
                <p className="font-urban text-2xl md:text-3xl uppercase tracking-wider">
                  Let&apos;s Work
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-left">
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
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/book"
                className="inline-flex justify-center px-12 py-5 bg-[#ff0040] text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#ff3366] transition-all hover:shadow-[0_0_40px_rgba(255,0,64,0.5)]"
              >
                Book Your Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}