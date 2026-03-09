"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ResourceDownloads from "../components/ResourceDownloads";
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

const prepCards = [
  {
    title: "Prepare Your Song",
    description:
      "Practice your lyrics before arriving. Know your flow, timing, ad-libs, and structure so your session moves faster.",
    icon: Music3,
    accent: "red",
  },
  {
    title: "Bring Your Beat",
    description:
      "Bring your instrumental in WAV preferred or high-quality MP3. Send it ahead of time or bring it on a USB.",
    icon: Headphones,
    accent: "cyan",
  },
  {
    title: "Hydrate Your Voice",
    description:
      "Drink water, avoid dairy before recording, and warm up your voice if you are singing or recording melodic vocals.",
    icon: Mic2,
    accent: "red",
  },
] as const;

const policyCards = [
  {
    title: "Deposit Required",
    description: "A deposit is required to confirm and hold your booking.",
    icon: BadgeDollarSign,
    accent: "red",
  },
  {
    title: "2 Hour Minimum",
    description: "Recording sessions start at a 2 hour minimum.",
    icon: ClipboardList,
    accent: "cyan",
  },
  {
    title: "No Split = No Release",
    description:
      "All collaborators should complete split sheet information before release when applicable.",
    icon: ShieldCheck,
    accent: "red",
  },
] as const;

const releaseChecklist = [
  "Record your song",
  "Mix and master your final track",
  "Finalize your cover artwork",
  "Complete split sheet information",
  "Register your song with your PRO if needed",
  "Upload to Spotify, Apple Music, and other DSPs",
  "Promote your release on Instagram, TikTok, and YouTube",
];

const resourceLinks = [
  {
    title: "Studio Session Checklist",
    description: "A simple guide to help artists show up prepared and ready to record.",
    href: "/downloads/studio-session-checklist.pdf",
    accent: "red",
    external: true,
  },
  {
    title: "Split Sheet Template",
    description: "Make sure everyone involved in the song agrees on ownership before release.",
    href: "/downloads/split-sheet-template.pdf",
    accent: "cyan",
    external: true,
  },
  {
    title: "Song Release Checklist",
    description: "Use this checklist to move from recording to distribution with more confidence.",
    href: "/downloads/song-release-checklist.pdf",
    accent: "red",
    external: true,
  },
  {
    title: "Vocal Recording Guide",
    description: "Simple tips to help artists record stronger vocals in the studio.",
    href: "/downloads/vocal-recording-guide.pdf",
    accent: "cyan",
    external: true,
  },
] as const;

