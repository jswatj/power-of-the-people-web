<script setup lang="ts">
import {onMounted, ref} from 'vue';

const isDropdownOpen = ref(false);

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

// State for dark mode
const isDarkMode = ref(false);

// Function to toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  // Save the user's preference to localStorage
  localStorage.setItem('darkMode', isDarkMode.value ? 'enabled' : 'disabled');
};

// Check saved settings on mount
onMounted(() => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <header class="w-full p-6 relative z-10">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold text-gray-800">[Power Of The People]</div>
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
              <router-link
                  to="/channels"
                  class="block px-4 py-2 text-gray-600 hover:text-gray-800"
                  @click="closeDropdown">
                Channels
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
            <router-link to="/channels" class="text-gray-600 hover:text-gray-800">
              Channels
            </router-link>
            <input
                type="checkbox"
                id="light-switch"
                class="light-switch sr-only"
                :checked="isDarkMode"
                @change="toggleDarkMode"
            />
            <label class="relative cursor-pointer p-2 flex items-center justify-center" for="light-switch">
              <!-- Sun Icon (Light Mode) -->
              <!-- Sun Icon (Light Mode) -->
              <svg
                  class="sun-icon transition-transform duration-300 scale-100"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5" class="fill-yellow-400" />
                <g class="stroke-yellow-400" stroke-width="2" stroke-linecap="round">
                  <line x1="12" y1="1" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
              </svg>

              <!-- Moon Icon (Dark Mode) -->
              <!--<svg
                  class="moon-icon transition-transform duration-300 scale-0 opacity-0 dark:scale-100 dark:opacity-100"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    class="fill-gray-300"
                    d="M9.5 2.5a8.5 8.5 0 1 0 9.5 12A7.002 7.002 0 0 1 9.5 2.5Z"
                />
              </svg>
              -->
              <span class="sr-only">Switch to light / dark version</span>
            </label>
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
