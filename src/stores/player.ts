import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import tracksFile from './tracks.json'


export const useMusicLibrary = defineStore('MusicLibrary', () => {
  const tracks = ref(tracksFile as Track[]);
  const myLibrary = ref<Track[]>([]);

  const currentTrack = ref(tracks.value[0]);

  const volume = ref(0.5);
  const playing = ref(false);
  const shuffle = ref(false);
  const repeat = ref(false);

  const playbackPosition = ref(0);
  const playbackLength = ref(0);


  function playTrack(track: Track) {
    currentTrack.value = track;
    playing.value = true;
  }


  interface Track {
    title: string;
    artist: string;
    album: string;
    cover: string;
    path: string;
  }

  return { tracks, myLibrary, currentTrack, volume, playing, shuffle, repeat, playbackPosition, playbackLength, playTrack }
})
