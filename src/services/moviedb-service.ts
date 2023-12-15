import axios from 'axios';

import { IGettedMovies, IGettedGenres, ICreatedGuestSession } from '../types/types';

const _baseUrl: string = 'https://api.themoviedb.org/3';
const _apiKey: string = '41ce144537593cfdda91304d490678fb';
const _guestSessionID: string = `${sessionStorage.getItem('guestSessionID')}`;

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

  async getGuestSession(): Promise<ICreatedGuestSession> {
    const promise = await axios.get<ICreatedGuestSession>(
      `${_baseUrl}/authentication/guest_session/new?api_key=${_apiKey}`
    );

    return promise.data;
  }

  async getRatedMovies(): Promise<IGettedMovies> {
    const promise = await axios.get(
      `https://api.themoviedb.org/3/guest_session/${_guestSessionID}/rated/movies?language=en-US&page=1&api_key=${_apiKey}`
    );

    return promise.data;
  }

  async addRating(movieID: number, rating: number): Promise<void> {
    await axios.post(`${_baseUrl}/movie/${movieID}/rating?guest_session_id=${_guestSessionID}&api_key=${_apiKey}`, {
      value: rating,
    });
  }
}
