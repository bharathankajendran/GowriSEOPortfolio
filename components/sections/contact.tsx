"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Clock, MapPin, Sparkles, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      service: "Full-Stack Development",
      message: "",
    },
  });

  const selectedService = watch("service");

  const serviceOptions = [
    "Full-Stack Development",
    "Technical SEO Audit",
    "Performance Optimization",
    "UI/UX Design Systems",
  ];

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmissionStatus({ type: null, message: "" });

    try {
      const res = await submitContactForm(data);
      if (res.success) {
        setSubmissionStatus({ type: "success", message: res.message });
        reset();
      } else {
        setSubmissionStatus({ type: "error", message: res.message });
      }
    } catch {
      setSubmissionStatus({
        type: "error",
        message: "Network error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Sparkles className="w-3.5 h-3.5" /> Start a Project / Inquiry
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Build <span className="text-gradient-emerald">Something Great</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Have an upcoming project, technical SEO audit need, or full-stack Next.js contract? Fill out the form below for a response within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & Availability */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard glowColor="cyan" className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Contact Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you require complete Next.js product development, page performance optimization, or search ranking strategy, I am open to select freelance and contract roles.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">DIRECT EMAIL</span>
                  <a href="mailto:contact@gowriseo.com" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                    contact@gowriseo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">RESPONSE SLA</span>
                  <span className="text-sm font-semibold text-white">Under 24 Hours</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">LOCATION</span>
                  <span className="text-sm font-semibold text-white">Global Remote / Americas & APAC Timezones</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Quick FAQ Card */}
          <div className="p-6 rounded-2xl bg-[#121318]/50 border border-white/10 space-y-2 text-xs">
            <span className="font-mono text-emerald-400 font-semibold block uppercase">Looking for custom project scopes?</span>
            <p className="text-slate-400">
              We provide fixed-price milestones as well as monthly dedicated retainer options for ongoing technical SEO management and product architecture.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <GlassCard glowColor="emerald" className="p-8 sm:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Service Pill Selector */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Select Service Area
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setValue("service", opt)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        selectedService === opt
                          ? "bg-emerald-500 text-slate-950 font-semibold shadow-md"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Alex Vance"
                    {...register("name")}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    {...register("email")}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Next.js SaaS Web App Development"
                  {...register("subject")}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Project Brief & Requirements *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project goals, timelines, and technical requirements..."
                  {...register("message")}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submission Result Alerts */}
              {submissionStatus.type === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-300 font-medium leading-relaxed">
                    {submissionStatus.message}
                  </p>
                </motion.div>
              )}

              {submissionStatus.type === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-300 font-medium leading-relaxed">
                    {submissionStatus.message}
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Submitting Request...
                  </>
                ) : (
                  <>
                    Send Inquiry <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
