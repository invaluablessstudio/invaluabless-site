"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Instagram,
  Youtube,
  Facebook,
  Music2,
  MapPin,
  Mail,
  Clock3,
  Mic2,
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

export default function ContactPage() {
  const t = useTranslations("ContactPage");
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
        <section className="relative flex min-h-[70vh] items-center pt-24">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-16">
            <div
              className={`transition-all duration-1000 ease-out ${
                showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#ff0040]" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
                  {t("heroEyebrow")}
                </p>
              </div>

              <h1 className="font-urban text-6xl leading-[0.85] uppercase tracking-tighter md:text-8xl lg:text-9xl">
                <span className="block text-white">{t("heroLine1")}</span>
                <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.5)]">
                  {t("heroLine2")}
                </span>
                <span className="block text-white/90">{t("heroLine3")}</span>
              </h1>

              <div
                className="street-card street-hover mt-8 max-w-2xl p-6"
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
                  <span className="relative z-10">{t("bookButton")}</span>
                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>

                <a
                  href="mailto:bookings@invaluablessproduction.com"
                  className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan"
                >
                  <span className="relative z-10">{t("emailButton")}</span>
                  <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="grid gap-6 md:grid-cols-2">
                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="mb-5 inline-flex text-[#ff0040]">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-wide text-white">
                    {t("locationTitle")}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    3200 Wright Carpenter Rd
                    <br />
                    San Antonio, Texas 78221
                  </p>
                </div>

                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="mb-5 inline-flex text-[#00f0ff]">
                    <Clock3 className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-wide text-white">
                    {t("hoursTitle")}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {t("hoursLine1")}
                    <br />
                    {t("hoursLine2")}
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="border-y border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-12 text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#00f0ff]">
                  {t("detailsEyebrow")}
                </p>
                <h2 className="font-urban text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
                  {t("detailsTitle")}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <a
                  href="mailto:bookings@invaluablessproduction.com"
                  className="street-card street-hover block p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="mb-5 inline-flex text-[#ff0040]">
                    <Mail className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                    {t("bookingsTitle")}
                  </h3>
                  <p className="mt-4 break-all text-sm leading-7 text-gray-400">
                    bookings@invaluablessproduction.com
                  </p>
                </a>

                <a
                  href="mailto:beats@invaluablessproduction.com"
                  className="street-card street-hover block p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="mb-5 inline-flex text-[#00f0ff]">
                    <Mic2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                    {t("beatsTitle")}
                  </h3>
                  <p className="mt-4 break-all text-sm leading-7 text-gray-400">
                    beats@invaluablessproduction.com
                  </p>
                </a>

                <a
                  href="mailto:support@invaluablessproduction.com"
                  className="street-card street-hover block p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="mb-5 inline-flex text-[#ff0040]">
                    <Mail className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                    {t("generalTitle")}
                  </h3>
                  <p className="mt-4 break-all text-sm leading-7 text-gray-400">
                    support@invaluablessproduction.com
                  </p>
                </a>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-12 text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#00f0ff]">
                  {t("followEyebrow")}
                </p>
                <h2 className="font-urban text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
                  {t("followTitle")}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SocialCard
                  href="https://instagram.com/invaluablessproduction"
                  label="Instagram"
                  icon={<Instagram className="h-5 w-5" />}
                  accent="red"
                />
                <SocialCard
                  href="https://youtube.com/@InvaluaBlessProductions"
                  label="YouTube"
                  icon={<Youtube className="h-5 w-5" />}
                  accent="red"
                />
                <SocialCard
                  href="https://facebook.com/invaluablessproduction"
                  label="Facebook"
                  icon={<Facebook className="h-5 w-5" />}
                  accent="cyan"
                />
                <SocialCard
                  href="https://tiktok.com/@invaluablessproductions"
                  label="TikTok"
                  icon={<Music2 className="h-5 w-5" />}
                  accent="cyan"
                />
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
                  {t("ctaEyebrow")}
                </p>
                <h2 className="font-urban mb-6 text-6xl uppercase tracking-tighter md:text-8xl">
                  {t("ctaTitle")}
                  <span className="text-[#ff0040]">?</span>
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400">
                  {t("ctaDescription")}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/book"
                    className="group relative inline-block overflow-hidden bg-[#ff0040] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red"
                  >
                    <span className="relative z-10">{t("ctaBookButton")}</span>
                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>

                  <a
                    href="mailto:bookings@invaluablessproduction.com"
                    className="group relative inline-block overflow-hidden border border-[#00f0ff] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#00f0ff] transition-all hover:glow-cyan"
                  >
                    <span className="relative z-10">{t("ctaEmailButton")}</span>
                    <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>
    </main>
  );
}

function SocialCard({
  href,
  label,
  icon,
  accent,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  accent: "red" | "cyan";
}) {
  const accentClasses =
    accent === "red"
      ? "hover:bg-[#ff0040]/15 hover:border-[#ff0040]/50"
      : "hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40";

  const iconClasses = accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`street-hover relative flex items-center gap-3 overflow-hidden border border-white/10 bg-white/5 p-4 transition-all ${accentClasses}`}
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="mouse-glow" />
      <span className={`${iconClasses} relative z-10`}>{icon}</span>
      <span className="relative z-10 text-sm font-medium">{label}</span>
    </a>
  );
}