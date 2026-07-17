/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ParchmentCard from "../ParchmentCard";

export default function EarlyLifeView() {
  const [candleIntensity, setCandleIntensity] = useState<number>(65);

  // Translate candle intensity to visual styles for the moth story
  const textShadowValue = `0 0 ${candleIntensity / 4}px rgba(212, 175, 55, ${candleIntensity / 100})`;
  const cardBackground = `rgba(250, 245, 235, ${0.85 + candleIntensity / 1000})`;
  const sepiaFilter = `sepia(${25 + candleIntensity / 2}%)`;

  return (
    <div className="space-y-12 animate-fade-in" id="early-life-view-container">
      {/* Editorial Chamber Header */}
      <div className="text-center space-y-2">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.2em] block uppercase">
          CHAMBER II • THE PRINCIPALIA & BOY OF LAGUNA
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          Early Life & Family
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "A noble household of agriculture, letters, and courageous service,
          where a young boy dreamed beside the lake of Bay and was prepared for
          the fires of truth."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      {/* SECTION 1: PARENTS & THE SIBLINGS (Sequential textual paragraph layout) */}
      <div
        className="space-y-8 border-b border-gold-300/30 pb-10"
        id="family-pedigree-section"
      >
        <div className="space-y-1">
          <span className="font-display text-gold-600 text-[10px] font-bold tracking-widest block uppercase">
            Section I • The Matrix of Bloodlines
          </span>
          <h2 className="font-serif text-2xl font-bold text-crimson-950">
            Parents & The Eleven Siblings
          </h2>
          <p className="text-xs text-amber-900/60 font-serif italic">
            The patriarchal shield, maternal guide, and brotherly/sisterly
            companions of Rizal's life, presented in historical sequence.
          </p>
          <div className="w-16 h-px bg-gold-400 mt-2" />
        </div>

        {/* PARENTS BLOCK */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          id="parents-narrative-cards"
        >
          <div className="p-5 bg-faf6ee border border-gold-300/50 rounded-sm shadow-sm space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gold-100/30 rounded-bl-full border-l border-b border-gold-300/10 pointer-events-none" />
            <div className="flex-row flex justify-between items-center">
              <h3 className="font-serif text-xl font-bold text-crimson-950">
                Don Francisco Mercado
              </h3>
              <span className="font-mono text-[8px] bg-crimson-900 p-1 text-center px-3 rounded-full font-bold uppercase tracking-widest text-gold-200 z-50">
                THE FATHER
              </span>
            </div>

            <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
              Don Francisco Mercado and Doña Teodora Alonso Realonda are Rizal's
              parents. Don Francisco Mercado was an independent man who worked
              hard as a tenant-farmer of a Dominican-owned hacienda, and was
              strong in body and valiant in spirit. He was called{" "}
              <strong>"A model of fathers"</strong> by Jose Rizal.
            </p>
          </div>

          <div className="p-5 bg-faf6ee border border-gold-300/50 rounded-sm shadow-sm space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gold-100/30 rounded-bl-full border-l border-b border-gold-300/10 pointer-events-none" />
            <div className="flex-row flex justify-between items-center">
              <h3 className="font-serif text-xl font-bold text-crimson-950">
                Doña Teodora Alonso Realonda
              </h3>
              <span className="font-mono text-[8px] bg-crimson-900 text-center p-1 px-3 rounded-full font-bold uppercase tracking-widest text-gold-200 z-50">
                THE MOTHER
              </span>
            </div>

            <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
              Doña Teodora Alonso Realonda was known as a remarkable woman who
              possessed refined culture, literary talent, business ability, and
              the fortitude of Spartan women. She knew how to speak Spanish and
              literature, and was the first teacher of Jose Rizal.
            </p>
          </div>
        </div>

        {/* SIBLINGS NARRATIVE SEQUENCE */}
        <div className="space-y-4" id="siblings-narrative-box">
          <div className="p-4 bg-gold-50/20 border-l-2 border-gold-500 rounded-r-xs">
            <p className="text-xs md:text-sm font-serif italic text-amber-950/80">
              "Jose Rizal is the seventh child of 11 siblings, comprising 2 boys
              and 9 girls. Below is the chronicle of the brothers and sisters of
              Calamba:"
            </p>
          </div>

          <div className="space-y-3" id="siblings-scrolling-paragraphs">
            {/* 1. Saturnina */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed"
              id="sibling-saturnina"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  1ST SIBLING
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Saturnina or Neneng
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Saturnina or Neneng was the oldest of the Rizal siblings. She
                married Manuel T. Hidalgo from Tanawan, Batangas, and served as
                a crucial correspondence hub for the family.
              </p>
            </div>

            {/* 2. Paciano */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed"
              id="sibling-paciano"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  2ND SIBLING
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Paciano
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Paciano was the second child. He was an older brother and a
                second father to Jose Rizal, who regarded him as the{" "}
                <strong>"Most noble of Filipinos."</strong> Paciano became a
                combat general in the Philippine Revolution and was immortalized
                by Jose in <em>Noli Me Tangere</em> as the wise philosopher,{" "}
                <strong>Pilosopo Tasio</strong>.
              </p>
            </div>

            {/* 3. Narcisa */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed"
              id="sibling-narcisa"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  3RD SIBLING
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Narcisa or Sisa
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Narcisa or Sisa was the third child. She married Antonio Lopez,
                a school teacher of Morong and a nephew of Father Leoncio Lopez.
                She was a major financier of Jose's studies abroad.
              </p>
            </div>

            {/* 4. Olimpia */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed"
              id="sibling-olimpia"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  4TH SIBLING
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Olimpia or Ypia
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Olimpia or Ypia was the fourth child. She married Silvestre
                Ubaldo, a telegraph operator from Manila. Jose was closest to
                her during their school days.
              </p>
            </div>

            {/* 5. Lucia */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed"
              id="sibling-lucia"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  5TH SIBLING
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Lucia
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Lucia was the fifth child. She married Mariano Herbosa from
                Calamba, a nephew of Father Casanas. Tragically, Mariano died
                due to cholera in 1889 and was denied a Christian burial by
                colonial authorities because of his association as Jose Rizal’s
                brother-in-law.
              </p>
            </div>

            {/* 6. Maria */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed"
              id="sibling-maria"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  6TH SIBLING
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Maria or Biang
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Maria or Biang was the sixth child. She married Daniel Faustino
                Cruz from Biñan, Laguna, and was a close confidante to Jose
                during his later romantic anxieties.
              </p>
            </div>

            {/* 7. Jose (The Hero) */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed bg-crimson-50/20 px-3 rounded-xs"
              id="sibling-jose"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-crimson-800 bg-crimson-100/60 px-2 py-0.5 rounded-sm">
                  7TH SIBLING • HERO
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Jose or Pepe
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Jose or Pepe was the greatest Filipino hero. He was the seventh
                child and author of the classic anti-colonial masterpieces{" "}
                <em>Noli Me Tangere</em> and <em>El Filibusterismo</em>, whose
                life of martyrdom triggered the birth of the nation.
              </p>
            </div>

            {/* 8. Concepcion */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed"
              id="sibling-concepcion"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  8TH SIBLING
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Conception or Concha
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Conception or Concha was the eighth child (listed as seventh in
                the sibling index). She died of sickness at the tender age of
                three. Her passing represented Jose Rizal's very first sorrow in
                his life, introducing him to the fragility of love.
              </p>
            </div>

            {/* 9. Josefa */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed"
              id="sibling-josefa"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  9TH SIBLING
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Josefa or Panggoy
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Josefa or Panggoy was the eighth sister (ninth sibling). She
                remained single, lived to the age of 80, and served as a brave
                patriot in the Katipunan's women's division.
              </p>
            </div>

            {/* 10. Trinidad */}
            <div
              className="py-3 border-b border-gold-200/40 text-sm leading-relaxed"
              id="sibling-trinidad"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  10TH SIBLING
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Trinidad or Trining
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Trinidad or Trining was the ninth sister (tenth sibling). She
                also died unmarried at the age of 83. She was the custodian to
                whom Jose entrusted his final poem, hidden inside an alcohol
                stove, on the eve of his death.
              </p>
            </div>

            {/* 11. Soledad */}
            <div className="py-3 text-sm leading-relaxed" id="sibling-soledad">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-[9px] text-gold-700 bg-gold-100/50 px-2 py-0.5 rounded-sm">
                  11TH SIBLING • YOUNGEST
                </span>
                <h4 className="font-serif font-extrabold text-crimson-950 text-base">
                  Soledad or Choleng
                </h4>
              </div>
              <p className="text-amber-950/85 mt-1.5 text-justify">
                Soledad or Choleng was the youngest child of Rizal. She married
                Pantaleon Quintero from Calamba and was known for her vivacious
                spirit and courage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: RIZAL'S CHILDHOOD */}
      <div className="space-y-8" id="childhood-section">
        <div className="space-y-1">
          <span className="font-display text-gold-600 text-[10px] font-bold tracking-widest block uppercase">
            Section II • The Boy of Laguna & The Fable of Light
          </span>
          <h2 className="font-serif text-2xl font-bold text-crimson-950">
            Rizal's Childhood
          </h2>
          <p className="text-xs text-amber-900/60 font-serif italic">
            Chronicles of his birth, early training, the tutelage of his uncles,
            and the immortal lesson of the candle moth.
          </p>
          <div className="w-16 h-px bg-gold-400 mt-2" />
        </div>

        <div className="grid  gap-8 items-start" id="childhood-narrative-grid">
          {/* Birth, Baptism, & Uncles */}
          <div
            className="lg:col-span-6 space-y-6"
            id="childhood-textual-column"
          >
            {/* Birth & Baptism Card */}
            <div
              className="p-5 bg-faf6ee border border-gold-300/40 rounded-sm shadow-sm space-y-3"
              id="birth-and-baptism"
            >
              <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-crimson-850">
                THE INCEPTION
              </span>
              <h3 className="font-serif text-lg font-bold text-crimson-950">
                Birth & Baptism
              </h3>
              <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                Jose Protacio Rizal Mercado y Alonso Realonda was born on{" "}
                <strong>June 19, 1861</strong> at Calamba, Laguna. He was
                baptized at the Catholic Church of Calamba by the priest named{" "}
                <strong>Rev. Rufino Collantes</strong>, and his sponsor was
                named <strong>Rev. Pedro Casanas</strong>.
              </p>
            </div>

            {/* Character & Desire to Learn */}
            <div
              className="p-5 bg-faf6ee border border-gold-300/40 rounded-sm shadow-sm space-y-3"
              id="character-learn"
            >
              <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-crimson-850">
                MENTAL FORMATION
              </span>
              <h3 className="font-serif text-lg font-bold text-crimson-950">
                Character & Early Guidance
              </h3>
              <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                His childhood was characterized by his intense desire to learn.
                He was taught by his mother how to read, write, and pray. He
                also knew how to respect other's rights and requested his elders
                to reason with him. He was welcoming to adults due to his
                respectful manners and scholarly curiosity.
              </p>
            </div>

            {/* The Three Uncles */}
            <div
              className="p-5 bg-faf6ee border border-gold-300/40 rounded-sm shadow-sm space-y-3"
              id="three-uncles"
            >
              <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-crimson-850">
                TUTELAGE
              </span>
              <h3 className="font-serif text-lg font-bold text-crimson-950">
                The Three Uncles
              </h3>
              <p className="text-xs md:text-sm text-amber-950/85 leading-relaxed text-justify">
                There were three maternal uncles who gave crucial lessons to
                Rizal during his childhood:
              </p>
              <ul className="space-y-2 mt-2 text-xs md:text-sm text-amber-950/85">
                <li className="text-justify">
                  <strong>Uncle Jose:</strong> The youngest uncle, who took care
                  of teaching regular scholastic lessons and early academic
                  studies.
                </li>
                <li className="text-justify">
                  <strong>Uncle Manuel:</strong> A powerful athlete who
                  developed José's physical coordination and strength until he
                  possessed a body of <em>"silk and steel"</em> to counteract
                  his naturally frail physique.
                </li>
                <li className="text-justify">
                  <strong>Uncle Gregorio:</strong> An intellectual who instilled
                  in José a intense love for books, self-discipline, and taught
                  him to make tireless effort to obtain whatever he desired in
                  life.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
