// app/book/page.tsx
export default function BookPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
        {/* subtle bottom fade (lighter than before) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Book <span className="text-[#caa23a]">.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Choose an available session time below. Availability is updated in real-time.
            <br />
            <span className="text-white/60">
              Elige un horario disponible. La disponibilidad se actualiza en tiempo real.
            </span>
          </p>
        </div>

        {/* Calendar card (LIGHTER overlay so embed is readable) */}
        <section className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-6">
          {/* This inner wrapper is what was making it too dark.
              We keep it glassy but MUCH lighter. */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.10] p-3 md:p-4">
            {/* IMPORTANT: no extra dark overlay on top of iframe */}
           <iframe
  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3L2SStwJf3zpwl82ZvB6qAw4D9mXAQTtqZMsE29CwZeF77TSLfCDD6KfsXACgRouvG_lge-6n5?gv=true&mode=LIGHT"
  style={{ border: 0 }}
  width="100%"
  height="750"
  frameBorder={0}
  className="w-full rounded-xl bg-white"
  title="InvaluaBless Productions Studio Booking"
/>
          </div>

          {/* tiny helper note */}
          <div className="mt-4 text-xs text-white/50">
            Times shown in your local timezone. / Horarios en tu zona horaria.
          </div>
        </section>
      </div>
    </main>
  );
}