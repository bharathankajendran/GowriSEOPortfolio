import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GowriSEOPortfolio | Senior Full-Stack Architect & Technical SEO Strategist",
  description:
    "Portfolio of Gowri - Senior Full-Stack Next.js Architect and Technical SEO Strategist. Inspired by Choicy digital agency theme. Specializing in high-performance web applications, sub-second LCP, and search visibility.",
  keywords: [
    "Full-Stack Next.js Developer",
    "Technical SEO Strategist",
    "Next.js 14 App Router",
    "Prisma PostgreSQL",
    "Core Web Vitals Optimization",
    "Dark Glassmorphic Web Design",
    "Choicy Theme Clone",
  ],
  authors: [{ name: "Gowri", url: "https://gowriseo.com" }],
  openGraph: {
    title: "GowriSEOPortfolio | Senior Full-Stack Architect & Technical SEO",
    description:
      "Crafting sub-second digital experiences and explosive search visibility with Next.js 14, Tailwind CSS, Prisma, and Framer Motion.",
    url: "https://gowriseo.com",
    siteName: "GowriSEOPortfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GowriSEOPortfolio | Full-Stack & Technical SEO",
    description: "Next.js 14 App Router & Technical SEO Strategy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gowri",
    jobTitle: "Senior Full-Stack Architect & Technical SEO Consultant",
    url: "https://gowriseo.com",
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
      "https://twitter.com",
    ],
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Technical SEO",
      "Prisma ORM",
      "Core Web Vitals",
      "Tailwind CSS",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} font-sans bg-[#0A0A0C] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-400`}
      >
        {children}
      </body>
    </html>
  );
}
