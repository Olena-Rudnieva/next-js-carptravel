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
        main: 'url(../public/main/main.jpg)',
        mainDesktop: 'url(../public/main/main-desktop.jpg)',
        about: 'url(../public/about/about-bg.jpg)',
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
