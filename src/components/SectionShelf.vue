<script setup>
defineProps(["list"]);

import PlayIcon from './icons/PlayIcon.vue'
</script>

<template>
    <section class="shelf">
        <div class="shelf-header">
            <h2 class="text-2xl font-semibold">Featured Album</h2>
        </div>
        <div class="shelf-content">
            <div class="shelf-item" v-for="item in list">
                <div class="item-image">
                    <img :src="item.cover" class="w-full h-full rounded-md" />
                    <div class="overlay">
                        <PlayIcon width="60" height="60" />
                    </div>
                </div>

                <div class="item-details">
                    <div class="item-title">
                        {{ item.title  }}
                    </div>
                    <div class="item-description">
                        {{ item.artist }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.shelf {
  @apply mb-5
}

.shelf-header {
  @apply mb-3
}

.shelf-content {
  @apply w-full flex gap-3 overflow-x-scroll
}

.shelf-item {
  @apply w-3/12 p-4 inline-block bg-slate-200 rounded-md cursor-pointer
}

.shelf-item:hover {
  @apply bg-slate-300 transition-colors
}

.item-image {
  @apply relative w-full aspect-square bg-slate-400 rounded-md
}

.overlay {
    @apply absolute bottom-1 right-1 hidden z-10
}

.shelf-item:hover .overlay {
    @apply block
}

.item-details {
  @apply mt-3 flex flex-col gap-1
}

.item-title {
  @apply font-semibold
}

.item-description {
  @apply text-gray-500
}

</style>