import axios from 'axios';

import { getTrendingMoviesURL, searchParams } from '../consts/theMoviesDB';

export const getTrendingMovies = async () => {
  const URL = getTrendingMoviesURL;

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const trendingMovies = await data.results;

  return trendingMovies;
};
