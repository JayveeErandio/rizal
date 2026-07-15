/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { womenList } from "../../data";
import { WomenInLife } from "../../types";

export default function WomenView() {
  const [selectedWoman, setSelectedWoman] = useState<WomenInLife>(womenList[2]); // Default to Leonor Rivera (Maria Clara)

  return (
    <div className="space-y-12 animate-fade-in" id="women-view-container">
      <div className="text-center space-y-2">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.2em] block uppercase">
          CHAMBER VI • THE CORRESPONDENCES OF HEART
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          The Women in Rizal’s Life
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "Nine muses of varying cultures who illuminated his journeys, inspired
          his fictional heroines, and shared his dangerous exile."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        id="women-grid"
      >
        {/* Left: Interactive List / Cameo Buttons */}
        <div className="lg:col-span-5 space-y-4" id="women-selector-panel">
          <span className="font-display text-[9px] text-amber-900/50 tracking-widest uppercase font-bold block px-2">
            The Historical Muses
          </span>

          <div className="grid grid-cols-2 gap-3" id="women-cameos">
            {womenList.map((w) => {
              const isSelected = selectedWoman.name === w.name;
              return (
                <button
                  key={w.name}
                  onClick={() => setSelectedWoman(w)}
                  className={`p-3.5 rounded-sm border text-left cursor-pointer transition-all duration-300 relative overflow-hidden ${isSelected ? "bg-crimson-950 text-gold-100 border-gold-400 scale-[1.03] shadow-md" : "bg-faf6ee text-amber-950 border-gold-300/40 hover:bg-gold-100/30"}`}
                  id={`woman-btn-${w.name.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {/* Cameo frame graphic backing */}
                  <div
                    className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full border ${isSelected ? "border-gold-400/20" : "border-gold-600/10"} pointer-events-none`}
                  />

                  <span
                    className={`font-mono text-[8px] font-bold tracking-widest block uppercase ${isSelected ? "text-gold-400" : "text-crimson-800"}`}
                  >
                    {w.period}
                  </span>
                  <h3 className="font-serif font-extrabold text-[12px] md:text-[13px] leading-tight mt-1">
                    {w.name}
                  </h3>
                  <p
                    className={`text-[10px] font-serif italic mt-0.5 ${isSelected ? "text-gold-200/80" : "text-amber-950/60"}`}
                  >
                    {w.nationality}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="p-4 bg-gold-50/40 border border-dashed border-gold-600/20 rounded-xs text-[11px] text-amber-950/70 text-center italic leading-relaxed">
            "To love is to walk hand-in-hand in a dark alley, knowing that any
            light turned on might expose the danger of our convictions."
          </div>
        </div>

        {/* Right: Antique Picture Frame & Heart Correspondence Journal */}
        <div className="lg:col-span-7" id="women-cameo-viewer">
          <div
            className="parchment-card p-6 md:p-8 rounded-sm border-2 border-double border-gold-500 relative overflow-hidden flex flex-col  min-h-[440px]"
            id="cameo-container"
          >
            <div className="absolute inset-2 border border-dashed border-gold-600/15 rounded-xs pointer-events-none" />

            {/* Top row with Gilded Cameo Oval */}
            <div
              className="flex flex-col md:flex-row gap-6 items-center md:items-start border-b border-gold-300/30 pb-5 mb-5"
              id="cameo-top"
            >
              {/* Victorian Oval Cameo Profile Frame */}
              <div
                className="flex-shrink-0 w-24 h-32 rounded-full border-4 border-double border-gold-500 bg-gradient-to-b from-crimson-950 to-gold-950 flex items-center justify-center relative shadow-md overflow-hidden"
                id="cameo-oval-frame"
              >
                <img
                  src={`/rizal/assets/women/${selectedWoman.name}.jpg`}
                  alt={selectedWoman.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Identity Metadata */}
              <div
                className="space-y-1.5 text-center md:text-left flex-grow"
                id="cameo-identity"
              >
                <h2 className="font-serif text-2xl font-bold text-crimson-950 leading-tight w-min">
                  {selectedWoman.name}
                </h2>
                <div className="hidden flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 font-serif text-xs text-amber-900/85">
                  <p>
                    <strong>Origins:</strong> {selectedWoman.nationality}
                  </p>
                  <p>
                    <strong>Period:</strong> {selectedWoman.period}
                  </p>
                </div>
              </div>
            </div>

            {/* Middle: Biographical correspondence details */}
            <div className="space-y-4" id="cameo-body">
              <div className="space-y-1.5 text-justify" id="cameo-history">
                <span className="font-display text-[9px] font-bold text-crimson-900 tracking-wider uppercase block">
                  DESCRIPTION
                </span>
                <p className="text-xs md:text-sm text-amber-950/90 leading-relaxed">
                  {selectedWoman.description}
                </p>
              </div>

              <div
                className="p-3.5 hidden bg-crimson-50/40 border border-dashed border-crimson-800/25 rounded-xs space-y-1 text-justify"
                id="cameo-legacy"
              >
                <span className="font-display text-[8px] font-bold text-crimson-800 tracking-wider uppercase block">
                  HISTORICAL IMPRINT & LEGACY
                </span>
                <p className="font-serif italic text-xs leading-relaxed text-crimson-950">
                  {selectedWoman.legacy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
