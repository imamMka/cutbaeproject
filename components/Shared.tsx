import React from "react";

// ─── SHARED ───────────────────────────────────────────────────────────────────
export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px w-8 bg-amber-400" />
      <span className="text-amber-400 text-xs tracking-[0.4em] uppercase">{label}</span>
    </div>
  );
}
