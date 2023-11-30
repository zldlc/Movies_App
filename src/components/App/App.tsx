import React, { useEffect, FC, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';

import MovieDbService from '../../services/moviedb-service';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import Spinner from '../UI/Spinner/Spinner';

import { Alert } from 'antd';
import { Offline, Online } from 'react-detect-offline'

import { IMovie, IGettedMovies } from '../../types/types';

import './App.scss';

const movieDbService = new MovieDbService();

const App: FC = () => {
  const [movieData, setMovieData] = useState<IMovie[]>([]);
  const [searchMovies, isMoviesLoading, isLoadingError] = useFetching(async () => {
    const responseData: IGettedMovies = await movieDbService.getMovies();

    setMovieData(responseData.results);
  });

  useEffect(() => {
    searchMovies()
  }, []);

  const endLoading = isLoadingError ? (
    <Alert
      message="При загрузке фильмов произошла ошибка! Попробуйте позже"
      type="error"
      className="main__error-message"
    />
  ) : (
    <MovieCardsList movies={movieData} />
  );

  return (
    <main className="main">
      <Online>
        {isMoviesLoading ? <Spinner /> : endLoading}
      </Online>
      <Offline>
        <Alert
        message="Отсутствует подключение к сети. Проверьте подключение и повторите попытку"
        type="error"
        className="main__error-message"
      />
      </Offline>
    </main>
  )
};

export default App;
