import axios from 'axios';

export const getTrendingMovies = async () => {
  const URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const searchParams = new URLSearchParams({
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US',
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const trendingMovies = await data.results;

  return trendingMovies;
};
