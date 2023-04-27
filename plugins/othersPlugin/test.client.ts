export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      time: () => {
        console.log("+", new Date().toLocaleString());
      },
    },
  };
});
