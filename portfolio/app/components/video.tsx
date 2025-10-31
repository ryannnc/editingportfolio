"use client";

import { useState } from "react";

export default function VimeoHero({ children }: { children?: React.ReactNode }) {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="w-full m-0 p-0">
<h1 className="text-4xl text-center font-bold mb-2">
  Check out my <span className="text-[#4c00ff]">Work</span>!
</h1>
      {/* Video wrapper */}
      <div className="relative mx-auto max-w-7xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://player.vimeo.com/video/1121297805?h=abc123def456&autoplay=1&muted=1&loop=1&autopause=0&badge=0&app_id=58479"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Bill Haney Demo Reel"
          onLoad={() => setVideoReady(true)}
        />
      </div>

      {/* Children (fade in after video loads) */}
      <div
        className={`transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
}