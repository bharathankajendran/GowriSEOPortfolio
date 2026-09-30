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
    <section id="testimonials" className="py-20 relative z-10 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-blue-50 text-[#0066FF] border border-blue-200 font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Client Endorsements &amp; Recommendations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by <span className="text-[#0066FF]">Founders</span> &amp; Enterprise Leaders
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            What CEOs, CTOs, and Search Directors say about collaborating on high-scale web engineering and technical SEO strategy.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-8 sm:p-10 relative bg-white border-slate-200 shadow-lg">
                <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-100 pointer-events-none" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <blockquote className="text-base sm:text-xl text-slate-800 font-medium leading-relaxed italic mb-8">
                  &ldquo;{current.content}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0066FF] shrink-0 shadow-sm">
                    <Image
                      src={current.avatarUrl}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{current.name}</h4>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">
                      {current.role} &bull; <span className="text-[#0066FF] font-bold">{current.company}</span>
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {initialTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? "w-6 bg-[#0066FF]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next / Prev */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0066FF] hover:border-blue-300 transition-all cursor-pointer shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0066FF] hover:border-blue-300 transition-all cursor-pointer shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
