import React, { FC } from 'react';

import SearchMoviesPage from '../../SearchMoviesPage/SearchMoviesPage';

import { Tabs, ConfigProvider } from 'antd';
import RatedMoviesPage from '../../RatedMoviesPage/RatedMoviesPage';

const PagesTabs: FC = () => {
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
            children: <SearchMoviesPage />,
          },
          {
            key: '2',
            label: 'Rated',
            children: <RatedMoviesPage />,
          },
        ]}
      />
    </ConfigProvider>
  );
};

export default PagesTabs;
