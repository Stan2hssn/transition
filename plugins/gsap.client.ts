import gsap from "gsap"

export default defineNuxtPlugin(async () => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(CustomEase)
  }
})
