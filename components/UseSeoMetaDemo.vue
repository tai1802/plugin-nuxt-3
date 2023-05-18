<script setup lang="ts">
const title = ref("My title");
useSeoMeta({
  title,
  description: () => `description: ${title.value}`,
});
</script>

<template>
  <input v-model="title" />
</template>
