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
        primary: '#ffffff', // Dark primary color
        secondary: '#C9AD91', // Dark secondary color
        accent: '#F29E45', // Dark accent color
        background: '#33261A', // Dark background color
      },
      // Light Mode Colors
      light: {
        primary: '#1C140D', // Light primary color
        secondary: '#9C734A', // Light secondary color
        accent: '#F29E45', // Light accent color
        // background: '#f7fafc', // Light background color
      },
    },
    backgroundColor: {
      // Dark Mode Background Colors
      dark: {
        primary: '#211A12', // Dark primary background color
        secondary: '#473624', // Dark secondary background color
        accent: '#F29E45', // Dark accent background color
        background: '#211A12', // Dark default background color
      },
      // Light Mode Background Colors
      light: {
        primary: '#FCFAF7', // Light primary background color
        secondary: '#F2EDE8', // Light secondary background color
        accent: '#F29E45', // Light accent background color
        background: '#FCFAF7', // Light default background color
      },
    },

  },
  plugins: [],
};
export default config;
