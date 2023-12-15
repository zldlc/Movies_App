import React, { FC } from 'react';

import SearchMoviesPage from '../../SearchMoviesPage/SearchMoviesPage';
import RatedMoviesPage from '../../RatedMoviesPage/RatedMoviesPage';

import { Tabs, ConfigProvider } from 'antd';

interface IPagesTabsProps {
  onRatingClick: () => void;
}

const PagesTabs: FC<IPagesTabsProps> = ({ onRatingClick }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            margin: 20,
          },
        },
      }}
    >
      <Tabs
        size="large"
        defaultActiveKey="1"
        centered
        items={[
          {
            key: '1',
            label: 'Search',
            children: <SearchMoviesPage onRatingClick={onRatingClick} />,
          },
          {
            key: '2',
            label: 'Rated',
            children: <RatedMoviesPage onRatingClick={onRatingClick} />,
          },
        ]}
      />
    </ConfigProvider>
  );
};

export default PagesTabs;
