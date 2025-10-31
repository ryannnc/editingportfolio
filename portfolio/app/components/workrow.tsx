"use client";

import Image from "next/image";

export default function WorksRow() {
  return (
    <div className="w-full flex justify-center pb-20">
      {/* outer width controls how wide the whole strip is */}
      <div className="flex justify-center items-center gap-3 w-[90vw] max-w-[1000px]">
        {/* 1 */}
        <Image
          src="/photos/t1.jpg"
          alt="Work 1"
          width={150}
          height={300}
          className="object-contain h-auto 
                     w-[12vw] sm:w-[10vw] md:w-[150px]"
        />
        {/* 2 */}
        <Image
          src="/photos/t3.jpg"
          alt="Work 3"
          width={150}
          height={300}
          className="object-contain h-auto 
                     w-[12vw] sm:w-[10vw] md:w-[150px]"
        />
        {/* 3 */}
        <Image
          src="/photos/t4.jpg"
          alt="Work 4"
          width={150}
          height={300}
          className="object-contain h-auto 
                     w-[12vw] sm:w-[10vw] md:w-[150px]"
        />
        {/* vertical one — a bit wider */}
        <Image
          src="/photos/t2.jpg"
          alt="Work 2"
          width={285}
          height={300}
          className="object-contain h-auto 
                     w-[16vw] sm:w-[14vw] md:w-[285px]"
        />
        {/* 5 */}
        <Image
          src="/photos/t5.jpg"
          alt="Work 5"
          width={150}
          height={300}
          className="object-contain h-auto 
                     w-[12vw] sm:w-[10vw] md:w-[150px]"
        />
        {/* 6 */}
        <Image
          src="/photos/t6.jpg"
          alt="Work 6"
          width={150}
          height={300}
          className="object-contain h-auto 
                     w-[12vw] sm:w-[10vw] md:w-[150px]"
        />
        {/* 7 */}
        <Image
          src="/photos/t7.jpg"
          alt="Work 7"
          width={150}
          height={300}
          className="object-contain h-auto 
                     w-[12vw] sm:w-[10vw] md:w-[150px]"
        />
      </div>
    </div>
  );
}
