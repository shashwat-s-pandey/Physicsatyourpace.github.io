import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        typing: {
          from: { width: '0%' },
          to: { width: '41.2%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 2s, blink 0.75s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
