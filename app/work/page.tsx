"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const videos = [
  {
    title: "BumBum ChaCha",
    artist: "Solo Deyvi",
    videoId: "-W_OHl1AHYY",
  },
  {
    title: "Pal Deporte",
    artist: "JJJavi feat Xuniel",
    videoId: "7yBNsQVM_lo",
  },
  {
    title: "Sugar Water",
    artist: "Sammy D",
    videoId: "vhGVhiP-W-g",
  },
  // 👉 ADD MORE VIDEOS HERE
  // { title: "New Song", artist: "Artist", videoId: "XXXX" },
];

export default function WorkPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  function openVideo(id: string) {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "work_video_open", {
        video_id: id,
      });
    }
    setActiveVideo(id);
  }

  function closeVideo() {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "work_video_close");
    }
    setActiveVideo(null);
  }

  return (
    <main className="min-h-screen bg-[#07070a] text-white px-6 md:px-16 py-20 relative overflow-hidden">

      {/* Grain Overlay */}
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
          {videos.map((video) => (
            <WorkCard
              key={video.videoId}
              {...video}
              openVideo={openVideo}
            />
          ))}
        </div>
      </div>

      {/* VIDEO MODAL (lazy iframe load only when active) */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-[95%] md:w-[70%] aspect-video bg-black rounded-xl overflow-hidden">

            <button
              onClick={closeVideo}
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
      )}

      {/* BOOK CTA */}
      <section className="mt-24">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111116] p-12 text-center">

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
                  className="inline-block px-8 py-4 bg-[#8b0b17] rounded-xl font-semibold hover:opacity-90 transition"
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
  openVideo,
}: {
  title: string;
  artist: string;
  videoId: string;
  openVideo: (id: string) => void;
}) {
  return (
    <div
      onClick={() => openVideo(videoId)}
      className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#111116] transition hover:border-[#8b0b17]"
    >
      {/* Optimized Thumbnail */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#8b0b17]/80 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition">
            ▶
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-extrabold group-hover:text-[#c8a44b] transition">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{artist}</p>
      </div>
    </div>
  );
}