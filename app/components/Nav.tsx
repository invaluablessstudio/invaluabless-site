"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo.png"
            alt="Invaluabless Productions"
            width={36}
            height={36}
            priority
            className="shrink-0"
          />
          <span className="truncate font-extrabold tracking-wide text-white text-lg">
            Invaluabless
          </span>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DESKTOP LINKS */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "text-sm font-medium transition",
                    active
                      ? "text-white"
                      : "text-white/70 hover:text-white",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* BOOK BUTTON (ALWAYS VISIBLE) */}
          <Link
            href="/book"
            className="rounded-xl bg-[#8b0b17] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
          >
            Book
          </Link>

          {/* HAMBURGER (MOBILE ONLY) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/90 hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
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

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0b0b10] border-l border-white/10 p-6">
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-white font-bold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/80 hover:text-white transition text-lg font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}