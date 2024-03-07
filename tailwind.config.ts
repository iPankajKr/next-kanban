import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    container: {
      center: true
    },
    colors: {
      // Dark Mode Colors
      dark: {
        primary: '#1a202c', // Dark primary color
        secondary: '#2d3748', // Dark secondary color
        accent: '#4a5568', // Dark accent color
        background: '#2d3748', // Dark background color
      },
      // Light Mode Colors
      light: {
        primary: '#ffffff', // Light primary color
        secondary: '#f7fafc', // Light secondary color
        accent: '#edf2f7', // Light accent color
        background: '#f7fafc', // Light background color
      },
    },
    backgroundColor: {
      // Dark Mode Background Colors
      dark: {
        primary: '#1a202c', // Dark primary background color
        secondary: '#2d3748', // Dark secondary background color
        accent: '#4a5568', // Dark accent background color
        background: '#2d3748', // Dark default background color
      },
      // Light Mode Background Colors
      light: {
        primary: '#ffffff', // Light primary background color
        secondary: '#f7fafc', // Light secondary background color
        accent: '#edf2f7', // Light accent background color
        background: '#f7fafc', // Light default background color
      },
    },

  },
  plugins: [],
};
export default config;
