<template>
  <div class="flex w-full h-[100svh] items-center justify-center text-h1 uppercase">{{ title }}</div>
</template>
<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>
