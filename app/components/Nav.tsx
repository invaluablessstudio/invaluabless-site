"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = [
  { label: "Work", href: "/work" },
  { label: "Producer", mobileLabel: "Producer", href: "/producer" },
  { label: "Services", href: "/services" },
  {
    label: "Resources",
    mobileLabel: "Resources",
    href: "/resources",
  },
  { label: "Studio", href: "/recording-studio-san-antonio" },
  { label: "Contact", href: "/contact" },
  {
    label: "Artist Development",
    mobileLabel: "Development",
    href: "/artist-development",
  },
  { label: "Book", href: "/book", highlight: true },
];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium uppercase tracking-wider transition-all ${
  item.highlight
    ? "ml-4 bg-[#ff0040] px-6 py-2.5 text-black hover:glow-red"
    : "text-gray-300 hover:text-white"
} ${pathname === item.href && !item.highlight ? "text-white" : ""}`}
                >
                  {item.label}
                  {!item.highlight && pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#ff0040]" />
                  )}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle menu"
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
          <nav className="absolute top-20 left-0 right-0 flex flex-col gap-4 border-b border-[#ff0040]/20 bg-[#0a0a0f] p-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl font-urban uppercase tracking-wider ${
                  item.highlight ? "text-[#ff0040]" : "text-white"
                } ${pathname === item.href && !item.highlight ? "text-[#00f0ff]" : ""}`}
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