import React, { FC } from 'react';

import { Spin } from 'antd';

import './Spinner.scss';

const Spinner: FC = () => {
  return (
    <div className="main__spin-container">
      <Spin size="large" className="main__spin spin">
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Spinner;
