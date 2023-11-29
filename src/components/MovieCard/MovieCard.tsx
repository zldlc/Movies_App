import React, { FC } from 'react';
import { IMovie } from '../../types/types';
import { Tag } from 'antd';
import { format } from 'date-fns';

import './MovieCard.scss';
import noImage from './img/no-image.png';

const MovieCard: FC<IMovie> = ({ original_title, overview, release_date, poster_path }) => {
  const poster: string = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noImage;
  const formattedReleaseDate: string = format(new Date(release_date), 'MMMM dd, yyyy');

  function overviewCut(): string {
    const lastSpaceIndex: number = overview.lastIndexOf(' ', 90);
    const sliced: string = overview.slice(0, lastSpaceIndex);

    return `${sliced}...`;
  }

  return (
    <div className="movies-list__movie-card movie-card">
      <img
        className="movie-card__img"
        alt="Movie's Poster"
        src={poster}
        onError={(e) => {
          e.currentTarget.src = noImage;
        }}
      />
      <div className="movie-card__about-text">
        <span className="movie-card__title">{original_title}</span>
        <span className="movie-card__release-date">{formattedReleaseDate}</span>
        <ul className="movie-card__tag-list tag-list list-reset">
          <li className="tag-list__tag">
            <Tag>Tag 1</Tag>
          </li>
          <li className="tag-list__tag">
            <Tag>Tag 2</Tag>
          </li>
          <li className="tag-list__tag">
            <Tag>Tag 3</Tag>
          </li>
        </ul>
        <p className="movie-card__overview">{overviewCut()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
