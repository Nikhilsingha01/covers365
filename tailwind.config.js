/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#01172F", // Exact pixel sample from banner
            deep: "#001020",    // Deepest obsidian navy
            card: "#061F3B",    // Elevated navy card surface
            border: "#0E3259",  // Subtle divider border on dark
            accent: "#042544",  // Visiting card header navy
            light: "#0A2D54",   // Interactive hover navy
          },
          orange: {
            DEFAULT: "#FE8100", // Exact pixel sample from banner "365"
            hover: "#E07000",   // Pressed / hover state
            light: "#FF9A33",   // Highlight rim
            tint: "#FFF4E8",    // Subtle background tint for light mode badges
            dark: "#C65F00",
          },
          surface: {
            light: "#F4F6F9",   // Visiting card light grey-blue
            muted: "#E9EEF4",
            border: "#E2E8F0",
          },
          slate: {
            text: "#0F172A",    // Primary high-contrast text on light
            muted: "#64748B",   // Secondary text on light
            darkMuted: "#94A3B8", // Secondary text on dark navy
          }
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
        hindi: ["var(--font-hindi)", "Noto Sans Devanagari", "sans-serif"],
      },
      boxShadow: {
        'card-navy': '0 10px 30px -10px rgba(0, 16, 32, 0.7)',
        'orange-glow': '0 0 25px -5px rgba(254, 129, 0, 0.35)',
        'subtle-elevated': '0 4px 20px -2px rgba(1, 23, 47, 0.08)',
      },
    },
  },
  plugins: [],
};
