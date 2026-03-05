// app/components/Nav.tsx
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
  { label: "The Producer", href: "/theproducer" }, // ✅ FIXED
  { label: "Services", href: "/services" },
  { label: "Book", href: "/book", highlight: true },
];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden border border-[#ff0040]/50 bg-black/50">
                <Image
                  src="/logo.png"
                  alt="Invaluabless"
                  fill
                  className="object-contain p-1 group-hover:scale-110 transition-transform"
                  priority
                />
              </div>

              <div className="hidden sm:block">
                <div className="font-urban text-xl uppercase tracking-wider leading-none">
                  Invaluabless<span className="text-[#ff0040]">.</span>
                </div>

                {/* ✅ changed from gray -> red */}
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#ff0040]">
                  Productions
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm uppercase tracking-wider font-medium transition-all ${
                    item.highlight
                      ? "px-6 py-2.5 bg-[#ff0040] text-black hover:glow-red"
                      : "text-gray-300 hover:text-white"
                  } ${pathname === item.href && !item.highlight ? "text-white" : ""}`}
                >
                  {item.label}
                  {!item.highlight && pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff0040]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-[2px] bg-white transition-all ${
                  open ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-[#ff0040] transition-all ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-white transition-all ${
                  open ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-lg"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute top-20 left-0 right-0 bg-[#0a0a0f] border-b border-[#ff0040]/20 p-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl font-urban uppercase tracking-wider ${
                  item.highlight ? "text-[#ff0040]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}