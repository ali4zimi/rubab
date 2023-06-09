<script setup lang="ts">
import { ref } from 'vue';

import SectionShelf from '@/components/SectionShelf.vue';

import { useMusicStore } from '@/stores/music.ts';
import { useMusicLibrary } from '@/stores/player.ts';

const music = useMusicStore();
const player = useMusicLibrary();

const topTracks = music.tracks;

</script>

<template>
  <div class="w-full">

    <SectionShelf :list="topTracks" />

  </div>
</template>

<style scoped>


</style>