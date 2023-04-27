export default defineNuxtPlugin((nuxtApp) => {
  const myPlugin = useState<any>("myPlugin", () => "state off myPlugin");
  const myOtherPlugin = useState("myOtherPlugin");
  console.log("on myPlugin: ", myPlugin.value);
  console.log("on myPlugin: ", myOtherPlugin.value);
  return {
    provide: {
      myPlugin: (value: any) => {
        return "myPlugin";
      },
    },
  };
});
