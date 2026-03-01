export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Book <span className="text-[#c8a44b]">.</span>
          </h1>
        </div>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl">
          Choose an available session time below. Availability is updated in real-time.
          <br />
          <span className="text-gray-400">
            Elige un horario disponible. La disponibilidad se actualiza en tiempo real.
          </span>
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 bg-black/35 backdrop-blur-md">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3L2SStwJf3zpwl82ZvB6qAw4D9mXAQTtqZMsE29CwZeF77TSLfCDD6KfsXACgRouvG_lge-6n5?gv=true"
            className="w-full h-[900px]"
            style={{ border: 0 }}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Book a Studio Session"
          />
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Your time is not fully confirmed until deposit is received.
          <br />
          <span className="text-gray-500">
            La sesión no queda confirmada hasta recibir el depósito.
          </span>
        </p>
      </div>
    </main>
  );
}