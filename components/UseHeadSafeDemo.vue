<script setup lang="ts">
// useHeadSafe({
//   script: [{ id: "xss-script", innerHTML: `setTimeout(()=> {document.body.style.backgroundColor = "red";}, 1000)` }],
//   meta: [{ "http-equiv": "refresh", content: "0;javascript:alert(1)" }],
// });
onMounted(() => {
  // useHead({
  //   script: [
  //     {
  //       id: "xss-script",
  //       innerHTML: `document.body.style.backgroundColor = "red"`,
  //     },
  //   ],
  // });
});
</script>

<template>
  <div></div>
</template>
