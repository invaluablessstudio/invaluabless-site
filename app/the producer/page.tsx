"use client";

import React from "react";
import Image from "next/image";

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
          {/* LEFT: Portrait + Sound Statement */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-white/10 bg-black/25 backdrop-blur supports-[backdrop-filter]:bg-black/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/producer-portrait.jpeg"
                  alt="Jeovanne Diaz - Invaluabless Productions Music Producer"
                  fill
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-urban text-2xl md:text-3xl uppercase text-white">
                    Clean. Heavy.
                    <span className="text-[#ff0040]"> Street-ready.</span>
                  </p>
                  <p className="mt-2 text-xs text-[#00f0ff] uppercase tracking-widest">
                    Play it loud. That&apos;s the test.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border border-white/10 bg-black/25 backdrop-blur supports-[backdrop-filter]:bg-black/10 p-6">
              <p className="text-lg font-bold text-white mb-2">
                My sound: <span className="text-[#ff0040]">Clean. Heavy. Street-ready.</span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                I don&apos;t do “demo quality.” I do{" "}
                <span className="text-white font-semibold">
                  playlist-ready, DJ-approved, algorithm-fed
                </span>
                . Whether you&apos;re laying your first trap track or your next reggaeton anthem,
                you get the same focus I gave those sessions in San Juan.
              </p>
            </div>
          </div>

          {/* RIGHT: Story + Credits + Pull Up */}
          <div className="lg:col-span-7 space-y-6">
            {/* Journey */}
            <div className="border border-white/10 bg-black/25 backdrop-blur supports-[backdrop-filter]:bg-black/10 p-6 md:p-8">
              <h3 className="font-urban text-2xl md:text-3xl uppercase tracking-wider">
                The Journey<span className="text-[#ff0040]">.</span>
              </h3>

              <div className="mt-6 space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Started in &apos;09. Small studio in my hometown, cutting demos for local artists.
                  Learned fast—if the 808 don&apos;t hit on a phone speaker, you did it wrong.
                </p>

                <p>
                  <span className="text-white font-bold">2010: La Caldera Records.</span> Me and my
                  brother opened shop in Quebradillas. Pure hustle. Reggaeton, trap, rap, latin—
                  whatever came through, we made it knock.
                </p>

                <p>
                  <span className="text-white font-bold">2013: San Juan.</span> That&apos;s where I
                  leveled up. Worked{" "}
                  <span className="text-white">Propiedad Urbana, Unstopable Studio</span>—real
                  studios, real pressure, real artists. Sessions with{" "}
                  <span className="text-white font-bold">
                    El Larax, Nencho el León Salvaje, Bimbo el Oso Mañoso, YOMO, Xander el Imaginario
                  </span>{" "}
                  and more. While running those rooms, I got certified as a Recording Engineer at{" "}
                  <span className="text-white">CCAT in Bayamón</span>—formal training to back up the
                  ear I already had.
                </p>

                <p>
                  <span className="text-white font-bold">2016: Texas.</span> Built private in San
                  Antonio first, word spread.{" "}
                  <span className="text-white font-bold">2021: opened doors to the public.</span>{" "}
                  Now working with artists from PR, Mexico, Colombia, all over the U.S.—bridging
                  that island energy with mainland punch.
                </p>
              </div>

              <div className="mt-8 border-l-4 border-[#ff0040] pl-5 py-2">
                <p className="text-white font-bold italic">
                  “If it don’t hit in the car at night, it’s not done.”
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
                    {[
                      "YOMO",
                      "El Larax",
                      "Nencho el León Salvaje",
                      "Bimbo el Oso Mañoso",
                      "Xander el Imaginario",
                    ].map((name) => (
                      <span
                        key={name}
                        className="px-3 py-1.5 text-xs uppercase tracking-wider border border-white/10 bg-white/[0.03] text-gray-300 hover:border-[#ff0040]/50 hover:bg-[#ff0040]/10 transition-all"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-3">
                    San Antonio / Texas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Sammy D",
                      "Jay Lex",
                      "Baby Killa La Amenaza",
                      "NinoPR",
                      "Johnny West",
                      "Xziel The One and Only",
                      "Xuniel & El JJJavi",
                      "J Kings",
                      "Marco Antonio Lopez",
                      "Carli",
                      "Ryan Rivera",
                      "Lil Tree",
                      "Solo Deyvi",
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

            {/* Pull Up */}
            <div className="border border-white/10 bg-black/25 backdrop-blur supports-[backdrop-filter]:bg-black/10 p-6 md:p-8">
              <h3 className="font-urban text-2xl md:text-3xl uppercase tracking-wider text-[#ff0040]">
                Pull Up<span className="text-white">.</span>
              </h3>

              <div className="mt-6 grid gap-6 md:grid-cols-2 text-gray-300">
                <div>
                  <p className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                    Studio
                  </p>
                  <p className="leading-relaxed text-sm text-gray-400">
                    3200 Wright Carpenter Rd
                    <br />
                    San Antonio, Texas 78221
                  </p>
                </div>

                <div>
                  <p className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                    Email
                  </p>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p>
                      Bookings:{" "}
                      <a
                        className="text-[#00f0ff] hover:text-white transition-colors"
                        href="mailto:bookings@invaluablessproduction.com"
                      >
                        bookings@invaluablessproduction.com
                      </a>
                    </p>
                    <p>
                      Beats:{" "}
                      <a
                        className="text-[#00f0ff] hover:text-white transition-colors"
                        href="mailto:beats@invaluablessproduction.com"
                      >
                        beats@invaluablessproduction.com
                      </a>
                    </p>
                    <p>
                      General:{" "}
                      <a
                        className="text-[#00f0ff] hover:text-white transition-colors"
                        href="mailto:support@invaluablessproduction.com"
                      >
                        support@invaluablessproduction.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <SocialLink href="https://www.instagram.com/invaluablessproduction" label="Instagram" />
                <SocialLink href="https://www.youtube.com/@InvaluaBlessProductions" label="YouTube" />
                <SocialLink href="https://www.tiktok.com/@invaluablessproductions" label="TikTok" />
                <SocialLink href="https://www.facebook.com/invaluablessproduction/" label="Facebook" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProducerSection;

function SocialLink({ href, label }: { href: