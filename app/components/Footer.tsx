import Link from "next/link";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Producer", href: "/producer" },
  { label: "Services", href: "/services" },
  { label: "Artists", href: "/artists" },
  { label: "Artist Development", href: "/artist-development" },
  { label: "Studio", href: "/recording-studio-san-antonio" },
  { label: "Contact", href: "/contact" },
  { label: "Book", href: "/book" },
];

export default function Footer() {
  return (
    <footer className="relative z-50 border-t border-white/10 bg-transparent pt-20 pb-10">
      {/* glass overlay */}
      <div className="supports-[backdrop-filter]:bg-black/10 absolute inset-0 -z-10 bg-black/25 backdrop-blur" />

      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-urban mb-4 text-4xl uppercase">
              Invaluabless Productions<span className="text-[#ff0040]">.</span>
            </h3>

            <p className="max-w-md leading-relaxed text-gray-400">
              Professional recording studio in San Antonio, Texas. Specializing
              in reggaeton, Latin, rap, trap, urban music production, and artist
              development.
            </p>

            <div className="mt-6 flex gap-4">
              <SocialLink
                href="https://instagram.com/invaluablessproduction"
                label="IG"
              />

              <SocialLink
                href="https://youtube.com/@InvaluaBlessProductions"
                label="YT"
              />

              <SocialLink
                href="mailto:bookings@invaluablessproduction.com"
                label="Email"
              />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
              Navigate
            </h4>

            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm uppercase tracking-wider text-gray-400 transition-colors hover:text-[#ff0040]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>San Antonio, TX</li>

              <li>
                <a
                  href="tel:2106086422"
                  className="transition-colors hover:text-[#ff0040]"
                >
                  (210) 608-6422
                </a>
              </li>

              <li className="mt-4 text-xs leading-relaxed text-gray-600">
                bookings@invaluablessproduction.com
                <br />
                support@invaluablessproduction.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-widest text-gray-600">
            © {new Date().getFullYear()} Invaluabless Productions
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff0040]" />
            <span className="uppercase tracking-widest">Now Booking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center border border-white/10 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all hover:border-[#ff0040] hover:text-[#ff0040]"
    >
      {label}
    </a>
  );
}