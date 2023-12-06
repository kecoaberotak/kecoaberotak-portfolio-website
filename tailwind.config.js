/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hitamDark: '#0E0F11',
        hitamLight: '#1C1C1E',
        biruDark: '#0A192F',
        biruMedium: '#133954',
        biruLight: '#7CD7C2',
        abuLight: '#628290',
        abuDark: '#A2A2A2',
        putihDark: '#E4E4E4',
        putihLight: '#FFFFFF',
        salmon: '#EFAEB6',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

