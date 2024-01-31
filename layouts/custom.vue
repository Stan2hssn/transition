<template>
  <div id="custom" :class="`${pageName}`">
    <TheHeader />
    <div class="flex flex-col w-full items-center px-8">
      <TheTitle :title="title" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string
    pageName?: string
  }>(),
  {
    title: "default title",
    pageName: "default page name",
  }
)
</script>
