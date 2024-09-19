import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brandBlack: '#09090b',
      brandBlue900: '#041031',
      brandBlue500: '#102D53',
      brandBlue200: '#C8CBD2',
      brandWts: '#006400',
    },
    boxShadow: {
      shadowMax: '-1px 2px 23px 4px rgba(254, 249, 195, 0.8)',
    },
  },
  plugins: [],
};
export default config;
