export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">
          Book a Session <span className="text-[#c8a44b]">.</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Complete the booking request below. We’ll confirm availability and send deposit instructions to secure your session.
          <br />
          <span className="text-gray-500">
            Completa la solicitud abajo. Confirmaremos disponibilidad y enviaremos instrucciones de depósito para asegurar tu sesión.
          </span>
        </p>

        <p className="mt-4 text-gray-500">
          Booking requests are reviewed before confirmation.{" "}
          <span className="text-gray-600">Las solicitudes se revisan antes de confirmar.</span>
        </p>

        <div className="mt-10 p-8 bg-[#111116] rounded-2xl border border-[#1a1a1f]">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-semibold">
              Booking Request <span className="text-[#c8a44b]">/</span> Solicitud de Reserva
            </h2>
            <p className="text-sm text-gray-400">Response time: 24–48 hrs</p>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden border border-[#1a1a1f] bg-black">
            <iframe
              title="Booking Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSd69KA3OzucBT2MM6hbtEOB-jQgexxoOZkOLapWv9hDTrlD7g/viewform?embedded=true"
              className="w-full h-[2100px]"
            />
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Deposit required to confirm. <span className="text-gray-600">Depósito requerido para confirmar.</span>
          </p>
        </div>
      </div>
    </main>
  );
}