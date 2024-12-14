<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>
