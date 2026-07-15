/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { writings } from "../../data";
import { WritingItem } from "../../types";

export default function WritingsView() {
  const [selectedBook, setSelectedBook] = useState<WritingItem>(writings[0]); // Default to Noli Me Tangere

  return (
    <div className="space-y-12 animate-fade-in" id="writings-view-container">
      <div className="text-center space-y-2">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.2em] block uppercase">
          CHAMBER VII • THE LITERARY COMPENDIUM
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          Writings & Main Legacy
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "Ink spilled in absolute dark, crafting words that became the
          explosive force that shattered an empire."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      {/* Library Shelf Interface */}
      <div className="space-y-6" id="library-shelf-section">
        <div className="text-center">
          <span className="font-display text-[9px] text-amber-900/50 tracking-widest uppercase font-bold block">
            The Scholar's Mahogany Bookshelf
          </span>
          <p className="text-xs text-amber-900/60 italic mt-0.5">
            (Select a leather-bound spine to draw the volume from the shelf)
          </p>
        </div>

        {/* The Bookshelf Row */}
        <div
          className="max-w-4xl mx-auto bg-amber-950/95 p-4 rounded-sm shadow-xl border-y-4 border-gold-600 relative flex items-end justify-center gap-2 md:gap-4 h-40"
          id="shelf-wood"
        >
          {/* Subtle wood shadow ring */}
          <div className="absolute inset-x-0 bottom-0 h-4 bg-black/40" />

          {writings.map((w) => {
            const isSelected = selectedBook.title === w.title;
            return (
              <button
                key={w.title}
                onClick={() => setSelectedBook(w)}
                className={`w-14 md:w-24 px-1 py-4 text-center rounded-t-sm relative cursor-pointer flex flex-col justify-between items-center transition-all duration-300 ${isSelected ? "h-36 -translate-y-2 bg-crimson-850 text-gold-100 border-2 border-gold-400 shadow-2xl" : "h-28 bg-amber-900 text-gold-200/85 hover:h-30 hover:bg-amber-850"}`}
                style={{
                  boxShadow:
                    "inset -4px 0 10px rgba(0,0,0,0.5), inset 4px 0 10px rgba(255,255,255,0.1)",
                }}
                id={`book-spine-${w.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {/* Book Gilded Ribs */}
                <div className="w-full h-0.5 bg-gold-500/50 my-1" />
                <div className="w-full h-0.5 bg-gold-500/50 my-1" />

                <div className="flex-grow flex items-center justify-center">
                  <h3 className="font-serif font-extrabold text-[8px] md:text-[10px] uppercase tracking-wider -rotate-90 vertical-text truncate max-w-[80px]">
                    {w.title.split(" ")[0]}
                  </h3>
                </div>

                <div className="w-full h-0.5 bg-gold-500/50 my-1" />
                <span className="font-mono text-[7px] md:text-[8px] font-bold block uppercase tracking-tighter">
                  {w.yearPublished}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Opened Book Spread View */}
      <div className="max-w-5xl mx-auto pt-6" id="book-spread-container">
        <div
          className="bg-[#FAF6EE] border-4 border-double border-gold-600 rounded-sm shadow-2xl grid grid-cols-1 md:grid-cols-2 min-h-[460px] relative overflow-hidden"
          id="book-pages-spread"
        >
          {/* Book Spine Center shadow crease */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-black/15 via-black/35 to-transparent z-20" />

          {/* LEFT PAGE: Excerpt and metadata */}
          <div
            className="p-6 md:p-10 flex flex-col justify-between relative z-10 space-y-6 md:border-r border-gold-300/20"
            id="left-page-container"
          >
            <div className="absolute inset-2 border border-dashed border-gold-600/10 pointer-events-none rounded-xs" />

            <div className="space-y-4" id="left-page-header">
              <div className="flex justify-between items-baseline border-b border-gold-300/30 pb-2">
                <span className="font-mono text-[8px] text-crimson-800 uppercase font-bold bg-crimson-50 px-2 py-0.5 border border-crimson-200/50 rounded-sm">
                  {selectedBook.type}
                </span>
                <span className="font-serif text-[11px] italic text-gold-800">
                  Published: {selectedBook.yearPublished}
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-950 tracking-tight leading-none">
                {selectedBook.title}
              </h2>
              <p className="font-serif text-xs italic text-gold-700">
                Printed in: {selectedBook.location}
              </p>
            </div>

            <div
              className="space-y-2 flex-grow justify-center flex flex-col"
              id="left-page-synopsis"
            >
              <span className="font-display text-[9px] font-bold text-crimson-900 tracking-wider uppercase">
                THE LITERARY SYNOPSIS
              </span>
              <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                {selectedBook.synopsis}
              </p>
            </div>

            <span className="font-mono text-[8px] text-gold-700/60 block pt-4 text-left border-t border-gold-300/10">
              RIZALIAN COMPENDIUM • FOLIO L
            </span>
          </div>

          {/* RIGHT PAGE: Significance and legacy impact */}
          <div
            className="p-6 md:p-10 flex flex-col justify-between relative z-10 space-y-6"
            id="right-page-container"
          >
            <div className="absolute inset-2 border border-dashed border-gold-600/10 pointer-events-none rounded-xs" />

            <div
              className="space-y-2 flex-grow justify-center flex flex-col"
              id="right-page-significance"
            >
              <span className="font-display text-[9px] font-bold text-crimson-900 tracking-wider uppercase border-b border-gold-600/15 pb-1">
                CONTEXT TRANSLATION
              </span>
              <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                {selectedBook.translation}
              </p>
            </div>

            {/* Special Quotation Stamp block */}
            <div
              className="p-4 bg-crimson-50/40 border border-dashed border-crimson-850/20 rounded-xs space-y-2"
              id="right-page-quote"
            >
              <span className="font-display text-[8px] font-bold text-crimson-800 tracking-wider uppercase block">
                REVOLUTIONARY LEGACY ECHO
              </span>
              <p className="font-serif italic text-xs leading-relaxed text-crimson-950 text-justify">
                "Our blood will water the tree of liberty. It is not our death
                that counts, but the truth we write that rises from our tombs."
              </p>
            </div>

            <span className="font-mono text-[8px] text-gold-700/60 block pt-4 text-right border-t border-gold-300/10">
              RIZALIAN COMPENDIUM • FOLIO LI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
