import React, { FC, useContext, useState } from 'react';

import MovieCardsList from '../MovieCardsList/MovieCardsList';

import MoviesPagination from '../UI/MoviesPagination/MoviesPagination';
import { RatedMoviesContext } from '../Context/RatedMoviesContext';

interface IRatedMoviesProps {
  onRatingClick: () => void;
}

const RatedMoviesPage: FC<IRatedMoviesProps> = ({ onRatingClick }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { ratedMovies, totalResults } = useContext(RatedMoviesContext);

  const changeCurrentPage = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div className="main__list-wrapper">
      <MovieCardsList movies={ratedMovies} onRatingClick={onRatingClick} />
      <MoviesPagination
        totalResults={totalResults}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        movieData={ratedMovies}
      />
    </div>
  );
};

export default RatedMoviesPage;
