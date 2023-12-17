export interface IMovie {
  id: number;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
  rating?: number;
}

export interface IGettedMovies {
  page: number;
  results: IMovie[];
  total_results: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IGettedGenres {
  genres: IGenre[];
}

export interface IAppContext {
  ratedMovies: IMovie[];
  movieData: IMovie[];
  ratedTotalResults: number;
  searchTotalResults: number;
  isLoading: boolean;
  isLoadingError: boolean;
  currentSearchPage: number;
  changeCurrentPage: (currentPage: number) => void;
  onRatingClick: (id: number, rating: number) => void;
  onChangeSearchInput: (value: string) => void;
}
