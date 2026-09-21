"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterHeadlineProps {
  phrases?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const DEFAULT_PHRASES = [
  "Next.js Web Apps",
  "Technical SEO Systems",
  "Sub-Second SaaS Platforms",
  "High-Growth Products",
];

export const TypewriterHeadline: React.FC<TypewriterHeadlineProps> = ({
  phrases = DEFAULT_PHRASES,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] max-w-5xl mx-auto drop-shadow-lg">
      {/* Static Line 1 */}
      <span className="text-white drop-shadow-md">Architecting High-Scale</span> <br />
      
      {/* Dynamic Typewriter Line 2 */}
      <span className="inline-flex items-center flex-wrap justify-center min-h-[1.25em]">
        <span className="inline-block">
          {currentText.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -10,
                scale: 1.2,
                transition: { type: "spring", stiffness: 500, damping: 12 },
              }}
              className="inline-block text-orange-400 font-extrabold cursor-pointer select-none drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>

        {/* Luminous Blinking Typewriter Cursor */}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-[5px] h-[0.75em] bg-orange-400 ml-1.5 align-middle rounded-full shadow-[0_0_15px_#F97316]"
        />

        <span className="text-white font-extrabold mx-3 sm:mx-4">&amp;</span>

        <span className="inline-block">
          {"SEO Dominance".split("").map((char, index) => (
            <motion.span
              key={`seo-${char}-${index}`}
              whileHover={{
                y: -10,
                scale: 1.2,
                transition: { type: "spring", stiffness: 500, damping: 12 },
              }}
              className="inline-block text-purple-400 font-extrabold cursor-pointer select-none drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </span>
    </h1>
  );
};
