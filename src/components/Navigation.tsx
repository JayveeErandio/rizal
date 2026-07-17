/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ActivePage } from "../types";
import Crest from "./Crest";
interface NavigationProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export default function Navigation({
  activePage,
  onNavigate,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: ActivePage.HOME, label: "Home" },
    { id: ActivePage.CENTURY_CONTEXT, label: "Context & Law" },
    { id: ActivePage.EARLY_LIFE, label: "Early Life" },
    { id: ActivePage.EDUCATION, label: "Education & Travels" },
    { id: ActivePage.OTHER_SIDE, label: "Polymath" },
    { id: ActivePage.WOMEN, label: "Muses" },
    { id: ActivePage.WRITINGS_LEGACY, label: "Writings & Legacy" },
    { id: ActivePage.QUIZ, label: "Scholar's Exam" },
  ];

  return (
    <nav
      className="relative bg-[#faf6ee] border-b border-gold-300/40 shadow-sm z-30 font-sans sticky top-0"
      id="main-navigation-container"
    >
      {/* Upper Crest Ribbon - Harvard/Oxford feeling */}
      <div
        className="bg-[#FAF6EE] text-crimson-700 font-bold py-1 px-4 text-[9px] font-mono tracking-[0.25em] text-center uppercase"
        id="crest-ribbon"
      >
        * FORTITUDE • EXCELLENCE • UPRIGHTNESS *
      </div>

      <div
        className="bg-crimson-950 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="navigation-inner-wrapper"
      >
        <div
          className="flex justify-between items-center h-20"
          id="nav-height-box"
        >
          {/* Brand/Crest Block */}
          <div
            onClick={() => {
              onNavigate(ActivePage.HOME);
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 cursor-pointer select-none group"
            id="nav-logo-group"
          >
            <img src={`${import.meta.env.BASE_URL}logo.png`} width={50} />
            <div className="flex flex-col">
              <span className="font-display text-gold-200 font-bold text-[14px] md:text-[16px] tracking-widest leading-none">
                THE RIZAL
              </span>
              <span className="font-serif italic text-gold-300 text-[10px] md:text-[11px] leading-none mt-1">
                Life & Works of Jose Rizal
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (scannable horizontal bar) */}
          <div
            className="hidden lg:flex items-center gap-1.5"
            id="desktop-nav-items"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 rounded-xs font-display font-bold text-[10px] tracking-wider uppercase transition-all duration-200 cursor-pointer ${isActive ? "text-gold-100 bg-crimson-850 border border-gold-500/35 shadow-inner scale-102" : "text-gold-200 hover:bg-gold-100/50 hover:text-crimson-800"}`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <div
            className="lg:hidden flex items-center"
            id="mobile-hamburger-container"
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-crimson-950 hover:bg-gold-100/40 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500 cursor-pointer"
              aria-label="Toggle Navigation Menu"
              id="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? (
                /* Close Icon */
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ebdc94"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Menu Hamburger Icon */
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ebdc94"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-[#FAF6EE] border-t border-gold-300/40 py-3 shadow-lg px-4 space-y-1.5 animate-slide-down"
          id="mobile-drawer-menu"
        >
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-sm font-serif font-bold text-xs tracking-wide border transition-all ${isActive ? "bg-crimson-850 text-crimson-500 border-gold-400" : "bg-faf6ee text-crimson-950 border-gold-200/20 hover:bg-gold-100/30"}`}
                id={`mobile-nav-item-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
