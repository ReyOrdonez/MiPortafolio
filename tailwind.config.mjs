/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myGreen: "#0CB08A",
      },
      backgroundColor: {
        darkTheme: "#0B0B0B",
        myGray: "#1A1A1A",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "arial"],
      },
      boxShadow: {
        custom: "2px 2px 1px 2px rgba(255, 255, 255, 0.21)",
      },
    },
  },
  plugins: [],
};
