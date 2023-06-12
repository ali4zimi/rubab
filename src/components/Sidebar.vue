<script setup>

import { useUserStore } from '@/stores/user';

const user = useUserStore();



</script>

<template>
    <div class="sidebar">
        <h1 class="font-semibold">My Library</h1>

        <div class="my-list">
            <router-link :to="`/playlist/${playlist.slug}`" class="list-item" v-for="playlist in user.playlists" :key="playlist.id">
                
                <div class="track-art flex items-center justify-center text-red-400" v-html="playlist.icon">
                </div>
                <div class="track-detail">
                    <div>{{ playlist.name }}</div>
                    <div>{{ playlist.tracks.length }}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
  @apply relative w-3/12 h-full p-3 bg-slate-100 rounded-md overflow-hidden
}

.my-list {
    @apply absolute bottom-0 top-10 left-0 right-0 mt-5 px-2 flex flex-col gap-0 overflow-y-scroll;
    overflow: overlay;
}

.list-item {
    @apply list-none w-full p-2 flex items-center gap-2 rounded-md cursor-pointer
}

.list-item:hover {
    @apply bg-slate-200
}

.track-art {
    @apply w-12 h-12 bg-white rounded-md
}

.track-details {
    @apply flex
}
</style>