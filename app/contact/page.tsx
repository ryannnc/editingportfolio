"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="flex flex-col items-center text-white font-sf px-6 pt-20 pb-20">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 tracking-wide text-center">
        Get in Contact
      </h1>

      <p className="text-center text-zinc-300 max-w-md mb-10">
        Feel free to reach out through Instagram or by email for any inquiries,
        collaborations, or project discussions.
      </p>

      {/* Contact Options */}
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        {/* Email */}
        <Link
          href="mailto:ry3ncao@gmail.com"
          className="text-lg text-zinc-300 hover:text-white transition"
        >
          ry3ncao@gmail.com
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/rryanncao"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center transition transform hover:scale-110 hover:text-white"
        >
          <FaInstagram size={40} />
          <span className="mt-2 text-sm text-zinc-300">Instagram</span>
        </Link>
      </div>
    </section>
  );
}
