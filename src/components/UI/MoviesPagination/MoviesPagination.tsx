import React, { FC } from 'react';

import { Pagination, ConfigProvider } from 'antd';

import { IMovie } from '../../../types/types';

interface IMoviesPaginationProps {
  totalResults: number;
  currentPage: number;
  movieData: IMovie[];
  changeCurrentPage: (page: number) => void;
}

const MoviesPagination: FC<IMoviesPaginationProps> = ({ totalResults, currentPage, movieData, changeCurrentPage }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemActiveBg: '#1890FF',
            lineWidth: 0,
            colorPrimary: '#FFF',
            colorPrimaryHover: '#FFF',
          },
        },
      }}
    >
      <Pagination
        defaultCurrent={1}
        total={totalResults}
        pageSize={20}
        showSizeChanger={false}
        current={currentPage}
        onChange={changeCurrentPage}
        hideOnSinglePage={movieData.length === 0}
        className="main__pagination pagination"
      />
    </ConfigProvider>
  );
};

export default MoviesPagination;
