export default defineEventHandler(async (event: any) => {
  try {
    const res = await $fetch(`https://636322ac66f75177ea3e0792.mockapi.io/quote/${event.context.params.id}`, {
      method: "GET",
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res);
      }, 0);
    });
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
});
