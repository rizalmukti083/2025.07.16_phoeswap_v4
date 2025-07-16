
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'phoenix-bg': '#120C1A',
        'phoenix-container-bg': '#1A1426',
        'phoenix-border': '#33294D',
        'phoenix-accent': '#FF8A00',
        'phoenix-highlight': '#FFC700',
        'phoenix-text-primary': '#FFFFFF',
        'phoenix-text-secondary': '#A19CB4',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'pulse-light': 'pulseLight 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseLight: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        phoenix: {
          "primary": "#FF8A00",
          "secondary": "#FFC700",
          "accent": "#33294D",
          "neutral": "#1A1426",
          "base-100": "#120C1A",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "dark",
    ],
  },
};
