/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#fefefe',
      'black': '#111',
      'gray': '#222222',
      'soft-white': '#f1f1f1',
      'blue': '#0096ff'
    },
    extend: {},
  },
  plugins: [],
}

