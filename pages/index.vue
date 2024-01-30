<template>
  <NuxtLayout :name="layout">
    <WelcomeCustomComponent />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const layout = "custom"
</script>
