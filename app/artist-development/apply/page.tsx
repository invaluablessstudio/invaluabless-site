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

const GOOGLE_FORM_URL = "https://forms.gle/kiBksQxNqiKxmLZ17";

export default function ArtistDevelopmentApplyPage() {
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all focus:border-[#ff0040] focus:bg-white/[0.07]";
  const textareaClass =
    "w-full border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all focus:border-[#ff0040] focus:bg-white/[0.07]";
  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-gray-300";

  return (
    <main className="relative min-h-screen bg-transparent text-white">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-black/65" />
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
        <section className="pt-24 pb-10">
          <div className="mx-auto max-w-5xl px-6 md:px-16">
            <div
              className={`transition-all duration-1000 ease-out ${
                showHero ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Link
                href="/artist-development"
                className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-[#00f0ff] transition hover:text-white"
              >
                ← Back to Artist Development
              </Link>

              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#ff0040]" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
                  InvaluaBless Productions • Application
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.88] uppercase tracking-tighter">
                <span className="block text-white">Artist</span>
                <span className="block text-[#ff0040] drop-shadow-[0_0_15px_rgba(255,0,64,0.45)]">
                  Development
                </span>
                <span className="block text-white/90">Application</span>
              </h1>

              <div
                className="street-card street-hover mt-8 max-w-3xl p-6"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />
                <p className="relative z-10 border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-300">
                  Fill out the quick pre-application below, then continue to the
                  full Google Form submission.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <FadeInSection>
            <div className="mx-auto max-w-5xl px-6 md:px-16">
              <div
                className="street-card street-hover p-6 md:p-10"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mouse-glow" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                      Basic Information
                    </p>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="md:col-span-2">
                        <label className={labelClass}>Artist Name</label>
                        <input type="text" required placeholder="Your artist name" className={inputClass} />
                      </div>

                      <div>
                        <label className={labelClass}>Email</label>
                        <input type="email" required placeholder="you@example.com" className={inputClass} />
                      </div>

                      <div>
                        <label className={labelClass}>Phone Number</label>
                        <input type="tel" placeholder="Your phone number" className={inputClass} />
                      </div>

                      <div>
                        <label className={labelClass}>Instagram / Social Media</label>
                        <input type="text" placeholder="@yourhandle" className={inputClass} />
                      </div>

                      <div>
                        <label className={labelClass}>Music Link</label>
                        <input type="url" placeholder="Spotify, YouTube, SoundCloud, etc." className={inputClass} />
                      </div>
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/10" />

                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
                      Artist Profile
                    </p>
                    <div className="grid gap-6">
                      <div>
                        <label className={labelClass}>What genre best describes your music?</label>
                        <input
                          type="text"
                          placeholder="Reggaeton, Latin Rap, Urban, Christian, Singer, etc."
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>Which package are you most interested in?</label>
                        <select className={inputClass}>
                          <option>Momentum</option>
                          <option>Elevation</option>
                          <option>Artist Partner</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label className={labelClass}>What are your goals for the next 6 months?</label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us what you want to accomplish with your music."
                          className={textareaClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>Why do you want to join the Artist Development Program?</label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us why this program feels like the right next step."
                          className={textareaClass}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/10" />

                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      Minimum Commitment • 3 Months
                    </p>

                    <button
                      type="submit"
                      className="group relative overflow-hidden bg-[#ff0040] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
                    >
                      <span className="relative z-10">Continue to Application</span>
                      <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>
    </main>
  );
}