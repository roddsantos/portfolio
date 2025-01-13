import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        "max-height": "max-height",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        container: "var(--container)",
        "container-2": "var(--container-2)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        transparent: "var(--transparent)",
      },
      fontFamily: {
        opensans: ["var(--font-open-sans)"],
        opensansitalic: ["var(--font-open-sans-italic)"],
        roboto: ["var(--font-roboto)"],
        lexendmega: ["var(--font-lexend-mega)"],
        archivo: ["var(--font-archivo)"],
        archivoitalic: ["var(--font-archivo-italic)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
