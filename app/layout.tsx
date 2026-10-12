import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://g2vertex.com"),
  title: "G2 VERTEX | Performance Marketing, IT & Services Consulting",
  description:
    "G2VERTEX drives business growth through digital marketing and lead generation.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "G2 VERTEX",
    "Digital Marketing",
    "IT and Services Consulting",
    "Performance Marketing",
    "Lead Generation",
    "SEO & Performance",
    "Paid Advertising",
  ],
  authors: [{ name: "G2 VERTEX", url: "https://g2vertex.com" }],
  openGraph: {
    title: "G2 VERTEX | Digital Marketing, IT & Services Consulting",
    description:
      "Performance marketing, lead generation, paid advertising, and IT services consulting with G2 VERTEX.",
    url: "https://g2vertex.com",
    siteName: "G2 VERTEX",
    type: "website",
    images: [
      {
        url: "/images/g2-vertex-logo.png",
        width: 1024,
        height: 1024,
        alt: "G2 VERTEX Logo",
      },
    ],
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
    "@type": "Organization",
    name: "G2 VERTEX",
    url: "https://g2vertex.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919385219979",
      contactType: "customer service",
      email: "contact@g2vertex.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/g2-vertex/",
    ],
    knowsAbout: [
      "Digital Marketing",
      "Performance Marketing",
      "Lead Generation",
      "SEO & Performance",
      "Paid Advertising (PPC)",
      "LinkedIn Outreach",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches);if(d){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${outfit.variable} font-sans bg-white dark:bg-[#0A0F1D] text-slate-900 dark:text-slate-100 antialiased selection:bg-[#0f62fe] selection:text-white transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
