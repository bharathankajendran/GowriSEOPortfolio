// Static fallback data for Vercel / serverless deployments where local SQLite file is not available

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  client: string | null;
  duration: string | null;
  thumbnailUrl: string;
  liveUrl: string;
  githubUrl: string | null;
  featured: boolean;
  tags: string;
  challenges: string;
  solution: string;
  metrics: string;
  architecture: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  features: string;
  order: number;
}

export interface ExperienceData {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string;
  technologies: string;
  isCurrent: boolean;
  order: number;
}

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string | null;
  content: string;
  rating: number;
  featured: boolean;
  createdAt: Date;
}

export const FALLBACK_PROJECTS: ProjectData[] = [
  {
    id: "proj-1",
    slug: "omnichannel-email-nurture-automation",
    title: "Email Nurture & Lead Engine",
    tagline: "Turning Prospects into Opportunities",
    category: "Email Nurture & Lead Engine",
    description:
      "G2VERTEX designed targeted email campaigns, personalized messaging, and structured follow-up sequences to nurture prospects and encourage meaningful conversations.",
    client: "B2B & Digital Services",
    duration: "Ongoing",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "/?tab=contact",
    githubUrl: null,
    featured: true,
    tags: JSON.stringify([
      "Email Campaigns",
      "Personalized Messaging",
      "Follow-up Sequences",
      "Lead Conversion",
      "Prospect Nurturing",
    ]),
    challenges:
      "Potential customers needed consistent follow-ups to stay engaged and move toward a purchase.",
    solution:
      "G2VERTEX designed targeted email campaigns, personalized messaging, and structured follow-up sequences to nurture prospects and encourage meaningful conversations.",
    metrics: JSON.stringify([
      { label: "Nurturing Efficiency", value: "High" },
      { label: "Engagement Lift", value: "Strong" },
      { label: "Lead Pipeline", value: "Active" },
    ]),
    architecture:
      "A streamlined email nurturing process designed to strengthen engagement and support lead conversion.",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "proj-2",
    slug: "seo-growth-search-domination",
    title: "SEO Growth & Keyword Domination",
    tagline:
      "How a Strategic SEO Approach Can Improve Search Visibility and Drive Qualified Organic Traffic",
    category: "Technical SEO",
    description:
      "A structured, data-driven SEO strategy to help businesses improve search engine visibility, target relevant keywords, and attract audiences with genuine purchase intent.",
    client: "B2B & Business Services",
    duration: "Ongoing",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "/?tab=contact",
    githubUrl: null,
    featured: true,
    tags: JSON.stringify([
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Content Strategy",
      "Organic Growth",
      "Rankings",
    ]),
    challenges:
      "Low keyword visibility, limited organic traffic, high competition, content gaps, technical SEO issues, and low-quality traffic.",
    solution:
      "Strategic keyword research, on-page SEO optimization, technical SEO improvements, SEO content strategy, competitor analysis, and continuous performance tracking.",
    metrics: JSON.stringify([
      { label: "Search Visibility", value: "Growing" },
      { label: "Organic Enquiries", value: "Qualified" },
      { label: "Technical Health", value: "Optimized" },
    ]),
    architecture:
      "Sustainable organic growth built by aligning website content, technical performance, and keyword targeting with business goals.",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: "proj-3",
    slug: "linkedin-b2b-outreach-engine",
    title:
      "B2B Case Study: Transforming UPVC Business Operations with an Integrated ERP/CRM Solution",
    tagline: "Centralizing Essential Business Operations Into One Platform",
    category: "B2B",
    description:
      "G2 VERTEX offers a UPVC-focused Business Management ERP/CRM solution designed to bring essential business operations together in one centralized platform.",
    client: "UPVC Window & Door Manufacturing",
    duration: "Enterprise",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "/?tab=contact",
    githubUrl: null,
    featured: true,
    tags: JSON.stringify([
      "UPVC ERP/CRM",
      "Quotation Management",
      "Inventory Control",
      "Job Workflows",
      "Order Tracking",
      "Vendor Management",
    ]),
    challenges:
      "Scattered customer information, quotation management difficulties, inventory visibility issues, disconnected workflows, and manual reporting.",
    solution:
      "Integrated software solution covering CRM, Quotations, Sales Orders, Purchases, Inventory, Production, and Financial Insights.",
    metrics: JSON.stringify([
      { label: "Department Coordination", value: "Unified" },
      { label: "Inventory Visibility", value: "Real-time" },
      { label: "Business Reporting", value: "Structured" },
    ]),
    architecture:
      "Centralized ERP/CRM platform establishing a connected view of customer activity, sales, materials, purchasing, and financial records.",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
  },
  {
    id: "proj-4",
    slug: "b2c-customer-acquisition-engine",
    title: "Case Study: B2C Lead Generation for a US Home Services Company",
    tagline: "Turn Potential Customers into Real Opportunities",
    category: "B2C",
    description:
      "A targeted lead generation approach focused on audience research, targeted marketing, lead qualification, and performance tracking.",
    client: "Home Services — HVAC & Air Conditioning",
    duration: "United States Market",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "/?tab=contact",
    githubUrl: null,
    featured: true,
    tags: JSON.stringify([
      "HVAC & AC Services",
      "Home Services",
      "Audience Research",
      "Targeted Marketing",
      "Lead Qualification",
      "Performance Tracking",
    ]),
    challenges:
      "A home services company wanted to connect with more homeowners who needed air conditioning installation, repair, and maintenance services.",
    solution:
      "G2VERTEX developed a targeted lead generation approach focused on audience research, targeted marketing, lead qualification, and performance tracking.",
    metrics: JSON.stringify([
      { label: "Audience Targeting", value: "Precise" },
      { label: "Service Inquiries", value: "Qualified" },
      { label: "Customer Acquisition", value: "Consistent" },
    ]),
    architecture:
      "Structured lead generation process designed to improve audience targeting, attract relevant inquiries, and help the business identify potential customers.",
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04"),
  },
  {
    id: "proj-5",
    slug: "performance-advertising-campaigns",
    title: "Performance Advertising Scale",
    tagline:
      "Scaling Digital Advertising for Better Lead Generation, Conversion Efficiency, and Business Growth",
    category: "Performance Advertising Scale",
    description:
      "A performance-driven approach to digital advertising combining audience research, strategic campaign planning, conversion tracking, and continuous optimization.",
    client: "B2B & Business Services",
    duration: "Ongoing",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "/?tab=contact",
    githubUrl: null,
    featured: true,
    tags: JSON.stringify([
      "Google Ads",
      "Meta Ads",
      "Audience Targeting",
      "Conversion Tracking",
      "ROAS Scaling",
      "CPL Optimization",
    ]),
    challenges:
      "Rising acquisition costs, low-quality leads, limited conversion visibility, audience saturation, unoptimized landing pages, and scaling uncertainty.",
    solution:
      "Audience research, campaign architecture, conversion tracking, creative & messaging optimization, landing page refinement, and budget scaling.",
    metrics: JSON.stringify([
      { label: "Lead Generation", value: "Consistent" },
      { label: "Conversion Efficiency", value: "Optimized" },
      { label: "Campaign Scale", value: "Measurable" },
    ]),
    architecture:
      "Google Ads + Meta Ads + Conversion Tracking + Landing Page Optimization + Continual Performance Scaling.",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
  },
];

