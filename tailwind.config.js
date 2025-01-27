/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          gold: '#dbc580',
          navy: '#2d2d3d',
          'navy-light': '#3d3d4d',
          turquoise: '#4da59e',
          grey: '#58585a',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }