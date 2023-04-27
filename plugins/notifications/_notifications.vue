<template>
  <div
    class="alert-content notification-animation container"
    :class="`${contentClass} ${type === 'success' ? 'noti-success' : 'noti-error'}`"
  >
    <div class="content">
      <span v-if="title" class="title font-white">{{ title }}</span>
      <span v-html="contentText" class="font-white"></span>
    </div>
    <button class="button-close" @click="onCloseClick">
      <div style="font-size: 24px">+</div>
    </button>
  </div>
</template>

<script lang="ts" setup>
type notificationType = "success" | "error";
interface IPros {
  timeout: number;
  contentClass: string;
  contentText: string;
  type: notificationType;
  title: string;
  id: number;
}

const { title, contentText, contentClass, id, timeout = 6000, type = "success" } = defineProps<IPros>();

const onCloseClick = () => {
  var event = new CustomEvent("notifications", {
    detail: id,
  });
  document.dispatchEvent(event);
};

onMounted(() => {
  setTimeout(() => {
    onCloseClick();
  }, timeout);
});
</script>

<style scoped>
@keyframes transform-left {
  from {
    transform: translateX(8px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes circle-reveal {
  0% {
    opacity: 0;
    clip-path: circle(10px at 100% 50%);
  }
  75% {
    opacity: 1;
  }
  100% {
    clip-path: circle(250px at center);
  }
}
.container {
  display: flex;
  position: relative;
  margin: 0.5rem;
  width: calc(100% - 0.5rem);
}
.noti-success {
  background-color: rgb(0, 128, 0, 0.6);
}
.noti-error {
  background-color: rgb(128, 0, 0, 0.6);
}
.font-white {
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 4px 6px;
  user-select: none;
}
.title {
  font-weight: bold;
  text-transform: capitalize;
  user-select: none;
}
.button-close {
  position: absolute;
  right: 0.5rem;
  rotate: 45deg;
  user-select: none;
  color: white;
}

.notification-animation {
  animation: transform-left 0.5s ease-in-out, circle-reveal 0.3s ease-in-out;
  transition: all;
}

.alert-content img {
  min-width: 40px;
}

.filter-warning-yellow {
  filter: invert(43%) sepia(77%) saturate(322%) hue-rotate(358deg) brightness(101%) contrast(88%);
  margin-right: 10px;
}
</style>
