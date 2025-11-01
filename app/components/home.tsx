"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-40">
      <div className="scale-[clamp(0.5,1vw+0.5,1)] origin-center text-white">
        <h1 className="font-regular leading-tight mb-6 text-[10vw] md:text-8xl">
          <span className="block">High Quality Production</span>
        </h1>
        <Link
          href="/work"
          className="mt-4 px-6 py-2 text-sm font-medium text-white bg-[#200069] rounded-full hover:bg-zinc-800 transition"
        >
          View Work
        </Link>
      </div>
    </section>
  );
}
