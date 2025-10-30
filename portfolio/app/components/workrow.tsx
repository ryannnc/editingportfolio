"use client";

import Image from "next/image";

// you can swap this out later for real data
const images = [
  { src: "/photos/t1.jpg", alt: "Work 1" },
  { src: "/photos/t2.jpg", alt: "Work 2" },
  { src: "/photos/t3.jpg", alt: "Work 3" },
  { src: "/photos/t4.jpg", alt: "Work 4" },
  { src: "/photos/t1.jpg", alt: "Work 5" },
  { src: "/photos/t2.jpg", alt: "Work 6" },
  { src: "/photos/t3.jpg", alt: "Work 7" },
  { src: "/photos/t4.jpg", alt: "Work 8" },
];

export default function WorksGrid() {
  return (
    <section className="w-full flex justify-center pb-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl px-4 w-full">
  {images.map((img, idx) => (
    <div
      key={idx}
      className="relative w-full h-40 md:h-44 overflow-hidden rounded-xl bg-zinc-900"
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
      />
    </div>
  ))}
</div>
    </section>
  );
}
