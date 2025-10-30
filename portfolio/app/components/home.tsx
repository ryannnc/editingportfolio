"use client";

import Link from "next/link";
import WorksGrid from "./workrow";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-40">
        <h1 className="text-8xl font-regular leading-tight mb-6">
          <span className="block">High Quality Production</span>
        </h1>
        <Link
          href="/work"
          className="mt-4 px-6 py-2 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-zinc-800 transition"
        >
          View Work
        </Link>
      </section>
<WorksGrid />
    </>
  );
}
