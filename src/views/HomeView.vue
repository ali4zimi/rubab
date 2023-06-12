<script setup lang="ts">
import SectionShelf from '@/components/SectionShelf.vue';
import { useMusicStore } from '@/stores/music';

const music = useMusicStore();
const topTracks = music.tracks;

</script>

<template>
  <div class="w-full p-3">

    <SectionShelf :list="topTracks" />

  </div>
</template>

<style scoped>


</style>