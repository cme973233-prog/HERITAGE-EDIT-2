/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#1e3a8a',
        'royal-gold': '#f59e0b',
        'cream': {
          50: '#fefdf8',
          100: '#fef3c7',
          200: '#fcd34d',
          300: '#f59e0b',
          400: '#d97706',
          500: '#b45309',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slideInLeft': 'slideInLeft 1s ease-out',
        'fadeInUp': 'fadeInUp 1s ease-out',
      }
    },
  },
  plugins: [],
};