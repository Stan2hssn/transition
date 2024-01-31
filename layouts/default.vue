<template>
  <div id="view">
    <ThePreloader />
    <slot />
  </div>
</template>
<script lang="ts" setup>
onMounted(() => {
  useSmoothScroll()
})
</script>
