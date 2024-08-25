
/** @type {import('tailwindcss').Config} */
export default {
  // content: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    // './index.html',
    // './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './app/**/*.jsx',
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'black-colors-white': '#fff',
        'grey-colors-gray3': '#828282',
        'grey-colors-gray4': '#bdbdbd',
        'grey-colors-gray1': '#333',
        'brand-colors-primary': '#021b5e',
        'gray-gray-800': '#2d3748',
        'brand-colors-secondary': '#8ad803',
        'background-color': '#f7f7fa',
        'grey-colors-gray2': '#4f4f4f',
        gray: 'rgba(255, 255, 255, 0.43)',
        'gray-gray-900': '#1a202c',
        'grey-colors-gray5': '#e0e0e0',
      },
      spacing: {},
      fontFamily: {
        'm-semibold': 'Inter',
      },
      borderRadius: {
        '981xl': '1000px',
        '3xs': '10px',
      },
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      '16xl': '35px',
      xs: '12px',
      '2xl':'32px',
      '3xl':'35px',
      '5xl': '24px',
      '26xl': '45px',
      inherit: 'inherit',
    },
    perspective: {
      400: '400px',
    },
  },
  corePlugins: {
    preflight: false,
  },
};

