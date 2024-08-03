import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-gray-50': '#C4C4C4',
        'custom-gray-100': '#F6F6F6',
        'custom-gray-200': '#D4D4D4',
        'custom-gray-300': '#737373',
        'custom-gray-400': '#333333',
        'custom-gray-600': '#8F99A6',
        primary: '#F3A126',
        secondary: '#21AE1E',
      },
    },
  },

  plugins: [],
}
export default config
