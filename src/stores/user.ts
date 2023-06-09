import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Playlist, Track } from './types'


export const useUserStore = defineStore('UserStore', () => {
    const username = 'Ali'

    const playlists = ref<Playlist[]>([]);
    
    const defaultplaylist = ref({
        name: 'Liked Songs',
        slug: 'liked-songs',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 512 512"><path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z" fill="currentColor"/></svg>',
        tracks: <Track[]>[]
    })

    playlists.value.push(defaultplaylist.value)



    const createPlaylist = (() => {
        const newPlaylist = ref<Playlist>({
            name: 'New Playlist ' + (playlists.value.length + 1).toString(),
            slug: 'new-playlist-' + (playlists.value.length + 1).toString(),
            icon: '',
            tracks: <Track[]>[]
        });
        
        playlists.value.push(newPlaylist.value)
    })



    const likeSong = ((track: Track) =>{
        defaultplaylist.value.tracks.push(track)
    })

    const unlikeSong = ((track: Track) => {
        const index = defaultplaylist.value.tracks.indexOf(track)
        defaultplaylist.value.tracks.splice(index, 1)
    })




    return { username, playlists, likeSong, unlikeSong, createPlaylist }
});