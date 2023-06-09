<script setup>

const list = [
    { }
]

</script>

<template>
    <div class="sidebar">
        <h1 class="font-semibold">My Library</h1>

        <div class="my-list">
            <div class="list-item" v-for="i in 3">
                <div class="track-art"></div>
                <div class="track-detail">
                    <div>Title {{ i }}</div>
                    <div>Album</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
  @apply relative w-3/12 h-full p-3 bg-slate-100 rounded-md overflow-hidden
}

.my-list {
    @apply absolute bottom-0 top-10 left-0 right-0 mt-5 px-2 flex flex-col gap-0 overflow-y-scroll;
    overflow: overlay;
}

.list-item {
    @apply list-none w-full p-2 flex items-center gap-2 rounded-md cursor-pointer
}

.list-item:hover {
    @apply bg-slate-200
}

.track-art {
    @apply w-12 h-12 bg-green-400 rounded-md
}

.track-details {
    @apply flex
}
</style>