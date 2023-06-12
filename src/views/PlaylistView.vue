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
        <header class="bg-slate-200">
            <h1 class="font-semibold text-2xl">{{ playlist.name }}</h1>
        </header>

        <div>
            <SectionShelf :list="playlist.tracks" />
        </div>

    </div>
</template>

<style scoped></style>