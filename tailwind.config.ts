import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { fontFamily: { grotesque: "var(--font-grotesque" } },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        custom: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#30313d",
          "base-content": "#ffffff",
          "accent-content": "#f8f9fd",
          "neutral-content": "#dfe5eb",
          primary: "#06ab78",
          secondary: "#ffb74d",
          "primary-content": "#ffffff",
        },
      },
    ],
  },
};
export default config;
