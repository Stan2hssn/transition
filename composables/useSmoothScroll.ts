import Lenis from "@studio-freight/lenis"

export const useSmoothScroll = () => {
  general.scrollLenis = new Lenis({
    duration: 1,
  })

  gsap.ticker.add((time) => {
    if (general.scrollLenis) {
      general.scrollLenis.raf(time * 1000)
    }
  })

  gsap.ticker.lagSmoothing(0)

  general.scrollLenis.stop()
  general.scrollLenis.scrollTo(0)
}
