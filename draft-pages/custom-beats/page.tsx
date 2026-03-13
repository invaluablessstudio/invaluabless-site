import Link from "next/link";
import {
  Music3,
  Mic2,
  Sparkles,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Disc3,
  AudioLines,
} from "lucide-react";

export const metadata = {
  title: "Custom Beats",
  description:
    "Custom exclusive beat production for reggaeton, Latin trap, rap, urban, singer, and Christian artists at Invaluabless Productions in San Antonio, Texas.",
};

const audiences = [
  "Reggaeton artists",
  "Latin trap artists",
  "Rap and trap artists",
  "Urban artists",
  "Singers",
  "Christian artists",
];

const included = [
  {
    icon: Music3,
    title: "Custom Production",
    text: "A beat created around your style, energy, and musical direction.",
  },
  {
    icon: Mic2,
    title: "Artist-Focused Approach",
    text: "Built to complement your voice, delivery, and songwriting vision.",
  },
  {
    icon: Headphones,
    title: "Recording-Ready Sound",
    text: "Production designed to be ready for studio recording and release prep.",
  },
  {
    icon: Sparkles,
    title: "Exclusive Direction",
    text: "A more personal, premium process than choosing a general pre-made beat.",
  },
];

const steps = [
  {
    number: "01",
    title: "Book Your Session",
    text: "Choose your session and start the process with Invaluabless Productions.",
  },
  {
    number: "02",
    title: "Share Your Vision",
    text: "Send your references, mood, genre direction, and what kind of sound you want.",
  },
  {
    number: "03",
    title: "Production Begins",
    text: "Your beat is developed around your sound and creative direction.",
  },
  {
    number: "04",
    title: "Review + Finalize",
    text: "We refine the production and move toward your final version.",
  },
];

const reasons = [
  "Built for serious artists who want a unique sound",
  "Great fit for reggaeton, Latin, rap, trap, and Christian music",
  "More personal than buying a generic beat online",
  "Connected to a real recording studio workflow in San Antonio",
];

export default function CustomBeatsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,64,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,240,255,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                <Disc3 className="h-3.5 w-3.5" />
                Invaluabless Productions
              </div>

              <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
                Custom Beats
                <span className="block bg-gradient-to-r from-[#ff0040] via-white to-[#00f0ff] bg-clip-text text-transparent">
                  Built Around Your Sound
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Get a custom exclusive beat designed for your style, voice, and
                vision. Ideal for artists who want something more personal than
                a pre-made beat and want a sound that feels like their own.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:shadow-[0_0_25px_rgba(255,0,64,0.35)]"
                >
                  Book Custom Beat
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-cyan-200 transition hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]"
                >
                  Contact Studio
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]"
                >
                  <item.icon className="h-6 w-6 text-cyan-300" />
                  <h2 className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00f0ff]">
            Made For
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Artists Who Want A Signature Sound
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff0040]">
            What’s Included
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Premium Custom Beat Experience
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {included.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#ff0040]/25 hover:shadow-[0_0_24px_rgba(255,0,64,0.10)]"
            >
              <item.icon className="h-6 w-6 text-[#00f0ff]" />
              <h3 className="mt-4 text-lg font-black uppercase text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Process
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            How It Works
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-black/20 p-6"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff0040]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-black uppercase text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff0040]">
              Pricing
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Custom Exclusive Beats Start At $250
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
              Final pricing can vary depending on the complexity, arrangement,
              revisions, and overall production direction of your project.
            </p>

            <div className="mt-8">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:shadow-[0_0_25px_rgba(255,0,64,0.35)]"
              >
                Start Your Custom Beat
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <p className="text-sm leading-6 text-white/80">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,0,64,0.12),rgba(0,240,255,0.08),rgba(255,255,255,0.02))] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Ready To Build Your Sound?
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-5xl">
              Let’s Create A Beat That Feels Like You
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              If you want something custom, personal, and built around your
              sound, book your custom beat session with Invaluabless
              Productions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl border border-[#ff0040]/40 bg-[#ff0040]/15 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:shadow-[0_0_25px_rgba(255,0,64,0.35)]"
              >
                Book Now
              </Link>

              <Link
                href="/beat-store"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white/80 transition hover:border-cyan-400/30 hover:text-cyan-200"
              >
                Browse Beat Store
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}