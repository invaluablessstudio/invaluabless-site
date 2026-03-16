"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";
import { Instagram, Youtube, Facebook, Music2, MapPin, Mail } from "lucide-react";

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

export default function ProducerPage() {
  const t = useTranslations("ProducerPage");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sizes = useMemo(
    () => ({
      photoH: "h-[360px] sm:h-[400px] md:h-[410px] lg:h-[430px]",
      statsPad: "p-6",
      storyH: "md:h-[600px] lg:h-[630px]",
    }),
    []
  );

  const prCredits = [
    "YOMO",
    "El Larax",
    "Nencho el León Salvaje",
    "Bimbo el Oso Mañoso",
    "Xander el Imaginario",
  ];

  const txCredits = [
    "Sammy D",
    "Jay Lex",
    "NinoPR",
    "Johnny West",
    "Xuniel & El JJJavi",
    "J Kings",
    "Marco Antonio Lopez",
    "Carli",
    "Ryan Rivera",
    "Solo Deyvi",
    "Melchory Gang",
    "Jancy La Potencia",
    "Haitian Crook",
    "Leonelson",
  ];

  return (
    <main className="relative min-h-screen text-white">
      <div className="grain" />
      <div className="scanlines" />

      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-[url('/images/hero-mic.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-24 sm:px-6">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#ff0040]" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
              {t("eyebrow")}
            </p>
          </div>

          <h1 className="font-urban text-6xl uppercase leading-[0.85] md:text-8xl">
            Jeovanne Diaz<span className="text-[#ff0040] text-glow-red">.</span>
          </h1>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-5">
            <div
              className="street-card street-hover relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="mouse-glow" />
              <div className={`relative ${sizes.photoH}`}>
                <Image
                  src="/images/producer-portrait.jpeg"
                  alt={t("photoAlt")}
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-urban text-3xl uppercase text-white">
                    {t("photoTitle")}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#00f0ff]">
                    {t("photoSubtitle")}
                  </p>
                </div>

                <div className="absolute -bottom-4 right-6 bg-[#ff0040] p-5 font-mono text-black shadow-[0_30px_120px_rgba(0,0,0,0.8)]">
                  <p className="text-3xl font-bold leading-none">13+</p>
                  <p className="mt-2 text-sm uppercase tracking-wider">{t("years")}</p>
                </div>
              </div>
            </div>

            <div
              className={`street-card street-hover border border-white/10 bg-white/[0.03] backdrop-blur ${sizes.statsPad}`}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="mouse-glow" />
              <div className="flex items-end justify-between gap-6">
                <Stat value="300+" label={t("statTracks")} color="text-[#ff0040]" />
                <Stat value="20+" label={t("statArtists")} color="text-[#00f0ff]" />
                <Stat value="13+" label={t("statYears")} color="text-white" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div
              className={[
                "street-card street-hover border border-white/10 bg-white/[0.03] backdrop-blur",
                "overflow-hidden p-6 md:p-8",
                sizes.storyH,
              ].join(" ")}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="mouse-glow" />
              <div className="h-full overflow-y-auto pr-2">
                <div className="mb-8 border-l-2 border-[#ff0040] pl-6">
                  <p className="leading-relaxed text-gray-300">
                    {t("intro1")} <span className="font-semibold text-white">{t("intro2")}</span>.{" "}
                    {t("intro3")} <span className="font-semibold text-white">{t("intro4")}</span>,{" "}
                    {t("intro5")}
                  </p>
                </div>

                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#ff0040]">
                  {t("storyEyebrow")}
                </p>

                <div className="space-y-6 leading-relaxed text-gray-300">
                  <p>{t("story1")}</p>

                  <p>
                    <span className="font-bold text-white">{t("story2Title")}</span>{" "}
                    {t("story2")}
                  </p>

                  <p>
                    <span className="font-bold text-white">{t("story3Title")}</span>{" "}
                    {t("story3a")} <span className="font-semibold text-[#ff0040]">YOMO</span>,{" "}
                    <span className="font-semibold text-[#ff0040]">El Larax</span>,{" "}
                    <span className="font-semibold text-[#ff0040]">
                      Nencho el León Salvaje
                    </span>
                    ,{" "}
                    <span className="font-semibold text-[#ff0040]">
                      Bimbo El Oso Mañoso
                    </span>
                    , {t("story3b")}
                  </p>

                  <p>
                    <span className="font-bold text-white">{t("story4Title")}</span>{" "}
                    {t("story4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="street-card street-hover mt-12 border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur"
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        >
          <div className="mouse-glow" />
          <p className="text-lg font-bold text-white md:text-xl">“{t("quote")}”</p>
          <p className="mt-4 font-mono text-sm uppercase tracking-widest text-[#ff0040]">
            {t("tagline")}
          </p>
        </div>

        <div
          className="street-card street-hover mt-12 border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        >
          <div className="mouse-glow" />
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
              {t("creditsTitle")}<span className="text-[#ff0040]">.</span>
            </h2>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              {t("creditsTag")}
            </p>
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                {t("creditsPR")}
              </p>
              <div className="flex flex-wrap gap-3">
                {prCredits.map((artist) => (
                  <span
                    key={artist}
                    className="cursor-default border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-all hover:border-[#ff0040]/50 hover:bg-[#ff0040]/20"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                {t("creditsTX")}
              </p>
              <div className="flex flex-wrap gap-3">
                {txCredits.map((artist) => (
                  <span
                    key={artist}
                    className="cursor-default border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-all hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/20"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 text-sm text-gray-400 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
                {t("studiosTitle")}
              </h4>
              <p className="leading-relaxed">{t("studiosText")}</p>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
                {t("certTitle")}
              </h4>
              <p>{t("certText")}</p>
            </div>
          </div>
        </div>

        <div
          className="street-card street-hover mt-12 border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur"
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        >
          <div className="mouse-glow" />

          <div className="mb-8 inline-flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse bg-[#ff0040]" />
            <p className="font-urban text-2xl uppercase tracking-wider md:text-3xl">
              {t("workTitle")}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-10 text-left md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-[#ff0040]" />
                <div>
                  <h4 className="mb-1 text-lg font-bold uppercase tracking-wider">
                    {t("studioTitle")}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    3200 Wright Carpenter Rd
                    <br />
                    San Antonio, Texas 78221
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-[#00f0ff]" />
                <div>
                  <h4 className="mb-1 text-lg font-bold uppercase tracking-wider">
                    {t("emailTitle")}
                  </h4>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p>
                      <span className="text-white">{t("bookingsLabel")}</span>{" "}
                      bookings@invaluablessproduction.com
                    </p>
                    <p>
                      <span className="text-white">{t("beatsLabel")}</span>{" "}
                      beats@invaluablessproduction.com
                    </p>
                    <p>
                      <span className="text-white">{t("generalLabel")}</span>{" "}
                      support@invaluablessproduction.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold uppercase tracking-wider">
                {t("followTitle")}
              </h4>
              <div className="grid grid-cols-2 gap-4">
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
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/book"
              className="group relative inline-block overflow-hidden bg-[#ff0040] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red"
            >
              <span className="relative z-10">{t("ctaBook")}</span>
              <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div>
      <div className={`text-4xl font-black md:text-5xl ${color}`}>{value}</div>
      <div className="mt-2 text-xs uppercase tracking-wider text-gray-500">{label}</div>
    </div>
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
      className={`relative flex items-center gap-3 overflow-hidden border border-white/10 bg-white/5 p-4 transition-all ${accentClasses} street-hover`}
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="mouse-glow" />
      <span className={`${iconClasses} relative z-10`}>{icon}</span>
      <span className="relative z-10 text-sm font-medium">{label}</span>
    </a>
  );
}