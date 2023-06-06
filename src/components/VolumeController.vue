<script setup>
import { ref } from 'vue'
import VolumeHigh from './icons/VolumeHigh.vue'
import VolumeMedium from './icons/VolumeMedium.vue'
import VolumeLow from './icons/VolumeLow.vue'
import VolumeMute from './icons/VolumeMute.vue'

const volumeLevel = ref(100);
const slider = ref(null);
const sliderFill = ref(null);

const updateVolume = (e) => {
    const value = e.target.value;
    const sliderWidth = slider.value.offsetWidth;
    const progress = (value / 100) * sliderWidth;
    sliderFill.value.style.width = `${progress}px`;
    
}

</script>

<template>
    <div class="volume-controller">
        <div class="volume-button">
            <VolumeHigh height="20" width="20" />
        </div>
        <div ref="volumeLevel" class="volume-level">
            <div class="volume-slider-wrapper">
                <div ref="slider" class="volume-slider">
                    <div ref="sliderFill" class="volume-slider-fill"></div>
                </div>
            </div>
            <input class="volume-range" type="range" @input="updateVolume" />
        </div>
    </div>
</template>

<style scoped>
.volume-controller {
    @apply flex items-center gap-1
}

.volume-button {

}

.volume-level {
    @apply  w-[150px] relative flex items-center h-[15px]
}

.volume-slider-wrapper {
    @apply w-full relative px-[8px]
}
.volume-slider {
    @apply w-full h-1 bg-slate-300 rounded-md
}

.volume-slider-fill {
    @apply h-1 bg-slate-50 rounded-md
}

.volume-range {
    @apply w-full absolute top-0 opacity-0
}

</style>