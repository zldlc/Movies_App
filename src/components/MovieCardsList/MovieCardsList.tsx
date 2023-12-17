import React, { FC, useContext } from 'react';
import { MovieProvider } from '../Context/MovieProvider';
import { AppContext } from '../Context/AppContext';

import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../../types/types';

import './MovieCardsList.scss';

interface IMovieCardsListProps {
  movies: IMovie[];
}

const MovieCardsList: FC<IMovieCardsListProps> = ({ movies }) => {
  const { onRatingClick } = useContext(AppContext);
  return (
    <ul className="movies-list list-reset">
      {movies.length === 0 ? (
        <span className="not-found-text movies-list__not-found-text">По вашему запросу ничего не найдено</span>
      ) : (
        movies.map((movie) => {
          return (
            <MovieProvider value={movie} key={movie.id}>
              <MovieCard onRatingClick={(rating: number) => onRatingClick(movie.id, rating)} />
            </MovieProvider>
          );
        })
      )}
    </ul>
  );
};

export default MovieCardsList;
