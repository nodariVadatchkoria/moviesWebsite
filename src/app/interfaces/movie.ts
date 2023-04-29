export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_language: string;
  original_title: string;
  backdrop_path: string;
  adult: boolean;
  video: boolean;
  genre_ids: number[];

}
