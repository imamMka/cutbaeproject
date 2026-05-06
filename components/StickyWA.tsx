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
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-xl shadow-green-500/30 transition-all duration-500 hover:-translate-y-1 ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}
