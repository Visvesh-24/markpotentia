/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#06090F',
        base: '#0A0E15',
        surface: {
          1: '#0E131C',
          2: '#131A25',
          3: '#192230',
        },
        line: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#2E90FA',
          soft: '#5AAEFF',
          deep: '#1668C9',
        },
        signal: '#34D399',
        fg: {
          DEFAULT: '#EDF1F6',
          muted: '#94A2B4',
          dim: '#5B6675',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        shell: '1280px',
        wide: '1440px',
      },
      letterSpacing: {
        label: '0.22em',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(46,144,250,0.25), 0 20px 60px -20px rgba(46,144,250,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'accent-grad': 'linear-gradient(120deg, #2E90FA 0%, #34D399 100%)',
        'grid-fade':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};
