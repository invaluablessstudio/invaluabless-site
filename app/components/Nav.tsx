"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
  ];

  return (
    <header className="sticky top-0 z-[1000] w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo.png"
            alt="Invaluabless Productions"
            width={34}
            height={34}
            priority
            className="shrink-0"
          />
          <span className="truncate text-lg font-extrabold tracking-wide text-white">
            Invaluabless
          </span>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* Desktop links */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "text-sm font-medium transition",
                    active ? "text-white" : "text-white/70 hover:text-white",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* BOOK stays visible */}
          <Link
            href="/book"
            className="rounded-xl bg-[#8b0b17] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
          >
            Book
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/90 hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ✅ FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* solid overlay so you DON'T see the page behind */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/90"
          />

          {/* menu panel */}
          <div className="absolute inset-x-0 top-0 border-b border-white/10 bg-[#0b0b10]">
            <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Invaluabless Productions"
                  width={28}
                  height={28}
                  className="shrink-0"
                />
                <span className="text-white font-semibold">Menu</span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/90 hover:bg-white/10 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* links area */}
          <div className="absolute inset-x-0 top-[72px] bottom-0 bg-[#0b0b10]">
            <div className="mx-auto max-w-6xl px-6 py-10">
              <nav className="flex flex-col gap-6">
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "text-2xl font-semibold tracking-tight transition",
                        active ? "text-white" : "text-white/80 hover:text-white",
                      ].join(" ")}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </nav>

              {/* optional tiny trust note */}
              <p className="mt-10 text-sm text-white/50">
                Deposit required to confirm sessions.
                <br />
                Depósito requerido para confirmar sesiones.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}