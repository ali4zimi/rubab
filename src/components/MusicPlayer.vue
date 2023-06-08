<script setup>
import { ref, reactive, onMounted } from 'vue'

import PlayIcon from './icons/PlayIcon.vue'
import PauseIcon from './icons/PauseIcon.vue'
import ShuffleIcon from './icons/ShuffleIcon.vue'
import PreviousIcon from './icons/PreviousIcon.vue'
import NextIcon from './icons/NextIcon.vue'
import RepeatIcon from './icons/RepeatIcon.vue'
import VolumeController from './VolumeController.vue'


const progressPosition = ref(0);

// Elements
const progressSlider = ref(null);
const progressSliderFill = ref(null);
const progressSliderThumb = ref(null);



const syncProgressbar = (e) => {
    const value = e.target.value;
    const sliderWidth = progressSlider.value.offsetWidth;
    const progress = (value / 100) * sliderWidth;
    progressSliderFill.value.style.width = `${progress}px`;
    progressSliderThumb.value.style.left = `${progress}px`;

    if (player.dragStarted) return;
    progressPosition.value = value;
}

const updateProgressbar = (e) => {
    const value = e.target.value;
    const sliderWidth = progressSlider.value.offsetWidth;
    const progress = (value / 100)* sliderWidth;
    progressSliderFill.value.style.width = `${progress}px`;
    progressSliderThumb.value.style.left = `${progress}px`;
    progressPosition.value = value;
    audio.value.currentTime = (value / 100) * audio.value.duration;
    player.dragStarted = false;
}

const player = reactive({
    playing: false,
    shuffle: false,
    repeat: false,
    now: {
        title: 'Summertime',
        artist: 'Hottam',
        album: '',
        cover: 'https://picsum.photos/200/200',
        file: '/library/track-1.mp3',
    },
    playbackPosition: '0:00',
    playbackLength: '0:00',
    dragStarted: false,
    volume: 50,
})



const audio = ref(null);



const play = () => {
    if (player.playing) {
        audio.value.pause();
    } else {
        audio.value.play();
    }
    player.playing = !player.playing;
}

onMounted(() => {
    progressSliderFill.value.style.width = `${progressPosition}px`;
    progressSliderThumb.value.style.left = `${progressPosition}px`;

    audio.value = new Audio(player.now.file);
    audio.value.volume = player.volume / 100;
    audio.value.addEventListener('loadedmetadata', () => {
        const { duration } = audio.value;

        let seconds = Math.floor(duration % 60);
        let minutes = Math.floor(duration / 60);
        let hours = Math.floor(duration / 3600);
        player.playbackLength = `${hours > 0 ? `${hours}:` : ''}${minutes}:${seconds}`;
    })
    audio.value.addEventListener('timeupdate', () => {
        if (player.dragStarted) return;
        const { currentTime, duration } = audio.value;
        const progress = (currentTime / duration) * 100;
        progressSliderFill.value.style.width = `${progress}%`;
        progressSliderThumb.value.style.left = `${progress}%`;
        progressPosition.value = progress;
        
        let seconds = Math.floor(currentTime % 60);
        let minutes = Math.floor(currentTime / 60);
        let hours = Math.floor(currentTime / 3600);

        if (seconds < 10) seconds = `0${seconds}`;

        player.playbackPosition =   `${hours > 0 ? `${hours}:` : ''}${minutes}:${seconds}`;


    })
    audio.value.addEventListener('ended', () => {
        player.playing = false;
    })
})
</script>

<template>
    <div class="player">
        <div class="now-playing">
            <div class="w-14 h-14 bg-green-400 rounded-md">
                <img :src="player.now.cover" class="w-full h-full rounded-md" />
            </div>
            <div class="details">
                <div>{{ player.now.title }}</div>
                <div>{{ player.now.album }}</div>
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
                <div class="playpause-button">
                    <PlayIcon width="45" height="45" class="text-green-500" @click="play" v-if="audio && audio.paused" />
                    <PauseIcon width="45" height="45" class="text-green-500" @click="play" v-else  />
                </div>
                <NextIcon width="20" height="20" />
                <RepeatIcon width="20" height="20" />
            </div>
            <div class="relative flex justify-center items-center">
                <div ref="playbackPosition" class="playback-position">{{ player.playbackPosition }}</div>

                <div class="playback-progressbar">
                    <div class="progress-slider-wrapper">
                        <div ref="progressSlider" class="progress-slider">
                            <div ref="progressSliderFill" class="progress-slider-fill"></div>
                            <div ref="progressSliderThumb" class="progress-slider-thumb"></div>
                        </div>
                    </div>
                    <input class="progress-range" type="range" :value="progressPosition" @input="syncProgressbar" @mousedown="player.dragStarted = true" @mouseup="updateProgressbar" />
                </div>

                <div ref="playbackLength" class="playback-length">{{ player.playbackLength }}</div>


            </div>
        </div>
        <div class="other-options">
            <VolumeController :volumeLevel="0.2" @update:volumeLevel="audio.volume = $event" />
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

.buttons {
    @apply flex justify-center items-center gap-2
}

.playback-progressbar {
    @apply relative w-full h-[20px] flex items-center
}

.progress-slider-wrapper {
    @apply w-full relative px-[8px]
}

.progress-slider {
    @apply w-full h-1 relative bg-slate-300 rounded-md
}

.progress-slider-fill {
    @apply w-0 h-1 bg-slate-50 rounded-md
}

tg
.progress-slider-thumb {
    @apply absolute left-0 w-[12px] aspect-square bg-slate-50 rounded-full opacity-0 transition-opacity duration-300;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -6px;
}

.progress-range {
    @apply w-full absolute opacity-0;
    top: 50%;
    transform: translateY(-50%);
}

.playback-progressbar:hover .progress-slider-thumb {
    @apply opacity-100
}

.playback-position,
.playback-length {
    @apply text-gray-600;
    font-size: 12px;
}

.other-options {
    @apply w-4/12 flex justify-end
}
</style>
