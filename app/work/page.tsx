"use client";

import { useState } from "react";
import Link from "next/link";

export default function WorkPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#07070a] text-white px-6 md:px-16 py-20 relative overflow-hidden">

      {/* Subtle Grain Overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Work <span className="text-[#c8a44b]">.</span>
          </h1>

          <Link
            href="/book"
            className="px-6 py-3 bg-[#8b0b17] rounded-xl font-semibold hover:opacity-90 transition"
          >
            Book Session
          </Link>
        </div>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl">
          Proof of clarity. Proof of presence.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          <WorkCard
            title="BumBum ChaCha"
            artist="Solo Deyvi"
            videoId="-W_OHl1AHYY"
            setActiveVideo={setActiveVideo}
          />

          <WorkCard
            title="Pal Deporte"
            artist="JJJavi feat Xuniel"
            videoId="7yBNsQVM_lo"
            setActiveVideo={setActiveVideo}
          />

          <WorkCard
            title="Sugar Water"
            artist="Sammy D"
            videoId="vhGVhiP-W-g"
            setActiveVideo={setActiveVideo}
          />
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-[95%] md:w-[70%] aspect-video bg-black rounded-xl overflow-hidden">

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-50 text-white bg-black/60 px-3 py-1 rounded-full"
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}{/* ================= BOOK CTA ================= */}
<section className="mt-24">
  <div className="max-w-5xl mx-auto px-6 md:px-16">

    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111116] p-12 text-center">

      {/* Subtle red glow background */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#8b0b17] via-transparent to-[#8b0b17]" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Lock In Your Sound?
        </h2>

        <p className="mt-6 text-gray-300 text-lg">
          Submit your booking request and we’ll confirm availability.
          <br />
          <span className="text-gray-400">
            Envía tu solicitud y confirmamos disponibilidad.
          </span>
        </p>

        <div className="mt-10">
          <Link
            href="/book"
            className="inline-block px-8 py-4 bg-[#8b0b17] rounded-xl font-semibold hover:opacity-90 transition pulse-red"
          >
            BOOK A SESSION
          </Link>
        </div>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}

function WorkCard({
  title,
  artist,
  videoId,
  setActiveVideo,
}: {
  title: string;
  artist: string;
  videoId: string;
  setActiveVideo: (id: string) => void;
}) {
  return (
    <div
      onClick={() => setActiveVideo(videoId)}
      className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#111116] transition hover:border-[#8b0b17]"
    >
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#8b0b17]/80 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition">
            ▶
          </div>
        </div>

        {/* Urban Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-black/60 border border-white/10">
            YouTube
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-[#8b0b17]/70 border border-white/10">
            Play
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-extrabold group-hover:text-[#c8a44b] transition">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{artist}</p>
      </div>
    </div>
  );
}