<script setup lang="ts">
// Get underlying request event
const event = useRequestEvent();
// Get the URL
const url = event?.node.req.url;
console.log(url);
</script>

<template>
  <div></div>
</template>
