"use client";

import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full text-zinc-50">
      <nav className="relative flex items-center justify-center px-6 py-10 max-w-6xl mx-auto">
        {/* LEFT: nav links */}
        <div className="absolute left-6 flex items-center gap-6 text-l font-medium tracking-[-0.01em]">
          <Link href="/" className="hover:text-white/80 transition">
            Home
          </Link>
          <Link href="/work" className="hover:text-white/80 transition">
            Work
          </Link>
          <Link href="/contact" className="hover:text-white/80 transition">
            Contact
          </Link>
        </div>

        {/* CENTER: name + subtitle */}
        <div className="flex flex-col items-center justify-center leading-tight text-center">
          <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Ryan Cao&apos;s Portfolio
          </h1>
          <p className="text-l text-black/80 dark:text-zinc-200/90">
            Photographer/Videographer · Video Editor · Motion Designer
          </p>
        </div>

        {/* RIGHT: social icons */}
        <div className="absolute right-6 flex items-center gap-5">
          <Link
            href="https://www.instagram.com/rryanncao"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:text-white/80"
          >
            <FaInstagram size={25} />
          </Link>
          <Link
            href="https://www.youtube.com/@ryancao"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:text-white/80"
          >
            <FaYoutube size={25} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
