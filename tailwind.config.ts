import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf7f2",
        ink: "#1f4733",
        accent: "#c0532b",
        body: "#2b2b28",
      },
      // `--font-noto-sans-sc` is injected by next/font in app/layout.tsx — keep it.
      fontFamily: {
        sans: ["var(--font-noto-sans-sc)", "system-ui", "sans-serif"],
        serif: ["var(--font-noto-serif-sc)", "Georgia", "serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: { content: "42rem" },
    },
  },
  plugins: [],
};
export default config;
