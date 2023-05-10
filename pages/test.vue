<script setup lang="ts">
const { data } = await useFetch("/api/quote/1");
// const { data } = useAsyncData("quote", () => useFetch("/api/quote/1"));
</script>

<template>
  <div class="mt-4 ml-4">
    <div>Test page</div>
  </div>
</template>

<style scoped></style>
