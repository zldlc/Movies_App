import axios from 'axios';

import { IGettedMovies, IGettedGenres } from '../types/types';

const _baseUrl: string = 'https://api.themoviedb.org/3';
const _apiKey: string = 'api_key=5e92cf2d755d075cbaacc6780926a22c';

export default class MovieDbService {
  async getMovies(movieName: string, signal?: AbortSignal, page: number = 1): Promise<IGettedMovies> {
    const promise = await axios.get<IGettedMovies>(
      `${_baseUrl}/search/movie?query=${movieName}&include_adult=false&language=en-US&page=${page}&${_apiKey}`,
      {
        signal,
      }
    );

    return promise.data;
  }

  async getGenres(): Promise<IGettedGenres> {
    const promise = await axios.get<IGettedGenres>(`${_baseUrl}/genre/movie/list?${_apiKey}`);

    return promise.data;
  }
}
