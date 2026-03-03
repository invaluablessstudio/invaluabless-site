// app/components/Nav.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070a]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-md border border-white/10 bg-black/20">
            {/* Put your logo here: /public/logo.png */}
            <Image
              src="/logo.png"
              alt="Invaluabless Productions logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <span className="text-sm font-extrabold tracking-wide text-white">
            Invaluabless <span className="text-[#c8a44b]">Productions</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={[
                "text-sm font-medium text-white/80 hover:text-white transition",
                isActive(l.href) ? "text-white" : "",
              ].join(" ")}
            >
              <span className="relative">
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#c8a44b]" />
                )}
              </span>
            </Link>
          ))}

          <Link
            href="/book"
            className="rounded-xl bg-[#8b0b17] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Book
          </Link>
        </nav>

        {/* Mobile right controls: Book stays + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/book"
            className="rounded-xl bg-[#8b0b17] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Book
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white hover:bg-white/10 transition"
          >
            {/* hamburger icon */}
            <span className="block h-[2px] w-5 bg-white relative">
              <span className="absolute -top-2 left-0 h-[2px] w-5 bg-white" />
              <span className="absolute top-2 left-0 h-[2px] w-5 bg-white" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Dark backdrop */}
          <button
            aria-label="Close menu backdrop"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/80"
          />

          {/* Panel */}
          <div className="absolute inset-x-0 top-0 bg-[#0b0b10] border-b border-white/10">
            <div className="mx-auto max-w-6xl px-5 pt-4 pb-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-md border border-white/10 bg-black/20">
                    <Image
                      src="/logo.png"
                      alt="Invaluabless Productions logo"
                      fill
                      className="object-contain p-1"
                      priority
                    />
                  </div>
                  <p className="text-sm font-extrabold text-white">
                    Menu
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white hover:bg-white/10 transition"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 grid gap-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-xl font-semibold text-white/90 hover:bg-white/10 transition",
                      isActive(l.href) ? "border-[#c8a44b]/50" : "",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                ))}

                <Link
                  href="/book"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-2xl bg-[#8b0b17] px-5 py-4 text-xl font-extrabold text-white text-center hover:opacity-90 transition"
                >
                  Book a Session
                </Link>
              </div>

              <p className="mt-5 text-xs text-white/50">
                Deposit required to confirm sessions. <br />
                Depósito requerido para confirmar sesiones.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}