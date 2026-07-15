/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface ParchmentCardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  headerBadge?: string;
  doubleBorder?: boolean;
  ornament?: boolean;
}

export default function ParchmentCard({
  children,
  title,
  subtitle,
  className = "",
  headerBadge,
  doubleBorder = true,
  ornament = true
}: ParchmentCardProps) {
  return (
    <div
      className={`parchment-card relative rounded-sm p-6 md:p-8 transition-all duration-300 hover:shadow-md ${className}`}
      id={`parchment-card-${title ? title.replace(/\s+/g, "-").toLowerCase() : "generic"}`}
    >
      {/* Victorian corner decorations */}
      {ornament && (
        <>
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold-400/50 rounded-tl-sm pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold-400/50 rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold-400/50 rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold-400/50 rounded-br-sm pointer-events-none" />
        </>
      )}

      {/* Optional Secondary Inner Double border line */}
      {doubleBorder && (
        <div className="absolute inset-2 border border-dashed border-gold-600/15 rounded-sm pointer-events-none" />
      )}

      {/* Card Content */}
      <div className="relative z-10">
        {/* Optional Header Badge */}
        {headerBadge && (
          <span className="inline-block px-2 py-0.5 mb-3 font-mono text-[9px] tracking-wider text-crimson-800 border border-crimson-800/35 bg-crimson-50/50 rounded-sm">
            {headerBadge}
          </span>
        )}

        {/* Title Block */}
        {(title || subtitle) && (
          <div className="mb-4 border-b border-gold-300/30 pb-3">
            {title && (
              <h3 className="font-serif text-xl md:text-2xl font-bold text-crimson-950 tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="font-serif text-xs italic text-gold-800/80 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Card Body */}
        <div className="text-sm text-amber-950/95 leading-relaxed font-sans">
          {children}
        </div>

        {/* Small Bottom Floral Ornament Icon */}
        {ornament && (
          <div className="mt-5 flex justify-center text-gold-500/30">
            <svg
              className="w-8 h-3"
              viewBox="0 0 100 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 50 10 C 40 10 35 15 20 10 C 35 5 40 10 50 10 Z" />
              <circle cx="50" cy="10" r="2" />
              <path d="M 50 10 C 60 10 65 15 80 10 C 65 5 60 10 50 10 Z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
