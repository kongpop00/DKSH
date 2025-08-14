/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',    // Mobile landscape
      'md': '768px',    // Tablet portrait (iPad)
      'lg': '1024px',   // Tablet landscape (iPad)
      'xl': '1280px',   // Desktop
      '2xl': '1536px',  // Large desktop
      '3xl': '1920px',  // Ultra-wide / 4K monitors
      '4xl': '2560px',  // 4K+ / Pro displays
      // Custom breakpoints
      'mobile': '640px',
      'tablet': '768px',
      'tablet-lg': '1024px',
      'desktop': '1280px',
      'ultrawide': '1920px',
      'pro-display': '2560px',
    },
    extend: {
      fontFamily: {
        'sans': ['Kanit'],
      },
    },
  },
  plugins: [],
};
