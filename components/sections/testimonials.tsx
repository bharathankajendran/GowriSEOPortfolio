"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string | null;
  content: string;
  rating: number;
  featured: boolean;
}

interface TestimonialsProps {
  initialTestimonials?: TestimonialData[];
}

const defaultTestimonials: TestimonialData[] = [
  {
    id: "t-1",
    name: "Rangaraj",
    role: "Founder",
    company: "Ahattrickz InfoTech",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "No pressure, no generic pitch. G2VERTEX delivered clear reporting, transparent execution, and continuous optimization. They turned our digital presence into a real growth engine.",
    rating: 5,
    featured: true,
  },
];

export const TestimonialsSection: React.FC<TestimonialsProps> = ({
  initialTestimonials = [],
}) => {
  const testimonialsList =
    initialTestimonials.length > 0 ? initialTestimonials : defaultTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length
    );
  };

  const current = testimonialsList[currentIndex] || testimonialsList[0];

  return (
    <section id="testimonials" className="py-20 relative z-10 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-[#0066FF] border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" /> Client Endorsement &amp; Recommendation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by <span className="text-[#0066FF]">Founders</span> &amp; Enterprise Leaders
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            What founders say about collaborating with G2VERTEX on performance marketing, lead generation, and growth strategy.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id || current.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-8 sm:p-10 relative bg-white border-slate-200 shadow-lg">
                <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-100 pointer-events-none" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: current.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <blockquote className="text-base sm:text-xl text-slate-800 font-medium leading-relaxed italic mb-8">
                  &ldquo;{current.content}&rdquo;
                </blockquote>

                {/* Author Info - Clean Typography Without Picture */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{current.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      {current.role} &bull; <span className="text-[#0066FF] font-bold">{current.company}</span>
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#0066FF] border border-blue-200">
                    Verified Endorsement
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls only if multiple testimonials */}
          {testimonialsList.length > 1 && (
            <div className="flex items-center justify-between mt-6">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonialsList.map((_, idx) => (
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
          )}
        </div>
      </div>
    </section>
  );
};
