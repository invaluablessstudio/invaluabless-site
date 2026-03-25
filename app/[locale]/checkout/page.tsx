"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ShieldCheck, Music3, ReceiptText } from "lucide-react";
import { beats } from "@/data/beats";

type LicenseType = "standard" | "custom";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const beatSlug = searchParams.get("beat");
  const licenseParam = searchParams.get("license") as LicenseType | null;

  const license: LicenseType =
    licenseParam === "custom" ? "custom" : "standard";

  const selectedBeat = useMemo(() => {
    return beats.find((beat) => beat.slug === beatSlug) ?? beats[0];
  }, [beatSlug]);

  const price =
    license === "custom"
      ? selectedBeat.priceCustom
      : selectedBeat.priceStandard;

  const [formData, setFormData] = useState({
    artistName: "",
    email: "",
    phone: "",
    songTitle: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // For now: placeholder internal flow
    // Later we can connect this to:
    // - email API
    // - database
    // - Supabase / Firebase
    // - Stripe checkout
    alert(
      `Purchase request submitted for ${selectedBeat.title} (${license.toUpperCase()})`
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,64,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,240,255,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_25%)]" />
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mb-6">
          <Link
            href="/beat-store"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-white/60 transition hover:text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Beat Store
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Internal Checkout
              </p>
              <h1 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-5xl">
                Complete Your
                <span className="block bg-gradient-to-r from-[#ff0040] via-white to-[#00f0ff] bg-clip-text text-transparent">
                  Beat Request
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Submit your details to request this beat license. This is your
                internal checkout flow and can later be connected to automated
                payment and delivery.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                    Artist Name
                  </label>
                  <input
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
                    placeholder="Your artist name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                    Song Title
                  </label>
                  <input
                    name="songTitle"
                    value={formData.songTitle}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
                    placeholder="Optional song title"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
                  placeholder="Any notes about your project, release, timeline, or delivery needs..."
                />
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-100/85">
                This page is currently set up as an internal order request flow.
                Next, we can connect it to email notifications, a database, and
                automated payment processing.
              </div>

              <button
  type="submit"
  className="inline-flex items-center justify-center rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:shadow-[0_0_25px_rgba(255,0,64,0.35)]"
>
  {license === "custom"
    ? "Request Custom Beat"
    : "Buy Standard Beat"}
</button>
            </form>
          </div>

          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              <ReceiptText className="h-4 w-4" />
              Order Summary
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
                Selected Beat
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase text-white">
                {selectedBeat.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
                  {selectedBeat.genre}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
                  BPM {selectedBeat.bpm}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
                  {selectedBeat.key}
                </span>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
                  Beat Option
                </p>
                <p className="mt-2 text-xl font-black uppercase text-white">
  {license === "custom" ? "Custom Exclusive Beat" : "Standard Beat"}
</p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
                  Total
                </p>
                <p className="mt-2 text-4xl font-black text-white">
  {license === "custom" ? `From $${price}` : `$${price}`}
</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-white">
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                Current Flow
              </div>

              <div className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                <p>1. Artist selects beat and license.</p>
                <p>2. Artist submits internal purchase request.</p>
                <p>3. Studio confirms order and payment method.</p>
                <p>4. Beat and license delivery are completed manually.</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#ff0040]/20 bg-[#ff0040]/10 p-5">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-white">
                <Music3 className="h-5 w-5 text-[#ff0040]" />
                Next Upgrade
              </div>
              <p className="mt-3 text-sm leading-6 text-white/70">
                We can connect this page to a real backend next, so purchase
                requests are saved automatically and sent to your email.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}