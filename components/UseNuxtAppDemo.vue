<script setup lang="ts">
const nuxtApp = useNuxtApp();
nuxtApp.provide("hello", (name: string) => `Hello ${name}!`);

onMounted(() => {
  //  Prints "Hello name!"
  // console.log(nuxtApp.$hello("name"));
  nuxtApp.$notifications({ timeout: 4000, title: "test" });
});
</script>

<template>
  <div></div>
</template>
