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
          "base-100": "oklch(31.72% 0.021 281.35)",
          "base-200": "oklch(47.42% 0.01 293.69)",
          "base-content": "oklch(100% 0 0)",
          primary: "oklch(70.76% 0.197 46.46)",
          secondary: "oklch(82.87% 0.145 73.54)",
          "secondary-content": "oklch(74.61% 0.168 63.1)",
          "primary-content": "oklch(100% 0 0)",
        },
      },
    ],
  },
};
export default config;
