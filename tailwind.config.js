/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        // Dark theme: the scale is inverted, so 50 is the darkest
        // background and 900 is the brightest text. Components keep
        // the same class names (bg-ink-50, text-ink-900, ...).
        white: "#11161D", // card and section surfaces
        ink: {
          50: "#0B0F14", // page background
          100: "#161C24", // placeholders, tag backgrounds
          200: "#232B36", // borders and grid lines
          300: "#3A4656", // small dividers
          400: "#8593A3", // dates, years, small labels
          500: "#9AA6B4", // form labels, authors
          600: "#B3BDC8", // descriptions, body text
          700: "#C8D0D9", // paragraphs
          800: "#DFE4EA", // outlined button
          900: "#F1F4F7", // headings
        },
        // Terminal green
        accent: {
          DEFAULT: "#4ADE80",
          dark: "#86EFAC", // brighter on hover and for tag text
          light: "#122A1C", // tag backgrounds
        },
      },
      keyframes: {
        blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
