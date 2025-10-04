interface User {
  user_id: number;
  name: string;
  email: string;
  password: string;
  registration_date: Date;

  subscription?: Subscription;
  playlists?: Playlist[];
}

interface Subscription {
  subscription_id: number;
  type: string;
  price: number;
  start_date: Date;
  end_date: Date;
  user_id: number;

  user?: User;
}

interface Playlist {
  playlist_id: number;
  title: string;
  created_at: Date;
  user_id: number;

  user?: User;
  playlistTracks?: PlaylistTrack[];
}

interface PlaylistTrack {
  playlistTrack_id: number;
  playlist_id: number;
  track_id: number;

  playlist?: Playlist;
  track?: Track;
}

interface Track {
  track_id: number;
  title: string;
  duration: number;
  release_date: Date;
  album_id: number;

  playlistTracks?: PlaylistTrack[];
  trackArtists?: TrackArtist[];
  album?: Album;
}

interface TrackArtist {
  trackArtist_id: number;
  track_id: number;
  artist_id: number;

  track?: Track;
  artist?: Artist;
}

interface Artist {
  artist_id: number;
  stage_name: string;
  country: string;
  genre: string;

  trackArtists?: TrackArtist[];
  albumArtists?: AlbumArtist[];
}

interface Album {
  album_id: number;
  title: string;
  release_year: number;

  tracks?: Track[];
  albumArtists?: AlbumArtist[];
}

interface AlbumArtist {
  albumArtist_id: number;
  album_id: number;
  artist_id: number;

  artist?: Artist;
  album?: Album;
}
