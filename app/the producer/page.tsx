// app/producer/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Instagram, Youtube, Facebook, Music2, MapPin, Mail } from "lucide-react";

export default function ProducerPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen text-white">
      {/* Optional global overlays (if you have these in globals.css) */}
      <div className="grain" />
      <div className="scanlines" />

      {/* Background (match Book page) */}
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

      {/* Grid overlay */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-24 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#ff0040]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[#00f0ff] font-semibold">
              The Producer
            </p>
          </div>

          <h1 className="font-urban text-6xl md:text-8xl uppercase leading-[0.85]">
            Jeovanne Diaz<span className="text-[#ff0040] text-glow-red">.</span>
          </h1>
        </div>

        {/* ROW: LEFT (photo+stats) | RIGHT (story card) */}
        <div className="mt-10 grid gap-6 md:grid-cols-12 items-stretch">
          {/* LEFT COLUMN */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Photo card (REDUCED HEIGHT so stats end at story bottom) */}
            <div className="relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur">
              {/* ✅ FIXED HEIGHT: control total stack height */}
              <div className="relative h-[460px] sm:h-[520px] md:h-[540px]">
                <Image
                  src="/images/producer-portrait.jpeg"
                  alt="Jeovanne Diaz - Invaluabless Productions Music Producer"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

                {/* Bottom text on photo */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-urban text-3xl uppercase text-white">
                    Clean Vocals. Heavy Low End.
                  </p>
                  <p className="mt-2 text-xs text-[#00f0ff] uppercase tracking-widest">
                    Play it loud. That&apos;s the test.
                  </p>
                </div>

                {/* 13+ sticker */}
                <div className="absolute -bottom-4 right-6 bg-[#ff0040] text-black p-5 font-mono shadow-[0_30px_120px_rgba(0,0,0,0.8)]">
                  <p className="font-bold text-3xl leading-none">13+</p>
                  <p className="uppercase tracking-wider text-sm mt-2">Years</p>
                </div>
              </div>
            </div>

            {/* Stats card (same as before) */}
            <div className="border border-white/10 bg-white/[0.03] backdrop-blur p-6">
              <div className="flex items-end justify-between gap-6">
                <Stat value="300+" label="Tracks Mixed" color="text-[#ff0040]" />
                <Stat value="20+" label="Artists" color="text-[#00f0ff]" />
                <Stat value="13+" label="Years" color="text-white" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: story card */}
          <div className="md:col-span-7">
            <div className="h-full border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-8">
              {/* Intro blurb (no repeating) */}
              <div className="border-l-2 border-[#ff0040] pl-6 mb-8">
                <p className="text-gray-300 leading-relaxed">
                  Started in Puerto Rico in{" "}
                  <span className="text-white font-semibold">&apos;09</span>. Built through real rooms,
                  real pressure, and real records — now based in{" "}
                  <span className="text-white font-semibold">San Antonio</span>, focused on one thing:
                  making mixes that sound clean, heavy, and ready for release.
                </p>
              </div>

              <p className="text-[#ff0040] text-xs uppercase tracking-[0.3em] mb-4">
                The Story
              </p>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Started with just speakers, hunger, and an ear for low-end that had to translate
                  everywhere — cars, clubs, phone speakers. What began as a home setup turned into
                  real sessions, real artists, and real pressure.
                </p>

                <p>
                  <span className="text-white font-bold">2010: La Caldera Records.</span>{" "}
                  Built inside a barber shop in Quebradillas with my friend Josue Tosado (MR KUSH).
                  It wasn&apos;t glamorous — but it worked. Artists came in, records got made, and the sound
                  kept improving.
                </p>

                <p>
                  <span className="text-white font-bold">
                    2013: Propiedad Urbana &amp; Unstopable Studios.
                  </span>{" "}
                  San Juan was the next level. Real professional studios. Real pressure. Sessions with{" "}
                  <span className="text-[#ff0040] font-semibold">YOMO</span>,{" "}
                  <span className="text-[#ff0040] font-semibold">El Larax</span>,{" "}
                  <span className="text-[#ff0040] font-semibold">Nencho el León Salvaje</span>,{" "}
                  <span className="text-[#ff0040] font-semibold">Bimbo El Oso Mañoso</span>, and many
                  others. I earned my certification as a Recording Engineer — but more importantly,
                  I earned trust in the room.
                </p>

                <p>
                  <span className="text-white font-bold">NOW:</span> Now based in San Antonio, I focus
                  on one thing: making records that sound clean, heavy, and ready for release.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Sound — centered above credits */}
        <div className="mt-12 border border-white/10 bg-white/[0.03] backdrop-blur p-8 text-center">
          <p className="text-lg md:text-xl font-bold text-white">
            “Clean vocals. Heavy low end — If it don’t hit in the car at night, it’s not done.”
          </p>
          <p className="mt-4 font-mono text-[#ff0040] uppercase tracking-widest text-sm">
            Play it loud. That&apos;s the test.
          </p>
        </div>

        {/* Selected Credits */}
        <div className="mt-12 border border-white/10 bg-white/[0.03] backdrop-blur p-8">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Selected Credits<span className="text-[#ff0040]">.</span>
            </h2>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              PR • Texas • Worldwide
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-4">
                Puerto Rico
              </p>
              <div className="flex flex-wrap gap-3">
                {["YOMO", "El Larax", "Nencho el León Salvaje", "Bimbo el Oso Mañoso", "Xander el Imaginario"].map(
                  (artist) => (
                    <span
                      key={artist}
                      className="bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium hover:bg-[#ff0040]/20 hover:border-[#ff0040]/50 transition-all cursor-default"
                    >
                      {artist}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-4">
                USA / Texas
              </p>
              <div className="flex flex-wrap gap-3">
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
                ].map((artist) => (
                  <span
                    key={artist}
                    className="bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all cursor-default"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8 text-sm text-gray-400 border-t border-white/10 pt-8">
            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Studios</h4>
              <p className="leading-relaxed">
                La Caldera Records (Quebradillas, PR) • Propiedad Urbana (San Juan, PR) • Unstopable
                Studio (San Juan, PR) • Invaluabless Productions (San Antonio, TX)
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Certification</h4>
              <p>Recording Engineer — CCAT, Bayamón, Puerto Rico</p>
            </div>
          </div>
        </div>

        {/* LET'S WORK */}
        <div className="mt-12 border border-white/10 bg-white/[0.03] backdrop-blur p-10 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-2 h-2 bg-[#ff0040] animate-pulse" />
            <p className="font-urban text-2xl md:text-3xl uppercase tracking-wider">
              Let&apos;s Work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#ff0040] mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">Studio</h4>
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
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">Email</h4>
                  <div className="space-y-1 text-gray-400 text-sm">
                    <p>
                      <span className="text-white">Bookings:</span> bookings@invaluablessproduction.com
                    </p>
                    <p>
                      <span className="text-white">Beats:</span> beats@invaluablessproduction.com
                    </p>
                    <p>
                      <span className="text-white">General:</span> support@invaluablessproduction.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg uppercase tracking-wider">Follow the Work</h4>
              <div className="grid grid-cols-2 gap-4">
                <SocialCard
                  href="https://instagram.com/invaluablessproduction"
                  label="Instagram"
                  icon={<Instagram className="w-5 h-5" />}
                  accent="red"
                />
                <SocialCard
                  href="https://youtube.com/@InvaluaBlessProductions"
                  label="YouTube"
                  icon={<Youtube className="w-5 h-5" />}
                  accent="red"
                />
                <SocialCard
                  href="https://facebook.com/invaluablessproduction"
                  label="Facebook"
                  icon={<Facebook className="w-5 h-5" />}
                  accent="cyan"
                />
                <SocialCard
                  href="https://tiktok.com/@invaluablessproductions"
                  label="TikTok"
                  icon={<Music2 className="w-5 h-5" />}
                  accent="cyan"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/book"
              className="inline-block px-12 py-5 bg-[#ff0040] text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#ff3366] transition-all hover:shadow-[0_0_40px_rgba(255,0,64,0.5)]"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div>
      <div className={`text-4xl md:text-5xl font-black ${color}`}>{value}</div>
      <div className="text-gray-500 uppercase tracking-wider text-xs mt-2">
        {label}
      </div>
    </div>
  );
}

function SocialCard({
  href,
  label,
  icon,
  accent,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  accent: "red" | "cyan";
}) {
  const accentClasses =
    accent === "red"
      ? "hover:bg-[#ff0040]/15 hover:border-[#ff0040]/50"
      : "hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40";

  const iconClasses = accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-4 bg-white/5 border border-white/10 transition-all ${accentClasses}`}
    >
      <span className={iconClasses}>{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}