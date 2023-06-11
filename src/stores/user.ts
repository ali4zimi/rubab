import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type Playlist } from './types'


export const useUserStore = defineStore('UserStore', () => {
    const username = 'John Doe'

    const playlists = ref<Playlist[]>([]);
    
    return { username }
});