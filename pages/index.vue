<script setup lang="ts">
const { $notifications, $time } = useNuxtApp();
const count = ref(1);

const addSuccessNoti = () => {
  $notifications({
    title: "test noti",
    contentText: `hello ${count.value}`,
    timeout: 2000,
    contentClass: "",
    type: "success",
  });
  count.value = count.value + 1;
};
const addErrorNoti = () => {
  $notifications({
    title: "test noti",
    contentText: `hello ${count.value}`,
    timeout: 2000,
    contentClass: "",
    type: "error",
  });
  count.value = count.value + 1;
};
</script>

<template>
  <div>{{ $time() }}</div>
  <div class="mt-4 ml-4">
    <button class="border p-2 mr-4" @click="addSuccessNoti">Add Event Success</button>
    <button class="border p-2 mr-4" @click="addErrorNoti">Add Event Error</button>
  </div>
</template>

<style scoped></style>
