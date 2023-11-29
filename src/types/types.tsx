export interface IMovie {
  id: number;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

export interface IGettedMovies {
  page: number;
  results: IMovie[];
}
