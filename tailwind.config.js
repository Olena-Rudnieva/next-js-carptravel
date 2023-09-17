/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        main: 'url(../public/main/main.jpg)',
        mainDesktop: 'url(../public/main/main-desktop.jpg)',
        aboutMobile: 'url(../public/about/about-mobile.jpg)',
        aboutTablet: 'url(../public/about/about-tablet.jpg)',
        aboutDesktop: 'url(../public/about/about-desktop.jpg)',
        services: 'url(../public/services/services-bg.jpg)',
        careerMobile: 'url(../public/career/career-mobile.jpg)',
        gallery: 'url(../public/gallery/gallery-bg.jpg)',
        contacts: 'url(../public/contacts/contacts-bg.jpg)',
      },
      backgroundColor: {
        menu: 'rgba(1, 10, 5, 0.95)',
      },
    },
  },

  plugins: [],
};
