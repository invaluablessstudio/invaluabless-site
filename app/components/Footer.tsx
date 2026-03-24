"use client";

import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  const navLinks = [
    { labelKey: "navWork",      href: "/work" },
    { labelKey: "navServices",  href: "/services" },
    { labelKey: "navProducer",  href: "/producer" },
    { labelKey: "navArtistDev", href: "/artist-development" },
    { labelKey: "navResources", href: "/resources" },
    { labelKey: "navStudio",    href: "/recording-studio-san-antonio" },
    { labelKey: "navContact",   href: "/contact" },
  ];

  const bookLinks = [
    { labelKey: "bookStudioSession", href: "/book" },
    { labelKey: "bookMixMaster",     href: "/services" },
    { labelKey: "bookBeats",         href: "/services" },
    { labelKey: "bookArtistPackage", href: "/artist-development" },
  ];

  return (
    <footer className="relative z-50 border-t border-white/10 bg-[#07070b] pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-16">

        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Col 1 — Brand */}
          <div>
            <h3 className="font-['Bebas_Neue'] text-3xl uppercase leading-none">
              Invaluabless<span className="text-[#ff0040]">.</span>
            </h3>
            <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-gray-400">
              {t("brandDescription")}
            </p>
            <div className="mt-6 flex gap-3">
              <SocialBtn href="https://instagram.com/invaluablessproduction" label="IG" />
              <SocialBtn href="https://youtube.com/@InvaluaBlessProductions" label="YT" />
              <SocialBtn href="https://facebook.com/invaluablessproduction" label="FB" />
              <SocialBtn href="https://tiktok.com/@invaluablessproductions" label="TK" />
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff0040]">
              {t("navigate")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {t(item.labelKey as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Book */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff0040]">
              {t("book")}
            </h4>
            <ul className="space-y-3">
              {bookLinks.map((item) => (
                <li key={item.labelKey}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {t(item.labelKey as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff0040]">
              {t("contact")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:2106086422" className="transition-colors hover:text-white">
                  (210) 608-6422
                </a>
              </li>
              <li>
                <a href="mailto:bookings@invaluablessproduction.com" className="transition-colors hover:text-[#ff0040]">
                  bookings@...
                </a>
              </li>
              <li>
                <a href="mailto:beats@invaluablessproduction.com" className="transition-colors hover:text-[#ff0040]">
                  beats@...
                </a>
              </li>
              <li>
                <a href="mailto:support@invaluablessproduction.com" className="transition-colors hover:text-[#ff0040]">
                  support@...
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-widest text-gray-600">
            © 2026 {t("copyright")}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff0040]" />
            <span className="uppercase tracking-widest">{t("nowBooking")}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialBtn({ href, label }: { href: string; label: string }) {
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