/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary':'#F6F4F2',
        // "secondary": '#425664',
        // "tertiary": '#C6AD8F',
        // "primary-alt": "#F2F4F6",
        // "secondary-alt": "#645042"
        // "primary": "#f4efef",
        // "secondary": "#d4e3eb",
        // "tertiary": "#0c6c95",
        // "tertiary-alt": "rgba(12,108,149,0.84)",
        // "quartenary": "#f8ae3a",
        // lightBlue: '#E0F7FA',
        // softWhite: '#F9FAFB',
        // blueGray: '#597788',
        // deepBlue: '#0277BD',
        // skyBlue: '#47a0d1',
        // darkGray: '#37474F',
        primary: "rgba(251, 250, 255, 1)",
        primaryAlt: "rgba(240,239,244,0.48)",
        secondary: "rgba(231, 244, 254, 1)",
      }
    },
  },
  plugins: [],
}

