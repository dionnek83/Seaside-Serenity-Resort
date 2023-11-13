/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",'./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

    colors:{
      "primary-300": "#8F6140",
      "primary-200": "#D69D74",
      "primary-400": "#DFA77F",
      "primary-100": "#FFF0E5",
      "gray-100": "#666565",
      "black-200": "#353535",
      
    },
    backgroundImage: (theme) => ({
      "hero": "url('./assets/images/hero-image.png')",
      "booking": "url('./assets/images/booking-image.jpg')",
      "contact": "url('./assets/images/contact-image.jpg')",
      "sale": "url('./assets/images/pool-view-two.jpg')",
      "rooms": "url('./assets/images/rooms-image.jpg')"


    }),
    fontFamily: {
     forum : ['Forum', 'serif'],
       kameron : ['Kameron', 'serif'],
      milt: ['Miltonian Tattoo', 'serif']
    }
    },
    screens: {
      sm: "640px",
      md: "768px",
      md2: "890px",
      lg: "1024px",
      xl: "1280px",
    
    }
  },
  plugins: [],
};
