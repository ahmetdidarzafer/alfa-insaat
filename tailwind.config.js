/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Koyu mavi
          light: '#3B82F6',   // Açık mavi
          dark: '#1E3A8A',    // Daha koyu mavi
        },
        secondary: {
          DEFAULT: '#F59E0B', // Turuncu
          light: '#FBBF24',   // Açık turuncu
          dark: '#D97706',    // Koyu turuncu
        },
        accent: "#e53e3e",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 