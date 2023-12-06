import React, { FC, useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';

import PagesTabs from '../UI/PagesTabs/PagesTabs';
import MovieDbService from '../../services/moviedb-service';
import { GenresProvider } from '../GenresContext/GenresContext';

import { Alert } from 'antd';
import { Offline } from 'react-detect-offline';

import { IGenre, IGettedGenres } from '../../types/types';

import './App.scss';

const movieDbService = new MovieDbService();

const App: FC = () => {
  const [genresList, setGenresList] = useState<IGenre[]>([]);

  const [getGenres] = useFetching(async () => {
    const response: IGettedGenres = await movieDbService.getGenres();

    setGenresList(response.genres);
  });

  useEffect(() => {
    getGenres();
    // eslint-disable-next-line
  }, []);

  return (
    <GenresProvider value={genresList}>
      <main className="main">
        <PagesTabs />
        <Offline>
          <Alert
            message="Отсутствует подключение к сети. Проверьте подключение и повторите попытку"
            type="error"
            className="main__error-message"
          />
        </Offline>
      </main>
    </GenresProvider>
  );
};

export default App;

// +Поменять ховер у pagination - +сверстать круг для рейтинга - +сделать уменьшение шрифта больших заголовков - +добавить теги к фильмам
