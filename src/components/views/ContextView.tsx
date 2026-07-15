/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ParchmentCard from "../ParchmentCard";

export default function ContextView() {
  const [activeStratum, setActiveStratum] = useState<string>("indio");

  const socialStrata = {
    peninsulares: {
      title: "Peninsulares",
      subtitle: "Pure-blooded Spaniards born in Spain",
      privileges: "Held the highest offices in administration, church, and military. Exempt from tribute and forced labor.",
      politicalInfluence: "Absolute authority. Dominated the Real Audiencia (Supreme Court) and clerical archdioceses.",
      historicalQuote: '"They looked upon the colony as a gold mine to be exploited, and the natives as subhuman servants."'
    },
    insulares: {
      title: "Insulares (Creoles)",
      subtitle: "Pure-blooded Spaniards born in the Philippines",
      privileges: "Enjoyed high social rank, owned large agricultural land, and dominated local businesses.",
      politicalInfluence: "Moderate authority. Held lower governor positions and secondary military ranks; envied the Peninsulares' supreme status.",
      historicalQuote: '"They are Spanish in blood, but colonial in heart, stuck in a political purgatory."'
    },
    mestizos: {
      title: "Mestizos (Spanish & Chinese)",
      subtitle: "People of mixed native and Spanish or Chinese ancestry",
      privileges: "Dominant mercantile class, managed trade, highly educated (Ilustrados), fluent in Spanish.",
      politicalInfluence: "Rising financial power, but politically marginalized by pure Spaniards. Formed the intellectual nucleus of reform.",
      historicalQuote: '"By combining local resilience with Chinese commercial wits, they became the cashbox of Manila."'
    },
    indios: {
      title: "Indios (Native Filipinos)",
      subtitle: "The indigenous Austronesian masses",
      privileges: "Exempt from nothing. Subjected to heavy taxes, Polo y Servicios (40 days of annual forced labor), and extreme social abuse.",
      politicalInfluence: "Zero political representation. Governed through fear and local friar surveillance.",
      historicalQuote: '"The true tillers of the soil, labeled ignorant, yet they carried the entire weight of the colony on their backs."'
    }
  };

  return (
    <div className="space-y-12 animate-fade-in" id="context-view-container">
      {/* Header Banner Image */}
      <div className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden shadow-xl border border-gold-600/30" id="context-header-banner">
        <img
          src="/src/assets/images/vintage_manuscript_1784103466363.jpg"
          alt="19th Century scholar desk"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter sepia-[25%] brightness-[85%]"
          id="context-banner-image"
        />
        {/* Elegant overlay text */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold-950 via-gold-950/40 to-transparent flex flex-col justify-end p-6 md:p-8" id="context-banner-overlay">
          <span className="font-display text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">
            SECTION I • THE CRADLE OF COLONIALISM
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-gold-100 tracking-tight">
            19th-Century Context & The Rizal Law
          </h1>
          <p className="font-serif italic text-xs md:text-sm text-gold-300/80 mt-1">
            Examing the socio-political conditions of Spanish Manila and the legal mandate of memory.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="context-content-grid">
        {/* Left Column: 19th Century Spanish Empire and the Pyramid */}
        <div className="lg:col-span-7 space-y-6" id="society-column">
          <div className="space-y-2">
            <span className="font-display text-gold-600 text-xs font-bold tracking-widest block uppercase">
              Colonial Stratification
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950">
              The Gilded Misery: Spanish Feudalism
            </h2>
            <div className="w-12 h-0.5 bg-crimson-700" />
          </div>

          <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
            During the 19th century, Spain was a declining empire plagued by domestic civil war and political instability. In the Philippine colony, this manifested as corrupt, arbitrary governance overseen by the local Catholic Friars—the <strong>Frailocracia</strong>. While physical trade boomed due to the opening of the Suez Canal, social conditions deteriorated. Native Filipinos were treated as subhuman under a strict, race-based caste system.
          </p>

          {/* Interactive Strata Pyramid */}
          <div className="p-6 bg-gold-50/40 border border-gold-300/35 rounded-sm space-y-6" id="strata-pyramid-container">
            <h3 className="font-serif text-base font-bold text-crimson-900 text-center uppercase tracking-wide">
              The Philippine Colonial Caste Pyramid
            </h3>
            <p className="text-xs text-center text-amber-900/70 italic mt-0">
              (Click a segment of the pyramid to inspect historical records)
            </p>

            {/* Pyramid visual graphic */}
            <div className="max-w-md mx-auto flex flex-col items-center space-y-1.5" id="pyramid-graphic">
              {/* Peninsulares */}
              <button
                onClick={() => setActiveStratum("peninsulares")}
                className={`w-1/3 py-2 text-[10px] md:text-xs font-display font-bold tracking-wider rounded-t-sm border transition-all duration-300 ${activeStratum === "peninsulares" ? "bg-crimson-850 text-gold-100 border-gold-400 scale-105 shadow-md" : "bg-faf6ee text-crimson-950 border-gold-300/50 hover:bg-gold-100/50"}`}
                id="pyramid-peninsulares"
              >
                Peninsulares
              </button>
              {/* Insulares */}
              <button
                onClick={() => setActiveStratum("insulares")}
                className={`w-1/2 py-2 text-[10px] md:text-xs font-display font-bold tracking-wider border transition-all duration-300 ${activeStratum === "insulares" ? "bg-crimson-850 text-gold-100 border-gold-400 scale-105 shadow-md" : "bg-faf6ee text-crimson-950 border-gold-300/50 hover:bg-gold-100/50"}`}
                id="pyramid-insulares"
              >
                Insulares
              </button>
              {/* Mestizos */}
              <button
                onClick={() => setActiveStratum("mestizos")}
                className={`w-3/4 py-2 text-[10px] md:text-xs font-display font-bold tracking-wider border transition-all duration-300 ${activeStratum === "mestizos" ? "bg-crimson-850 text-gold-100 border-gold-400 scale-105 shadow-md" : "bg-faf6ee text-crimson-950 border-gold-300/50 hover:bg-gold-100/50"}`}
                id="pyramid-mestizos"
              >
                Mestizos
              </button>
              {/* Indios */}
              <button
                onClick={() => setActiveStratum("indio")}
                className={`w-full py-2 text-[10px] md:text-xs font-display font-bold tracking-wider rounded-b-sm border transition-all duration-300 ${activeStratum === "indio" ? "bg-crimson-850 text-gold-100 border-gold-400 scale-105 shadow-md" : "bg-faf6ee text-crimson-950 border-gold-300/50 hover:bg-gold-100/50"}`}
                id="pyramid-indio"
              >
                Indios (The Masses)
              </button>
            </div>

            {/* Selected Stratum Data Panel */}
            <div className="p-4 bg-faf6ee border border-dashed border-gold-600/25 rounded-xs space-y-2 text-sm" id="stratum-panel">
              <div className="flex justify-between items-center border-b border-gold-300/30 pb-1">
                <span className="font-serif text-base font-bold text-crimson-900">
                  {socialStrata[activeStratum as keyof typeof socialStrata].title}
                </span>
                <span className="font-mono text-[9px] text-gold-800">
                  Caste Classification
                </span>
              </div>
              <p className="font-serif text-xs italic text-gold-800">
                {socialStrata[activeStratum as keyof typeof socialStrata].subtitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                <div>
                  <span className="font-bold text-[10px] text-crimson-950 uppercase tracking-wider block">Privileges & Taxes:</span>
                  <p className="text-amber-950/80 mt-1">{socialStrata[activeStratum as keyof typeof socialStrata].privileges}</p>
                </div>
                <div>
                  <span className="font-bold text-[10px] text-crimson-950 uppercase tracking-wider block">Political Authority:</span>
                  <p className="text-amber-950/80 mt-1">{socialStrata[activeStratum as keyof typeof socialStrata].politicalInfluence}</p>
                </div>
              </div>
              <p className="font-serif italic text-xs text-crimson-800/80 pt-2 border-t border-gold-300/10 text-center">
                {socialStrata[activeStratum as keyof typeof socialStrata].historicalQuote}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: RA 1425 The Rizal Law */}
        <div className="lg:col-span-5" id="law-column">
          <ParchmentCard title="Republic Act 1425" subtitle="The Mandate of Remembrance" headerBadge="THE RIZAL LAW" doubleBorder ornament>
            <div className="space-y-4 text-xs md:text-sm text-amber-950/90">
              <div className="text-center py-2 border-y border-gold-300/30 font-display text-[10px] font-bold text-gold-800 uppercase tracking-widest my-2">
                Enacted: June 12, 1956
              </div>

              <p className="text-justify leading-relaxed">
                Authored by Senator Claro M. Recto and signed into law by President Ramon Magsaysay, <strong>Republic Act No. 1425</strong> remains one of the most controversial educational mandates in Philippine history.
              </p>

              <h4 className="font-serif font-bold text-sm text-crimson-950 mt-4">The Clashing Factions:</h4>
              <p className="text-justify leading-relaxed">
                The Catholic Church and sectarian groups fiercely opposed the bill. They argued that Rizal’s novels, <em>Noli Me Tangere</em> and <em>El Filibusterismo</em>, contained severe anti-clerical passages that would ruin the faith of Catholic students. Recto countered that the objective was not to attack the church, but to awaken a sleeping national spirit.
              </p>

              <h4 className="font-serif font-bold text-sm text-crimson-950 mt-4">Primary Objectives:</h4>
              <ul className="list-disc list-inside space-y-1 pl-2 text-justify">
                <li>To rededicate the lives of the youth to the ideals of freedom and nationalism.</li>
                <li>To pay tribute to our national hero for shaping the Filipino character.</li>
                <li>To gain inspiring sources of patriotism through the study of his literature.</li>
              </ul>

              {/* Legal Certificate Decoration block */}
              <div className="p-3 border border-double border-gold-500 bg-gold-50/50 rounded-xs text-[10px] font-mono text-center text-gold-800/80 italic mt-6">
                "An Act to include in the curricula of all public and private schools, colleges and universities courses on the Life, Works and Writings of JOSE RIZAL..."
              </div>
            </div>
          </ParchmentCard>
        </div>
      </div>
    </div>
  );
}
