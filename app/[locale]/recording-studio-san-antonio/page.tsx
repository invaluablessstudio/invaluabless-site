"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Mic2,
  Music3,
  SlidersHorizontal,
  Disc3,
  Radio,
  Headphones,
  MapPin,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1800ms] ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#00f0ff]">
        {eyebrow}
      </p>
      <h2 className="font-urban text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function RecordingStudioSanAntonioPage() {
  const t = useTranslations("StudioPage");
  const [showHero, setShowHero] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      title: t("services.recording.title"),
      description: t("services.recording.description"),
      icon: Mic2,
      accent: "red",
    },
    {
      title: t("services.mixing.title"),
      description: t("services.mixing.description"),
      icon: SlidersHorizontal,
      accent: "cyan",
    },
    {
      title: t("services.mastering.title"),
      description: t("services.mastering.description"),
      icon: Disc3,
      accent: "red",
    },
    {
      title: t("services.beats.title"),
      description: t("services.beats.description"),
      icon: Music3,
      accent: "cyan",
    },
    {
      title: t("services.podcast.title"),
      description: t("services.podcast.description"),
      icon: Radio,
      accent: "red",
    },
    {
      title: t("services.vocalCoaching.title"),
      description: t("services.vocalCoaching.description"),
      icon: Headphones,
      accent: "cyan",
    },
  ] as const;

  const reasons = [
    t("reasons.0"),
    t("reasons.1"),
    t("reasons.2"),
    t("reasons.3"),
    t("reasons.4"),
    t("reasons.5"),
  ];

  const areas = [
    t("areas.0"),
    t("areas.1"),
    t("areas.2"),
    t("areas.3"),
    t("areas.4"),
    t("areas.5"),
    t("areas.6"),
    t("areas.7"),
  ];

  const faqs = [
    {
      question: t("faqs.0.question"),
      answer: t("faqs.0.answer"),
    },
    {
      question: t("faqs.1.question"),
      answer: t("faqs.1.answer"),
    },
    {
      question: t("faqs.2.question"),
      answer: t("faqs.2.answer"),
    },
    {
      question: t("faqs.3.question"),
      answer: t("faqs.3.answer"),
    },
  ];

  return (
    <main className="relative min-h-screen bg-transparent text-white">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#0a0a0f]" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hero-mic.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/70 to-[#0a0a0f]" />
      </div>

      <div className="grain" />
      <div className="scanlines" />

      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-20">
        <section className="relative flex min-h-screen items-center pt-20">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-16">
            <div
              className={`mx-auto max-w-5xl transition-all duration-1000 ease-out ${
                showHero ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#ff0040]" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
                  {t("hero.eyebrow")}
                </p>
              </div>

              <h1 className="font-urban text-6xl uppercase tracking-tighter leading-[0.85] md:text-8xl lg:text-9xl">
                <span className="block text-white">{t("hero.line1")}</span>
                <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.5)]">
                  {t("hero.line2")}
                </span>
                <span className="block text-white/90">{t("hero.line3")}</span>
              </h1>

              <div
                className="street-card street-hover mt-8 max-w-3xl p-6"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />
                <p className="relative z-10 border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-300">
                  {t("hero.description")}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
                >
                  <span className="relative z-10">{t("hero.ctaBook")}</span>
                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>

                <Link
                  href="/contact"
                  className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan"
                >
                  <span className="relative z-10">{t("hero.ctaContact")}</span>
                  <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>

              <div className="sr-only">{t("hero.srOnly")}</div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <SectionHeading
                eyebrow={t("servicesSection.eyebrow")}
                title={t("servicesSection.title")}
                description={t("servicesSection.description")}
              />

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  const accent =
                    service.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]";

                  return (
                    <div
                      key={service.title}
                      className="street-card street-hover p-8"
                      onMouseMove={handleCardMouseMove}
                      onMouseLeave={handleCardMouseLeave}
                    >
                      <div className="mouse-glow" />
                      <div className={`mb-5 inline-flex ${accent}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mx-auto max-w-4xl">
                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <p className="text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                    {t("whySection.eyebrow")}
                  </p>
                  <h2 className="font-urban mt-4 text-4xl uppercase tracking-tight text-white md:text-5xl">
                    {t("whySection.title")}
                  </h2>
                  <div className="mt-8 space-y-4">
                    {reasons.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border border-white/10 bg-white/[0.03] px-4 py-4"
                      >
                        <CheckCircle2
                          className={`mt-0.5 h-5 w-5 shrink-0 ${
                            index % 2 === 0 ? "text-[#ff0040]" : "text-[#00f0ff]"
                          }`}
                        />
                        <p className="text-sm leading-7 text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="border-y border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <SectionHeading
                eyebrow={t("areasSection.eyebrow")}
                title={t("areasSection.title")}
                description={t("areasSection.description")}
              />

              <div
                className="street-card street-hover p-8"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />
                <div className="mb-6 flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-[#ff0040]" />
                  <p className="text-sm font-bold uppercase tracking-wider text-white">
                    {t("areasSection.label")}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {areas.map((area, i) => (
                    <span
                      key={area}
                      className={`cursor-default border px-4 py-2 text-sm font-medium transition-all ${
                        i % 2 === 0
                          ? "border-white/10 bg-white/5 text-gray-300 hover:border-[#ff0040]/50 hover:bg-[#ff0040]/20"
                          : "border-white/10 bg-white/5 text-gray-300 hover:border-[#00f0ff]/40 hover:bg-[#00f0ff]/10"
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <SectionHeading
                eyebrow={t("faqSection.eyebrow")}
                title={t("faqSection.title")}
                description={t("faqSection.description")}
              />

              <div className="grid gap-6 md:grid-cols-2">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="street-card street-hover p-8"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="mouse-glow" />
                    <div
                      className={`mb-5 inline-flex ${
                        index % 2 === 0 ? "text-[#ff0040]" : "text-[#00f0ff]"
                      }`}
                    >
                      <HelpCircle className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="relative py-20">
          <FadeInSection>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ff0040]/5 to-transparent" />

            <div className="mx-auto max-w-5xl px-6 md:px-16">
              <div
                className="street-card street-hover relative p-10 text-center"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />

                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  {t("cta.eyebrow")}
                </p>
                <h2 className="font-urban mb-6 text-6xl uppercase tracking-tighter md:text-8xl">
                  {t("cta.title")}
                  <span className="text-[#ff0040]">?</span>
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400">
                  {t("cta.description")}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/book"
                    className="group relative inline-block overflow-hidden bg-[#ff0040] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red"
                  >
                    <span className="relative z-10">{t("cta.bookButton")}</span>
                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group relative inline-block overflow-hidden border border-[#00f0ff] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#00f0ff] transition-all hover:glow-cyan"
                  >
                    <span className="relative z-10">{t("cta.contactButton")}</span>
                    <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>
    </main>
  );
}