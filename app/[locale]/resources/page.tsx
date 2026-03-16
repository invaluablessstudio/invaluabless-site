"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";
import ResourceDownloads from "../../components/ResourceDownloads";
import {
  Mic2,
  Music3,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Headphones,
  ClipboardList,
  BadgeDollarSign,
  HelpCircle,
  Rocket,
  ArrowRight,
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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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

export default function ResourcesPage() {
  const t = useTranslations("ResourcesPage");
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

  const prepCards = [
    {
      title: t("prepCards.0.title"),
      description: t("prepCards.0.description"),
      icon: Music3,
      accent: "red",
    },
    {
      title: t("prepCards.1.title"),
      description: t("prepCards.1.description"),
      icon: Headphones,
      accent: "cyan",
    },
    {
      title: t("prepCards.2.title"),
      description: t("prepCards.2.description"),
      icon: Mic2,
      accent: "red",
    },
  ] as const;

  const policyCards = [
    {
      title: t("policyCards.0.title"),
      description: t("policyCards.0.description"),
      icon: BadgeDollarSign,
      accent: "red",
    },
    {
      title: t("policyCards.1.title"),
      description: t("policyCards.1.description"),
      icon: ClipboardList,
      accent: "cyan",
    },
    {
      title: t("policyCards.2.title"),
      description: t("policyCards.2.description"),
      icon: ShieldCheck,
      accent: "red",
    },
  ] as const;

  const releaseChecklist = [
    t("releaseChecklist.0"),
    t("releaseChecklist.1"),
    t("releaseChecklist.2"),
    t("releaseChecklist.3"),
    t("releaseChecklist.4"),
    t("releaseChecklist.5"),
    t("releaseChecklist.6"),
  ];

  const resourceLinks = [
    {
      title: t("resourceLinks.0.title"),
      description: t("resourceLinks.0.description"),
      href: "/downloads/studio-session-checklist.pdf",
      accent: "red",
      external: true,
    },
    {
      title: t("resourceLinks.1.title"),
      description: t("resourceLinks.1.description"),
      href: "/downloads/split-sheet-template.pdf",
      accent: "cyan",
      external: true,
    },
    {
      title: t("resourceLinks.2.title"),
      description: t("resourceLinks.2.description"),
      href: "/downloads/song-release-checklist.pdf",
      accent: "red",
      external: true,
    },
    {
      title: t("resourceLinks.3.title"),
      description: t("resourceLinks.3.description"),
      href: "/downloads/vocal-recording-guide.pdf",
      accent: "cyan",
      external: true,
    },
  ] as const;

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
              className={`grid items-center gap-12 transition-all duration-1000 ease-out lg:grid-cols-[1.1fr_0.9fr] ${
                showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-[#ff0040]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
                    {t("heroEyebrow")}
                  </p>
                </div>

                <h1 className="font-urban text-6xl uppercase tracking-tighter leading-[0.85] md:text-8xl lg:text-9xl">
                  <span className="block text-white">{t("heroLine1")}</span>
                  <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.5)]">
                    {t("heroLine2")}
                  </span>
                  <span className="block text-white/90">{t("heroLine3")}</span>
                </h1>

                <div
                  className="street-card street-hover mt-8 max-w-xl p-6"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <p className="relative z-10 border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-300">
                    {t("heroIntro")}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/book"
                    className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
                  >
                    <span className="relative z-10">{t("heroBookButton")}</span>
                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>

                  <Link
                    href="#resources"
                    className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan"
                  >
                    <span className="relative z-10">{t("heroResourcesButton")}</span>
                    <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                </div>

                <div className="mt-16 flex gap-12 text-sm">
                  <div>
                    <div className="text-3xl font-bold text-[#ff0040]">2 HR</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                      {t("stats.sessionMinimum")}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00f0ff]">Pro</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                      {t("stats.workflow")}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">
                      {t("stats.readyValue")}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                      {t("stats.readyLabel")}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="street-card street-hover relative border border-white/10 bg-white/[0.03] backdrop-blur"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
                    alt={t("heroImageAlt")}
                    fill
                    className="object-cover transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff0040]/20 to-[#00f0ff]/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="street-card p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                      {t("heroBadgeEyebrow")}
                    </p>
                    <p className="mt-2 text-lg font-bold uppercase tracking-wide text-white">
                      {t("heroBadgeText")}
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-0 bg-[#ff0040] px-4 py-3 font-mono text-black sm:-bottom-6 sm:-right-6 sm:p-6">
                  <p className="text-xl font-bold leading-none uppercase sm:text-2xl">
                    {t("heroSticker")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
            <div className="h-8 w-[1px] bg-gradient-to-b from-[#ff0040] to-transparent" />
          </div>
        </section>

        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <SectionHeading
                eyebrow={t("beforeSession.eyebrow")}
                title={t("beforeSession.title")}
                description={t("beforeSession.description")}
              />

              <div className="grid gap-6 md:grid-cols-3">
                {prepCards.map((card) => {
                  const Icon = card.icon;
                  const accentClasses =
                    card.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]";

                  return (
                    <div
                      key={card.title}
                      className="street-card street-hover p-8"
                      onMouseMove={handleCardMouseMove}
                      onMouseLeave={handleCardMouseLeave}
                    >
                      <div className="mouse-glow" />
                      <div className={`mb-5 inline-flex ${accentClasses}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="border-y border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <SectionHeading
                eyebrow={t("policies.eyebrow")}
                title={t("policies.title")}
                description={t("policies.description")}
              />

              <div className="grid gap-6 md:grid-cols-3">
                {policyCards.map((card) => {
                  const Icon = card.icon;
                  const accentClasses =
                    card.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]";

                  return (
                    <div
                      key={card.title}
                      className="street-card street-hover p-8"
                      onMouseMove={handleCardMouseMove}
                      onMouseLeave={handleCardMouseLeave}
                    >
                      <div className="mouse-glow" />
                      <div className={`mb-5 inline-flex ${accentClasses}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-gray-400">
                        {card.description}
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
              <div className="grid gap-8 lg:grid-cols-2">
                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <p className="text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                    {t("releaseSection.eyebrow")}
                  </p>
                  <h2 className="font-urban mt-4 text-4xl uppercase tracking-tight text-white md:text-5xl">
                    {t("releaseSection.title")}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-gray-400">
                    {t("releaseSection.description")}
                  </p>

                  <div className="mt-8 space-y-4">
                    {releaseChecklist.map((item, index) => (
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

                <div
                  id="resources"
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <p className="text-xs uppercase tracking-[0.3em] text-[#ff0040]">
                    {t("toolsSection.eyebrow")}
                  </p>
                  <h2 className="font-urban mt-4 text-4xl uppercase tracking-tight text-white md:text-5xl">
                    {t("toolsSection.title")}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-gray-400">
                    {t("toolsSection.description")}
                  </p>

                  <div className="mt-8 space-y-4">
                    {resourceLinks.map((resource) => {
                      const accentClasses =
                        resource.accent === "red"
                          ? "hover:border-[#ff0040]/50 hover:bg-[#ff0040]/10"
                          : "hover:border-[#00f0ff]/40 hover:bg-[#00f0ff]/10";

                      const iconClasses =
                        resource.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]";

                      const commonClassName = `group relative block overflow-hidden border border-white/10 bg-white/5 p-5 transition-all ${accentClasses}`;

                      if (resource.external) {
                        return (
                          <a
                            key={resource.title}
                            href={resource.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={commonClassName}
                            onMouseMove={handleCardMouseMove}
                            onMouseLeave={handleCardMouseLeave}
                          >
                            <div className="mouse-glow" />
                            <div className="relative z-10 flex items-start gap-4">
                              <FileText className={`mt-1 h-5 w-5 ${iconClasses}`} />
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-base font-bold uppercase tracking-wide text-white">
                                    {resource.title}
                                  </h3>
                                  <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1" />
                                </div>
                                <p className="mt-2 text-sm leading-7 text-gray-400">
                                  {resource.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        );
                      }

                      return (
                        <Link
                          key={resource.title}
                          href={resource.href}
                          className={commonClassName}
                          onMouseMove={handleCardMouseMove}
                          onMouseLeave={handleCardMouseLeave}
                        >
                          <div className="mouse-glow" />
                          <div className="relative z-10 flex items-start gap-4">
                            <FileText className={`mt-1 h-5 w-5 ${iconClasses}`} />
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-base font-bold uppercase tracking-wide text-white">
                                  {resource.title}
                                </h3>
                                <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1" />
                              </div>
                              <p className="mt-2 text-sm leading-7 text-gray-400">
                                {resource.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div
                className="street-card street-hover p-10"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                      {t("developmentSection.eyebrow")}
                    </p>
                    <h2 className="font-urban mt-4 text-4xl uppercase tracking-tight text-white md:text-6xl">
                      {t("developmentSection.title")}
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
                      {t("developmentSection.description")}
                    </p>
                  </div>

                  <div className="border border-white/10 bg-white/[0.03] p-8">
                    <div className="mb-5 inline-flex text-[#ff0040]">
                      <Rocket className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                      {t("developmentCard.title")}
                    </h3>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-300">
                      <li>{t("developmentCard.items.0")}</li>
                      <li>{t("developmentCard.items.1")}</li>
                      <li>{t("developmentCard.items.2")}</li>
                      <li>{t("developmentCard.items.3")}</li>
                    </ul>
                    <Link
                      href="/artist-development"
                      className="group relative mt-8 inline-block overflow-hidden border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[#ff0040] hover:text-white"
                    >
                      <span className="relative z-10">{t("developmentCard.button")}</span>
                    </Link>
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
                  {t("ctaSection.eyebrow")}
                </p>
                <h2 className="font-urban mb-6 text-6xl uppercase tracking-tighter md:text-8xl">
                  {t("ctaSection.title")}
                  <span className="text-[#ff0040]">?</span>
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400">
                  {t("ctaSection.description")}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/book"
                    className="group relative inline-block overflow-hidden bg-[#ff0040] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red"
                  >
                    <span className="relative z-10">{t("ctaSection.bookButton")}</span>
                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group relative inline-block overflow-hidden border border-[#00f0ff] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#00f0ff] transition-all hover:glow-cyan"
                  >
                    <span className="relative z-10">{t("ctaSection.contactButton")}</span>
                    <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>

      <ResourceDownloads />
    </main>
  );
}