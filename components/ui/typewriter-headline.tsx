"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterHeadlineProps {
  phrases?: string[];
  pauseDuration?: number;
}

const DEFAULT_PHRASES = [
  "Real Growth.",
  "Growth, Engineered.",
  "Qualified Leads.",
  "Measurable Revenue.",
];

export const TypewriterHeadline: React.FC<TypewriterHeadlineProps> = ({
  phrases = DEFAULT_PHRASES,
  pauseDuration = 3000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, pauseDuration);
    return () => clearInterval(timer);
  }, [phrases.length, pauseDuration]);

  return (
    <div className="space-y-3">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] max-w-lg uppercase">
        MORE VISIBILITY. <br />
        <span className="text-slate-900 dark:text-white font-black">BETTER LEADS.&nbsp;</span>
        <br />
        <span className="relative inline-flex items-center h-[1.15em] min-h-[1.15em] overflow-hidden text-[#0066FF] dark:text-[#38BDF8] font-black align-bottom">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-[#0066FF] dark:text-[#38BDF8] font-black whitespace-nowrap"
            >
              {phrases[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>
    </div>
  );
};
