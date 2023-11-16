import axios from 'axios';

export const getMovieByQuery = async query => {
  const URL = 'https://api.themoviedb.org/3/search/movie';
  const searchParams = new URLSearchParams({
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US',
    query: query,
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const movie = await data.results;

  return movie;
};
