/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#0F2A4A",
          darker: "#081627",
          black: "#040D18",
          mid: "#13315C",
        },
        blue: {
          accent: "#2A6FB0",
          deep: "#1E5AA8",
        },
        gold: {
          DEFAULT: "#C9A961",
          deep: "#B08D57",
          light: "#DCBD7E",
        },
        base: {
          light: "#FAFAF8",
        },
        ink: "#1A1F26",
        gray: {
          soft: "#5B6470",
          softer: "#8A93A0",
        },
        risk: "#A14A3A",
        ok: "#1F6E4A",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Manrope"', "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        floor: "cubic-bezier(.4,0,.2,1)",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "bounce-down": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "bounce-down": "bounce-down 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
