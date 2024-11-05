import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   logo: ['Ubuntu Sans Mono', 'sans-serif'],
      // },
      colors: {
        'theme-light-bg': '#f5f5f5', // whitesmoke
      },
    },
  },
  plugins: [],
};
export default config;
