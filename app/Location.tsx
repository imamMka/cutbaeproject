import React from "react";
import { WA_LINK } from "@/components/data";
import { WhatsAppIcon } from "@/components/Icons";
import { SectionLabel } from "@/components/Shared";

// ─── LOCATION ─────────────────────────────────────────────────────────────────
export function LocationSection() {
  return (
    <section id="location" className="py-28 bg-zinc-950 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("/testi.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <SectionLabel label="Lokasi" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-white text-4xl font-serif font-black mb-8 leading-tight">
              Temukan kami di <br /><span className="text-amber-400">Karawang</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-amber-400 text-xl mt-0.5">◎</span>
                <div>
                  <div className="text-white font-semibold mb-1 text-sm tracking-wider uppercase">Alamat</div>
                  <p className="text-zinc-400 leading-relaxed">
                    Jalan Raya Perumnas Bumi Teluk Jambe No.17,<br />Karawang, Jawa Barat
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-amber-400 text-xl mt-0.5">◷</span>
                <div>
                  <div className="text-white font-semibold mb-1 text-sm tracking-wider uppercase">Jam Operasional</div>
                  <div className="text-zinc-400 space-y-1">
                    <div className="flex justify-between gap-8">
                      <span>Senin – Minggu</span>
                      <span className="text-white">09:00 – 22:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-400 text-xs">Buka Sekarang</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-amber-400 text-xl mt-0.5">◈</span>
                <div>
                  <div className="text-white font-semibold mb-1 text-sm tracking-wider uppercase">Kontak</div>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2 text-sm">
                    <WhatsAppIcon className="w-4 h-4" />
                    Chat di WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.44492939944!2d107.28078125528087!3d-6.336367880255106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699d7c5a6c94f1%3A0xd16409a5f04eaef4!2sCUTBAE%20BARBERSHOP!5e0!3m2!1sen!2sid!4v1778073790112!5m2!1sen!2sid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 border border-zinc-700 hover:border-amber-400/40 text-zinc-300 hover:text-amber-400 text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300"
            >
              Buka di Google Maps ↗
            </a>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-96 border border-zinc-800 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.44492939944!2d107.28078125528087!3d-6.336367880255106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699d7c5a6c94f1%3A0xd16409a5f04eaef4!2sCUTBAE%20BARBERSHOP!5e0!3m2!1sen!2sid!4v1778073790112!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CUTBAE Barbershop Location"
            />
          </div>
        </div>
      </div>
    </section >
  );
}
