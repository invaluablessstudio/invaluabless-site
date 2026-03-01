import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1f] bg-[#07070a] mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="font-bold text-lg tracking-wide">
              INVALUABLESS <span className="text-[#c8a44b]">PRODUCTIONS</span>
            </h3>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Recording • Mixing • Mastering • Creative Direction
            </p>

            <p className="mt-4 text-xs text-gray-500">
              Professional studio services designed for clarity,
              presence, and real results.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold text-white">Navigation</h4>

            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <div>
                <Link href="/" className="hover:text-white smooth">
                  Home
                </Link>
              </div>

              <div>
                <Link href="/services" className="hover:text-white smooth">
                  Services
                </Link>
              </div>

              <div>
                <Link href="/work" className="hover:text-white smooth">
                  Work
                </Link>
              </div>

              <div>
                <Link href="/book" className="hover:text-white smooth">
                  Book Session
                </Link>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-white">Contact</h4>

            <div className="mt-4 space-y-3 text-sm">

              <a
                href="mailto:invaluabless.studio@gmail.com"
                className="block text-gray-400 hover:text-[#c8a44b] smooth"
              >
                invaluabless.studio@gmail.com
              </a>

              <a
                href="https://www.instagram.com/invaluablessproduction"
                target="_blank"
                rel="noreferrer"
                className="block text-gray-400 hover:text-[#c8a44b] smooth"
              >
                @invaluablessproduction
              </a>

              <p className="text-gray-500 text-xs pt-2">
                Deposit required to confirm sessions.
                <br />
                Depósito requerido para confirmar sesiones.
              </p>

            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-14 pt-6 border-t border-[#1a1a1f] text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Invaluabless Productions.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}