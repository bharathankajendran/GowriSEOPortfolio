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
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl">
        More Visibility. <br />
        <span className="text-slate-900 font-black">Better Leads.&nbsp;</span>
        <span className="inline-block text-[#0066FF] font-black">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="inline-block text-[#0066FF] font-black"
            >
              {phrases[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>
    </div>
  );
};
