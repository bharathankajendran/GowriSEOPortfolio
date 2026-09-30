import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        card: "#FFFFFF",
        border: "#E2E8F0",
        navy: {
          900: "#0B192C",
          950: "#070F1B",
        },
        virtusa: {
          blue: "#0066FF",
          darkBlue: "#0044B3",
          lightBg: "#F8FAFC",
          cardBg: "#FFFFFF",
          accentOrange: "#FF5500",
        },
        muted: {
          DEFAULT: "#64748B",
          foreground: "#475569"
        },
        accent: {
          blue: "#0066FF",
          orange: "#FF5500",
          emerald: "#10B981",
          cyan: "#0284C7",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Inter", "sans-serif"],
        display: ["var(--font-outfit)", "Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "corporate-glow": "radial-gradient(circle at 50% 0%, rgba(0, 102, 255, 0.08) 0%, rgba(248, 250, 252, 0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
