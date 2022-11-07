module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            'animation-timing-function': "cubic-bezier(0.9,0,1,1)"
          },
          "50%": {
            transform: "translateY(0)",
            'animation-timing-function': "cubic-bezier(0, 0, 0.5, 1)"
          },
        },
        wiggle2: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            'animation-timing-function': "cubic-bezier(1,0,1,1)"
          },
          "50%": {
            transform: "translateY(0)",
            'animation-timing-function': "cubic-bezier(0, 0, 0.7, 1)"
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s infinite",
      },
      fontFamily: {
        rubik: ['RUBIK', 'cursive'],
        poppins: ['POPPINS', 'sans-serif']
      },
    },
  },
  plugins: [],
}