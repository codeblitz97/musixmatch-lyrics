import {
  AlbumGet,
  AlbumTracksGet,
  ArtistGet,
  ChartArtist,
  ChartTracks,
  GetLyrics,
  SubtitleInt,
  TrackGet,
  TrackInfo,
  TrackSnippet,
} from "../interfaces";
import { MusixmatchBoolean, MusixmatchString } from "./rawDataTypes";

type LyricsReturnType = Promise<GetLyrics | undefined>;
type TrackIDReturnType = Promise<MusixmatchString | undefined>;
type SubtitleReturnType = Promise<SubtitleInt | undefined>;
type TranslationReturnType = Promise<MusixmatchString | undefined>;
type TrackSearchReturnType = Promise<TrackInfo | undefined>;
type HasLyricsReturnType = Promise<MusixmatchBoolean | undefined>;
type TrackGetReturnType = Promise<TrackGet | undefined>;
type ChartArtistReturnType = Promise<ChartArtist | undefined>;
type ChartTracksReturnType = Promise<ChartTracks | undefined>;
type TrackSnippetReturnType = Promise<TrackSnippet | undefined>;
type ArtistGetReturnType = Promise<ArtistGet | undefined>;
type AlbumGetReturnType = Promise<AlbumGet | undefined>;
type AlbumTracksGetReturnType = Promise<AlbumTracksGet | undefined>;

export {
  LyricsReturnType,
  TrackIDReturnType,
  SubtitleReturnType,
  TranslationReturnType,
  TrackSearchReturnType,
  HasLyricsReturnType,
  TrackGetReturnType,
  ChartArtistReturnType,
  ArtistGetReturnType,
  ChartTracksReturnType,
  TrackSnippetReturnType,
  AlbumGetReturnType,
  AlbumTracksGetReturnType,
};
