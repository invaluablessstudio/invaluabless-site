"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  return (
    <main className="relative min-h-screen text-white">
      {/* Same global effects used on /book */}
      <div className="grain" />
      <div className="scanlines" />

      {/* SAME background stack as /book */}
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

      {/* Page */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-24 sm:px-6">
        {/* Top label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-[#ff0040]" />
          <p className="text-xs tracking-[0.4em] uppercase text-[#00f0ff] font-semibold">
            The Producer
          </p>
        </div>

        {/* Title */}
        <h1 className="font-urban text-5xl md:text-7xl uppercase leading-[0.95] tracking-tight">
          Jeovanne Diaz<span className="text-[#ff0040]">.</span>
        </h1>

        {/* Stats row (like your screenshot) */}
        <div className="mt-8 flex flex-wrap gap-10">
          <Stat value="300+" label="Tracks Mixed" color="text-[#ff0040]" />
          <Stat value="20+" label="Artists" color="text-[#00f0ff]" />
          <Stat value="13+" label="Years" color="text-white" />
        </div>

        {/* Image + Story */}
        <div className="mt-10 grid gap-6 md:grid-cols-12 items-start">
          {/* Photo */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/producer-portrait.jpeg"
                  alt="Jeovanne Diaz - Invaluabless Productions Music Producer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Bottom text like your screenshot vibe */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-urban text-2xl md:text-3xl uppercase text-white">
                    Clean vocals. Heavy low end.
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#00f0ff]">
                    Play it loud. That&apos;s the test.
                  </p>
                </div>

                {/* 13+ sticker */}
                <div className="absolute -bottom-6 -right-6 bg-[#ff0040] text-black p-6 font-mono border border-black/20 shadow-[0_25px_80px_rgba(0,0,0,0.65)]">
                  <p className="font-black text-4xl leading-none">13+</p>
                  <p className="uppercase tracking-wider text-sm mt-1">Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story card */}
          <div className="md:col-span-7">
            <div className="border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-8">
              {/* Moved + rephrased intro (no repetition) */}
              <p className="text-gray-300 leading-relaxed border-l-2 border-[#ff0040] pl-6">
                Built through real rooms, real pressure, and real records — now based in San Antonio,
                focused on one thing: making mixes that sound clean, heavy, and ready for release.
              </p>

              <div className="mt-8">
                <p className="text-xs tracking-[0.35em] uppercase text-[#ff0040] font-semibold">
                  The Story
                </p>

                <div className="mt-4 space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Started in Puerto Rico in &apos;09. Just speakers, hunger, and an ear for low-end
                    that had to translate everywhere — cars, clubs, phone speakers. A few months later,
                    what began as a home setup turned into real sessions, real artists, and real pressure.
                  </p>

                  <p>
                    <strong className="text-white">2010: La Caldera Records.</strong> Built inside a barber
                    shop in Quebradillas with my friend Josue Tosado (MR KUSH). It wasn&apos;t glamorous —
                    but it worked. Artists came in, records got made, and the sound kept improving.
                  </p>

                  <p>
                    <strong className="text-white">2013: Propiedad Urbana &amp; Unstopable Studios.</strong>{" "}
                    San Juan was the next level. Real professional studios. Real pressure. Sessions with{" "}
                    <strong className="text-[#ff0040]">YOMO</strong>,{" "}
                    <strong className="text-[#ff0040]">El Larax</strong>,{" "}
                    <strong className="text-[#ff0040]">Nencho el León Salvaje</strong>,{" "}
                    <strong className="text-[#ff0040]">Bimbo El Oso Mañoso</strong>, and many others.
                    I earned my certification as a Recording Engineer — but more importantly, I earned trust in the room.
                  </p>

                  <p>
                    <strong className="text-white">NOW:</strong> Now based in San Antonio, I focus on one thing:
                    making records that sound clean, heavy, and ready for release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered “My sound” block (short + above credits) */}
        <div className="mt-10">
          <div className="mx-auto max-w-4xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-8 text-center">
            <p className="text-lg md:text-xl font-bold italic text-white">
              “Clean vocals. Heavy low end — If it don&apos;t hit in the car at night, it&apos;s not done.”
            </p>
            <p className="mt-4 font-mono text-[#ff0040] uppercase tracking-widest text-xs">
              Play it loud. That&apos;s the test.
            </p>
          </div>
        </div>

        {/* Selected Credits (centered + same vibe) */}
        <section className="mt-12 border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-8">
          <div className="text-center">
            <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-3">
              Selected Credits
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
              Heavy Hitters <span className="text-[#ff0040]">.</span>
            </h2>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <h3 className="text-lg font-bold flex items-center justify-center md:justify-start gap-3 uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#ff0040] rounded-full" />
                Puerto Rico
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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

            <div className="space-y-5">
              <h3 className="text-lg font-bold flex items-center justify-center md:justify-start gap-3 uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#00f0ff] rounded-full" />
                USA / Texas
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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
              <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Studios</h4>
              <p className="leading-relaxed">
                La Caldera Records (Quebradillas, PR) • Propiedad Urbana (San Juan, PR) • Unstopable Studio (San Juan, PR) • Invaluabless Productions (San Antonio, TX)
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Certification</h4>
              <p>Recording Engineer — CCAT, Bayamón, Puerto Rico</p>
            </div>
          </div>
        </section>

        {/* LET'S WORK (centered title + centered button, glassy) */}
        <section className="mt-12 border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-10">
          <div className="text-center">
            <p className="text-[#ff0040] text-xs uppercase tracking-[0.35em] mb-3">Let&apos;s Work</p>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Ready to make records that last<span className="text-[#ff0040]">.</span>
            </h3>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-10 text-left">
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
              <h4 className="font-bold text-lg uppercase tracking-wider text-center md:text-left">
                Follow the Work
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://instagram.com/invaluablessproduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#ff0040]/20 hover:border-[#ff0040]/50 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-[#ff0040]" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>

                <a
                  href="https://youtube.com/@InvaluaBlessProductions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#ff0040]/20 hover:border-[#ff0040]/50 transition-all group"
                >
                  <Youtube className="w-5 h-5 text-[#ff0040]" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>

                <a
                  href="https://facebook.com/invaluablessproduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all group"
                >
                  <Facebook className="w-5 h-5 text-[#00f0ff]" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>

                <a
                  href="https://tiktok.com/@invaluablessproductions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all group"
                >
                  <Music2 className="w-5 h-5 text-[#00f0ff]" />
                  <span className="text-sm font-medium">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Center button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/book"
              className="inline-block px-12 py-5 bg-[#ff0040] text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#ff3366] transition-all hover:shadow-[0_0_40px_rgba(255,0,64,0.5)]"
            >
              Book Your Session
            </Link>
          </div>
        </section>

        {/* Footer is handled globally by layout.tsx */}
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