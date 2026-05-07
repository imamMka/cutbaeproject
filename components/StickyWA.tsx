"use client";

import React, { useEffect, useState } from "react";
import { WA_LINK } from "./data";
import { WhatsAppIcon } from "./Icons";

// ─── STICKY WA ────────────────────────────────────────────────────────────────
export function StickyWAButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handler = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-fit p-5 h-14 bg-green-500 hover:bg-green-400 flex items-center justify-between gap-2 shadow-xl shadow-green-500/30 transition-all duration-500 hover:-translate-y-1 rounded-full  ${show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        }`}
    >

      <p className="text-white text-xs font-bold tracking-widest uppercase">Tanya Admin</p>
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}
