import React from "react";
import { WA_LINK } from "./data";
import { WhatsAppIcon } from "./Icons";

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/logo-cutbae.svg" alt="CUTBAE Logo" className="h-10 md:h-12 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          <h1 className="text-white font-bold text-lg">Cutbae</h1>
        </div>
        <p className="text-zinc-700 text-xs tracking-wider">© {new Date().getFullYear()} CUTBAE Barbershop. Karawang, Indonesia.</p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-1.5">
          <WhatsAppIcon className="w-3.5 h-3.5" />
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
