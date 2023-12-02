import React, { FC } from 'react';

import MovieCard from '../MovieCard/MovieCard';

import { IMovie } from '../../types/types';

import './MovieCardsList.scss';

interface IMovieCardsListProps {
  movies: IMovie[];
}

const MovieCardsList: FC<IMovieCardsListProps> = ({ movies }) => {
  return (
    <ul className="movies-list list-reset">
      {movies.length === 0 ? (
        <span className="not-found-text movies-list__not-found-text">По вашему запросу ничего не найдено</span>
      ) : (
        movies.map((movie) => {
          const { id, ...movieProps } = movie;
          return <MovieCard key={id} {...movieProps} />;
        })
      )}
    </ul>
  );
};

export default MovieCardsList;
