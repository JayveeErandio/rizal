/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ParchmentCard from "../ParchmentCard";
import {
  Music,
  Microscope,
  Paintbrush,
  GraduationCap,
  Eye,
  Search,
  Music4,
  Sparkles,
  Heart,
  Award,
  BookOpen,
} from "lucide-react";

type PolymathRole = "musician" | "scientist" | "painter" | "teacher";

export default function OtherSideView() {
  const [activeRole, setActiveRole] = useState<PolymathRole>("scientist");

  const polymathData = {
    musician: {
      title: "As a Musician",
      subtitle: "The Harmony of Determination",
      icon: <Music className="w-5 h-5" />,
      tagline: "Mastering pitch and melody through sheer willpower.",
      mainText:
        "Though he lacked natural talent and initially struggled with pitch, Rizal’s determination pushed him to master instruments and study solfeggio, voice culture, and the piano.",
      subRoles: [
        {
          label: "Flutist",
          desc: "He learned to play the flute.",
          icon: <Music4 className="w-4 h-4 text-crimson-850" />,
        },
        {
          label: "Composer",
          desc: 'He composed patriotic and love songs, most notably "Alin Mang Lahi" (Any Race) and "Kundiman ni Rizal".',
          icon: <Sparkles className="w-4 h-4 text-crimson-850" />,
        },
      ],
    },
    scientist: {
      title: "As a Scientist",
      subtitle: "Naturalist & Healer of the Mind",
      icon: <Microscope className="w-5 h-5" />,
      tagline: "Refuting colonial prejudice through empirical truth.",
      mainText:
        "Rizal was a passionate naturalist and doctor who utilized the scientific method to heal, discover, and refute colonial prejudices regarding Filipino intellect.",
      subRoles: [
        {
          label: "Taxonomist",
          desc: "During his exile in Dapitan, he collected over 340 shells and countless flora and fauna. Three animal species discovered by him were named in his honor: the Draco rizali (flying lizard), Apogonia rizali (beetle), and Rhacophorus rizali (frog).",
          icon: <Search className="w-4 h-4 text-crimson-850" />,
        },
        {
          label: "Physician",
          desc: "He was a skilled ophthalmologist who performed surgeries to restore sight.",
          icon: <Eye className="w-4 h-4 text-crimson-850" />,
        },
      ],
    },
    painter: {
      title: "As a Painter & Sculptor",
      subtitle: "Aesthetic Eyes & Trained Hands",
      icon: <Paintbrush className="w-5 h-5" />,
      tagline: "Capturing love, sorrow, and national triumph.",
      mainText:
        "Rizal was a trained artist. He studied drawing and painting at the prestigious Academia de Dibujo y Pintura in Manila and further honed his craft in Europe.",
      subRoles: [
        {
          label: "Notable Works",
          desc: "He created over 110 known works, including portraits of his family and loves (like Leonor Rivera), allegorical paintings, and sketches documenting his travels.",
          icon: <Heart className="w-4 h-4 text-crimson-850" />,
        },
        {
          label: "Sculptor",
          desc: 'He also sculpted notable pieces like "The Triumph of Science Over Death".',
          icon: <Award className="w-4 h-4 text-crimson-850" />,
        },
      ],
    },
    teacher: {
      title: "As a Teacher",
      subtitle: "Liberator Through Practical Knowledge",
      icon: <GraduationCap className="w-5 h-5" />,
      tagline: "Empowering the next generation to raise the nation.",
      mainText:
        "Rizal viewed education as the key to the nation's liberation. During his Dapitan exile, he ran a free school for local boys, housing and educating them at his own expense.",
      subRoles: [
        {
          label: "Curriculum",
          desc: "Instead of charging tuition, he had his students work in his garden and on community projects. He taught languages, geography, history, mathematics, and morals.",
          icon: <BookOpen className="w-4 h-4 text-crimson-850" />,
        },
        {
          label: "Holistic Education",
          desc: "He incorporated physical training (gymnastics, wrestling) and real-world science through nature walks and community service.",
          icon: <Sparkles className="w-4 h-4 text-crimson-850" />,
        },
      ],
    },
  };

  return (
    <div className="space-y-12 animate-fade-in" id="otherside-view-container">
      {/* Header Banner - Dapitan Exile */}
      <div
        className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden shadow-xl border border-gold-600/30"
        id="otherside-header-banner"
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/dapitan_exile_1784103480107.jpg`}
          alt="Dapitan Exile, Coastal cottage scenery"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter sepia-[15%] brightness-[80%] contrast-[105%]"
          id="otherside-banner-image"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gold-950 via-gold-950/40 to-transparent flex flex-col justify-end p-6 md:p-8"
          id="otherside-banner-overlay"
        >
          <span className="font-display text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">
            SECTION II • THE POLYMATH OF DAPITAN
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-gold-100 tracking-tight">
            The Polymath: Many-Sided Genius
          </h1>
          <p className="font-serif italic text-xs md:text-sm text-gold-300/80 mt-1">
            "We must prove that we have our own intellect, our own art, and our
            own science."
          </p>
        </div>
      </div>

      {/* Narrative Intro */}
      <div
        className="text-center max-w-2xl mx-auto space-y-3"
        id="otherside-narrative"
      >
        <span className="font-display text-gold-600 text-[10px] tracking-widest font-bold block uppercase">
          RENAISSANCE SPIRIT
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950">
          The Intellect Beyond Letters
        </h2>
        <p className="text-sm text-amber-950/80 leading-relaxed text-justify md:text-center">
          Dr. José Rizal’s contributions were not limited to reformist
          literature. He was a true polymath—confronting Spanish colonial
          assumptions by mastering music, performing advanced scientific work,
          producing classic fine arts, and implementing radical education
          models.
        </p>
        <div className="w-16 h-0.5 bg-crimson-700 mx-auto mt-2" />
      </div>

      {/* Interactive Polymath Selector & Card Display */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        id="polymath-explorer-grid"
      >
        {/* Left: Interactive Navigation */}
        <div className="lg:col-span-4 flex flex-col gap-3" id="polymath-nav">
          {(Object.keys(polymathData) as PolymathRole[]).map((key) => {
            const isSelected = activeRole === key;
            const data = polymathData[key];
            return (
              <button
                key={key}
                onClick={() => setActiveRole(key)}
                className={`p-4 rounded-sm border text-left cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                  isSelected
                    ? "bg-crimson-950 text-gold-100 border-gold-400 scale-[1.02] shadow-md"
                    : "bg-faf6ee text-amber-950 border-gold-300/40 hover:bg-gold-100/30"
                }`}
                id={`polymath-btn-${key}`}
              >
                <span
                  className={`p-2.5 rounded-sm ${isSelected ? "bg-crimson-900 text-gold-200" : "bg-gold-100 text-crimson-950"}`}
                >
                  {data.icon}
                </span>
                <div className="space-y-0.5">
                  <h3 className="font-serif font-extrabold text-sm leading-tight">
                    {data.title}
                  </h3>
                  <p
                    className={`text-[11px] font-serif italic ${isSelected ? "text-gold-300/85" : "text-amber-950/60"}`}
                  >
                    {data.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Rich Informational Details Card */}
        <div className="lg:col-span-8" id="polymath-details-display">
          <div
            className="parchment-card p-6 md:p-8 rounded-sm border-2 border-double border-gold-500 relative overflow-hidden flex flex-col justify-between min-h-[380px]"
            id="role-parchment"
          >
            <div className="absolute inset-2 border border-dashed border-gold-600/15 rounded-xs pointer-events-none" />

            {/* Title / Subtitle block */}
            <div
              className="space-y-1.5 border-b border-gold-300/30 pb-4 mb-4"
              id="role-header"
            >
              <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200 rounded-sm inline-block uppercase font-bold">
                GENIUS PROFILE
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-crimson-950 leading-tight">
                {polymathData[activeRole].title}
              </h2>
              <p className="font-serif italic text-xs text-gold-800">
                {polymathData[activeRole].tagline}
              </p>
            </div>

            {/* Core text description */}
            <div className="space-y-4" id="role-body">
              <p className="text-sm md:text-base text-amber-950/90 leading-relaxed text-justify font-serif italic">
                "{polymathData[activeRole].mainText}"
              </p>

              {/* Sub-roles details list */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"
                id="role-highlights"
              >
                {polymathData[activeRole].subRoles.map((sub, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gold-50/50 border border-gold-300/25 rounded-xs space-y-2 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded bg-crimson-50">
                        {sub.icon}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-crimson-950">
                        {sub.label}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-amber-950/80 leading-relaxed text-justify">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer watermark/quote reference */}
            <div
              className="mt-6 pt-3 border-t border-gold-300/20 flex justify-between items-center text-[10px] font-mono text-gold-800"
              id="role-footer"
            >
              <span>DR. JOSÉ RIZAL</span>
              <span>DAPITAN ARCHIVE 1892 – 1896</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
