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
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-[1800ms] ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
      {children}
    </div>
  );
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

export default function ArtistDevelopmentPage() {
  const t = useTranslations("ArtistDevelopmentPage");
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

  const problemCards = [
    { title: t("problemCards.0.title"), desc: t("problemCards.0.desc"), accent: "red" },
    { title: t("problemCards.1.title"), desc: t("problemCards.1.desc"), accent: "cyan" },
    { title: t("problemCards.2.title"), desc: t("problemCards.2.desc"), accent: "red" },
  ] as const;

  const roadmapCards = [
    { title: t("roadmapCards.0.title"), desc: t("roadmapCards.0.desc"), accent: "red" },
    { title: t("roadmapCards.1.title"), desc: t("roadmapCards.1.desc"), accent: "cyan" },
    { title: t("roadmapCards.2.title"), desc: t("roadmapCards.2.desc"), accent: "red" },
  ] as const;

  const processCards = [
    { title: t("processCards.0.title"), desc: t("processCards.0.desc"), accent: "red" },
    { title: t("processCards.1.title"), desc: t("processCards.1.desc"), accent: "cyan" },
    { title: t("processCards.2.title"), desc: t("processCards.2.desc"), accent: "red" },
  ] as const;

  // ── Updated pricing ──────────────────────────────────────────────────────────
  const packages = [
    {
      title: t("packages.momentum.title"),
      bestFor: t("packages.momentum.bestFor"),
      desc: t("packages.momentum.desc"),
      price: "$550",
      commitment: "$1,650",
      outcome: t("packages.momentum.outcome"),
      items: [
        t("packages.momentum.items.0"),
        t("packages.momentum.items.1"),
        t("packages.momentum.items.2"),
        t("packages.momentum.items.3"),
        t("packages.momentum.items.4"),
        t("packages.momentum.items.5"),
      ],
      featured: false,
      buttonStyle: "border border-white/15 text-white hover:border-[#ff0040] hover:text-[#ff0040]",
      descStyle: "text-gray-400",
      listStyle: "text-gray-300",
      noteStyle: "text-gray-400",
      commitmentStyle: "text-gray-400",
      bestForStyle: "text-[#00f0ff]",
    },
    {
      title: t("packages.elevation.title"),
      bestFor: t("packages.elevation.bestFor"),
      desc: t("packages.elevation.desc"),
      price: "$900",
      commitment: "$2,700",
      outcome: t("packages.elevation.outcome"),
      items: [
        t("packages.elevation.items.0"),
        t("packages.elevation.items.1"),
        t("packages.elevation.items.2"),
        t("packages.elevation.items.3"),
        t("packages.elevation.items.4"),
        t("packages.elevation.items.5"),
        t("packages.elevation.items.6"),
        t("packages.elevation.items.7"),
        t("packages.elevation.items.8"),
      ],
      featured: true,
      buttonStyle: "bg-[#ff0040] text-black hover:glow-red",
      descStyle: "text-gray-300",
      listStyle: "text-gray-200",
      noteStyle: "text-gray-300",
      commitmentStyle: "text-gray-300",
      bestForStyle: "text-[#00f0ff]",
    },
    {
      title: t("packages.partner.title"),
      bestFor: t("packages.partner.bestFor"),
      desc: t("packages.partner.desc"),
      price: "$1,400",
      commitment: "$4,200",
      outcome: t("packages.partner.outcome"),
      items: [
        t("packages.partner.items.0"),
        t("packages.partner.items.1"),
        t("packages.partner.items.2"),
        t("packages.partner.items.3"),
        t("packages.partner.items.4"),
        t("packages.partner.items.5"),
        t("packages.partner.items.6"),
        t("packages.partner.items.7"),
        t("packages.partner.items.8"),
      ],
      featured: false,
      buttonStyle: "border border-white/15 text-white hover:border-[#00f0ff] hover:text-[#00f0ff]",
      descStyle: "text-gray-400",
      listStyle: "text-gray-300",
      noteStyle: "text-gray-400",
      commitmentStyle: "text-gray-400",
      bestForStyle: "text-[#00f0ff]",
    },
  ] as const;

  return (
    <main className="relative min-h-screen bg-transparent text-white">
      {/* ── Background ── */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)", transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, transition: "transform 0.3s ease-out" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/70 to-[#0a0a0f]" />
      </div>
      <div className="grain" />
      <div className="scanlines" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

      <div className="relative z-20">

        {/* ══ HERO ══ */}
        <section className="relative flex min-h-[92vh] items-center pt-24">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-16">
            <div className={`transition-all duration-1000 ease-out ${showHero ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#ff0040]" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">{t("heroEyebrow")}</p>
              </div>
              <h1 className="font-['Bebas_Neue'] text-6xl leading-[0.85] uppercase tracking-tighter md:text-8xl lg:text-9xl">
                <span className="block text-white">{t("heroLine1")}</span>
                <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.45)]">{t("heroLine2")}</span>
                <span className="block text-white/90">{t("heroLine3")}</span>
              </h1>
              <div className="street-card street-hover mt-8 max-w-2xl p-6" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <div className="mouse-glow" />
                <p className="relative z-10 border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-300">{t("heroIntro")}</p>
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.25em] text-gray-500">{t("heroSubtext")}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/artist-development/apply" className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red">
                  <span className="relative z-10">{t("heroApplyButton")}</span>
                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
                <Link href="/book" className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan">
                  <span className="relative z-10">{t("heroBookButton")}</span>
                  <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>
              <div className="mt-14 flex flex-wrap gap-10 text-sm">
                <div>
                  <div className="font-['Bebas_Neue'] text-4xl text-[#ff0040]">3</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{t("stats.packageLevels")}</div>
                </div>
                <div>
                  <div className="font-['Bebas_Neue'] text-4xl text-[#00f0ff]">3+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{t("stats.monthCommitment")}</div>
                </div>
                <div>
                  <div className="font-['Bebas_Neue'] text-4xl text-white">1:1</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{t("stats.artistSupport")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ THE PROBLEM ══ */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">{t("problemSection.eyebrow")}</p>
                <h2 className="font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                  {t("problemSection.title")}<span className="text-[#ff0040]">.</span>
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {problemCards.map((item) => (
                  <div key={item.title} className="street-card street-hover p-8" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                    <div className="mouse-glow" />
                    <h3 className={`relative z-10 mb-4 font-['Bebas_Neue'] text-2xl uppercase ${item.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"}`}>{item.title}</h3>
                    <p className="relative z-10 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ WHAT IT IS ══ */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-5xl px-6 text-center md:px-16">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">{t("whatItIs.eyebrow")}</p>
              <h2 className="font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                {t("whatItIs.title1")}<br /><span className="text-[#ff0040]">{t("whatItIs.title2")}</span>
              </h2>
              <div className="street-card street-hover mt-10 p-8 text-left" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <div className="mouse-glow" />
                <div className="relative z-10 space-y-5 leading-relaxed text-gray-300">
                  <p>{t("whatItIs.paragraph1")}</p>
                  <p>{t("whatItIs.paragraph2")}</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ TRANSFORMATION ══ */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">{t("transformation.eyebrow")}</p>
                <h2 className="font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                  {t("transformation.title1")}<span className="text-[#ff0040]"> {t("transformation.title2")}</span>
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="street-card street-hover p-8" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                  <div className="mouse-glow" />
                  <h3 className="relative z-10 mb-6 font-['Bebas_Neue'] text-2xl uppercase text-[#ff0040]">{t("before.title")}</h3>
                  <ul className="relative z-10 space-y-4 text-gray-400">
                    {[0,1,2,3,4,5].map(i => <li key={i}>• {t(`before.items.${i}` as Parameters<typeof t>[0])}</li>)}
                  </ul>
                </div>
                <div className="street-card street-hover p-8" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                  <div className="mouse-glow" />
                  <h3 className="relative z-10 mb-6 font-['Bebas_Neue'] text-2xl uppercase text-[#00f0ff]">{t("after.title")}</h3>
                  <ul className="relative z-10 space-y-4 text-gray-300">
                    {[0,1,2,3,4,5].map(i => <li key={i}>• {t(`after.items.${i}` as Parameters<typeof t>[0])}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ ROADMAP ══ */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">{t("roadmapSection.eyebrow")}</p>
                <h2 className="font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                  {t("roadmapSection.title1")}<span className="text-[#ff0040]"> {t("roadmapSection.title2")}</span>
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {roadmapCards.map((step) => (
                  <div key={step.title} className="street-card street-hover p-8" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                    <div className="mouse-glow" />
                    <h3 className={`relative z-10 mb-4 font-['Bebas_Neue'] text-2xl uppercase ${step.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"}`}>{step.title}</h3>
                    <p className="relative z-10 text-sm leading-relaxed text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ FIT ══ */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">{t("fitSection.eyebrow")}</p>
                <h2 className="font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                  {t("fitSection.title1")}<span className="text-[#ff0040]"> {t("fitSection.title2")}</span>
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="street-card street-hover p-8" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                  <div className="mouse-glow" />
                  <div className="relative z-10">
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">{t("fitForYou.eyebrow")}</p>
                    <h3 className="mb-6 font-['Bebas_Neue'] text-2xl uppercase text-white">{t("fitForYou.title")}</h3>
                    <ul className="space-y-4 text-sm leading-relaxed text-gray-300">
                      {[0,1,2,3,4,5].map(i => <li key={i}>• {t(`fitForYou.items.${i}` as Parameters<typeof t>[0])}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="street-card street-hover p-8" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                  <div className="mouse-glow" />
                  <div className="relative z-10">
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#ff0040]">{t("notForYou.eyebrow")}</p>
                    <h3 className="mb-6 font-['Bebas_Neue'] text-2xl uppercase text-white">{t("notForYou.title")}</h3>
                    <ul className="space-y-4 text-sm leading-relaxed text-gray-400">
                      {[0,1,2,3,4,5].map(i => <li key={i}>• {t(`notForYou.items.${i}` as Parameters<typeof t>[0])}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ PROCESS ══ */}
        <section className="border-y border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">{t("processSection.eyebrow")}</p>
                <h2 className="font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                  {t("processSection.title1")}<span className="text-[#ff0040]"> {t("processSection.title2")}</span>
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {processCards.map((step) => (
                  <div key={step.title} className="street-card street-hover p-8" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                    <div className="mouse-glow" />
                    <h3 className={`relative z-10 mb-4 font-['Bebas_Neue'] text-xl uppercase ${step.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"}`}>{step.title}</h3>
                    <p className="relative z-10 text-sm leading-relaxed text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ PACKAGES ══ */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-6 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">{t("packagesSection.eyebrow")}</p>
                <h2 className="font-['Bebas_Neue'] text-5xl uppercase tracking-tight md:text-6xl">
                  {t("packagesSection.title1")}<span className="text-[#ff0040]"> {t("packagesSection.title2")}</span>
                </h2>
              </div>
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <p className="text-base leading-relaxed text-gray-400 md:text-lg">{t("packagesSection.intro")}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gray-500">{t("packagesSection.commitmentNote")}</p>
              </div>
              <div className="grid items-stretch gap-8 md:grid-cols-3">
                {packages.map((pkg) => (
                  <div
                    key={pkg.title}
                    className={`street-card street-hover relative flex h-full flex-col p-8 ${pkg.featured ? "border border-[#ff0040]/60 bg-white/[0.02] pt-14 shadow-[0_0_35px_rgba(255,0,64,0.12)]" : ""}`}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="mouse-glow" />
                    {pkg.featured && (
                      <span className="absolute left-1/2 top-2 z-20 -translate-x-1/2 whitespace-nowrap bg-[#ff0040] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                        {t("packages.popular")}
                      </span>
                    )}
                    <div className="relative z-10 flex h-full flex-col">
                      <p className={`mb-3 text-xs uppercase tracking-[0.25em] ${pkg.bestForStyle}`}>{pkg.bestFor}</p>
                      <h3 className="mb-3 font-['Bebas_Neue'] text-3xl uppercase text-white">{pkg.title}</h3>
                      <p className={`mb-6 text-sm leading-relaxed ${pkg.descStyle}`}>{pkg.desc}</p>
                      <div className="mb-6">
                        <p className="font-['Bebas_Neue'] text-5xl text-[#ff0040]">{pkg.price}</p>
                        <p className="mt-1 text-sm uppercase tracking-wider text-gray-500">{t("packages.perMonth")}</p>
                        <p className={`mt-3 text-sm ${pkg.commitmentStyle}`}>
                          {t("packages.minimumCommitment")}: <span className="font-semibold text-white">{pkg.commitment}</span>
                        </p>
                      </div>
                      <ul className={`mb-8 flex-1 space-y-3 text-sm ${pkg.listStyle}`}>
                        {pkg.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 bg-[#ff0040]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-white/10 pt-6">
                        <p className={`mb-5 text-sm leading-relaxed ${pkg.noteStyle}`}>{pkg.outcome}</p>
                        <Link
                          href="/artist-development/apply"
                          className={`group relative inline-block w-full overflow-hidden px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] transition-all ${pkg.buttonStyle}`}
                        >
                          <span className="relative z-10">{t("packages.applyButton")}</span>
                          {pkg.featured && <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-10 max-w-4xl text-center">
                <p className="text-sm leading-relaxed text-gray-500">{t("packagesSection.footerNote")}</p>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ══ CTA ══ */}
        <section className="relative py-20">
          <FadeInSection>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ff0040]/5 to-transparent" />
            <div className="street-card street-hover relative mx-auto max-w-4xl px-6 py-12 text-center md:px-10" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
              <div className="mouse-glow" />
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">{t("cta.eyebrow")}</p>
              <h2 className="font-['Bebas_Neue'] mb-6 text-6xl uppercase tracking-tighter md:text-8xl">
                {t("cta.title1")}<span className="text-[#ff0040]"> {t("cta.title2")}</span>
              </h2>
              <p className="mb-4 text-lg text-gray-400">{t("cta.description")}</p>
              <p className="mb-10 text-xs uppercase tracking-[0.25em] text-gray-500">{t("cta.subtext")}</p>
              <Link href="/artist-development/apply" className="group relative inline-block overflow-hidden bg-[#ff0040] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red">
                <span className="relative z-10">{t("cta.button")}</span>
                <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              </Link>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gray-500">{t("cta.minimum")}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gray-500">{t("cta.limited")}</p>
            </div>
          </FadeInSection>
        </section>

      </div>
    </main>
  );
}