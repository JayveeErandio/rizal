import React, { useState } from "react";
import { womenList, familyMembers } from "../../data";
import { WomenInLife, FamilyMember } from "../../types";

const getFamilyMemberLegacy = (name: string): string => {
  switch (name) {
    case "Teodora Alonso Realonda":
      return "The First Teacher & Moral Foundation — Cultivated his early genius, taught him to stand for truth, and read him the fable of the young moth.";
    case "Saturnina Rizal":
      return "The Loyal Overseas Correspondent — Maintained active, affectionate communications with José throughout his decade-long European travels.";
    case "Narcisa Rizal":
      return "The Memory Keeper & Philanthropist — Sold her personal jewelry to finance José's medical studies and was famous for memorizing his entire body of poetry.";
    case "Olympia Rizal":
      return "The Lighthearted Confidante — His closest sister during early youth, who kept his spirits high through humorous household accounts and light teasing.";
    case "Lucia Rizal":
      return "The Martyr of Clerical Oppression — Suffered deeply when her husband Mariano Herbosa was denied Christian burial due to his relation to Rizal, fueling his anti-clerical activism.";
    case "Maria Rizal":
      return "The Sisterly Counsel — The trusted companion with whom José shared his deepest romantic aspirations and his ultimate decision to wed Josephine Bracken.";
    case "Concepcion Rizal":
      return "The Beloved Childhood Angel — Her tragic passing at the age of three was José's very first sorrow, which first opened his eyes to the fragile nature of life.";
    case "Josefa Rizal":
      return "The President of the Katipunan Women's Chapter — A brave patriot who safeguarded revolutionary formulas and secret codes from colonial search parties.";
    case "Trinidad Rizal":
      return "The Custodian of the Last Farewell — Entrusted with the hidden alcohol stove containing 'Mi Último Adiós' hours before José walked to the firing squad.";
    case "Soledad Rizal":
      return "The Vivacious Voice of Calamba — The youngest, most spirited sibling who bravely stood up to local colonial administrators and supported the reformist struggle.";
    default:
      return "The Loving Protector of the Family — Provided constant support, spiritual shield, and preservation of the Rizal family legacy.";
  }
};

