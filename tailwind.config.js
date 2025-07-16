/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: '#0f1117',
        vscode: {
          DEFAULT: '#3CAEFF',
          hover: '#70C0FF',
        },
      },
    },
  },
  plugins: [],
}

