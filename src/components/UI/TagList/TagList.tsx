import React, { FC, useContext } from 'react';

import { GenresContext } from '../../Context/GenresContext';

import { Tag, ConfigProvider } from 'antd';

interface ITagListProps {
  genres: number[];
}

const TagList: FC<ITagListProps> = ({ genres }) => {
  const genresList = useContext(GenresContext);
  return (
    <ConfigProvider
      theme={{
        components: {
          Tag: {
            marginXS: 0,
          },
        },
      }}
    >
      <ul className="movie-card__tag-list tag-list list-reset">
        {genres.map((id: number) => {
          let currentGenre = genresList.find((genre) => genre.id === id);
          return (
            <li className="tag-list__tag" key={id}>
              <Tag>{currentGenre ? currentGenre.name : 'Unknown'}</Tag>
            </li>
          );
        })}
      </ul>
    </ConfigProvider>
  );
};

export default TagList;
