/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F7F5',
        ink: '#111111',
        muted: '#8A8A8A',
        line: 'rgba(0, 0, 0, 0.10)',
        accent: '#E6007E',
        accentDark: '#B80066',
        blau: '#009FE3',
      },
      fontFamily: {
        sans: [
          'PingFang SC',
          'Microsoft YaHei',
          'Noto Sans SC',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(17, 17, 17, 0.08)',
      },
    },
  },
  plugins: [],
};
