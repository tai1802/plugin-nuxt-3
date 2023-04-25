import Notifications from "./_notifications.vue";
import { createApp, h } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  type notificationType = "success" | "error";
  const notificationsState = useNotifications();
  interface Options {
    timeout: number;
    contentClass?: string;
    contentText?: string;
    type?: notificationType;
    title?: string;
  }
  function createComponent(options: Options) {
    let notifications = document.querySelector(".notifications") as HTMLDivElement;
    const notificationItem = document.createElement("div");
    notificationItem.style.width = "400px";
    notificationItem.classList.add("notifications-item");
    notificationItem.setAttribute("data-uuid", `${notificationsState.value.length}`);
    if (notifications) {
      notifications.classList.add("notifications");
      notifications.style.display = "flex";
      notifications.style.flexDirection = "column-reverse";
      notifications.appendChild(notificationItem);
    } else {
      notifications = document.createElement("div");
      notifications.classList.add("notifications");
      document.querySelector("body")?.appendChild(notifications);
      notifications.appendChild(notificationItem);
    }
    nuxtApp.vueApp.component("notifications", Notifications);
    const Component = createApp(nuxtApp.vueApp.component("notifications") || {}, {
      timeout: options.timeout,
      contentClass: options.contentClass,
      contentText: options.contentText,
      title: options.title,
      id: notificationsState.value.length,
      type: options.type,
    });
    Component.mount(notificationItem);
    return Component;
  }
  let defaults = {
    contentText: "hello",
    timeout: 6000,
    contentClass: "",
  };
  const notificationFunc = (value: any) => {
    const idx = value?.detail;
    notificationsState.value[idx]?.unmount();
    document.querySelector(`div[data-uuid="${idx}"]`)?.remove();
  };
  return {
    provide: {
      notifications: (options: Options) => {
        const comp = createComponent(Object.assign({}, { ...defaults }, { ...options }));
        notificationsState.value.push(comp);
        document.addEventListener("notifications", notificationFunc, false);
      },
    },
  };
});