export default function WomenView() {
  const motherAndSisters = familyMembers.filter(
    (m) => m.relation !== "Father" && m.relation !== "Elder Brother",
  );

  const [selectedFamilyMember, setSelectedFamilyMember] =
    useState<FamilyMember>(motherAndSisters[0]); // Default to Teodora Alonso Realonda
  const [selectedWoman, setSelectedWoman] = useState<WomenInLife>(womenList[2]); // Default to Leonor Rivera (Maria Clara)

  return (
    <div className="space-y-12 animate-fade-in" id="women-view-container">
      <div className="text-center space-y-2">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.2em] block uppercase">
          CHAMBER VI • THE CORRESPONDENCES OF HEART & BLOOD
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          The Women in Rizal’s Life
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "From the sacred maternal womb and sisterly shield of Calamba, to the
          elegant romantic muses who illuminated his dangerous global exiles."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      {/* SECTION I: MOTHER & SISTERS */}
      <div className="space-y-6" id="mother-sisters-section">
        <div className="text-center md:text-left space-y-1">
          <span className="font-display text-gold-600 text-[10px] font-bold tracking-widest block uppercase">
            SECTION I • THE MATERNAL & SORORAL GUARDIANS
          </span>
          <h2 className="font-serif text-2xl font-bold text-crimson-950">
            Mother & Sisters
          </h2>
          <p className="text-xs text-amber-900/60 font-serif italic">
            The family matriarch and sisterly confidants who nurtured his young
            mind and safeguarded his final manuscripts.
          </p>
          <div className="w-16 h-px bg-gold-400 mt-2" />
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          id="family-women-grid"
        >
          {/* Left: Interactive List / Cameo Buttons */}
          <div
            className="lg:col-span-5 space-y-4"
            id="family-women-selector-panel"
          >
            <span className="font-display text-[9px] text-amber-900/50 tracking-widest uppercase font-bold block px-2">
              The Matrix of Calamba
            </span>

            <div className="grid grid-cols-2 gap-3" id="family-women-cameos">
              {motherAndSisters.map((w) => {
                const isSelected = selectedFamilyMember.name === w.name;
                return (
                  <button
                    key={w.name}
                    onClick={() => setSelectedFamilyMember(w)}
                    className={`p-3.5 rounded-sm border text-left cursor-pointer transition-all duration-300 relative overflow-hidden ${isSelected ? "bg-crimson-950 text-gold-100 border-gold-400 scale-[1.03] shadow-md" : "bg-faf6ee text-amber-950 border-gold-300/40 hover:bg-gold-100/30"}`}
                    id={`family-btn-${w.name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {/* Cameo frame graphic backing */}
                    <div
                      className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full border ${isSelected ? "border-gold-400/20" : "border-gold-600/10"} pointer-events-none`}
                    />

                    <span
                      className={`font-mono text-[8px] font-bold tracking-widest block uppercase ${isSelected ? "text-gold-400" : "text-crimson-800"}`}
                    >
                      {w.relation}
                    </span>
                    <h3 className="font-serif font-extrabold text-[12px] md:text-[13px] leading-tight mt-1">
                      {w.name}
                    </h3>
                    <p
                      className={`text-[10px] font-serif italic mt-0.5 ${isSelected ? "text-gold-200/80" : "text-amber-950/60"}`}
                    >
                      {w.lifeDates}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Antique Picture Frame & Correspondence Journal */}
          <div className="lg:col-span-7" id="family-cameo-viewer">
            <div
              className="parchment-card p-6 md:p-8 rounded-sm border-2 border-double border-gold-500 relative overflow-hidden flex flex-col min-h-[440px]"
              id="family-cameo-container"
            >
              <div className="absolute inset-2 border border-dashed border-gold-600/15 rounded-xs pointer-events-none" />

              {/* Top row with Gilded Cameo Oval */}
              <div
                className="flex flex-col md:flex-row gap-6 items-center md:items-start border-b border-gold-300/30 pb-5 mb-5"
                id="family-cameo-top"
              >
                {/* Victorian Oval Cameo Profile Frame */}
                <div
                  className="flex-shrink-0 w-24 h-32 rounded-full border-4 border-double border-gold-500 bg-gradient-to-b from-crimson-950 to-gold-950 flex items-center justify-center relative shadow-md overflow-hidden"
                  id="cameo-oval-frame"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/family/${selectedFamilyMember.name.toLowerCase()}.jpg`}
                    alt={selectedFamilyMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Identity Metadata */}
                <div
                  className="space-y-1.5 text-center md:text-left flex-grow"
                  id="family-cameo-identity"
                >
                  <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200 rounded-sm inline-block uppercase">
                    {selectedFamilyMember.relation.toUpperCase()}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-crimson-950 leading-tight">
                    {selectedFamilyMember.name}
                  </h2>
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 font-serif text-xs text-amber-900/85">
                    <p>
                      <strong>Relation:</strong> {selectedFamilyMember.relation}
                    </p>
                    <p>
                      <strong>Lifespan:</strong>{" "}
                      {selectedFamilyMember.lifeDates}
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle: Biographical correspondence details */}
              <div className="space-y-4" id="family-cameo-body">
                <div
                  className="space-y-1.5 text-justify"
                  id="family-cameo-history"
                >
                  <span className="font-display text-[9px] font-bold text-crimson-900 tracking-wider uppercase block">
                    BIOGRAPHICAL HISTORIOGRAPHY
                  </span>
                  <p className="text-xs md:text-sm text-amber-950/90 leading-relaxed">
                    {selectedFamilyMember.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div
        className="flex items-center justify-center gap-4 py-6"
        id="sections-separator"
      >
        <div className="h-px bg-gold-400/50 flex-grow" />
        <span className="font-serif text-amber-950/40 text-xl">❦</span>
        <div className="h-px bg-gold-400/50 flex-grow" />
      </div>

      {/* SECTION II: MUSES & LOVERS */}
      <div className="space-y-6" id="muses-lovers-section">
        <div className="text-center md:text-left space-y-1">
          <span className="font-display text-gold-600 text-[10px] font-bold tracking-widest block uppercase">
            SECTION II • THE CORRESPONDENCES OF HEART
          </span>
          <h2 className="font-serif text-2xl font-bold text-crimson-950">
            Muses & Lovers
          </h2>
          <p className="text-xs text-amber-900/60 font-serif italic">
            The romantic affections and intellectual equals who inspired his
            writings and shared his lonely exiles across three continents.
          </p>
          <div className="w-16 h-px bg-gold-400 mt-2" />
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
                    src={`${import.meta.env.BASE_URL}assets/women/${selectedWoman.name.toLowerCase()}.jpg`}
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
    </div>
  );
}
