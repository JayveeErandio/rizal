/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ParchmentCard from "../ParchmentCard";
import {
  BookOpen,
  Award,
  Activity,
  Compass,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Plane,
  FileText,
  Calendar,
  Anchor,
  HelpCircle,
} from "lucide-react";

interface TravelStop {
  id: number;
  country: string;
  city: string;
  flag: string;
  carrier?: string;
  date?: string;
  hotel?: string;
  details: string[];
  description: string;
}

export default function EducationView() {
  const [activeStopIndex, setActiveStopIndex] = useState<number>(0);

  const travelogue: TravelStop[] = [
    {
      id: 1,
      country: "Singapore",
      city: "Singapore City",
      flag: "🇸🇬",
      carrier: "Steamer SS Salvadora",
      date: "May 1882",
      details: [
        "First stop on his historic voyage to Spain",
        "Spent valuable hours sightseeing the city",
        "Visited the beautiful Singapore Botanical Garden",
        "Explored local Buddhist temples",
        "Inspected the monument of Sir Thomas Stamford Raffles, the founder of Singapore",
      ],
      description:
        "Singapore was his very first stop when he was on his way to Spain with the steamer, SS Salvadora. He spent time sightseeing the city, including the Botanical Garden, Buddhist temples, and the monument of Sir Thomas Stamford Raffles, the founder of Singapore.",
    },
    {
      id: 2,
      country: "Sri Lanka",
      city: "Colombo",
      flag: "🇱🇰",
      carrier: "Steamer SS Djemnah",
      date: "May 1882",
      details: [
        "Boarded the French steamer SS Djemnah",
        "Used the journey to practice and improve his knowledge of the French language",
      ],
      description:
        "He travelled to Sri Lanka with the steamer SS Djemnah to improve his knowledge about the French language.",
    },
    {
      id: 3,
      country: "Egypt",
      city: "Suez Canal",
      flag: "🇪🇬",
      carrier: "Steamer SS Djemnah",
      date: "June 1882",
      details: [
        "Disembarked at the Red Sea terminal in Egypt",
        "Enchanted by the pristine moonlight over the Suez Canal",
        "Fascinated by the multicultural people and diverse languages encountered at the transit port",
      ],
      description:
        "He got off at the Red Sea terminal in Egypt and was amazed to see the scenery of the moonlight in the Suez Canal, completely engrossed with the multicultural people and their language.",
    },
    {
      id: 4,
      country: "Italy",
      city: "Naples",
      flag: "🇮🇹",
      date: "June 11, 1882",
      details: [
        "Reached Naples, Italy, marking his arrival in Europe",
        "Beheld the majestic active volcano, Mt. Vesuvius",
        "Visited the historic Castle of St. Elmo",
      ],
      description:
        "On June 11, 1882, Rizal traveled to Naples, Italy. He saw Mt. Vesuvius and the Castle of St. Elmo.",
    },
    {
      id: 5,
      country: "France",
      city: "Marseilles",
      flag: "🇫🇷",
      hotel: "Noalles Hotel",
      date: "June 1882",
      details: [
        "Disembarked and checked into the comfortable Noalles Hotel",
        "Visited the famous Chateau d’If, the legendary prison from Alexandre Dumas' novel",
        "Boarded a train heading south towards Spain",
      ],
      description:
        "Then, he went to Marseilles, France and boarded at the Noalles Hotel. He visited the Chateau d’If before travelling by train to Barcelona, Spain.",
    },
    {
      id: 6,
      country: "Spain",
      city: "Barcelona",
      flag: "🇪🇸",
      date: "June 1882",
      details: [
        "Initially viewed Barcelona as an ugly city with a cold atmosphere",
        "Later appreciated it as a 'City of Freedom and Liberalism'",
        "Wrote his first patriotic essay 'Amor Patria' (Love of Country) under the pen name 'Laong Laan'",
        "Published in Diariong Tagalog; received warm congratulations from his friend Moran",
        "Requested for more articles, which prompted him to write 'Los Viajes' and 'Revisita de Madrid'",
      ],
      description:
        "He viewed Barcelona as an ugly city at first, but grew to appreciate it as a 'City of Freedom and Liberalism'. Rizal wrote his first essay 'Amor Patria' under his pen name Laong Laan. It was published in the Diariong Tagalog newspaper. Moran congratulated Rizal and requested more articles, leading to his second and third essays: 'Los Viajes' and 'Revisita de Madrid'.",
    },
    {
      id: 7,
      country: "Spain",
      city: "Madrid",
      flag: "🇪🇸",
      date: "September 1882 – 1885",
      details: [
        "Enrolled in the Universidad Central de Madrid to pursue higher studies",
        "Concurrently studied two separate degrees: Medicine, and Philosophy & Letters",
      ],
      description:
        "He left for Madrid to continue pursuing his studies at Universidad Central de Madrid with his two enrolled courses: Medicine, and Philosophy and Letters.",
    },
    {
      id: 8,
      country: "France",
      city: "Paris",
      flag: "🇫🇷",
      hotel: "Hotel de Paris & 124 Rue de Rennes",
      date: "Summer Vacation",
      details: [
        "Spent his summer vacation in the high-fashion capital of Europe",
        "Stayed first at the Hotel de Paris, then moved to 124 Rue de Rennes",
        "Sightseeing highlights: Champs Elysées Avenue, Opera House, and the Arch of Triumph",
        "Visited Place de la Concorde, Cathedral of Notre Dame, and the historic Invalides Museum",
      ],
      description:
        "On his summer vacation, he visited Paris and stayed at Hotel de Paris, and later at 124 Rue de Rennes. He visited the Champs Elysées Avenue, Opera House, Arch of Triumph, Place de la Concorde, Cathedral of Notre Dame, and the Invalides Museum.",
    },
    {
      id: 9,
      country: "Germany",
      city: "Heidelberg & Berlin",
      flag: "🇩🇪",
      date: "1886 – 1887",
      details: [
        "Moved to Germany to specialize in Ophthalmology under famous scientists",
        "Toured the majestic Heidelberg Castle and walked along the Neckar River",
        "Observed old churches and was deeply moved by the Ecumenism of Germans",
        "Composed a heartbreakingly beautiful poem about the Forget-me-not flowers titled 'A Las Flores de Heidelberg'",
        "Published his groundbreaking first novel 'Noli Me Tangere' in Berlin with funding help from Maximo Viola",
      ],
      description:
        "He arrived in Germany to specialize in Ophthalmology and associate with famous German scientists and scholars. He visited Heidelberg Castle, the Neckar River, old churches, and witnessed the Ecumenism of Germans. He wrote a poem about the beauty of Forget-me-not flowers titled 'A Las Flores de Heidelberg', and published his first novel, 'Noli Me Tangere', with the critical funding of Maximo Viola.",
    },
    {
      id: 10,
      country: "Czech Republic",
      city: "Leitmeritz",
      flag: "🇨🇿",
      date: "May 1887",
      details: [
        "Travelled by train to Leitmeritz in Bohemia",
        "Finally met Ferdinand Blumentritt, his close pen pal and scholar",
        "Introduced with two other Filipinos to the welcoming Blumentritt family",
        "Stayed at the Blumentritt residence for three days",
        "Delivered a speech in fluent German at the Tourists' Club of Leitmeritz, leaving the audience amazed",
      ],
      description:
        "He went to the Czech Republic via train and arrived at Leitmeritz, Bohemia. He met Ferdinand Blumentritt and two Filipinos who were introduced to the Blumentritt family, staying at their house for three days. Due to his fluent German, he spoke at the Tourists’ Club of Leitmeritz and the audience were amazed at his command of the language.",
    },
    {
      id: 11,
      country: "Austria",
      city: "Vienna",
      flag: "🇦🇹",
      hotel: "Hotel Metropole",
      date: "May 1887",
      details: [
        "Explored the stunning capital alongside Maximo Viola",
        "Admiration of Vienna's monumental churches, grand theaters, art galleries, and museums",
        "Lodged at the prestigious Hotel Metropole",
        "Met famous intellectual figures: novelist Norfenfals, and scholars Masner and Nordmann",
      ],
      description:
        "He and Viola explored Austria to see the churches, theaters, art galleries, and museums in Vienna. They stayed at the Hotel Metropole and met Norfenfals, the novelist, and scholars Masner and Nordmann.",
    },
    {
      id: 12,
      country: "Switzerland",
      city: "Schaffhausen, Basel, Bern & Lausanne",
      flag: "🇨🇭",
      date: "June 1887",
      details: [
        "Celebrated his 26th birthday with Maximo Viola on a scenic lake tour",
        "Stayed for two days in the historic town of Schaffhausen",
        "Continued their travel through the scenic cities of Basel, Bern, and Lausanne",
      ],
      description:
        "Switzerland: Rizal celebrated his 26th birthday with Viola on a lake tour. They stayed there for two days in Schaffhausen and continued to tour Basel, Bern, and Lausanne.",
    },
    {
      id: 13,
      country: "Italy",
      city: "Rome & Vatican City",
      flag: "🇮🇹",
      date: "June 1887",
      details: [
        "Travelled through northern cities: Turin, Milan, Venice, and Florence",
        "Reached the 'Eternal City' of Rome, which left him in deep awe",
        "Explored St. Peter's Basilica and the grand St. Peter's Square of the Vatican",
        "Wrote an emotional letter to his father, declaring his firm decision to return home",
      ],
      description:
        "Italy: Rizal travelled to Turin, Milan, Venice, and Florence. He reached the 'Eternal City' of Rome and visited the church of St. Peter and St. Peter’s square of the Vatican after two days. He wrote to his father about him coming back to the Philippines.",
    },
    {
      id: 14,
      country: "Philippines",
      city: "Manila & Calamba",
      flag: "🇵🇭",
      carrier: "Steamer Haipong",
      date: "August 1887",
      details: [
        "Boarded the steamer Haipong to cross the oceans back to Manila",
        "Driven by a strong resolve to operate on his mother's failing eyes",
        "Dedicated his medical services to treat and heal his Calamba townsmen",
      ],
      description:
        "Philippines: He reached Manila through the steamer 'Haipong' because he wanted to operate on his mother's eyes and to serve Calamba's townsmen.",
    },
  ];

  const currentStop = travelogue[activeStopIndex];

  const handleNext = () => {
    setActiveStopIndex((prev) => (prev + 1) % travelogue.length);
  };

  const handlePrev = () => {
    setActiveStopIndex(
      (prev) => (prev - 1 + travelogue.length) % travelogue.length,
    );
  };

  return (
    <div
      className="space-y-16 animate-fade-in"
      id="education-travels-container"
    >
      {/* Editorial Header Banner */}
      <div className="text-center space-y-2" id="education-view-header">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.25em] block uppercase">
          CHAMBER IV • ACADEME & JOURNEYS
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          Education & Travels
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "From the serene instruction of his mother to the elite universities
          and historic ports of the globe."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      {/* SECTION I: EDUCATION */}
      <div className="space-y-8" id="education-section-block">
        <div
          className="flex items-center gap-3 border-b border-gold-300/30 pb-3"
          id="edu-section-title"
        >
          <span className="p-2 rounded-full bg-crimson-50 text-crimson-850">
            <BookOpen size={20} />
          </span>
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-extrabold text-crimson-950">
              I. The Path of Academe
            </h2>
            <p className="text-xs text-amber-900/60 font-serif italic">
              Rizal's foundational scholastic training and academic degrees
            </p>
          </div>
        </div>

        {/* Elegant 3-Column Layout using strictly the requested information */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          id="education-cards-grid"
        >
          {/* Card 1: First steps & Letran */}
          <div
            className="p-6 bg-faf6ee border-2 border-gold-300/40 rounded-sm relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
            id="edu-card-early"
          >
            <div className="absolute top-2 right-2 text-gold-700/20">
              <BookOpen size={48} />
            </div>
            <div className="space-y-3">
              <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200/50 rounded-sm inline-block uppercase font-bold">
                Early Steps & Letran
              </span>
              <h3 className="font-serif text-lg font-bold text-crimson-950">
                First Teachers & Early Schooling
              </h3>
              <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                His mother was Rizal's first teacher who taught him how to read,
                pray, and write poems. Later, private tutors taught him Spanish
                and Latin before sending him to a private school in Binan. He
                took the entrance examination in Colegio de San Juan de Letran
                requested by his father and studied there for almost three
                months. Due to his radical and bold questions, the Dominican
                friars asked him to transfer to another school.
              </p>
            </div>
            <div className="pt-4 border-t border-gold-300/20 mt-4 flex items-center justify-between text-[10px] font-mono text-gold-800 font-bold">
              <span>EST. CALAMBA & BIÑAN</span>
              <span>1870s</span>
            </div>
          </div>

          {/* Card 2: Ateneo Municipal */}
          <div
            className="p-6 bg-faf6ee border-2 border-gold-300/40 rounded-sm relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
            id="edu-card-ateneo"
          >
            <div className="absolute top-2 right-2 text-gold-700/20">
              <Award size={48} />
            </div>
            <div className="space-y-3">
              <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200/50 rounded-sm inline-block uppercase font-bold">
                Ateneo Municipal
              </span>
              <h3 className="font-serif text-lg font-bold text-crimson-950">
                The Jesuit Academy of Manila
              </h3>
              <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                Rizal studied at Ateneo Municipal de Manila when he was 11 years
                old, earning excellent marks in Philosophy, Physics, Chemistry,
                and Natural history. He even wrote a prize-winning poetry and a
                melodrama called Junto al Pasig and practiced drawing, painting,
                and clay modeling.
              </p>
            </div>
            <div className="pt-4 border-t border-gold-300/20 mt-4 flex items-center justify-between text-[10px] font-mono text-gold-800 font-bold">
              <span>EXCELLENT RATINGS</span>
              <span>AGE 11 – 16</span>
            </div>
          </div>

          {/* Card 3: UST & Surveying */}
          <div
            className="p-6 bg-faf6ee border-2 border-gold-300/40 rounded-sm relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
            id="edu-card-ust"
          >
            <div className="absolute top-2 right-2 text-gold-700/20">
              <Activity size={48} />
            </div>
            <div className="space-y-3">
              <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200/50 rounded-sm inline-block uppercase font-bold">
                Santo Tomas & Degrees
              </span>
              <h3 className="font-serif text-lg font-bold text-crimson-950">
                Philosophy & Ophthalmology
              </h3>
              <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                He earned a land surveyor's and assessor's degree from Ateneo
                while taking Philosophy and Letters at University of Santo
                Thomas. He opted to study ophthalmology due to his mother going
                blind. However, he did not complete the course due to
                adversaries.
              </p>
            </div>
            <div className="pt-4 border-t border-gold-300/20 mt-4 flex items-center justify-between text-[10px] font-mono text-gold-800 font-bold">
              <span>OPHTHALMIC COURSE</span>
              <span>UST ADVERSARIES</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION II: TRAVELS */}
      <div
        className="space-y-8 pt-8 border-t-2 border-double border-gold-400"
        id="travels-section-block"
      >
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold-300/30 pb-3"
          id="travels-section-title"
        >
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-full bg-crimson-50 text-crimson-850">
              <Compass size={20} />
            </span>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-extrabold text-crimson-950">
                II. Grand Chronological Travelogue
              </h2>
              <p className="text-xs text-amber-900/60 font-serif italic">
                Trace the exact footsteps of Rizal’s journeys across countries,
                with details and flags
              </p>
            </div>
          </div>

          {/* Quick Counter */}
          <div className="text-xs font-mono font-bold bg-gold-50 border border-gold-300 text-gold-900 px-3 py-1.5 rounded-sm self-start md:self-auto">
            JOURNEY STATUS: STOP {activeStopIndex + 1} OF {travelogue.length}
          </div>
        </div>

        {/* Postcard Details View */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          id="travelogue-details-panel"
        >
          {/* Sidebar / Overview Map column */}
          <div className="lg:col-span-4" id="travelogue-sidebar">
            <div
              className="p-6 bg-faf6ee border-2 border-gold-300/40 rounded-sm space-y-4 shadow-sm h-full flex flex-col justify-between"
              id="sidebar-map-box"
            >
              <div className="space-y-4">
                <div className="border-b border-gold-300/20 pb-2">
                  <h3 className="font-serif text-lg font-bold text-crimson-950 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-crimson-850 animate-spin-slow" />
                    Chronological Log
                  </h3>
                  <p className="text-[10px] text-amber-900/60 font-serif italic">
                    The global itinerary mapped sequentially
                  </p>
                </div>

                {/* Highly structured list of stops with scroll capability */}
                <div
                  className="space-y-2 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gold-500 scrollbar-track-transparent"
                  id="timeline-scroll-container"
                >
                  {travelogue.map((stop, index) => {
                    const isActive = activeStopIndex === index;
                    return (
                      <div
                        key={stop.id}
                        onClick={() => setActiveStopIndex(index)}
                        className={`p-2.5 rounded-xs border cursor-pointer transition-all flex items-center gap-3 ${
                          isActive
                            ? "bg-crimson-900 border-crimson-300 text-gold-200 shadow-sm"
                            : "border-gold-200/50 hover:bg-gold-100/10"
                        }`}
                        id={`sidebar-timeline-item-${index}`}
                      >
                        <span className="text-xl filter drop-shadow-xs select-none">
                          {stop.flag}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`font-serif text-xs font-extrabold truncate ${isActive ? "text-gold-200" : "text-amber-950/80"}`}
                          >
                            {stop.id}. {stop.city}
                          </p>
                          <p
                            className={
                              "text-[9px] font-mono uppercase tracking-wide " +
                              (isActive ? "text-gold-200" : "text-amber-950/80")
                            }
                          >
                            {stop.country}
                          </p>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-crimson-850 animate-ping" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main detailed travel card */}
          <div
            className="lg:col-span-8 flex flex-col"
            id="travelogue-main-display"
          >
            <div
              className="parchment-card p-6 md:p-8 rounded-sm border-2 border-double border-gold-500 relative overflow-hidden flex flex-col justify-between flex-1 min-h-[460px]"
              id="passport-page-container"
            >
              <div className="absolute inset-2 border border-dashed border-gold-600/15 rounded-xs pointer-events-none" />

              {/* Top Row: Passport Header & Location Info */}
              <div
                className="flex flex-col md:flex-row justify-between items-start gap-4 border-b border-gold-300/30 pb-5 mb-5"
                id="passport-header"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl filter drop-shadow-md select-none">
                      {currentStop.flag}
                    </span>
                    <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200 rounded-sm inline-block uppercase font-bold">
                      CHRONOLOGICAL STOP #{currentStop.id}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950 leading-tight mt-1.5">
                    {currentStop.city}, {currentStop.country}
                  </h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gold-800 font-serif italic">
                    {currentStop.date && (
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-crimson-800" />
                        Date of Visit: {currentStop.date}
                      </span>
                    )}
                    {currentStop.carrier && (
                      <span className="flex items-center gap-1">
                        <Anchor size={12} className="text-crimson-800" />
                        Carrier: {currentStop.carrier}
                      </span>
                    )}
                    {currentStop.hotel && (
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-crimson-800" />
                        Lodging: {currentStop.hotel}
                      </span>
                    )}
                  </div>
                </div>

                {/* Ink postmark stamp representing the country */}
                <div
                  className="flex-shrink-0 w-20 h-20 border-2 border-dashed border-crimson-800/80 rounded-full flex flex-col items-center justify-center rotate-6 select-none shadow-sm bg-gold-50/10 p-2 text-center"
                  id="passport-custom-stamp"
                >
                  <span className="font-mono text-[7px] text-crimson-800 leading-none uppercase font-bold tracking-widest">
                    {currentStop.country}
                  </span>
                  <span className="text-xl my-0.5">{currentStop.flag}</span>
                  <span className="font-mono text-[6px] text-crimson-800 font-bold leading-none">
                    ARRIVED
                  </span>
                </div>
              </div>

              {/* Narrative & Timeline bullet points */}
              <div
                className="grid  gap-6 items-start flex-1"
                id="passport-body"
              >
                {/* Historical Narrative Card */}
                <div
                  className="md:col-span-6 bg-gold-50/50 p-5 border border-dashed border-gold-600/25 rounded-xs space-y-3"
                  id="passport-text"
                >
                  <div className="flex items-center gap-1.5">
                    <FileText size={14} className="text-crimson-800" />
                    <span className="font-display text-[9px] font-extrabold text-gold-700 tracking-wider uppercase">
                      HISTORICAL CHRONICLE
                    </span>
                  </div>
                  <p className="font-serif leading-relaxed text-amber-950 text-justify">
                    {currentStop.description}
                  </p>
                </div>
              </div>

              {/* Interactive Travel Controls */}
              <div
                className="mt-8 pt-4 border-t border-gold-300/35 flex justify-between items-center"
                id="passport-controls"
              >
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-gold-400 text-crimson-950 text-xs font-display font-bold rounded-xs bg-faf6ee hover:bg-gold-100/50 cursor-pointer transition-colors"
                  id="btn-prev-stop"
                >
                  <ChevronLeft size={14} />
                  PREVIOUS
                </button>

                <div className="hidden sm:flex gap-1">
                  {travelogue.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${idx === activeStopIndex ? "bg-crimson-850 scale-125" : "bg-gold-300/40"}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-gold-400 text-crimson-950 text-xs font-display font-bold rounded-xs bg-faf6ee hover:bg-gold-100/50 cursor-pointer transition-colors"
                  id="btn-next-stop"
                >
                  NEXT
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
