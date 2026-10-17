import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-league-spartan)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        crimson: {
          DEFAULT: '#C03028',
          dark: '#9A2420',
          light: 'rgba(192,48,40,0.08)',
        },
        stone: {
          DEFAULT: '#F2F0EB',
          dark: '#EFEDE8',
          mid: '#E8E5DE',
        },
        charcoal: {
          DEFAULT: '#1A1A1E',
          light: '#1E1E24',
          dark: '#0F0F12',
          mid: '#252529',
          deep: '#161619',
        },
        violet: '#6B3FA0',
        'signal-green': '#2D8A4E',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'particle-pulse': 'particlePulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        particlePulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
