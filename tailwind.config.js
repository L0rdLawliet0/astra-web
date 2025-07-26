/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        astra: {
          blue: "#0ea5e9",
          dark: "#111927",
          deep: "#171e2f",
        }
      },
      boxShadow: {
        "astra-glow": "0 2px 40px 0 #0ea5e933",
      }
    },
  },
  plugins: [],
}
