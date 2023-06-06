<script setup>
defineProps(["width", "height"])
</script>

<template>
    <div class="next">
        <svg xmlns="http://www.w3.org/2000/svg" :width="width | 20" :height="height | 20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16.5 18V6h2v12h-2Zm-11 0V6l9 6l-9 6Z" />
        </svg>
    </div>
</template>