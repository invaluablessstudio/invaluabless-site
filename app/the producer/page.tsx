"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Facebook, Music2, MapPin, Mail } from "lucide-react";

const ProducerSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 text-white">
      {/* subtle section wash (transparent) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#ff0040]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[#00f0ff] font-semibold">
              The Producer
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
            Jeovanne Diaz<span className="text-[#ff0040]">.</span>
          </h2>

          <p className="mt-4 text-gray-400 text-lg leading-relaxed border-l-2 border-[#ff0040] pl-6">
            Camuy, PR → Quebradillas → San Juan → San Antonio, TX
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Portrait */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-white/10 bg-black/25 backdrop-blur supports-[backdrop-filter]:bg-black/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/producer-portrait.jpeg"
                  alt="Jeovanne Diaz - Invaluabless Productions Music Producer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-urban text-2xl md:text-3xl uppercase text-white">
                    Clean vocals. Heavy low end<span className="text-[#ff0040]">.</span>
                  </p>
                  <p className="mt-2 text-xs text-[#00f0ff] uppercase tracking-widest">
                    Play it loud. That&apos;s the test.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Story + Sound Quote (center) + Credits + Let's Work */}
          <div className="lg:col-span-7 space-y-6">
            {/* Story (MATCHES HOME PAGE VERSION) */}
            <div className="border border-white/10 bg-black/25 backdrop-blur supports-[backdrop-filter]:bg-black/10 p-6 md:p-8">
              <h3 className="font-urban text-2xl md:text-3xl uppercase tracking-wider">
                The Story<span className="text-[#ff0040]">.</span>
              </h3>

              <div className="mt-6 space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Started in Puerto Rico in &apos;09. Just speakers, hunger, and an ear for low-end
                  that had to translate everywhere — cars, clubs, phone speakers. A few months later,
                  what began as a home setup turned into real sessions, real artists, and real
                  pressure.
                </p>

                <p>
                  2010: <strong className="text-white">La Caldera Records</strong>. Built inside a
                  barber shop in Quebradillas with my friend Josue Tosado (MR KUSH). It wasn&apos;t
                  glamorous — but it worked. Artists came in, records got made, and the sound kept
                  improving. Reggaeton, trap, rap, R&amp;B, Latin — whatever walked in, left
                  different.
                </p>

                <p>
                  2013: <strong className="text-white">Propiedad Urbana &amp; Unstopable Studios</strong>.
                  San Juan was the next level. Real professional studios. Real pressure. Sessions with{" "}
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

            {/* ✅ SOUND QUOTE (CENTERED, HOME-PAGE STYLE) */}
            <div className="border border-white/10 bg-black/25 backdrop-blur supports-[backdrop-filter]:bg-black/10 p-6 md:p-8">
              <div className="max-w-3xl mx-auto">
                <div className="border-l-4 border-[#ff0040] pl-6 py-2">
                  <p className="text-lg md:text-xl font-bold italic text-white">
                    "Clean vocals. Heavy low end - If it don’t hit in the car at night, it’s not done."
                  </p>
                </div>

                <p className="mt-6 text-center font-mono text-[#ff0040] uppercase tracking-widest text-sm">
                  Play it loud. That&apos;s the test.
                </p>
              </div>
            </div>

            {/* Credits */}
            <div className="border border-white/10 bg-black/25 backdrop-blur supports-[backdrop-filter]:bg-black/10 p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 flex-wrap">
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
                    La Caldera Records (Quebradillas, PR) • Propiedad Urbana (San Juan, PR) •
                    Unstopable Studio (San Juan, PR) • Invaluabless Productions (San Antonio, TX)
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

            {/* LET'S WORK (matches home page vibe) */}
            <div className="border border-white/10 bg-black/25 backdrop-blur supports-[backdrop-filter]:bg-black/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#ff0040]">★</span>
                <p className="font-urban text-xl uppercase tracking-wider">Let&apos;s Work</p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 text-left">
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

                  <Link
                    href="/book"
                    className="inline-block px-10 py-4 bg-[#ff0040] text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#ff3366] transition-all hover:shadow-[0_0_40px_rgba(255,0,64,0.5)]"
                  >
                    Book Your Session
                  </Link>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-lg uppercase tracking-wider">Follow the Work</h4>
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
            </div>
          </div>
        </div>{/* end grid */}
      </div>
    </section>
  );
};

export default ProducerSection;