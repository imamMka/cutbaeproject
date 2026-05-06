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
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-dm-serif)", "serif"],
      },
      keyframes: {
        fadeInSlow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        heroTitle: {
          from: {
            opacity: "0",
            transform: "translateY(40px) skewY(2deg)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0) skewY(0)",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeInSlow: "fadeInSlow 1.5s ease forwards",
        fadeInUp: "fadeInUp 0.9s ease both",
        heroTitle: "heroTitle 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;