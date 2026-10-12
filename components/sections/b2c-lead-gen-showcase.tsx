"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Share2,
  Megaphone,
  Search,
  MapPin,
  Layout,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Home,
  Building,
  HeartPulse,
  Sparkle,
  GraduationCap,
  Car,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const B2CLeadGenShowcase = () => {
  const services = [
    {
      num: "01",
      title: "Targeted Audience Research",
      desc: "Identify potential customers based on location, interests, demographics, and business requirements.",
      icon: Users,
    },
    {
      num: "02",
      title: "Social Media Marketing",
      desc: "Reach potential customers through strategic social media campaigns designed to increase brand awareness and customer engagement.",
      icon: Megaphone,
    },
    {
      num: "03",
      title: "Meta Ads Management",
      desc: "Create and manage Facebook and Instagram advertising campaigns to attract relevant audiences and generate customer inquiries.",
      icon: Target,
    },
    {
      num: "04",
      title: "Google Ads & PPC",
      desc: "Connect with people actively searching for your products or services through targeted paid advertising campaigns.",
      icon: Search,
    },
    {
      num: "05",
      title: "Local Lead Generation",
      desc: "Help local businesses attract potential customers in their service areas through targeted campaigns and local digital marketing strategies.",
      icon: MapPin,
    },
    {
      num: "06",
      title: "Landing Page Optimization",
      desc: "Improve landing pages and inquiry forms to encourage visitors to take action, request information, or contact your business.",
      icon: Layout,
    },
    {
      num: "07",
      title: "Lead Qualification & Follow-Up Support",
      desc: "Help businesses organize and assess incoming leads based on their requirements, service interest, location, and readiness to engage.",
      icon: CheckCircle2,
    },
  ];

  const whoWeHelp = [
    {
      title: "Home Service Providers",
      desc: "HVAC, plumbing, electrical, and roofing companies looking for reliable local call volume.",
      icon: Home,
    },
    {
      title: "Real Estate & Property",
      desc: "Real estate agents, brokers, and developers seeking qualified buyer and seller inquiries.",
      icon: Building,
    },
    {
      title: "Healthcare & Dental Clinics",
      desc: "Dental practices, physical therapists, and clinics attracting new local patients.",
      icon: HeartPulse,
    },
    {
      title: "Beauty, Wellness & Med Spas",
      desc: "Aesthetic clinics, wellness studios, and med spas booking recurring appointments.",
      icon: Sparkle,
    },
    {
      title: "Educational & Training",
      desc: "Vocational schools, test prep academies, and certification providers acquiring students.",
      icon: GraduationCap,
    },
    {
      title: "Automotive Service Providers",
      desc: "Auto repair shops, detailers, and dealerships driving local service requests.",
      icon: Car,
    },
    {
      title: "Consumer Brands",
      desc: "Any direct-to-consumer businesses targeting individual consumers with intent.",
      icon: Users,
    },
  ];

  const approach = [
    { step: "01", name: "Understand", desc: "We learn about your ideal consumer, their pain points, local buying habits, and goals." },
    { step: "02", name: "Target", desc: "We build razor-sharp audience profiles and local search keyword clusters." },
    { step: "03", name: "Attract", desc: "We launch high-converting creative ads across Meta, Google, and social channels." },
    { step: "04", name: "Optimize", desc: "We monitor performance, refine landing pages, and scale lead quality." },
  ];

  const whyChoose = [
    "Targeted audience strategies tailored to consumer intent",
    "Campaigns tailored to your specific business and revenue goals",
    "Data-driven optimization across every touchpoint",
    "Transparent performance reporting with zero vanity metrics",
    "Uncompromising focus on relevant inquiries and measurable growth",
  ];

  return (
    <div className="space-y-12 mb-16">
      {/* Hero Header Card */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/80 border border-blue-200/80 p-8 sm:p-12 shadow-sm text-center max-w-5xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0066FF] text-white uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> B2C LEAD GENERATION SERVICES
        </span>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Turn Potential Customers into <span className="text-[#0066FF]">Real Opportunities</span>
        </h3>
        <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          G2VERTEX helps businesses connect with potential customers through targeted digital marketing, audience research, and lead generation strategies. We help you reach the right audience, attract genuine interest, and generate opportunities to grow your business.
        </p>
      </div>

      {/* 7 Services Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#0066FF] uppercase tracking-widest block">
            CORE CAPABILITIES
          </span>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Our B2C Lead Generation Services
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0066FF] flex items-center justify-center group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 font-mono">{s.num}</span>
                </div>
                <h5 className="text-base font-extrabold text-slate-900 group-hover:text-[#0066FF] transition-colors">
                  {s.title}
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Who We Help Section */}
      <div className="space-y-6 rounded-3xl bg-blue-50/70 border border-blue-200/80 p-8 sm:p-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#0066FF] uppercase tracking-widest block">
            AUDIENCE SEGMENTS
          </span>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Who We Help
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Our B2C lead generation solutions are custom-built to support consumer-focused businesses:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {whoWeHelp.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2 hover:border-blue-200 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900">{item.title}</h5>
                <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Approach (Understand • Target • Attract • Optimize) */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#0066FF] uppercase tracking-widest block">
            METHODOLOGY
          </span>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Our Approach
          </h4>
          <p className="text-sm font-semibold text-[#0066FF]">
            Understand • Target • Attract • Optimize
          </p>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            We learn about your ideal customer, develop a targeted marketing strategy, launch suitable campaigns, and monitor performance to improve lead quality and campaign efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {approach.map((a) => (
            <div
              key={a.step}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 relative"
            >
              <div className="text-2xl font-black text-[#0066FF]">{a.step}</div>
              <h5 className="text-sm font-extrabold text-slate-900">{a.name}</h5>
              <p className="text-xs text-slate-600 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose G2VERTEX & CTA Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Why Choose Box */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#0066FF] uppercase tracking-wider block">
              THE G2 VERTEX ADVANTAGE
            </span>
            <h4 className="text-2xl font-extrabold text-slate-900">
              Why Choose G2VERTEX?
            </h4>
            <div className="space-y-3 pt-2">
              {whyChoose.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#0B192C] text-white flex flex-col justify-between space-y-6 shadow-xl">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> READY TO EXPAND?
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Let&apos;s Grow Your Customer Base
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ready to reach more potential customers and create new business opportunities? Contact G2VERTEX to discuss your B2C lead generation goals.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#contact" className="flex-1">
              <Button variant="primary" size="md" className="w-full font-bold text-sm">
                Get Started <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a href="#contact" className="flex-1">
              <Button
                variant="outline"
                size="md"
                className="w-full font-bold text-sm bg-slate-900/60 border-slate-700 text-white hover:bg-slate-800"
              >
                Book a Growth Call <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
