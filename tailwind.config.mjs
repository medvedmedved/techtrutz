/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'system-ui', 'sans-serif']
      },
      colors: {
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        },
        ink: {
          900: '#0b1020',
          800: '#17213a',
          700: '#1e2d4a'
        }
      },
      boxShadow: {
        soft: '0 18px 40px -22px rgba(11, 16, 32, 0.38)',
        glow: '0 0 0 1px rgba(8, 145, 178, 0.15), 0 28px 60px -30px rgba(8, 145, 178, 0.5)',
        'glow-lg': '0 0 0 1px rgba(8, 145, 178, 0.3), 0 32px 72px -24px rgba(8, 145, 178, 0.7)',
        card: '0 4px 24px -4px rgba(11, 16, 32, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(11, 16, 32, 0.16)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(rgba(8,145,178,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.05) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '40px 40px'
      }
    }
  },
  plugins: []
};
