import React, { FC, useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import { GenresProvider } from '../Context/GenresContext';
import { AppProvider } from '../Context/AppContext';

import PagesTabs from '../UI/PagesTabs/PagesTabs';
import MovieDbService from '../../services/moviedb-service';

import { Alert } from 'antd';
import { Offline } from 'react-detect-offline';

import { IGenre, IGettedGenres, IMovie, IGettedMovies } from '../../types/types';

import './App.scss';

const movieDbService = new MovieDbService();

const App: FC = () => {
  const [movieData, setMovieData] = useState<IMovie[]>([]);
  const [searchMovieValue, setSearchMovieValue] = useState<string>('');
  const [searchTotalResults, setSearchTotalResults] = useState<number>(0);
  const [currentSearchPage, setCurrentSearchPage] = useState<number>(1);
  const [ratedMovies, setRatedMovies] = useState<IMovie[]>([]);
  const [ratedTotalResults, setRatedTotalResults] = useState<number>(1);
  const [genresList, setGenresList] = useState<IGenre[]>([]);
  const [searchMovies, isLoading, isLoadingError] = useFetching(async (signal) => {
    const responseData: IGettedMovies = await movieDbService.getMovies(searchMovieValue, signal, currentSearchPage);

    setMovieData(responseData.results);
    setSearchTotalResults(responseData.total_results);
  });

  const [getGenres] = useFetching(async () => {
    const response: IGettedGenres = await movieDbService.getGenres();

    setGenresList(response.genres);
  });

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const signal: AbortSignal = controller.signal;

    searchMovies(signal);

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, [searchMovieValue, currentSearchPage]);

  useEffect(() => {
    getGenres();
    setRatedMovies(JSON.parse(localStorage.getItem('ratedMovies') || '[]'));
    setRatedTotalResults(JSON.parse(localStorage.getItem('ratedMovies') || '[]').length);
    // eslint-disable-next-line
  }, []);

  const changeCurrentPage = (currentPage: number): void => {
    setCurrentSearchPage(currentPage);
    window.scrollTo(0, 0);
  };

  const onRatingClick = (id: number, rating: number): void => {
    const copyArr = structuredClone(movieData);
    const index = copyArr.findIndex((movie: IMovie) => movie.id === id);

    const currentRatedMovies: IMovie[] = JSON.parse(localStorage.getItem('ratedMovies') || '[]');

    const isCurrentRatedMovies = currentRatedMovies.findIndex((movie: IMovie) => movie.id === id);

    if (isCurrentRatedMovies === -1) {
      currentRatedMovies.push({ ...copyArr[index], rating });
      setRatedTotalResults(currentRatedMovies.length);
    } else {
      currentRatedMovies[isCurrentRatedMovies] = { ...currentRatedMovies[isCurrentRatedMovies], rating };
    }

    localStorage.setItem('ratedMovies', JSON.stringify(currentRatedMovies));
    setRatedMovies(JSON.parse(localStorage.getItem('ratedMovies') || '[]'));
  };

  const onChangeSearchInput = (value: string) => {
    setSearchMovieValue(value);
    setCurrentSearchPage(1);
  };

  const appContextValue = {
    movieData,
    ratedMovies,
    ratedTotalResults,
    searchTotalResults,
    isLoading,
    isLoadingError,
    currentSearchPage,
    changeCurrentPage,
    onRatingClick,
    onChangeSearchInput,
  };

  return (
    <AppProvider value={appContextValue}>
      <main className="main">
        <GenresProvider value={genresList}>
          <PagesTabs />
        </GenresProvider>
        <Offline>
          <Alert
            message="Отсутствует подключение к сети. Проверьте подключение и повторите попытку"
            type="error"
            className="main__error-message"
          />
        </Offline>
      </main>
    </AppProvider>
  );
};

export default App;
