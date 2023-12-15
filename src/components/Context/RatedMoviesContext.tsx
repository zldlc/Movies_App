import React from 'react';
import { IMovie } from '../../types/types';

interface IRatedMoviesContext {
  ratedMovies: IMovie[];
  totalResults: number;
}

const RatedMoviesContext = React.createContext<IRatedMoviesContext>({
  ratedMovies: [],
  totalResults: 1,
});
const { Provider: RatedMoviesProvider } = RatedMoviesContext;

export { RatedMoviesProvider, RatedMoviesContext };
