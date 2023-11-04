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
      'primary': '#2c0047',
      'secondary': '#ffc640',
      'terceary': '#7b2486'
    },
    extend: {},
  },
  plugins: [],
}

