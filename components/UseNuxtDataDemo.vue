<script setup lang="ts">
const { data, pending, refresh } = await useFetch("/api/quote/1", {
  server: false,
  key: "quote",
});
const { data: quote } = useNuxtData("quote");
console.log(quote);

watch(
  () => quote.value,
  (value) => {
    console.log(quote);
  },
  { deep: true }
);
</script>

<template>
  <div>
    <button
      @click="
        () => {
          clearNuxtData(`quote`);
          refresh();
        }
      "
    >
      clearNuxtData
    </button>
  </div>
</template>
