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
        // WCAG AA fix (BILIK-FARM-RELEASE-FIX-009): darkened from the original #C35B3E,
        // which failed 4.5:1 both as text on ivory/white and as a background under white text.
        terracotta: '#A94730',
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
