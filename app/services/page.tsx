"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Global Effects */}
      <div className="grain" />
      <div className="scanlines" />

      {/* Background */}
      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 20%, #ff0040 0%, transparent 40%), radial-gradient(circle at 20% 80%, #00f0ff 0%, transparent 40%)"
          }}
        />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 pt-32">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#ff0040]" />
              <p className="text-xs tracking-[0.4em] uppercase text-[#00f0ff] font-semibold">
                What We Do
              </p>
            </div>
            <h1 className="font-urban text-6xl md:text-8xl uppercase leading-[0.85]">
              Services<span className="text-[#ff0040] text-glow-red">.</span>
            </h1>
          </div>

          <Link
            href="/book"
            className="group relative px-8 py-4 bg-[#ff0040] text-black font-bold uppercase tracking-wider text-sm overflow-hidden transition-all hover:glow-red"
          >
            <span className="relative z-10">Book Session</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        <p className="text-gray-400 text-lg max-w-2xl border-l-2 border-[#ff0040] pl-6 mb-16">
          Heavy 808s. Clean vocals. Industry-ready mixes that slap. 
          Built for reggaeton, trap, and Latin artists.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            title="Recording"
            desc="Vocal booths optimized for Latin vocals. Clean takes, tight comping. Professional tracking for vocals and instruments."
            price="$50/hr"
            note="Minimum booking required"
            icon="🎤"
          />
          <ServiceCard
            title="Mixing"
            desc="808s that hit. Vocals that cut. Radio-ready balance with clarity and punch that translates everywhere."
            price="$100"
            note="Per song"
            icon="🎚️"
          />
          <ServiceCard
            title="Mastering"
            desc="Final polish and platform-ready loudness. Clean dynamics optimized for streaming services."
            price="$50"
            note="Per song"
            icon="📀"
          />
          <ServiceCard
            title="Beat Leasing"
            desc="High-quality beats available for lease or purchase. Exclusive and non-exclusive licenses available."
            price="$200+"
            note="Pricing varies by license"
            icon="🥁"
          />
        </div>

                {/* Process Section */}
        <div className="mt-20 street-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff0040] to-transparent" />

          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-urban text-4xl uppercase mb-3">
                How It Works <span className="text-[#00f0ff]">.</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-2xl">
                Real-time calendar booking. Deposit locks the time. Automated confirmations handle the rest.
              </p>
            </div>

            <Link
              href="/book"
              className="group relative px-6 py-3 bg-[#ff0040] text-black font-bold uppercase tracking-wider text-xs overflow-hidden transition-all hover:glow-red"
            >
              <span className="relative z-10">Open Calendar</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="relative">
              <span className="font-urban text-6xl text-[#ff0040]/20 absolute -top-4 -left-2">
                01
              </span>
              <h3 className="font-urban text-xl uppercase text-white relative z-10 mb-2">
                Book on Calendar
              </h3>
              <p className="text-gray-400 text-sm">
                Choose an available time directly on our live calendar — no back-and-forth.
              </p>
              <p className="mt-3 text-[11px] text-gray-500 uppercase tracking-wider">
                Live availability
              </p>
            </div>

            <div className="relative">
              <span className="font-urban text-6xl text-[#00f0ff]/20 absolute -top-4 -left-2">
                02
              </span>
              <h3 className="font-urban text-xl uppercase text-white relative z-10 mb-2">
                Pay Deposit
              </h3>
              <p className="text-gray-400 text-sm">
                Follow the deposit instructions on the booking page. Deposit locks your session time.
              </p>
              <p className="mt-3 text-[11px] text-gray-500 uppercase tracking-wider">
                No deposit = not locked
              </p>
            </div>

            <div className="relative">
              <span className="font-urban text-6xl text-[#ff0040]/20 absolute -top-4 -left-2">
                03
              </span>
              <h3 className="font-urban text-xl uppercase text-white relative z-10 mb-2">
                Auto Confirm
              </h3>
              <p className="text-gray-400 text-sm">
                Once payment is received, you’ll get automated confirmation + session instructions.
              </p>
              <p className="mt-3 text-[11px] text-gray-500 uppercase tracking-wider">
                Email confirmation
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-500 text-sm uppercase tracking-wider border-t border-white/10 pt-6">
            Elige tu horario en el calendario → paga el depósito → recibes confirmación automática e instrucciones.
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
  icon,
}: {
  title: string;
  desc: string;
  price: string;
  note: string;
  icon: string;
}) {
  return (
    <div className="street-card p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-6">
        <span className="text-4xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
          {icon}
        </span>
        <div className="text-right">
          <div className="font-urban text-3xl text-[#ff0040] group-hover:text-glow-red transition-all">{price}</div>
          <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">{note}</div>
        </div>
      </div>

      <h3 className="font-urban text-3xl uppercase mb-3 group-hover:text-[#ff0040] transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed text-sm">
        {desc}
      </p>

      <div className="mt-6 h-[2px] w-12 bg-gray-700 group-hover:w-full group-hover:bg-[#ff0040] transition-all duration-500" />
    </div>
  );
}