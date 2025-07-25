/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // if using /app directory (App Router)
    "./pages/**/*.{js,ts,jsx,tsx}",     // if using /pages directory (Pages Router)
    "./components/**/*.{js,ts,jsx,tsx}",// any component folders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

