<script setup lang="ts">
const router = useRouter();
</script>
<template>
  <div class="flex gap-4">
    <button @click="() => router.back()">back</button>
    <button @click="() => router.forward()">forward</button>
    <button @click="() => router.go(1)">go</button>
    <button @click="() => router.push({ path: '/home' })">push</button>
    <button @click="() => router.replace({ hash: '#bio' })">replace</button>
  </div>
</template>
