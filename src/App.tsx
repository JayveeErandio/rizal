/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ActivePage } from "./types";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import Crest from "./components/Crest";

// Modular View Imports
import HomeView from "./components/views/HomeView";
import ContextView from "./components/views/ContextView";
import EarlyLifeView from "./components/views/EarlyLifeView";
import EducationView from "./components/views/EducationView";
import OtherSideView from "./components/views/OtherSideView";
import WomenView from "./components/views/WomenView";
import WritingsView from "./components/views/WritingsView";
import QuizView from "./components/views/QuizView";

const pageToPath: Record<ActivePage, string> = {
  [ActivePage.HOME]: "/",
  [ActivePage.CENTURY_CONTEXT]: "/context",
  [ActivePage.EARLY_LIFE]: "/early-life",
  [ActivePage.EDUCATION]: "/education",
  [ActivePage.TRIPS]: "/education",
  [ActivePage.OTHER_SIDE]: "/other-side",
  [ActivePage.WOMEN]: "/women",
  [ActivePage.WRITINGS_LEGACY]: "/writings",
  [ActivePage.QUIZ]: "/quiz",
};

const pathToPage: Record<string, ActivePage> = {
  "/": ActivePage.HOME,
  "/context": ActivePage.CENTURY_CONTEXT,
  "/early-life": ActivePage.EARLY_LIFE,
  "/education": ActivePage.EDUCATION,
  "/trips": ActivePage.EDUCATION,
  "/other-side": ActivePage.OTHER_SIDE,
  "/women": ActivePage.WOMEN,
  "/writings": ActivePage.WRITINGS_LEGACY,
  "/quiz": ActivePage.QUIZ,
};

// Digital hand-drawn vector signature of José Rizal
const RizalSignature = () => (
  <svg
    viewBox="0 0 400 120"
    className="w-48 h-14 text-crimson-950/85"
    fill="none"
    stroke="gold"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M25,85 C60,25 90,45 110,65 C130,85 150,90 170,55 C190,20 220,15 235,45 C250,75 240,95 260,85 C280,75 290,40 310,35 C330,30 350,60 375,50" />
    <path d="M80,70 Q140,110 200,85 T320,60" />
    <path
      d="M50,90 C120,110 210,115 360,75"
      strokeWidth="1"
      strokeDasharray="3 3"
    />
  </svg>
);

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const activePage = pathToPage[location.pathname] ?? ActivePage.HOME;

  const handleNavigation = (page: ActivePage) => {
    const path = pageToPath[page];

    if (location.pathname === path) return;

    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderActiveView = () => {
    switch (activePage) {
      case ActivePage.HOME:
        return (
          <HomeView onNavigate={(p) => handleNavigation(p as ActivePage)} />
        );
      case ActivePage.CENTURY_CONTEXT:
        return <ContextView />;
      case ActivePage.EARLY_LIFE:
        return <EarlyLifeView />;
      case ActivePage.EDUCATION:
        return <EducationView />;
      case ActivePage.TRIPS:
        return <EducationView />;
      case ActivePage.OTHER_SIDE:
        return <OtherSideView />;
      case ActivePage.WOMEN:
        return <WomenView />;
      case ActivePage.WRITINGS_LEGACY:
        return <WritingsView />;
      case ActivePage.QUIZ:
        return <QuizView />;
      default:
        return (
          <HomeView onNavigate={(p) => handleNavigation(p as ActivePage)} />
        );
    }
  };

  return (
    <div
      className="min-h-screen bg-[#faf6ee] text-amber-950/90 font-serif flex flex-col selection:bg-crimson-800 selection:text-gold-100"
      style={{
        backgroundImage: "radial-gradient(#e5dfd3 0.8px, transparent 0.8px)",
        backgroundSize: "24px 24px",
      }}
      id="main-scaffold"
    >
      {/* Main Prestigious Navigation */}
      <Navigation activePage={activePage} onNavigate={handleNavigation} />

      {/* Structured Multi-Panel Framework */}
      <div
        className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
        id="scaffold-content"
      >
        <PageTransition pageId={activePage}>
          {renderActiveView()}
        </PageTransition>
      </div>

      {/* Prestigious Editorial Footer */}
      <footer
        className="border-t border-gold-300/40 bg-faf6ee bg-crimson-950 py-10 text-center space-y-4"
        id="scaffold-footer"
      >
        <div className="w-24 h-px bg-gold-400 mx-auto" />

        <div className="space-y-1">
          <p className="font-display font-bold text-[10px] tracking-[0.25em] text-gold-200 uppercase">
            Life & Works of Rizal
          </p>
        </div>

        <div className="pt-2">
          <RizalSignature />
        </div>

        <div>
          <p className="font-mono text-[9px] text-gold-200 tracking-wider">
            JOHN OSIAS - LEAD PROJECT
          </p>
          <p className="font-mono text-[9px] text-gold-200 tracking-wider">
            JAYVEE ERANDIO - PROJECT DEVELOPER
          </p>
          <p className="font-mono text-[9px] text-gold-200 tracking-wider">
            CHRISTINE GANIAS - DEMONSTRATOR
          </p>
          <p className="font-mono text-[9px] text-gold-200 tracking-wider">
            ALEX ARENAS - RESEARCHER
          </p>
          <p className="font-mono text-[9px] text-gold-200 tracking-wider">
            ALISA EBANCUEL - DOCUMENTATION
          </p>
        </div>
      </footer>
    </div>
  );
}
