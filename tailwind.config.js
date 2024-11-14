/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      fontFamily: {
        'primary': ["Raleway", "sans-serif", ],
      },
      colors: {
        'primary': '#F95C19',
      },
      backgroundImage: {
        'video_bg': "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url('./assets/video_bg.png')",
     },
    },
  },
  plugins: [],
}
