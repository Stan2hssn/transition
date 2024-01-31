<template>
  <div :class="general.pageBg">
    <NuxtLayout
      :name="layout"
      :title="`project ${$route.params.id}`"
      :pageName="`project-${$route.params.id}`">
      <div class="flex flex-col items-center justify-center w-full h-full gap-16">
        <div v-for="_ in 3" class="flex flex-col gap-8">
          <NuxtImg src="/photo.jpeg" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis animi, sit voluptatem velit
            deleniti ex explicabo dolores, reprehenderit laboriosam sint labore voluptas harum laborum debitis
            delectus quam, quibusdam maxime!
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-between w-full py-8">
        <NuxtLink :to="`/gallery/${+$route.params.id - 1}`">Previous Project</NuxtLink>
        <NuxtLink to="/gallery">Back to gallery</NuxtLink>
        <NuxtLink :to="`/gallery/${+$route.params.id + 1}`">Next Project</NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const layout = "custom"
</script>
