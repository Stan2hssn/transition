<template>
  <div :class="general.pageBg">
    <NuxtLayout :name="layout" title="About" :pageName="$route.name">
      <div class="flex flex-col max-w-full">
        <div v-for="_ in 10" class="flex py-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis laboriosam cupiditate
          ducimus quam ipsam odit eaque, tempora et corporis temporibus voluptas sit quasi officiis
          repudiandae earum, consequatur cumque repellat. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Non libero sapiente atque odit ad adipisci quas, commodi laudantium eveniet, nesciunt illo,
          delectus autem blanditiis harum dolorem voluptatem. Fugit, esse quisquam.
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const layout = "custom"
</script>
