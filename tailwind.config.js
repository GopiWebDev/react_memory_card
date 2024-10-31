/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url("/src/assets/images/header.webp")',
      },
      fontFamily: {
        bebas: ['bebas', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
