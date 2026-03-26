"use client";

import { useState, useRef, useEffect } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import {
  Upload,
  Music3,
  AudioLines,
  FileMusic,
  Plus,
  Trash2,
  CheckCircle2,
  CloudUpload,
  Disc3,
  LogOut,
  User,
  ChevronDown,
  Loader2,
} from "lucide-react";

const genreOptions = [
  "REGGAETON",
  "LATIN TRAP",
  "RAP",
  "DRILL",
  "URBAN POP",
  "CHRISTIAN URBAN",
];

const keyOptions = [
  "A Major", "A Minor", "A# Major", "A# Minor",
  "B Major", "B Minor", "C Major", "C Minor",
  "C# Major", "C# Minor", "D Major", "D Minor",
  "D# Major", "D# Minor", "E Major", "E Minor",
  "F Major", "F Minor", "F# Major", "F# Minor",
  "G Major", "G Minor", "G# Major", "G# Minor",
];

const moodOptions = [
  "Dark", "Aggressive", "Melodic", "Romantic", "Hype",
  "Chill", "Spiritual", "Trap", "Party", "Emotional",
];

type Beat = {
  id: string;
  title: string;
  genre: string;
  bpm: number;
  key: string;
  status: string;
  created_at: string;
};

export default function BeatMakersDashboard() {
  const { user, isLoaded } = useUser();
const { signOut, openUserProfile } = useClerk();

  const [tab, setTab] = useState("upload");
  const [profileOpen, setProfileOpen] = useState(false);
  const [uploadStep, setUploadStep] = useState("form");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [beats, setBeats] = useState<Beat[]>([]);
  const [loadingBeats, setLoadingBeats] = useState(false);

  const [form, setForm] = useState({
    title: "",
    genre: "",
    bpm: "",
    key: "",
    mood: "",
    price: "",
    description: "",
  });

  const [mainFile, setMainFile] = useState<File | null>(null);
  const [stemsFile, setStemsFile] = useState<File | null>(null);

  const mainRef = useRef<HTMLInputElement>(null);
  const stemsRef = useRef<HTMLInputElement>(null);

  // ─── Load beats from Supabase ───
  const loadBeats = async () => {
    if (!user) return;
    setLoadingBeats(true);
    const { data, error } = await supabase
      .from("beats")
      .select("*")
      .eq("producer_id", user.id)
      .order("created_at", { ascending: false });

    if (!error && data) setBeats(data);
    setLoadingBeats(false);
  };

  useEffect(() => {
    if (tab === "beats" && user) loadBeats();
  }, [tab, user]);

  const handleField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>, setter: (f: File) => void) => {
    const file = e.target.files?.[0];
    if (file) setter(file);
  };

  // ─── Real upload to Supabase ───
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mainFile) return setError("Please upload an MP3 or WAV file.");
    if (!user) return setError("You must be logged in.");

    setError("");
    setUploadStep("uploading");
    setProgress(10);

    try {
      const timestamp = Date.now();
      const audioPath = `${user.id}/${timestamp}_${mainFile.name}`;

      // Upload audio file
      const { error: audioError } = await supabase.storage
        .from("beats")
        .upload(audioPath, mainFile, { upsert: false });

      if (audioError) throw new Error("Audio upload failed: " + audioError.message);
      setProgress(55);

      // Upload stems if provided
      let stemsPath = null;
      if (stemsFile) {
        stemsPath = `${user.id}/${timestamp}_stems_${stemsFile.name}`;
        const { error: stemsError } = await supabase.storage
          .from("beats")
          .upload(stemsPath, stemsFile, { upsert: false });
        if (stemsError) throw new Error("Stems upload failed: " + stemsError.message);
      }
      setProgress(80);

      // Get public URLs
      const { data: audioUrlData } = supabase.storage.from("beats").getPublicUrl(audioPath);
      const audioUrl = audioUrlData.publicUrl;
      const stemsUrl = stemsPath
        ? supabase.storage.from("beats").getPublicUrl(stemsPath).data.publicUrl
        : null;

      // Save beat metadata to database
      const { error: dbError } = await supabase.from("beats").insert({
        title: form.title.toUpperCase(),
        genre: form.genre,
        bpm: parseInt(form.bpm),
        key: form.key,
        mood: form.mood || null,
        price: form.price ? parseFloat(form.price) : null,
        description: form.description || null,
        producer_id: user.id,
        producer_name: user.fullName || user.emailAddresses[0]?.emailAddress,
        audio_url: audioUrl,
        stems_url: stemsUrl,
        status: "review",
      });

      if (dbError) throw new Error("Database save failed: " + dbError.message);
      setProgress(100);
      setTimeout(() => setUploadStep("success"), 400);

    } catch (err: any) {
      setError(err.message || "Upload failed. Please try again.");
      setUploadStep("form");
      setProgress(0);
    }
  };

  // ─── Delete beat ───
  const handleDelete = async (beatId: string) => {
    if (!confirm("Delete this beat? This cannot be undone.")) return;
    const { error } = await supabase.from("beats").delete().eq("id", beatId);
    if (!error) setBeats((prev) => prev.filter((b) => b.id !== beatId));
  };

  const resetForm = () => {
    setForm({ title: "", genre: "", bpm: "", key: "", mood: "", price: "", description: "" });
    setMainFile(null);
    setStemsFile(null);
    setProgress(0);
    setError("");
    setUploadStep("form");
  };

  const inputCls =
    "w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40 transition";
  const labelCls =
    "mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/60";

  // ─── Avatar initials ───
  const avatarText = user?.fullName
    ? user.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : user?.emailAddresses[0]?.emailAddress?.slice(0, 2).toUpperCase() ?? "BM";

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f]">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-300" />
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,64,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,240,255,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      {/* TOPBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
            <Music3 className="h-3.5 w-3.5" />
            Beat Maker Portal
          </div>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-bold transition hover:border-cyan-400/30"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-[11px] font-black text-cyan-300">
                {avatarText}
              </div>
              <span className="hidden text-white/80 sm:block">
                {user?.fullName || user?.emailAddresses[0]?.emailAddress}
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-white/40" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-white/10 bg-[#12121a] p-2 shadow-2xl">
                <div className="px-3 py-2">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                    {user?.fullName || "Beat Maker"}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/45">
                    {user?.emailAddresses[0]?.emailAddress}
                  </p>
                </div>
                <div className="my-1 border-t border-white/10" />
                <button
  onClick={() => openUserProfile()}
  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/60 transition hover:bg-white/[0.04] hover:text-white"
>
  <User className="h-4 w-4" /> Profile Settings
</button>
                <button
                  onClick={() => signOut({ redirectUrl: "/" })}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#ff0040]/70 transition hover:bg-[#ff0040]/10 hover:text-[#ff0040]"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* Page heading */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00f0ff]">
            Invaluabless Productions
          </p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            Beat Maker
            <span className="ml-3 bg-gradient-to-r from-[#ff0040] via-white to-[#00f0ff] bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-2">
          {[
            { id: "upload", label: "Upload Beat", icon: CloudUpload },
            { id: "beats", label: "My Beats", icon: Disc3 },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition ${
                tab === id
                  ? "border-[#ff0040]/40 bg-[#ff0040]/15 text-white shadow-[0_0_20px_rgba(255,0,64,0.22)]"
                  : "border-white/10 bg-white/[0.03] text-white/70 hover:border-cyan-400/30 hover:text-cyan-200"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* ─── UPLOAD TAB ─── */}
        {tab === "upload" && (
          <>
            {uploadStep === "form" && (
              <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                  <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                    Beat Information
                  </p>

                  {error && (
                    <div className="mb-5 rounded-2xl border border-[#ff0040]/30 bg-[#ff0040]/10 px-4 py-3 text-sm text-[#ff0040]">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="grid gap-5">
                    <div>
                      <label className={labelCls}>Beat Title *</label>
                      <input name="title" value={form.title} onChange={handleField} required className={inputCls} placeholder="Name your beat..." />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className={labelCls}>Genre *</label>
                        <select name="genre" value={form.genre} onChange={handleField} required className={inputCls + " appearance-none"}>
                          <option value="" disabled>Select genre</option>
                          {genreOptions.map((g) => <option key={g} value={g} className="bg-[#0a0a0f]">{g}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>BPM *</label>
                        <input name="bpm" value={form.bpm} onChange={handleField} required type="number" min="60" max="220" className={inputCls} placeholder="e.g. 96" />
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className={labelCls}>Key *</label>
                        <select name="key" value={form.key} onChange={handleField} required className={inputCls + " appearance-none"}>
                          <option value="" disabled>Select key</option>
                          {keyOptions.map((k) => <option key={k} value={k} className="bg-[#0a0a0f]">{k}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Mood</label>
                        <select name="mood" value={form.mood} onChange={handleField} className={inputCls + " appearance-none"}>
                          <option value="" disabled>Select mood</option>
                          {moodOptions.map((m) => <option key={m} value={m} className="bg-[#0a0a0f]">{m}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>Standard Price ($)</label>
                      <input name="price" value={form.price} onChange={handleField} type="number" min="0" className={inputCls} placeholder="e.g. 100" />
                    </div>

                    <div>
                      <label className={labelCls}>Description</label>
                      <textarea name="description" value={form.description} onChange={handleField} rows={3} className={inputCls} placeholder="Describe the vibe, references, or intended use..." />
                    </div>

                    <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:shadow-[0_0_25px_rgba(255,0,64,0.35)]">
                      <CloudUpload className="h-4 w-4" />
                      Upload Beat To Store
                    </button>
                  </form>
                </div>

                {/* File upload sidebar */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-[#ff0040]">Audio File *</p>
                    <p className="mb-4 text-[11px] text-white/45">MP3 or WAV — required</p>
                    <button type="button" onClick={() => mainRef.current?.click()}
                      className={`flex w-full flex-col items-center gap-3 rounded-2xl border-2 border-dashed py-8 text-center transition ${mainFile ? "border-cyan-400/40 bg-cyan-400/5" : "border-white/10 hover:border-[#ff0040]/30 hover:bg-[#ff0040]/5"}`}>
                      {mainFile ? (
                        <>
                          <AudioLines className="h-8 w-8 text-cyan-300" />
                          <p className="text-xs font-bold text-cyan-200">{mainFile.name}</p>
                          <p className="text-[11px] text-white/40">{(mainFile.size / 1024 / 1024).toFixed(1)} MB</p>
                        </>
                      ) : (
                        <>
                          <Upload className="h-8 w-8 text-white/25" />
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/50">Click to upload</p>
                          <p className="text-[11px] text-white/30">MP3 / WAV</p>
                        </>
                      )}
                    </button>
                    <input ref={mainRef} type="file" accept=".mp3,.wav" className="hidden" onChange={(e) => handleFile(e, setMainFile)} />
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Stems</p>
                    <p className="mb-4 text-[11px] text-white/45">ZIP file — optional</p>
                    <button type="button" onClick={() => stemsRef.current?.click()}
                      className={`flex w-full flex-col items-center gap-3 rounded-2xl border-2 border-dashed py-6 text-center transition ${stemsFile ? "border-cyan-400/40 bg-cyan-400/5" : "border-white/10 hover:border-cyan-400/20 hover:bg-cyan-400/5"}`}>
                      {stemsFile ? (
                        <>
                          <FileMusic className="h-6 w-6 text-cyan-300" />
                          <p className="text-xs font-bold text-cyan-200">{stemsFile.name}</p>
                        </>
                      ) : (
                        <>
                          <Plus className="h-6 w-6 text-white/25" />
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/50">Add stems (ZIP)</p>
                        </>
                      )}
                    </button>
                    <input ref={stemsRef} type="file" accept=".zip" className="hidden" onChange={(e) => handleFile(e, setStemsFile)} />
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-[11px] leading-5 text-cyan-100/80">
                    Files upload securely to Supabase Storage. Only published beats appear in the public store.
                  </div>
                </div>
              </div>
            )}

            {/* Uploading state */}
            {uploadStep === "uploading" && (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
                  <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-cyan-400" />
                  <CloudUpload className="h-8 w-8 text-cyan-300" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Uploading</p>
                <h2 className="mt-2 text-2xl font-black uppercase">{form.title || "Your Beat"}</h2>
                <div className="mt-8 w-full max-w-sm">
                  <div className="mb-2 flex justify-between text-[11px] text-white/50">
                    <span>Progress</span><span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#ff0040] to-[#00f0ff] transition-all duration-200" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>
            )}

            {/* Success state */}
            {uploadStep === "success" && (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/5 p-10 text-center">
                <CheckCircle2 className="h-16 w-16 text-cyan-300" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Beat Uploaded</p>
                <h2 className="mt-2 text-3xl font-black uppercase">{form.title}</h2>
                <p className="mt-3 text-sm text-white/60">
                  Your beat has been submitted for review. It will appear in the store once approved.
                </p>
                <div className="mt-8 flex gap-3">
                  <button onClick={resetForm} className="inline-flex items-center gap-2 rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:shadow-[0_0_25px_rgba(255,0,64,0.35)]">
                    <Plus className="h-4 w-4" /> Upload Another
                  </button>
                  <button onClick={() => { setTab("beats"); resetForm(); }} className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-cyan-200 transition hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]">
                    <Disc3 className="h-4 w-4" /> View My Beats
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* ─── MY BEATS TAB ─── */}
        {tab === "beats" && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00f0ff]">Your Catalog</p>
                <h2 className="mt-1 text-2xl font-black uppercase">My Beats</h2>
              </div>
              <button onClick={() => setTab("upload")} className="inline-flex items-center gap-2 rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:shadow-[0_0_20px_rgba(255,0,64,0.25)]">
                <Plus className="h-3.5 w-3.5" /> New Beat
              </button>
            </div>

            {loadingBeats ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-cyan-300" />
              </div>
            ) : beats.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Disc3 className="h-12 w-12 text-white/20" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white/40">No beats uploaded yet</p>
                <button onClick={() => setTab("upload")} className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-200 transition hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <Plus className="h-3.5 w-3.5" /> Upload Your First Beat
                </button>
              </div>
            ) : (
              <div className="grid gap-4">
                {beats.map((beat) => (
                  <div key={beat.id} className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-400/25 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <AudioLines className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.1em] text-white">{beat.title}</p>
                        <div className="mt-1.5 flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{beat.genre}</span>
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{beat.bpm} BPM</span>
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{beat.key}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] ${beat.status === "published" ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300" : "border-[#ff0040]/30 bg-[#ff0040]/10 text-[#ff0040]"}`}>
                        {beat.status}
                      </span>
                      <span className="hidden text-[11px] text-white/40 sm:block">
                        {new Date(beat.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <button onClick={() => handleDelete(beat.id)} className="rounded-xl border border-white/10 p-2 text-white/30 transition hover:border-[#ff0040]/30 hover:text-[#ff0040]">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}