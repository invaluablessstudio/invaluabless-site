"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";

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
  { title: "Aparentas", artist: "Lil Tree", videoId: "CrLnsJNBKBk" }
];

function handleCardMouseMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  el.style.setProperty("--mx", `${x}px`);
  el.style.setProperty("--my", `${y}px`);
}

function handleCardMouseLeave(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  el.style.setProperty("--mx", "50%");
  el.style.setProperty("--my", "50%");
}

export default function WorkPage() {
  const t = useTranslations("WorkPage");
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
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="grain" />
      <div className="scanlines" />

      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #ff0040 0%, transparent 30%), radial-gradient(circle at 80% 20%, #00f0ff 0%, transparent 25%)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-16">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#ff0040]" />
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
                {t("eyebrow")}
              </p>
            </div>
            <h1 className="font-urban text-6xl uppercase leading-[0.85] md:text-8xl">
              {t("title")}
              <span className="text-[#ff0040] text-glow-red">.</span>
            </h1>
          </div>

          <Link
            href="/book"
            className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
          >
            <span className="relative z-10">{t("bookButton")}</span>
            <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </div>

        <p className="font-urban mb-16 max-w-2xl border-l-2 border-[#ff0040] pl-6 text-2xl uppercase tracking-wide text-gray-400">
          {t("intro")}
        </p>

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

        <section className="relative mt-24">
          <div
            className="street-card street-hover relative overflow-hidden p-12 text-center md:p-16"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="mouse-glow" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0040]/10 via-transparent to-[#00f0ff]/10" />

            <div className="relative z-10">
              <h2 className="font-urban text-5xl uppercase leading-[0.9] md:text-7xl">
                {t("ctaTitle1")}{" "}
                <span className="text-[#ff0040] text-glow-red">{t("ctaTitle2")}</span>
                ?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
                {t("ctaDescription")}
              </p>

              <div className="mt-10">
                <Link
                  href="/book"
                  className="group relative inline-block overflow-hidden bg-[#ff0040] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red"
                >
                  <span className="relative z-10">{t("ctaButton")}</span>
                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative aspect-video w-full max-w-5xl border border-white/10 bg-black shadow-[0_0_60px_rgba(255,0,64,0.3)]">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 font-mono text-sm uppercase tracking-wider text-white/60 transition-colors hover:text-white"
            >
              {t("close")} [✕]
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title={t("videoPlayerTitle")}
              className="h-full w-full"
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
  index
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
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
      className="street-card street-hover group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="mouse-glow" />

      <div className="relative h-48 overflow-hidden">
        <Image
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          width={480}
          height={360}
          unoptimized
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-16 w-16 items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 30px ${accentColor}40`
            }}
          >
            <span className="ml-1 text-xl text-black">▶</span>
          </div>
        </div>

        <div className="absolute right-3 top-3 font-mono text-xs text-white/50">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-urban truncate text-xl uppercase transition-colors group-hover:text-[#ff0040]">
          {title}
        </h3>
        <p className="mt-1 text-sm uppercase tracking-wider text-gray-500">
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