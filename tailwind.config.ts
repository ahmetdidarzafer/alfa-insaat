import type { Config } from "tailwindcss";

// CSS custom property tabanlı renk token'ı — değer app/globals.css'te
// :root ve :root[data-theme="light"] altında tanımlı, tema burada değil orada değişir.
// <alpha-value> Tailwind'in opacity modifier'ları (örn. bg-surface/80) için resmi placeholder'ı.
const themeColor = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marka rengi — logo görselinden örneklendi
        primary: {
          DEFAULT: themeColor("--color-primary"),
          light: themeColor("--color-primary-light"),
          dark: themeColor("--color-primary-dark"),
          foreground: themeColor("--color-primary-foreground"), // primary üzerindeki sabit metin rengi
        },
        surface: {
          DEFAULT: themeColor("--color-surface"),
          mid: themeColor("--color-surface-mid"),
          high: themeColor("--color-surface-high"),
        },
        content: {
          DEFAULT: themeColor("--color-content"),
          muted: themeColor("--color-content-muted"),
          inverse: themeColor("--color-content-inverse"),
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      // Motion tokens per CLAUDE.md §5.5 (emil-design-eng easing curves)
      transitionTimingFunction: {
        "out-strong": "cubic-bezier(0.23, 1, 0.32, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
