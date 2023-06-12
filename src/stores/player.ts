import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Track } from './types'
import tracksFile from './tracks.json'


export const useMusicPlayer = defineStore('MusicPlayer', () => {
  const tracks = ref(tracksFile as Track[]);
  const currentTrack = ref(tracks.value[0]);
  

  const volume = ref(0.5);
  const playing = ref(false);
  const shuffle = ref(false);
  const repeat = ref(false);

  const playbackPosition = ref(0);
  const playbackLength = ref(0);

  const audio = new Audio();

  audio.addEventListener('timeupdate', () => {
  });


  function playTrack(track: Track) {
    currentTrack.value = track;
    playing.value = true;
  }

  return { 
    tracks, 
    currentTrack, 
    volume, 
    playing, 
    shuffle, 
    repeat, 
    playbackPosition, 
    playbackLength, 
    playTrack 
  }
})
