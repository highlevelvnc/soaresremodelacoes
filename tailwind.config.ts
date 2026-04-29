import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#171717",
          muted: "#404040",
        },
        gold: {
          50: "#fdf8e7",
          100: "#fbf0c5",
          200: "#f6e08a",
          300: "#efc94c",
          DEFAULT: "#d4af37",
          600: "#b8951f",
          700: "#8a6f17",
        },
        canvas: {
          DEFAULT: "#fbf9f8",
          alt: "#f5f3f3",
          dim: "#efeded",
        },
      },
      fontFamily: {
        display: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "extra-wide": "0.18em",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        ambient: "0 10px 40px rgba(0, 0, 0, 0.06)",
        "ambient-lg": "0 25px 60px rgba(0, 0, 0, 0.1)",
        gold: "0 12px 30px rgba(212, 175, 55, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
