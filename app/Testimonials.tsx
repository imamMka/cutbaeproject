"use client";

import React from "react";
import { TESTIMONIALS } from "@/components/data";
import { useScrollReveal } from "@/components/hooks";
import { SectionLabel } from "@/components/Shared";

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export function TestimonialsSection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="testimonials" className="py-28 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="Ulasan" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <h2 className="text-white text-4xl md:text-5xl font-serif font-black leading-tight">
            Kata mereka
          </h2>
          <div className="flex items-baseline gap-3">
            <span className="text-amber-400 text-5xl font-black">4.9</span>
            <div>
              <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}</div>
              <span className="text-zinc-500 text-xs tracking-wider">449 Ulasan Google</span>
            </div>
          </div>
        </div>
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-7 hover:border-zinc-700 transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-5">{[...Array(t.rating)].map((_, j) => <span key={j} className="text-amber-400 text-sm">★</span>)}</div>
              <p className="text-zinc-300 leading-relaxed mb-6 text-sm italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-zinc-600 text-xs">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
