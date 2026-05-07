"use client";

import React from "react";
import { useScrollReveal } from "@/components/hooks";

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export function AboutSection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="about" className="py-28 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-400/[0.03] via-transparent to-transparent pointer-events-none" />
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative">
          <div className="relative w-[clamp(10rem,30vw,20rem)] opacity-[0.08] grayscale pointer-events-none select-none">
            <img src="/logo-cutbae.svg" alt="" className="w-full h-auto" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center pl-6">
            <div className="h-px w-12 bg-amber-400 mb-6" />
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">Est. 2019</p>
            <div className="flex gap-8">
              {[{ n: "4.9★", l: "Rating" }, { n: "449+", l: "Ulasan" }, { n: "5K+", l: "Klien Puas" }].map((s) => (
                <div key={s.l}>
                  <div className="text-white text-2xl font-black">{s.n}</div>
                  <div className="text-zinc-500 text-xs tracking-widest uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-4xl md:text-5xl font-serif font-black leading-tight mb-6">
            Bukan sekadar potong <span className="text-amber-400">rambut.</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-5">
            Di CUTBAE, setiap sesi adalah ritual. Dari konsultasi awal sampai sentuhan akhir — kami pastikan hasilnya konsisten, rapi, dan sesuai karaktermu.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Didukung barber berpengalaman dan suasana premium yang bikin kamu betah, kami bukan sekadar barbershop biasa di Karawang — kami adalah standar baru.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Konsultasi Gratis", "Handuk Hangat", "Gratis Air Mineral", "Barber Berpengalaman"].map((tag) => (
              <span key={tag} className="border border-zinc-700 text-zinc-400 text-xs tracking-widest uppercase px-4 py-2">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
