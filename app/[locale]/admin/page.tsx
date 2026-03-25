"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import {
  CheckCircle2,
  XCircle,
  AudioLines,
  Loader2,
  Music3,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

const ADMIN_USER_ID = "user_3BQOTuvuFyEAbKAHK81ysTjzlSk";

type Beat = {
  id: string;
  title: string;
  genre: string;
  bpm: number;
  key: string;
  mood: string | null;
  price: number | null;
  description: string | null;
  producer_name: string | null;
  audio_url: string | null;
  stems_url: string | null;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const { user, isLoaded } = useUser();
  const [allBeats, setAllBeats] = useState<Beat[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("review");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const isAdmin = isLoaded && user?.id === ADMIN_USER_ID;

  const loadBeats = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("beats")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setAllBeats(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) loadBeats();
  }, [isAdmin]);

  // Filter in memory — no DB call when switching tabs
  const beats = filter === "all"
    ? allBeats
    : allBeats.filter((b) => b.status === filter);

  const reviewCount = allBeats.filter((b) => b.status === "review").length;

const updateStatus = async (id: string, status: string) => {
  setActionLoading(id + status);
  const { error } = await supabase.from("beats").update({ status }).eq("id", id);
  if (!error) {
    setAllBeats((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  }
  setActionLoading(null);
};

  const deletebeat = async (id: string) => {
    if (!confirm("Permanently delete this beat?")) return;
    setActionLoading(id + "delete");
    await supabase.from("beats").delete().eq("id", id);
    setAllBeats((prev) => prev.filter((b) => b.id !== id));
    setActionLoading(null);
  };

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f]">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-300" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0f] text-white">
        <XCircle className="h-16 w-16 text-[#ff0040]" />
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-[#ff0040]">Access Denied</p>
        <h1 className="mt-2 text-3xl font-black uppercase">Not Authorized</h1>
        <p className="mt-3 text-sm text-white/50">You do not have permission to view this page.</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,64,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,240,255,0.14),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff0040]/20 bg-[#ff0040]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff0040]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Admin Only
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00f0ff]">
              Invaluabless Productions
            </p>
            <h1 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">
              Beat
              <span className="ml-3 bg-gradient-to-r from-[#ff0040] via-white to-[#00f0ff] bg-clip-text text-transparent">
                Approvals
              </span>
            </h1>
          </div>

          <button
            onClick={loadBeats}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/70 transition hover:border-cyan-400/30 hover:text-white"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Pending Review", value: allBeats.filter((b) => b.status === "review").length, color: "text-[#ff0040]", border: "border-[#ff0040]/20 bg-[#ff0040]/5" },
            { label: "Published", value: allBeats.filter((b) => b.status === "published").length, color: "text-cyan-300", border: "border-cyan-400/20 bg-cyan-400/5" },
            { label: "Total Beats", value: allBeats.length, color: "text-white", border: "border-white/10 bg-white/[0.03]" },
          ].map((stat) => (
            <div key={stat.label} className={`rounded-2xl border p-5 ${stat.border}`}>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">{stat.label}</p>
              <p className={`mt-2 text-4xl font-black ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {[
            { id: "review", label: "Pending Review" },
            { id: "published", label: "Published" },
            { id: "rejected", label: "Rejected" },
            { id: "all", label: "All Beats" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition ${
                filter === id
                  ? "border-[#ff0040]/40 bg-[#ff0040]/15 text-white shadow-[0_0_20px_rgba(255,0,64,0.22)]"
                  : "border-white/10 bg-white/[0.03] text-white/70 hover:border-cyan-400/30 hover:text-cyan-200"
              }`}
            >
              {label}
              {id === "review" && reviewCount > 0 && (
                <span className="rounded-full bg-[#ff0040] px-1.5 py-0.5 text-[9px] font-black text-white">
                  {reviewCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Beats list */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-cyan-300" />
            </div>
          ) : beats.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Music3 className="h-12 w-12 text-white/20" />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white/40">
                No beats in this category
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {beats.map((beat) => (
                <div
                  key={beat.id}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-white/20"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <AudioLines className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.1em] text-white">{beat.title}</p>
                        <p className="mt-0.5 text-[11px] text-white/40">
                          by {beat.producer_name || "Unknown"}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{beat.genre}</span>
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{beat.bpm} BPM</span>
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{beat.key}</span>
                          {beat.mood && <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{beat.mood}</span>}
                          {beat.price && <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-300">${beat.price}</span>}
                        </div>
                        {beat.description && (
                          <p className="mt-2 text-[11px] leading-5 text-white/40">{beat.description}</p>
                        )}
                        {beat.audio_url && (
                          <audio controls className="mt-3 h-8 w-full max-w-xs opacity-70">
                            <source src={beat.audio_url} />
                          </audio>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end">
                      <span className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] ${
                        beat.status === "published"
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : beat.status === "rejected"
                          ? "border-white/10 bg-white/[0.03] text-white/40"
                          : "border-[#ff0040]/30 bg-[#ff0040]/10 text-[#ff0040]"
                      }`}>
                        {beat.status}
                      </span>

                      <div className="flex gap-2">
                        {beat.status !== "published" && (
                          <button
                            onClick={() => updateStatus(beat.id, "published")}
                            disabled={actionLoading === beat.id + "published"}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-cyan-200 transition hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] disabled:opacity-50"
                          >
                            {actionLoading === beat.id + "published"
                              ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              : <CheckCircle2 className="h-3.5 w-3.5" />}
                            Publish
                          </button>
                        )}

                        {beat.status !== "rejected" && (
                          <button
                            onClick={() => updateStatus(beat.id, "rejected")}
                            disabled={actionLoading === beat.id + "rejected"}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white/50 transition hover:border-[#ff0040]/30 hover:text-[#ff0040] disabled:opacity-50"
                          >
                            {actionLoading === beat.id + "rejected"
                              ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              : <XCircle className="h-3.5 w-3.5" />}
                            Reject
                          </button>
                        )}

                        <button
                          onClick={() => deletebeat(beat.id)}
                          disabled={actionLoading === beat.id + "delete"}
                          className="rounded-xl border border-white/10 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white/30 transition hover:border-[#ff0040]/30 hover:text-[#ff0040] disabled:opacity-50"
                        >
                          {actionLoading === beat.id + "delete"
                            ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            : "Delete"}
                        </button>
                      </div>

                      <p className="text-[10px] text-white/30">
                        {new Date(beat.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}