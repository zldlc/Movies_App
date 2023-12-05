import React, { FC, useState } from 'react';

import MovieCardsList from '../MovieCardsList/MovieCardsList';

import MoviesPagination from '../UI/MoviesPagination/MoviesPagination';

const RatedMoviesPage: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="main__list-wrapper">
      <MovieCardsList
        movies={[
          {
            id: 550,
            original_title: 'Fight Club',
            overview:
              'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
            poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
            release_date: '1999-10-15',
          },
        ]}
      />
      <MoviesPagination
        totalResults={1}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        movieData={[
          {
            id: 550,
            original_title: 'Fight Club',
            overview:
              'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
            poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
            release_date: '1999-10-15',
          },
        ]}
      />
    </div>
  );
};

export default RatedMoviesPage;
