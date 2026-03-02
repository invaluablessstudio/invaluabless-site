// app/book/page.tsx
import Image from "next/image";

export default function BookPage() {
  const scheduleUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3L2SStwJf3zpwl82ZvB6qAw4D9mXAQTtqZMsE29CwZeF77TSLfCDD6KfsXACgRouvG_lge-6n5?gv=true";

  return (
    <main className="relative min-h-[calc(100vh-72px)]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        {/* Soft vignette / studio glow */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_25%_20%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(800px_520px_at_70%_30%,rgba(176,141,46,0.12),transparent_60%)]" />
        {/* Subtle grain */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:url('/images/noise.png')]" />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-6xl font-extrabold tracking-tight text-white md:text-7xl">
            Book<span className="text-[#b08d2e]">.</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            Choose an available session time below. Availability is updated in real-time.
            <br />
            <span className="text-white/70">
              Elige un horario disponible. La disponibilidad se actualiza en tiempo real.
            </span>
          </p>

          {/* ✅ Deposit banner */}
          <div className="mt-6">
            <div className="rounded-2xl border border-[#b08d2e]/35 bg-white/[0.04] p-4 shadow-[0_0_0_1px_rgba(176,141,46,0.12),0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#b08d2e] shadow-[0_0_18px_rgba(176,141,46,0.55)]" />
                <div className="text-sm md:text-[15px]">
                  <p className="font-semibold text-white">
                    Deposit required to lock your session.
                  </p>
                  <p className="mt-1 text-white/75">
                    Your booking is only confirmed once the deposit is paid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Split layout */}
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {/* Left: studio photo card */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[4/5] md:aspect-[3/4]">
                <Image
                  src="/images/hero-mic.jpg"
                  alt="Studio microphone"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.62),rgba(0,0,0,0.15),rgba(0,0,0,0.35))]" />
                <div className="absolute inset-0 ring-1 ring-[#b08d2e]/20" />
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold tracking-wide text-white/90">
                  Studio Sessions • Recording • Mix • Master
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Book a time that fits your schedule. What you see here is exactly what’s available.
                </p>
              </div>
            </div>
          </div>

          {/* Right: calendar card */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-[#b08d2e]/25 bg-white/[0.04] p-4 shadow-[0_0_0_1px_rgba(176,141,46,0.10),0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="overflow-hidden rounded-xl bg-white">
                  <iframe
                    title="Book a session"
                    src={scheduleUrl}
                    style={{ border: 0 }}
                    width="100%"
                    height="720"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-xs text-white/65 md:flex-row md:items-center md:justify-between">
                <span>Times shown in your local timezone.</span>
                <span>Horarios en tu zona horaria.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}