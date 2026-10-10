export interface CaseStudyData {
  slug: string;
  order: number;
  title: string;
  subtitle: string;
  industry: string;
  service: string;
  category: string;
  focusAreas?: string;
  market?: string;
  overview?: string;
  challenge: string;
  strategy?: string;
  solution: string;
  goal?: string;
  expectedOutcome?: string;
  modules?: Array<{ title: string; desc: string }>;
  businessValue?: string;
  whyChooseUs?: string;
  expectedImpact?: string[];
  kpiTable?: Array<{ metric: string; purpose: string }>;
  conclusion?: string;
  ctaText: string;
  ctaAction: string;
  closingNote?: string;
  tags: string[];
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "email-nurture-lead-engine": {
    slug: "email-nurture-lead-engine",
    order: 1,
    title: "Email Nurture & Lead Engine",
    subtitle: "Turning Prospects into Opportunities",
    industry: "B2B & Digital Services",
    service: "Email Nurture & Lead Generation",
    category: "Email Nurture & Lead Engine",
    challenge:
      "Potential customers needed consistent follow-ups to stay engaged and move toward a purchase.",
    solution:
      "G2VERTEX designed targeted email campaigns, personalized messaging, and structured follow-up sequences to nurture prospects and encourage meaningful conversations.",
    expectedOutcome:
      "A streamlined email nurturing process designed to strengthen engagement and support lead conversion.",
    closingNote:
      "Want to nurture your leads more effectively? Let’s build your email growth strategy.",
    ctaText: "Book a Growth Call",
    ctaAction: "#contact",
    tags: ["Email Campaigns", "Personalized Messaging", "Follow-up Sequences", "Lead Conversion", "Prospect Nurturing"],
  },
  "seo-growth-keyword-domination": {
    slug: "seo-growth-keyword-domination",
    order: 2,
    title: "SEO Growth & Keyword Domination",
    subtitle:
      "How a Strategic SEO Approach Can Improve Search Visibility and Drive Qualified Organic Traffic",
    industry: "B2B & Business Services",
    service: "Search Engine Optimization (SEO)",
    category: "Technical SEO",
    focusAreas:
      "Keyword Research, On-Page SEO, Technical SEO, Content Strategy & Organic Growth",
    overview:
      "In a competitive digital landscape, simply having a website is not enough. Businesses need to appear when potential customers search for the products and services they offer.\n\nG2 VERTEX uses a structured, data-driven SEO strategy to help businesses improve search engine visibility, target relevant keywords, and attract audiences with genuine purchase intent.\n\nThe objective is to build sustainable organic growth by aligning website content, technical performance, and keyword targeting with business goals.",
    challenge:
      "Businesses competing for online visibility often face several SEO challenges:\n\n• Low keyword visibility: Important commercial keywords fail to reach prominent search positions.\n• Limited organic traffic: The website attracts insufficient visitors through unpaid search results.\n• High competition: Established competitors dominate valuable search terms.\n• Content gaps: Existing pages do not adequately address customer questions or search intent.\n• Technical SEO issues: Website structure, indexing, internal linking, or page performance may limit organic visibility.\n• Low-quality traffic: Some visitors arrive through keywords that are not closely aligned with business offerings.\n\nThese challenges can make it difficult for businesses to generate consistent organic enquiries and establish authority in their industry.",
    strategy:
      "G2 VERTEX approaches SEO through a combination of research, optimization, content development, and ongoing performance analysis.",
    solution:
      "1. Strategic Keyword Research: Identifying high-intent commercial keywords, industry-specific terms, and long-tail searches that connect with target buyers rather than chasing raw volume.\n\n2. On-Page SEO Optimization: Optimizing title tags, meta descriptions, heading structure, landing-page content, internal linking, and user experience.\n\n3. Technical SEO Improvements: Reviewing indexing, crawlability, broken links, XML sitemaps, robots.txt, mobile usability, and schema structured data.\n\n4. SEO Content Strategy: Developing authoritative service pages, industry guides, educational articles, and FAQ hubs satisfying customer search intent.\n\n5. Competitive Analysis & Keyword Expansion: Analyzing competitor gaps and discovering opportunities to expand organic market share.\n\n6. Performance Tracking & Continuous Optimization: Monitoring clicks, impressions, keyword trends, and organic enquiries to continually refine strategy.",
    expectedImpact: [
      "Increased visibility for relevant commercial keywords",
      "Growth in qualified organic website traffic",
      "Stronger coverage of important industry search terms",
      "Improved website relevance and user experience",
      "More opportunities to generate organic enquiries",
      "Reduced dependence on paid advertising over time",
      "Sustainable long-term search visibility",
    ],
    kpiTable: [
      { metric: "Search visibility", purpose: "Impressions and visibility trends" },
      { metric: "Keyword performance", purpose: "Position changes for target keywords" },
      { metric: "Organic traffic", purpose: "Search clicks and landing-page visits" },
      { metric: "Lead generation", purpose: "Organic enquiries and conversions" },
      { metric: "Technical health", purpose: "Indexing, crawlability, and identified issues" },
    ],
    conclusion:
      "Sustainable SEO growth requires more than adding keywords to website pages. It involves understanding customer intent, building relevant content, maintaining technical quality, and continuously improving performance. G2 VERTEX helps businesses approach SEO strategically, creating a stronger foundation for organic visibility, relevant traffic, and long-term digital growth.",
    closingNote:
      "Want to improve your rankings, reach the right audience, and turn organic search into a stronger acquisition channel? Partner with G2 VERTEX for a strategic SEO growth plan.",
    ctaText: "Book a Consultation Today",
    ctaAction: "#contact",
    tags: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy", "Organic Growth", "Rankings"],
  },
  "b2b-upvc-business-erp-crm": {
    slug: "b2b-upvc-business-erp-crm",
    order: 3,
    title: "B2B Case Study: Transforming UPVC Business Operations with an Integrated ERP/CRM Solution",
    subtitle: "Centralizing Essential Business Operations Into One Platform",
    industry: "UPVC Window & Door Manufacturing",
    service: "UPVC Business Management ERP/CRM",
    category: "B2B",
    overview:
      "UPVC window and door manufacturing businesses manage multiple interconnected processes, including customer enquiries, quotations, order processing, purchasing, inventory, production coordination, and financial management.\n\nWhen these operations are handled using spreadsheets, manual records, and disconnected tools, maintaining accurate information and coordinating between departments can become challenging.\n\nG2 VERTEX offers a UPVC-focused Business Management ERP/CRM solution designed to bring essential business operations together in one centralized platform.",
    challenge:
      "As a UPVC business grows, managing daily operations across different departments can become increasingly complex.\n\nCommon operational challenges include:\n• Scattered customer information: Enquiries, customer details, and follow-ups are maintained across different systems.\n• Quotation management difficulties: Preparing, updating, and tracking quotations can require significant manual effort.\n• Inventory visibility issues: Monitoring stock levels, material availability, and purchase requirements becomes challenging.\n• Disconnected workflows: Sales, purchasing, inventory, and accounts may operate independently, making coordination difficult.\n• Limited business visibility: Management may need to collect information from multiple sources to understand business performance.\n• Manual reporting: Preparing operational and financial reports can take additional time and effort.\n\nThese challenges can affect productivity, coordination, and the ability to make timely business decisions.",
    solution:
      "G2 VERTEX provides an integrated software solution designed around the operational requirements of UPVC businesses. The platform brings key business functions into one system, helping teams organize information and manage workflows more efficiently.",
    modules: [
      {
        title: "1. CRM & Customer Management",
        desc: "Organize customer information, track enquiries, and maintain visibility into customer interactions and follow-ups.",
      },
      {
        title: "2. Quotation Management",
        desc: "Create and manage quotations while keeping relevant customer and sales information accessible.",
      },
      {
        title: "3. Sales & Order Management",
        desc: "Maintain sales records and improve visibility into customer orders and their progress.",
      },
      {
        title: "4. Purchase & Vendor Management",
        desc: "Manage purchasing activities, supplier information, and purchase orders in a centralized system.",
      },
      {
        title: "5. Inventory & Stock Management",
        desc: "Track inventory movements, stock availability, goods received, and stock issues.",
      },
      {
        title: "6. Production & Job Workflow Support",
        desc: "Where configured, coordinate relevant job orders and operational activities to support manufacturing workflows.",
      },
      {
        title: "7. Accounts & Payment Management",
        desc: "Maintain relevant payment and financial records to improve access to business information.",
      },
      {
        title: "8. Reports & Management Insights",
        desc: "Access available business reports to help monitor operations and support informed decision-making.",
      },
    ],
    expectedImpact: [
      "Better coordination between departments",
      "More organized customer and quotation management",
      "Improved visibility into purchasing and inventory",
      "Reduced reliance on disconnected spreadsheets and manual records",
      "Easier access to operational information",
      "More structured business reporting",
      "A scalable foundation for managing business growth",
    ],
    businessValue:
      "An integrated business management system is more than a digital record-keeping tool. It helps establish a connected view of customer activity, sales, materials, purchasing, and financial information. For UPVC business owners and managers, this can make it easier to identify operational gaps, coordinate teams, and access the information needed to run daily operations.",
    whyChooseUs:
      "G2 VERTEX combines technology expertise with a business-focused approach to software solutions. Our UPVC Business Management ERP/CRM is designed to help UPVC companies organize their workflows, centralize key business information, and improve operational visibility through a unified platform.\n\nWhether a business is moving away from spreadsheets or looking to connect existing processes, the right ERP/CRM can provide a more structured way to manage day-to-day operations.",
    closingNote:
      "Discover how G2 VERTEX UPVC Business Management ERP/CRM can support your business operations. See the software in action and explore how its modules can fit your business workflow. G2 VERTEX — Technology That Connects Your Business.",
    ctaText: "Book a Demo Today",
    ctaAction: "#contact",
    tags: ["UPVC ERP/CRM", "Quotation Management", "Inventory Control", "Job Workflows", "Order Tracking", "Vendor Management"],
  },
  "b2c-customer-acquisition-engine": {
    slug: "b2c-customer-acquisition-engine",
    order: 4,
    title: "Case Study: B2C Lead Generation for a US Home Services Company",
    subtitle: "Turn Potential Customers into Real Opportunities",
    industry: "Home Services — HVAC & Air Conditioning",
    market: "United States",
    service: "B2C Lead Generation & Digital Outreach",
    category: "B2C",
    challenge:
      "A home services company wanted to connect with more homeowners who needed air conditioning installation, repair, and maintenance services. The company needed a targeted strategy to reach relevant customers and generate genuine service inquiries.",
    strategy:
      "G2VERTEX developed a targeted lead generation approach focused on:\n\n• Audience Research: Identifying suitable customer segments within the company's service areas.\n• Targeted Marketing: Reaching relevant audiences through appropriate digital channels.\n• Lead Qualification: Assessing inquiries against the company's service requirements and target locations.\n• Performance Tracking: Organizing lead data and monitoring campaign engagement to identify opportunities for improvement.",
    goal: "To help the business reach relevant homeowners, increase service inquiries, and build a more consistent customer acquisition process.",
    expectedOutcome:
      "A structured lead generation process designed to improve audience targeting, attract relevant inquiries, and help the business identify potential customers more efficiently.",
    solution:
      "Every business has different customer acquisition goals. G2VERTEX develops tailored lead generation strategies based on your target audience, service area, and business objectives.",
    closingNote:
      "Looking to reach more potential customers? Let's build a lead generation strategy for your business.",
    ctaText: "Book a Growth Call",
    ctaAction: "#contact",
    tags: ["HVAC & AC Services", "Home Services", "Audience Research", "Targeted Marketing", "Lead Qualification", "Performance Tracking"],
  },
  "performance-advertising-campaigns": {
    slug: "performance-advertising-campaigns",
    order: 5,
    title: "Performance Advertising Scale",
    subtitle:
      "Scaling Digital Advertising for Better Lead Generation, Conversion Efficiency, and Business Growth",
    industry: "B2B & Business Services",
    service: "Performance Marketing & Paid Advertising",
    category: "Performance Advertising Scale",
    focusAreas:
      "Google Ads, Meta Ads, Audience Targeting, Conversion Tracking & Campaign Optimization",
    overview:
      "For businesses looking to grow online, running advertisements is only the first step. The real challenge is reaching the right audience, generating qualified leads, and turning advertising investment into measurable business opportunities.\n\nG2 VERTEX takes a performance-driven approach to digital advertising, combining audience research, strategic campaign planning, conversion tracking, and continuous optimization to help businesses scale their marketing efforts.\n\nOur objective is to build advertising campaigns that align with business goals, improve lead quality, and support sustainable growth.",
    challenge:
      "Businesses investing in paid advertising can face several challenges as they attempt to scale their campaigns:\n\n• Rising acquisition costs: Advertising costs increase without a proportional improvement in results.\n• Low-quality leads: Campaigns generate enquiries that do not match the target audience or ideal customer profile.\n• Limited conversion visibility: Incomplete tracking makes it difficult to identify which campaigns generate valuable leads.\n• Audience saturation: Existing audiences become less responsive over time.\n• Unoptimized landing pages: Website experiences fail to convert enough visitors into enquiries.\n• Scaling uncertainty: Increasing advertising budgets without a clear strategy can reduce campaign efficiency.\n\nThese challenges make it difficult to maintain consistent performance while expanding advertising reach.",
    strategy:
      "G2 VERTEX uses a structured campaign management process to improve performance and identify opportunities for scale.",
    solution:
      "1. Audience Research & Targeting: Identifying relevant segments based on industry, location, customer needs, and buying intent with C-level decision-maker alignment.\n\n2. Campaign Architecture & Channel Selection: Google Ads for intent search, Meta Ads for awareness and inquiries, Remarketing to re-engage past visitors, and Creative A/B testing.\n\n3. Conversion Tracking & Measurement: Configuring tracking for form submissions, phone calls, demo bookings, and CRM pipeline attribution.\n\n4. Creative & Messaging Optimization: Refining headlines, value propositions, and calls to action to attract prospects ready to engage.\n\n5. Landing Page & Lead Funnel Optimization: Reviewing user journeys from ad click to consultation scheduling to remove conversion friction.\n\n6. Budget Optimization & Campaign Scaling: Continual evaluation, spend reallocation toward top segments, and incremental budget expansion based on ROAS.",
    kpiTable: [
      { metric: "Cost per lead (CPL)", purpose: "Measures advertising spend per generated lead" },
      { metric: "Conversion rate", purpose: "Tracks percentage of visitors who complete desired action" },
      { metric: "Qualified lead rate", purpose: "Measures how many enquiries meet target criteria" },
      { metric: "Customer acquisition cost (CAC)", purpose: "Evaluates cost of acquiring customers" },
      { metric: "Return on ad spend (ROAS)", purpose: "Measures attributed revenue relative to spend" },
      { metric: "Lead-to-customer rate", purpose: "Tracks how effectively leads convert into customers" },
    ],
    expectedImpact: [
      "More consistent lead generation",
      "Better alignment between advertising and target customers",
      "Improved visibility into campaign performance",
      "More efficient allocation of advertising budgets",
      "Better understanding of lead quality and conversion performance",
      "Scalable campaigns supported by measurable results",
      "Stronger alignment between marketing activity and business outcomes",
    ],
    conclusion:
      "At G2 VERTEX, performance advertising is treated as an ongoing optimization process rather than a one-time campaign launch. By combining audience insights, relevant messaging, conversion measurement, and continuous testing, we help businesses make more informed advertising decisions and identify opportunities for growth.",
    closingNote:
      "Looking to generate better leads, improve campaign efficiency, and scale your digital marketing efforts? Partner with G2 VERTEX to build a performance advertising strategy aligned with your business goals.",
    ctaText: "Book a Consultation Today",
    ctaAction: "#contact",
    tags: ["Google Ads", "Meta Ads", "Audience Targeting", "Conversion Tracking", "ROAS Scaling", "CPL Optimization"],
  },
};

// Aliases to handle legacy slugs seamlessly
CASE_STUDIES["omnichannel-email-nurture-automation"] = CASE_STUDIES["email-nurture-lead-engine"];
CASE_STUDIES["seo-growth-search-domination"] = CASE_STUDIES["seo-growth-keyword-domination"];
CASE_STUDIES["linkedin-b2b-outreach-engine"] = CASE_STUDIES["b2b-upvc-business-erp-crm"];

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return CASE_STUDIES[slug];
};
