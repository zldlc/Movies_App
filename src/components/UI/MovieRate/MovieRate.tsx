import React, { FC } from 'react';

import { Rate } from 'antd';

const MovieRate: FC = () => {
  return <Rate count={10} allowHalf={true} className="movie-card__rate" />;
};

export default MovieRate;
