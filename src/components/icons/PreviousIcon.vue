<script setup>
defineProps(["width", "height"])
</script>

<template>
    <div class="previous">
        <svg xmlns="http://www.w3.org/2000/svg" :width="width | 20" :height="height | 20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5.5 18V6h2v12h-2Zm13 0l-9-6l9-6v12Z" />
        </svg>
    </div>
</template>