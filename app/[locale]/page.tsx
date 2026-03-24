"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "../../i18n/navigation";
import { useTranslations } from "next-intl";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Track {
  num: string;
  name: string;
  artist: string;
  yt: string;
  genreKey: string;
}

interface PriceFeature {
  textKey: string;
  cyan?: boolean;
  highlight?: boolean;
}

interface PriceCard {
  tierKey: string;
  amount: string;
  unitKey: string;
  noteKey?: string;
  saveBadgeKey?: string;
  badge?: { labelKey: string; color: "red" | "cyan" };
  featured?: boolean;
  bundle?: boolean;
  features: PriceFeature[];
  href: string;
}

// ─── Static Data ─────────────────────────────────────────────────────────────

const TRACKS: Track[] = [
  { num: "01", name: "BumBum ChaCha",      artist: "Solo Deyvi",         yt: "-W_OHl1AHYY", genreKey: "genreReggaeton" },
  { num: "02", name: "Pal Deporte",        artist: "JJJavi feat Xuniel", yt: "7yBNsQVM_lo",  genreKey: "genreUrban"     },
  { num: "03", name: "Sugar Water",        artist: "Sammy D",            yt: "vhGVhiP-W-g",  genreKey: "genreTrap"      },
  { num: "04", name: "2 Pastillas",        artist: "Melchory Gang",      yt: "50sVJeIHiKw",  genreKey: "genreUrban"     },
  { num: "05", name: "Maquina del Tiempo", artist: "Carli",              yt: "I-Ji_p-Ox4o",  genreKey: "genreLatin"     },
  { num: "06", name: "Recuerdo",           artist: "Baby Killa",         yt: "Y0Op6re9_hY",  genreKey: "genreReggaeton" },
];

const CREDITS = [
  "YOMO", "El Larax", "Nencho el León Salvaje", "Xander el Imaginario",
  "Xziel The One and Only", "Young Tyago", "Bruze Wave", "JLyan",
  "Krys El Lapiz Pesao", "Luigi La Mente Celeste", "Jay Lex", "NinoPR",
  "Johnny West", "J Kings", "Marco Antonio Lopez", "Ryan Rivera",
  "Jancy La Potencia", "Haitian Crook", "Leonelson",
];

const PRICING: PriceCard[] = [
  {
    tierKey: "pricingStarterTier",
    amount: "$75",
    unitKey: "pricingStarterUnit",
    noteKey: "pricingStarterNote",
    href: "/book",
    features: [
      { textKey: "pricingStarterF1", highlight: true },
      { textKey: "pricingStarterF2" },
      { textKey: "pricingStarterF3" },
      { textKey: "pricingStarterF4" },
      { textKey: "pricingStarterF5" },
      { textKey: "pricingStarterF6" },
    ],
  },
  {
    tierKey: "pricingBasicTier",
    amount: "$300",
    unitKey: "pricingBasicUnit",
    noteKey: "pricingBasicNote",
    badge: { labelKey: "pricingBasicBadge", color: "red" },
    featured: true,
    href: "/book",
    features: [
      { textKey: "pricingBasicF1", highlight: true },
      { textKey: "pricingBasicF2" },
      { textKey: "pricingBasicF3" },
      { textKey: "pricingBasicF4" },
      { textKey: "pricingBasicF5" },
      { textKey: "pricingBasicF6" },
    ],
  },
  {
    tierKey: "pricingFullTier",
    amount: "$500",
    unitKey: "pricingFullUnit",
    saveBadgeKey: "pricingFullSave",
    badge: { labelKey: "pricingFullBadge", color: "cyan" },
    bundle: true,
    href: "/book",
    features: [
      { textKey: "pricingFullF1", highlight: true, cyan: true },
      { textKey: "pricingFullF2", cyan: true },
      { textKey: "pricingFullF3", cyan: true },
      { textKey: "pricingFullF4", cyan: true },
      { textKey: "pricingFullF5", cyan: true },
      { textKey: "pricingFullF6", cyan: true },
    ],
  },
  {
    tierKey: "pricingBeatTier",
    amount: "$250",
    unitKey: "pricingBeatUnit",
    noteKey: "pricingBeatNote",
    href: "/book",
    features: [
      { textKey: "pricingBeatF1", highlight: true },
      { textKey: "pricingBeatF2" },
      { textKey: "pricingBeatF3" },
      { textKey: "pricingBeatF4" },
      { textKey: "pricingBeatF5" },
      { textKey: "pricingBeatF6" },
    ],
  },
];

