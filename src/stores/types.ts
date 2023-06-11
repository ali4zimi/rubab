
interface Track {
    title: string;
    artist: string;
    album: string;
    cover: string;
    path: string;
}

interface Playlist {
    name: string;
    tracks: Track[];
}

export type { Track, Playlist }