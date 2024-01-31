<template>
  <NuxtLink :to="to" :class="class" @click="() => general.scrollLenis?.scrollTo(0, { immediate: true })">
    <slot />
  </NuxtLink>
</template>
<script lang="ts" setup>
import { defineProps } from "vue"
defineProps<{
  to?: string
  class?: string
}>()
</script>
