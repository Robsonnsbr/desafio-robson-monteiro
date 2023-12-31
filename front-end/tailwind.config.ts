import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      backgroundColor: {
        customYellow: '#E9FF1A',
        customBlue: '#05A2C2',
        customBrown: '#C26719',
        customPink: '#CC4090',
        customPurple: '#9B19C2',
        customBlack: '#0F0F0F'
      }
    }
  },
  plugins: []
};
export default config;
