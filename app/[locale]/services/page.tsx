"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-[900ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
}

function MouseGlow() {
  return <div className="mouse-glow pointer-events-none" />;
}

function handleCardMouseMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}
function handleCardMouseLeave(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  el.style.setProperty("--mx", "50%");
  el.style.setProperty("--my", "50%");
}

// SVG icons — no emojis
const ICONS = {
  mic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>
      <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v3M8 22h8"/>
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
      <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none"/>
      <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none"/>
      <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none"/>
    </svg>
  ),
  disc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
      <line x1="12" y1="9" x2="12" y2="2"/><line x1="12" y1="15" x2="12" y2="22"/>
    </svg>
  ),
  beats: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  podcast: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
    </svg>
  ),
  coaching: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  ),
};

export default function ServicesPage() {
  const t = useTranslations("Services");
  const [showHero, setShowHero] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  // ── Service cards ────────────────────────────────────────────────────────────
  const SERVICES = [
    {
      icon: ICONS.mic,
      titleKey: "recordingTitle",
      descKey: "recordingDesc",
      price: "$75",
      unit: "/hr",
      noteKey: "recordingNote",
      accent: "red" as const,
      featured: false,
    },
    {
      icon: ICONS.sliders,
      titleKey: "mixingTitle",
      descKey: "mixingDesc",
      price: "$100",
      unit: "",
      noteKey: "mixingNote",
      accent: "cyan" as const,
      featured: false,
    },
    {
      icon: ICONS.disc,
      titleKey: "masteringTitle",
      descKey: "masteringDesc",
      price: "$50",
      unit: "",
      noteKey: "masteringNote",
      accent: "red" as const,
      featured: false,
    },
    {
      icon: ICONS.beats,
      titleKey: "beatsTitle",
      descKey: "beatsDesc",
      price: "$250",
      unit: "",
      noteKey: "beatsNote",
      accent: "cyan" as const,
      featured: true,
    },
    {
      icon: ICONS.podcast,
      titleKey: "podcastTitle",
      descKey: "podcastDesc",
      price: "$200",
      unit: "",
      noteKey: "podcastNote",
      accent: "red" as const,
      featured: false,
    },
    {
      icon: ICONS.coaching,
      titleKey: "vocalCoachingTitle",
      descKey: "vocalCoachingDesc",
      price: t("includedPrice"),
      unit: "",
      noteKey: "vocalCoachingNote",
      accent: "cyan" as const,
      featured: false,
    },
  ] as const;

  const PACKAGES = [
    {
      label: "Starter",
      price: "$75",
      unit: "/hr",
      note: t("recordingNote"),
      badge: null,
      accentColor: "border-white/10",
      btnStyle: "border border-[#ff0040]/30 text-[#ff0040] hover:bg-[#ff0040] hover:text-black",
      features: [
        t("recordingTitle"),
        t("vocalCoachingTitle"),
        "WAV export",
        "Clean signal chain",
      ],
    },
    {
      label: "Basic Session",
      price: "$300",
      unit: "flat",
      note: "4-hour block",
      badge: { label: "Most Popular", color: "bg-[#ff0040] text-black" },
      accentColor: "border-[#ff0040]/40",
      btnStyle: "bg-[#ff0040] text-black hover:bg-white",
      features: [
        t("recordingTitle"),
        t("mixingTitle"),
        t("masteringTitle"),
        t("vocalCoachingTitle"),
        "WAV + MP3 export",
      ],
    },
    {
      label: "Full Production",
      price: "$500",
      unit: "bundle",
      note: "Save $50",
      badge: { label: "Best Value", color: "bg-[#00f0ff] text-black" },
      accentColor: "border-[#00f0ff]/40",
      btnStyle: "border border-[#00f0ff]/35 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black",
      features: [
        t("recordingTitle"),
        "Custom beat (all genres)",
        t("mixingTitle") + " & " + t("masteringTitle"),
        "Release-ready delivery",
      ],
    },
    {
      label: "Beat Production",
      price: "$250",
      unit: "/beat",
      note: t("beatsNote"),
      badge: null,
      accentColor: "border-white/10",
      btnStyle: "border border-[#ff0040]/30 text-[#ff0040] hover:bg-[#ff0040] hover:text-black",
      features: [
        "Custom original beat",
        "Reggaeton, trap, rap, Latin",
        "Heavy 808s",
        "WAV + stems delivery",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen text-white">
      {/* ── Background ── */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url('/images/hero-mic.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #ff0040 0%, transparent 45%), radial-gradient(circle at 20% 80%, #00f0ff 0%, transparent 40%)", transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, transition: "transform 0.3s ease-out" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/60 to-[#0a0a0f]" />
      </div>
      <div className="grain" />
      <div className="scanlines" />
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

      <div className="relative z-20">

        {/* ══ HERO ══ */}
        <section className="relative flex min-h-[55vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-16">
            <div className={`transition-all duration-1000 ease-out ${showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#ff0040]" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">{t("eyebrow")}</p>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <h1 className="font-['Bebas_Neue'] text-7xl uppercase leading-[0.85] tracking-tight md:text-9xl">
                  {t("title")}<span className="text-[#ff0040]">.</span>
                </h1>
                <Link href="/book" className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red">
                  <span className="relative z-10">{t("ctaBook")}</span>
                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>
              <p className="mt-8 max-w-2xl border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-300">{t("intro")}</p>
            </div>
          </div>
        </section>

        {/* ══ PACKAGES ══ */}
        <section className="border-t border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff0040]">Session Packages</p>
              <h2 className="mb-12 font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                Choose Your Session<span className="text-[#ff0040]">.</span>
              </h2>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {PACKAGES.map((pkg) => (
                  <div key={pkg.label} className={`street-card street-hover relative flex flex-col p-8 transition-all ${pkg.accentColor}`} onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                    <MouseGlow />
                    {pkg.badge && (
                      <div className={`absolute -top-px left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 text-[0.58rem] font-bold uppercase tracking-[0.2em] ${pkg.badge.color}`}>
                        {pkg.badge.label}
                      </div>
                    )}
                    <div className={`relative z-10 ${pkg.badge ? "pt-5" : "pt-1"}`}>
                      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gray-500">{pkg.label}</p>
                      <div className="font-['Bebas_Neue'] text-[3.2rem] leading-none text-white">
                        {pkg.price}
                        {pkg.unit && <span className="ml-1 font-sans text-[0.82rem] font-light text-gray-500">{pkg.unit}</span>}
                      </div>
                      <div className="mt-2 h-5 flex items-center">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gray-500">{pkg.note}</p>
                      </div>
                      <div className="my-5 h-px bg-white/8" />
                    </div>
                    <ul className="relative z-10 flex flex-1 flex-col gap-3 mb-6">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed">
                          <span className="mt-[0.45rem] inline-block h-1 w-1 flex-shrink-0 bg-[#ff0040]" />
                          <span className="text-gray-400">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/book" className={`relative z-10 block py-3.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-all ${pkg.btnStyle}`}>
                      Book Now
                    </Link>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-[0.72rem] tracking-[0.1em] text-gray-500">
                All bookings require a deposit to lock your session.
              </p>
            </div>
          </FadeInSection>
        </section>

        {/* ══ ALL SERVICES ══ */}
        <section className="border-t border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#00f0ff]">{t("eyebrow")}</p>
              <h2 className="mb-12 font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                Full Service List<span className="text-[#ff0040]">.</span>
              </h2>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {SERVICES.map((svc) => (
                  <div
                    key={svc.titleKey}
                    className={`street-card street-hover group relative flex flex-col p-8 transition-all ${svc.featured ? "border-[#ff0040]/30 bg-[#ff0040]/[0.03]" : ""}`}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <MouseGlow />
                    <div className="relative z-10 mb-6 flex items-start justify-between">
                      <span className={`${svc.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"} transition-transform duration-300 group-hover:scale-110`}>
                        {svc.icon}
                      </span>
                      <div className="text-right">
                        <div className={`font-['Bebas_Neue'] text-2xl ${svc.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"}`}>
                          {svc.price}{svc.unit && <span className="ml-0.5 font-sans text-sm font-light text-gray-500">{svc.unit}</span>}
                        </div>
                        <div className="mt-0.5 text-[0.6rem] uppercase tracking-wider text-gray-500">{t(svc.noteKey as Parameters<typeof t>[0])}</div>
                      </div>
                    </div>
                    <h3 className={`relative z-10 mb-3 font-['Bebas_Neue'] text-2xl uppercase tracking-wide transition-colors group-hover:${svc.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"}`}>
                      {t(svc.titleKey as Parameters<typeof t>[0])}
                    </h3>
                    <p className="relative z-10 flex-1 text-sm leading-relaxed text-gray-400">{t(svc.descKey as Parameters<typeof t>[0])}</p>
                    <div className={`mt-6 h-[2px] w-10 transition-all duration-500 group-hover:w-full ${svc.accent === "red" ? "bg-[#ff0040]" : "bg-[#00f0ff]"}`} />
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ HOW IT WORKS ══ */}
        <section className="border-t border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="street-card street-hover relative overflow-hidden p-8 md:p-12" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <MouseGlow />
                <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff0040] to-transparent" />
                <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#00f0ff]">Process</p>
                    <h2 className="font-['Bebas_Neue'] text-5xl uppercase tracking-tight">
                      {t("processTitle")}<span className="text-[#00f0ff]">.</span>
                    </h2>
                    <p className="mt-3 max-w-xl text-sm text-gray-400">{t("processIntro")}</p>
                  </div>
                  <Link href="/book" className="group relative overflow-hidden bg-[#ff0040] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:glow-red">
                    <span className="relative z-10">{t("openCalendar")}</span>
                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    { num: "01", titleKey: "step1Title", descKey: "step1Desc", tagKey: "step1Tag", color: "text-[#ff0040]" },
                    { num: "02", titleKey: "step2Title", descKey: "step2Desc", tagKey: "step2Tag", color: "text-[#00f0ff]" },
                    { num: "03", titleKey: "step3Title", descKey: "step3Desc", tagKey: "step3Tag", color: "text-[#ff0040]" },
                  ].map((step) => (
                    <div key={step.num}>
                      <span className={`font-['Bebas_Neue'] block text-5xl leading-none mb-3 ${step.color} opacity-30`}>{step.num}</span>
                      <h3 className="font-['Bebas_Neue'] mb-2 text-xl uppercase text-white">{t(step.titleKey as Parameters<typeof t>[0])}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">{t(step.descKey as Parameters<typeof t>[0])}</p>
                      <p className={`mt-3 text-[0.65rem] uppercase tracking-[0.18em] ${step.color}`}>{t(step.tagKey as Parameters<typeof t>[0])}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 border-t border-white/8 pt-6 text-[0.72rem] uppercase tracking-[0.12em] text-gray-500">{t("processFooter")}</p>
              </div>
            </div>
          </FadeInSection>
        </section>

      </div>
    </main>
  );
}