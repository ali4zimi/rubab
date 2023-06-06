<script setup>
import { ref, onMounted } from 'vue'

import PlayIcon from './icons/PlayIcon.vue'
import ShuffleIcon from './icons/ShuffleIcon.vue'
import PreviousIcon from './icons/PreviousIcon.vue'
import NextIcon from './icons/NextIcon.vue'
import RepeatIcon from './icons/RepeatIcon.vue'
import VolumeController from './VolumeController.vue'

const progressPosition = ref(10);
const progressSlider = ref(null);
const progressSliderFill = ref(null);
const progressSliderThumb = ref(null);

onMounted(() => {
    progressSliderFill.value.style.width = `${progressPosition.value}px`;
    progressSliderThumb.value.style.left = `${progressPosition.value}px`;
})


const updateProgressbar = (e) => {
    const value = e.target.value;
    const sliderWidth = progressSlider.value.offsetWidth;
    const progress = (value / 100) * sliderWidth;
    progressSliderFill.value.style.width = `${progress}px`;
    progressSliderThumb.value.style.left = `${progress}px`;
    progressPosition.value = value;
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
            <div class="relative flex justify-center">
                <!-- <div ref="playbackPosition" class="absolute left-[-20px]">0</div> -->

                <div class="playback-progressbar">
                    <div class="progress-slider-wrapper">
                        <div ref="progressSlider" class="progress-slider">
                            <div ref="progressSliderFill" class="progress-slider-fill"></div>
                        </div>
                        <div ref="progressSliderThumb" class="progress-slider-thumb"></div>
                    </div>
                    <input class="progress-range" type="range" :value="progressPosition" @input="updateProgressbar" />
                </div>

                <!-- <div ref="playbackLength" class="absolute right-[-20px]">100</div> -->


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
    @apply relative w-full h-[20px] flex items-center
}

.progress-slider-wrapper {
    @apply w-full relative px-[8px]
}

.progress-slider {
    @apply w-full h-1 bg-slate-300 rounded-md
}

.progress-slider-fill {
    @apply h-1 bg-slate-50 rounded-md
}


.progress-slider-thumb {
    @apply absolute left-0 w-[15px] aspect-square 
    bg-slate-50 rounded-full opacity-0 transition-opacity duration-300;
    top: 50%;
    transform: translateY(-50%);
}

.progress-range {
    @apply w-full absolute opacity-0;
    top: 50%;
    transform: translateY(-50%);
}

.playback-progressbar:hover .progress-slider-thumb {
    @apply opacity-100
}

.buttons {
    @apply flex justify-center items-center gap-2
}

.other-options {
    @apply w-4/12 flex justify-end
}
</style>
