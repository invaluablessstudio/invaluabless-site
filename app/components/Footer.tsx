"use client";

import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Nav");

  const navLinks = [
    { label: navT("work"), href: "/work" },
    { label: navT("producer"), href: "/producer" },
    { label: navT("services"), href: "/services" },
    { label: navT("resources"), href: "/resources" },
    { label: navT("studio"), href: "/recording-studio-san-antonio" },
    { label: navT("contact"), href: "/contact" },
    { label: navT("artistDevelopment"), href: "/artist-development" },
    { label: navT("book"), href: "/book" },
  ];

  return (
    <footer className="relative z-50 border-t border-white/10 bg-transparent pb-10 pt-20">
      <div className="supports-[backdrop-filter]:bg-black/10 absolute inset-0 -z-10 bg-black/25 backdrop-blur" />

      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-urban mb-4 text-4xl uppercase">
              Invaluabless Productions<span className="text-[#ff0040]">.</span>
            </h3>

            <p className="max-w-md leading-relaxed text-gray-400">
              {t("brandDescription")}
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

          <div>
            <h4 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
              {t("navigate")}
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

          <div>
            <h4 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#00f0ff]">
              {t("contact")}
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

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-widest text-gray-600">
            © 2025 {t("copyright")}
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