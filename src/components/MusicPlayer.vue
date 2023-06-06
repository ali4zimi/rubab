<script setup>
import { ref, onMounted } from 'vue'

import PlayIcon from './icons/PlayIcon.vue'
import ShuffleIcon from './icons/ShuffleIcon.vue'
import PreviousIcon from './icons/PreviousIcon.vue'
import NextIcon from './icons/NextIcon.vue'
import RepeatIcon from './icons/RepeatIcon.vue'
import VolumeController from './VolumeController.vue'

// onMounted(() => {
//     const progressBar = document.querySelector('.progressbar');
//     const progressBarFill = document.querySelector('.progressbar-fill');
// })

const progress = ref(0)
const progressBar = ref(null);
const progressBarFill = ref(null);
const playbackPosition = ref(null);
const playbackLength = ref(null);


const updateProgressbar = (e) => {
    const value = e.target.value;
    const progressBarWidth = progressBar.value.offsetWidth;
    const progress = (value / 100) * progressBarWidth;
    progressBarFill.value.style.width = `${progress}px`;
    playbackPosition.value.innerHTML = value;
}



</script>

<template>
    <div class="player">
        <div class="now-playing">
            <div class="w-14 h-14 bg-green-400 rounded-md">
            </div>
            <div class="details">
                <div>Title</div>
                <div>Album</div>
            </div>
            <div>
                <div v-if="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z" />
                    </svg>
                </div>
                <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Zm0-2.7q2.4-2.15 3.95-3.688t2.45-2.674q.9-1.138 1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.688T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025q.9 1.137 2.45 2.675T12 18.3Zm0-6.825Z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="controls">
            <div class="buttons">
                <ShuffleIcon width="20" height="20" />
                <PreviousIcon width="20" height="20" />
                <PlayIcon width="45" height="45" class="text-green-500" />
                <NextIcon width="20" height="20" />
                <RepeatIcon width="20" height="20" />
            </div>
            <div class="playback-progressbar">
                <div ref="playbackPosition" class="absolute left-[-20px]">0</div>
                <div ref="playbackLength" class="absolute right-[-20px]">100</div>

                <div class="progressbar" ref="progressBar">
                    <div class="progressbar-fill" ref="progressBarFill" :style="'width:' + progress + '%'">
                    </div>
                </div>
                <div class="range-wrapper">
                    <input type="range" class="range" :value="progress" @input="updateProgressbar" />
                </div>
            </div>
        </div>
        <div class="other-options">
            <VolumeController />
        </div>
    </div>
</template>

<style scoped>
.player {
    @apply w-full h-[80px] p-3 fixed left-0 bottom-0 right-0 z-30 bg-gray-400 flex justify-between items-center;
}

.now-playing {
    @apply w-4/12 px-1 flex items-center gap-3
}

.controls {
    @apply w-4/12
}

.playback-progressbar {
    @apply relative w-full flex justify-center items-center
}

.progressbar {
    @apply absolute w-full h-1 bg-slate-300 rounded-md
}

.progressbar-fill {
    @apply absolute top-0 left-0 h-1 bg-slate-50  rounded-md
}

.range-wrapper {
    @apply relative w-full min-h-[15px]
}
.range {
    @apply opacity-0 absolute left-[-7px] right-[-7.5px]
}

.buttons {
    @apply flex justify-center items-center gap-2
}

.other-options {
    @apply w-4/12 flex justify-end
}

</style>
