/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-violet': 'hsl(256, 26%, 20%)',
        'grayish-blue': 'hsl(216, 30%, 68%)',
        'very-dark-violet': 'hsl(270, 9%, 17%)',
        'dark-grayish-violet': 'hsl(273, 4%, 51%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'serif': ['"DM Serif Display"', 'serif'],
        'sans': ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
