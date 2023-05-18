<script setup lang="ts">
const { data, pending } = await useFetch("https://636322ac66f75177ea3e0792.mockapi.io/quote/1", {
  lazy: true,
  server: false,
  key: "test",
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found !!!!!!!!!!!!!!" });
}
</script>

<template>
  <div></div>
</template>
