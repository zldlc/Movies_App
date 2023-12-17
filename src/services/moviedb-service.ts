import axios from 'axios';

import { IGettedMovies, IGettedGenres } from '../types/types';

const _baseUrl: string = 'https://api.themoviedb.org/3';
const _apiKey: string = '41ce144537593cfdda91304d490678fb';

export default class MovieDbService {
  async getMovies(movieName: string, signal?: AbortSignal, page: number = 1): Promise<IGettedMovies> {
    const promise = await axios.get<IGettedMovies>(
      `${_baseUrl}/search/movie?query=${movieName}&include_adult=false&language=en-US&page=${page}&api_key=${_apiKey}`,
      {
        signal,
      }
    );

    return promise.data;
  }

  async getGenres(): Promise<IGettedGenres> {
    const promise = await axios.get<IGettedGenres>(`${_baseUrl}/genre/movie/list?api_key=${_apiKey}`);

    return promise.data;
  }
}
