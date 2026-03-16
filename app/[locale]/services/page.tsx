"use client";

import React from "react";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";

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

export default function ServicesPage() {
  const t = useTranslations("Services");

  const services = [
    {
      title: t("recordingTitle"),
      desc: t("recordingDesc"),
      price: "$75/hr",
      note: t("recordingNote"),
      icon: "🎤",
    },
    {
      title: t("mixingTitle"),
      desc: t("mixingDesc"),
      price: "$100",
      note: t("mixingNote"),
      icon: "🎚️",
    },
    {
      title: t("masteringTitle"),
      desc: t("masteringDesc"),
      price: "$50",
      note: t("masteringNote"),
      icon: "📀",
    },
    {
      title: t("beatsTitle"),
      desc: t("beatsDesc"),
      price: "$250",
      note: t("beatsNote"),
      icon: "🥁",
    },
    {
      title: t("podcastTitle"),
      desc: t("podcastDesc"),
      price: "$200",
      note: t("podcastNote"),
      icon: "🎙️",
    },
    {
      title: t("vocalCoachingTitle"),
      desc: t("vocalCoachingDesc"),
      price: t("includedPrice"),
      note: t("vocalCoachingNote"),
      icon: "🎧",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="grain" />
      <div className="scanlines" />

      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #ff0040 0%, transparent 40%), radial-gradient(circle at 20% 80%, #00f0ff 0%, transparent 40%)",
          }}
        />
      </div>

      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
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
            <span className="relative z-10">{t("ctaBook")}</span>
            <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </div>

        <p className="mb-16 max-w-2xl border-l-2 border-[#ff0040] pl-6 text-lg text-gray-400">
          {t("intro")}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              desc={service.desc}
              price={service.price}
              note={service.note}
              icon={service.icon}
            />
          ))}
        </div>

        <div
          className="street-card street-hover relative mt-20 overflow-hidden p-8 md:p-12"
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        >
          <div className="mouse-glow" />

          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff0040] to-transparent" />

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h2 className="font-urban mb-3 text-4xl uppercase">
                {t("processTitle")} <span className="text-[#00f0ff]">.</span>
              </h2>
              <p className="max-w-2xl text-sm text-gray-400">
                {t("processIntro")}
              </p>
            </div>

            <Link
              href="/book"
              className="group relative overflow-hidden bg-[#ff0040] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
            >
              <span className="relative z-10">{t("openCalendar")}</span>
              <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="relative">
              <span className="font-urban absolute -left-2 -top-4 text-6xl text-[#ff0040]/20">
                01
              </span>
              <h3 className="font-urban relative z-10 mb-2 text-xl uppercase text-white">
                {t("step1Title")}
              </h3>
              <p className="text-sm text-gray-400">{t("step1Desc")}</p>
              <p className="mt-3 text-[11px] uppercase tracking-wider text-gray-500">
                {t("step1Tag")}
              </p>
            </div>

            <div className="relative">
              <span className="font-urban absolute -left-2 -top-4 text-6xl text-[#00f0ff]/20">
                02
              </span>
              <h3 className="font-urban relative z-10 mb-2 text-xl uppercase text-white">
                {t("step2Title")}
              </h3>
              <p className="text-sm text-gray-400">{t("step2Desc")}</p>
              <p className="mt-3 text-[11px] uppercase tracking-wider text-gray-500">
                {t("step2Tag")}
              </p>
            </div>

            <div className="relative">
              <span className="font-urban absolute -left-2 -top-4 text-6xl text-[#ff0040]/20">
                03
              </span>
              <h3 className="font-urban relative z-10 mb-2 text-xl uppercase text-white">
                {t("step3Title")}
              </h3>
              <p className="text-sm text-gray-400">{t("step3Desc")}</p>
              <p className="mt-3 text-[11px] uppercase tracking-wider text-gray-500">
                {t("step3Tag")}
              </p>
            </div>
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-sm uppercase tracking-wider text-gray-500">
            {t("processFooter")}
          </p>
        </div>
      </div>
    </main>
  );
}

function ServiceCard({
  title,
  desc,
  price,
  note,
  icon,
}: {
  title: string;
  desc: string;
  price: string;
  note: string;
  icon: string;
}) {
  return (
    <div
      className="street-card street-hover group cursor-pointer p-8 transition-all duration-300 hover:scale-[1.02]"
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="mouse-glow" />

      <div className="mb-6 flex items-start justify-between">
        <span className="text-4xl opacity-50 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
          {icon}
        </span>
        <div className="text-right">
          <div className="font-urban text-3xl text-[#ff0040] transition-all group-hover:text-glow-red">
            {price}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
            {note}
          </div>
        </div>
      </div>

      <h3 className="font-urban mb-3 text-3xl uppercase transition-colors group-hover:text-[#ff0040]">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-gray-400">{desc}</p>

      <div className="mt-6 h-[2px] w-12 bg-gray-700 transition-all duration-500 group-hover:w-full group-hover:bg-[#ff0040]" />
    </div>
  );
}