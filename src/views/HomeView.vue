<script setup lang="ts">
import { ref } from 'vue';

import SectionShelf from '@/components/SectionShelf.vue';

import { useMusicStore } from '@/stores/music';
import { useMusicLibrary } from '@/stores/player';

const music = useMusicStore();

const topTracks = music.tracks;

</script>

<template>
  <div class="w-full">

    <SectionShelf :list="topTracks" />

  </div>
</template>

<style scoped>


</style>