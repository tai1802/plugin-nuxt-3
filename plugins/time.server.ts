export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      time: () => {
        return new Date().toLocaleString();
      },
    },
  };
});
