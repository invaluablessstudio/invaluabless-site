// app/services/page.tsx
"use client"; // ADDED: Required for smooth hover effects

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Services <span className="text-[#c8a44b]">.</span>
          </h1>

          <Link
            href="/book"
            className="px-6 py-3 bg-[#8b0b17] rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(139,11,23,0.3)]"
          >
            Book Session
          </Link>
        </div>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl">
          Clear workflow. Clean engineering. Built for serious artists.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <ServiceCard
            title="Recording"
            desc="Professional vocal & instrumental tracking in a controlled studio environment."
            price="$50 / hour"
            note="Minimum time can be set on booking."
          />
          <ServiceCard
            title="Mixing"
            desc="Clarity, punch, and professional balance that translates everywhere."
            price="$100"
            note="Per song."
          />
          <ServiceCard
            title="Mastering"
            desc="Final polish and platform-ready loudness with clean dynamics."
            price="$50"
            note="Per song."
          />
          <ServiceCard
            title="Beat Leasing / Purchase"
            desc="High-quality beats available for lease or purchase. Pricing varies by license."
            price="Starting at $200"
            note="Licensing terms provided after request."
          />
        </div>

        <div className="mt-14 p-8 rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md">
          <h2 className="text-2xl font-semibold">How booking works</h2>
          <p className="mt-4 text-gray-300">
            Submit the booking form → we confirm availability → deposit locks your session.
            <br />
            <span className="text-gray-400">
              Envía el formulario → confirmamos disponibilidad → el depósito asegura tu sesión.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}

function ServiceCard({
  title,
  desc,
  price,
  note,
}: {
  title: string;
  desc: string;
  price: string;
  note: string;
}) {
  return (
    <div className="group p-8 rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md transition-all duration-300 hover:border-[#c8a44b]/30 hover:bg-black/50 hover:shadow-[0_0_30px_rgba(200,164,75,0.15)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-[#c8a44b] group-hover:text-[#d7bb63] transition-colors">{title}</h3>
        <div className="text-right">
          <div className="text-lg font-extrabold text-white">{price}</div>
          <div className="text-xs text-gray-400">{note}</div>
        </div>
      </div>

      <p className="mt-4 text-gray-200 leading-relaxed">{desc}</p>
    </div>
  );
}