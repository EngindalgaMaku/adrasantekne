import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8edf5",
          100: "#c5d0e6",
          200: "#9eb0d5",
          300: "#7790c4",
          400: "#5b78b8",
          500: "#3f60ac",
          600: "#2c4a8f",
          700: "#1e3570",
          800: "#122050",
          900: "#0a1535",
          950: "#060d22",
        },
        ocean: {
          50: "#e0f4f9",
          100: "#b3e3f0",
          200: "#80d1e6",
          300: "#4dbfdc",
          400: "#26b1d5",
          500: "#00a3ce",
          600: "#0093b8",
          700: "#007f9e",
          800: "#006c85",
          900: "#004a5c",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        sand: {
          50: "#fefbf3",
          100: "#fdf3d7",
          200: "#fce9ae",
          300: "#f9d97a",
          400: "#f6c746",
          500: "#f2b21a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(6,13,34,0.55) 0%, rgba(6,13,34,0.3) 50%, rgba(6,13,34,0.7) 100%)",
        "card-gradient":
          "linear-gradient(to top, rgba(6,13,34,0.85) 0%, transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;