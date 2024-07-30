import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        alt: 'var(--NanumBrush)',
      },

      screens: {
        sm: '300px',

        md: '769px',

        lg: '990px',

        xl: '1280px',
      },

      colors: {
        'black-wlight': '#000000',
        'gradient-h-gray': "#0b0a0aa6",
        'gradient-l-gray': '#100e0e00',
        'light-gray': '#D4D4D4',
        'text-gray': '#BABABA',
        'dark-gray': '#121212',
      },
    },
  },
  plugins: [],
}
export default config
