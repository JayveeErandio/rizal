/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface PageTransitionProps {
  children: React.ReactNode;
  pageId: string;
}

export default function PageTransition({ children, pageId }: PageTransitionProps) {
  const [showWarp, setShowWarp] = useState(false);

  // Trigger a full temporal warp effect when pageId changes
  useEffect(() => {
    setShowWarp(true);
    const timer = setTimeout(() => setShowWarp(false), 950);
    return () => clearTimeout(timer);
  }, [pageId]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="page-transition-wrapper">
      {/* Time Travel Dimensional Overlay */}
      {showWarp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.95, 0.95, 0] }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gold-950 pointer-events-none select-none"
          id="temporal-overlay"
        >
          {/* Subtle spinning astronomical clock background ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="absolute w-96 h-96 border-2 border-double border-gold-300/20 rounded-full flex items-center justify-center"
          >
            <div className="w-80 h-80 border border-dashed border-gold-300/10 rounded-full" />
            <div className="absolute top-4 font-mono text-[8px] text-gold-400/30">MDCCCLXI - MDCCCXCVI</div>
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* Spinning hourglass/compass */}
            <motion.div
              animate={{ scale: [0.8, 1.1, 0.8], rotate: [0, 180, 360] }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="text-gold-400 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" x2="22" y1="2" y2="2" />
                <line x1="2" x2="22" y1="22" y2="22" />
                <path d="M19 2v4c0 3.87-3.13 7-7 7s-7-3.13-7-7V2" />
                <path d="M12 13c3.87 0 7 3.13 7 7v2H5v-2c0-3.87 3.13-7 7-7Z" />
              </svg>
            </motion.div>
            <motion.div
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.4em", opacity: 1 }}
              className="font-display text-gold-300 text-xs uppercase font-medium"
            >
              Consulting the Archives...
            </motion.div>
            <div className="font-serif text-[10px] text-gold-500/60 italic mt-1">
              Traversing Epochs
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content Animation with Sepia and blur filters */}
      <motion.div
        key={pageId}
        initial={{ 
          opacity: 0,
          scale: 1.02,
          filter: "sepia(80%) contrast(90%) brightness(95%) blur(4px)" 
        }}
        animate={{ 
          opacity: 1,
          scale: 1,
          filter: "sepia(0%) contrast(100%) brightness(100%) blur(0px)" 
        }}
        exit={{ 
          opacity: 0,
          scale: 0.98,
          filter: "sepia(80%) contrast(90%) brightness(95%) blur(4px)" 
        }}
        transition={{ 
          duration: 0.95,
          ease: [0.16, 1, 0.3, 1] // Custom academic-feeling smooth cubic bezier
        }}
        className="w-full min-h-screen flex flex-col"
        id="animated-page-container"
      >
        {children}
      </motion.div>
    </div>
  );
}
