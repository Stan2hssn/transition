<template>
  <div :class="general.pageBg">
    <NuxtLayout :name="layout" title="Welcome" :pageName="$route.name"> </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const layout = "custom"
</script>
