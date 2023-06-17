<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import MusicPlayer from './components/MusicPlayer.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Navbar />
  <MusicPlayer />

  <main>
    <Sidebar />

    <div class="content">
      <RouterView :key="$route.fullPath" />
    </div>
  </main>
</template>

<style scoped>
main {
  @apply fixed top-[80px] bottom-[90px] left-[10px] right-[10px] z-10 flex gap-2;
}
.content {
  @apply w-9/12  bg-slate-100 rounded-md overflow-x-hidden overflow-y-scroll;
}
</style>