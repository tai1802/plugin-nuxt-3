export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      myPlugin1: (value: any) => {
        return "myPlugin1";
      },
    },
  };
});
