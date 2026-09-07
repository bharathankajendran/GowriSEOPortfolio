"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
  rating: number;
  featured: boolean;
}

interface TestimonialsProps {
  initialTestimonials?: TestimonialData[];
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({
  initialTestimonials = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (initialTestimonials.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % initialTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + initialTestimonials.length) % initialTestimonials.length
    );
  };

  const current = initialTestimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative z-10 bg-[#070709] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" /> Endorsements & Recommendations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by <span className="text-gradient-amber">Founders</span> & Product Leaders
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Here is what CEOs, CTOs, and Search Directors say about collaborating on high-scale web engineering and technical SEO strategy.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard glowColor="purple" className="p-8 sm:p-12 relative">
                <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 pointer-events-none" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-lg sm:text-2xl text-slate-200 font-medium leading-relaxed italic mb-8">
                  &ldquo;{current.content}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0">
                    <Image
                      src={current.avatarUrl}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{current.name}</h4>
                    <p className="text-xs font-mono text-emerald-400">
                      {current.role} &bull; <span className="text-slate-300">{current.company}</span>
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {initialTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? "w-8 bg-emerald-400" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next / Prev Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 text-white transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 text-white transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
