/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { timelineEvents } from "../../data";
import { TimelineEvent } from "../../types";
import ParchmentCard from "../ParchmentCard";

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(
    timelineEvents[0],
  );

  return (
    <div className="space-y-12 animate-fade-in" id="home-view-container">
      {/* Hero Exhibition Section */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        id="hero-grid"
      >
        {/* Left Side: Scholarly Introduction */}
        <div className="lg:col-span-7 space-y-6" id="hero-introduction">
          <div className="space-y-2">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-crimson-950 tracking-tight leading-none">
              Dr. José Rizal <br />
              <span className="font-serif italic font-normal text-gold-800 text-3xl md:text-4xl block mt-2">
                National Hero of the Philippines
              </span>
            </h1>
          </div>

          <p className="text-sm md:text-base text-amber-950/80 leading-relaxed font-sans font-light">
            An ophthalmologist, novelist, sculptor, naturalist, educator, and
            nationalist whose brilliant writings sparked the end of three
            centuries of Spanish colonial rule. Dr. José Rizal stands as the
            premier intellectual beacon of Southeast Asia—a polymath who proved
            that the pen is mightier than the sword.
          </p>

          {/* Classic Scroll Quote */}
          <div
            className="relative p-6 bg-gold-50/70 border-l-4 border-crimson-700 rounded-r-md shadow-inner"
            id="hero-quote-scroll"
          >
            <span className="absolute top-2 right-4 font-serif text-5xl text-gold-300/30 select-none">
              “
            </span>
            <p className="font-serif italic text-base text-crimson-900 leading-relaxed pr-6">
              "Ang kabataan ang pag-asa ng bayan" / "The youth is the hope of
              the future"
            </p>
            <p className="font-display text-[10px] tracking-widest text-gold-700 font-bold mt-2 uppercase text-right">
              — JOSÉ RIZAL, 1879
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate("writings_legacy")}
              className="px-6 py-3 bg-crimson-800 text-gold-100 cursor-pointer hover:bg-crimson-900 font-display font-bold text-xs tracking-widest rounded-sm shadow-md transition-all duration-200 border border-crimson-950 hover:scale-[1.02]"
              id="cta-writings-btn"
            >
              BROWSE MASTERPIECES
            </button>
            <button
              onClick={() => onNavigate("quiz")}
              className="px-6 py-3 bg-transparent cursor-pointer text-crimson-900 hover:bg-gold-100/50 font-display font-bold text-xs tracking-widest rounded-sm transition-all duration-200 border border-crimson-900/30"
              id="cta-quiz-btn"
            >
              QUIZ - TEST YOUR KNOWLEDGE
            </button>
          </div>
        </div>

        {/* Right Side: Gilded Gown Portrait of Rizal */}
        <div
          className="lg:col-span-5 flex justify-center"
          id="gilded-portrait-column"
        >
          <div
            className="relative group p-4 bg-gold-950 rounded-sm shadow-2xl transition-all duration-300 hover:rotate-1"
            id="rizal-portrait-frame"
          >
            {/* Museum Label */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 bg-faf6ee border border-gold-600/40 shadow-lg text-center rounded-sm w-52 pointer-events-none">
              <p className="font-serif text-[10px] font-bold text-crimson-950 leading-none">
                DR. JOSÉ RIZAL
              </p>
              <p className="font-serif text-[8px] italic text-gold-800 mt-0.5">
                Oil Painting on Canvas, c. 1890
              </p>
            </div>

            {/* Antique Double Gold Lines inside frame */}
            <div className="absolute inset-2 border-2 border-double border-gold-400 pointer-events-none z-10 opacity-85" />
            <div className="absolute inset-3 border border-gold-600/30 pointer-events-none z-10" />

            {/* Generated Portrait Image */}
            <img
              src={`${import.meta.env.BASE_URL}assets/rizal_portrait_1784103429889.jpg`}
              alt="Museum portrait of Dr. José Rizal"
              referrerPolicy="no-referrer"
              className="w-full max-w-sm md:max-w-md h-auto object-cover grayscale-[15%] brightness-[95%] contrast-[105%] transition-all duration-300 group-hover:grayscale-0 shadow-inner rounded-xs"
              id="rizal-portrait-image"
            />
          </div>
        </div>
      </div>

      {/* Curator's Welcome Letter */}
      <div className="pt-8 border-t border-gold-300/30" id="curators-section">
        <ParchmentCard
          title="A Letter from the Curator"
          subtitle="Understanding the Scholar-Hero Concept"
          headerBadge="CURATORIAL ESSAY"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-4 text-justify">
              <p className="font-serif text-base text-amber-950 leading-relaxed">
                <span className="float-left text-5xl font-serif font-bold text-crimson-850 mr-2 leading-none">
                  W
                </span>
                elcome to the digital chambers of the Scholastica Rizaliana. Our
                mission is to represent Rizal not merely as a stationary brass
                statue in a plaza, but as a living, striving intellect of the
                19th-century Enlightenment.
              </p>
              <p>
                Rizal lived during a period of massive global friction. The
                Spanish Empire was collapsing, and the seeds of national
                sovereignty were being planted worldwide. What made Rizal
                distinct was his absolute reliance on academic excellence,
                scientific reason, and historical research to liberate his
                people. He argued that ignorance was the greatest chain, and
                education was the ultimate weapon of the oppressed.
              </p>
              <p className="italic text-xs text-gold-900">
                "We must go to our history to read our destiny, for inside the
                logs of our ancestors lie the maps of our children."
              </p>
            </div>
            <div className="md:col-span-4 p-4 border border-dashed border-gold-600/25 bg-gold-50/40 rounded-sm space-y-3">
              <h4 className="font-display font-bold text-xs text-crimson-900 tracking-wider uppercase border-b border-gold-600/20 pb-1">
                EXHIBIT METRIC DATA
              </h4>
              <ul className="space-y-1.5 font-mono text-[10px] text-amber-950/75">
                <li className="flex justify-between">
                  <span>Subject:</span>{" "}
                  <strong className="text-crimson-800">Dr. José Rizal</strong>
                </li>
                <li className="flex justify-between">
                  <span>Active Years:</span> <strong>1861 – 1896</strong>
                </li>
                <li className="flex justify-between">
                  <span>Languages Spoken:</span> <strong>22 Languages</strong>
                </li>
                <li className="flex justify-between">
                  <span>Novels Published:</span>{" "}
                  <strong>2 (Noli & Fili)</strong>
                </li>
                <li className="flex justify-between">
                  <span>Last Written Masterpiece:</span>{" "}
                  <strong>Mi Último Adiós</strong>
                </li>
              </ul>
            </div>
          </div>
        </ParchmentCard>
      </div>

      {/* Timeline Section */}
      <div className="space-y-6 pt-6" id="timeline-section">
        <div className="text-center space-y-1">
          <span className="font-display text-gold-600 text-[10px] tracking-widest font-bold block">
            HISTORICAL LOGS & SEQUENCES
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-crimson-950">
            The Chronological Path
          </h2>
          <div className="w-16 h-0.5 bg-crimson-700 mx-auto mt-2" />
        </div>

        {/* Timeline Slider / Bullet Navigation */}
        <div
          className="relative max-w-4xl mx-auto px-4"
          id="interactive-timeline"
        >
          {/* Horizontal Line Connector */}
          <div className="absolute top-6 left-8 right-8 h-0.5 bg-gold-200 pointer-events-none z-0" />

          {/* Stepper Dots */}
          <div
            className="relative z-10 flex justify-between items-center overflow-x-auto pb-4 scrollbar-thin"
            id="timeline-stepper"
          >
            {timelineEvents.map((ev) => {
              const isSelected = selectedEvent.year === ev.year;
              return (
                <button
                  key={ev.year}
                  onClick={() => setSelectedEvent(ev)}
                  className="flex flex-col items-center min-w-[70px] focus:outline-none transition-all duration-200 group"
                  id={`timeline-node-${ev.year}`}
                >
                  <span
                    className={`font-display text-xs font-bold transition-all ${isSelected ? "text-crimson-800 scale-110" : "text-amber-900/60 group-hover:text-amber-950"}`}
                  >
                    {ev.year}
                  </span>
                  <span
                    className={`w-3.5 h-3.5 rounded-full border-2 mt-1.5 transition-all duration-300 ${isSelected ? "bg-crimson-850 border-gold-400 scale-125 shadow-md" : "bg-faf6ee border-gold-600/30 group-hover:border-gold-500 group-hover:scale-105"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Timeline View Panel */}
          <div className="mt-6 max-w-2xl mx-auto" id="timeline-detail-panel">
            <div className="p-6 bg-faf6ee border border-gold-300/45 rounded-sm shadow-md space-y-3 relative overflow-hidden">
              {/* Subtle watermark background year */}
              <div className="absolute -bottom-8 -right-8 font-display text-7xl font-extrabold text-gold-100/40 select-none pointer-events-none">
                {selectedEvent.year}
              </div>

              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-crimson-800 bg-crimson-50 px-2 py-0.5 border border-crimson-200 rounded-sm">
                  {selectedEvent.location}
                </span>
                <span className="font-serif text-xs italic text-gold-700 font-semibold">
                  Year {selectedEvent.year}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-crimson-950 border-b border-gold-600/10 pb-1.5">
                {selectedEvent.title}
              </h3>

              <p className="text-sm text-amber-950/80 leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
