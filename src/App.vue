<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import MusicPlayer from './components/MusicPlayer.vue'
</script>

<template>
  <main>
    <Navbar />
    <MusicPlayer />
  </main>
</template>
