/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-zain)', 'serif'], // Use the Amiri font as the default sans-serif font
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
  {
    light: {
      ...require('daisyui/src/theming/themes')['light'],
      primary: '#Fbc03F', // Light Yellow
      secondary: '#A3CB38', // Light Green
      accent: '#60A3D9', // Soft Blue
      neutral: '#2E2E2E', // Dark Gray
      'base-100': '#FFFFE0', // Very Light Yellow
      'base-200': '#FAFAD2', // Lighter Yellow
      'base-300': '#F0E68C', // Soft Golden Yellow
      'base-content': '#2E2E2E', // Dark Gray for text
      info: '#3B82F6', // Blue
      success: '#10B981', // Green
      warning: '#F59E0B', // Orange
      error: '#EF4444', // Red
      fontFamily: 'var(--font-zain)', // Apply Zain font
    },
    dark: {
      ...require('daisyui/src/theming/themes')['dark'],
      primary: '#55aFa2', // Dark Blue
      secondary: '#2ECC71', // Fresh Green
      accent: '#F4D03F', // Light Yellow
      neutral: '#2E2E2E', // Dark Gray
      'base-100': '#000013', // Dark background
      'base-200': '#0f0f16', // Darker background
      'base-300': '#2E2E2E', // Even darker background
      'base-content': '#FAFAD2', // Light Gray for text
      info: '#3B82F6', // Blue
      success: '#10B981', // Green
      warning: '#F59E0B', // Orange
      error: '#EF4444', // Red
      fontFamily: 'var(--font-zain)', // Apply Zain font
    },
  },
],

  },
};

