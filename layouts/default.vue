<template>
  <div id="view">
    <Transitor />
    <ThePreloader />
    <slot />
  </div>
</template>
<script lang="ts" setup>
onMounted(() => {
  useSmoothScroll()
})
</script>
