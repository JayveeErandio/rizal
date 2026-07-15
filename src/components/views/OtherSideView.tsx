/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { masterpieces } from "../../data";
import { Masterpiece } from "../../types";
import ParchmentCard from "../ParchmentCard";

export default function OtherSideView() {
  const [selectedMasterpiece, setSelectedMasterpiece] = useState<Masterpiece>(masterpieces[0]);

  return (
    <div className="space-y-12 animate-fade-in" id="otherside-view-container">
      {/* Header Banner - Dapitan Exile */}
      <div className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden shadow-xl border border-gold-600/30" id="otherside-header-banner">
        <img
          src="/src/assets/images/dapitan_exile_1784103480107.jpg"
          alt="Dapitan Exile, Coastal cottage scenery"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter sepia-[15%] brightness-[85%]"
          id="otherside-banner-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gold-950 via-gold-950/40 to-transparent flex flex-col justify-end p-6 md:p-8" id="otherside-banner-overlay">
          <span className="font-display text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">
            SECTION II • THE POLYMATH OF DAPITAN
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-gold-100 tracking-tight">
            The Other Side of Rizal
          </h1>
          <p className="font-serif italic text-xs md:text-sm text-gold-300/80 mt-1">
            Exploring his works as a scientist, composer, sculptor, and civic engineer during exile.
          </p>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="otherside-introduction">
        <div className="lg:col-span-7 space-y-5" id="polymath-narrative">
          <div className="space-y-2">
            <span className="font-display text-gold-600 text-xs font-bold tracking-widest block uppercase">
              The Polymath Concept
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950">
              A Renaissance Mind in the Orient
            </h2>
            <div className="w-12 h-0.5 bg-crimson-700" />
          </div>

          <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
            What separates José Rizal from standard national revolutionaries is the shear depth of his polymathic genius. Exile in Dapitan from 1892 to 1896, intended to stifle his revolutionary voice, instead became his greatest testing ground.
          </p>
          <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
            Rather than wallowing in isolation, he established a clinic, conducted advanced botanical research, sculpted, painted, composed, founded a school for local boys, and engineered a municipal water pipeline. He demonstrated that civic development and scientific education are the true pillars of national self-determination.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2" id="otherside-summary-cards">
            <div className="p-4 border border-gold-300/30 bg-faf6ee rounded-xs space-y-1">
              <span className="font-display text-[9px] font-bold text-crimson-900 block uppercase">AS A TEACHER</span>
              <p className="text-xs text-amber-950/75 leading-relaxed">
                Rizal taught local boys English, Spanish, geometry, algebra, and vocational carpentry without tuition, asking only that they work in his agricultural gardens.
              </p>
            </div>
            <div className="p-4 border border-gold-300/30 bg-faf6ee rounded-xs space-y-1">
              <span className="font-display text-[9px] font-bold text-crimson-900 block uppercase">AS AN ENGINEER</span>
              <p className="text-xs text-amber-950/75 leading-relaxed">
                Rizal designed and created a gravity-fed water line utilizing hollow bamboo and clay to filter mountain spring water, eliminating cholera from the coastal settlement.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts Sidebar */}
        <div className="lg:col-span-5" id="otherside-quote-card">
          <ParchmentCard title="The Triumph of Reason" subtitle="Scientific Renaissance" headerBadge="MUSEUM SUMMARY" doubleBorder ornament={false}>
            <div className="space-y-3 text-xs md:text-sm text-amber-950/90 leading-relaxed">
              <p className="font-serif italic text-crimson-950">
                "Science is the only true light. It exposes the shadows of superstition, breaks the chains of blind dogmatism, and restores the sovereign dignity of humanity."
              </p>
              <p>
                Rizal corresponded with top European minds like Professor Ferdinand Blumentritt, Rudolf Virchow, and Adolf Meyer, sending them detailed botanical and geological samples. This proved that native Filipino intelligence was equal to any in Europe.
              </p>
            </div>
          </ParchmentCard>
        </div>
      </div>

      {/* Interactive Masterpieces Catalogue with Wireframe Placeholders */}
      <div className="space-y-6 pt-6 border-t border-gold-300/30" id="masterpieces-exhibition">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-crimson-950">
            Compendium of Masterpieces
          </h2>
          <p className="text-xs text-amber-900/75 italic mt-1">
            Inspect the visual blueprint and wireframe schematic of Rizal’s non-literary creations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start" id="masterpieces-grid">
          {/* Left: Masterpiece Selector Buttons */}
          <div className="md:col-span-4 flex flex-col gap-2.5" id="masterpiece-buttons">
            {masterpieces.map((m) => {
              const isSelected = selectedMasterpiece.title === m.title;
              return (
                <button
                  key={m.title}
                  onClick={() => setSelectedMasterpiece(m)}
                  className={`p-4 rounded-xs border text-left cursor-pointer transition-all duration-300 ${isSelected ? "bg-crimson-950 text-gold-100 border-gold-500 scale-[1.01] shadow-md" : "bg-faf6ee text-amber-950 border-gold-300/40 hover:bg-gold-100/30"}`}
                  id={`master-btn-${m.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <span className="font-mono text-[8px] font-bold tracking-widest text-gold-500 uppercase block">
                    {m.category} • Year {m.year}
                  </span>
                  <h3 className="font-serif font-extrabold text-[12px] md:text-[13px] leading-tight mt-1.5">
                    {m.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right: Masterpiece Visual Wireframe Panel & Description */}
          <div className="md:col-span-8" id="masterpiece-detail-viewer">
            <div className="parchment-card p-6 md:p-8 rounded-sm border border-gold-400 relative overflow-hidden space-y-6" id="masterpiece-card-inner">
              <div className="absolute inset-2 border border-dashed border-gold-600/15 rounded-xs pointer-events-none" />

              {/* Wireframe Graphic Placeholder requested by User */}
              <div className="border border-double border-gold-500 bg-gold-50/40 p-4 rounded-xs relative flex flex-col items-center justify-center min-h-[180px]" id="wireframe-graphic-container">
                {/* Blueprint watermark lines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                <div className="absolute top-2 left-2 font-mono text-[7px] text-gold-700/60 uppercase">WIREFRAME SCHEMATIC • {selectedMasterpiece.category}</div>
                <div className="absolute bottom-2 right-2 font-mono text-[7px] text-gold-700/60 uppercase">REFERENCE NO: RZL-{selectedMasterpiece.year}</div>

                <div className="text-center max-w-md p-4 relative z-10 space-y-3" id="wireframe-text">
                  <span className="inline-block p-2 rounded-full bg-crimson-50 text-crimson-850" id="wireframe-icon">
                    {selectedMasterpiece.category === "Art" && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.18 2.398a1.125 1.125 0 001.941.645l2.42-2.42M13.75 3h.008v.008h-.008V3zm0 3h.008v.008h-.008V6zm0 3h.008v.008h-.008V9m0 6h.008v.008h-.008V15m0 3h.008v.008h-.008V18zm3-12h.008v.008h-.008V6zm0 3h.008v.008h-.008V9m0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008V15m-9-6h.008v.008h-.008V9m0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008V15m-3-6h.008v.008h-.008V9m0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008V15" /></svg>
                    )}
                    {selectedMasterpiece.category === "Music" && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 0v15m0-15l-10.5 3m0 0v15m0-15l10.5-3m-10.5 3l10.5-3" /></svg>
                    )}
                    {selectedMasterpiece.category === "Science" && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    )}
                    {selectedMasterpiece.category === "Education" && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.003 9.003 0 008.354-5.646 9.003 9.003 0 00-11.232-11.232 9.003 9.003 0 00-5.646 8.354A9 9 0 0012 21z" /></svg>
                    )}
                  </span>
                  <p className="font-serif italic text-xs font-medium text-crimson-900">
                    {selectedMasterpiece.mediaPlaceholder}
                  </p>
                </div>
              </div>

              {/* Masterpiece Description Text */}
              <div className="space-y-2" id="masterpiece-meta-panel">
                <div className="flex justify-between items-baseline border-b border-gold-300/30 pb-1">
                  <span className="font-serif text-xl font-bold text-crimson-950">
                    {selectedMasterpiece.title}
                  </span>
                  <span className="font-mono text-[9px] text-gold-700 font-bold uppercase">
                    CREATION DATE: {selectedMasterpiece.year}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                  {selectedMasterpiece.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
