import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Choicy Digital Agency & SEO Portfolio database...");

  // Clean existing data
  await prisma.project.deleteMany();
  await prisma.service.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.contactSubmission.deleteMany();

  // 1. Projects
  const projects = [
    {
      slug: "pulse-seo-analytics-suite",
      title: "PulseSEO Analytics Suite",
      tagline: "Real-Time Core Web Vitals, Crawl Budget & Competitor SERP Tracker",
      category: "SEO Tools",
      description: "An enterprise-grade SEO intelligence platform engineered to analyze technical site health, monitor Core Web Vitals in real-time, track keyword rankings across 50+ countries, and detect backlink velocity anomalies.",
      client: "Apex Digital Growth Inc.",
      duration: "3 Months",
      thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://pulse-seo-demo.vercel.app",
      githubUrl: "https://github.com/gowriseo/pulse-seo-suite",
      featured: true,
      tags: JSON.stringify(["Next.js 14", "TypeScript", "Prisma", "Tailwind CSS", "Recharts", "Google Search Console API"]),
      challenges: "High latency when aggregating millions of daily SERP ranking data points and calculating real-time page performance scores for client domains without overloading database memory.",
      solution: "Implemented Next.js Server Components with Redis caching layer, worker queue processing for rank tracking, and customized lightweight SVG visualization components.",
      metrics: JSON.stringify([
        { label: "Organic Keyword Growth", value: "+310%" },
        { label: "PageSpeed Index", value: "99/100" },
        { label: "Crawl Latency Reduction", value: "-65%" }
      ]),
      architecture: "Next.js App Router (RSC) + Prisma ORM + PostgreSQL + Redis Cache + Tailwind CSS Dark UI + WebVitals API hooks."
    },
    {
      slug: "nexus-saas-enterprise-hub",
      title: "Nexus SaaS Enterprise Hub",
      tagline: "High-Scale Multi-Tenant Dashboard with Stripe & Role-Based Access",
      category: "Full-Stack Apps",
      description: "A full-stack SaaS platform providing organizations with real-time analytics, automated workflow triggers, multi-tier team permissioning, and seamless subscription management.",
      client: "Nexus Logic Corp",
      duration: "4 Months",
      thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://nexus-enterprise-demo.vercel.app",
      githubUrl: "https://github.com/gowriseo/nexus-saas-hub",
      featured: true,
      tags: JSON.stringify(["Next.js", "React", "Node.js", "Prisma", "Stripe Billing", "Zod", "Framer Motion"]),
      challenges: "Designing a robust multi-tenant security architecture with instant UI state updates across concurrent user sessions.",
      solution: "Leveraged Server Actions with Optimistic UI updates, combined with Prisma row-level tenant security filters and webhook synchronization for Stripe billing events.",
      metrics: JSON.stringify([
        { label: "Active Enterprise Users", value: "45,000+" },
        { label: "Average API Latency", value: "24ms" },
        { label: "Conversion Lift", value: "+4.8%" }
      ]),
      architecture: "Next.js 14 App Router + Server Actions + Prisma + PostgreSQL + Stripe SDK + Tailwind Glass UI."
    },
    {
      slug: "aura-glass-design-system",
      title: "Aura Glass Design System",
      tagline: "Accessible Dark-Theme Glassmorphism Component Library for Next.js",
      category: "Design Systems",
      description: "A state-of-the-art UI design system and component kit built with Framer Motion, Tailwind CSS, and Radix UI primitives, tailored for modern web applications.",
      client: "Open Source Community",
      duration: "2 Months",
      thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://aura-design-system.vercel.app",
      githubUrl: "https://github.com/gowriseo/aura-design-system",
      featured: true,
      tags: JSON.stringify(["React", "Tailwind CSS", "Framer Motion", "Storybook", "TypeScript", "Radix UI"]),
      challenges: "Ensuring high frame rate animations and backdrop-blur effects on lower-end mobile GPU hardware while adhering strictly to WCAG AAA color contrast ratios.",
      solution: "Created hardware-accelerated CSS custom properties with progressive enhancement fallbacks and automatic contrast checking utilities.",
      metrics: JSON.stringify([
        { label: "Reusable Components", value: "48+" },
        { label: "Bundle Overhead", value: "<12KB" },
        { label: "WCAG Accessibility", value: "AAA Pass" }
      ]),
      architecture: "Tailwind CSS + Framer Motion + Radix UI Primitives + TypeScript + Storybook documentation."
    },
    {
      slug: "schemacraft-pro-seo-generator",
      title: "SchemaCraft Pro",
      tagline: "Automated JSON-LD Structured Data & Rich Snippet Engine",
      category: "SEO Tools",
      description: "An AI-powered structured data generator that automatically scans web pages, extracts metadata, builds valid JSON-LD schemas (Product, Article, FAQ, HowTo, LocalBusiness), and validates them via Google's Rich Results API.",
      client: "Search Scale Media",
      duration: "1.5 Months",
      thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://schemacraft-pro.vercel.app",
      githubUrl: "https://github.com/gowriseo/schemacraft-pro",
      featured: false,
      tags: JSON.stringify(["Next.js", "TypeScript", "JSON-LD", "Zod", "Cheerio", "Tailwind CSS"]),
      challenges: "Parsing non-standard HTML structures and mapping unstructured text into valid Schema.org specs without breaking validation.",
      solution: "Engineered strict Zod schema parsers with automated AST tree matching for high accuracy structured data injection.",
      metrics: JSON.stringify([
        { label: "Rich Result Eligibility", value: "100%" },
        { label: "CTR Lift in SERPs", value: "+28%" },
        { label: "Index Speed", value: "3x Faster" }
      ]),
      architecture: "Next.js Edge Functions + Zod Validation + Schema.org Specification Engine + Glass UI."
    },
    {
      slug: "cyberpulse-ecommerce-platform",
      title: "CyberPulse Storefront",
      tagline: "Headless E-Commerce with Sub-Second Page Loads & Edge Caching",
      category: "Full-Stack Apps",
      description: "A ultra-fast headless e-commerce application featuring instant search, dynamic product filtering, cart drawer persistence, and instant checkout flow.",
      client: "CyberPulse Apparel",
      duration: "3 Months",
      thumbnailUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://cyberpulse-shop.vercel.app",
      githubUrl: "https://github.com/gowriseo/cyberpulse-ecommerce",
      featured: false,
      tags: JSON.stringify(["Next.js 14", "Shopify Storefront API", "Tailwind CSS", "Zustand", "Framer Motion"]),
      challenges: "Minimizing Largest Contentful Paint (LCP) time for high-resolution 4K product imagery.",
      solution: "Utilized Next.js Image Optimization with WebP/AVIF dynamic transformation and Edge Network CDN distribution.",
      metrics: JSON.stringify([
        { label: "LCP Load Time", value: "0.7s" },
        { label: "Checkout Conversion Rate", value: "+32%" },
        { label: "Global Edge Regions", value: "28" }
      ]),
      architecture: "Next.js App Router + GraphQL Storefront API + Vercel Edge Cache + Zustand."
    },
    {
      slug: "vanguard-component-studio",
      title: "Vanguard Animation Kit",
      tagline: "Tailwind CSS Micro-Interaction & Framer Motion Preset Kit",
      category: "Design Systems",
      description: "A collection of high-performance interactive components, hover card presets, glowing border vectors, and animated hero sections for modern tech agency websites.",
      client: "Choicy Design Labs",
      duration: "1 Month",
      thumbnailUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://vanguard-studio.vercel.app",
      githubUrl: "https://github.com/gowriseo/vanguard-studio",
      featured: false,
      tags: JSON.stringify(["Tailwind CSS", "Framer Motion", "React", "TypeScript"]),
      challenges: "Creating smooth 60fps micro-animations that work seamlessly across desktop and mobile browsers.",
      solution: "Optimized GPU composite layers using transform-only keyframes and hardware-accelerated Framer Motion bindings.",
      metrics: JSON.stringify([
        { label: "NPM Downloads", value: "12,500/mo" },
        { label: "GitHub Stars", value: "1.4k" },
        { label: "Figma Library Synced", value: "Yes" }
      ]),
      architecture: "Framer Motion 11 + Tailwind CSS v3 + React Server/Client Primitives."
    }
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  // 2. Services
  const services = [
    {
      slug: "full-stack-development",
      title: "Full-Stack Development",
      description: "Crafting scalable, high-performance Next.js web applications with robust TypeScript backend architectures, clean API integrations, and resilient databases.",
      iconName: "Code",
      features: JSON.stringify(["Next.js 14 App Router", "TypeScript & Prisma ORM", "Server Actions & REST/GraphQL", "PostgreSQL & Supabase Setup"]),
      order: 1
    },
    {
      slug: "technical-seo-audits",
      title: "Technical SEO & Audits",
      description: "Driving explosive organic visibility through comprehensive technical audits, crawl budget optimization, canonical structures, and Schema.org rich snippets.",
      iconName: "Search",
      features: JSON.stringify(["Crawl & Indexability Audits", "JSON-LD Structured Data", "Semantic HTML & Architecture", "Keyword & SERP Optimization"]),
      order: 2
    },
    {
      slug: "core-web-vitals-performance",
      title: "Performance & Core Web Vitals",
      description: "Accelerating site loading speeds to achieve 95+ PageSpeed scores, sub-second LCP, zero CLS shifts, and maximum search engine ranking signals.",
      iconName: "Zap",
      features: JSON.stringify(["LCP & INP Speed Tuning", "Image & Asset Optimization", "Edge Caching & SSR tuning", "Bundle Size Reduction"]),
      order: 3
    },
    {
      slug: "design-systems-ui-ux",
      title: "UI/UX & Design Systems",
      description: "Designing dark-theme glassmorphic interfaces with micro-interactions, cohesive typography, and WCAG accessible component libraries.",
      iconName: "Layers",
      features: JSON.stringify(["Dark Glassmorphic Aesthetics", "Framer Motion Animations", "Responsive Mobile First Layouts", "Custom Tailored Component Kits"]),
      order: 4
    }
  ];

  for (const service of services) {
    await prisma.service.create({ data: service });
  }

  // 3. Experience
  const experiences = [
    {
      company: "Apex Scale Digital",
      role: "Lead Full-Stack Architect & SEO Strategist",
      period: "2023 - Present",
      description: "Architecting enterprise SaaS products and technical SEO growth campaigns for high-volume digital platforms.",
      achievements: JSON.stringify([
        "Increased client organic search traffic by 340% over 12 months.",
        "Built custom Next.js 14 server components delivering 99+ Core Web Vitals scores.",
        "Engineered real-time analytics dashboard handling 10M+ daily events."
      ]),
      technologies: JSON.stringify(["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Technical SEO"]),
      isCurrent: true,
      order: 1
    },
    {
      company: "Vanguard Tech Studios",
      role: "Senior Full-Stack Engineer",
      period: "2021 - 2023",
      description: "Developed modern dark-themed web applications, micro-frontend design systems, and API integrations.",
      achievements: JSON.stringify([
        "Created scalable component library adopted across 14 internal product suites.",
        "Reduced bundle footprint by 42% through code-splitting and asset pipeline optimization.",
        "Mentored team of 6 frontend developers on clean code and React best practices."
      ]),
      technologies: JSON.stringify(["React", "Node.js", "Tailwind CSS", "Framer Motion", "GraphQL"]),
      isCurrent: false,
      order: 2
    },
    {
      company: "Search Matrix Agency",
      role: "Technical SEO & Web Developer",
      period: "2019 - 2021",
      description: "Executed comprehensive technical SEO audits, site migrations, dynamic JSON-LD injection, and page performance enhancements.",
      achievements: JSON.stringify([
        "Successfully migrated 50k-page e-commerce portal with zero ranking loss.",
        "Automated schema markup generation using custom Node scripts.",
        "Achieved #1 SERP positions for 120+ high-intent competitive keywords."
      ]),
      technologies: JSON.stringify(["JavaScript", "HTML5/CSS3", "Schema.org", "Google Analytics", "Screaming Frog"]),
      isCurrent: false,
      order: 3
    }
  ];

  for (const exp of experiences) {
    await prisma.experience.create({ data: exp });
  }

  // 4. Testimonials
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "CEO & Co-Founder",
      company: "Apex Digital Growth",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "Gowri is a rare hybrid master of technical SEO and full-stack Next.js architecture. The PulseSEO suite built for us boosted our organic revenue by 300% in under 6 months!",
      rating: 5,
      featured: true
    },
    {
      name: "Elena Rostova",
      role: "VP of Product",
      company: "Nexus Enterprise",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      content: "The level of design craftsmanship and technical precision in the Choicy-inspired UI surpassed all expectations. Lightning-fast performance and flawless user experience.",
      rating: 5,
      featured: true
    },
    {
      name: "David Chen",
      role: "Head of Marketing",
      company: "Search Scale Media",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "Working with Gowri transformed our web presence. Core Web Vitals went from failing to a perfect 100 PageSpeed score across desktop and mobile!",
      rating: 5,
      featured: true
    }
  ];

  for (const test of testimonials) {
    await prisma.testimonial.create({ data: test });
  }

  console.log("✅ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
