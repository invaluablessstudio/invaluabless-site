"use client";

import { Pause, Play, X, Music3 } from "lucide-react";
import { useBeatPlayer } from "@/app/components/BeatPlayerProvider";

function formatTime(time: number) {
  if (!Number.isFinite(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function GlobalBeatPlayer() {
  const {
    currentBeat,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    seekTo,
    closePlayer,
  } = useBeatPlayer();

  if (!currentBeat) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,0,64,0.12),transparent_25%),radial-gradient(circle_at_right,rgba(0,240,255,0.12),transparent_25%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlayPause}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 transition hover:shadow-[0_0_24px_rgba(0,240,255,0.22)]"
            aria-label={isPlaying ? "Pause beat" : "Play beat"}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="ml-0.5 h-5 w-5" />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300">
              <Music3 className="h-3.5 w-3.5" />
              Now Playing
            </div>

            <p className="truncate text-sm font-black uppercase tracking-[0.08em] text-white sm:text-base">
              {currentBeat.title}
            </p>

            <p className="truncate text-[11px] font-bold uppercase tracking-[0.14em] text-white/50 sm:text-xs">
              {currentBeat.genre} • BPM {currentBeat.bpm} • {currentBeat.key}
            </p>
          </div>

          <button
            onClick={closePlayer}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-[#ff0040]/30 hover:text-white"
            aria-label="Close player"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-11 text-xs font-bold text-white/55">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(currentTime, duration || 0)}
            onChange={(e) => seekTo(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-300"
          />

          <span className="w-11 text-right text-xs font-bold text-white/55">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}