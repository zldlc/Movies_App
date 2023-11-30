import React, { FC } from 'react';
import { IMovie } from '../../types/types';
import MovieCard from '../MovieCard/MovieCard';

import './MovieCardsList.scss';

interface IMovieCardsListProps {
  movies: IMovie[];
}

const MovieCardsList: FC<IMovieCardsListProps> = ({ movies }) => {
  return (
    <ul className="movies-list list-reset">
      {movies.map((movie) => {
        const { id, ...movieProps } = movie;
        return <MovieCard key={id} {...movieProps} />;
      })}
    </ul>
  );
};

export default MovieCardsList;
