/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { familyMembers } from "../../data";
import { FamilyMember } from "../../types";
import ParchmentCard from "../ParchmentCard";

export default function FamilyView() {
  const [selectedMember, setSelectedMember] = useState<FamilyMember>(familyMembers[0]);

  return (
    <div className="space-y-12 animate-fade-in" id="family-view-container">
      <div className="text-center space-y-2">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.2em] block uppercase">
          CHAMBER II • THE PRINCIPALIA OF CALAMBA
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          Family History & Background
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "A noble household rooted in agriculture, letters, and courageous service, whose bloodlines nurtured the mind of a martyr."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      {/* Historical Origin of the Rizal Name */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="family-history-narrative">
        <div className="lg:col-span-7 space-y-5" id="origin-explanation">
          <div className="space-y-2">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-crimson-900">
              The Surname 'Rizal' : From Green Fields
            </h2>
            <div className="w-12 h-0.5 bg-gold-500" />
          </div>

          <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
            The original family name of Rizal was <strong>Mercado</strong>, meaning "market," adopted in 1731 by José's great-grandfather, Domingo Lam-co, a Chinese immigrant who settled in Biñan. In 1849, Governor-General Narciso Clavería issued a decree requiring all natives to adopt Spanish surnames from a catalog (the <em>Catálogo alfabético de apellidos</em>) for tax and census purposes.
          </p>

          <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
            José's father, Francisco Mercado, registered the secondary surname <strong>Rizal</strong> (derived from "ricial," meaning "green field suitable for harvesting"). Although the government approved it, the family rarely used it initially, remaining "Mercado" to local merchants.
          </p>

          <div className="p-4 bg-crimson-50/50 border-l-4 border-crimson-800 rounded-r-sm space-y-1" id="origin-incidental">
            <h4 className="font-display font-bold text-[10px] text-crimson-950 uppercase tracking-widest">
              A Shield from Suspicion
            </h4>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              When the Gomburza priests were executed in 1872, José's elder brother Paciano was a prominent associate of Father Jose Burgos. To prevent young José from being linked to the "subversive" family name Mercado, Paciano instructed his younger brother to use the sole surname <strong>Rizal</strong> when registering at Ateneo Municipal. José Rizal was the very first of his family to use this name exclusively.
            </p>
          </div>
        </div>

        {/* Stone House Card (Principalia Status) */}
        <div className="lg:col-span-5" id="principalia-status-card">
          <ParchmentCard title="The Calamba Manor" subtitle="A Symbol of Principalia Stature" headerBadge="THE CALAMBA HOUSE" doubleBorder ornament={false}>
            <div className="space-y-3 text-xs md:text-sm text-amber-950/90 leading-relaxed">
              <p>
                The Rizal family belonged to the <strong>Principalia</strong>—the wealthy, educated, land-owning middle class in Spanish-era towns. They lived in a large, double-story stone house (<em>Bahay na Bato</em>) beside the Calamba church.
              </p>
              <p>
                This manor featured a red-tiled roof, solid hardwood posts of ipil, and windows made of polished Capiz shells. They owned a carriage, a private library of over 1,000 volumes (a grand luxury at the time), and sent all eleven children to prestigious colleges in Manila and Europe.
              </p>
            </div>
          </ParchmentCard>
        </div>
      </div>

      {/* Interactive Family Portrait Album */}
      <div className="space-y-6 pt-6 border-t border-gold-300/30" id="album-section">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-crimson-950">
            The Family Album
          </h2>
          <p className="text-xs text-amber-900/75 italic mt-1">
            Select a family member to inspect their historical profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start" id="album-interactive-grid">
          {/* Left: Interactive List / Grid */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin" id="album-list">
            {familyMembers.map((member) => {
              const isSelected = selectedMember.name === member.name;
              return (
                <button
                  key={member.name}
                  onClick={() => setSelectedMember(member)}
                  className={`p-3 rounded-sm border text-left transition-all duration-200 cursor-pointer ${isSelected ? "bg-crimson-850 text-gold-100 border-gold-500 scale-[1.02] shadow-md" : "bg-faf6ee text-amber-950 border-gold-300/40 hover:bg-gold-100/30"}`}
                  id={`family-btn-${member.name.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <span className="font-display font-bold text-[10px] tracking-wide block leading-tight">
                    {member.name.split(" ")[0]}
                  </span>
                  <span className={`text-[9px] font-serif italic block mt-0.5 ${isSelected ? "text-gold-200" : "text-amber-900/60"}`}>
                    {member.relation}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Member Portrait card */}
          <div className="md:col-span-7" id="album-detail-card">
            <div className="parchment-card p-6 md:p-8 rounded-sm border border-gold-400 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center md:items-start" id="album-detail-inner">
              <div className="absolute inset-2 border border-dashed border-gold-600/15 rounded-xs pointer-events-none" />

              {/* Gilded Portrait Frame Silhouette */}
              <div className="flex-shrink-0 w-28 h-28 rounded-full border-4 border-double border-gold-500 bg-gold-950 flex items-center justify-center relative p-1 shadow-md" id="daguerreotype-silhouette">
                <div className="absolute inset-0.5 rounded-full border border-gold-300/30 pointer-events-none" />
                <span className="font-serif text-3xl font-bold text-gold-400 select-none">
                  {selectedMember.name.charAt(0)}
                </span>
              </div>

              {/* Bio details */}
              <div className="space-y-3 text-center md:text-left flex-grow z-10" id="album-text-content">
                <div className="border-b border-gold-300/30 pb-2">
                  <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2 py-0.5 border border-crimson-200/50 rounded-sm inline-block">
                    {selectedMember.relation}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-crimson-950 mt-1">
                    {selectedMember.name}
                  </h3>
                  <p className="font-mono text-[10px] text-gold-700/80 tracking-widest uppercase mt-0.5">
                    {selectedMember.lifeDates}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                  {selectedMember.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
