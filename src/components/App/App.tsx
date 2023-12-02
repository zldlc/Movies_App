import React, { useEffect, FC, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';

import MovieDbService from '../../services/moviedb-service';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import Spinner from '../UI/Spinner/Spinner';
import MoviesPagination from '../UI/Pagination/MoviesPagination';

import { Alert } from 'antd';
import { Offline } from 'react-detect-offline';
import { debounce } from 'lodash';

import { IMovie, IGettedMovies } from '../../types/types';

import './App.scss';

const movieDbService = new MovieDbService();

const App: FC = () => {
  const [movieData, setMovieData] = useState<IMovie[]>([]);
  const [searchMovieValue, setSearchMovieValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [searchMovies, isMoviesLoading, isLoadingError] = useFetching(async (signal) => {
    const responseData: IGettedMovies = await movieDbService.getMovies(searchMovieValue, signal, currentPage);

    setMovieData(responseData.results);
    setTotalResults(responseData.total_results);
  });

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const signal: AbortSignal = controller.signal;

    searchMovies(signal);

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, [searchMovieValue, currentPage]);

  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const endLoading = isLoadingError ? (
    <Alert
      message="При загрузке фильмов произошла ошибка! Попробуйте позже"
      type="error"
      className="main__error-message"
    />
  ) : (
    <div className="main__list-wrapper">
      <MovieCardsList movies={movieData} />
      <MoviesPagination
        totalResults={totalResults}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        movieData={movieData}
      />
    </div>
  );

  return (
    <main className="main">
      <MovieSearchForm
        searchMovies={debounce((value) => {
          setSearchMovieValue(value);
          setCurrentPage(1);
        }, 700)}
      />
      {isMoviesLoading ? <Spinner /> : endLoading}

      <Offline>
        <Alert
          message="Отсутствует подключение к сети. Проверьте подключение и повторите попытку"
          type="error"
          className="main__error-message"
        />
      </Offline>
    </main>
  );
};

export default App;

// проверить типизацию, проверить отступы
