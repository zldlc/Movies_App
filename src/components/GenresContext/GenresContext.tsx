import React from 'react';
import { IGenre } from '../../types/types';

const GenresContext = React.createContext<IGenre[]>([]);
const { Provider: GenresProvider } = GenresContext;

export { GenresProvider, GenresContext };
