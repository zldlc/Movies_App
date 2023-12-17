import React, { FC, useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';

import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MoviesPagination from '../UI/MoviesPagination/MoviesPagination';
import { calculatePagination } from '../../utility/calculatePagination';

const RatedMoviesPage: FC = () => {
  const { ratedMovies, ratedTotalResults } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const changeCurrentPage = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div className="main__list-wrapper">
      <MovieCardsList movies={calculatePagination(20, ratedMovies, currentPage)} />
      <MoviesPagination
        totalResults={ratedTotalResults}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        movieData={calculatePagination(20, ratedMovies, currentPage)}
      />
    </div>
  );
};

export default RatedMoviesPage;
