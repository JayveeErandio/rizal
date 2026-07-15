/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ParchmentCard from "../ParchmentCard";

export default function TripsView() {
  const [activeStop, setActiveStop] = useState<string>("germany");

  const travelStops = {
    spain: {
      destination: "Madrid & Barcelona, Spain",
      years: "1882 – 1885",
      stampDate: "MAY 1882",
      shipName: "S.S. Salvadora & S.S. Djemnah",
      letterQuote: '"I spent my hours studying, writing, and attending the Circulo, seeking a voice for our voiceless land."',
      description: "Rizal secretly left Manila to escape clerical censorship. In Spain, he integrated into the 'Propaganda Movement', calling for equal representation, secularization, and civil liberties. He wrote his first patriotic essay, 'El Amor Patrio' (Love of Country), published in Manila.",
      achievements: [
        "Formed the Circulo Hispano-Filipino",
        "Wrote articles for the reformist organ La Solidaridad",
        "Delivered a famous, fiery toast (Brindis) honoring painters Juan Luna and Felix Resurreccion Hidalgo"
      ]
    },
    france: {
      destination: "Paris, France",
      years: "1885 – 1886",
      stampDate: "NOV 1885",
      shipName: "Continental Express Railway",
      letterQuote: '"Under Dr. De Wecker, I perform dozens of operations. The ocular sciences here are of supreme light."',
      description: "Rizal worked as an assistant in the clinic of Dr. Louis de Wecker, one of the leading ophthalmologists of Europe. In Paris, he perfected his clinical techniques, enabling him to successfully operate on his mother's cataracts upon returning.",
      achievements: [
        "Mastered advanced ophthalmic micro-surgery",
        "Socialized with the elite Luna brothers in local Parisian studios",
        "Began draft planning for his grand novel Noli Me Tangere"
      ]
    },
    germany: {
      destination: "Heidelberg & Berlin, Germany",
      years: "1886 – 1887",
      stampDate: "FEB 1886",
      shipName: "Rhine Steamship Corp",
      letterQuote: '"In Berlin, I lived on a single piece of stale bread a day. Yet, the printing of Noli was finally finished!"',
      description: "Rizal attended lectures at Heidelberg University and became a member of the prestigious Anthropological Society of Berlin. It was here that he suffered extreme poverty, starving while completing 'Noli Me Tangere', which was eventually printed with the help of Maximo Viola.",
      achievements: [
        "Composed the famous nostalgic poem 'A Las Flores de Heidelberg'",
        "Successfully printed 2,000 copies of Noli Me Tangere (March 1887)",
        "Earned the friendship and respect of European scientists like Rudolf Virchow"
      ]
    },
    japan: {
      destination: "Tokyo & Yokohama, Japan",
      years: "1888",
      stampDate: "FEB 1888",
      shipName: "S.S. Belgic",
      letterQuote: '"No one is lazy here. I have spent my days learning their art, theater, and the language of the Samurai."',
      description: "Deeply impressed by the neatness, politeness, and artistic mastery of the Japanese, Rizal traveled throughout Tokyo. He met Seiko Usui (O-Sei-San), a samurai's daughter, who served as his intellectual guide and language tutor. He was deeply tempted to stay.",
      achievements: [
        "Mastered conversational Japanese and traditional Sumi-e painting",
        "Conducted sociological studies comparing Japanese and Filipino labor",
        "Acted as a diplomatic guest at the Spanish Legation"
      ]
    },
    usa: {
      destination: "San Francisco, Chicago & New York, USA",
      years: "1888",
      stampDate: "APR 1888",
      shipName: "S.S. Belgic Transcontinental",
      letterQuote: '"The land of energy and wealth, yet they place barriers between races that make freedom a bitter word."',
      description: "Rizal crossed the United States from San Francisco to New York by train. He marveled at the country's physical beauty, gargantuan cities, industrial progress, and individual liberties. However, he was deeply saddened by the severe racial prejudice against Chinese and African Americans.",
      achievements: [
        "Documented a detailed diary of early American transcontinental travel",
        "Visited Oakland, Sacramento, Chicago, and the Niagara Falls",
        "Identified the United States as a future global power with deep social contradictions"
      ]
    },
    uk: {
      destination: "London, United Kingdom",
      years: "1888 – 1889",
      stampDate: "MAY 1888",
      shipName: "S.S. City of Rome",
      letterQuote: '"I am buried in the British Museum, rewriting our history. We were a great people before Spain arrived."',
      description: "To disprove the Spanish claim that Filipinos had no culture before colonial conquest, Rizal spent months in the British Museum. He transcribed and annotated Antonio de Morga’s rare 1609 book, <em>Sucesos de las Islas Filipinas</em>, proving Filipinos had high trade, industry, and writing systems prior to colonization.",
      achievements: [
        "Hand-transcribed and fully annotated Morga's historical encyclopedia",
        "Exposed historical fabrications of Spanish friars",
        "Elected President of the Asociacion La Solidaridad"
      ]
    }
  };

  return (
    <div className="space-y-12 animate-fade-in" id="trips-view-container">
      <div className="text-center space-y-2">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.2em] block uppercase">
          CHAMBER V • THE GLOBE-TROTTING ARCHIVIST
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          Rizal’s Trips Abroad
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "A diplomatic wanderer across Europe and the Orient, carrying the grievances of his nation to the centers of modern science."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="trips-grid">
        {/* Left: Classic Stamp Catalogue Navigation */}
        <div className="lg:col-span-5 space-y-4" id="trips-catalogue">
          <span className="font-display text-[9px] text-amber-900/50 tracking-widest uppercase font-bold block px-2">
            Select Passport Stamps
          </span>

          <div className="grid grid-cols-2 gap-3" id="stamps-grid-container">
            {Object.keys(travelStops).map((key) => {
              const stop = travelStops[key as keyof typeof travelStops];
              const isSelected = activeStop === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveStop(key)}
                  className={`p-4 rounded-xs border text-left cursor-pointer relative overflow-hidden transition-all duration-300 ${isSelected ? "bg-crimson-950 text-gold-100 border-gold-400 scale-[1.03] shadow-md" : "bg-faf6ee text-amber-950 border-gold-300/40 hover:bg-gold-100/30"}`}
                  id={`stamp-${key}`}
                >
                  {/* Subtle retro postmark circular silhouette background */}
                  <div className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-full border-2 border-dashed ${isSelected ? "border-gold-400/20" : "border-gold-600/10"} pointer-events-none`} />

                  <span className={`font-mono text-[8px] font-bold tracking-widest block uppercase ${isSelected ? "text-gold-400" : "text-crimson-800"}`}>
                    {stop.stampDate}
                  </span>
                  <h3 className="font-serif font-extrabold text-[12px] md:text-[13px] leading-tight mt-1">
                    {stop.destination.split(",")[0]}
                  </h3>
                  <p className={`text-[10px] font-serif italic mt-0.5 ${isSelected ? "text-gold-200/80" : "text-amber-950/60"}`}>
                    {stop.years}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="p-4 bg-gold-50/40 border border-dashed border-gold-600/20 rounded-xs text-[11px] text-amber-950/70 text-center italic leading-relaxed">
            "We travel not to see different lands, but to see different minds; not to change countries, but to return with a wider heart."
          </div>
        </div>

        {/* Right: Detailed Passport Stamp / Postcard Viewer */}
        <div className="lg:col-span-7" id="trips-postcard-viewer">
          <div className="parchment-card p-6 md:p-8 rounded-sm border-2 border-double border-gold-500 relative overflow-hidden flex flex-col justify-between min-h-[440px]" id="postcard-container">
            <div className="absolute inset-2 border border-dashed border-gold-600/15 rounded-xs pointer-events-none" />

            {/* Postcard Top Layout (Stamps) */}
            <div className="flex justify-between items-start border-b border-gold-300/30 pb-4 mb-4" id="postcard-top">
              <div className="space-y-1" id="postcard-meta">
                <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200 rounded-sm inline-block uppercase">
                  OFFICIAL LOG
                </span>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-crimson-950 leading-tight">
                  {travelStops[activeStop as keyof typeof travelStops].destination}
                </h2>
                <p className="font-serif text-xs italic text-gold-800">
                  Transatlantic Carrier: {travelStops[activeStop as keyof typeof travelStops].shipName}
                </p>
              </div>

              {/* Virtual Ink Stamp */}
              <div className="flex-shrink-0 w-16 h-16 border-2 border-dashed border-crimson-800 rounded-full flex flex-col items-center justify-center rotate-6 select-none" id="postcard-stamp-badge">
                <span className="font-mono text-[7px] text-crimson-800 leading-none">POSTMARKED</span>
                <span className="font-mono text-[8px] font-bold text-crimson-800 mt-0.5">{travelStops[activeStop as keyof typeof travelStops].stampDate}</span>
                <span className="font-mono text-[6px] text-crimson-800 mt-0.5">VIA GIBRALTAR</span>
              </div>
            </div>

            {/* Postcard Body (Letter / Achievements) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start" id="postcard-body">
              {/* Hand-written letter section */}
              <div className="md:col-span-6 bg-gold-50/50 p-4 border border-dashed border-gold-600/20 rounded-xs space-y-2" id="postcard-letter">
                <span className="font-display text-[8px] font-bold text-gold-700 tracking-wider uppercase block">
                  LETTER FROM THE ARCHIVE
                </span>
                <p className="font-serif italic text-xs leading-relaxed text-crimson-950">
                  {travelStops[activeStop as keyof typeof travelStops].letterQuote}
                </p>
              </div>

              {/* Achievements */}
              <div className="md:col-span-6 space-y-3 text-xs text-amber-950/90 text-justify" id="postcard-accomplishments">
                <span className="font-display text-[9px] font-bold text-crimson-900 tracking-wider uppercase block border-b border-gold-600/15 pb-0.5">
                  MAJOR HISTORICAL ACHIEVEMENTS
                </span>
                <ul className="space-y-2 list-decimal list-inside pl-1 leading-relaxed">
                  {travelStops[activeStop as keyof typeof travelStops].achievements.map((a, index) => (
                    <li key={index} className="font-serif font-medium">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* General historical description */}
            <div className="mt-6 pt-4 border-t border-gold-300/20 text-xs text-amber-950/80 text-justify" id="postcard-summary">
              <span className="font-display text-[9px] font-bold text-crimson-900 tracking-wider uppercase block mb-1">
                HISTORIAN CONTEXT NOTE
              </span>
              <p className="leading-relaxed">
                {travelStops[activeStop as keyof typeof travelStops].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
