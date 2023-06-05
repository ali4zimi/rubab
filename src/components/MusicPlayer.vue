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
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z"/></svg>
                </div>
                <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Zm0-2.7q2.4-2.15 3.95-3.688t2.45-2.674q.9-1.138 1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.688T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025q.9 1.137 2.45 2.675T12 18.3Zm0-6.825Z"/></svg>
                </div>
            </div>
        </div>
        <div class="controls">
            <div class="buttons">
                <div class="shuffle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h2.735a4 4 0 0 0 3.43-1.942l3.67-6.116A4 4 0 0 1 16.265 7H21m0 0l-2-2m2 2l-2 2M3 7h2.735a4 4 0 0 1 2.871 1.215M21 17h-4.735a4 4 0 0 1-2.871-1.215M21 17l-2 2m2-2l-2-2"/></svg>
                </div>
                <div class="previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5 18V6h2v12h-2Zm13 0l-9-6l9-6v12Z"/></svg>
                </div>
                <div class="play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>
                </div>
                <div class="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 18V6h2v12h-2Zm-11 0V6l9 6l-9 6Z"/></svg>
                </div>
                <div class="repeat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12V9a3 3 0 0 1 3-3h13m-3-3l3 3l-3 3m3 3v3a3 3 0 0 1-3 3H4m3 3l-3-3l3-3"/></svg>
                </div>
            </div>
            <div class="slider">
                <div>

                </div>
                <input type="range" />
            </div>
        </div>
        <div class="other-options">
            <div class="volume">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                </div>
                <div>
                    <input type="range" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.player {
    @apply w-full min-h-[80px] p-3 fixed left-0 bottom-0 right-0
    bg-gray-400 flex justify-between items-center;
}

.now-playing {
    @apply w-4/12 px-1 flex items-center gap-3
}

.controls {
    @apply w-4/12
}

.slider {
    @apply w-full flex justify-center items-center
}

.slider input[type=range] {
    @apply w-full
}

.buttons {
    @apply flex justify-center items-center gap-2
}

.other-options {
    @apply w-4/12 flex justify-end
}

.volume {
    @apply flex
}
</style>