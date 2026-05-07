import React from "react";
import { WA_LINK } from "./data";
import { WhatsAppIcon, InstagramIcon, FacebookIcon, YoutubeIcon, XIcon } from "./Icons";

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
        <div className="flex items-center gap-2">
          <img src="/logo-cutbae.svg" alt="CUTBAE Logo" className="h-10 md:h-12 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          <h1 className="text-white font-bold text-lg uppercase tracking-widest">Cutbae</h1>
        </div>
        <div className="flex flex-col items-center md:items-start gap-3">
          <a href="#hero" className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group">
            Beranda
          </a>
          <a href="#about" className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group">
            Tentang
          </a>
          <a href="#services" className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group">
            Layanan
          </a>
          <a href="#testimonials" className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group">
            Ulasan
          </a>
          <a href="#gallery" className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group">
            Galeri
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-3">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group">
            <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Hubungi via WhatsApp
          </a>
          <a className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group" href="https://instagram.com/">
            <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Instagram
          </a>
          <a className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group" href="https://facebook.com/">
            <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Facebook
          </a>
          <a className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group" href="https://youtube.com/">
            <YoutubeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Youtube
          </a>
          <a className="text-zinc-500 hover:text-amber-400 transition-colors text-xs tracking-wider flex items-center gap-2.5 group" href="https://x.com/">
            <XIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            X (Twitter)
          </a>
        </div>
      </div>
      <p className="text-zinc-700 text-xs tracking-wider md:text-center text-start px-2 border-t border-zinc-800 pt-8">© {new Date().getFullYear()} CUTBAE Barbershop. Hak Cipta Dilindungi. Powered By <a className="text-white hover:underline transition-300" href="https://imammka.my.id/">Imam Mka</a></p>
    </footer>
  );
}
