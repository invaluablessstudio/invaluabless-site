"use client";

import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full border-b border-white/10 bg-[#07070a]/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Invaluabless Productions"
            width={40}
            height={40}
            priority
          />
          <span className="font-extrabold tracking-wide text-white text-lg">
            Invaluabless
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/work" className="hover:text-white transition">
            Work
          </Link>
          <Link
            href="/book"
            className="px-4 py-2 bg-[#8b0b17] rounded-lg text-white hover:opacity-90 transition"
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
}