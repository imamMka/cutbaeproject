import React from "react";
import { WA_LINK } from "@/components/data";
import { WhatsAppIcon } from "@/components/Icons";

// ─── BOOKING CTA ──────────────────────────────────────────────────────────────
export function BookingCTASection() {
  return (
    <section className="py-28 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/10 via-amber-400/0 to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span className="text-[clamp(6rem,25vw,20rem)] font-serif font-black text-zinc-900 opacity-30 leading-none">
          SEKARANG
        </span>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-amber-400" />
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase">Siap?</span>
          <div className="h-px w-10 bg-amber-400" />
        </div>
        <h2 className="text-white text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
          Waktunya tampil <br /><span className="text-amber-400">segar.</span>
        </h2>
        <p className="text-zinc-400 mb-10 text-base leading-relaxed max-w-md mx-auto">
          Booking gampang lewat WhatsApp. Balas cepet, jadwal fleksibel. Open sampai jam 22:00.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold tracking-widest uppercase text-sm px-10 py-5 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/30 hover:-translate-y-1"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Booking via WhatsApp
        </a>
      <div className="mt-8 flex items-center justify-center gap-2 text-zinc-600 text-xs tracking-wider">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Biasanya balas dalam &lt; 5 menit
      </div>
    </div>
    </section >
  );
}
