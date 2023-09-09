/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        main: 'url(../public/main.png)',
        aboutMobile: 'url(../public/about-mobile.png)',
        offer1: 'url(../public/offer1.png)',
        chooseMobile: 'url(../public/choose-mobile.png)',
        gallery: 'url(../public/gallery-bg.png)',
        contact: 'url(../public/contact.png)',
      },
    },
  },

  plugins: [],
};
