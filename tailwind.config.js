/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Bu zaten var demiştin
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App klasörü
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // BİLEŞENLER KLASÖRÜ (Burayı kontrol et!)
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}