export default defineNuxtRouteMiddleware((to: any, from: any) => {
  if (from) {
    from.meta.pageTransition.onLeave = (el: any, done: any) => {
      gsap.to(".transitor", {
        duration: 0.5,
        transform: "translateY(0)",
        onComplete() {
          done()
        },
      })
    }
  }
  if (to) {
    to.meta.pageTransition.onEnter = (el: any, done: any) => {
      general.scrollLenis?.scrollTo(0, { immediate: true })
      gsap.to(".transitor", {
        duration: 0.5,
        transform: "translateY(-100%)",
        onComplete() {
          done()
        },
      })
    }
  }
})