const faqs = [
  {
    question: "How long does it take to record a song?",
    answer:
      "Most songs take around 2 to 4 hours depending on preparation, performance, and how many layers you want to record.",
  },
  {
    question: "Do you provide beats?",
    answer:
      "Yes. Beat production is available if you need an original sound built for your project.",
  },
  {
    question: "Can beginners record here?",
    answer:
      "Yes. We work with beginners and experienced artists, and vocal coaching is included during recording sessions.",
  },
  {
    question: "Can I record Christian, urban, reggaeton, or Latin music here?",
    answer:
      "Absolutely. InvaluaBless Productions works with Latin, urban, reggaeton, singers, rappers, and Christian artists.",
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

export default function ResourcesPage() {
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
              className={`grid items-center gap-12 transition-all duration-1000 ease-out lg:grid-cols-[1.1fr_0.9fr] ${
                showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-[#ff0040]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
                    Artist Resources • Session Prep • Release Strategy
                  </p>
                </div>

                <h1 className="font-urban text-6xl leading-[0.85] uppercase tracking-tighter md:text-8xl lg:text-9xl">
                  <span className="block text-white">Move</span>
                  <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.5)]">
                    Smarter
                  </span>
                  <span className="block text-white/90">Create Better</span>
                </h1>

                <div
                  className="street-card street-hover mt-8 max-w-xl p-6"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <p className="relative z-10 border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-300">
                    Everything artists need before the session, during the recording process,
                    and after the music is done so they move with more confidence and professionalism.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/book"
                    className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
                  >
                    <span className="relative z-10">Book Session</span>
                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>

                  <Link
                    href="#resources"
                    className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan"
                  >
                    <span className="relative z-10">Explore Resources</span>
                    <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                </div>

                <div className="mt-16 flex gap-12 text-sm">
                  <div>
                    <div className="text-3xl font-bold text-[#ff0040]">2 HR</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                      Session Minimum
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00f0ff]">Pro</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                      Workflow
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">Ready</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                      To Release
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
                    alt="Artist recording in studio"
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
                      Studio Standard
                    </p>
                    <p className="mt-2 text-lg font-bold uppercase tracking-wide text-white">
                      Come prepared. Record clean. Release right.
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 bg-[#ff0040] px-4 py-3 sm:p-6 font-mono text-black">
  <p className="text-xl sm:text-2xl font-bold leading-none uppercase">Resources</p>
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
                eyebrow="Before Your Session"
                title="Show up ready"
                description="These basics save time, help you sound better, and make the most of every paid hour in the studio."
              />

              <div className="grid gap-6 md:grid-cols-3">
                {prepCards.map((card) => {
                  const Icon = card.icon;
                  const accentClasses = card.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]";

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
                      <p className="mt-4 text-sm leading-7 text-gray-400">{card.description}</p>
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
                eyebrow="Studio Policies"
                title="Respect the process"
                description="Clear expectations protect the session, the workflow, and the final quality of the music."
              />

              <div className="grid gap-6 md:grid-cols-3">
                {policyCards.map((card) => {
                  const Icon = card.icon;
                  const accentClasses = card.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]";

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
                      <p className="mt-4 text-sm leading-7 text-gray-400">{card.description}</p>
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
                  <p className="text-xs uppercase tracking-[0.3em] text-[#00f0ff]">Release Checklist</p>
                  <h2 className="font-urban mt-4 text-4xl uppercase tracking-tight text-white md:text-5xl">
                    From session to drop
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-gray-400">
                    Use this as your simple release roadmap so finished songs do not stay sitting on your hard drive.
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
                  <p className="text-xs uppercase tracking-[0.3em] text-[#ff0040]">Free Artist Tools</p>
                  <h2 className="font-urban mt-4 text-4xl uppercase tracking-tight text-white md:text-5xl">
                    Useful next steps
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-gray-400">
                    Download these tools to help you prepare, organize ownership, and release music more professionally.
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
                      Artist Development
                    </p>
                    <h2 className="font-urban mt-4 text-4xl uppercase tracking-tight text-white md:text-6xl">
                      More than one session?
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
                      Ask about artist development support for artists who want consistency,
                      direction, and a better release process from song to song.
                    </p>
                  </div>

                  <div className="border border-white/10 bg-white/[0.03] p-8">
                    <div className="mb-5 inline-flex text-[#ff0040]">
                      <Rocket className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                      Artist Development Program
                    </h3>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-300">
                      <li>Recording support</li>
                      <li>Mix and master guidance</li>
                      <li>Creative direction</li>
                      <li>Release strategy support</li>
                    </ul>
                    <Link
  href="/artist-development"
  className="group relative mt-8 inline-block overflow-hidden border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[#ff0040] hover:text-white"
>
  <span className="relative z-10">Explore Artist Development</span>
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
                eyebrow="FAQ"
                title="Questions artists ask"
                description="This helps answer common concerns before somebody reaches out or books."
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
                  Lock In
                </p>
                <h2 className="font-urban mb-6 text-6xl uppercase tracking-tighter md:text-8xl">
                  Ready To Work<span className="text-[#ff0040]">?</span>
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400">
                  Book your session, come prepared, and let’s create records that hit the right way.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/book"
                    className="group relative inline-block overflow-hidden bg-[#ff0040] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red"
                  >
                    <span className="relative z-10">Book Your Session</span>
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
      <ResourceDownloads />
    </main>
  );
}