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
    </div>
  );
}
