import axios from 'axios';

const API_KEY = 'b141a4401c51589da4a61f34ea996ae0';
const URL = 'https://api.themoviedb.org/3/trending/movie/day';

export const getTrendingMovies = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const trendingMovies = await data.results;

  return trendingMovies;
};
