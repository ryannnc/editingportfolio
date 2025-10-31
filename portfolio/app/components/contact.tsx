'use client';

import Link from "next/link";

export default function ContactButton() {
  return (
    <section className="py-20 flex flex-col items-center justify-center text-white font-sf">
      <Link
        href="/contact"
        className="mt-4 px-6 py-2 text-sm font-medium text-white bg-[#200069] rounded-full hover:bg-zinc-800 transition"
      >
        Get in Contact
      </Link>
    </section>
  );
}
