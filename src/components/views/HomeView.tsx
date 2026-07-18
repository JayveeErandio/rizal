/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { timelineEvents } from "../../data";
import { TimelineEvent } from "../../types";
import ParchmentCard from "../ParchmentCard";
import {
  Scale,
  BookOpen,
  Compass,
  Sparkles,
  Heart,
  FileText,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(
    timelineEvents[0],
  );

  const chambers = [
    {
      id: "century_context",
      title: "Context & Rizal Law",
      tagline: "The 19th Century Environment",
      description:
        "Analyze the sociopolitical landscape under Spanish colonizers and the historical Senate debate behind the mandated Rizal Law (RA 1425).",
      icon: Scale,
      actionText: "Examine Context",
    },
    {
      id: "early_life",
      title: "Roots of the Hero",
      tagline: "Boyhood & Calamba Origins",
      description:
        "Trace Rizal's lineage, the profound lessons taught by his mother Teodora, and his initial scholastic steps in Biñan and Letran.",
      icon: BookOpen,
      actionText: "Explore Childhood",
    },
    {
      id: "education",
      title: "Education & Travels",
      tagline: "The Grand Chronological Tour",
      description:
        "Follow Rizal's footsteps across Europe, Asia, and America as he specialized in ophthalmology and established global alliances.",
      icon: Compass,
      actionText: "Follow Footsteps",
    },
    {
      id: "other_side",
      title: "The Polymath Genius",
      tagline: "A Many-Sided Intellect",
      description:
        "Uncover Rizal's multifaceted talents beyond letters: his works in sculpture, painting, natural sciences, and teacher years in Dapitan.",
      icon: Sparkles,
      actionText: "Uncover Polymathy",
    },
    {
      id: "women",
      title: "Muses & Companions",
      tagline: "Love & Intellectual Allies",
      description:
        "Meet the women who shaped his emotional landscape, inspired his correspondence, and accompanied his life of exile and travel.",
      icon: Heart,
      actionText: "Meet the Muses",
    },
    {
      id: "writings_legacy",
      title: "Writings & Legacy",
      tagline: "Subversion with the Pen",
      description:
        "Review his groundbreaking novels Noli Me Tángere and El Filibusterismo, patriotic poetry, and final testament to the nation.",
      icon: FileText,
      actionText: "Browse Masterpieces",
    },
    {
      id: "quiz",
      title: "Scholar's Exam",
      tagline: "Interactive Knowledge Test",
      description:
        "Conclude your exploration with a interactive, beautifully structured testing engine designed to check your scholarship.",
      icon: GraduationCap,
      actionText: "Take the Exam",
    },
  ];

  return (
    <div
      className="space-y-16 animate-fade-in text-amber-950"
      id="home-view-container"
    >
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

          <p className="text-sm md:text-base text-amber-950/80 leading-relaxed font-sans font-light text-justify">
            <span className="font-bold">
              Dr. José Protacio Rizal Mercado y Alonso Realonda
            </span>{" "}
            was a Filipino patriot, physician, writer, and visionary whose ideas
            awakened a nation's desire for freedom. Through his novels, essays,
            and unwavering commitment to education and reform, Rizal inspired
            generations to pursue justice, dignity, and national
            identity—leaving a legacy that continues to shape the Philippines
            today.
          </p>

          {/* Classic Scroll Quote */}
          <div
            className="relative p-6 bg-gold-50/70 border-l-4 border-crimson-700 rounded-r-md shadow-inner"
            id="hero-quote-scroll"
          >
            <span className="absolute top-2 right-4 font-serif text-5xl text-gold-300/30 select-none">
              “
            </span>
            <p className="font-serif italic text-base text-crimson-900 leading-relaxed pr-6 text-justify">
              "Ang kabataan ang pag-asa ng bayan" / "The youth is the hope of
              the future"
            </p>
            <p className="font-display text-[10px] tracking-widest text-gold-700 font-bold mt-2 uppercase text-right">
              — JOSÉ RIZAL, 1879
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate("century_context")}
              className="px-6 py-3 bg-crimson-800 text-gold-100 cursor-pointer hover:bg-crimson-900 font-display font-bold text-xs tracking-widest rounded-sm shadow-md transition-all duration-200 border border-crimson-950 hover:scale-[1.02]"
              id="cta-enter-btn"
            >
              ENTER EXHIBITION
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
          className="lg:col-span-5 flex flex-col items-center justify-center gap-5"
          id="gilded-portrait-column"
        >
          <div
            className="relative group p-4 bg-gold-950 rounded-sm shadow-2xl transition-all duration-300 hover:rotate-1"
            id="rizal-portrait-frame"
          >
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

          {/* Museum Label stacked vertically below the frame */}
          <div
            className="px-5 py-2.5 bg-faf6ee border-2 border-gold-300/40 shadow-md text-center rounded-sm w-56 hover:shadow-lg transition-shadow duration-300"
            id="museum-label-container"
          >
            <p className="font-serif text-xs font-extrabold text-crimson-950 tracking-wider">
              DR. JOSÉ RIZAL
            </p>
            <p className="font-serif text-[10px] italic text-gold-800 mt-1">
              Oil Painting on Canvas, c. 1890
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: CHAMBERS OF THE EXHIBITION */}
      <div
        className="space-y-8 pt-12 border-t-2 border-double border-gold-400"
        id="exhibition-chambers-block"
      >
        <div className="text-center space-y-2" id="exhibition-chambers-header">
          <span className="font-display text-gold-600 text-xs font-bold tracking-[0.25em] block uppercase">
            CHAMBER DIRECTORY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-crimson-950">
            The Chambers of the Exhibition
          </h2>
          <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
            "Step into the distinct chambers documenting the history, genius,
            travels, and legacy of Rizal."
          </p>
          <div className="w-16 h-0.5 bg-crimson-700 mx-auto mt-3" />
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="exhibition-chambers-grid"
        >
          {chambers.map((chamber) => {
            const IconComponent = chamber.icon;
            return (
              <div
                key={chamber.id}
                className="p-6 bg-faf6ee border-2 border-gold-300/40 rounded-sm hover:border-crimson-950/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                id={`chamber-card-${chamber.id}`}
              >
                <div className="space-y-4">
                  {/* Decorative Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="p-3 rounded bg-crimson-50 text-crimson-850 group-hover:bg-crimson-950 group-hover:text-gold-200 transition-colors duration-300">
                      <IconComponent size={20} />
                    </span>
                    <span className="font-mono text-[8px] text-amber-900/40 font-bold uppercase tracking-wider">
                      ACTIVE EXHIBIT
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-gold-700 block uppercase">
                      {chamber.tagline}
                    </span>
                    <h3 className="font-serif text-xl font-extrabold text-crimson-950">
                      {chamber.title}
                    </h3>
                    <p className="text-xs md:text-[13px] font-serif text-amber-950/80 leading-relaxed text-justify">
                      {chamber.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gold-300/20">
                  <button
                    onClick={() => onNavigate(chamber.id)}
                    className="w-full py-2 px-4 border border-crimson-900 text-crimson-900 hover:bg-crimson-950 hover:text-gold-100 hover:border-crimson-950 text-xs font-display font-bold tracking-widest rounded-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                    id={`btn-explore-${chamber.id}`}
                  >
                    <span>{chamber.actionText}</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
