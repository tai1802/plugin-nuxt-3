<script setup lang="ts">
const { $notifications } = useNuxtApp();
const router = useRouter();

const { data } = useAsyncData("quote", () => useFetch("/api/quote/1"));

onMounted(async () => {});

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

  refreshNuxtData("quote");
};

const goToTestPage = () => {
  router.push("/test");
};
</script>

<template>
  <div class="mt-4 ml-4 gap-8">
    <button @click="callAPI" class="mr-4 px-2 py-1">Call API</button>
    <button @click="goToTestPage">go to test page</button>
  </div>
</template>

<style scoped></style>
