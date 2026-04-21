"use client";

import { useState } from "react";

const PRESETS = [
  { label: "PME", employees: 30, icon: "🏠", desc: "jusqu'à 50" },
  { label: "ETI", employees: 150, icon: "🏢", desc: "50-200" },
  { label: "Grand groupe", employees: 500, icon: "🏙️", desc: "200+" },
];

export default function WasteCalculator() {
  const [selected, setSelected] = useState(1);
  const employees = PRESETS[selected].employees;

  const protectionsPerYear = 240;
  const wastePerProtection = 0.005;

  const disposable5y = employees * protectionsPerYear * 5;
  const waste5y = disposable5y * wastePerProtection;
  const savings5y = employees * 150;
  const co2 = waste5y * 3.5;

  const maxDisposable = 500 * 240 * 5;
  const maxWaste = maxDisposable * 0.005;
  const maxSavings = 500 * 150;
  const maxCo2 = maxWaste * 3.5;

  const bars = [
    { label: "Protections évitées", value: disposable5y, max: maxDisposable, display: disposable5y.toLocaleString("fr-FR"), color: "bg-terra" },
    { label: "Déchets évités", value: waste5y, max: maxWaste, display: `${waste5y.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} kg`, color: "bg-sage" },
    { label: "Économies réalisées", value: savings5y, max: maxSavings, display: `${savings5y.toLocaleString("fr-FR")} €`, color: "bg-terra-light" },
    { label: "CO₂ économisé", value: co2, max: maxCo2, display: `${co2.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} kg`, color: "bg-sage" },
  ];

  return (
    <div>
      {/* Presets */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {PRESETS.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`rounded-xl px-4 py-4 border-2 transition-all duration-300 cursor-pointer ${
              selected === i
                ? "border-terra bg-terra/10"
                : "border-warm-gray hover:border-terra/40 bg-white"
            }`}
          >
            <span className="text-2xl block mb-1">{p.icon}</span>
            <span className="text-xs font-bold text-deep block">{p.label}</span>
            <span className="text-[10px] text-text-light block mt-0.5">{p.employees} collab.</span>
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-5">
        {bars.map((bar, i) => (
          <div key={`${selected}-${i}`}>
            <div className="flex justify-between items-end mb-1.5">
              <span className="text-xs font-medium text-text-light">{bar.label}</span>
              <span className="text-xl font-bold text-deep">{bar.display}</span>
            </div>
            <div className="w-full h-2.5 bg-warm-gray rounded-full overflow-hidden">
              <div
                className={`h-full ${bar.color} bar-animate rounded-full`}
                style={{ "--bar-width": `${(bar.value / bar.max) * 100}%` } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[10px] text-text-light text-center">
        Projection sur 5 ans (240 protections/an) — Données moyennes
      </p>
    </div>
  );
}
