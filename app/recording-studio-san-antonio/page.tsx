"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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

const services = [
  {
    title: "Recording Sessions",
    description:
      "Professional vocal recording for artists who want clean takes, better performances, and a serious studio workflow.",
    icon: Mic2,
    accent: "red",
  },
  {
    title: "Mixing",
    description:
      "Balanced, polished mixes built to hit on headphones, in the car, and across streaming platforms.",
    icon: SlidersHorizontal,
    accent: "cyan",
  },
  {
    title: "Mastering",
    description:
      "Final loudness, clarity, and consistency so your track feels release-ready and competitive.",
    icon: Disc3,
    accent: "red",
  },
  {
    title: "Beat Production",
    description:
      "Original production for reggaeton, rap, trap, Latin, and urban artists who need a stronger sound.",
    icon: Music3,
    accent: "cyan",
  },
  {
    title: "Podcast Recording",
    description:
      "Clean, professional audio recording for podcasters and spoken-word projects.",
    icon: Radio,
    accent: "red",
  },
  {
    title: "Vocal Coaching",
    description:
      "Guidance during the session to help artists improve delivery, confidence, and performance.",
    icon: Headphones,
    accent: "cyan",
  },
] as const;

const reasons = [
  "Professional vocal recording environment",
  "Mixing and mastering support",
  "Guidance during the session",
  "Comfortable, artist-focused workflow",
  "Built for serious independent artists",
  "Release-ready sound approach",
];

const areas = [
  "South San Antonio",
  "Downtown San Antonio",
  "Alamo Heights",
  "Stone Oak",
  "Universal City",
  "Converse",
  "Live Oak",
  "Nearby Texas artists",
];

const faqs = [
  {
    question: "How much does a recording session cost?",
    answer:
      "Recording sessions are $75 per hour with a 2 hour minimum. Reach out if you need mixing, mastering, beat production, or podcast pricing.",
  },
  {
    question: "Do you work with beginner artists?",
    answer:
      "Yes. Invaluabless Productions works with both beginners and experienced artists, and vocal coaching is included during recording sessions.",
  },
  {
    question: "Do you mix and master music?",
    answer:
      "Yes. Mixing and mastering services are available for artists who want a polished, release-ready final sound.",
  },
  {
    question: "What genres do you record?",
    answer:
      "We work with reggaeton, Latin, rap, trap, urban, singers, and Christian artists in San Antonio and beyond.",
  },
];

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
        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}

export default function RecordingStudioSanAntonioPage() {
  const [showHero, setShowHero] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(t);
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
      <div className="fixed inset-0 -z-20 pointer-events-none">
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
        className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none"
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
              className={`grid items-center gap-10 transition-all duration-1000 ease-out lg:grid-cols-[1.1fr_0.9fr] ${
                showHero ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-[#ff0040]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
                    Recording Studio • San Antonio • Invaluabless Productions
                  </p>
                </div>

                <h1 className="font-urban text-6xl leading-[0.85] uppercase tracking-tighter md:text-8xl lg:text-9xl">
                  <span className="block text-white">Recording</span>
                  <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.5)]">
                    Studio
                  </span>
                  <span className="block text-white/90">San Antonio</span>
                </h1>

                <div
                  className="street-card street-hover mt-8 max-w-2xl p-6"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <p className="relative z-10 border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-300">
                    Invaluabless Productions is a professional recording studio in San Antonio, TX
                    specializing in reggaeton, Latin, rap, trap, urban, and Christian music.
                    Book recording sessions, mixing, mastering, beat production, and artist support.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/book"
                    className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
                  >
                    <span className="relative z-10">Book Studio Session</span>
                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan"
                  >
                    <span className="relative z-10">Contact Studio</span>
                    <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                </div>
              </div>

              <div
                className="street-card street-hover p-8"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />
                <p className="mb-6 text-white font-bold uppercase tracking-wider text-sm">
                  Why this page matters
                </p>

                <div className="space-y-4">
                  {[
                    "Recording studio in San Antonio",
                    "Reggaeton and Latin artist support",
                    "Professional mixing and mastering",
                    "Booking-ready local studio page",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-4"
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          i % 2 === 0 ? "bg-[#ff0040]" : "bg-[#00f0ff]"
                        }`}
                      />
                      <span className="text-sm uppercase tracking-wider text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Built to rank. Built to convert.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <SectionHeading
                eyebrow="Studio Services"
                title="What we offer"
                description="Clear service signals help both artists and Google understand exactly what your studio does."
              />

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  const accent = service.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]";

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
                    Why Artists Record Here
                  </p>
                  <h2 className="font-urban mt-4 text-4xl uppercase tracking-tight text-white md:text-5xl">
                    Built for real sessions
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
                eyebrow="Serving Local Artists"
                title="San Antonio and surrounding areas"
                description="This section strengthens local relevance for search and helps artists know you serve their area."
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
                    Areas We Serve
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
                eyebrow="FAQ"
                title="Questions artists ask"
                description="Helpful for visitors and useful for search engines."
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
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#ff0040]/5 to-transparent" />

            <div className="mx-auto max-w-5xl px-6 md:px-16">
              <div
                className="street-card street-hover relative p-10 text-center"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />

                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  Book Your Session
                </p>
                <h2 className="font-urban mb-6 text-6xl uppercase tracking-tighter md:text-8xl">
                  Ready To Record<span className="text-[#ff0040]">?</span>
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400">
                  Book your studio session in San Antonio and let&apos;s create something that hits.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/book"
                    className="group relative inline-block overflow-hidden bg-[#ff0040] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red"
                  >
                    <span className="relative z-10">Book Studio Session</span>
                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group relative inline-block overflow-hidden border border-[#00f0ff] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#00f0ff] transition-all hover:glow-cyan"
                  >
                    <span className="relative z-10">Contact Studio</span>
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