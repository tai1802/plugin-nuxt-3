export default defineNuxtPlugin((nuxtApp) => {
  const myOtherPlugin = useState<any>("myOtherPlugin", () => "state of myOtherPlugin");
  const myPlugin = useState("myPlugin");
  console.log("on myOtherPlugin: ", myOtherPlugin.value);
  console.log("on myOtherPlugin: ", myPlugin.value);
  return {
    provide: {
      myOtherPlugin: () => {
        return "myOtherPlugin";
      },
    },
  };
});
