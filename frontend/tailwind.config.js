/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3022',
          dark: '#102016',
          light: '#294834',
        },
        terracotta: '#C35B3E',
        gold: '#D4AF37',
        ivory: '#F9F6F0',
        ink: '#1C1C18',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      borderRadius: {
        editorial: '1.25rem',
      },
      boxShadow: {
        soft: '0 18px 50px -28px rgba(27, 48, 34, 0.35)',
        lift: '0 24px 60px -30px rgba(27, 48, 34, 0.5)',
      },
    },
  },
  plugins: [],
};
