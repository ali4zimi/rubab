<script setup>
import { ref, onMounted } from 'vue'
import VolumeHigh from './icons/VolumeHigh.vue'
import VolumeMedium from './icons/VolumeMedium.vue'
import VolumeLow from './icons/VolumeLow.vue'
import VolumeMute from './icons/VolumeMute.vue'

const props = defineProps({
    volumeLevel: {
        type: Number,
        default: 0.5
    }
});

const volumeLevel = ref(props.volumeLevel);

// can't use volumeLevel directly I don't know why. However, I initialized a separate variable to store the props value

const localVolume = ref(0);
const lastVolume = ref(0);
const isMuted = ref(false);

const emit = defineEmits(['update:volumeLevel']);

const slider = ref(null);
const sliderFill = ref(null);

const updateVolume = (e) => {
    const value = e.target.value;
    localVolume.value = value;
    sliderFill.value.style.width = `${value * 100}%`;
    emit('update:volumeLevel', value);
    isMuted.value = false;
}

const muteVolume = () => {
    emit('update:volumeLevel', 0);
    sliderFill.value.style.width = 0;
    isMuted.value = true;
}

const unMuteVolume = () => {
    if (localVolume.value == 0) {
        localVolume.value = lastVolume.value;
        sliderFill.value.style.width = `${lastVolume.value * 100}%`;
    }
    emit('update:volumeLevel', localVolume.value);
    isMuted.value = false;
}

onMounted(() => {
    localVolume.value = props.volumeLevel;
    lastVolume.value = props.volumeLevel;
    sliderFill.value.style.width = `${props.volumeLevel * 100}%`;
})

</script>

<template>
    <div class="volume-controller">
        <div class="volume-button">
            <VolumeHigh height="20" width="20" v-if="!isMuted && localVolume > 0.70" @click="muteVolume" />
            <VolumeMedium height="20" width="20" v-else-if="!isMuted && localVolume > 0.3" @click="muteVolume" />
            <VolumeLow height="20" width="20" v-else-if="!isMuted && localVolume > 0" @click="muteVolume" />
            <VolumeMute height="20" width="20" v-if="isMuted || localVolume == 0" @click="unMuteVolume" />
        </div>
        <div ref="volumeLevel" class="volume-level">
            <div class="volume-slider-wrapper">
                <div ref="slider" class="volume-slider">
                    <div ref="sliderFill" class="volume-slider-fill" :style="{ width: `${volumeLevel * 100}%` }"></div>
                </div>
            </div>
            <input class="volume-range" type="range" min="0" max="1" step="0.01" @mousedown="lastVolume = localVolume" @input="updateVolume"
                :value="volumeLevel" />
        </div>
    </div>
</template>

<style scoped>
.volume-controller {
    @apply flex items-center gap-1
}

.volume-button {
    @apply relative
}

.volume-level {
    @apply w-[150px] relative flex items-center h-[15px]
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