import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        accent: ["'Bebas Neue'", "cursive"],
      },
      colors: {
        sun: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        coral: {
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
        },
        ocean: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        suncart: {
          primary: "#f59e0b",
          "primary-content": "#1a0a00",
          secondary: "#f43f5e",
          "secondary-content": "#fff",
          accent: "#0ea5e9",
          "accent-content": "#fff",
          neutral: "#1c1917",
          "neutral-content": "#f5f5f4",
          "base-100": "#0f0a00",
          "base-200": "#1c1409",
          "base-300": "#2d2010",
          "base-content": "#fef3c7",
        },
      },
    ],
  },
};
export default config;