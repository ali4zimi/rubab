<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useMusicPlayer } from '@/stores/player';

const route = useRoute();
const player = useMusicPlayer();

const user = useUserStore();
const slug = route.params.slug;
const playlist = ref(user.playlists.find((playlist) => playlist.slug === slug));


import TrackContextMenu from '@/components/TrackContextMenu.vue';

const showMore = (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('.track-options');
    console.log(target);
    if (!target) return;
}
</script>

<template>
    <div class="w-full">
        <header class="bg-slate-200 px-5 pt-28 pb-5 flex items-center gap-3 flex-nowrap">
            <div class="w-3/12 aspect-square flex justify-center items-center bg-white shadow-2xl">
                <img v-if="playlist?.thumbnail" :src="playlist.thumbnail" class="object-icon" />
                <div class="track-art flex items-center justify-center text-red-400" v-html="playlist?.icon">
                </div>
            </div>
            <div class="h-full">
                <div class="text-sm text-gray-400">PLAYLIST</div>
                <h1 class="font-bold text-[8vw] whitespace-nowrap">{{ playlist?.name }}</h1>
                <div class="text-sm text-gray-400">{{ playlist?.tracks.length }} songs</div>
            </div>
        </header>

        <div class="p-5">
            <div class="flex flex-col">
                <div class="list-head">
                    <div class="row ">
                        <div class="col">#</div>
                        <div class="col">Title</div>
                        <div class="col">Album</div>
                        <div class="col">Date added</div>
                        <div class="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z" />
                                <path fill="currentColor" d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z" />
                            </svg>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
                <div class="list-body">
                    <div class="row" v-for="track, index in playlist?.tracks" @dblclick="player.playTrack(track)">
                        <div class="col">
                            <div>
                                <div class="track-number">{{ index + 1 }}</div>
                                <div class="track-play ml-[-3px]" @click="player.playTrack(track)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8 19V5l11 7l-11 7Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="flex gap-2">
                                <div class="w-10 h-10 bg-green-400 rounded-md">
                                    <img :src="track.cover" class="w-full h-full rounded-md" />
                                </div>
                                <div>
                                    <div class="text-sm">{{ track.title }}</div>
                                    <div class="text-sm">{{ track.artist }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-sm" v-if="track.album">{{ track.album }}</div>
                            <div class="text-sm" v-else>Unknown</div>
                        </div>
                        <div class="col">
                            <div class="text-sm">Today</div>
                        </div>
                        <div class="col col-duration">
                            <div>
                                <div class="like-icon text-red-400" v-if="playlist?.tracks.includes(track)"
                                    @click="user.unlikeSong(track)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z" />
                                    </svg>
                                </div>
                                <div class="unlike-icon" v-else @click="user.likeSong(track)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Zm0-2.7q2.4-2.15 3.95-3.688t2.45-2.674q.9-1.138 1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.688T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025q.9 1.137 2.45 2.675T12 18.3Zm0-6.825Z" />
                                    </svg>
                                </div>
                            </div>
                            <div>02:25</div>
                        </div>
                        <div class="col">
                            <div class="track-options" @click="showMore">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                    <path fill="currentColor"
                                        d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <TrackContextMenu /> -->
</template>

<style scoped>
.list-head {
    @apply border-b
}

.list-body {
    @apply flex flex-col
}

.row {
    @apply px-4 py-2 rounded-md items-center;
    display: grid;
    grid-template-columns: 0.2fr 2.8fr 1.8fr 1fr 1fr 0.2fr;

}

.row>*:nth-last-child(-n+2) {
    @apply flex justify-end
}

.track-play {
    @apply hidden cursor-pointer
}

.col-duration {
    @apply flex justify-between gap-5
}

.track-options {
    @apply hidden
}


.list-body .row:hover {
    @apply bg-slate-200
}

.row:hover .track-play {
    @apply block
}

.row:hover .track-number {
    @apply hidden
}

.row:hover .track-options {
    @apply block
}
</style>