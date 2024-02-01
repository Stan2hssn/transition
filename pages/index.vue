<template>
  <div :class="['page', general.pageBg]">
    <NuxtLayout :name="layout" title="Welcome" :pageName="$route.name"> </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
definePageMeta(transition)

const layout = "custom"
</script>
