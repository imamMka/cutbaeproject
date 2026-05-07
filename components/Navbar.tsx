"use client";

import React, { useEffect, useState } from "react";
import { NAV_LINKS, WA_LINK } from "./data";
import { WhatsAppIcon } from "./Icons";

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/60 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo-cutbae.svg" alt="CUTBAE Logo" className="h-12 md:h-16 w-auto" />
          <h1 className="text-white font-bold text-lg">Cutbae</h1>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-zinc-400 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-bold tracking-widest uppercase px-5 py-2.5 transition-all duration-300"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          Booking
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-300 hover:text-amber-400 transition-colors p-1"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"} bg-zinc-950/98 border-t border-zinc-800/60`}>
        <ul className="flex flex-col px-5 py-4 gap-4">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-400 text-zinc-950 text-xs font-bold tracking-widest uppercase px-5 py-2.5 mt-2">
              <WhatsAppIcon className="w-3.5 h-3.5" />
              Booking
            </a>
          </li>
        </ul>
      </div>
    </nav >
  );
}
