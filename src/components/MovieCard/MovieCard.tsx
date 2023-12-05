import React, { FC } from 'react';

import cutText from '../../utility/cutText';
import TagList from '../UI/TagList/TagList';

import { format } from 'date-fns';

import './MovieCard.scss';
import noImage from './img/no-image.png';
import MovieRate from '../UI/MovieRate/MovieRate';

interface IMovieProps {
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

const MovieCard: FC<IMovieProps> = ({ original_title, overview, release_date, poster_path }) => {
  const poster: string = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noImage;
  const formattedReleaseDate: string = release_date ? format(new Date(release_date), 'MMMM dd, yyyy') : 'Unknown';
  const cuttedText: string = cutText(overview);

  return (
    <li className="movies-list__movie-card movie-card">
      <img
        className="movie-card__img"
        alt="Movie's Poster"
        src={poster}
        onError={(e) => {
          e.currentTarget.src = noImage;
        }}
      />
      <div className="movie-card__content">
        <div className="movie-card__about-text">
          <span className="movie-card__title">{original_title}</span>
          <span className="movie-card__release-date">{formattedReleaseDate}</span>
          <TagList />
          <p className="movie-card__overview">{overview ? cuttedText : 'No overview'}</p>
        </div>
        <MovieRate />
      </div>
    </li>
  );
};

export default MovieCard;
