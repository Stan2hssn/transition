import { defineNuxtConfig } from "nuxt/config"
import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/css/tailwind.css"],
  pages: true,
  alias: {
    images: resolve(__dirname, "/static/img"),
    media: resolve(__dirname, "/static/media"),
    styles: resolve(__dirname, "/assets/css"),
    gif: resolve(__dirname, "/static/gif"),
    content: resolve(__dirname, "/static/content"),
  },
  imports: {
    dirs: ["utils", "store"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
})