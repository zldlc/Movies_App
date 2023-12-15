import React, { FC } from 'react';

import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../../types/types';
import { MovieProvider } from '../Context/MovieProvider';

import './MovieCardsList.scss';

interface IMovieCardsListProps {
  movies: IMovie[];
  onRatingClick: () => void;
}

const MovieCardsList: FC<IMovieCardsListProps> = ({ movies, onRatingClick }) => {
  return (
    <ul className="movies-list list-reset">
      {movies.length === 0 ? (
        <span className="not-found-text movies-list__not-found-text">По вашему запросу ничего не найдено</span>
      ) : (
        movies.map((movie) => {
          return (
            <MovieProvider value={movie} key={movie.id}>
              <MovieCard onRatingClick={onRatingClick} />
            </MovieProvider>
          );
        })
      )}
    </ul>
  );
};

export default MovieCardsList;
