"use client";

import React from "react";
import { CAPSTERS } from "@/components/data";
import { useScrollReveal } from "@/components/hooks";
import { SectionLabel } from "@/components/Shared";

// ─── CAPSTERS ─────────────────────────────────────────────────────────────────
export function CapstersSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="team" className="py-28 bg-zinc-950 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("/bg-capters.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <SectionLabel label="Our Team" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <h2 className="text-white text-4xl md:text-5xl font-serif font-black leading-tight">
            Meet the <span className="text-amber-400">Capsters</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
            The skilled hands behind every precision cut and premium experience at CUTBAE.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {CAPSTERS.map((c, i) => (
            <div
              key={c.name}
              className="group relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/5] bg-zinc-900 border border-zinc-800 overflow-hidden mb-6 group-hover:border-amber-400/30 transition-colors duration-500">
                {/* Capster Image */}
                <img
                  src={`/${c.name.toLowerCase()}.webp`}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-zinc-300 text-xs italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    &ldquo;{c.bio}&rdquo;
                  </p>
                </div>
              </div>

              <h3 className="text-white text-xl font-bold mb-1 tracking-wide">{c.name}</h3>
              <p className="text-amber-400 text-[10px] tracking-[0.3em] uppercase font-semibold">{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
