<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import SectionShelf from '@/components/SectionShelf.vue';

const router = useRoute();
const route = useRouter();

import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const user = useUserStore();

const slug = router.params.slug;

const playlist = user.playlists[0]


</script>

<template>
    <div class="w-full">
        <header class="bg-slate-200 p-5 flex items-center gap-3 flex-nowrap">
            <div class="w-4/12 aspect-square bg-white flex justify-center items-center">
                <img v-if="playlist.cover" :src="playlist.cover" class="object-cover" />
                <div class="track-art flex items-center justify-center text-red-400" v-html="playlist.icon">
                </div>
            </div>
            <div>
                <div class="text-sm text-gray-400">PLAYLIST</div>
                <h1 class="font-bold text-[8vw] whitespace-nowrap">{{ playlist.name }}</h1>

            </div>
        </header>

        <div class="p-3">
            <SectionShelf :list="playlist.tracks" />
        </div>

    </div>
</template>

<style scoped></style>