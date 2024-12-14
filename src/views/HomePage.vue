<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToDiscord = () => {
  window.open("https://discord.gg/hYZ3Uuxd", "_blank", "noopener noreferrer");
};

const navigateToAboutUs = () => {
  router.push("/about-us");
};
</script>

<template>
  <div class="flex-grow grid place-items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl pt-6">
      <!-- Text Section -->
      <div class="p-6 animate-fade-in">
        <h1 class="text-[3.0rem] sm:text-[3.0rem] md:text-[3.5rem] lg:text-[5.0rem] font-bold text-gray-900 mb-4 leading-tight">
          The price of living is not your life
        </h1>
        <p class="text-[1.125rem] text-gray-600 mb-6">
          Join us in making a difference.
        </p>
        <div class="flex space-x-4">
          <button
              @click="redirectToDiscord"
              class="bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition animate-fade-in transform hover:scale-105 hover:rotate-2"
          >
            Join
          </button>
          <button
              @click="navigateToAboutUs"
              class="border border-gray-900 text-gray-900 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-900 hover:text-white transition animate-fade-in transform hover:scale-105 hover:rotate-2"
          >
            About Us
          </button>
        </div>
      </div>
      <!-- Image Section -->
      <div class="image-container animate-fade-in">
        <img src="../assets/frontpage_image.jpg" alt="Descriptive Alt Text" class="filter invert" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
