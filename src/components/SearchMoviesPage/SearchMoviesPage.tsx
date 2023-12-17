import React, { FC, useContext } from 'react';
import { AppContext } from '../Context/AppContext';

import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import Spinner from '../UI/Spinner/Spinner';
import MoviesPagination from '../UI/MoviesPagination/MoviesPagination';

import { Alert } from 'antd';
import { debounce } from 'lodash';

import { IMovie } from '../../types/types';

const SearchMoviesPage: FC = () => {
  const {
    movieData,
    ratedMovies,
    searchTotalResults,
    isLoading,
    isLoadingError,
    currentSearchPage,
    changeCurrentPage,
    onChangeSearchInput,
  } = useContext(AppContext);

  const endLoading = isLoadingError ? (
    <Alert
      message="При загрузке фильмов произошла ошибка! Проверьте подключение к VPN и перезагрузите страницу"
      type="error"
      className="main__error-message"
    />
  ) : (
    <div className="main__list-wrapper">
      <MovieCardsList
        movies={movieData.map((movie: IMovie) => {
          const ratedMovie = ratedMovies.findIndex((rated) => rated.id === movie.id);
          return ratedMovie < 0 ? movie : ratedMovies[ratedMovie];
        })}
      />
      <MoviesPagination
        totalResults={searchTotalResults}
        currentPage={currentSearchPage}
        changeCurrentPage={(page: number) => changeCurrentPage(page)}
        movieData={movieData}
      />
    </div>
  );

  return (
    <div>
      <MovieSearchForm
        searchMovies={debounce((value: string) => {
          onChangeSearchInput(value);
        }, 700)}
      />
      {isLoading ? <Spinner /> : endLoading}
    </div>
  );
};

export default SearchMoviesPage;