export const FALLBACK_SERVICES: ServiceData[] = [
  {
    id: "srv-1",
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    description:
      "A focused growth plan built around your business goals, target audience, marketing channels, and budget to drive sustainable momentum.",
    iconName: "Search",
    features: JSON.stringify([
      "Goal & Channel Mapping",
      "Audience & Competitor Research",
      "Funnel Architecture",
      "ROI & KPI Measurement",
    ]),
    order: 1,
  },
  {
    id: "srv-2",
    slug: "lead-generation",
    title: "Lead Generation",
    description:
      "Campaigns and outreach systems engineered to create a reliable, predictable pipeline of qualified prospects ready for sales.",
    iconName: "Zap",
    features: JSON.stringify([
      "Qualified Pipeline Systems",
      "B2B & B2C Prospect Targeting",
      "Conversion Landing Pages",
      "CRM Lead Syncing",
    ]),
    order: 2,
  },
  {
    id: "srv-3",
    slug: "paid-advertising",
    title: "Paid Advertising (PPC)",
    description:
      "Google Ads, Meta Ads, LinkedIn Ads, and PPC campaigns structured to maximize conversion efficiency and return on ad spend.",
    iconName: "Code",
    features: JSON.stringify([
      "Google Search & Display Ads",
      "Meta & LinkedIn Campaign Retargeting",
      "Ad Creative & Copywriting",
      "Bid & Budget Optimization",
    ]),
    order: 3,
  },
  {
    id: "srv-4",
    slug: "seo-growth",
    title: "SEO & Performance",
    description:
      "Search strategies that improve domain visibility, attract intent-driven organic traffic, and compound business revenue over time.",
    iconName: "Layers",
    features: JSON.stringify([
      "Technical Audit & Crawl Fixes",
      "JSON-LD Schema Markup",
      "Core Web Vitals 99+ Tuning",
      "Topical Keyword Strategy",
    ]),
    order: 4,
  },
  {
    id: "srv-5",
    slug: "email-marketing",
    title: "Email Marketing & Automation",
    description:
      "Strategic email campaigns and automated workflows that nurture lead interest, re-engage cold prospects, and support ongoing sales.",
    iconName: "Zap",
    features: JSON.stringify([
      "Automated Lead Nurture Flows",
      "Behavioral Trigger Sequences",
      "Segmentation & Personalization",
      "A/B Copy Testing",
    ]),
    order: 5,
  },
  {
    id: "srv-6",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Content and campaign management that turns your social media presence into a trustworthy, converting brand awareness channel.",
    iconName: "Search",
    features: JSON.stringify([
      "Brand Content Strategy",
      "Audience Engagement",
      "Paid Social Campaigns",
      "Analytics & Reporting",
    ]),
    order: 6,
  },
  {
    id: "srv-7",
    slug: "linkedin-growth-outreach",
    title: "LinkedIn Growth & Outreach",
    description:
      "Executive profile optimization, account-based targeting, and direct outreach that spark high-value B2B sales conversations.",
    iconName: "Code",
    features: JSON.stringify([
      "Executive Profile Authority",
      "Account-Based Sales Targeting",
      "Personalized Direct Outreach",
      "Meeting Booking Workflows",
    ]),
    order: 7,
  },
];

