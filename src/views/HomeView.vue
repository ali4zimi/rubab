<script setup lang="ts">

import SectionShelf from '@/components/SectionShelf.vue';

// music album with cover, title, artist, and year
const topAlbums = [
  {
    id: 1,
    cover: 'https://picsum.photos/200/300',
    title: 'The Greatest Hits',
    artist: 'Queen',
    year: 1981,
  },
  {
    id: 2,
    cover: 'https://picsum.photos/200/300',
    title: 'The Greatest Hits',
    artist: 'Queen',
    year: 1981,
  },
  {
    id: 3,
    cover: 'https://picsum.photos/200/300',
    title: 'The Greatest Hits',
    artist: 'Queen',
    year: 1981,
  },
  {
    id: 4,
    cover: 'https://picsum.photos/200/300',
    title: 'The Greatest Hits',
    artist: 'Queen',
    year: 1981,
  },
  {
    id: 5,
    cover: 'https://picsum.photos/200/300',
    title: 'The Greatest Hits',
    artist: 'Queen',
    year: 1981,
  },
  {
    id: 6,
    cover: 'https://picsum.photos/200/300',
    title: 'The Greatest Hits',
    artist: 'Queen',
    year: 1981,
  },
  {
    id: 7,
    cover: 'https://picsum.photos/200/300',
    title: 'The Greatest Hits',
    artist: 'Queen',
    year: 1981,
  },
  {
    id: 8,
    cover: 'https://picsum.photos/200/300',
    title: 'The Greatest Hits',
    artist: 'Queen',
    year: 1981,
  }
]

</script>

<template>
  <div class="w-full">

    <SectionShelf :list="topAlbums" />

  </div>
</template>

<style scoped>


</style>