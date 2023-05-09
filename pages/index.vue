<script setup lang="ts">
const { $notifications } = useNuxtApp();

onMounted(async () => {});

const callAPI = async () => {
  const data = await useQuoteAdvance(2);
  if (data.value) {
    $notifications({
      title: data.value.author,
      contentText: data.value.text,
      timeout: 2000,
      contentClass: "",
      type: "error",
    });
  }
};
</script>

<template>
  <div class="mt-4 ml-4">
    <button @click="callAPI">Call API</button>
  </div>
</template>

<style scoped></style>
