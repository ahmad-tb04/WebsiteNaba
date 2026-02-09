/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#1a1f3c',
          50: '#f2f3f8',
          100: '#e5e7f1',
          200: '#c5c9e0',
          300: '#9fa5c7',
          400: '#737ba9',
          500: '#535b8a',
          600: '#424972',
          700: '#373d5e',
          800: '#2d3250',
          900: '#1a1f3c',
          950: '#0f1221',
        },
        'accent': {
          DEFAULT: '#f5c518',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f5c518',
          500: '#d4a00c',
          600: '#a67c07',
          700: '#7a5a05',
          800: '#5c4304',
          900: '#3d2c03',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 20s ease-in-out infinite',
        'float-medium': 'float 15s ease-in-out infinite',
        'float-fast': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(2deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
