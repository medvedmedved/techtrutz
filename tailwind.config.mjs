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
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490'
        },
        ink: {
          900: '#0b1020',
          800: '#17213a'
        }
      },
      boxShadow: {
        soft: '0 18px 40px -22px rgba(11, 16, 32, 0.38)',
        glow: '0 0 0 1px rgba(8, 145, 178, 0.15), 0 28px 60px -30px rgba(8, 145, 178, 0.6)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    }
  },
  plugins: []
};
