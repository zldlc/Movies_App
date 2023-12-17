import React from 'react';
import { IAppContext } from '../../types/types';

const AppContext = React.createContext<IAppContext>({
  ratedMovies: [],
  movieData: [],
  ratedTotalResults: 1,
  searchTotalResults: 1,
  isLoading: false,
  isLoadingError: false,
  currentSearchPage: 1,
  changeCurrentPage: () => {},
  onRatingClick: () => {},
  onChangeSearchInput: () => {},
});
const { Provider: AppProvider } = AppContext;

export { AppProvider, AppContext };
