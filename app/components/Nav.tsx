"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "../../i18n/navigation";

type NavItem = {
  label: string;
  href: string;
  highlight?: boolean;
  mobileLabel?: string;
};

export default function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDesktopMenuOpen(false);
  }, [pathname, locale]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMenuEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDesktopMenuOpen(true);
  };

  const handleMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDesktopMenuOpen(false);
    }, 120);
  };

  function switchLanguage(nextLocale: "en" | "es") {
    router.replace(pathname || "/", { locale: nextLocale });
  }

  const desktopPrimaryItems: NavItem[] = [
    { label: t("producer"), href: "/producer" },
    { label: t("artistDevelopment"), href: "/artist-development" },
  ];

  const desktopDropdownItems: NavItem[] = [
    { label: t("work"), href: "/work" },
    { label: t("services"), href: "/services" },
    { label: t("resources"), href: "/resources" },
    { label: t("studio"), href: "/recording-studio-san-antonio" },
    { label: t("contact"), href: "/contact" },
  ];

  const mobileItems: NavItem[] = [
    { label: t("work"), href: "/work" },
    { label: t("producer"), href: "/producer" },
    { label: t("services"), href: "/services" },
    { label: t("resources"), href: "/resources" },
    { label: t("studio"), href: "/recording-studio-san-antonio" },
    { label: t("contact"), href: "/contact" },
    {
      label: t("artistDevelopment"),
      mobileLabel: t("artistDevelopment"),
      href: "/artist-development",
    },
    { label: t("book"), href: "/book", highlight: true },
  ];

  const isDropdownActive = desktopDropdownItems.some(
    (item) => pathname === item.href
  );

  const isSpanish = locale === "es";

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-[#0a0a0f]/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden border border-[#ff0040]/50 bg-black/50">
                <Image
                  src="/logo.png"
                  alt="Invaluabless"
                  fill
                  className="object-contain p-1 transition-transform group-hover:scale-110"
                  priority
                />
              </div>

              <div className="hidden sm:block">
                <div className="font-urban text-xl leading-none uppercase tracking-wider">
                  Invaluabless<span className="text-[#ff0040]">.</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#ff0040]">
                  Productions
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex lg:gap-8">
              {desktopPrimaryItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-wider transition-all ${
                      active ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/book"
                className="ml-4 inline-flex items-center bg-[#ff0040] px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-black transition hover:opacity-95 hover:shadow-[0_0_18px_rgba(255,0,64,0.35)]"
              >
                {t("book")}
              </Link>

              <div
                className="relative"
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-all ${
                    isDropdownActive || desktopMenuOpen
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  aria-expanded={desktopMenuOpen}
                  aria-haspopup="menu"
                >
                  {t("menu")}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      desktopMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-200 ${
                    desktopMenuOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  {desktopDropdownItems.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-wider transition-all ${
                          active
                            ? "bg-cyan-400/10 text-cyan-200"
                            : "text-gray-300 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="ml-2 flex items-center gap-2 border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-300">
                <button
                  type="button"
                  onClick={() => switchLanguage("en")}
                  className={`transition ${
                    !isSpanish ? "text-white" : "text-gray-500 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-600">|</span>
                <button
                  type="button"
                  onClick={() => switchLanguage("es")}
                  className={`transition ${
                    isSpanish ? "text-white" : "text-gray-500 hover:text-white"
                  }`}
                >
                  ES
                </button>
              </div>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={t("toggleMenu")}
            >
              <span
                className={`h-[2px] w-6 bg-white transition-all ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-[#ff0040] transition-all ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-white transition-all ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-lg"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute left-0 right-0 top-20 flex flex-col gap-4 border-b border-[#ff0040]/20 bg-[#0a0a0f] p-6">
            <div className="mb-2 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-300">
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                className={`transition ${
                  !isSpanish ? "text-white" : "text-gray-500 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-gray-600">|</span>
              <button
                type="button"
                onClick={() => switchLanguage("es")}
                className={`transition ${
                  isSpanish ? "text-white" : "text-gray-500 hover:text-white"
                }`}
              >
                ES
              </button>
            </div>

            {mobileItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl font-urban uppercase tracking-wider ${
                  item.highlight ? "text-[#ff0040]" : "text-white"
                } ${
                  pathname === item.href && !item.highlight
                    ? "text-[#00f0ff]"
                    : ""
                }`}
              >
                {item.mobileLabel ?? item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}