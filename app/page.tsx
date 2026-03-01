"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHero(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative min-h-screen text-white">
      {/* FULL PAGE BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/images/hero-mic.jpg')",
          filter: "brightness(0.82) contrast(1.05)",
        }}
      />

      {/* Global Overlay */}
      <div className="fixed inset-0 bg-black/50 -z-10" />

      {/* Subtle Atmosphere */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#c8a44b]/10 blur-3xl" />
        <div className="absolute top-24 right-[-120px] w-[480px] h-[480px] rounded-full bg-[#8b0b17]/10 blur-3xl" />
      </div>

      {/* ================= HERO ================= */}
      <section className="h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div
            className={`transition-all duration-700 ease-out ${
              showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm tracking-[0.35em] text-gray-300 uppercase">
              RECORD • MIX • MASTER
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Sound That Hits.
              <br />
              <span className="text-[#c8a44b] drop-shadow-[0_0_18px_rgba(200,164,75,0.18)]">
                Clarity That Cuts.
              </span>
            </h1>

            <p className="mt-6 text-gray-200 max-w-xl text-lg">
              Studio-level recording built for artists who move with intention.
              Clean mixes. Heavy presence. Industry-ready results.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/book"
                className="px-6 py-3 bg-[#c8a44b] text-black font-semibold rounded-md hover:opacity-90 transition"
              >
                Book a Session
              </a>

              <a
                href="/services"
                className="px-6 py-3 border border-white/30 text-white rounded-md hover:bg-white/10 transition"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Where Vision Meets Sound</h2>

          <p className="mt-6 text-gray-200 text-lg">
            Invaluabless Productions delivers studio-level recording, mixing, and mastering
            in a focused creative environment. Every session is structured, intentional, and built for results.
          </p>
        </div>
      </section>

      {/* ================= WORK PREVIEW ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold">
              Recent Work <span className="text-[#c8a44b]">.</span>
            </h2>

            <a href="/work" className="text-[#c8a44b] font-semibold hover:opacity-90 transition">
              View all →
            </a>
          </div>

          <p className="mt-6 text-gray-200 max-w-3xl">
            A few samples to show clarity, impact, and vocal presence.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <WorkCard
              title="BumBum ChaCha – Solo Deyvi"
              note="YouTube"
              href="https://www.youtube.com/watch?v=-W_OHl1AHYY"
            />
            <WorkCard
              title="Pal Deporte – JJJavi feat Xuniel"
              note="YouTube"
              href="https://www.youtube.com/watch?v=7yBNsQVM_lo"
            />
            <WorkCard
              title="Sugar Water – Sammy D"
              note="YouTube"
              href="https://www.youtube.com/watch?v=vhGVhiP-W-g&list=OLAK5uy_lkMxqPDO7h8sgeIq3Hh5OSt8QyWGitre4"
            />
          </div>
        </div>
      </section>

     {/* ================= SERVICES ================= */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6 md:px-16">
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
        Our Services
      </h2>

      <a
        href="/services"
        className="text-[#c8a44b] font-semibold hover:opacity-90 transition"
      >
        View full details →
      </a>
    </div>

    <div className="mt-16 grid md:grid-cols-4 gap-8">
      <ServiceMini title="Recording" desc="Professional vocal & instrumental tracking." />
      <ServiceMini title="Mixing" desc="Clarity, punch, and translation across systems." />
      <ServiceMini title="Mastering" desc="Final polish and industry-ready loudness." />
      <ServiceMini title="Beat Leasing / Purchase" desc="Custom and licensed production options." />
    </div>
  </div>
</section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to lock in your sound?
          </h2>
          <p className="mt-6 text-gray-200 text-lg">
            Submit your booking request and we’ll confirm availability.
          </p>

          <div className="mt-10">
            <a
              href="/book"
              className="inline-block px-8 py-4 bg-[#8b0b17] rounded-xl font-semibold smooth glow-red hover:opacity-90"
            >
              BOOK A SESSION
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkCard({
  title,
  note,
  href,
}: {
  title: string;
  note: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-8 rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md smooth card-hover glow-gold-hover block"
    >
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-gray-300">{note}</div>
      <div className="mt-6 text-sm font-semibold text-[#c8a44b]">Open →</div>
    </a>
  );
}

function ServiceMini({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="p-7 rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md smooth card-hover glow-gold-hover">
      <div className="text-sm tracking-[0.25em] uppercase text-gray-300">
        {title}
      </div>
      <div className="mt-4 text-gray-200 text-sm leading-relaxed">
        {desc}
      </div>
    </div>
  );
}