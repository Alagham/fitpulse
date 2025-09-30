/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10B981", // emerald
        secondary: "#3B82F6", // sky blue
        accent: "#F59E0B", // amber
        dark: "#374151", // cool gray
        light: "#F9FAFB", // white background
      },
    },
  },
  plugins: [],
}
