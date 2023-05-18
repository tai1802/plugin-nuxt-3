<script setup lang="ts">
const route = useRoute();
// slug = aconcagua
const { data: mountain }: any = await useFetch(`https://api.nuxtjs.dev/mountains/${route.query.slug}`, {
  server: false,
});
console.log(route.params);
</script>
<template>
  <div>
    <h1>{{ mountain?.title }}</h1>
    <p>{{ mountain?.description }}</p>
  </div>
</template>
