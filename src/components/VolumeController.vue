<script setup>
import VolumeHigh from './icons/VolumeHigh.vue'
import VolumeMedium from './icons/VolumeMedium.vue'
import VolumeLow from './icons/VolumeLow.vue'
import VolumeMute from './icons/VolumeMute.vue'

</script>

<template>
    <div class="volume-controller">
        <div class="volume-button">
            <VolumeHigh height="20" width="20" />
        </div>
        <div class="volume-controller ">
            <div class="volume-slider">
                <div class="volume-slider-fill"></div>
            </div>
            <input type="range" />
        </div>
    </div>
</template>

<style scoped>
.volume-controller {
    @apply flex items-center gap-1
}

.volume-button {

}

.volume-slider {
    @apply flex items-center
}


</style>