"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "../../i18n/navigation";
import {
  Instagram,
  Youtube,
  Facebook,
  Music2,
  MapPin,
  Mail,
} from "lucide-react";
import { useTranslations } from "next-intl";

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

export default function Home() {
  const t = useTranslations("Home");
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicRecordingStudio",
    name: "Invaluabless Productions",
    image: "https://www.invaluablessproduction.com/images/studio-wide-led.jpeg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3200 Wright Carpenter Rd",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      postalCode: "78221",
      addressCountry: "US",
    },
    url: "https://www.invaluablessproduction.com",
    telephone: "+1-210-608-6422",
  };

  const studioCards = [
    {
      title: t("studioCard1Title"),
      desc: t("studioCard1Desc"),
      accent: "red" as const,
      href: "/book",
    },
    {
      title: t("studioCard2Title"),
      desc: t("studioCard2Desc"),
      accent: "cyan" as const,
      href: "/services",
    },
    {
      title: t("studioCard3Title"),
      desc: t("studioCard3Desc"),
      accent: "red" as const,
      href: "/services",
    },
    {
      title: t("studioCard4Title"),
      desc: t("studioCard4Desc"),
      accent: "cyan" as const,
      href: "/artist-development",
    },
  ];

  const testimonials = [
    {
      quote:
        "Observing Jeovanne Díaz's work, I recognized the caliber of content I sought. Exiting the studio today, his professionalism and expertise not only fulfilled my expectations but exceeded them by miles!",
      artist: "QUIN7IN",
    },
    {
      quote:
        "Jeovanne understands reggaeton and Latin sound. He pushes you to record your best performance.",
      artist: "Xziel",
    },
    {
      quote:
        "Professional environment, great energy, and the final product always sounds industry ready.",
      artist: "Sammy D",
    },
  ];

  return (
    <main className="relative min-h-screen bg-transparent text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[#0a0a0f]" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero-mic.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/50" />

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
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-20">
        <section className="relative flex min-h-screen items-center pt-24 md:pt-28">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-16">
            <div
              className={`transition-all duration-1000 ease-out ${
                showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#ff0040]" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
                  {t("heroBadge")}
                </p>
              </div>

              <h1 className="text-6xl font-black leading-[0.85] uppercase tracking-tighter md:text-8xl lg:text-9xl">
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
                  <span className="relative z-10">{t("ctaBook")}</span>
                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>

                <Link
                  href="/work"
                  className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan"
                >
                  <span className="relative z-10">{t("ctaWork")}</span>
                  <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>

              <div className="mt-16 flex gap-12 text-sm">
                <div>
                  <div className="text-3xl font-bold text-[#ff0040]">300+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    {t("statTracks")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#00f0ff]">20+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    {t("statArtists")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">13+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    {t("statYears")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] uppercase tracking-widest"></span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-[#ff0040] to-transparent" />
          </div>
        </section>

        <section id="producer" className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="grid items-center gap-16 md:grid-cols-2">
                <div
                  className="street-card street-hover group relative border border-white/10 bg-white/[0.03] backdrop-blur"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/producer-portrait.jpeg"
                      alt="Jeovanne Diaz - Invaluabless Productions Music Producer"
                      fill
                      className="object-cover"
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#ff0040]/10 to-[#00f0ff]/10" />
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-[#ff0040] p-6 font-mono text-black">
                    <p className="text-3xl font-bold">13+</p>
                    <p className="text-sm uppercase tracking-wider">{t("statYears")}</p>
                  </div>
                </div>

                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />

                  <div className="relative space-y-8">
                    <div>
                      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#ff0040]">
                        {t("producerEyebrow")}
                      </p>
                      <h2 className="text-3xl font-extrabold uppercase tracking-wider md:text-4xl">
                        Jeovanne Diaz
                      </h2>

                      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">
                        {t("producerRole")}
                      </p>
                    </div>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                      <p>{t("producerStory1")}</p>
                      <p>{t("producerStory2")}</p>
                      <p>{t("producerStory3")}</p>
                      <p>{t("producerStory4")}</p>
                    </div>

                    <div className="border-l-4 border-[#ff0040] py-2 pl-6">
                      <p className="text-lg font-bold italic text-white">
                        &quot;{t("producerQuote")}&quot;
                      </p>
                    </div>

                    <p className="font-mono text-sm uppercase tracking-widest text-[#ff0040]">
                      {t("producerTagline")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section id="credits" className="border-y border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                {t("creditsEyebrow")}
              </p>
              <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tight md:text-5xl">
                {t("creditsTitle")} <span className="text-[#ff0040]">.</span>
              </h2>

              <div className="mb-16 grid gap-12 md:grid-cols-2">
                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <h3 className="mb-6 flex items-center gap-3 text-xl font-bold uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-[#ff0040]" />
                    {t("creditsPuertoRico")}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "YOMO",
                      "El Larax",
                      "Nencho el León Salvaje",
                      "Bimbo el Oso Mañoso",
                      "Xander el Imaginario",
                      "Xziel The One and Only",
                      "Baby Killa La Amenaza",
                      "Lil Tree",
                      "Young Tyago",
                      "Young Abel",
                      "Bruze Wave",
                      "JLyan",
                      "Kimo 7PDC",
                      "Krys El Lapiz Pesao",
                      "Luigi La Mente Celeste",
                      "Sionel El de la Melodia",
                      "Tety La Destreza"
                    ].map((artist) => (
                      <span
                        key={artist}
                        className="cursor-default border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-all hover:border-[#ff0040]/50 hover:bg-[#ff0040]/20"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <h3 className="mb-6 flex items-center gap-3 text-xl font-bold uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-[#00f0ff]" />
                    {t("creditsUsaTexas")}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
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
                      "Leonelson"
                    ].map((artist) => (
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

              <div className="grid gap-8 border-t border-white/10 pt-12 text-sm text-gray-400 md:grid-cols-2">
                <div
                  className="street-card street-hover p-6"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
                    {t("creditsStudios")}
                  </h4>
                  <p className="leading-relaxed">{t("creditsStudiosText")}</p>
                </div>
                <div
                  className="street-card street-hover p-6"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
                    {t("creditsCertification")}
                  </h4>
                  <p>{t("creditsCertificationText")}</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section id="studio" className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-16 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  {t("studioEyebrow")}
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  {t("studioTitle1")}
                  <br />
                  <span className="text-[#ff0040]">{t("studioTitle2")}</span>
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div
                  className="street-hover group relative aspect-video overflow-hidden border border-white/10 bg-[#0f0f14]"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <Image
                    src="/images/studio-wide-led.jpeg"
                    alt="Invaluabless Productions Studio - San Antonio"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#ff0040]/10 to-[#00f0ff]/10" />
                </div>

                <div
                  className="street-hover group relative aspect-video overflow-hidden border border-white/10 bg-[#0f0f14]"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <Image
                    src="/images/artist-in-booth.jpeg"
                    alt="Artist recording session"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#00f0ff]/10 to-[#ff0040]/10" />
                </div>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {studioCards.map((c) => (
                  <Link
                    key={c.title}
                    href={c.href}
                    className="street-hover group block border border-white/10 bg-white/[0.02] p-8 transition-all"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="mouse-glow" />
                    <h4
                      className={`relative z-10 mb-3 text-2xl font-bold uppercase transition-colors ${
                        c.accent === "red"
                          ? "group-hover:text-[#ff0040]"
                          : "group-hover:text-[#00f0ff]"
                      }`}
                    >
                      {c.title}
                    </h4>
                    <p className="relative z-10 text-sm leading-relaxed text-gray-400">
                      {c.desc}
                    </p>

                    <p
                      className={`relative z-10 mt-5 text-xs uppercase tracking-[0.25em] ${
                        c.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"
                      }`}
                    >
                      {t("learnMore")}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        <section id="san-antonio-studio" className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mx-auto max-w-5xl text-left">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  {t("seoEyebrow")}
                </p>

                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  {t("seoTitle1")}
                  <br />
                  <span className="text-[#ff0040]">{t("seoTitle2")}</span>
                </h2>

                <p className="mt-6 max-w-3xl leading-relaxed text-gray-400">
                  {t("seoParagraph1")}
                </p>

                <p className="mt-4 max-w-3xl leading-relaxed text-gray-400">
                  {t("seoParagraph2")}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/book"
                    className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
                  >
                    <span className="relative z-10">{t("seoCtaBook")}</span>
                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan"
                  >
                    <span className="relative z-10">{t("seoCtaContact")}</span>
                    <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                </div>

                <div className="sr-only">
                  Recording Studio San Antonio. Reggaeton Studio San Antonio. Latin
                  Recording Studio San Antonio. Rap Studio San Antonio. Mixing and
                  Mastering San Antonio. Music Production San Antonio.
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="border-t border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                {t("testimonialsEyebrow")}
              </p>

              <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tight md:text-5xl">
                {t("testimonialsTitle1")}{" "}
                <span className="text-[#ff0040]">{t("testimonialsTitle2")}</span>
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((item) => (
                  <div
                    key={item.artist}
                    className="street-card street-hover border border-white/10 bg-white/[0.02] p-8"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="mouse-glow" />

                    <p className="mb-6 italic leading-relaxed text-gray-300">
                      &quot;{item.quote}&quot;
                    </p>

                    <p className="text-sm font-bold uppercase tracking-wider text-[#ff0040]">
                      — {item.artist}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        <section id="contact" className="relative py-20">
          <FadeInSection>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#ff0040]/5 to-transparent" />

            <div
              className="street-card street-hover relative mx-auto max-w-4xl px-6 py-10 text-center md:px-16"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="mouse-glow" />

              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                {t("contactEyebrow")}
              </p>
              <h2 className="mb-6 text-6xl font-black uppercase tracking-tighter md:text-8xl">
                {t("contactTitle")}
                <span className="text-[#ff0040]">.</span>
              </h2>
              <p className="mb-16 text-xl text-gray-400">{t("contactIntro")}</p>

              <div className="mb-16 grid gap-12 text-left md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-6 w-6 text-[#ff0040]" />
                    <div>
                      <h4 className="mb-1 text-lg font-bold uppercase tracking-wider">
                        {t("contactStudio")}
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
                        {t("contactEmail")}
                      </h4>
                      <div className="space-y-1 text-sm text-gray-400">
                        <p>
                          <span className="text-white">{t("contactBookings")}</span>{" "}
                          bookings@invaluablessproduction.com
                        </p>
                        <p>
                          <span className="text-white">{t("contactBeats")}</span>{" "}
                          beats@invaluablessproduction.com
                        </p>
                        <p>
                          <span className="text-white">{t("contactGeneral")}</span>{" "}
                          support@invaluablessproduction.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-bold uppercase tracking-wider">
                    {t("contactFollow")}
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

              <Link
                href="/book"
                className="group relative inline-block overflow-hidden bg-[#ff0040] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red"
              >
                <span className="relative z-10">{t("contactCta")}</span>
                <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              </Link>
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
      ? "hover:border-[#ff0040]/50 hover:bg-[#ff0040]/15"
      : "hover:border-[#00f0ff]/40 hover:bg-[#00f0ff]/10";

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