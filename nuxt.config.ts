// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [{ src: `~/plugins/othersPlugin/test.client.ts`, mode: "client" }],
  css: ["~/assets/tailwindcss.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
