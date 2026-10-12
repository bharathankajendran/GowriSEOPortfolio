"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, Linkedin, Clock, MapPin, Sparkles, Loader2, ShieldCheck, X } from "lucide-react";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showGuarantee, setShowGuarantee] = useState(false);
  const [inquiryPopup, setInquiryPopup] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const guaranteeTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const inquiryTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Trigger Guarantee pop-up on demand; auto-clears after 10 seconds
  const triggerGuaranteePopup = () => {
    if (guaranteeTimerRef.current) clearTimeout(guaranteeTimerRef.current);
    setShowGuarantee(true);
    guaranteeTimerRef.current = setTimeout(() => {
      setShowGuarantee(false);
    }, 10000);
  };

  // Trigger Inquiry pop-up on demand; auto-clears after 10 seconds
  const triggerInquiryPopup = (message?: string) => {
    if (inquiryTimerRef.current) clearTimeout(inquiryTimerRef.current);
    setInquiryPopup({
      show: true,
      message:
        message ||
        "Inquiry saved! Redirecting to contact@g2vertex.com in your email client...",
    });
    inquiryTimerRef.current = setTimeout(() => {
      setInquiryPopup({ show: false, message: "" });
    }, 10000);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (guaranteeTimerRef.current) clearTimeout(guaranteeTimerRef.current);
      if (inquiryTimerRef.current) clearTimeout(inquiryTimerRef.current);
    };
  }, []);

  const safeOpenUrl = (url: string) => {
    try {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      window.open(url, "_blank");
    }
  };

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

    // Prepare mailto URL with pre-filled subject and body
    const subject = encodeURIComponent(
      `[G2VERTEX Inquiry] ${data.service} - ${data.subject || data.name}`
    );
    const body = encodeURIComponent(
      `Hi G2VERTEX Team,\n\nName: ${data.name}\nEmail: ${data.email}\nBusiness/Website: ${data.subject}\nService: ${data.service}\n\nMessage:\n${data.message}\n\nBest regards,\n${data.name}`
    );
    const mailtoUrl = `mailto:contact@g2vertex.com?subject=${subject}&body=${body}`;

    try {
      const res = await submitContactForm(data);
      if (res.success) {
        triggerInquiryPopup("Inquiry saved! Redirecting to contact@g2vertex.com in your email client...");
        reset();
      } else {
        triggerInquiryPopup("Redirecting to contact@g2vertex.com in your email client...");
      }

      // Safe launch without aborting page window
      setTimeout(() => {
        safeOpenUrl(mailtoUrl);
      }, 500);
    } catch {
      // Even if network fails, redirect to email client so inquiry is never lost
      triggerInquiryPopup("Redirecting to contact@g2vertex.com in your email client...");
      setTimeout(() => {
        safeOpenUrl(mailtoUrl);
      }, 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Side Popups - Out of Tab on the Right Side */}
      <div className="fixed top-20 sm:top-24 right-4 sm:right-8 z-50 flex flex-col gap-3 max-w-sm sm:max-w-md w-[calc(100%-2rem)] pointer-events-none">
        <AnimatePresence>
          {/* NO PRESSURE GUARANTEE Pop-up - Triggered by Direct Contact Details - Clears in 30s */}
          {showGuarantee && (
            <motion.div
              key="guarantee-popup"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pointer-events-auto p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-300 shadow-2xl relative overflow-hidden ring-1 ring-emerald-500/20"
            >
              {/* Visual 10-Second Countdown Progress Bar */}
              <motion.div
                key="guarantee-progress"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-full"
              />

              <div className="flex items-start justify-between gap-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black tracking-wider text-emerald-900 uppercase">
                        NO PRESSURE GUARANTEE
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200">
                        Clears in 10s
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      No pressure. No generic pitch. Just a practical conversation about where growth could come from next.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowGuarantee(false)}
                  className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                  title="Clear notice"
                  aria-label="Clear notice"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* INQUIRY REDIRECT Pop-up - Triggered by What do you need help with tab / form submission - Clears in 10s */}
          {inquiryPopup.show && (
            <motion.div
              key="inquiry-popup"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pointer-events-auto p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-300 shadow-2xl relative overflow-hidden ring-1 ring-blue-500/20"
            >
              {/* Visual 10-Second Countdown Progress Bar */}
              <motion.div
                key="inquiry-progress"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-[#0066FF] to-cyan-500 rounded-t-full"
              />

              <div className="flex items-start justify-between gap-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black tracking-wider text-blue-900 uppercase">
                        INQUIRY SUBMITTED
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full border border-blue-200">
                        Clears in 10s
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {inquiryPopup.message}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setInquiryPopup({ show: false, message: "" })}
                  className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                  title="Clear notice"
                  aria-label="Clear notice"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#0066FF] dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> START A CONVERSATION
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let&apos;s turn your next goal into a <span className="text-[#0066FF] dark:text-[#38BDF8]">growth plan.</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Tell us where you want to grow, what is getting in the way, and what success looks like. We will help you identify the best next move.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Reassurance */}
        <div className="lg:col-span-5 space-y-5">
          <GlassCard className="p-7 space-y-5 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-md">
            <div
              onClick={triggerGuaranteePopup}
              className="flex items-center justify-between cursor-pointer group"
              title="Click to view our No Pressure Guarantee"
            >
              <h3 className="text-[23px] font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-[#0066FF] dark:group-hover:text-[#38BDF8] transition-colors">
                Direct Contact Details
              </h3>
              <span className="text-[13px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-full flex items-center gap-1 group-hover:bg-emerald-100 transition-colors shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Guarantee
              </span>
            </div>
            <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Whether you need more qualified leads, better search visibility, or high-converting ad campaigns, G2VERTEX is ready to partner with you.
            </p>

            <div className="space-y-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
              {/* Direct Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#0066FF] dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wider">DIRECT MOBILE / PHONE</span>
                  <a
                    href="tel:+919385219979"
                    onClick={(e) => {
                      e.preventDefault();
                      triggerGuaranteePopup();
                      safeOpenUrl("tel:+919385219979");
                    }}
                    className="text-[15px] font-bold text-slate-900 dark:text-white hover:text-[#0066FF] dark:hover:text-[#38BDF8] transition-colors cursor-pointer"
                  >
                    +91 93852 19979
                  </a>
                </div>
              </div>

              {/* Direct Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#0066FF] dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wider">DIRECT EMAIL</span>
                  <a
                    href="mailto:contact@g2vertex.com"
                    onClick={(e) => {
                      e.preventDefault();
                      triggerGuaranteePopup();
                      safeOpenUrl("mailto:contact@g2vertex.com");
                    }}
                    className="text-[15px] font-bold text-slate-900 dark:text-white hover:text-[#0066FF] dark:hover:text-[#38BDF8] transition-colors cursor-pointer"
                  >
                    contact@g2vertex.com
                  </a>
                </div>
              </div>

              {/* LinkedIn Company */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4 text-[#0066FF] dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wider">OFFICIAL LINKEDIN</span>
                  <a
                    href="https://www.linkedin.com/company/g2-vertex/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] font-bold text-slate-900 dark:text-white hover:text-[#0066FF] dark:hover:text-[#38BDF8] transition-colors"
                  >
                    linkedin.com/company/g2-vertex
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900/50 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wider">RESPONSE TIME</span>
                  <span className="text-[15px] font-bold text-slate-900 dark:text-white">Under 24 Hours</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wider">LOCATION</span>
                  <span className="text-[15px] font-bold text-slate-900 dark:text-white">Global Remote Agency</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => {
                  triggerGuaranteePopup();
                  safeOpenUrl("mailto:contact@g2vertex.com");
                }}
                className="flex-1 py-3 px-3 rounded-xl bg-[#0066FF] text-white text-[15px] font-bold text-center hover:bg-blue-600 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" /> Email Directly
              </button>
              <button
                type="button"
                onClick={() => {
                  triggerGuaranteePopup();
                  safeOpenUrl("tel:+919385219979");
                }}
                className="flex-1 py-3 px-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 text-slate-900 dark:text-white text-[15px] font-bold text-center hover:bg-slate-900 dark:hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#0066FF] dark:text-blue-400" /> Call Directly
              </button>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <GlassCard className="p-7 sm:p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Service Pills / Tabs */}
              <div>
                <label className="block text-[14px] uppercase text-slate-600 dark:text-slate-300 font-bold mb-2.5 tracking-wider">
                  What do you need help with?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setValue("service", opt)}
                      className={`px-3.5 py-2 rounded-lg text-[15px] font-semibold transition-all cursor-pointer ${
                        selectedService === opt
                          ? "bg-[#0066FF] text-white shadow-md font-bold"
                          : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-[#0066FF] dark:hover:text-[#38BDF8] border border-slate-300 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/60 dark:hover:bg-slate-800 shadow-xs"
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
                  <label htmlFor="name" className="block text-[13px] uppercase text-slate-600 dark:text-slate-300 font-bold mb-1.5 tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Alex Vance"
                    {...register("name")}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-[15px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0066FF] focus:bg-white dark:focus:bg-slate-900 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-[12px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] uppercase text-slate-600 dark:text-slate-300 font-bold mb-1.5 tracking-wider">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    {...register("email")}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-[15px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0066FF] focus:bg-white dark:focus:bg-slate-900 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[12px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-[13px] uppercase text-slate-600 dark:text-slate-300 font-bold mb-1.5 tracking-wider">
                  Business Name / Website URL *
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Acme Corp (acme.com)"
                  {...register("subject")}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-[15px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0066FF] focus:bg-white dark:focus:bg-slate-900 transition-colors"
                />
                {errors.subject && (
                  <p className="text-[12px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[13px] uppercase text-slate-600 dark:text-slate-300 font-bold mb-1.5 tracking-wider">
                  Tell us about your growth goals *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Where do you want to grow, what is getting in the way, and what does success look like?"
                  {...register("message")}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-[15px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0066FF] focus:bg-white dark:focus:bg-slate-900 transition-colors"
                />
                {errors.message && (
                  <p className="text-[12px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submission Error Alert */}
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
                className="w-full font-bold text-[15px] py-3"
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
