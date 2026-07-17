/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ParchmentCard from "../ParchmentCard";
import {
  BookOpen,
  Building2,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Landmark,
  Layers,
  Lightbulb,
  Milestone,
  Scale,
  ShieldAlert,
  TrendingUp,
  Users,
} from "lucide-react";

type ClassTier = "highest" | "middle" | "lowest";
type AdminLevel =
  | "ultramar"
  | "central"
  | "provincial"
  | "city"
  | "municipal"
  | "barangay";

export default function ContextView() {
  const [activeTier, setActiveTier] = useState<ClassTier>("lowest");
  const [activeAdmin, setActiveAdmin] = useState<AdminLevel>("ultramar");

  const socialClasses = {
    highest: {
      title: "The Highest Class",
      members: "Spanish Officials, Peninsulares, Friars",
      description:
        "Favored by the Spanish crown, this tier held absolute power, controlled religious life, and sat at the apex of the colonial social structure.",
    },
    middle: {
      title: "The Middle Class",
      members: "Insulares, Creoles, Mestizos, Natives",
      description:
        "Composed of Spaniards born in the colonies, mixed-race heritages, and native families who managed local trade and land.",
    },
    lowest: {
      title: "The Lowest Class",
      members: "Indios",
      description:
        "The native masses subjected to heavy exploitation, oppression, and a strict master-slave relationship enforced by the ruling class.",
    },
  };

  const adminStructure = {
    ultramar: {
      title: "Ministro de Ultramar",
      context: "Established in Madrid (1863)",
      desc: "Created for the Philippines to be taken over by Spain. It managed the affairs of colonies and governed the Philippines through a centralized machinery.",
    },
    central: {
      title: "Central Government",
      context: "Executive & Judicial Branches",
      desc: "The core colonial administration divided into two major arms: Executive (headed by the Governor-General appointed by the Spanish Monarch as the king's representative in all state and religious matters) and Judicial (led by the Royal Audiencia, acting as the highest court and advisory body; the Residencia, which investigated Governor-Generals' performance; and Visita, overseen by the Visitador General to observe conditions).",
    },
    provincial: {
      title: "Provincial Government (Alcaldias)",
      context: "Day-to-day Operations",
      desc: "Led by the Alcaldias to manage day-to-day operations of the provincial government, implement colonial laws, and supervise tax collection.",
    },
    city: {
      title: "City Government (Ayuntamiento)",
      context: "Center of Trade & Industry",
      desc: "The Ayuntamiento served as the center of trade and industry. The City Council (Cabildo) was led by two alcaldes (Mayor and Vice Mayor). Corregimiento was led by a Corregidor to govern local cities not under Spanish control.",
    },
    municipal: {
      title: "Municipal Government",
      context: "Gobernadorcillos & Lieutenants",
      desc: "Headed by Gobernadorcillos and divided into several towns to handle efficient governance and tax collection. To achieve this, four lieutenants aided them: the Teniente Mayor, Teniente de Policia, Teniente de Sementeras, and Teniente de Ganados.",
    },
    barangay: {
      title: "Barangay / Barrio",
      context: "Smallest Administrative Unit",
      desc: "Controlled by the Cabeza de Barangay. Their responsibility was to maintain peace and order and collect taxes in his respective barrio.",
    },
  };

  return (
    <div className="space-y-12 animate-fade-in" id="context-view-container">
      {/* Header Banner Image */}
      <div
        className="relative h-60 md:h-72 w-full rounded-sm overflow-hidden shadow-xl border border-gold-600/30"
        id="context-header-banner"
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/vintage_manuscript_1784103466363.jpg`}
          alt="19th Century scholar desk"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter sepia-[20%] brightness-[80%] contrast-[105%]"
          id="context-banner-image"
        />
        {/* Elegant overlay text */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-gold-950 via-gold-950/50 to-transparent flex flex-col justify-end p-6 md:p-8"
          id="context-banner-overlay"
        >
          <span className="font-display text-gold-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
            SOCIETAL LANDSCAPE
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-gold-100 tracking-tight">
            19th-Century Context & Society
          </h1>
          <p className="font-serif italic text-xs md:text-sm text-gold-300/80 mt-1">
            Understanding the social, political, and educational machinery that
            shaped Rizal's world.
          </p>
        </div>
      </div>

      {/* Intro Section: A Creative yet Feudalistic Age */}
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
        id="intro-section"
      >
        <div
          className="md:col-span-7 flex flex-col justify-between space-y-4"
          id="creative-age"
        >
          <div className="space-y-2">
            <span className="font-display text-gold-600 text-xs font-bold tracking-widest uppercase block">
              Global Friction & Local Reality
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950">
              The Dual Nature of the 19th Century
            </h2>
            <div className="w-16 h-0.5 bg-crimson-700" />
          </div>
          <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
            The 19th century was a creative age where concepts such as
            **industrialism, democracy, and nationalism** created sweeping
            changes in science, technology, economics, and politics that could
            enable prosperity and dignity.
          </p>
          <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
            However, in Philippine colonial society, **feudalism remained
            prominent** due to widespread abuse, exploitation, and
            discrimination. Because the Spaniards ruled the government, the
            social structure was heavily feudalistic, causing systemic
            oppression to Filipinos and relentless exploitation towards the
            *indios*, fostering a rigid master-slave relationship.
          </p>
        </div>

        <div className="md:col-span-5" id="feudalism-badge">
          <div className="h-full p-6 bg-gold-50/50 border border-gold-300/35 rounded-sm flex flex-col justify-center space-y-3 shadow-inner">
            <span className="p-3 w-fit rounded-full bg-crimson-50 text-crimson-850">
              <ShieldAlert size={24} />
            </span>
            <h3 className="font-serif text-lg font-bold text-crimson-950">
              The Master-Slave Friction
            </h3>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              With Spanish authorities monopolizing the administration, native
              Filipinos faced intense social exclusion. The system actively
              depressed the dignity of local inhabitants, keeping them in a
              state of servitude.
            </p>
          </div>
        </div>
      </div>

      {/* Pyramidal Caste Section */}
      <div
        className="space-y-6 pt-6 border-t border-gold-300/20"
        id="caste-pyramid-section"
      >
        <div className="text-center space-y-2">
          <span className="font-display text-gold-600 text-[10px] tracking-widest font-bold block uppercase">
            Social Stratification
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950">
            The Colonial Caste Pyramid
          </h2>
          <p className="text-xs text-amber-900/70 italic max-w-xl mx-auto">
            The Spanish colonizers favored a strict, top-down societal
            hierarchy. Click on each tier of the pyramid below to explore their
            place in the colony.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          id="pyramid-interactive-grid"
        >
          {/* Left: The Visual Pyramid */}
          <div
            className="lg:col-span-6 flex flex-col items-center justify-center p-4 bg-faf6ee border border-gold-200/50 rounded-sm"
            id="visual-pyramid-container"
          >
            <div
              className="w-full max-w-md flex flex-col items-center space-y-2.5 my-6"
              id="pyramid-tiers"
            >
              {/* Highest Class Button */}
              <button
                onClick={() => setActiveTier("highest")}
                className={`w-1/3 py-3 px-2 text-center font-display cursor-pointer font-extrabold text-[10px] md:text-xs tracking-wider rounded-t-sm border transition-all duration-300 ${activeTier === "highest" ? "bg-crimson-900 text-gold-100 border-gold-400 scale-105 shadow-md" : "bg-gold-50/40 text-crimson-950 border-gold-300/40 hover:bg-gold-100/50"}`}
                id="btn-highest-class"
              >
                <Layers className="w-3.5 h-3.5 mx-auto mb-1 opacity-70" />
                THE HIGHEST CLASS
              </button>

              {/* Middle Class Button */}
              <button
                onClick={() => setActiveTier("middle")}
                className={`w-2/3 py-3 px-2 text-center font-display cursor-pointer font-extrabold text-[10px] md:text-xs tracking-wider border transition-all duration-300 ${activeTier === "middle" ? "bg-crimson-900 text-gold-100 border-gold-400 scale-105 shadow-md" : "bg-gold-50/40 text-crimson-950 border-gold-300/40 hover:bg-gold-100/50"}`}
                id="btn-middle-class"
              >
                <Users className="w-3.5 h-3.5 mx-auto mb-1 opacity-70" />
                THE MIDDLE CLASS
              </button>

              {/* Lowest Class Button */}
              <button
                onClick={() => setActiveTier("lowest")}
                className={`w-full py-3 px-2 text-center cursor-pointer font-display font-extrabold text-[10px] md:text-xs tracking-wider rounded-b-sm border transition-all duration-300 ${activeTier === "lowest" ? "bg-crimson-900 text-gold-100 border-gold-400 scale-105 shadow-md" : "bg-gold-50/40 text-crimson-950 border-gold-300/40 hover:bg-gold-100/50"}`}
                id="btn-lowest-class"
              >
                <ShieldAlert className="w-3.5 h-3.5 mx-auto mb-1 opacity-70" />
                THE LOWEST CLASS (INDIOS)
              </button>
            </div>
          </div>

          {/* Right: Tier Details Panel */}
          <div className="lg:col-span-6" id="tier-details-panel">
            <div
              className="p-6 bg-gold-50/30 border border-gold-300/40 rounded-sm space-y-4 shadow-sm min-h-[220px]"
              id="tier-card"
            >
              <div className="flex justify-between items-center border-b border-gold-300/20 pb-2">
                <h3 className="font-serif text-xl font-bold text-crimson-950">
                  {socialClasses[activeTier].title}
                </h3>
                <span className="font-mono text-[9px] text-gold-800 bg-gold-100 px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold">
                  Class Detail
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-display text-[9px] text-crimson-800 font-bold tracking-widest uppercase block">
                  CONSTITUENTS
                </span>
                <p className="font-serif text-sm italic font-medium text-amber-950">
                  {socialClasses[activeTier].members}
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <span className="font-display text-[9px] text-crimson-800 font-bold tracking-widest uppercase block">
                  SOCIETAL IMPACT
                </span>
                <p className="text-xs md:text-sm text-amber-950/80 leading-relaxed text-justify">
                  {socialClasses[activeTier].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational System Section */}
      <div
        className="pt-6 border-t border-gold-300/20"
        id="education-system-section"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          id="education-grid"
        >
          <div className="lg:col-span-5 space-y-4" id="education-intro">
            <span className="font-display text-gold-600 text-xs font-bold tracking-widest uppercase block">
              Colonial Learning
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950">
              The Educational System
            </h2>
            <p className="text-sm text-amber-950/85 leading-relaxed text-justify">
              Introduced by the Spanish Colonizers, the educational system aimed
              primarily to **convert native Filipinos to Catholicism**.
            </p>
            <p className="text-sm text-amber-950/85 leading-relaxed text-justify">
              However, it was riddled with severe systemic controversies that
              limited local intellectual growth. Prejudice was heavily directed
              towards Filipinos, particularly within institutions of higher
              learning, keeping native scholars marginalized.
            </p>
          </div>

          <div className="lg:col-span-7" id="education-controversies">
            <ParchmentCard
              title="Educational System Controversies"
              subtitle="Major Faults of Spanish Secular Instruction"
              headerBadge="ACADEMIC CRITIQUE"
              doubleBorder={false}
              ornament
            >
              <ul
                className="space-y-3.5 text-xs md:text-sm text-amber-950/90"
                id="controversy-list"
              >
                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-sm bg-crimson-100 text-crimson-900 mt-0.5">
                    <BookOpen size={14} />
                  </span>
                  <div className="space-y-0.5">
                    <strong>Overemphasis on Religion:</strong>
                    <p className="text-xs text-amber-950/70">
                      The curriculum focused heavily on spiritual conformity and
                      dogma rather than critical scientific study.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-sm bg-crimson-100 text-crimson-900 mt-0.5">
                    <Milestone size={14} />
                  </span>
                  <div className="space-y-0.5">
                    <strong>Outdated Methods & Limited Curriculum:</strong>
                    <p className="text-xs text-amber-950/70">
                      Instruction relied heavily on rote memorization and
                      obsolete scholastic concepts, keeping the natural sciences
                      restricted.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-sm bg-crimson-100 text-crimson-900 mt-0.5">
                    <Building2 size={14} />
                  </span>
                  <div className="space-y-0.5">
                    <strong>
                      Poor Classroom Facilities & Absence of Materials:
                    </strong>
                    <p className="text-xs text-amber-950/70">
                      Schools lacked the basic infrastructure, books, and
                      resources necessary for practical, competitive education.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-sm bg-crimson-100 text-crimson-900 mt-0.5">
                    <GraduationCap size={14} />
                  </span>
                  <div className="space-y-0.5">
                    <strong>Prejudice in Higher Learning:</strong>
                    <p className="text-xs text-amber-950/70">
                      Filipino students suffered systematic humiliation and
                      racial bias from Dominican professors, stifling academic
                      parity.
                    </p>
                  </div>
                </li>
              </ul>
            </ParchmentCard>
          </div>
        </div>
      </div>

      {/* Political & Administrative Machinery Section */}
      <div
        className="pt-6 border-t border-gold-300/20 space-y-6"
        id="political-machinery-section"
      >
        <div className="text-center space-y-1">
          <span className="font-display text-gold-600 text-[10px] tracking-widest font-bold block uppercase">
            Colonial Bureaucracy
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950">
            Political & Administrative Machinery
          </h2>
          <p className="text-xs text-amber-900/70 italic max-w-xl mx-auto">
            Explore the dual structures of the central machinery and localized
            sectors used by Spain to govern the archipelago.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          id="admin-explorer"
        >
          {/* Navigation/Selector */}
          <div className="lg:col-span-4 flex flex-col gap-2" id="admin-nav">
            {(Object.keys(adminStructure) as AdminLevel[]).map((key) => {
              const isSelected = activeAdmin === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveAdmin(key)}
                  className={`w-full text-left p-3.5 border transition-all duration-200 rounded-sm cursor-pointer ${
                    isSelected
                      ? "bg-crimson-900 text-gold-100 border-gold-400 shadow-md"
                      : "bg-faf6ee text-crimson-950 border-gold-200 hover:bg-gold-50"
                  }`}
                  id={`admin-btn-${key}`}
                >
                  <p className="font-display font-extrabold text-[10px] tracking-wider uppercase leading-none">
                    {adminStructure[key].title.split(" (")[0]}
                  </p>
                  <p
                    className={`font-serif text-xs italic mt-1 leading-none ${isSelected ? "text-gold-300" : "text-gold-800"}`}
                  >
                    {adminStructure[key].context}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Details Card */}
          <div className="lg:col-span-8" id="admin-details">
            <div
              className="p-6 md:p-8 bg-faf6ee border border-gold-300/55 rounded-sm space-y-4 relative overflow-hidden shadow-inner"
              id="admin-details-card"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-100/30 rounded-bl-full pointer-events-none border-l border-b border-gold-200/20" />

              <div className="space-y-1">
                <span className="font-mono text-[9px] tracking-widest text-crimson-800 font-bold bg-crimson-50 px-2 py-0.5 rounded-sm uppercase">
                  {adminStructure[activeAdmin].context}
                </span>
                <h3 className="font-serif text-2xl font-extrabold text-crimson-950 mt-1">
                  {adminStructure[activeAdmin].title}
                </h3>
              </div>

              <div className="w-12 h-px bg-gold-400 my-2" />

              <div className="space-y-3">
                <p className="text-sm md:text-base text-amber-950/85 leading-relaxed text-justify">
                  {adminStructure[activeAdmin].desc}
                </p>
              </div>

              {activeAdmin === "central" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gold-300/20 text-xs">
                  <div className="p-3 bg-gold-50/50 border border-gold-200 rounded-sm space-y-1">
                    <span className="font-display font-bold text-[9px] text-crimson-900 uppercase">
                      Executive Branch
                    </span>
                    <p className="text-amber-950/75 leading-relaxed">
                      Appointed by the Spanish Monarch; acted as the king's
                      direct representative in all state and religious matters.
                    </p>
                  </div>
                  <div className="p-3 bg-gold-50/50 border border-gold-200 rounded-sm space-y-1">
                    <span className="font-display font-bold text-[9px] text-crimson-900 uppercase">
                      Judicial Branch
                    </span>
                    <p className="text-amber-950/75 leading-relaxed">
                      Administered by the Royal Audiencia (highest advisory
                      court), Residencia (investigated Governor-General's
                      performance), and Visita (Visitador General sent to
                      observe conditions).
                    </p>
                  </div>
                </div>
              )}

              {activeAdmin === "municipal" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-4 border-t border-gold-300/20 text-[10px] font-display font-extrabold text-center uppercase tracking-wider text-crimson-950">
                  <div className="p-2 bg-crimson-50/50 border border-crimson-200/35 rounded-xs">
                    Teniente Mayor
                  </div>
                  <div className="p-2 bg-crimson-50/50 border border-crimson-200/35 rounded-xs">
                    Teniente de Policia
                  </div>
                  <div className="p-2 bg-crimson-50/50 border border-crimson-200/35 rounded-xs">
                    Teniente de Sementeras
                  </div>
                  <div className="p-2 bg-crimson-50/50 border border-crimson-200/35 rounded-xs">
                    Teniente de Ganados
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trading System & Rise of Nationalism Section */}
      <div
        className="pt-6 border-t border-gold-300/20 space-y-6"
        id="trade-nationalism-section"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
          id="trade-grid"
        >
          {/* Left Column: Economy */}
          <div
            className="md:col-span-6 space-y-4 flex flex-col justify-between"
            id="trading-system"
          >
            <div className="space-y-2">
              <span className="font-display text-gold-600 text-xs font-bold tracking-widest uppercase block">
                Economic Growth
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950">
                The Trading System & Middle Class
              </h2>
              <div className="w-12 h-0.5 bg-crimson-700" />
            </div>

            <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
              Introduced at the end of the 18th century, the open trading system
              resulted in a **rapid rise of foreign firms** focusing on
              agricultural products. This spurred the export of high-value crops
              including **sugar, rice, hemp, and tobacco**.
            </p>

            <p className="text-sm text-amber-950/80 leading-relaxed text-justify">
              With these newfound resources, affluent families were able to send
              their sons to receive an education abroad. Through this pathway,
              young Filipino scholars were able to fully **absorb the
              intellectual development and enlightened ideas of Europe**.
            </p>

            <div
              className="flex gap-2 text-[10px] font-mono text-crimson-850 bg-crimson-50/40 p-3 rounded-xs border border-crimson-100"
              id="export-badges"
            >
              <span className="px-2.5 py-1 bg-faf6ee rounded-sm border border-gold-200 font-bold">
                SUGAR
              </span>
              <span className="px-2.5 py-1 bg-faf6ee rounded-sm border border-gold-200 font-bold">
                RICE
              </span>
              <span className="px-2.5 py-1 bg-faf6ee rounded-sm border border-gold-200 font-bold">
                HEMP
              </span>
              <span className="px-2.5 py-1 bg-faf6ee rounded-sm border border-gold-200 font-bold">
                TOBACCO
              </span>
            </div>
          </div>

          {/* Right Column: Nationalism Factors */}
          <div
            className="md:col-span-6 flex flex-col justify-between"
            id="nationalism-factors"
          >
            <ParchmentCard
              title="Catalysts of Filipino Nationalism"
              subtitle="Major Influences Sparking Reform"
              headerBadge="HISTORICAL TRIGGERS"
              doubleBorder={false}
              ornament={false}
            >
              <div
                className="space-y-5 py-2 text-xs md:text-sm text-amber-950/90"
                id="factor-details"
              >
                <div className="flex gap-3">
                  <span className="p-2 h-fit bg-gold-100 text-gold-900 rounded-sm">
                    <TrendingUp size={16} />
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-crimson-950 text-sm">
                      International Trade
                    </h4>
                    <p className="text-xs text-amber-950/70 mt-1">
                      Opened local borders to globalization, allowing
                      agricultural prosperity and giving rise to the affluent
                      class capable of supporting education abroad.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="p-2 h-fit bg-gold-100 text-gold-900 rounded-sm">
                    <Globe size={16} />
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-crimson-950 text-sm">
                      The Suez Canal
                    </h4>
                    <p className="text-xs text-amber-950/70 mt-1">
                      Completed in 1869, this critical water passage
                      significantly shortened travel time between Europe and the
                      Philippines, accelerating the flow of ideas and people.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="p-2 h-fit bg-gold-100 text-gold-900 rounded-sm">
                    <Compass size={16} />
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-crimson-950 text-sm">
                      Influx of European Liberalism
                    </h4>
                    <p className="text-xs text-amber-950/70 mt-1">
                      Introduced progressive thoughts of liberty, democracy, and
                      equality that challenged the absolute divine right of
                      empires and the friar-dominated state.
                    </p>
                  </div>
                </div>
              </div>
            </ParchmentCard>
          </div>
        </div>
      </div>

      {/* Final Section: Rizal's Critical Awakening & Spark */}
      <div
        className="pt-8 border-t-2 border-double border-gold-400"
        id="rizal-awakening-section"
      >
        <div
          className="p-6 md:p-8 bg-crimson-950 text-gold-100 rounded-sm space-y-4 relative overflow-hidden"
          id="awakening-card"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-crimson-900/40 rounded-bl-full pointer-events-none" />

          <span className="inline-block p-2 rounded-full bg-gold-900/35 text-gold-300">
            <Lightbulb size={24} />
          </span>

          <h3 className="font-serif text-xl md:text-2xl font-extrabold text-gold-200">
            Rizal’s Reflective Awakening
          </h3>

          <p className="font-serif italic text-sm md:text-base text-gold-100/90 leading-relaxed max-w-3xl pr-6 text-justify">
            "José Rizal did not just possess this valuable information about
            society; he actively used it to analyze the events unfolding in the
            wider world and predict what might happen to himself. Becoming
            critically aware of the overreliance on religion and the severe
            oppression directed towards Filipinos, Rizal crafted a historical
            narrative and stories based exactly on the realities of the world he
            lived in."
          </p>

          <p className="font-display text-[9px] tracking-widest text-gold-400 font-bold uppercase pt-2">
            — THE INTELLECTUAL ARMORY OF DR. JOSÉ RIZAL
          </p>
        </div>
      </div>
    </div>
  );
}
