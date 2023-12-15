import React, { FC, useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';

import PagesTabs from '../UI/PagesTabs/PagesTabs';
import MovieDbService from '../../services/moviedb-service';
import { GenresProvider } from '../Context/GenresContext';
import { RatedMoviesProvider } from '../Context/RatedMoviesContext';

import { Alert } from 'antd';
import { Offline } from 'react-detect-offline';

import { IGenre, IGettedGenres, ICreatedGuestSession, IMovie, IGettedMovies } from '../../types/types';

import './App.scss';

const movieDbService = new MovieDbService();

const App: FC = () => {
  const [genresList, setGenresList] = useState<IGenre[]>([]);
  const [ratedMovies, setRatedMovies] = useState<IMovie[]>([]);
  const [totalResults, setTotalResults] = useState<number>(1);
  const [isRatingClick, setIsRatingClick] = useState<boolean>(false);

  const [getGuestSession] = useFetching(async () => {
    const response: ICreatedGuestSession = await movieDbService.getGuestSession();

    sessionStorage.setItem('guestSessionID', response.guest_session_id);
  });

  const [getRatedMovies] = useFetching(async () => {
    const response: IGettedMovies = await movieDbService.getRatedMovies();

    setRatedMovies(response.results);
    setTotalResults(response.total_results);
  });

  const [getGenres] = useFetching(async () => {
    const response: IGettedGenres = await movieDbService.getGenres();

    setGenresList(response.genres);
  });

  useEffect(() => {
    getGuestSession();
    getGenres();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getRatedMovies();
    // eslint-disable-next-line
  }, [isRatingClick]);

  return (
    <RatedMoviesProvider value={{ ratedMovies, totalResults }}>
      <main className="main">
        <GenresProvider value={genresList}>
          <PagesTabs onRatingClick={() => setIsRatingClick(!isRatingClick)} />
        </GenresProvider>
        <Offline>
          <Alert
            message="Отсутствует подключение к сети. Проверьте подключение и повторите попытку"
            type="error"
            className="main__error-message"
          />
        </Offline>
      </main>
    </RatedMoviesProvider>
  );
};

export default App;