const TESTIMONIALS = [
  { quoteKey: "testimonial1Quote", artistKey: "testimonial1Artist" },
  { quoteKey: "testimonial2Quote", artistKey: "testimonial2Artist" },
  { quoteKey: "testimonial3Quote", artistKey: "testimonial3Artist" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function ytThumb(id: string) { return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }
function ytURL(id: string)   { return `https://www.youtube.com/watch?v=${id}`; }

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

// ─── Sub-components ───────────────────────────────────────────────────────────

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-[900ms] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
}

function MouseGlow() {
  return <div className="mouse-glow pointer-events-none" />;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  const t = useTranslations("Home");

  const [showHero, setShowHero]     = useState(false);
  const [mousePos, setMousePos]     = useState({ x: 0, y: 0 });
  const [activeTrack, setActiveTrack] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const track = TRACKS[activeTrack];
  const [isPlaying, setIsPlaying] = useState(false);

  // Stop playing when track changes
  const handleTrackSelect = (i: number) => {
    if (i === activeTrack) {
      // Same track — toggle play/pause
      setIsPlaying((prev) => !prev);
    } else {
      // New track — switch and autoplay
      setActiveTrack(i);
      setIsPlaying(true);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicRecordingStudio",
    name: "Invaluabless Productions",
    image: "https://www.invaluablessproduction.com/images/studio-wide-led.jpeg",
    address: { "@type": "PostalAddress", streetAddress: "3200 Wright Carpenter Rd", addressLocality: "San Antonio", addressRegion: "TX", postalCode: "78221", addressCountry: "US" },
    url: "https://www.invaluablessproduction.com",
    telephone: "+1-210-608-6422",
  };

  return (
    <main className="relative min-h-screen bg-transparent text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Background ── */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/images/hero-mic.jpg')" }} />
        <div className="absolute inset-0 bg-black/50" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/70 to-[#0a0a0f]" />
      </div>
      <div className="grain" />
      <div className="scanlines" />
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

      <div className="relative z-20">

        {/* ══ HERO ══ */}
        <section className="relative flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-16">
            <div className={`transition-all duration-1000 ease-out ${showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-block h-[6px] w-[6px] animate-pulse rounded-full bg-green-400" />
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-green-400">{t("heroAvailability")}</span>
              </div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#ff0040]" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">{t("heroBadge")}</p>
              </div>
              <h1 className="text-6xl font-black leading-[0.85] uppercase tracking-tighter md:text-8xl lg:text-9xl">
                <span className="block text-white">{t("heroLine1")}</span>
                <span className="block text-[#ff0040] drop-shadow-[0_0_25px_rgba(255,0,64,0.45)]">{t("heroLine2")}</span>
                <span className="block text-white/90">{t("heroLine3")}</span>
              </h1>
              <div className="street-card street-hover mt-8 max-w-xl p-6" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <MouseGlow />
                <p className="relative z-10 border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-300">{t("heroIntro")}</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/book" className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red">
                  <span className="relative z-10">{t("ctaBook")}</span>
                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
                <Link href="/work" className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan">
                  <span className="relative z-10">{t("ctaWork")}</span>
                  <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>
              <div className="mt-16 flex gap-12 text-sm">
                <div>
                  <div className="text-3xl font-bold text-[#ff0040]">300+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{t("statTracks")}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#00f0ff]">20+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{t("statArtists")}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">16+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{t("statYearsExp")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
            <div className="h-8 w-[1px] bg-gradient-to-b from-[#ff0040] to-transparent" />
          </div>
        </section>

        {/* ══ HEAVY HITTERS ══ */}
        <section id="work" className="border-t border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#00f0ff]">{t("heavyHittersEyebrow")}</p>
              <h2 className="mb-0 font-['Bebas_Neue'] text-6xl uppercase tracking-wide md:text-7xl">
                {t("heavyHittersTitle")}<span className="text-[#ff0040]">.</span>
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-[1fr_400px]">
                <div className="flex flex-col">
                  {TRACKS.map((tr, i) => (
                    <div
                      key={tr.yt}
                      onClick={() => handleTrackSelect(i)}
                      className={`group relative flex cursor-pointer items-center gap-4 overflow-hidden border-b border-white/5 p-4 transition-all first:border-t first:border-white/5 ${activeTrack === i ? "bg-[#ff0040]/[0.06]" : "hover:bg-[#ff0040]/[0.04]"}`}
                    >
                      <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#ff0040] transition-transform duration-200 ${activeTrack === i ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}`} />
                      <span className={`w-7 text-right font-['Bebas_Neue'] text-sm flex-shrink-0 transition-colors ${activeTrack === i ? "text-[#ff0040]" : "text-white/20 group-hover:text-[#ff0040]"}`}>{tr.num}</span>
                      <img src={ytThumb(tr.yt)} alt={tr.name} loading="lazy" className={`h-11 w-11 flex-shrink-0 border object-cover transition-colors ${activeTrack === i ? "border-[#ff0040]/40" : "border-white/8 group-hover:border-[#ff0040]/40"}`} />
                      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center border transition-all ${activeTrack === i ? "border-[#ff0040] bg-[#ff0040]" : "border-[#ff0040]/35 group-hover:border-[#ff0040] group-hover:bg-[#ff0040]"}`}>
                        {activeTrack === i && isPlaying ? (
                          <svg className="h-[10px] w-[10px] fill-black" viewBox="0 0 10 10"><rect x="1.5" y="1" width="2.5" height="8" /><rect x="6" y="1" width="2.5" height="8" /></svg>
                        ) : (
                          <svg className="h-[10px] w-[10px] fill-[#ff0040] group-hover:fill-black transition-colors" viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9" /></svg>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-[0.9rem] font-semibold text-white">{tr.name}</div>
                        <div className="mt-0.5 truncate text-[0.7rem] tracking-[0.08em] text-gray-400">{tr.artist}</div>
                      </div>
                      <span className="flex-shrink-0 whitespace-nowrap border border-[#00f0ff]/20 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[#00f0ff]/70">
                        {t(tr.genreKey as Parameters<typeof t>[0])}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="sticky top-4">
                  <div className="street-card street-hover overflow-hidden bg-[#0f0f14]" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                    <MouseGlow />
                    {/* Player area — shows iframe when playing, thumbnail when not */}
                    <div className="relative aspect-video w-full overflow-hidden bg-black">
                      {isPlaying ? (
                        <iframe
                          key={track.yt}
                          src={`https://www.youtube.com/embed/${track.yt}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                          title={track.name}
                          allow="autoplay; encrypted-media; fullscreen"
                          allowFullScreen
                          className="absolute inset-0 h-full w-full"
                        />
                      ) : (
                        <>
                          <img src={ytThumb(track.yt)} alt={track.name} className="h-full w-full object-cover brightness-[0.85] contrast-105 transition-transform duration-500" />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff0040]/12 to-[#00f0ff]/8" />
                          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0a0f]/90 to-transparent" />
                          <button
                            onClick={() => setIsPlaying(true)}
                            className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#ff0040]/90 transition-all hover:scale-110 hover:bg-[#ff0040]"
                          >
                            <svg className="ml-1 h-4 w-4 fill-black" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                          </button>
                        </>
                      )}
                    </div>
                    <div className="relative z-10 p-6">
                      <span className="mb-1 block font-['Bebas_Neue'] text-[0.75rem] tracking-[0.25em] text-[#ff0040]">{track.num} / 06</span>
                      <div className="font-['Bebas_Neue'] text-3xl tracking-[0.06em] leading-none">{track.name}</div>
                      <div className="mt-1 mb-5 text-[0.82rem] tracking-[0.06em] text-gray-400">{track.artist}</div>
                      {isPlaying ? (
                        <button
                          onClick={() => setIsPlaying(false)}
                          className="flex w-full items-center justify-center gap-2 border border-white/20 bg-white/5 py-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gray-400 transition-all hover:bg-white/10 hover:text-white"
                        >
                          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 10 10"><rect x="1.5" y="1" width="2.5" height="8" /><rect x="6" y="1" width="2.5" height="8" /></svg>
                          Stop
                        </button>
                      ) : (
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="flex w-full items-center justify-center gap-2 border border-[#ff0040]/30 bg-[#ff0040]/10 py-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#ff0040] transition-all hover:bg-[#ff0040] hover:text-black"
                        >
                          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                          {t("playerWatchYT")}
                        </button>
                      )}
                    </div>
                    <div className="relative z-10 grid grid-cols-2 border-t border-white/5">
                      <button onClick={() => handleTrackSelect((activeTrack - 1 + TRACKS.length) % TRACKS.length)} className="flex items-center justify-center gap-1.5 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gray-500 transition-all hover:bg-white/[0.03] hover:text-white border-r border-white/5">
                        <svg className="h-3 w-3 stroke-current" fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                        {t("playerPrev")}
                      </button>
                      <button onClick={() => handleTrackSelect((activeTrack + 1) % TRACKS.length)} className="flex items-center justify-center gap-1.5 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gray-500 transition-all hover:bg-white/[0.03] hover:text-white">
                        {t("playerNext")}
                        <svg className="h-3 w-3 stroke-current" fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
                      </button>
                    </div>
                  </div>
                  <Link href="/work" className="mt-4 block border border-[#00f0ff]/20 py-3.5 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#00f0ff] transition-all hover:bg-[#00f0ff]/07 hover:text-white">
                    {t("playerViewAll")}
                  </Link>
                </div>
              </div>

              <div className="mt-12 border-t border-white/5 pt-6">
                <p className="mb-3 flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.28em] text-gray-500">
                  {t("creditsAlsoWorkedWith")}
                  <span className="flex-1 border-t border-white/8" />
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {CREDITS.map((name, i) => (
                    <span key={name} className="text-[0.75rem] tracking-[0.06em] text-white/35 transition-colors hover:text-white/70">
                      {name}{i < CREDITS.length - 1 && <span className="ml-2 text-white/12">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ STUDIO ══ */}
        <section id="studio" className="border-t border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-12 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#00f0ff]">{t("studioEyebrow")}</p>
                <h2 className="font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                  {t("studioTitle1")}<br /><span className="text-[#ff0040]">{t("studioTitle2")}</span>
                </h2>
              </div>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                {[
                  { src: "/images/studio-wide-led.jpeg", alt: t("studioPhoto1Alt"), fit: "object-cover" },
                  { src: "/images/artist-in-booth.jpeg",  alt: t("studioPhoto2Alt"), fit: "object-contain" },
                ].map((photo, i) => (
                  <div key={photo.src} className="street-hover group relative aspect-video overflow-hidden border border-white/10 bg-[#0f0f14]" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                    <MouseGlow />
                    <Image src={photo.src} alt={photo.alt} fill className={`${photo.fit} brightness-[0.88] contrast-105 transition-transform duration-700 group-hover:scale-[1.04]`} />
                    <div className={`pointer-events-none absolute inset-0 ${i === 0 ? "bg-gradient-to-br from-[#ff0040]/10 to-[#00f0ff]/06" : "bg-gradient-to-br from-[#00f0ff]/08 to-[#ff0040]/06"}`} />
                  </div>
                ))}
              </div>
              <div className="grid border border-white/8 md:grid-cols-4">
                {[
                  { titleKey: "studioCard1Title", descKey: "studioCard1Desc", href: "/book",              accent: "red"  },
                  { titleKey: "studioCard2Title", descKey: "studioCard2Desc", href: "/services",           accent: "cyan" },
                  { titleKey: "studioCard3Title", descKey: "studioCard3Desc", href: "/services",           accent: "red"  },
                  { titleKey: "studioCard4Title", descKey: "studioCard4Desc", href: "/artist-development", accent: "cyan" },
                ].map((card) => (
                  <Link key={card.titleKey} href={card.href} className="street-hover group relative block border-r border-white/8 p-8 last:border-r-0 transition-all hover:bg-white/[0.02]" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave} style={{ position: "relative", overflow: "hidden" }}>
                    <MouseGlow />
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 transition-transform duration-250 group-hover:scale-x-100 ${card.accent === "red" ? "bg-[#ff0040]" : "bg-[#00f0ff]"}`} />
                    <h4 className={`relative z-10 mb-3 font-['Bebas_Neue'] text-[1.6rem] uppercase tracking-[0.06em] transition-colors ${card.accent === "red" ? "group-hover:text-[#ff0040]" : "group-hover:text-[#00f0ff]"}`}>
                      {t(card.titleKey as Parameters<typeof t>[0])}
                    </h4>
                    <p className="relative z-10 mb-5 text-sm leading-relaxed text-gray-400">{t(card.descKey as Parameters<typeof t>[0])}</p>
                    <span className={`relative z-10 text-xs font-bold uppercase tracking-[0.2em] ${card.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"}`}>{t("learnMore")}</span>
                  </Link>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ PRICING ══ */}
        <section id="pricing" className="border-t border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff0040]">{t("pricingEyebrow")}</p>
              <h2 className="mb-12 font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                {t("pricingTitle")}<span className="text-[#ff0040]">.</span>
              </h2>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {PRICING.map((card) => (
                  <div
                    key={card.tierKey}
                    className={`street-card street-hover relative flex flex-col p-8 transition-all ${card.featured ? "border-[#ff0040] bg-[#ff0040]/[0.04] hover:border-[#ff0040]/55" : card.bundle ? "border-[#00f0ff]/35 bg-[#00f0ff]/[0.03] hover:border-[#00f0ff]/60" : "hover:border-white/15"}`}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <MouseGlow />
                    {card.badge && (
                      <div className={`absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 text-[0.58rem] font-bold uppercase tracking-[0.2em] whitespace-nowrap ${card.badge.color === "red" ? "bg-[#ff0040] text-black" : "bg-[#00f0ff] text-black"}`}>
                        {t(card.badge.labelKey as Parameters<typeof t>[0])}
                      </div>
                    )}
                    {/* Card header — every card has identical structure for alignment */}
                    <div className={`relative z-10 ${card.badge ? "pt-5" : "pt-1"}`}>
                      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gray-500">
                        {t(card.tierKey as Parameters<typeof t>[0])}
                      </p>
                      <div className="font-['Bebas_Neue'] text-[3.2rem] leading-none text-white">
                        {card.amount}
                        <span className="ml-1 font-sans text-[0.82rem] font-light text-gray-500">
                          {t(card.unitKey as Parameters<typeof t>[0])}
                        </span>
                      </div>
                      {/* This line is always the same height — shows note OR save badge OR empty */}
                      <div className="mt-2 h-5 flex items-center">
                        {card.saveBadgeKey ? (
                          <div className="inline-flex items-center gap-1 border border-[#00f0ff]/30 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-[#00f0ff]">
                            <span className="h-1 w-1 rounded-full bg-[#00f0ff]" />
                            {t(card.saveBadgeKey as Parameters<typeof t>[0])}
                          </div>
                        ) : card.noteKey ? (
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gray-500">
                            {t(card.noteKey as Parameters<typeof t>[0])}
                          </p>
                        ) : null}
                      </div>
                      <div className="my-5 h-px bg-white/8" />
                    </div>
                    {/* Features — flex-1 pushes button to bottom */}
                    <ul className="relative z-10 flex flex-1 flex-col gap-3 mb-6">
                      {card.features.map((f) => (
                        <li key={f.textKey} className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed">
                          <span className={`mt-[0.45rem] inline-block h-1 w-1 flex-shrink-0 ${f.cyan ? "bg-[#00f0ff]" : "bg-[#ff0040]"}`} />
                          <span className={f.highlight ? "font-medium text-white" : "text-gray-400"}>{t(f.textKey as Parameters<typeof t>[0])}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Button always at bottom */}
                    <Link href={card.href} className={`relative z-10 block py-3.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-all ${card.featured ? "bg-[#ff0040] text-black hover:bg-white" : card.bundle ? "border border-[#00f0ff]/35 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black" : "border border-[#ff0040]/30 text-[#ff0040] hover:bg-[#ff0040] hover:text-black"}`}>
                      {t("pricingBookNow")}
                    </Link>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-[0.72rem] tracking-[0.1em] text-gray-500">
                {t("pricingFooterNote")}{" "}
                <Link href="/services" className="text-[#00f0ff] hover:underline">{t("pricingFooterLink")}</Link>
              </p>
            </div>
          </FadeInSection>
        </section>

        {/* ══ PRODUCER ══ */}
        <section id="producer" className="border-t border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="grid items-center gap-16 md:grid-cols-2">
                <div className="relative pb-6 pr-6">
                  <div className="street-card street-hover group border border-white/10 bg-white/[0.03] backdrop-blur" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                    <MouseGlow />
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image src="/images/producer-portrait.jpeg" alt={t("producerPhotoAlt")} fill className="object-cover object-top" priority />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff0040]/08 to-[#00f0ff]/08" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#ff0040] flex flex-col items-center justify-center font-['Bebas_Neue'] text-black">
                    <span className="text-[2rem] leading-none">16+</span>
                    <span className="text-[0.55rem] uppercase tracking-[0.18em] mt-1">{t("statYears")}</span>
                  </div>
                </div>
                <div className="street-card street-hover p-8" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                  <MouseGlow />
                  <div className="relative z-10 space-y-6">
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#ff0040]">{t("producerEyebrow")}</p>
                      <h2 className="font-['Bebas_Neue'] text-4xl uppercase tracking-wider md:text-5xl">Jeovanne Diaz</h2>
                      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">{t("producerRole")}</p>
                    </div>
                    <div className="space-y-4 leading-relaxed text-gray-300">
                      <p>{t("producerStory1")}</p>
                      <p>{t("producerStory2")} {t("producerStory3")}</p>
                      <p>{t("producerStory4")}</p>
                    </div>
                    <div className="border-l-4 border-[#ff0040] py-1 pl-6">
                      <p className="text-lg font-bold italic text-white">&quot;{t("producerQuote")}&quot;</p>
                    </div>
                    <p className="font-mono text-sm uppercase tracking-widest text-[#ff0040]">{t("producerTagline")}</p>
                    <div className="flex gap-8 border-t border-white/8 pt-6">
                      <div>
                        <div className="font-['Bebas_Neue'] text-2xl text-[#ff0040]">300+</div>
                        <div className="text-[0.62rem] uppercase tracking-wider text-gray-500">{t("statTracks")}</div>
                      </div>
                      <div>
                        <div className="font-['Bebas_Neue'] text-2xl text-[#00f0ff]">20+</div>
                        <div className="text-[0.62rem] uppercase tracking-wider text-gray-500">{t("statArtists")}</div>
                      </div>
                      <div>
                        <div className="font-['Bebas_Neue'] text-2xl text-white">16+</div>
                        <div className="text-[0.62rem] uppercase tracking-wider text-gray-500">{t("statYears")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section className="border-t border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#00f0ff]">{t("testimonialsEyebrow")}</p>
              <h2 className="mb-16 text-center font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                {t("testimonialsTitle1")} <span className="text-[#ff0040]">{t("testimonialsTitle2")}</span>
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {TESTIMONIALS.map((item) => (
                  <div key={item.artistKey} className="street-card street-hover relative border border-white/10 bg-white/[0.02] p-8 pt-10" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                    <MouseGlow />
                    <div className="pointer-events-none absolute top-2 left-6 font-['Bebas_Neue'] text-[4rem] leading-none text-[#ff0040]/10 select-none">&quot;</div>
                    <p className="relative z-10 mb-6 italic leading-relaxed text-gray-300">&quot;{t(item.quoteKey as Parameters<typeof t>[0])}&quot;</p>
                    <p className="relative z-10 text-sm font-bold uppercase tracking-wider text-[#ff0040]">— {t(item.artistKey as Parameters<typeof t>[0])}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ CTA BAND ══ */}
        <FadeInSection>
          <section id="contact-cta" className="relative border-y border-[#ff0040]/20 py-20 text-center" style={{ background: "linear-gradient(135deg, rgba(255,0,64,0.08), rgba(0,240,255,0.04))" }}>
            <div className="mx-auto max-w-2xl px-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#00f0ff]">{t("ctaBandEyebrow")}</p>
              <h2 className="mb-6 font-['Bebas_Neue'] text-7xl uppercase tracking-tight md:text-8xl">{t("ctaBandTitle")}<span className="text-[#ff0040]">.</span></h2>
              <p className="mb-10 text-xl text-gray-400">{t("ctaBandSub")}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/book" className="group relative overflow-hidden bg-[#ff0040] px-10 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red">
                  <span className="relative z-10">{t("ctaBandBook")}</span>
                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
                <a href="tel:2106086422" className="group relative overflow-hidden border border-[#00f0ff] px-10 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan">
                  <span className="relative z-10">(210) 608-6422</span>
                  <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                </a>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ══ CONTACT ══ */}
        <section id="contact" className="border-t border-white/5 pt-20 pb-10">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-6 w-6 flex-shrink-0 text-[#ff0040]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-bold uppercase tracking-wider">{t("contactStudio")}</h4>
                      <p className="text-sm leading-relaxed text-gray-400">3200 Wright Carpenter Rd<br />San Antonio, Texas 78221</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-6 w-6 flex-shrink-0 text-[#00f0ff]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold uppercase tracking-wider">{t("contactEmail")}</h4>
                      <div className="space-y-1 text-sm text-gray-400">
                        <p><span className="text-white">{t("contactBookings")}</span> bookings@invaluablessproduction.com</p>
                        <p><span className="text-white">{t("contactBeats")}</span> beats@invaluablessproduction.com</p>
                        <p><span className="text-white">{t("contactGeneral")}</span> support@invaluablessproduction.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-6 text-lg font-bold uppercase tracking-wider">{t("contactFollow")}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { href: "https://instagram.com/invaluablessproduction", label: "Instagram", accent: "red" as const },
                      { href: "https://youtube.com/@InvaluaBlessProductions",  label: "YouTube",   accent: "red" as const },
                      { href: "https://facebook.com/invaluablessproduction",  label: "Facebook",  accent: "cyan" as const },
                      { href: "https://tiktok.com/@invaluablessproductions",  label: "TikTok",    accent: "cyan" as const },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className={`street-hover relative flex items-center gap-3 overflow-hidden border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition-all ${s.accent === "red" ? "hover:border-[#ff0040]/50 hover:bg-[#ff0040]/15" : "hover:border-[#00f0ff]/40 hover:bg-[#00f0ff]/10"}`}
                        onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}
                      >
                        <MouseGlow />
                        <span className={`relative z-10 ${s.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"}`}>→</span>
                        <span className="relative z-10">{s.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

      </div>
    </main>
  );
}