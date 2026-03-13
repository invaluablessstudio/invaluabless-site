"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  Disc3,
  Headphones,
  ShoppingBag,
  Sparkles,
  AudioLines,
  BadgeDollarSign,
  Music3,
  ArrowRight,
} from "lucide-react";
import BeatCard from "@/app/components/BeatCard";
import { beats } from "@/data/beats";

const genreOptions = [
  "ALL",
  "REGGAETON",
  "LATIN TRAP",
  "RAP",
  "DRILL",
  "URBAN POP",
  "CHRISTIAN URBAN",
];

export default function BeatStorePage() {
  const [search, setSearch] = useState("");
  const [activeGenre, setActiveGenre] = useState("ALL");

  const filteredBeats = useMemo(() => {
    return beats.filter((beat) => {
      const query = search.toLowerCase();

      const matchesSearch =
        beat.title.toLowerCase().includes(query) ||
        beat.genre.toLowerCase().includes(query) ||
        beat.mood.toLowerCase().includes(query) ||
        beat.key.toLowerCase().includes(query);

      const matchesGenre =
        activeGenre === "ALL" ? true : beat.genre === activeGenre;

      return matchesSearch && matchesGenre;
    });
  }, [search, activeGenre]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,64,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,240,255,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                <Music3 className="h-3.5 w-3.5" />
                Invaluabless Productions
              </div>

              <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
                Beat Store
                <span className="block bg-gradient-to-r from-[#ff0040] via-white to-[#00f0ff] bg-clip-text text-transparent">
                  Built For Artists
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Browse production for reggaeton, Latin trap, rap, urban,
                singers, and Christian artists. Preview beats, compare your
                options, and find the right sound for your next release.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#beats"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:shadow-[0_0_25px_rgba(255,0,64,0.35)]"
                >
                  Browse Beats
                </a>

                <Link
                  href="/custom-beats"
                  className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-cyan-200 transition hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]"
                >
                  Explore Custom Beats
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: AudioLines, label: "Preview Beats" },
                { icon: BadgeDollarSign, label: "Clear Pricing" },
                { icon: ShoppingBag, label: "Beat Options" },
                { icon: Sparkles, label: "Custom Production" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]"
                >
                  <item.icon className="h-6 w-6 text-cyan-300 transition group-hover:text-[#ff0040]" />
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-white">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search beats, genre, mood, key..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {genreOptions.map((genre) => {
                const active = activeGenre === genre;
                return (
                  <button
                    key={genre}
                    onClick={() => setActiveGenre(genre)}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] transition ${
                      active
                        ? "border-[#ff0040]/40 bg-[#ff0040]/15 text-white shadow-[0_0_20px_rgba(255,0,64,0.22)]"
                        : "border-white/10 bg-white/[0.03] text-white/70 hover:border-cyan-400/30 hover:text-cyan-200"
                    }`}
                  >
                    {genre}
                  </button>
                );
              })}
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white/70 transition hover:border-cyan-400/30 hover:text-white">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Disc3,
              title: "Studio-Level Production",
              text: "Premium beat quality for artists preparing real releases.",
            },
            {
              icon: AudioLines,
              title: "Quick Previews",
              text: "Listen directly from mobile or desktop before choosing.",
            },
            {
              icon: Headphones,
              title: "Artist-Focused Sound",
              text: "Built for Latin, urban, rap, reggaeton, and Christian artists.",
            },
            {
              icon: ShoppingBag,
              title: "Beat Options",
              text: "Choose a standard beat or request a custom exclusive beat.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/25 hover:shadow-[0_0_24px_rgba(0,240,255,0.10)]"
            >
              <item.icon className="h-5 w-5 text-[#00f0ff]" />
              <h2 className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BEAT GRID */}
      <section
        id="beats"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00f0ff]">
              Beat Catalog
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Find Your Sound
            </h2>
          </div>

          <p className="text-sm text-white/60">
            {filteredBeats.length} beat
            {filteredBeats.length !== 1 ? "s" : ""} available
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredBeats.map((beat) => (
            <BeatCard key={beat.id} beat={beat} />
          ))}
        </div>
      </section>

      {/* CUSTOM BEATS CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,0,64,0.12),rgba(0,240,255,0.08),rgba(255,255,255,0.02))] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Need Something Custom?
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-5xl">
              Get A Beat Built Around Your Sound
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              If none of these beats match your exact style, request a custom
              exclusive beat built around your voice, genre, message, and
              musical direction.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/custom-beats"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-cyan-200 transition hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]"
              >
                Explore Custom Beats
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:shadow-[0_0_25px_rgba(255,0,64,0.35)]"
              >
                Book Custom Beat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEAT OPTIONS */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff0040]">
              Beat Options
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Clear Pricing. Simple Choices.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
              Choose between a standard pre-made beat or a custom exclusive beat
              tailored to your sound, style, and release goals.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Standard Beat",
                price: "$100",
                points: [
                  "Pre-made beat",
                  "Ready for recording",
                  "Great for artists who want a fast option",
                ],
                featured: false,
              },
              {
                title: "Custom Exclusive Beat",
                price: "Starting at $250",
                points: [
                  "Built specifically for your song",
                  "Tailored to your voice and style",
                  "Exclusive custom production",
                ],
                featured: true,
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className={`rounded-3xl border p-6 ${
                  tier.featured
                    ? "border-cyan-400/30 bg-cyan-400/10"
                    : "border-white/10 bg-black/20"
                }`}
              >
                <h3 className="text-xl font-black uppercase text-white">
                  {tier.title}
                </h3>
                <p className="mt-3 text-2xl font-black text-white">
                  {tier.price}
                </p>

                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {tier.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#00f0ff]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}