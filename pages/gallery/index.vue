<template>
  <div :class="general.pageBg">
    <NuxtLayout :name="layout" title="Gallery" :pageName="$route.name">
      <div class="grid grid-cols-2 gap-8 max-w-full">
        <MyNuxtLink v-for="(_, id) in 10" class="flex py-12" :to="`/gallery/${id + 1}`">
          <NuxtImg src="/photo.jpeg" />
        </MyNuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
definePageMeta(transition)
const layout = "custom"
</script>
