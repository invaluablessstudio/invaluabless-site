"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
  el.style.setProperty("--mx", `50%`);
  el.style.setProperty("--my", `50%`);
}

export default function ArtistDevelopmentPage() {
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
      {/* ===== BACKGROUND STACK ===== */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-black/60" />
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

      {/* Global Effects */}
      <div className="grain" />
      <div className="scanlines" />

      {/* Grid Overlay */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-20">
        {/* HERO */}
        <section className="relative flex min-h-[92vh] items-center pt-24">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-16">
            <div
              className={`transition-all duration-1000 ease-out ${
                showHero ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#ff0040]" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
                  Artist Growth • San Antonio, TX
                </p>
              </div>

              <h1 className="text-5xl font-black leading-[0.88] uppercase tracking-tighter md:text-7xl lg:text-8xl">
                <span className="block text-white">Build</span>
                <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.45)]">
                  Momentum
                </span>
                <span className="block text-white/90">With Direction</span>
              </h1>

              <div
                className="street-card street-hover mt-8 max-w-2xl p-6"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />
                <p className="relative z-10 border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-300">
                  The InvaluaBless Artist Development Growth Program helps
                  independent artists create stronger music, release with more
                  strategy, and grow with consistency, accountability, and
                  creative direction.
                </p>
              </div>

              <p className="mt-5 text-sm uppercase tracking-[0.25em] text-gray-500">
                13+ years of recording and production experience
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/artist-development/apply"
                  className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
                >
                  <span className="relative z-10">Apply for the Program</span>
                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>

                <Link
                  href="/book"
                  className="group relative overflow-hidden border border-[#00f0ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:glow-cyan"
                >
                  <span className="relative z-10">Book Studio Session</span>
                  <div className="absolute inset-0 translate-y-full bg-[#00f0ff]/15 transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>

              <div className="mt-14 flex flex-wrap gap-10 text-sm">
                <div>
                  <div className="text-3xl font-bold text-[#ff0040]">3</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Package Levels
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#00f0ff]">3+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Month Commitment
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">1:1</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Artist Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ARTISTS STAY STUCK */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  The Problem
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  Talent Isn&apos;t Enough<span className="text-[#ff0040]">.</span>
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Inconsistent Recording",
                    desc: "Songs get started but never fully finished. Momentum fades, releases get delayed, and progress slows down.",
                    accent: "red",
                  },
                  {
                    title: "No Release Strategy",
                    desc: "Music gets dropped randomly without a plan, which makes it harder to build attention and long-term growth.",
                    accent: "cyan",
                  },
                  {
                    title: "Lack of Direction",
                    desc: "Many artists need honest feedback, song selection help, branding direction, and accountability to move forward.",
                    accent: "red",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="street-card street-hover p-8"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="mouse-glow" />
                    <h3
                      className={`relative z-10 mb-4 text-2xl font-bold uppercase ${
                        item.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="relative z-10 text-sm leading-relaxed text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* WHAT THE PROGRAM IS */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-5xl px-6 text-center md:px-16">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                What This Is
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                Structured Artist
                <br />
                <span className="text-[#ff0040]">Development</span>
              </h2>

              <div
                className="street-card street-hover mt-10 p-8 text-left"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />
                <div className="relative z-10 space-y-5 leading-relaxed text-gray-300">
                  <p>
                    This program combines professional recording support,
                    creative direction, release strategy guidance, and
                    accountability to help artists grow with structure and
                    intention.
                  </p>
                  <p>
                    It is not a label deal and not empty motivation. It is real
                    development support designed for artists who are serious
                    about improving their music, strengthening their brand, and
                    building long-term momentum.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* TRANSFORMATION */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  Artist Transformation
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  From Random
                  <span className="text-[#ff0040]"> To Strategic</span>
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <h3 className="relative z-10 mb-6 text-2xl font-bold uppercase text-[#ff0040]">
                    Before Development
                  </h3>
                  <ul className="relative z-10 space-y-4 text-gray-400">
                    <li>• Random recording sessions</li>
                    <li>• Unfinished songs</li>
                    <li>• No release plan</li>
                    <li>• Weak artist branding</li>
                    <li>• No accountability</li>
                    <li>• Slow growth and lost momentum</li>
                  </ul>
                </div>

                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <h3 className="relative z-10 mb-6 text-2xl font-bold uppercase text-[#00f0ff]">
                    After Development
                  </h3>
                  <ul className="relative z-10 space-y-4 text-gray-300">
                    <li>• Consistent recording output</li>
                    <li>• Stronger song selection</li>
                    <li>• Structured release planning</li>
                    <li>• Clear artist identity</li>
                    <li>• Strategic music releases</li>
                    <li>• Long-term artist momentum</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ROADMAP */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  3-Month Growth Roadmap
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  Direction. Development.
                  <span className="text-[#ff0040]"> Momentum.</span>
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Month 1 — Direction",
                    desc: "We evaluate your sound, strengths, and goals. Recording begins while identifying your strongest songs and creative lane.",
                    accent: "red",
                  },
                  {
                    title: "Month 2 — Development",
                    desc: "Songs are refined, stronger records are created, and we begin shaping your next releases and artist branding.",
                    accent: "cyan",
                  },
                  {
                    title: "Month 3 — Momentum",
                    desc: "Your best records move toward release while we build a stronger long-term strategy for more consistent output.",
                    accent: "red",
                  },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="street-card street-hover p-8"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="mouse-glow" />
                    <h3
                      className={`relative z-10 mb-4 text-2xl font-bold uppercase ${
                        step.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="relative z-10 text-sm leading-relaxed text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* WHO THIS IS FOR / NOT FOR */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  Who This Is For
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  Built for Serious
                  <span className="text-[#ff0040]"> Artists</span>
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="relative z-10">
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                      Why This Is For You
                    </p>

                    <h3 className="mb-6 text-2xl font-bold uppercase text-white">
                      You&apos;re a Strong Fit If You:
                    </h3>

                    <ul className="space-y-4 text-sm leading-relaxed text-gray-300">
                      <li>• Are actively creating music and want more structure</li>
                      <li>• Want help finishing stronger songs</li>
                      <li>• Need consistent recording and accountability</li>
                      <li>• Want guidance on release strategy and branding</li>
                      <li>• Are open to honest feedback and direction</li>
                      <li>• Want long-term growth, not random sessions</li>
                    </ul>
                  </div>
                </div>

                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="relative z-10">
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#ff0040]">
                      Why This Is Not For You
                    </p>

                    <h3 className="mb-6 text-2xl font-bold uppercase text-white">
                      This Program May Not Be For You If:
                    </h3>

                    <ul className="space-y-4 text-sm leading-relaxed text-gray-400">
                      <li>• You only want one quick session with no long-term plan</li>
                      <li>• You are not ready to record consistently</li>
                      <li>• You do not want feedback or creative direction</li>
                      <li>• You are looking for instant results without real work</li>
                      <li>• You are not ready for a 3-month commitment</li>
                      <li>• You want management or label services instead of development support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* WHAT HAPPENS AFTER YOU APPLY */}
        <section className="border-y border-white/5 py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  Application Process
                </p>

                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  What Happens
                  <span className="text-[#ff0040]"> After You Apply</span>
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Step 1",
                    desc: "Your application is reviewed to understand your music, goals, and current stage as an artist.",
                    accent: "red",
                  },
                  {
                    title: "Step 2",
                    desc: "If the program looks like a strong fit, we schedule a short call to discuss your music and development goals.",
                    accent: "cyan",
                  },
                  {
                    title: "Step 3",
                    desc: "If accepted, we begin building your recording plan, creative direction, and release strategy.",
                    accent: "red",
                  },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="street-card street-hover p-8"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="mouse-glow" />
                    <h3
                      className={`relative z-10 mb-4 text-xl font-bold uppercase ${
                        step.accent === "red" ? "text-[#ff0040]" : "text-[#00f0ff]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="relative z-10 text-sm leading-relaxed text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* PACKAGES */}
        <section className="py-20">
          <FadeInSection>
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <div className="mb-14 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                  Program Packages
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  Choose Your
                  <span className="text-[#ff0040]"> Level</span>
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="relative z-10">
                    <h3 className="mb-4 text-2xl font-bold uppercase">Momentum</h3>
                    <p className="mb-6 text-gray-400">
                      For artists who need consistency and recording support.
                    </p>

                    <ul className="mb-8 space-y-3 text-sm text-gray-300">
                      <li>• Recording for 1 full song</li>
                      <li>• Vocal coaching during session</li>
                      <li>• Song feedback & improvement guidance</li>
                      <li>• Basic release guidance</li>
                      <li>• Monthly development check-in</li>
                      <li>• Priority booking access</li>
                    </ul>

                    <p className="text-3xl font-bold text-[#ff0040]">$349 / month</p>
                  </div>
                </div>

                <div
  className="street-card street-hover relative border border-[#ff0040]/50 p-8 pt-14"
  onMouseMove={handleCardMouseMove}
  onMouseLeave={handleCardMouseLeave}
>
  <div className="mouse-glow" />

  <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#ff0040] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black whitespace-nowrap z-20">
    Most Popular
  </span>

  <div className="relative z-10">
    <h3 className="mb-4 text-2xl font-bold uppercase">Elevation</h3>
    <p className="mb-6 text-gray-300">
      For artists ready to actively build their catalog and brand.
    </p>

    <ul className="mb-8 space-y-3 text-sm text-gray-200">
      <li>• Recording for 2 songs</li>
      <li>• 1 original beat included</li>
      <li>• 1 mix & master included</li>
      <li>• Creative direction during recording</li>
      <li>• Song selection guidance</li>
      <li>• Release strategy guidance</li>
      <li>• Song registration help</li>
      <li>• Branding & rollout feedback</li>
      <li>• Monthly development session</li>
    </ul>

    <p className="text-3xl font-bold text-[#ff0040]">$699 / month</p>
  </div>
</div>

                <div
                  className="street-card street-hover p-8"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="mouse-glow" />
                  <div className="relative z-10">
                    <h3 className="mb-4 text-2xl font-bold uppercase">Artist Partner</h3>
                    <p className="mb-6 text-gray-400">
                      Premium development tier for serious artists.
                    </p>

                    <ul className="mb-8 space-y-3 text-sm text-gray-300">
                      <li>• Recording for 4 songs</li>
                      <li>• 2 original beats included</li>
                      <li>• 2 mix & masters included</li>
                      <li>• Song selection guidance</li>
                      <li>• Release calendar planning</li>
                      <li>• Song registration assistance</li>
                      <li>• Branding & rollout guidance</li>
                      <li>• Monthly strategy session</li>
                      <li>• Priority booking</li>
                    </ul>

                    <p className="text-3xl font-bold text-[#ff0040]">$1,050 / month</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* CTA */}
        <section className="relative py-20">
          <FadeInSection>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ff0040]/5 to-transparent" />

            <div
              className="street-card street-hover relative mx-auto max-w-4xl px-6 py-12 text-center md:px-10"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="mouse-glow" />
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                Apply Now
              </p>
              <h2 className="mb-6 text-5xl font-black uppercase tracking-tighter md:text-7xl">
                Build With
                <span className="text-[#ff0040]"> Intent.</span>
              </h2>
              <p className="mb-4 text-lg text-gray-400">
                This program is for artists serious about growth, consistency,
                and long-term momentum.
              </p>
              <p className="mb-10 text-xs uppercase tracking-[0.25em] text-gray-500">
                Applications are reviewed manually to ensure the program is the
                right fit.
              </p>

              <Link
                href="/artist-development/apply"
                className="group relative inline-block overflow-hidden bg-[#ff0040] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:glow-red"
              >
                <span className="relative z-10">Submit Application</span>
                <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              </Link>

              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gray-500">
                Minimum Commitment • 3 Months
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gray-500">
                Limited artist slots available
              </p>
            </div>
          </FadeInSection>
        </section>
      </div>
    </main>
  );
}