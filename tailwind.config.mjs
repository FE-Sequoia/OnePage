/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        primaryLight: "#60a5fa",
        primaryDark: "#2563eb",
        accent: "#06b6d4",
        accentLight: "#22d3ee",
        dark: "#0f172a",
        darker: "#020617",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #eff6ff 0%, #e0f2fe 50%, #f0f9ff 100%)",
        "hero-gradient-dark":
          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #172554 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
