"use client";

import React from "react";
import { 
  SERVICES_HAIRCUT, 
  SERVICES_COLORING, 
  SERVICES_TREATMENTS 
} from "@/components/data";
import { useScrollReveal } from "@/components/hooks";
import { SectionLabel } from "@/components/Shared";

interface ServiceItem {
  icon: string;
  name: string;
  desc: string;
  price: string;
  tag: string | null;
}

function ServiceGrid({ items, visible }: { items: ServiceItem[], visible: boolean }) {
  return (
    <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {items.map((s, i) => (
        <div
          key={s.name}
          className="group relative border border-zinc-800 bg-zinc-950/50 p-8 hover:border-amber-400/40 transition-all duration-500 hover:bg-zinc-950"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {s.tag && (
            <span className="absolute top-6 right-6 text-amber-400 text-[10px] tracking-[0.3em] uppercase border border-amber-400/30 px-2.5 py-1">
              {s.tag}
            </span>
          )}
          <div className="text-4xl text-amber-400 mb-6 font-mono group-hover:scale-110 transition-transform duration-300 inline-block">{s.icon}</div>
          <h3 className="text-white text-xl font-bold mb-3 tracking-wide">{s.name}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">{s.desc}</p>
          <div className="text-amber-400 font-bold text-lg">{s.price}</div>
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-400 group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export function ServicesSection() {
  const { ref: refHaircut, visible: visibleHaircut } = useScrollReveal();
  const { ref: refColoring, visible: visibleColoring } = useScrollReveal();
  const { ref: refTreatments, visible: visibleTreatments } = useScrollReveal();

  return (
    <section id="services" className="py-28 bg-zinc-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="Services" />
        <h2 className="text-white text-4xl md:text-5xl font-serif font-black mb-16 leading-tight">
          What we offer
        </h2>

        {/* HAIRCUT SECTION */}
        <div ref={refHaircut}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-zinc-400 text-sm tracking-[0.3em] uppercase font-bold">Haircut</h3>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <ServiceGrid items={SERVICES_HAIRCUT} visible={visibleHaircut} />
        </div>

        {/* COLORING SECTION */}
        <div ref={refColoring}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-zinc-400 text-sm tracking-[0.3em] uppercase font-bold">Coloring</h3>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <ServiceGrid items={SERVICES_COLORING} visible={visibleColoring} />
        </div>

        {/* TREATMENTS SECTION */}
        <div ref={refTreatments}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-zinc-400 text-sm tracking-[0.3em] uppercase font-bold">Other Treatments</h3>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <ServiceGrid items={SERVICES_TREATMENTS} visible={visibleTreatments} />
        </div>

        <div className="mt-8 border border-zinc-800 bg-zinc-950/30 px-6 py-4 flex items-center gap-4">
          <span className="text-amber-400 text-lg">✦</span>
          <p className="text-zinc-400 text-sm">
            <span className="text-white font-medium">Semua layanan</span> sudah termasuk warm towel treatment &amp; free mineral water.
          </p>
        </div>
      </div>
    </section>
  );
}
