import React, { FC } from 'react';

import { Tag } from 'antd';

const TagList: FC = () => {
  return (
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
  );
};

export default TagList;
