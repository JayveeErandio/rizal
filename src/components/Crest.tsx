/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface CrestProps {
  className?: string;
  size?: number;
}

export default function Crest({ className = "", size = 100 }: CrestProps) {
  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      id="academic-crest-container"
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full text-gold-600 fill-none"
        xmlns="http://www.w3.org/2000/svg"
        id="academic-crest-svg"
      >
        {/* Outer Fine Double Borders */}
        <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="1.5" />

        {/* Outer Circular Texts */}
        <path
          id="crest-text-path-top"
          d="M 25 100 A 75 75 0 0 1 175 100"
          fill="none"
        />
        <path
          id="crest-text-path-bottom"
          d="M 175 100 A 75 75 0 0 1 25 100"
          fill="none"
        />

        <text className="font-display fill-gold-700 font-bold text-[10.5px] tracking-[0.18em]">
          <textPath href="#crest-text-path-top" startOffset="50%" textAnchor="middle">
            SCHOLASTICA RIZALIANA
          </textPath>
        </text>

        <text className="font-display fill-crimson-800 font-semibold text-[10px] tracking-[0.12em]">
          <textPath href="#crest-text-path-bottom" startOffset="50%" textAnchor="middle">
            * PRO PATRIA ET VERITAS *
          </textPath>
        </text>

        {/* Inner Shield / Seal */}
        <g id="shield-group" transform="translate(45, 45)">
          {/* Decorative shield contour */}
          <path
            d="M 10 5 Q 55 -5 100 5 C 100 55 90 85 55 105 C 20 85 10 55 10 5 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="#FAF6EE"
            className="fill-gold-50/50"
          />
          <path
            d="M 13 8 Q 55 -1 97 8 C 97 50 87 78 55 98 C 23 78 13 50 13 8 Z"
            stroke="currentColor"
            strokeWidth="0.5"
          />

          {/* Shield contents: Torch & Crossed Quill + Sword */}
          {/* Crossed Quill and Sword */}
          <path
            d="M 30 75 L 80 25 M 32 77 L 27 72"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          {/* Feather details */}
          <path
            d="M 60 45 Q 65 42 70 35 M 55 50 Q 60 47 65 40 M 50 55 Q 55 52 60 45"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          
          {/* Open Book of Knowledge */}
          <g transform="translate(32, 22)">
            {/* Pages */}
            <path
              d="M 3 15 Q 23 7 43 15 Q 63 7 83 15 L 83 40 Q 63 32 43 40 Q 23 32 3 40 Z"
              fill="#FFFFFF"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* Center dividing line */}
            <line x1="43" y1="15" x2="43" y2="40" stroke="currentColor" strokeWidth="1" />
            {/* Text lines in book */}
            <line x1="12" y1="22" x2="35" y2="22" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="12" y1="27" x2="35" y2="27" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="12" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            
            <line x1="51" y1="22" x2="74" y2="22" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="51" y1="27" x2="74" y2="27" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="51" y1="32" x2="69" y2="32" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
          </g>

          {/* Torch of Freedom / Enlightenment */}
          <g transform="translate(55, 48)">
            {/* Flame */}
            <path
              d="M 0 -15 C 5 -25 -5 -35 0 -42 C 5 -35 -2 -25 3 -15 C 8 -13 8 -5 0 -5 C -8 -5 -8 -13 0 -15 Z"
              fill="#801D32"
              className="fill-crimson-800"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            {/* Handle */}
            <path d="M -3 -5 L 3 -5 L 1.5 15 L -1.5 15 Z" fill="#B8860B" className="fill-gold-600" stroke="currentColor" strokeWidth="1" />
            <line x1="-5" y1="-5" x2="5" y2="-5" stroke="currentColor" strokeWidth="1.5" />
          </g>
        </g>

        {/* Founding Year ribbons */}
        <text
          x="100"
          y="180"
          className="font-serif fill-gold-800 text-[10px] font-semibold text-center"
          textAnchor="middle"
        >
          AD 1861
        </text>
      </svg>
    </div>
  );
}
