import React, { FC, useState, useContext } from 'react';

import MovieDbService from '../../../services/moviedb-service';
import { MovieContext } from '../../Context/MovieProvider';

import { Rate } from 'antd';

const movieDbService = new MovieDbService();

interface IMovieRateProps {
  onRatingClick: () => void;
}

const MovieRate: FC<IMovieRateProps> = ({ onRatingClick }) => {
  const movie = useContext(MovieContext);
  const [rating, setRating] = useState<number>(movie.rating ? movie.rating : 0);

  const changeRating = async (value: number): Promise<void> => {
    setRating(value);
    await movieDbService.addRating(movie.id, value);
    onRatingClick();
  };

  return (
    <Rate
      count={10}
      allowHalf={true}
      value={rating}
      allowClear={false}
      className="movie-card__rate"
      onChange={changeRating}
    />
  );
};

export default MovieRate;
