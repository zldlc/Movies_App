import { IMovie } from '../types/types';

export const calculatePagination = (moviesPerPage: number, moviesList: IMovie[], newPage: number) => {
  const startIndex = (newPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = moviesList.slice(startIndex, endIndex);

  return currentMovies;
};
