/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // para que escanee estilos HeroUI
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
