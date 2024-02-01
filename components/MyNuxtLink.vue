<template>
  <NuxtLink :to="to" :class="class">
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
