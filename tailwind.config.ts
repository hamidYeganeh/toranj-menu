import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#0C6056",
        },
        secondary: {
          light: "#BBA36026",
          main: "#BBA360",
        },
        text: {
          disabled: "#787878",
        },
        background: "#FFFFFF",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lustria: "var(--font-lustria)",
      },
    },
  },
  plugins: [],
} satisfies Config;
