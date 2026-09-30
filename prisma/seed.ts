import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding G2VERTEX Digital Growth Agency database...");

  // Clean existing data
  await prisma.project.deleteMany();
  await prisma.service.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.contactSubmission.deleteMany();

  // 1. Projects (G2VERTEX Case Studies)
  const projects = [
    {
      slug: "performance-advertising-campaigns",
      title: "Performance Advertising Scale",
      tagline: "Turning Paid Media Budget into a Consistent Lead Flow",
      category: "Paid Ads & PPC",
      description: "Comprehensive multi-channel Google Ads, Meta Ads, and LinkedIn PPC campaigns engineered to target high-intent B2B audiences, reduce cost per acquisition, and scale qualified pipeline.",
      client: "Apex Digital Growth",
      duration: "3 Months",
      thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://g2vertex.com/projects/performance-advertising",
      githubUrl: null,
      featured: true,
      tags: JSON.stringify(["Google Ads", "Meta Ads", "LinkedIn PPC", "Conversion Rate Optimization", "Retargeting"]),
      challenges: "High customer acquisition costs and low lead quality across competitive B2B search keyword auctions.",
      solution: "Implemented audience segmentation, landing page conversion funnels, custom conversion event tracking, and negative keyword filtering.",
      metrics: JSON.stringify([
        { label: "Cost Per Lead", value: "-42%" },
        { label: "Qualified Pipeline", value: "+280%" },
        { label: "ROAS Lift", value: "4.2x" }
      ]),
      architecture: "Google Search Ads + Meta Prospecting + LinkedIn InMail Outreach + Conversion Landing Pages."
    },
    {
      slug: "linkedin-b2b-outreach-engine",
      title: "LinkedIn B2B Outreach Engine",
      tagline: "Starting Relevant Conversations with Targeted Decision Makers",
      category: "B2B Outreach",
      description: "Direct executive profile optimization, account-based targeting, and personalized message sequences designed to generate qualified meeting bookings for enterprise sales teams.",
      client: "Nexus Enterprise Logic",
      duration: "4 Months",
      thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://g2vertex.com/projects/linkedin-outreach",
      githubUrl: null,
      featured: true,
      tags: JSON.stringify(["LinkedIn Sales Navigator", "Profile Optimization", "B2B Lead Gen", "Email Sequence Automation"]),
      challenges: "Cold outreach emails yielding low open rates and missing key C-level decision-makers in targeted accounts.",
      solution: "Created personalized multi-touch outreach sequences combining LinkedIn profile authority optimization with value-first content offers.",
      metrics: JSON.stringify([
        { label: "Acceptance Rate", value: "48%" },
        { label: "Booked Demo Calls", value: "65+/mo" },
        { label: "Sales Revenue Lift", value: "+$320k" }
      ]),
      architecture: "LinkedIn Sales Navigator + Custom CRM Integration + Automated Follow-Up Workflows."
    },
    {
      slug: "seo-growth-search-domination",
      title: "SEO Growth & Keyword Domination",
      tagline: "Building Stronger Search Visibility for High-Intent Queries",
      category: "Technical SEO",
      description: "Full technical site audit, indexability fixes, Schema.org JSON-LD structured data injection, and strategic pillar content clusters to capture page-one Google rankings.",
      client: "Search Scale Media",
      duration: "6 Months",
      thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://g2vertex.com/projects/seo-growth",
      githubUrl: null,
      featured: true,
      tags: JSON.stringify(["Technical SEO", "JSON-LD Schema", "Core Web Vitals", "Content Clustering", "Backlink Velocity"]),
      challenges: "Stagnant organic search rankings due to crawl budget errors, slow page loads, and thin content structures.",
      solution: "Optimized Core Web Vitals to 99+ PageSpeed, resolved duplicate canonical tags, and deployed topical authority content hubs.",
      metrics: JSON.stringify([
        { label: "Organic Traffic Growth", value: "+340%" },
        { label: "Page 1 Keywords", value: "140+" },
        { label: "PageSpeed Index", value: "99/100" }
      ]),
      architecture: "Next.js App Router + Schema.org Structured Engine + Technical Audit Checklist + Edge CDN."
    },
    {
      slug: "omnichannel-email-nurture-automation",
      title: "Email Nurture & Lead Engine",
      tagline: "Automated Workflows that Re-Engage Prospects & Support Sales",
      category: "Email Marketing",
      description: "Automated drip email sequences, lead scoring models, and behavioral triggers designed to convert inactive leads into warm sales-ready conversations.",
      client: "Aura Growth Systems",
      duration: "2 Months",
      thumbnailUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://g2vertex.com/projects/email-nurture",
      githubUrl: null,
      featured: false,
      tags: JSON.stringify(["Klaviyo", "HubSpot Automation", "Lead Scoring", "Copywriting", "A/B Testing"]),
      challenges: "High drop-off rate after initial content download without subsequent sales conversation bookings.",
      solution: "Designed 7-part value-first nurture flow with dynamic personalization tags based on prospect industry and pain points.",
      metrics: JSON.stringify([
        { label: "Email Open Rate", value: "54%" },
        { label: "Click-Through Rate", value: "14.2%" },
        { label: "Re-engaged Pipeline", value: "+$180k" }
      ]),
      architecture: "HubSpot Workflows + Dynamic Segment Filtering + Dedicated Landing Pages."
    }
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  // 2. Services (Official G2VERTEX Services from PDF Copy)
  const services = [
    {
      slug: "digital-marketing-strategy",
      title: "Digital Marketing Strategy",
      description: "A focused growth plan built around your business goals, target audience, marketing channels, and budget to drive sustainable momentum.",
      iconName: "Search",
      features: JSON.stringify(["Goal & Channel Mapping", "Audience & Competitor Research", "Funnel Architecture", "ROI & KPI Measurement"]),
      order: 1
    },
    {
      slug: "lead-generation",
      title: "Lead Generation",
      description: "Campaigns and outreach systems engineered to create a reliable, predictable pipeline of qualified prospects ready for sales.",
      iconName: "Zap",
      features: JSON.stringify(["Qualified Pipeline Systems", "B2B Prospect Targeting", "Conversion Landing Pages", "CRM Lead Syncing"]),
      order: 2
    },
    {
      slug: "paid-advertising",
      title: "Paid Advertising (PPC)",
      description: "Google Ads, Meta Ads, LinkedIn Ads, and PPC campaigns structured to maximize conversion efficiency and return on ad spend.",
      iconName: "Code",
      features: JSON.stringify(["Google Search & Display Ads", "Meta & LinkedIn Campaign Retargeting", "Ad Creative & Copywriting", "Bid & Budget Optimization"]),
      order: 3
    },
    {
      slug: "seo-growth",
      title: "SEO & Performance",
      description: "Search strategies that improve domain visibility, attract intent-driven organic traffic, and compound business revenue over time.",
      iconName: "Layers",
      features: JSON.stringify(["Technical Audit & Crawl Fixes", "JSON-LD Schema Markup", "Core Web Vitals 99+ Tuning", "Topical Keyword Strategy"]),
      order: 4
    },
    {
      slug: "email-marketing",
      title: "Email Marketing & Automation",
      description: "Strategic email campaigns and automated workflows that nurture lead interest, re-engage cold prospects, and support ongoing sales.",
      iconName: "Zap",
      features: JSON.stringify(["Automated Lead Nurture Flows", "Behavioral Trigger Sequences", "Segmentation & Personalization", "A/B Copy Testing"]),
      order: 5
    },
    {
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      description: "Content and campaign management that turns your social media presence into a trustworthy, converting brand awareness channel.",
      iconName: "Search",
      features: JSON.stringify(["Brand Content Strategy", "Audience Engagement", "Paid Social Campaigns", "Analytics & Reporting"]),
      order: 6
    },
    {
      slug: "linkedin-growth-outreach",
      title: "LinkedIn Growth & Outreach",
      description: "Executive profile optimization, account-based targeting, and direct outreach that spark high-value B2B sales conversations.",
      iconName: "Code",
      features: JSON.stringify(["Executive Profile Authority", "Account-Based Sales Targeting", "Personalized Direct Outreach", "Meeting Booking Workflows"]),
      order: 7
    }
  ];

  for (const service of services) {
    await prisma.service.create({ data: service });
  }

  // 3. Experience & Milestones (G2VERTEX Agency Approach)
  const experiences = [
    {
      company: "G2VERTEX Digital Growth Agency",
      role: "Strategy & Full-Service Execution",
      period: "2023 - Present",
      description: "Delivering performance marketing, technical SEO, and lead generation systems for ambitious B2B & SaaS companies.",
      achievements: JSON.stringify([
        "Generated +340% average organic search growth across client portfolios.",
        "Scaled B2B client pipeline with automated LinkedIn & PPC lead engines.",
        "Delivered sub-second page performance scores (99+ Core Web Vitals)."
      ]),
      technologies: JSON.stringify(["Google Ads", "Meta Ads", "LinkedIn Sales Navigator", "Technical SEO", "Next.js", "HubSpot"]),
      isCurrent: true,
      order: 1
    },
    {
      company: "Performance Media Group",
      role: "Senior Growth & Search Architect",
      period: "2021 - 2023",
      description: "Managed high-volume PPC campaigns, technical audit pipelines, and conversion rate optimization.",
      achievements: JSON.stringify([
        "Managed $2.5M+ annual paid media spend maintaining average 4.2x ROAS.",
        "Built automated lead scoring funnels reducing sales response SLA under 15 minutes."
      ]),
      technologies: JSON.stringify(["Google Ads", "Google Analytics 4", "SEO Schema", "A/B Testing"]),
      isCurrent: false,
      order: 2
    }
  ];

  for (const exp of experiences) {
    await prisma.experience.create({ data: exp });
  }

  // 4. Testimonials (Client Endorsements from PDF Copy)
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "CEO & Co-Founder",
      company: "Apex Digital Growth",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "G2VERTEX is a true growth partner. They don't report vanity metrics; every campaign is tied to qualified leads and revenue. Our organic traffic and paid conversion rates both doubled within 90 days!",
      rating: 5,
      featured: true
    },
    {
      name: "Elena Rostova",
      role: "VP of Marketing",
      company: "Nexus Enterprise Logic",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      content: "The LinkedIn outreach engine and SEO performance strategy built by G2VERTEX generated 60+ C-level demo calls per month for our enterprise sales team. Outstanding execution!",
      rating: 5,
      featured: true
    },
    {
      name: "David Chen",
      role: "Head of Growth",
      company: "Search Scale Media",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "No pressure, no generic pitch. G2VERTEX delivered clear reporting, transparent execution, and continuous optimization. They turned our digital presence into a real growth engine.",
      rating: 5,
      featured: true
    }
  ];

  for (const test of testimonials) {
    await prisma.testimonial.create({ data: test });
  }

  console.log("✅ G2VERTEX Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
