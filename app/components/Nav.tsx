"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLink = (path: string, label: string) => (
    <Link
      href={path}
      className={`relative px-2 py-2 text-sm md:text-base font-semibold transition ${
        isActive(path) ? "text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full transition ${
          isActive(path) ? "bg-[#c8a44b] opacity-100" : "bg-transparent opacity-0"
        }`}
      />
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#07070a]/80 backdrop-blur border-b border-[#1a1a1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="font-extrabold tracking-wide text-base md:text-lg">
          INVALUABLESS <span className="text-[#c8a44b]">PRODUCTIONS</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-5">
          {navLink("/", "Home")}
          {navLink("/services", "Services")}
          {navLink("/work", "Work")}

          <Link
            href="/book"
            className={`ml-2 px-5 py-2 rounded-lg font-semibold transition smooth glow-red
              ${isActive("/book") ? "bg-[#8b0b17] text-white" : "bg-[#8b0b17] text-white hover:opacity-90"}`}
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
}