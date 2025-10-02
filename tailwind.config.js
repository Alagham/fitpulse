// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10B981", // emerald green
        dark: "#1F2937", // gray-800
      },
    },
  },
  plugins: [],
};
