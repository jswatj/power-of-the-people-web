<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow grid place-items-center">
      <router-view />
    </main>
  </div>
</template>
