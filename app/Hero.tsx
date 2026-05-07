import React from "react";
import { WA_LINK } from "@/components/data";
import { WhatsAppIcon } from "@/components/Icons";

// ─── HERO ─────────────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950 pt-20 pb-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("/hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-950" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700/40 to-transparent hidden lg:block z-10" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700/40 to-transparent hidden lg:block z-10" />

      <div className="absolute top-32 right-8 md:right-16 flex flex-col items-end gap-1 animate-fadeInSlow z-20">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
        </div>
        <span className="text-zinc-500 text-xs tracking-wider">4.9 · 449 ulasan</span>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-3 mb-8 animate-fadeInSlow">
          <div className="h-px w-10 bg-amber-400" />
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">Karawang, Jawa Barat</span>
          <div className="h-px w-10 bg-amber-400" />
        </div>

        <h1
          className="text-white font-serif font-black leading-[0.92] mb-6 animate-heroTitle"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
            letterSpacing: "-0.02em",
            animationDelay: "0.1s",
          }}
        >
          Potongan Presisi.
          <br />
          <span className="text-amber-400">Pengalaman</span>
          <br />
          Premium.
        </h1>

        <p 
          className="text-zinc-400 text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed animate-fadeInUp" 
          style={{ animationDelay: "0.3s" }}
        >
          Barbershop terpercaya di Karawang — di mana setiap potongan adalah pernyataan diri.
          Gratis handuk hangat &amp; air mineral.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" 
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/25 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Booking via WhatsApp
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300 hover:-translate-y-0.5"
          >
            Lihat Layanan <span className="text-amber-400">↓</span>
          </a>
        </div>
      </div >

      <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800/60 overflow-hidden py-3 bg-zinc-950/80 backdrop-blur-sm z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-zinc-600 text-xs tracking-[0.5em] uppercase mx-8">
              Potong Rambut · Styling · Hot Stone · Barbershop Premium · Karawang ·
            </span>
          ))}
        </div>
      </div>
    </section >
  );
}
