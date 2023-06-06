<script setup>
defineProps(["width", "height"])
</script>

<template>
    <div class="repeat">
        <svg xmlns="http://www.w3.org/2000/svg" :width="width | 20" :height="height | 20" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 12V9a3 3 0 0 1 3-3h13m-3-3l3 3l-3 3m3 3v3a3 3 0 0 1-3 3H4m3 3l-3-3l3-3" />
        </svg>
    </div>
</template>