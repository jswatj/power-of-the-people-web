<script setup lang="ts">
const redirectToSignal = (url: string) => {
  window.location.href = url;
};
</script>

<template>
  <div class="max-w-6xl mx-auto p-6 space-y-4">
    <h2 class="text-2xl font-bold text-gray-900 animate-scale-in">Join Our Signal Channels</h2>
    <ul class="space-y-4">
      <li
          class="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow p-6 dark:bg-gray-800 dark:border-gray-700 transition transform hover:scale-[1.02] cursor-pointer relative animate-scale-in"
          @click="redirectToSignal('https://signal.group/#CjQKIOjRFmdeAoDIyNMiV8-hfI-MuEShdhTGi8QaLu_P6jJvEhBjLu8Rxk4LqEY79s8YeEbs')"
      >
        <div class="flex items-center space-x-4">
          <span class="text-lg font-medium text-gray-900 dark:text-white">General Chat</span>
        </div>
        <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400">
          Click to join
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Add animation keyframes */
@keyframes scale-in {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Add the animation class */
.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}
</style>
