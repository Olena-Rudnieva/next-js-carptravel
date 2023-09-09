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
        main: 'url(../public/main.png)',
        mainDesktop: 'url(../public/main-desktop.png)',
        aboutMobile: 'url(../public/about-mobile.png)',
        aboutTablet: 'url(../public/about-tablet.png)',
        offer1: 'url(../public/offer1.png)',
        chooseMobile: 'url(../public/choose-mobile.png)',
        gallery: 'url(../public/gallery-bg.png)',
        contact: 'url(../public/contact.png)',
      },
      backgroundColor: {
        menu: 'rgba(1, 10, 5, 0.95)',
      },
    },
  },

  plugins: [],
};