export const FALLBACK_EXPERIENCES: ExperienceData[] = [
  {
    id: "exp-1",
    company: "G2VERTEX Digital Growth Agency",
    role: "Strategy & Full-Service Execution",
    period: "2023 - Present",
    description:
      "Delivering performance marketing, technical SEO, and lead generation systems for ambitious B2B & SaaS companies.",
    achievements: JSON.stringify([
      "Generated +340% average organic search growth across client portfolios.",
      "Scaled B2B client pipeline with automated LinkedIn & PPC lead engines.",
      "Delivered sub-second page performance scores (99+ Core Web Vitals).",
    ]),
    technologies: JSON.stringify([
      "Google Ads",
      "Meta Ads",
      "LinkedIn Sales Navigator",
      "Technical SEO",
      "Next.js",
      "HubSpot",
    ]),
    isCurrent: true,
    order: 1,
  },
  {
    id: "exp-2",
    company: "Performance Media Group",
    role: "Senior Growth & Search Architect",
    period: "2021 - 2023",
    description:
      "Managed high-volume PPC campaigns, technical audit pipelines, and conversion rate optimization.",
    achievements: JSON.stringify([
      "Managed $2.5M+ annual paid media spend maintaining average 4.2x ROAS.",
      "Built automated lead scoring funnels reducing sales response SLA under 15 minutes.",
    ]),
    technologies: JSON.stringify([
      "Google Ads",
      "Google Analytics 4",
      "SEO Schema",
      "A/B Testing",
    ]),
    isCurrent: false,
    order: 2,
  },
];

export const FALLBACK_TESTIMONIALS: TestimonialData[] = [
  {
    id: "test-1",
    name: "Rangaraj",
    role: "Founder",
    company: "Ahattrickz InfoTech",
    avatarUrl: "",
    content:
      "No pressure, no generic pitch. G2VERTEX delivered clear reporting, transparent execution, and continuous optimization. They turned our digital presence into a real growth engine.",
    rating: 5,
    featured: true,
    createdAt: new Date("2024-01-01"),
  },
];
