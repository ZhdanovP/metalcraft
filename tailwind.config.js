/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#070b14',
          900: '#0b1220',
          800: '#0f1a33',
        },
        steel: {
          100: '#d1d5db',
          300: '#9ca3af',
          500: '#64748b',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}

