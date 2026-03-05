// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-urban text-4xl uppercase mb-4">
              Invaluabless Production<span className="text-[#ff0040]">.</span>
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Urban recording studio in San Antonio, TX. Specializing in reggaeton, 
              trap, rap, and Latin music production.
            </p>
            <div className="mt-6 flex gap-4">
              <SocialLink href="https://instagram.com/invaluablessproduction" label="IG" />
              <SocialLink href="https://youtube.com/@InvaluaBlessProductions" label="YT" />
              <SocialLink href="mailto:invaluabless.studio@gmail.com" label="Email" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-6">Navigate</h4>
            <ul className="space-y-3">
              {["Work", "Services", "Book"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-[#ff0040] transition-colors uppercase text-sm tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#00f0ff] text-xs uppercase tracking-[0.3em] mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>San Antonio, TX</li>
              <li>
                <a href="tel:2106086422" className="hover:text-[#ff0040] transition-colors">
                  (210) 608-6422
                </a>
              </li>
              <li className="text-xs text-gray-600 mt-4">
                bookings@invaluablessproduction.com
                <br />
                support@invaluablessproduction.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Invaluabless Productions
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="w-2 h-2 bg-[#ff0040] rounded-full animate-pulse" />
            <span className="uppercase tracking-widest">Now Booking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// FIXED: Complete SocialLink component
function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center border border-white/10 text-gray-400 hover:border-[#ff0040] hover:text-[#ff0040] hover:glow-red transition-all text-xs font-bold uppercase tracking-wider"
    >
      {label}
    </a>
  );
}