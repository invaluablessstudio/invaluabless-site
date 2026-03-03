"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
    ],
    []
  );

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070a]/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          {/* Left: Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-white/10 bg-black/20">
              <Image
                src="/logo.png"
                alt="Invaluabless Productions"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wide text-white">
                INVALUABLESS{" "}
                <span className="text-[#c8a44b]">PRODUCTIONS</span>
              </div>
            </div>
          </Link>

          {/* Right: Desktop links */}
          <nav className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm font-medium transition",
                  isActive(item.href)
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/book"
              className="rounded-xl bg-[#8b0b17] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Book
            </Link>
          </nav>

          {/* Right: Mobile - Book always visible + Hamburger */}
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/85 hover:bg-white/10"
            >
              {/* hamburger icon */}
              <span className="block h-[2px] w-5 bg-current mb-1" />
              <span className="block h-[2px] w-5 bg-current mb-1" />
              <span className="block h-[2px] w-5 bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-[#0b0b10] shadow-[0_30px_120px_rgba(0,0,0,0.75)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-white/10 bg-black/20">
                  <Image
                    src="/logo.png"
                    alt="Invaluabless Productions"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="text-sm font-extrabold text-white">
                  Menu
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/85 hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="px-4 py-5">
              <div className="grid gap-2">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-xl px-4 py-3 text-lg font-semibold transition",
                      isActive(item.href)
                        ? "bg-white/[0.06] text-white"
                        : "text-white/85 hover:bg-white/[0.06]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-white/90">
                  Deposit required
                </p>
                <p className="mt-1 text-sm text-white/65">
                  Booking is confirmed after deposit is received.
                </p>
              </div>

              <div className="mt-6 text-xs text-white/50">
                © {new Date().getFullYear()} Invaluabless Productions
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}