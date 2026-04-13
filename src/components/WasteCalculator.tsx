"use client";

import { useState } from "react";

export default function WasteCalculator() {
  const [employees, setEmployees] = useState(50);

  const protectionsPerYearPerPerson = 240;
  const weightPerProtection = 0.005; // kg
  const culottesPerPerson = 5;
  const culotteLifespan = 5; // years
  const costDisposablePerYear = 60; // euros
  const costCulottesTotal = 150; // euros pour 5 culottes

  const totalDisposable5y = employees * protectionsPerYearPerPerson * 5;
  const wasteAvoided5y = totalDisposable5y * weightPerProtection;
  const savingsPerPerson5y = (costDisposablePerYear * 5) - costCulottesTotal;
  const totalSavings5y = employees * savingsPerPerson5y;
  const co2Saved = wasteAvoided5y * 3.5; // rough estimate kg CO2

  return (
    <div className="bg-card-bg rounded-3xl p-8 lg:p-12 border border-sand">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-navy">
          Calculez votre impact
        </h3>
        <p className="mt-2 text-text-light">
          Deplacez le curseur pour voir ce que ca change
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-md mx-auto mb-12">
        <label className="block text-sm font-semibold text-navy mb-3 text-center">
          Nombre de collaboratrices
        </label>
        <input
          type="range"
          min={5}
          max={500}
          step={5}
          value={employees}
          onChange={(e) => setEmployees(Number(e.target.value))}
          className="w-full h-2 bg-sand rounded-full appearance-none cursor-pointer accent-forest"
        />
        <div className="mt-3 text-center">
          <span className="text-5xl font-bold text-forest">{employees}</span>
          <span className="text-text-light ml-2">collaboratrices</span>
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-forest/5 rounded-2xl p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-forest">
            {totalDisposable5y.toLocaleString("fr-FR")}
          </div>
          <p className="mt-2 text-xs text-text-light font-medium leading-tight">
            protections jetables evitees sur 5 ans
          </p>
        </div>

        <div className="bg-blush/20 rounded-2xl p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-forest">
            {wasteAvoided5y.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} kg
          </div>
          <p className="mt-2 text-xs text-text-light font-medium leading-tight">
            de dechets en moins
          </p>
        </div>

        <div className="bg-sand rounded-2xl p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-forest">
            {totalSavings5y.toLocaleString("fr-FR")} &euro;
          </div>
          <p className="mt-2 text-xs text-text-light font-medium leading-tight">
            d&apos;economies totales sur 5 ans
          </p>
        </div>

        <div className="bg-forest/5 rounded-2xl p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-forest">
            {co2Saved.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} kg
          </div>
          <p className="mt-2 text-xs text-text-light font-medium leading-tight">
            de CO2 economise
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-text-light">
        Base : {protectionsPerYearPerPerson} protections/an/personne &bull; Duree de vie culotte : {culotteLifespan} ans &bull; {culottesPerPerson} culottes par collaboratrice
      </p>
    </div>
  );
}
