import type { Config } from "tailwindcss";

/* ============================================================
   SANDBLASTING INSURANCE — "Industrial Forge" palette
   clay = industrial orange · sage = charcoal/steel · gold = amber
   cream = warm off-white · sand = light warm gray
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        sand: "#EDE8E0",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#C45B1A",
          dark: "#9C4413",
          light: "#E07830",
          50: "#FDF4EE",
          100: "#FAE4D0",
          200: "#F5C9A1",
          300: "#EEA86C",
          400: "#E68540",
          500: "#E07830",
          600: "#C45B1A",
          700: "#9C4413",
          800: "#74300C",
          900: "#4F2008",
        },
        sage: {
          DEFAULT: "#3A4550",
          dark: "#252E37",
          light: "#536270",
          50: "#EAECEE",
          100: "#CDD2D7",
          200: "#9AA5AE",
          300: "#6B7D88",
          400: "#536270",
          500: "#3A4550",
          600: "#252E37",
          700: "#181E24",
        },
        gold: {
          DEFAULT: "#D4920A",
          dark: "#A97108",
          light: "#EDB030",
          50: "#FDF6E3",
          100: "#FAE9B8",
          200: "#F4D074",
          300: "#EDB030",
          400: "#D4920A",
          500: "#B87A08",
          600: "#936106",
        },
        espresso: "#1C1610",
        cocoa: "#3D3025",
        mocha: "#7A6B55",
        adobe: "#DDD4C4",
        adobeDark: "#C5BAA5",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FAF8F5 0%, #EDE8E0 40%, #F5EDE4 70%, #FAF8F5 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(196,91,26,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(58,69,80,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #C45B1A 0%, #E07830 100%)",
        "sage-gradient": "linear-gradient(135deg, #3A4550 0%, #536270 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4920A 0%, #EDB030 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(156,68,19,0.22), 0 4px 12px -6px rgba(28,22,16,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(156,68,19,0.28), 0 10px 30px -10px rgba(28,22,16,0.10)",
        card: "0 2px 8px -2px rgba(28,22,16,0.06), 0 1px 3px -1px rgba(28,22,16,0.04)",
        "card-hover": "0 20px 50px -15px rgba(156,68,19,0.24), 0 8px 20px -8px rgba(28,22,16,0.10)",
        arch: "inset 0 -8px 30px -10px rgba(156,68,19,0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
