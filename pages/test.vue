<script setup lang="ts">
const router = useRouter();

const { data, pending } = await useFetch("/api/quote/1", { lazy: true, server: false });
// const { data } = useAsyncData("quote", () => useFetch("/api/quote/1"));

const goToTestPage = () => {
  clearNuxtData("quote");
  router.push("/");
};

// onMounted(async () => {
//   await nextTick();
// });

watch(
  () => data,
  () => {
    console.log(data);
  },
  { deep: true }
);
</script>

<template>
  <div class="mt-4 ml-4">
    <div>Test page</div>
    <button @click="goToTestPage">Back To Home</button>
    <div v-if="pending">pending</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<style scoped></style>
