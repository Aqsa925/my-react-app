/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3460',
          light: '#1A5086',
          dark: '#0A264A'
        },
        secondary: {
          DEFAULT: '#E6B325',
          light: '#F9C535',
          dark: '#D69F1B'
        },
        accent: {
          DEFAULT: '#E94560',
          light: '#F5677F',
          dark: '#D92F4B'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'property': '0 10px 30px -5px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};