/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  GraduationCap,
  Users,
  BookOpen,
  Link,
  BookMarked,
  Award,
  Terminal,
  ExternalLink,
} from "lucide-react";

export default function CreditsView() {
  const references = [
    {
      id: 1,
      citation:
        "Abellon, B. (2024, November 10). All the girls Rizal loved before | ABS-CBN Lifestyle. ABS-CBN.",
      url: "http://abs-cbn.com/ancx/culture/spotlight/12/30/18/all-the-girls-rizal-loved-before",
    },
    {
      id: 2,
      citation: "Client challenge. (n.d.-b).",
      url: "https://www.slideshare.net/slideshow/teodora-alonso-1827-1911/42197333#1",
    },
    {
      id: 3,
      citation:
        "National Historical Commission of the Philippines. Rizal and the lessons his mother taught him.",
      url: "https://nhcp.gov.ph/rizal-and-the-lessons-his-mother-taught-him/",
    },
    {
      id: 4,
      citation:
        "José Rizal | Literature and Writing | Research Starters | EBSCO Research. (n.d.). EBSCO.",
      url: "https://www.ebsco.com/research-starters/literature-and-writing/jose-rizal",
    },
    {
      id: 5,
      citation: "Jose Rizal online. Josephine Bracken.",
      url: "https://rizal.raphaelmarco.com/blog/josephine-bracken",
    },
    {
      id: 6,
      citation: "Jose Rizal online. Suzanne Jacoby.",
      url: "https://rizal.raphaelmarco.com/blog/suzanne-jacoby",
    },
    {
      id: 7,
      citation: "Jose Rizal online. Nellie Boustead.",
      url: "https://rizal.raphaelmarco.com/blog/nellie-boustead",
    },
    {
      id: 8,
      citation: "Jose Rizal online. O-Sei-San.",
      url: "https://rizal.raphaelmarco.com/blog/o-sei-san",
    },
    {
      id: 9,
      citation: "Jose Rizal online. Consuelo Ortiga.",
      url: "https://rizal.raphaelmarco.com/blog/consuelo-ortiga",
    },
    {
      id: 10,
      citation:
        "Noli Me Tangere (Touch Me Not) by José Rizal - Reading Guide: 9780143039693 - PenguinRandomHouse.com: books. (2006, June 27). PenguinRandomhouse.com.",
      url: "https://www.penguinrandomhouse.com/books/291131/noli-me-tangere-touch-me-not-by-jose-rizal/9780143039693/readers-guide/",
    },
    {
      id: 11,
      citation: "The Freeman. Rizal's mother, 9 sisters, and 9 women.",
      url: "https://www.philstar.com/the-freeman/opinion/2019/06/20/1927916/rizals-mother-9-sisters-and-9-women",
    },
    {
      id: 12,
      citation:
        "Module 2 THE 19TH CENTURY PHILIPPINES AS RIZAL Contexts 1 | PDF | Spanish Empire | Philippines. (n.d.). Scribd. Retrieved July 15, 2026.",
      url: "https://www.scribd.com/document/497869743/Module-2-THE-19TH-CENTURY-PHILIPPINES-AS-RIZAL-Contexts-1",
    },
    {
      id: 13,
      citation:
        "The Philippine in the 19th century. (2021, August 28). SlideShare.",
      url: "https://www.slideshare.net/slideshow/the-philippine-in-the-19th-century/250068791",
    },
    {
      id: 14,
      citation: "Cruz, S. S. (2021). Rizal family background. Scribd.",
      url: "https://www.scribd.com/presentation/503491813/rizal-family-background",
    },
    {
      id: 15,
      citation: "Jose Rizal’s childhood. (2013, August 30). SlideShare.",
      url: "https://www.slideshare.net/slideshow/jose-rizal-ppt-nung-bata-pa-siya-lol/25753697",
    },
    {
      id: 16,
      citation:
        "luffymugewara. (2022, November 10). Rizal’s Educational Background.pptx. Slideshare.",
      url: "https://www.slideshare.net/slideshow/rizals-educational-backgroundpptx/254113320#2",
    },
    {
      id: 17,
      citation:
        "LyrehcAblasi. (2024, March 2). Rizal’s First Travel abroad Powepoint.pptx. Slideshare.",
      url: "https://www.slideshare.net/slideshow/rizals-first-travel-abroad-powepointpptx/266592086#46",
    },
    {
      id: 18,
      citation:
        "Jose Rizal Online. (n.d.). Jose Rizal Online. Retrieved July 18, 2026.",
      url: "https://rizal.raphaelmarco.com/travels",
    },
  ];

  const teamMembers = [
    {
      name: "JOHN OSIAS",
      role: "Leader",
      description:
        "Spearheaded the design system, structural architecture, and aesthetic refinement.",
    },
    {
      name: "JAYVEE ERANDIO",
      role: "Developer",
      description:
        "Programmed modular views, interactive mechanics, and chronological states.",
    },
    {
      name: "CHRISTINE GANIAS",
      role: "Demonstrator",
      description:
        "Orchestrated system presentation, narrative pacing, and user journey flow.",
    },
    {
      name: "ALEX ARENAS",
      role: "Researcher",
      description:
        "Sourced primary historical data, verified historical timelines, and compiled archives.",
    },
    {
      name: "ALISA EBANCUEL",
      role: "Documentation",
      description:
        "Curated bibliographic citations, text proofing, and project references.",
    },
  ];

  return (
    <div
      className="space-y-12 animate-fade-in text-amber-950"
      id="credits-view-container"
    >
      {/* Editorial Header Banner */}
      <div className="text-center space-y-2" id="credits-view-header">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.25em] block uppercase">
          CHAMBER VIII • COLOPHON & CREDITS
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          Credits & References
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "A modern digital archive dedicated to the life, heroism, and global
          travels of Dr. José Rizal."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      {/* Grid: Academic Institution Card & Project Team Card */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        id="credits-top-grid"
      >
        {/* Academic Profile (FEU Diliman details) */}
        <div className="lg:col-span-5" id="credits-institution-card">
          <div className="p-6 md:p-8 bg-faf6ee border-2 border-gold-300/40 rounded-sm relative overflow-hidden flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-all">
            {/* Watermark Logo Container */}
            <div className="absolute top-4 right-4 text-gold-700/10 pointer-events-none">
              <GraduationCap size={120} />
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200/50 rounded-sm inline-block uppercase font-bold">
                  ACADEMIC AFFILIATION
                </span>
                <h2 className="font-serif text-2xl font-extrabold text-crimson-950">
                  FEU Diliman
                </h2>
                <p className="text-xs text-gold-800/80 font-mono font-medium tracking-wide uppercase">
                  Far Eastern University - Diliman
                </p>
              </div>

              <div className="w-12 h-0.5 bg-crimson-700" />

              <div className="space-y-4 text-xs md:text-sm font-serif">
                <div className="flex items-start gap-3">
                  <span className="p-1.5 rounded bg-crimson-50 text-crimson-850 mt-0.5">
                    <GraduationCap size={16} />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900/60 block">
                      COURSE NAME & CODE
                    </span>
                    <p className="font-bold text-crimson-950">
                      Life and Works of Rizal (GED0049)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-1.5 rounded bg-crimson-50 text-crimson-850 mt-0.5">
                    <Award size={16} />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900/60 block">
                      COURSE INSTRUCTOR
                    </span>
                    <p className="font-bold text-crimson-950">
                      Mr. Lenard Tulod
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-1.5 rounded bg-crimson-50 text-crimson-850 mt-0.5">
                    <Terminal size={16} />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900/60 block">
                      ACADEMIC PROGRAM
                    </span>
                    <p className="font-bold text-crimson-950">
                      BSIT - Specialized in Web & Mobile Application
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-1.5 rounded bg-crimson-50 text-crimson-850 mt-0.5">
                    <Users size={16} />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900/60 block">
                      SECTION BLOCK & YEAR LEVEL
                    </span>
                    <p className="font-bold text-crimson-950">
                      Block DW31 • 3rd Year
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gold-300/20 mt-6 flex items-center justify-between text-[10px] font-mono text-gold-800 font-bold">
              <span>MANILA, PHILIPPINES</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </div>

        {/* Project Team Members Grid */}
        <div className="lg:col-span-7" id="credits-team-card">
          <div className="p-6 md:p-8 bg-faf6ee border-2 border-gold-300/40 rounded-sm relative overflow-hidden flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200/50 rounded-sm inline-block uppercase font-bold">
                  PROJECT ARCHITECTS
                </span>
                <h2 className="font-serif text-2xl font-extrabold text-crimson-950">
                  The Research & Development Team
                </h2>
                <p className="text-xs text-amber-900/60 font-serif italic">
                  Co-authored and designed by students of BSIT specializing in
                  Web and Mobile applications
                </p>
              </div>

              <div className="w-12 h-0.5 bg-crimson-700" />

              <div className="space-y-3 pt-2">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gold-50/40 border border-gold-300/10 rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-gold-100/10 transition-colors"
                  >
                    <div>
                      <p className="font-serif font-extrabold text-sm text-crimson-950">
                        {member.name}
                      </p>
                      <p className="text-xs text-amber-950/70 font-serif">
                        {member.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-crimson-800 bg-gold-100 border border-crimson-200/45 px-2 py-0.5 rounded-sm self-start md:self-auto">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section III: Bibliographic References */}
      <div
        className="space-y-6 pt-6 border-t-2 border-double border-gold-400"
        id="references-section-block"
      >
        <div
          className="flex items-center gap-3 border-b border-gold-300/30 pb-3"
          id="references-section-title"
        >
          <span className="p-2 rounded-full bg-crimson-50 text-crimson-850">
            <BookMarked size={20} />
          </span>
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-extrabold text-crimson-950">
              Academic Bibliography & Sources
            </h2>
            <p className="text-xs text-amber-900/60 font-serif italic">
              References and literature utilized to build this historical
              exhibition
            </p>
          </div>
        </div>

        {/* References list */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          id="references-list-grid"
        >
          {references.map((ref) => (
            <div
              key={ref.id}
              className="p-4 bg-faf6ee border border-gold-300/40 rounded-sm relative flex flex-col justify-between shadow-xs hover:shadow-sm transition-all text-justify"
              id={`reference-item-${ref.id}`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 border border-crimson-200/45 px-2 py-0.5 rounded-xs font-bold">
                    SOURCE #{ref.id}
                  </span>
                  <BookOpen size={12} className="text-gold-700/40" />
                </div>
                <p className="font-serif text-xs md:text-[13px] leading-relaxed text-amber-950 pl-0.5">
                  {ref.citation}
                </p>
              </div>

              {ref.url && (
                <div className="mt-4 pt-2 border-t border-gold-300/10 flex items-center justify-start">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-crimson-800 hover:text-crimson-950 flex items-center gap-1 transition-colors hover:underline"
                  >
                    <Link size={10} />
                    <span>View Reference Link</span>
                    <ExternalLink size={8} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
