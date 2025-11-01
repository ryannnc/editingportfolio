'use client';

export default function Skills() {
  return (
    <section className="py-20 flex flex-col items-center justify-center text-white">
      {/* Title */}
<h1 className="text-4xl font-bold mb-20 ">
  What my <span className="text-[#4c00ff]">Skills</span> are
</h1>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-10/12 max-w-6xl">
        {/* Videographer / Photographer */}
        <div className="h-80 flex flex-col items-center justify-center text-center p-10 
          bg-gradient-to-tr from-[#200069] via-[#130024] to-black 
          border border-[#3f0f85] hover:border-[#9d4edd] 
          transition-all duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold">Videographer / Photographer</h2>
          <p className="mt-3 max-w-xs text-gray-200">
            Capturing stories through composition, lighting, and color to evoke emotion.
          </p>
        </div>

        {/* Video Editor */}
        <div className="h-80 flex flex-col items-center justify-center text-center p-10 
          bg-gradient-to-tr from-[#200069] via-[#130024] to-black 
          border border-[#3f0f85] hover:border-[#9d4edd] 
          transition-all duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold">Video Editor</h2>
          <p className="mt-3 max-w-xs text-gray-200">
            Crafting rhythm, pacing, and tone through seamless editing and sound design.
          </p>
        </div>

        {/* Motion Designer */}
        <div className="h-80 flex flex-col items-center justify-center text-center p-10 
          bg-gradient-to-tr from-[#200069] via-[#130024] to-black 
          border border-[#3f0f85] hover:border-[#9d4edd] 
          transition-all duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold">Motion Designer</h2>
          <p className="mt-3 max-w-xs text-gray-200">
            Bringing visuals to life with movement, typography, and dynamic storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}
