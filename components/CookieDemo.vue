<script setup lang="ts">
const counter = useCookie<number>("counter", {
  default: () => Math.round(Math.random() * 1000),
});
</script>

<template>
  <div>
    <h1>Counter: {{ counter || "-" }}</h1>
    <button @click="counter = 0">reset</button>
    <button @click="counter--">-</button>
    <button @click="counter++">+</button>
  </div>
</template>
