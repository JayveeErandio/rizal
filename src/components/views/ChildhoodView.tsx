/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ParchmentCard from "../ParchmentCard";

export default function ChildhoodView() {
  const [candleIntensity, setCandleIntensity] = useState<number>(65);

  // Translate intensity (0 - 100) to styles
  const textShadowValue = `0 0 ${candleIntensity / 4}px rgba(212, 175, 55, ${candleIntensity / 100})`;
  const cardBackground = `rgba(250, 245, 235, ${0.85 + (candleIntensity / 1000)})`;
  const sepiaFilter = `sepia(${25 + (candleIntensity / 2)}%)`;

  return (
    <div className="space-y-12 animate-fade-in" id="childhood-view-container">
      <div className="text-center space-y-2">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.2em] block uppercase">
          CHAMBER III • THE BOY OF LAGUNA
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          Rizal’s Childhood
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "Beside the tranquil lake of Bay, a frail child dreamed in clay and verses, warned of the fires of truth."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="childhood-content-grid">
        {/* Left Column: Interactive Story of the Moth with Candlelight Slider */}
        <div className="lg:col-span-7 space-y-6" id="moth-story-interactive">
          <div className="space-y-2">
            <span className="font-display text-gold-600 text-xs font-bold tracking-widest block uppercase">
              The First Lesson
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-crimson-900">
              The Fable of the Young Moth
            </h2>
            <div className="w-12 h-0.5 bg-gold-500" />
          </div>

          <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
            One quiet night in Calamba, young José was watching a small moth circle the coconut-oil lamp on their table. His mother, Doña Teodora, noticed his distraction and read him a story in Spanish about a mother moth warning her child not to fly too close to the flame.
          </p>

          {/* Interactive Candlelight Reading Panel */}
          <div className="p-6 border border-gold-400 rounded-sm space-y-6 relative overflow-hidden transition-all duration-300" 
               style={{ 
                 backgroundColor: cardBackground,
                 filter: sepiaFilter,
                 borderColor: `rgba(212, 175, 55, ${0.2 + (candleIntensity / 150)})`
               }} 
               id="fable-box"
          >
            {/* Candle SVG that flickers according to slider */}
            <div className="absolute top-4 right-4 flex flex-col items-center select-none" id="candle-graphic">
              <svg className="w-8 h-12" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Candle Stick */}
                <rect x="16" y="25" width="8" height="35" rx="1" fill="#E7DFCC" stroke="#801D32" strokeWidth="0.5" />
                {/* Wick */}
                <line x1="20" y1="25" x2="20" y2="15" stroke="#1A120B" strokeWidth="1" />
                {/* Flame */}
                <path
                  d="M 20 15 C 24 10 24 0 20 -2 C 16 0 16 10 20 15 Z"
                  fill="#D4AF37"
                  className="animate-pulse"
                  style={{
                    transform: `scale(${0.5 + candleIntensity / 100})`,
                    transformOrigin: "20px 15px",
                    filter: `drop-shadow(0 0 ${candleIntensity / 25}px #CF4763)`
                  }}
                />
              </svg>
              <span className="font-mono text-[7px] text-amber-950/60 mt-1 uppercase">LUMEN</span>
            </div>

            {/* Fable Text */}
            <div className="space-y-4 max-w-md pr-10 text-justify" id="fable-reading-text">
              <span className="font-display text-[9px] text-crimson-800 tracking-widest font-bold uppercase block">
                Doña Teodora’s Retelling
              </span>
              <p className="font-serif italic text-xs md:text-sm text-crimson-950 leading-relaxed" style={{ textShadow: textShadowValue }}>
                "The little moth was fascinated by the brilliant light. 'How beautiful!' it thought, ignoring its mother’s soft voice warning that the fire would burn its wings. Lured by the golden warmth, it flew closer and closer until, in one sudden flash, its fragile wings caught fire, and it fell lifeless into the oil."
              </p>
              <p className="text-xs text-amber-950/90 leading-relaxed font-sans">
                As Doña Teodora closed the book, she told José: <strong>"Do not behave like the young moth. Do not chase attractive fires of intellectual rebellion, or you may perish."</strong> Yet, looking back, Rizal wrote that he did not see the story as a warning of fear, but rather as a beautiful tragedy. He realized that to die for a beautiful light is a noble fate.
              </p>
            </div>

            {/* Slider Control */}
            <div className="pt-4 border-t border-gold-600/10 flex items-center justify-between gap-4" id="slider-control-box">
              <label htmlFor="candle-slider" className="font-mono text-[9px] text-amber-950/70 tracking-wider uppercase flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
                Candlelight Glow: {candleIntensity}%
              </label>
              <input
                id="candle-slider"
                type="range"
                min="10"
                max="100"
                value={candleIntensity}
                onChange={(e) => setCandleIntensity(Number(e.target.value))}
                className="w-1/2 accent-crimson-850 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Childhood Accomplishments and Trial */}
        <div className="lg:col-span-5 space-y-6" id="childhood-details-column">
          {/* Creative Accomplishments */}
          <ParchmentCard title="The Budding Artist" subtitle="Sketches and Mud Sculptures" headerBadge="EARLY TALENTS" doubleBorder ornament={false}>
            <div className="space-y-3 text-xs md:text-sm text-amber-950/90 leading-relaxed">
              <p>
                From age five, Rizal used charcoal and sap from garden plants to sketch on paper. He modeled delicate clay figurines of animals, mythical guardians, and busts of Calamba residents.
              </p>
              <p>
                Once, when his sisters teased him because he spent all day playing with clay, he told them: <strong>"Tease me now, but when I die, the world will make statues of me."</strong>
              </p>
              <p>
                At eight years old, he penned the famous poem <em>"Sa Aking Mga Kabata"</em> (To My Fellow Youth), declaring that a nation that loves its native tongue is like a bird soaring to the skies.
              </p>
            </div>
          </ParchmentCard>

          {/* Sisa's Sorrow - First Childhood Trauma */}
          <div className="p-5 border border-dashed border-crimson-800/30 bg-crimson-50/20 rounded-sm space-y-3" id="first-sorrow-box">
            <div className="flex items-center gap-2 text-crimson-900 font-serif font-bold text-sm">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M16 14s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              Childhood Trials & Tears
            </div>
            <p className="text-xs text-amber-950/85 leading-relaxed text-justify">
              Rizal's peaceful childhood ended when he was ten. His mother, Doña Teodora, was falsely accused of complicity in poisoning her brother's unfaithful wife. The Spanish lieutenant forced her to walk <strong>50 kilometers on foot</strong> across Laguna to the provincial jail, where she was imprisoned for over two years before being fully acquitted. This event deeply scarred the young José.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
