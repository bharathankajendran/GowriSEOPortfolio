"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Clock, MapPin, Sparkles, Loader2, ShieldCheck } from "lucide-react";
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
      service: "Lead Generation",
      message: "",
    },
  });

  const selectedService = watch("service");

  const serviceOptions = [
    "Digital Marketing Strategy",
    "Lead Generation",
    "Paid Advertising (PPC)",
    "SEO & Performance",
    "Email Marketing",
    "LinkedIn Outreach",
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
    <section id="contact" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-blue-50 text-[#0066FF] border border-blue-200 font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> START A CONVERSATION
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let&apos;s turn your next goal into a <span className="text-[#0066FF]">growth plan.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Tell us where you want to grow, what is getting in the way, and what success looks like. We will help you identify the best next move.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Reassurance */}
        <div className="lg:col-span-5 space-y-5">
          <GlassCard className="p-7 space-y-5 bg-white border-slate-200 shadow-md">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Direct Contact Details
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Whether you need more qualified leads, better search visibility, or high-converting ad campaigns, G2VERTEX is ready to partner with you.
            </p>

            <div className="space-y-3.5 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">DIRECT EMAIL</span>
                  <a href="mailto:contact@g2vertex.com" className="text-xs font-bold text-slate-900 hover:text-[#0066FF] transition-colors">
                    contact@g2vertex.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">RESPONSE TIME</span>
                  <span className="text-xs font-bold text-slate-900">Under 24 Hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">LOCATION</span>
                  <span className="text-xs font-bold text-slate-900">Global Remote Agency</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Reassurance Card from PDF */}
          <div className="p-5 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1.5 text-xs">
            <span className="font-mono text-emerald-800 font-bold block uppercase text-[11px] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> NO PRESSURE GUARANTEE
            </span>
            <p className="text-emerald-900 leading-relaxed font-medium">
              No pressure. No generic pitch. Just a practical conversation about where growth could come from next.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <GlassCard className="p-7 sm:p-8 bg-white border-slate-200 shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Service Pills */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-600 font-bold mb-2">
                  What do you need help with?
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setValue("service", opt)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedService === opt
                          ? "bg-[#0066FF] text-white shadow-sm font-bold"
                          : "bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono uppercase text-slate-600 font-bold mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Alex Vance"
                    {...register("name")}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono uppercase text-slate-600 font-bold mb-1.5">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    {...register("email")}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-[11px] font-mono uppercase text-slate-600 font-bold mb-1.5">
                  Business Name / Website URL *
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Acme Corp (acme.com)"
                  {...register("subject")}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors"
                />
                {errors.subject && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[11px] font-mono uppercase text-slate-600 font-bold mb-1.5">
                  Tell us about your growth goals *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Where do you want to grow, what is getting in the way, and what does success look like?"
                  {...register("message")}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors"
                />
                {errors.message && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submission Alerts */}
              {submissionStatus.type === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-emerald-800 font-bold">
                    {submissionStatus.message}
                  </p>
                </motion.div>
              )}

              {submissionStatus.type === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-800 font-bold">
                    {submissionStatus.message}
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                className="w-full font-bold text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                  </>
                ) : (
                  <>
                    Request a Growth Consultation <Send className="w-3.5 h-3.5 ml-1" />
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
