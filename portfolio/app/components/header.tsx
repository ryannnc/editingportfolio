"use client";

import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-zinc-50 relative z-50">
      <nav className="relative flex items-center justify-center px-4 py-4 md:px-6 md:py-10 max-w-6xl mx-auto">
        {/* LEFT: nav links (desktop only) */}
        <div className="absolute left-6 hidden md:flex items-center gap-6 text-sm font-medium tracking-[-0.01em]">
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

        {/* CENTER: name + subtitle (visible on all screens) */}
        <div className="flex flex-col items-center justify-center leading-tight text-center">
          <h1 className="text-xl md:text-2xl font-semibold text-black dark:text-zinc-50">
            Ryan Cao&apos;s Portfolio
          </h1>
          <p className="text-sm text-black/80 dark:text-zinc-200/90">
            Photographer/Videographer · Video Editor · Motion Designer
          </p>
        </div>

        {/* RIGHT: socials (desktop) + hamburger (mobile) */}
        <div className="absolute right-6 flex items-center gap-5">
          {/* Desktop socials */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="https://www.instagram.com/rryanncao"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:text-white/80"
            >
              <FaInstagram size={22} />
            </Link>
            <Link
              href="https://www.youtube.com/@ryanncao"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:text-white/80"
            >
              <FaYoutube size={22} />
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col gap-[5px] items-center justify-center w-9 h-9 rounded-md bg-black/30 border border-white/10 z-[60]"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle navigation"
          >
            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* SLIDE-IN MENU (mobile only) */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-black/95 backdrop-blur-sm border-l border-white/10 transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 text-lg font-medium">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-white/80 transition"
          >
            Home
          </Link>
          <Link
            href="/work"
            onClick={() => setOpen(false)}
            className="hover:text-white/80 transition"
          >
            Work
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-white/80 transition"
          >
            Contact
          </Link>

          {/* Social icons */}
          <div className="flex gap-5 pt-2">
            <Link
              href="https://www.instagram.com/rryanncao"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white/80"
            >
              <FaInstagram size={22} />
            </Link>
            <Link
              href="https://www.youtube.com/@ryanncao"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white/80"
            >
              <FaYoutube size={22} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
