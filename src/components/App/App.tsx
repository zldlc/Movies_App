import React, { useEffect, FC, useState } from 'react';
import MovieDbService from '../../services/moviedb-service';

import { IMovie } from '../../types/types';
import MovieCardsList from '../MovieCardsList/MovieCardsList';

import './App.scss';

const movieDbService = new MovieDbService();

const App: FC = () => {
  const [movieData, setMovieData] = useState<IMovie[]>([]);

  useEffect(() => {
    searchMovies();
  }, []);

  async function searchMovies(): Promise<void> {
    try {
      let responseData = await movieDbService.getMovies();

      setMovieData(responseData.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main className="main">
      <MovieCardsList movies={movieData} />
    </main>
  );
};

export default App;
