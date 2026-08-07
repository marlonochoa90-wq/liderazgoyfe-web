/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Azul profundo — color primario de marca
        deep: {
          DEFAULT: '#0B1F3A',
          50: '#EEF2F8',
          100: '#D7E0EE',
          200: '#AFC1DD',
          300: '#87A2CC',
          400: '#5F83BB',
          500: '#3A64A0',
          600: '#294B7D',
          700: '#1B3459',
          800: '#0F2340',
          900: '#0B1F3A',
          950: '#060F1D',
        },
        // Dorado elegante — color de acento
        gold: {
          DEFAULT: '#C9A24B',
          50: '#FBF6EA',
          100: '#F5EACB',
          200: '#EBD79C',
          300: '#E0C36D',
          400: '#D5AF4E',
          500: '#C9A24B',
          600: '#A9823A',
          700: '#83632D',
          800: '#5D4620',
          900: '#372913',
        },
        ivory: '#FAF9F6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(11,31,58,0.25)',
        gold: '0 8px 30px -8px rgba(201,162,75,0.45)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn 0.8s ease-out both',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
