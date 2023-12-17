import React, { FC, useContext } from 'react';
import { MovieContext } from '../../Context/MovieProvider';

import { Rate } from 'antd';

interface IMovieRateProps {
  onRatingClick: (rating: number) => void;
}

const MovieRate: FC<IMovieRateProps> = ({ onRatingClick }) => {
  const movie = useContext(MovieContext);

  const changeRating = (value: number): void => {
    onRatingClick(value);
  };

  return (
    <Rate
      count={10}
      allowHalf={true}
      value={movie.rating}
      allowClear={false}
      className="movie-card__rate"
      onChange={changeRating}
    />
  );
};

export default MovieRate;
