import React, { FC, useContext } from 'react';

import cutText from '../../utility/cutText';
import decreaseTitle from '../../utility/decreaseTitle';
import checkRatingColorClass from '../../utility/checkRatingColorClass';
import TagList from '../UI/TagList/TagList';
import MovieRate from '../UI/MovieRate/MovieRate';
import { MovieContext } from '../Context/MovieProvider';

import { format } from 'date-fns';

import './MovieCard.scss';
import noImage from './img/no-image.png';

interface IMovieProps {
  onRatingClick: () => void;
}

const MovieCard: FC<IMovieProps> = ({ onRatingClick }) => {
  const { poster_path, release_date, overview, vote_average, original_title, genre_ids } = useContext(MovieContext);
  const poster: string = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noImage;
  const formattedReleaseDate: string = release_date ? format(new Date(release_date), 'MMMM dd, yyyy') : 'Unknown date';
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
          <span className={`movie-card__movie-rating movie-card__movie-rating--${checkRatingColorClass(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
          <span className={`movie-card__title movie-card__title${decreaseTitle(original_title)}`}>
            {original_title}
          </span>
          <span className="movie-card__release-date">{formattedReleaseDate}</span>
          {genre_ids.length !== 0 ? <TagList genres={genre_ids} /> : null}
          <p className="movie-card__overview">{overview ? cuttedText : 'No overview'}</p>
        </div>
        <MovieRate onRatingClick={onRatingClick} />
      </div>
    </li>
  );
};

export default MovieCard;
