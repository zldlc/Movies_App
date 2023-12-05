import React, { FC } from 'react';

import PagesTabs from '../UI/PagesTabs/PagesTabs';

import { Alert } from 'antd';
import { Offline } from 'react-detect-offline';

import './App.scss';

const App: FC = () => {
  return (
    <main className="main">
      <PagesTabs />
      <Offline>
        <Alert
          message="Отсутствует подключение к сети. Проверьте подключение и повторите попытку"
          type="error"
          className="main__error-message"
        />
      </Offline>
    </main>
  );
};

export default App;

// +Разнеси по файлам стилевой провайдер - +создать две страницы - +изменить текст ошибки без впн - добавить UI (звездочки)
// Поменять ховер у pagination - сверстать круг для рейтинга - сделать уменьшение шрифта больших заголовков
