<script setup lang="ts">
const { $notifications } = useNuxtApp();
const router = useRouter();

// const { data } = useAsyncData("quote", () => useFetch("/api/quote/1"));

const { data, pending, execute } = useFetch("/api/quote/1", {
  key: "quote",
  server: true,
  immediate: false,
});

onMounted(async () => {
  execute();
});

const callAPI = async () => {
  // const data = await useQuoteAdvance(2);
  // if (data.value) {
  //   $notifications({
  //     title: data.value.author,
  //     contentText: data.value.text,
  //     timeout: 2000,
  //     contentClass: "",
  //     type: "error",
  //   });
  // }

  // clearNuxtData("quote");
  execute();
};

const goToTestPage = () => {
  router.push("/test");
};
</script>

<template>
  <div class="mt-4 ml-4 gap-8">
    <button @click="callAPI" class="mr-4 px-2 py-1">Call API</button>
    <button @click="goToTestPage">go to test page</button>
    <div v-if="pending">pending</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<style scoped></style>
