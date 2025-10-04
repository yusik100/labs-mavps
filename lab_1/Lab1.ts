interface User {
  user_id: string;
  name: string;
  email: string;
  password: string;
  registration_date: Date;

  subscription?: Subscription;
  playlists?: Playlist[];
}

interface Subscription {
  subscription_id: string;
  type: string;
  price: number;
  start_date: Date;
  end_date: Date;
  user_id: string;

  user?: User;
}

interface Playlist {
  playlist_id: string;
  title: string;
  created_at: Date;
  user_id: string;

  user?: User;
  playlistTracks?: PlaylistTrack[];
}

interface PlaylistTrack {
  playlistTrack_id: string;
  playlist_id: string;
  track_id: string;

  playlist?: Playlist;
  track?: Track;
}

interface Track {
  track_id: string;
  title: string;
  duration: number;
  release_date: Date;
  album_id: string;

  playlistTracks?: PlaylistTrack[];
  trackArtists?: TrackArtist[];
  album?: Album;
}

interface TrackArtist {
  trackArtist_id: string;
  track_id: string;
  artist_id: string;

  track?: Track;
  artist?: Artist;
}

interface Artist {
  artist_id: string;
  stage_name: string;
  country: string;
  genre: string;

  trackArtists?: TrackArtist[];
  albumArtists?: AlbumArtist[];
}

interface Album {
  album_id: string;
  title: string;
  release_year: number;

  tracks?: Track[];
  albumArtists?: AlbumArtist[];
}

interface AlbumArtist {
  albumArtist_id: string;
  album_id: string;
  artist_id: string;

  artist?: Artist;
  album?: Album;
}
