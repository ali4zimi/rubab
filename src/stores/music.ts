import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import tracksFile from './tracks.json'

export const useMusicStore = defineStore('MusicStore', () => {
    const tracks = ref(tracksFile as Track[]);
    const myLibrary = ref<Track[]>([]);

    interface Track {
        title: string;
        artist: string;
        album: string;
        cover: string;
        path: string;
    }

    return { tracks, myLibrary }
})
