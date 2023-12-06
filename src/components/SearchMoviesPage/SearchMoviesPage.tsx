import React, { useEffect, FC, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';

import MovieDbService from '../../services/moviedb-service';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import Spinner from '../UI/Spinner/Spinner';
import MoviesPagination from '../UI/MoviesPagination/MoviesPagination';

import { Alert } from 'antd';
import { debounce } from 'lodash';

import { IMovie, IGettedMovies } from '../../types/types';

const movieDbService = new MovieDbService();

const SearchMoviesPage: FC = () => {
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
    window.scrollTo(0, 0);
  };

  const endLoading = isLoadingError ? (
    <Alert
      message="При загрузке фильмов произошла ошибка! Проверьте подключение к VPN и перезагрузите страницу"
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
    <div>
      <MovieSearchForm
        searchMovies={debounce((value) => {
          setSearchMovieValue(value);
          setCurrentPage(1);
        }, 700)}
      />
      {isMoviesLoading ? <Spinner /> : endLoading}
    </div>
  );
};

export default SearchMoviesPage;
