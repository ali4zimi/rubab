import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Playlist, Track } from './types'


export const useUserStore = defineStore('UserStore', () => {
    const username = 'Ali'

    const playlists = ref<Playlist[]>([]);
    
    const defaultplaylist = ref({
        name: 'Liked Songs',
        slug: 'liked-songs',
        tracks: <Track[]>[]
    })

    playlists.value.push(defaultplaylist.value)


    const likeSong = ((track: Track) =>{
        defaultplaylist.value.tracks.push(track)
    })

    const unlikeSong = ((track: Track) => {
        const index = defaultplaylist.value.tracks.indexOf(track)
        defaultplaylist.value.tracks.splice(index, 1)
    })




    return { username, playlists, likeSong, unlikeSong }
});