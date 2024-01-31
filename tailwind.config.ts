import { addComponent } from "nuxt/kit"
import type { Config } from "tailwindcss"
// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: "#4F46E5",
      secondary: "#FFC107",
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    fontSize: {
      h1: ["8vw", { lineHeight: "3.5rem" }],
    },
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ addBase, theme }: { addBase: any; theme: any }) {
      addBase({
        html: {
          "-webkit-font-smoothing": "antialiased",
        },
        hr: {
          "box-sizing": "content-box",
          border: "none",
          margin: "0",
          padding: "0",
        },
      })
    }),
  ],
}
