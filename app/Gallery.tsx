"use client";

import React from "react";
import { GALLERY_ITEMS } from "@/components/data";
import { useScrollReveal } from "@/components/hooks";
import { SectionLabel } from "@/components/Shared";

// ─── GALLERY ──────────────────────────────────────────────────────────────────
export function GallerySection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="gallery" className="py-28 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="Gallery" />
        <h2 className="text-white text-4xl md:text-5xl font-serif font-black mb-16 leading-tight">
          The work speaks
        </h2>
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="relative aspect-square group overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-amber-400/5 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-xs tracking-widest uppercase font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
