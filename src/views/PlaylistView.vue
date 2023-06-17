<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRoute();
const route = useRouter();

import { useUserStore } from '@/stores/user';

const user = useUserStore();

const slug = router.params.slug;

const playlist = user.playlists[0]


</script>

<template>
    <div class="w-full">
        <header class="bg-slate-200 px-5 pt-28 pb-5 flex items-center gap-3 flex-nowrap">
            <div class="w-3/12 aspect-square flex justify-center items-center bg-white shadow-2xl">
                <img v-if="playlist.cover" :src="playlist.cover" class="object-icon" />
                <div class="track-art flex items-center justify-center text-red-400" v-html="playlist.icon">
                </div>
            </div>
            <div class="h-full">
                <div class="text-sm text-gray-400">PLAYLIST</div>
                <h1 class="font-bold text-[8vw] whitespace-nowrap">{{ playlist.name }}</h1>
                <div class="text-sm text-gray-400">{{ playlist.tracks.length }} songs</div>
            </div>
        </header>

        <div class="p-5">
            <div class="flex flex-col">
                <div class="list-head">
                    <div class="t-row bg-slate-200">
                        <div class="col">#</div>
                        <div class="col">Title</div>
                        <div class="col">Album</div>
                        <div class="col">Date added</div>
                        <div class="col">Duration</div>
                    </div>
                </div>
                <div class="">
                    <div class="t-row hover:bg-slate-200" v-for="track in playlist">
                        <div class="">1</div>
                        <div class="">Album </div>
                        <div class="">Artist </div>
                        <div class="">02/22/2022</div>
                        <div class="">0:00</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.list-head {
    /* @apply flex justify-between */
}

.list-body {
    @apply flex flex-col
}

.row {
    /* @apply p-3 flex justify-between hover:bg-slate-200 rounded-md */
}

.col {
    /* @apply flex */
}

.t-row {
    @apply grid p-3 ;
    grid-template-columns: 0.3fr 2fr 1fr 1fr 1fr;
    
}
</style>