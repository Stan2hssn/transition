<template>
  <div :class="general.pageBg">
    <NuxtLayout :name="layout" title="Gallery" :pageName="$route.name">
      <div class="grid grid-cols-2 gap-8 max-w-full">
        <NuxtLink v-for="(_, id) in 10" class="flex py-12" :to="`/gallery/${id + 1}`">
          <NuxtImg src="/photo.jpeg" />
        </NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const layout = "custom"
</script>
