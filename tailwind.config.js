/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#FAFBFF',
        plasma: '#7B61FF',
        'plasma-light': '#9B8BFF',
        'plasma-glow': '#5F3FFF',
        ghost: '#0F0A1E',
        graphite: '#F3F0FF',
        surface: '#FFFFFF',
        ink: '#1E1B2E',
        muted: '#6B7280',
        'purple-border': '#E9E4FF',
        coral: '#EF4444',
        navy: {
          DEFAULT: '#0A0A14',
          card: '#18181B',
          deep: '#05050A',
          light: '#1F1F24',
        },
        accent: {
          DEFAULT: '#7B61FF',
          light: '#9B8BFF',
          glow: '#5F3FFF',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        drama: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'pulse-ring-delay': 'pulse-ring 2s ease-out 1s infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'grid-white': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'radial-accent': 'radial-gradient(ellipse at 60% 50%, rgba(123,97,255,0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
    },
  },
  plugins: [],
}
