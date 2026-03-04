"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const videos = [
  { title: "BumBum ChaCha", artist: "Solo Deyvi", videoId: "-W_OHl1AHYY" },
  { title: "Pal Deporte", artist: "JJJavi feat Xuniel", videoId: "7yBNsQVM_lo" },
  { title: "Sugar Water", artist: "Sammy D", videoId: "vhGVhiP-W-g" },
  { title: "2 Pastillas", artist: "Melchory Gang", videoId: "50sVJeIHiKw" },
  { title: "Maquina del Tiempo", artist: "Carli", videoId: "I-Ji_p-Ox4o" },
  { title: "Recuerdo", artist: "Baby Killa La Amenaza", videoId: "Y0Op6re9_hY" },
  { title: "Color Cafe", artist: "Jay Lex", videoId: "-HyD3ms4q1o" },
  { title: "Contigo", artist: "Marco Antonio Lopez", videoId: "YpRWYVYolOI" },
  { title: "Perreo Violento", artist: "J King", videoId: "Nb5f_eudIQY" },
  { title: "Misteriosa", artist: "Ryan Rivera", videoId: "Jw07s7OvUks" },
  { title: "Aparentas", artist: "Lil Tree", videoId: "CrLnsJNBKBk" },
];

export default function WorkPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  function openVideo(id: string) {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "work_video_open", { video_id: id });
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
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Global Effects */}
      <div className="grain" />
      <div className="scanlines" />

      {/* Background */}
      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, #ff0040 0%, transparent 30%), radial-gradient(circle at 80% 20%, #00f0ff 0%, transparent 25%)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 pt-32">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#ff0040]" />
              <p className="text-xs tracking-[0.4em] uppercase text-[#00f0ff] font-semibold">
                Recent Drops
              </p>
            </div>
            <h1 className="font-urban text-6xl md:text-8xl uppercase leading-[0.85]">
              Work<span className="text-[#ff0040] text-glow-red">.</span>
            </h1>
          </div>

          <Link
            href="/book"
            className="group relative px-8 py-4 bg-[#ff0040] text-black font-bold uppercase tracking-wider text-sm overflow-hidden transition-all hover:glow-red"
          >
            <span className="relative z-10">Book Session</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        <p className="text-gray-400 text-lg max-w-2xl border-l-2 border-[#ff0040] pl-6 mb-16">
          Proof of clarity. Proof of presence. Reggaeton, trap, and Latin hits that slap.
        </p>

        {/* Video Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video, i) => (
            <WorkCard 
              key={video.videoId} 
              {...video} 
              openVideo={openVideo}
              index={i}
            />
          ))}
        </div>

        {/* Final CTA */}
        <section className="mt-24 relative">
          <div className="street-card p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0040]/10 via-transparent to-[#00f0ff]/10" />
            
            <div className="relative z-10">
              <h2 className="font-urban text-5xl md:text-7xl uppercase leading-[0.9]">
                Ready to <span className="text-[#ff0040] text-glow-red">Create</span>?
              </h2>
              
              <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
                Stop waiting. Start recording. Your sound is waiting.
                <br />
                <span className="text-gray-500">
                  Envía tu solicitud y confirmamos disponibilidad.
                </span>
              </p>

              <div className="mt-10">
                <Link
                  href="/book"
                  className="inline-block px-12 py-5 bg-[#ff0040] text-black font-bold uppercase tracking-[0.2em] text-sm glow-red hover:bg-[#ff3366] transition-colors"
                >
                  Lock In Your Session
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black border border-white/10 shadow-[0_0_60px_rgba(255,0,64,0.3)]">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider"
            >
              Close [✕]
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
    </main>
  );
}

function WorkCard({
  title,
  artist,
  videoId,
  openVideo,
  index,
}: {
  title: string;
  artist: string;
  videoId: string;
  openVideo: (id: string) => void;
  index: number;
}) {
  const accentColor = index % 2 === 0 ? "#ff0040" : "#00f0ff";
  
  return (
    <div
      onClick={() => openVideo(videoId)}
      className="group cursor-pointer street-card overflow-hidden transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ 
              backgroundColor: accentColor,
              boxShadow: `0 0 30px ${accentColor}40`
            }}
          >
            <span className="text-black text-xl ml-1">▶</span>
          </div>
        </div>

        {/* Index Number */}
        <div className="absolute top-3 right-3 font-mono text-xs text-white/50">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-urban text-xl uppercase group-hover:text-[#ff0040] transition-colors truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
          {artist}
        </p>
        
        <div 
          className="mt-4 h-[2px] w-8 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: accentColor }}
        />
      </div>
    </div>
  );
}