"use client";

import Link from "next/link";
import { Play, Pause, Music3 } from "lucide-react";
import type { Beat } from "@/data/beats";
import { useBeatPlayer } from "@/app/components/BeatPlayerProvider";

type BeatCardProps = {
  beat: Beat;
};

export default function BeatCard({ beat }: BeatCardProps) {
  const { currentBeat, isPlaying, playBeat } = useBeatPlayer();

  const isCurrentBeat = currentBeat?.slug === beat.slug;
  const showPause = isCurrentBeat && isPlaying;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff0040]/30 hover:shadow-[0_0_30px_rgba(255,0,64,0.14)]">
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-8 top-0 h-28 w-28 rounded-full bg-[#ff0040]/15 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-[#00f0ff]/15 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              {beat.genre}
            </p>
            <h3 className="mt-2 text-2xl font-black uppercase leading-tight text-white">
              {beat.title}
            </h3>
          </div>

          <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">
            {beat.mood}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
            BPM {beat.bpm}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
            {beat.key}
          </span>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-200">
            Preview Ready
          </span>
        </div>

        {beat.description && (
          <p className="mt-4 text-sm leading-6 text-white/65">
            {beat.description}
          </p>
        )}

        <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
            <Music3 className="h-4 w-4 text-cyan-300" />
            Global Preview Player
          </div>

          <button
            onClick={() => playBeat(beat)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-cyan-200 transition hover:shadow-[0_0_22px_rgba(0,240,255,0.22)]"
          >
            {showPause ? (
              <>
                <Pause className="h-4 w-4" />
                Pause Preview
              </>
            ) : (
              <>
                <Play className="ml-0.5 h-4 w-4" />
                {isCurrentBeat ? "Resume Preview" : "Play Preview"}
              </>
            )}
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
              Standard Beat
            </p>
            <p className="mt-2 text-2xl font-black text-white">
              ${beat.priceStandard}
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200/70">
              Custom Exclusive
            </p>
            <p className="mt-2 text-2xl font-black text-white">
              From ${beat.priceCustom}
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href={`/checkout?beat=${beat.slug}&license=standard`}
              className="inline-flex items-center justify-center rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:shadow-[0_0_22px_rgba(255,0,64,0.28)]"
            >
              Buy Standard
            </Link>

            <Link
              href={`/checkout?beat=${beat.slug}&license=custom`}
              className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-cyan-200 transition hover:shadow-[0_0_22px_rgba(0,240,255,0.22)]"
            >
              Request Custom
            </Link>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-white/80 transition hover:border-cyan-400/40 hover:text-cyan-200"
          >
            Record This Beat
          </Link>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
          <Music3 className="h-4 w-4" />
          Instant selection for checkout page
        </div>
      </div>
    </article>
  );
}