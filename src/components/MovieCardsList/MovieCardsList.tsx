import React, { FC } from 'react';
import { IMovie } from '../../types/types';
import MovieCard from '../MovieCard/MovieCard';

import './MovieCardsList.scss';

interface MovieCardsListProps {
  movies: IMovie[];
}

const MovieCardsList: FC<MovieCardsListProps> = ({ movies }) => {
  return (
    <ul className="movies-list list-reset">
      {movies.map((movie) => {
        const { id } = movie;
        return <MovieCard key={id} {...movie} />;
      })}
    </ul>
  );
};

export default MovieCardsList;
