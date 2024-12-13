<script setup lang="ts">
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const closeDropdown = () => {
  isDropdownOpen.value = false;
};
</script>

<template>
  <header class="w-full p-6 relative z-10">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold text-gray-800">Power Of The People</div>
        <!-- Navigation -->
        <nav>
          <!-- Navigation for smaller screens -->
          <div class="relative md:hidden">
            <button
                class="bg-gray-800 text-white px-4 py-2 rounded-md"
                @click="isDropdownOpen = !isDropdownOpen">
              Menu
            </button>
            <div
                v-if="isDropdownOpen"
                class="fixed top-16 right-6 bg-white shadow-md rounded-md w-48 z-50 dropdown-menu">
              <router-link
                  to="/"
                  class="block px-4 py-2 text-gray-600 hover:text-gray-800"
                  @click="closeDropdown">
                Home
              </router-link>
              <a
                  href="https://discord.gg/hYZ3Uuxd"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block px-4 py-2 text-gray-600 hover:text-gray-800">
                Discord
              </a>
              <router-link
                  to="/about-us"
                  class="block px-4 py-2 text-gray-600 hover:text-gray-800"
                  @click="closeDropdown">
                About Us
              </router-link>
            </div>
          </div>
          <!-- Navigation for larger screens -->
          <div class="hidden md:flex items-center space-x-6">
            <router-link to="/" class="text-gray-600 hover:text-gray-800">
              Home
            </router-link>
            <a
                href="https://discord.gg/hYZ3Uuxd"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-gray-800">
              Discord
            </a>
            <router-link to="/about-us" class="text-gray-600 hover:text-gray-800">
              About Us
            </router-link>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  z-index: 10;
}
</style>
