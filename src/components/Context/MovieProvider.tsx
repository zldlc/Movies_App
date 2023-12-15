import React from 'react';

import { IMovie } from '../../types/types';

const MovieContext = React.createContext<IMovie>({
  id: 0,
  original_title: '',
  overview: '',
  release_date: '',
  poster_path: '',
  vote_average: 0,
  genre_ids: [],
});

const { Provider: MovieProvider } = MovieContext;

export { MovieProvider, MovieContext };
