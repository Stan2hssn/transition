<template>
  <header
    class="fixed top-0 left-0 flex items-center justify-center w-full py-8 gap-8 *:uppercase *:font-semibold">
    <NuxtLink v-for="link in links" :to="link.path" class="hover:opacity-55">{{ link.name }}</NuxtLink>
  </header>
</template>
<script lang="ts" setup>
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
]
</script>
