"use client";

import Image from "next/image";

export default function Work() {
  return (
    <section className="py-20 flex justify-center ">
<div className="columns-1 sm:columns-2 md:columns-3 gap-6 max-w-6xl space-y-6">
  {[
    "/photos/t1.jpg",
    "/photos/t2.jpg",
    "/photos/t3.jpg",
    "/photos/t4.jpg",
    "/photos/t5.jpg",
    "/photos/t6.jpg",
    "/photos/t7.jpg",
  ].map((src, i) => (
    <div key={i} className="overflow-hidden">
      <Image
        src={src}
        alt={`Work ${i + 1}`}
        width={800}
        height={600}
        className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
      />
    </div>
  ))}
</div>

    </section>
  );
}
