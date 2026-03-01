export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#E8E1DA',
        'task-hover': '#C9ADA7',
        'task-active': '#4A4E69',
      },
      // Add this section
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
