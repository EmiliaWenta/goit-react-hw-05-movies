import axios from 'axios';

const API_KEY = 'b141a4401c51589da4a61f34ea996ae0';

export const getMovieByQuery = async query => {
  const URL = 'https://api.themoviedb.org/3/search/movie';
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    query: query,
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const movie = await data.results;

  return movie;
};
