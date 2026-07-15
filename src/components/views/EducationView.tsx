/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ParchmentCard from "../ParchmentCard";

export default function EducationView() {
  const [activeTab, setActiveTab] = useState<string>("ateneo");

  const educationRecords = {
    binan: {
      institution: "Biñan Elementary Tutelage",
      duration: "1870 – 1871",
      maestro: "Justiniano Aquino Cruz",
      location: "Biñan, Laguna",
      accomplishment: "First in Spanish, Latin, and Grammar",
      system: "Traditional Rote Learning with corporal discipline (wooden paddle)",
      grades: [
        { subject: "Castilian Grammar", grade: "Excellent" },
        { subject: "Latin Dialectics", grade: "Excellent" },
        { subject: "Christian Doctrine", grade: "Sobra-saliente" }
      ],
      commentary: "A young, quiet boy who frequently got involved in fistfights with older boys but defeated them all academically. His teacher was described as severe, utilizing a wooden calabozo to punish minor spelling slips."
    },
    ateneo: {
      institution: "Ateneo Municipal de Manila",
      duration: "1872 – 1877",
      maestro: "Jesuit Fathers (Fr. Francisco de Paula Sanchez)",
      location: "Intramuros, Manila",
      accomplishment: "Bachelor of Arts, Graduated Sobra-saliente (Highest Honors)",
      system: "Jesuit Stepper System: Divided into Roman Empire & Carthaginian Empire",
      grades: [
        { subject: "Philosophy & Ethics", grade: "Sobra-saliente" },
        { subject: "Physics & Chemistry", grade: "Sobra-saliente" },
        { subject: "Natural History", grade: "Sobra-saliente" },
        { subject: "Rhetoric & Poetry", grade: "Sobra-saliente" },
        { subject: "Greek & Latin Literature", grade: "Sobra-saliente" }
      ],
      commentary: "Rizal entered as an underdog 'Carthaginian day-student'. Within weeks, he rose to become the 'Emperor' of his class, a title reserved for the highest academic performer. Under Father Sanchez, he discovered his deep love for literature and classical poetry."
    },
    ust: {
      institution: "Real y Pontificia Universidad de Santo Tomas",
      duration: "1877 – 1882",
      maestro: "Dominican Friars",
      location: "Intramuros, Manila",
      accomplishment: "Licentiate in Ophthalmology & Land Surveying",
      system: "Lectures under Dominican Scholasticism",
      grades: [
        { subject: "Anatomy & Physiology", grade: "Excellent" },
        { subject: "General Ophthalmology", grade: "Excellent" },
        { subject: "Topographical Surveying", grade: "Sobra-saliente" },
        { subject: "Therapeutics", grade: "Good" }
      ],
      commentary: "Rizal studied medicine (specializing in ophthalmology) to cure his mother's blindness. However, he found the Dominican methods obsolete, dry, and racially prejudiced. Dominican professors frequently humiliated native 'indios', which eventually drove Rizal to flee secretly to Europe."
    },
    madrid: {
      institution: "Universidad Central de Madrid",
      duration: "1882 – 1885",
      maestro: "European Secular Philosophers",
      location: "Madrid, Spain",
      accomplishment: "Licentiate in Medicine, Licentiate in Philosophy & Letters",
      system: "Modern European Academic Lecture System",
      grades: [
        { subject: "Surgical Medicine", grade: "Sobresaliente (Excellent)" },
        { subject: "History of Philosophy", grade: "Sobresaliente" },
        { subject: "Greek Philology", grade: "Excellent" },
        { subject: "Sanskrit & Arabic", grade: "Good" }
      ],
      commentary: "In Spain, Rizal breathed academic freedom. He completed dual degrees in Medicine and Philosophy and Letters. He spent his pocket money buying old books rather than food, often surviving on a single cup of coffee a day while completing his clinical rotations."
    }
  };

  return (
    <div className="space-y-12 animate-fade-in" id="education-view-container">
      <div className="text-center space-y-2">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.2em] block uppercase">
          CHAMBER IV • THE ILLUSTRIOUS STUDENT
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          Rizal’s Education
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "From strict colonial desks to European secular lecture halls, he constructed the fortress of his intellect."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="education-grid">
        {/* Left Side: Leather-Bound School Selector Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-2" id="education-tabs">
          <span className="font-display text-[9px] text-amber-900/50 tracking-widest uppercase font-bold px-3">
            Academic Institutions
          </span>
          {Object.keys(educationRecords).map((key) => {
            const record = educationRecords[key as keyof typeof educationRecords];
            const isSelected = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`p-4 rounded-sm border text-left transition-all duration-300 ${isSelected ? "bg-crimson-950 text-gold-100 border-gold-500 scale-[1.02] shadow-lg" : "bg-faf6ee text-amber-950 border-gold-300/40 hover:bg-gold-100/40"}`}
                id={`edu-tab-${key}`}
              >
                <span className="font-display font-extrabold text-[11px] tracking-wider block">
                  {record.institution}
                </span>
                <span className={`text-[10px] font-serif italic block mt-0.5 ${isSelected ? "text-gold-300" : "text-amber-900/60"}`}>
                  Years: {record.duration}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Side: Antique Transcript Display */}
        <div className="lg:col-span-8" id="education-transcript">
          <div className="parchment-card p-6 md:p-8 rounded-sm border-2 border-double border-gold-500 relative overflow-hidden" id="academic-transcript-card">
            <div className="absolute inset-2 border border-dashed border-gold-600/10 rounded-xs pointer-events-none" />

            {/* University Crest / Signature Silhouette Watermark */}
            <div className="absolute top-4 right-4 w-16 h-16 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M 30 50 L 70 50 M 50 30 L 50 70" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Header Record details */}
            <div className="border-b border-gold-300/40 pb-4 mb-6 space-y-1.5" id="transcript-header">
              <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200 rounded-sm inline-block uppercase">
                ACADEMIC RECORD SHEET
              </span>
              <h2 className="font-serif text-2xl font-bold text-crimson-950 leading-tight">
                {educationRecords[activeTab as keyof typeof educationRecords].institution}
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-1 font-serif text-xs text-amber-900/85">
                <p><strong>Location:</strong> {educationRecords[activeTab as keyof typeof educationRecords].location}</p>
                <p><strong>Mentor / Dean:</strong> {educationRecords[activeTab as keyof typeof educationRecords].maestro}</p>
              </div>
            </div>

            {/* Details and Grades side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start" id="transcript-details">
              {/* Grades Table */}
              <div className="md:col-span-7 space-y-3" id="grades-table-box">
                <h3 className="font-display text-[10px] font-bold text-crimson-900 tracking-wider uppercase border-b border-gold-600/10 pb-1">
                  OFFICIAL SUBJECT RATINGS
                </h3>
                <div className="border border-gold-300/30 rounded-xs overflow-hidden" id="grades-list-container">
                  <table className="w-full text-left font-sans text-xs">
                    <thead>
                      <tr className="bg-gold-100/55 border-b border-gold-300/30 font-mono text-[9px] text-gold-800 tracking-wider">
                        <th className="p-2">CURRICULAR STUDY COURSE</th>
                        <th className="p-2 text-right">OFFICIAL RATING</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gold-300/15">
                      {educationRecords[activeTab as keyof typeof educationRecords].grades.map((g, index) => (
                        <tr key={index} className="hover:bg-gold-50/40 transition-colors">
                          <td className="p-2 font-serif font-medium text-amber-950">{g.subject}</td>
                          <td className="p-2 text-right font-mono font-bold text-crimson-850 text-[11px]">{g.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-2.5 bg-gold-50/50 border border-gold-600/10 rounded-xs">
                  <p className="font-serif text-[10px] text-amber-950/70 italic leading-snug">
                    <strong>Institutional System:</strong> {educationRecords[activeTab as keyof typeof educationRecords].system}
                  </p>
                </div>
              </div>

              {/* Major accomplishments and commentary */}
              <div className="md:col-span-5 space-y-4 text-xs text-amber-950/90 text-justify" id="transcript-narrative-box">
                <div>
                  <span className="font-display text-[9px] font-bold text-crimson-900 tracking-wider uppercase block">
                    SUMMA CERTIFICATE
                  </span>
                  <p className="font-serif italic font-semibold text-crimson-950 border-l-2 border-gold-500 pl-2 py-0.5 mt-1">
                    {educationRecords[activeTab as keyof typeof educationRecords].accomplishment}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-display text-[9px] font-bold text-crimson-900 tracking-wider uppercase block">
                    ARCHIVIST COMMENTARY
                  </span>
                  <p className="leading-relaxed bg-faf6ee p-2 border border-dashed border-gold-600/20 rounded-xs text-[11px]">
                    {educationRecords[activeTab as keyof typeof educationRecords].commentary}
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
