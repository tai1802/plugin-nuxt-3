<script setup lang="ts">
// Get only cookie request header
const headers = useRequestHeaders(["cookie"]);
console.log(headers);
</script>

<template>
  <div></div>
</template>
