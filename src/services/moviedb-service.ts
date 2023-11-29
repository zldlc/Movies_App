import axios from 'axios';
import { IGettedMovies } from '../types/types';

const baseUrl: string = 'https://api.themoviedb.org/3';
const apiKey: string = 'api_key=5e92cf2d755d075cbaacc6780926a22c';

export default class MovieDbService {
  async getMovies(): Promise<IGettedMovies> {
    const promise = await axios.get<IGettedMovies>(
      `${baseUrl}/search/movie?query=a&include_adult=false&language=en-US&page=1&${apiKey}`
    );

    return promise.data;
  }
}
