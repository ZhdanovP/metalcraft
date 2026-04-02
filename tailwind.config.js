/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          base: '#5A5869',
          raised: '#6A687A',
        },
        frame: '#7F7D91',
        accent: '#6C8CFF',
        fg: {
          primary: '#F1F1F5',
          secondary: '#C7C6D1',
          muted: '#9A99A8',
        },
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
}
