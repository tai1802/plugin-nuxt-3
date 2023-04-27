export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      myPlugin2: () => {
        return "myPlugin2";
      },
    },
  };
});
