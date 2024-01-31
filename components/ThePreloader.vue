<template>
  <div
    class="fixed flex items-center justify-center w-screen h-screen inset-0 text-white bg-black z-50 preloader">
    <TheTitle :title="percentage.toString()" />
  </div>
</template>
<script lang="ts" setup>
const percentage = ref<number>(0)

onMounted(() => {
  const tl = gsap.timeline()

  const customEase = CustomEase.create("custom", "M0,0 C0,0.906 0.374,1 1,1 ")

  tl.to(percentage, {
    value: 100,
    duration: 2.5,
    ease: customEase,
    onUpdate: () => {
      percentage.value = Math.round(percentage.value)
    },
    onComplete: () => {
      general.isPreloaderVisible = false
      general.scrollLenis?.start()
    },
  })

  tl.fromTo(
    ".preloader",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      duration: 1,
      ease: "power1.inOut",
    }
  )
})
</script>
