/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'zeta-blue': '#1e40af',
        'torus-gold': '#f59e0b',
        'field-purple': '#7c3aed',
        'consciousness-cyan': '#06b6d4'
      },
      fontFamily: {
        'math': ['Computer Modern', 'serif'],
      },
      animation: {
        'rotate-torus': 'rotate 20s linear infinite',
        'pulse-field': 'pulse 3s ease-in-out infinite',
        'transform-2d-3d': 'transform 5s ease-in-out'
      }
    },
  },
  plugins: [],
}